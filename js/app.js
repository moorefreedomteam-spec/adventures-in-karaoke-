// ===== ADVENTURES IN KARAOKE — APP JS =====

// ——— NAVBAR ———
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ——— SONG TABLE ———
let songData = [...SONGS];
let filteredSongs = [...SONGS];

function renderSongs(songs) {
  const tbody = document.getElementById('songTableBody');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('songCount');

  countEl.textContent = `Showing ${songs.length} of ${SONGS.length} songs`;

  if (songs.length === 0) {
    tbody.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  tbody.innerHTML = songs.map(s => `
    <tr>
      <td>${escHtml(s.title)}</td>
      <td>${escHtml(s.artist)}</td>
      <td><span class="genre-tag">${genreLabel(s.genre)}</span></td>
      <td>${formatDate(s.added)}</td>
    </tr>
  `).join('');
}

function genreLabel(g) {
  const map = { pop:'Pop', rock:'Rock', country:'Country', rnb:'R&B', hiphop:'Hip-Hop',
    '80s':'80s', '90s':'90s', latin:'Latin', disney:'Disney', classic:'Classic Rock' };
  return map[g] || g;
}
function formatDate(d) {
  const [y, m] = d.split('-');
  const months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m)]} ${y}`;
}
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function filterSongs() {
  const q = document.getElementById('songSearch').value.toLowerCase().trim();
  const genre = document.getElementById('genreFilter').value;
  filteredSongs = SONGS.filter(s => {
    const matchQ = !q || s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q);
    const matchG = !genre || s.genre === genre;
    return matchQ && matchG;
  });
  renderSongs(filteredSongs);
}

document.getElementById('songSearch').addEventListener('input', filterSongs);
document.getElementById('genreFilter').addEventListener('change', filterSongs);
renderSongs(SONGS);

// ——— SCHEDULE ———
function renderSchedule() {
  const grid = document.getElementById('scheduleGrid');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const todayName = days[new Date().getDay()];

  grid.innerHTML = SCHEDULE.map(s => {
    const isToday = s.day === todayName && s.active;
    return `
      <div class="schedule-card ${isToday ? 'today' : ''}">
        <div class="sched-day">${s.day}</div>
        <div class="sched-venue">${escHtml(s.venue)}</div>
        <div class="sched-address">📍 ${escHtml(s.address)}</div>
        <div class="sched-time">🕗 ${escHtml(s.time)}</div>
        ${!s.active ? '<div style="margin-top:8px;font-size:0.78rem;color:var(--text-muted);font-style:italic">Private event — not open to public</div>' : ''}
      </div>
    `;
  }).join('');
}
renderSchedule();

// ——— SONG REQUESTS ———
// Load requests from localStorage (persists between page visits)
function getRequests() {
  try { return JSON.parse(localStorage.getItem('kj_requests') || '[]'); } catch { return []; }
}
function saveRequests(reqs) {
  localStorage.setItem('kj_requests', JSON.stringify(reqs));
}

function renderRequests() {
  const board = document.getElementById('requestBoard');
  const reqs = getRequests();
  if (reqs.length === 0) {
    board.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1">No requests yet — be the first!</p>';
    return;
  }
  board.innerHTML = reqs.slice().reverse().slice(0, 12).map(r => `
    <div class="req-card">
      <span class="req-status ${r.status === 'added' ? 'status-added' : 'status-pending'}">
        ${r.status === 'added' ? '✓ Added' : '⏳ Pending'}
      </span>
      <div class="req-song">${escHtml(r.song)}</div>
      <div class="req-artist">by ${escHtml(r.artist)}</div>
      <div class="req-by">Requested by ${escHtml(r.name)}</div>
    </div>
  `).join('');
}

document.getElementById('requestForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const req = {
    id: Date.now(),
    name: document.getElementById('reqName').value.trim(),
    email: document.getElementById('reqEmail').value.trim(),
    song: document.getElementById('reqSong').value.trim(),
    artist: document.getElementById('reqArtist').value.trim(),
    note: document.getElementById('reqNote').value.trim(),
    status: 'pending',
    date: new Date().toISOString()
  };
  const reqs = getRequests();
  reqs.push(req);
  saveRequests(reqs);
  this.style.display = 'none';
  document.getElementById('requestSuccess').style.display = 'block';
  renderRequests();
});
renderRequests();

// ——— BOOKING FORM ———
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const booking = {
    id: Date.now(),
    name: document.getElementById('bkName').value.trim(),
    phone: document.getElementById('bkPhone').value.trim(),
    email: document.getElementById('bkEmail').value.trim(),
    type: document.getElementById('bkType').value,
    date: document.getElementById('bkDate').value,
    guests: document.getElementById('bkGuests').value,
    venue: document.getElementById('bkVenue').value.trim(),
    notes: document.getElementById('bkNotes').value.trim(),
    submitted: new Date().toISOString()
  };
  // Save bookings locally
  try {
    const bookings = JSON.parse(localStorage.getItem('kj_bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('kj_bookings', JSON.stringify(bookings));
  } catch {}
  this.style.display = 'none';
  document.getElementById('bookingSuccess').style.display = 'block';
});

// ——— CRM FORM ———
document.getElementById('crmForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const checks = [...document.querySelectorAll('.checkbox-group input:checked')].map(c => c.value);
  const lead = {
    id: Date.now(),
    first: document.getElementById('crmFirst').value.trim(),
    last: document.getElementById('crmLast').value.trim(),
    email: document.getElementById('crmEmail').value.trim(),
    phone: document.getElementById('crmPhone').value.trim(),
    interests: checks,
    date: new Date().toISOString()
  };
  try {
    const leads = JSON.parse(localStorage.getItem('kj_leads') || '[]');
    leads.push(lead);
    localStorage.setItem('kj_leads', JSON.stringify(leads));
  } catch {}
  this.style.display = 'none';
  document.getElementById('crmSuccess').style.display = 'block';
});

// ——— TIP MODAL ———
const tipData = {
  cashapp: { icon: '$', name: 'Cash App', color: '#00d632', handle: '$MacKJKaraoke', note: 'Open your Cash App and send to the handle above.' },
  venmo: { icon: 'V', name: 'Venmo', color: '#3d95ce', handle: '@Mac-McClanahan', note: 'Open Venmo and search for this handle.' },
  zelle: { icon: 'Z', name: 'Zelle', color: '#6d1ed4', handle: 'Ask Mac directly', note: 'Find Mac at the show or message him on Facebook.' },
  card: { icon: '💳', name: 'Card Payment', color: '#ff2d55', handle: 'Via Square', note: 'Ask Mac for the card reader or payment link at the show.' }
};

function showQR(type) {
  const d = tipData[type];
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-tip-icon" style="font-size:2.5rem;background:${d.color}20;width:70px;height:70px;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-weight:900;color:${d.color}">${d.icon}</div>
    <div class="modal-tip-name">${d.name}</div>
    <div class="modal-tip-handle">${d.handle}</div>
    <p class="modal-tip-note">${d.note}</p>
    <div class="qr-placeholder">
      QR code will appear here once<br/>payment handles are confirmed
    </div>
    <p style="font-size:0.8rem;color:var(--text-muted)">Every tip is appreciated! 🙏 Keep the music going!</p>
  `;
  document.getElementById('tipModal').classList.add('open');
}
function closeQR() {
  document.getElementById('tipModal').classList.remove('open');
}

