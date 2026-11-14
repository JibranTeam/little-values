// Vercel serverless function for preview pages.
// WHEN LIVE: move this file to api/pages.js at the repo root and add
// @neondatabase/serverless to package.json (see backend/package.json).
// Requires the DATABASE_URL env var in Vercel (Neon connection string).
//
// GET  /api/pages        -> [{id, slot, file_name, mime_type, url}]
// POST /api/pages        -> {id, slot, file_name}  body: {fileName, mimeType, dataBase64}
//   Uploads go to the first free slot (1-10). Page data is stored as BYTEA.

import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
const MAX_PAGES = 10;

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const rows = await sql`SELECT id, slot, file_name, mime_type FROM preview_pages ORDER BY slot`;
      return res.status(200).json(rows.map(r => ({
        id: r.id, slot: r.slot, file_name: r.file_name,
        mime_type: r.mime_type, url: '/api/pages/' + r.id,
      })));
    }
    if (req.method === 'POST') {
      const { fileName, mimeType, dataBase64 } = req.body || {};
      if (!fileName || !mimeType || !dataBase64) {
        return res.status(400).json({ error: 'fileName, mimeType and dataBase64 are required' });
      }
      if (!mimeType.startsWith('image/')) {
        return res.status(400).json({ error: 'only images can be saved as preview pages' });
      }
      const used = await sql`SELECT slot FROM preview_pages ORDER BY slot`;
      const taken = new Set(used.map(r => r.slot));
      let slot = null;
      for (let i = 1; i <= MAX_PAGES; i++) if (!taken.has(i)) { slot = i; break; }
      if (!slot) return res.status(409).json({ error: 'preview is full — 10 pages already saved' });
      const buf = Buffer.from(dataBase64, 'base64');
      if (buf.length > 5 * 1024 * 1024) {
        return res.status(413).json({ error: 'image is larger than 5 MB' });
      }
      const rows = await sql`INSERT INTO preview_pages (slot, file_name, mime_type, data)
        VALUES (${slot}, ${fileName}, ${mimeType}, ${buf})
        RETURNING id, slot, file_name`;
      return res.status(201).json(rows[0]);
    }
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'database error' });
  }
}
