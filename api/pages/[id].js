// Vercel serverless function: serve one saved preview page as an image.
// WHEN LIVE: move this file to api/pages/[id].js at the repo root.
// GET /api/pages/<id> -> the stored image bytes with its mime type.

import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  try {
    const id = Number(req.query.id);
    if (!id) return res.status(400).json({ error: 'a numeric page id is required' });
    const rows = await sql`SELECT mime_type, data FROM preview_pages WHERE id = ${id}`;
    if (!rows.length) return res.status(404).json({ error: 'page not found' });
    res.setHeader('Content-Type', rows[0].mime_type);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.status(200).send(rows[0].data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'database error' });
  }
}