// ——— ADMIN PANEL ———
// Add admin button to DOM
const adminBar = document.createElement('div');
adminBar.className = 'admin-bar';
adminBar.innerHTML = `
  <div class="admin-panel" id="adminPanel">
    <h3>🔐 Admin — Add Song</h3>
    <div class="form-group">
      <label>Song Title</label>
      <input type="text" id="adminTitle" placeholder="Song title" />
    </div>
    <div class="form-group">
      <label>Artist</label>
      <input type="text" id="adminArtist" placeholder="Artist" />
    </div>
    <div class="form-group">
      <label>Genre</label>
      <select id="adminGenre">
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="country">Country</option>
        <option value="rnb">R&B</option>
        <option value="hiphop">Hip-Hop</option>
        <option value="80s">80s</option>
        <option value="90s">90s</option>
        <option value="latin">Latin</option>
        <option value="disney">Disney</option>
        <option value="classic">Classic Rock</option>
      </select>
    </div>
    <button class="btn btn-primary btn-full" id="adminAddBtn">+ Add to Library</button>
    <p class="admin-panel-note">Song adds are temporary until data.js is updated.</p>
    <hr style="border-color:var(--border);margin:16px 0"/>
    <h3>📋 Export CRM Data</h3>
    <button class="btn btn-outline btn-full" id="exportLeads" style="margin-bottom:8px">Export Leads (CSV)</button>
    <button class="btn btn-outline btn-full" id="exportBookings" style="margin-bottom:8px">Export Bookings (CSV)</button>
    <button class="btn btn-outline btn-full" id="exportRequests">Export Song Requests (CSV)</button>
  </div>
  <button class="admin-toggle" id="adminToggle">⚙️ Admin</button>
`;
document.body.appendChild(adminBar);

document.getElementById('adminToggle').addEventListener('click', () => {
  document.getElementById('adminPanel').classList.toggle('open');
});

document.getElementById('adminAddBtn').addEventListener('click', () => {
  const title = document.getElementById('adminTitle').value.trim();
  const artist = document.getElementById('adminArtist').value.trim();
  const genre = document.getElementById('adminGenre').value;
  if (!title || !artist) { alert('Please enter title and artist'); return; }
  const now = new Date();
  const added = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  SONGS.unshift({ title, artist, genre, added });
  filterSongs();
  document.getElementById('adminTitle').value = '';
  document.getElementById('adminArtist').value = '';
  alert(`"${title}" by ${artist} added to the library!`);
});

// Export helpers
function toCSV(rows) {
  if (!rows.length) return 'No data';
  const keys = Object.keys(rows[0]);
  return [keys.join(','), ...rows.map(r => keys.map(k => `"${(r[k]||'').toString().replace(/"/g,'""')}"`).join(','))].join('\n');
}
function downloadCSV(csv, filename) {
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = filename;
  a.click();
}

document.getElementById('exportLeads').addEventListener('click', () => {
  const data = JSON.parse(localStorage.getItem('kj_leads') || '[]');
  downloadCSV(toCSV(data), 'kj_leads.csv');
});
document.getElementById('exportBookings').addEventListener('click', () => {
  const data = JSON.parse(localStorage.getItem('kj_bookings') || '[]');
  downloadCSV(toCSV(data), 'kj_bookings.csv');
});
document.getElementById('exportRequests').addEventListener('click', () => {
  const data = JSON.parse(localStorage.getItem('kj_requests') || '[]');
  downloadCSV(toCSV(data), 'kj_requests.csv');
});

// ——— SMOOTH SECTION ENTRY ANIMATIONS ———
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.style.opacity = '1';
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => {
  s.style.opacity = '0';
  s.style.transition = 'opacity 0.6s ease';
  observer.observe(s);
});
