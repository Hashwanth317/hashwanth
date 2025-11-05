// Express backend with review support
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
if (!fs.existsSync(path.join(__dirname,'uploads'))) fs.mkdirSync(path.join(__dirname,'uploads'));

function readData() { try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8')); } catch { return []; } }
function writeData(arr) { fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2)); }
function genId() { return Math.random().toString(36).slice(2,10); }

app.get('/api/reports', (req, res) => res.json(readData()));

app.post('/api/reports', (req, res) => {
  const body = req.body || {};
  const id = genId();
  const createdAt = new Date().toISOString();
  const priority = inferPriority(body.category || '', body.description || '');
  const department = assignDepartment(body.category || 'Other');
  let photoPath = null;

  if (body.photoDataUrl && typeof body.photoDataUrl === 'string' && body.photoDataUrl.startsWith('data:')) {
    try {
      const m = body.photoDataUrl.match(/^data:(.+);base64,(.*)$/);
      if (m) {
        const ext = m[1].split('/')[1] || 'png';
        const buff = Buffer.from(m[2], 'base64');
        photoPath = path.join('uploads', `${id}.${ext}`);
        fs.writeFileSync(path.join(__dirname, photoPath), buff);
      }
    } catch {}
  }

  const items = readData();
  const report = {
    id, createdAt,
    category: body.category || 'Other',
    description: body.description || '',
    coords: body.coords || { lat: '', lng: '' },
    address: body.address || '',
    status: 'Submitted',
    priority, department,
    photo: photoPath ? ('/' + photoPath) : null,
    updates: [{ at: createdAt, status: 'Submitted', note: 'Report created' }],
    reporter: body.reporter || { name: 'Citizen', phone: '', email: '' },
    review: null
  };
  items.unshift(report);
  writeData(items);
  res.status(201).json(report);
});

// PATCH: status / department / review
app.patch('/api/reports/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body || {};
  const items = readData();
  const idx = items.findIndex(r => r.id === id);
  if (idx < 0) return res.status(404).json({ error: 'Not found' });

  const r = items[idx];
  if (typeof body.status === 'string') {
    r.status = body.status;
    r.updates.push({ at: new Date().toISOString(), status: r.status, note: 'Status updated via API' });
  }
  if (typeof body.department === 'string') {
    r.department = body.department;
    r.updates.push({ at: new Date().toISOString(), status: r.status, note: `Reassigned to ${r.department}` });
  }
  if (body.review && typeof body.review.rating === 'number') {
    r.review = {
      rating: Math.max(1, Math.min(5, body.review.rating)),
      comment: String(body.review.comment || ''),
      at: new Date().toISOString()
    };
    r.updates.push({ at: r.review.at, status: r.status, note: 'Citizen submitted a review' });
  }
  writeData(items);
  res.json(r);
});

app.delete('/api/reports/:id', (req, res) => {
  const { id } = req.params;
  const items = readData().filter(r => r.id !== id);
  writeData(items);
  res.json({ ok: true });
});

function assignDepartment(category) {
  const map = { Pothole: 'Public Works', Streetlight: 'Electrical', Garbage: 'Sanitation', Water: 'Water Board', Safety: 'Traffic Police', Other: 'General Admin' };
  return map[category] || map.Other;
}
function inferPriority(category, description) {
  const t = `${category} ${description}`.toLowerCase();
  if (t.includes('accident') || t.includes('injury') || t.includes('live wire') || t.includes('overflowing')) return 'high';
  if (t.includes('blocked') || t.includes('leak') || t.includes('night')) return 'medium';
  return 'low';
}

app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
