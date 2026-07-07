const WA3_TASKS = [
  { id: 'math-stage3', subject: 'Mathematics', title: 'IPW Stage 3 Submission', date: '2026-07-07', type: 'submission', duration: '9 weeks', marks: '14 marks · 70% of Math IPW component', detail: 'Task given in Term 2 Week 3.' },
  { id: 'sci-prototype', subject: 'Science', title: 'Water Prototype Testing', date: '', type: 'project', duration: '9 weeks', marks: '50% of Science IPW', detail: 'Teacher will inform according to laboratory session.' },
  { id: 'math-stage78', subject: 'Mathematics', title: 'IPW Stage 7 & 8 Submission', date: '2026-07-17', type: 'submission', duration: '2 weeks', marks: '6 marks · 30% of Math IPW component', detail: 'Task given in Term 3 Week 1.' },
  { id: 'sci-report', subject: 'Science', title: 'IPW Report Submission', date: '2026-07-17', type: 'submission', duration: '10 weeks', marks: '50% of Science IPW', detail: 'Task given in Term 2 Week 3.' },
  { id: 'english-written', subject: 'English Language', title: 'Written Test', date: '2026-07-20', altDate: '2026-07-21', type: 'test', duration: '30 min', marks: '30 marks', detail: '20 Jul: 1 Int, 1 Hum, 1, 1 Per, 1 Res, 1 Inn, 1 Exc. 21 Jul: 1 Sin, 1 Gra.' },
  { id: 'history-investigation', subject: 'History', title: 'Historical Investigation Group Task', date: '2026-07-29', type: 'project', duration: '7 weeks', marks: '15 marks', detail: 'Task given in Term 2 Week 10.' },
  { id: 'fce-presentation', subject: 'Food & Consumer Education', title: 'Nutrients Presentation & PowerPoint Slides', date: '2026-07-31', type: 'presentation', duration: '5 weeks', marks: '30 marks', detail: 'Task given in Term 3 Week 1.' },
  { id: 'art-mindmap', subject: 'Art', title: 'Performance Task: Visual Mindmap', date: '2026-07-31', type: 'project', duration: '5 weeks', marks: '15 marks', detail: 'Theme: There is no Planet B. Task given in Term 3 Week 1.' },
  { id: 'lit-little-prince', subject: 'English Literature', title: 'Alternative Assessment', date: '2026-08-05', type: 'submission', duration: '4 weeks', marks: '25 marks', detail: 'Topic: The Little Prince. Format: Character Cards. Task given in Week 2.' },
  { id: 'hcl-written', subject: 'Higher Chinese', title: 'Written Test', date: '2026-08-14', type: 'test', duration: '75 min', marks: '40 marks', detail: 'Topic: 情境记叙文写作. Format: Situational Narrative Essay Writing.' },
  { id: 'hcl-performance', subject: 'Higher Chinese', title: 'Performance Task Submission', date: '2026-08-14', type: 'submission', duration: 'Given in Term 1', marks: '', detail: 'Performance Task submission will be on 14 August too.' },
  { id: 'msp-written', subject: 'MSP', title: 'Written Test', date: '2026-08-25', type: 'test', duration: '50 min', marks: '30 marks', detail: 'Topic: Unit 1–4 Grammar. Format: SLS Quiz. Basic sentence and blog writing.' }
];


const TIMETABLE_DAYS = ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7','Day 8','Day 9','Day 10'];
const TIMETABLE = {
  'Day 1': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'CCE', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'Music', teacher: 'Gladys', venue: 'Music' },
    { time: '9:20–10:00', subject: 'PE (LS)', teacher: 'Andrew', venue: 'School Hall 1' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '11:20–12:00', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '12:00–12:40', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '12:40–14:00', subject: 'History', teacher: 'NeoCW', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 2': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '8:40–10:00', subject: 'FCE', teacher: 'LowZY / ChuaXF', venue: 'FN1' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '11:20–12:40', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '12:40–14:00', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' },
    { time: '15:00–17:20', subject: 'MSP', teacher: 'Maizurah', venue: '' }
  ],
  'Day 3': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'AS', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '9:20–10:00', subject: 'History', teacher: 'NeoCW', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–12:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '12:00–13:20', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '13:20–14:00', subject: 'Art', teacher: 'Faizal / Insyirah', venue: 'ART2' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 4': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '8:40–10:00', subject: 'CI', teacher: 'LiuZB', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'Geography', teacher: 'LokLM', venue: '' },
    { time: '11:20–12:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '12:00–12:40', subject: 'PE (LS)', teacher: 'Andrew', venue: 'ISH L2' },
    { time: '12:40–14:00', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 5': [
    { time: '7:40–8:00', subject: 'S/Love My Sch', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'TSI', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'MASSP', teacher: 'ChooSY / YarRM / Raffi / Andrew / CheanKX / TanYB', venue: 'ISH L1 / ISH L2' },
    { time: '9:20–10:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–12:00', subject: 'Science', teacher: 'LeowSH', venue: 'BI2' },
    { time: '12:00–13:20', subject: 'Literature', teacher: 'Shahnaaz', venue: '' },
    { time: '13:20–14:00', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 6': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'CCE', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'PE (LS)', teacher: 'Andrew', venue: 'School Hall 1' },
    { time: '9:20–10:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '10:00–10:40', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '10:40–11:20', subject: 'Recess', teacher: '', venue: '' },
    { time: '11:20–12:40', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '12:40–13:20', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '13:20–14:00', subject: 'Geography', teacher: 'LokLM', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 7': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'Literature', teacher: 'Shahnaaz', venue: '' },
    { time: '8:40–10:00', subject: 'FCE', teacher: 'LowZY / ChuaXF', venue: 'FN2' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '11:20–12:40', subject: 'Geography', teacher: 'LokLM', venue: '' },
    { time: '12:40–14:00', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' },
    { time: '15:00–17:20', subject: 'MSP', teacher: 'Maizurah', venue: '' }
  ],
  'Day 8': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'AS', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'CI', teacher: 'LiuZB', venue: '' },
    { time: '9:20–10:00', subject: 'Music', teacher: 'Gladys', venue: 'Music' },
    { time: '10:00–10:40', subject: 'MASSP', teacher: 'ChooSY / YarRM / Raffi / Andrew / CheanKX / TanYB', venue: 'ISH L1 / School Hall 1' },
    { time: '10:40–11:20', subject: 'Recess', teacher: '', venue: '' },
    { time: '11:20–12:40', subject: 'ALP1', teacher: 'LeowSH / ALP', venue: 'LAB1' },
    { time: '12:40–14:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 9': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'CI', teacher: 'LiuZB', venue: '' },
    { time: '8:40–9:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '9:20–10:00', subject: 'PE (LS)', teacher: 'Andrew', venue: 'School Field' },
    { time: '10:00–10:40', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '10:40–11:20', subject: 'Recess', teacher: '', venue: '' },
    { time: '11:20–12:40', subject: 'Art', teacher: 'Faizal / Insyirah', venue: 'ART2' },
    { time: '12:40–13:20', subject: 'Literature', teacher: 'Shahnaaz', venue: '' },
    { time: '13:20–14:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 10': [
    { time: '7:40–8:00', subject: 'S/Love My Sch', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'TSI', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–10:00', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–12:00', subject: 'Science', teacher: 'LeowSH', venue: 'BI2' },
    { time: '12:00–12:40', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '12:40–13:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '13:20–14:00', subject: 'History', teacher: 'NeoCW', venue: '' },
    { time: '14:00–15:00', subject: 'Lunch', teacher: '', venue: '' }
  ]
};

const PACK_ITEMS = {
  'DEAR time': ['reading book'],
  'HCL': ['Higher Chinese textbook / file'],
  'English': ['English file / worksheet'],
  'Mathematics': ['Math textbook / worksheet', 'calculator', 'geometry set if needed'],
  'Science': ['Science file / notes', 'lab book if needed'],
  'History': ['History file'],
  'Geography': ['Geography file'],
  'Literature': ['Literature book / file'],
  'FCE': ['FCE file', 'materials teacher requested'],
  'Art': ['Art materials', 'visual journal / sketchbook'],
  'Music': ['Music file / materials'],
  'PE (LS)': ['PE attire', 'water bottle'],
  'MASSP': ['sports attire', 'water bottle'],
  'MSP': ['MSP file / worksheet'],
  'ALP1': ['ALP notes / worksheet'],
  'CI': ['CI file / materials'],
  'CCE': ['school diary'],
  'AS': ['AS materials if assigned'],
  'TSI': ['TSI materials if assigned']
};

const QUESTION_BANK = {
  Mathematics: {
    'Algebra': [
      { q: 'Simplify: 3x + 2x - x', options: ['4x', '5x', '6x', '3x'], answer: '4x', explain: 'Combine like terms: 3x + 2x - x = 4x.' },
      { q: 'If 2x = 18, what is x?', options: ['6', '8', '9', '16'], answer: '9', explain: 'Divide both sides by 2.' },
      { q: 'Expand: 2(a + 5)', options: ['2a + 5', '2a + 10', 'a + 10', '7a'], answer: '2a + 10', explain: 'Multiply 2 by both terms inside the bracket.' },
      { q: 'Simplify: 7y - 3y + 2', options: ['4y + 2', '6y', '10y + 2', '4y - 2'], answer: '4y + 2', explain: '7y - 3y = 4y, then keep +2.' },
      { q: 'If x + 7 = 15, what is x?', options: ['7', '8', '9', '22'], answer: '8', explain: 'Subtract 7 from both sides.' }
    ],
    'Ratio & Percentage': [
      { q: 'What is 25% of 80?', options: ['15', '20', '25', '40'], answer: '20', explain: '25% is one quarter. One quarter of 80 is 20.' },
      { q: 'Simplify the ratio 12:18.', options: ['2:3', '3:2', '4:9', '6:9'], answer: '2:3', explain: 'Divide both numbers by 6.' },
      { q: 'A shirt costs $40 after a 20% discount. What was the discount amount?', options: ['$5', '$8', '$10', '$20'], answer: '$10', explain: 'If $40 is 80%, original is $50, so discount is $10.' }
    ]
  },
  Science: {
    'Cells & Systems': [
      { q: 'Which part of the cell controls activities?', options: ['Nucleus', 'Cell wall', 'Vacuole', 'Cytoplasm'], answer: 'Nucleus', explain: 'The nucleus controls cell activities.' },
      { q: 'Which cell part is found in plant cells but not animal cells?', options: ['Cell wall', 'Nucleus', 'Cytoplasm', 'Cell membrane'], answer: 'Cell wall', explain: 'Plant cells have cell walls; animal cells do not.' },
      { q: 'What is the function of the cell membrane?', options: ['Controls what enters and leaves', 'Makes food', 'Stores water only', 'Controls the whole cell'], answer: 'Controls what enters and leaves', explain: 'The cell membrane controls movement of substances in and out.' }
    ],
    'Water & Mixtures': [
      { q: 'Which method separates insoluble solid from liquid?', options: ['Filtration', 'Evaporation', 'Condensation', 'Freezing'], answer: 'Filtration', explain: 'Filtration separates an insoluble solid from a liquid.' },
      { q: 'Which process changes water vapour to liquid water?', options: ['Condensation', 'Evaporation', 'Melting', 'Boiling'], answer: 'Condensation', explain: 'Condensation is gas to liquid.' },
      { q: 'A clear liquid may still contain dissolved substances. True or false?', options: ['True', 'False'], answer: 'True', explain: 'Dissolved substances may not be visible.' }
    ]
  },
  English: {
    'Grammar': [
      { q: 'Choose the correct sentence.', options: ['He go to school.', 'He goes to school.', 'He going school.', 'He gone to school.'], answer: 'He goes to school.', explain: 'Use “goes” for he/she/it in present tense.' },
      { q: 'Choose the correct word: Evans has ___ his homework.', options: ['do', 'did', 'done', 'doing'], answer: 'done', explain: 'Present perfect uses has/have + past participle.' },
      { q: 'Which is an adjective?', options: ['quickly', 'beautiful', 'run', 'school'], answer: 'beautiful', explain: 'An adjective describes a noun.' }
    ],
    'Writing': [
      { q: 'A good paragraph should usually have...', options: ['one clear main idea', 'many unrelated ideas', 'no examples', 'only one word'], answer: 'one clear main idea', explain: 'A paragraph should be focused.' },
      { q: 'Which phrase is more formal?', options: ['gonna', 'I would like to', 'wanna', 'kinda'], answer: 'I would like to', explain: 'Formal writing avoids slang.' }
    ]
  },
  'Higher Chinese': {
    '情境记叙文': [
      { q: '情境记叙文最重要的是要写清楚什么？', options: ['时间、地点、人物、事情经过', '只写成语', '只写对话', '只写结尾'], answer: '时间、地点、人物、事情经过', explain: '记叙文需要交代清楚基本要素和事情发展。' },
      { q: '描写人物心情时，哪一种写法更具体？', options: ['我很开心', '我高兴得差点跳起来', '开心', '很好'], answer: '我高兴得差点跳起来', explain: '具体动作能让心情描写更生动。' }
    ]
  }
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const LS = {
  wa3Done: 'eshq_v2_wa3_done',
  wa3Notes: 'eshq_v2_wa3_notes',
  focusDone: 'eshq_v2_focus_done',
  planner: 'eshq_v2_planner',
  mistakes: 'eshq_v2_mistakes',
  mastered: 'eshq_v2_mastered',
  history: 'eshq_v2_history',
  streak: 'eshq_v2_streak',
  cycleDay: 'eshq_v4_cycle_day',
  audit: 'eshq_v5_audit',
  evidence: 'eshq_v5_evidence',
  lastOpen: 'eshq_v5_last_open',
  previousOpen: 'eshq_v5_previous_open'
};

const state = {
  currentFilter: 'all',
  practiceRound: null,
  currentQuestionIndex: 0,
  score: 0
};

const CLOUD_SYNC = {
  enabled: false,
  ready: false,
  state: {},
  student: 'evans',
  pending: 0,
  lastError: ''
};

function cloudKeys() {
  return Array.from(new Set(Object.values(LS).filter(Boolean)));
}

function setSyncStatus(text, mode = 'neutral') {
  const el = document.getElementById('syncStatusPill');
  if (!el) return;
  el.textContent = text;
  el.dataset.mode = mode;
}

async function initCloudSync() {
  setSyncStatus('Syncing…');
  try {
    const res = await fetch(`/api/state?student=${encodeURIComponent(CLOUD_SYNC.student)}&t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Cloud state failed: ${res.status}`);
    const data = await res.json();
    CLOUD_SYNC.enabled = true;
    CLOUD_SYNC.ready = true;
    CLOUD_SYNC.state = data.state || {};

    // Mirror cloud values into localStorage so the site can still work offline.
    Object.entries(CLOUD_SYNC.state).forEach(([key, value]) => {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
    });

    // First-time migration: if the cloud has no value for a key but this browser has one, upload it.
    for (const key of cloudKeys()) {
      if (Object.prototype.hasOwnProperty.call(CLOUD_SYNC.state, key)) continue;
      const raw = localStorage.getItem(key);
      if (raw == null) continue;
      try {
        const value = JSON.parse(raw);
        CLOUD_SYNC.state[key] = value;
        cloudSave(key, value);
      } catch {}
    }
    setSyncStatus('Cloud sync on', 'ok');
  } catch (err) {
    CLOUD_SYNC.enabled = false;
    CLOUD_SYNC.ready = true;
    CLOUD_SYNC.lastError = err?.message || String(err);
    console.warn('Cloud sync unavailable; using this browser only.', err);
    setSyncStatus('Local only', 'warn');
  }
}

async function cloudSave(key, value) {
  if (!CLOUD_SYNC.enabled) return;
  CLOUD_SYNC.pending += 1;
  setSyncStatus('Saving…');
  try {
    const res = await fetch('/api/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student: CLOUD_SYNC.student, key, value })
    });
    if (!res.ok) throw new Error(`Cloud save failed: ${res.status}`);
    setSyncStatus('Saved to cloud', 'ok');
  } catch (err) {
    CLOUD_SYNC.lastError = err?.message || String(err);
    console.warn('Cloud save failed; value kept locally.', err);
    setSyncStatus('Save failed', 'error');
  } finally {
    CLOUD_SYNC.pending = Math.max(0, CLOUD_SYNC.pending - 1);
  }
}

function load(key, fallback) {
  if (CLOUD_SYNC.ready && Object.prototype.hasOwnProperty.call(CLOUD_SYNC.state, key)) {
    return CLOUD_SYNC.state[key] ?? fallback;
  }
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  if (CLOUD_SYNC.ready) {
    CLOUD_SYNC.state[key] = value;
    cloudSave(key, value);
  }
}
function todayDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
function parseDate(dateStr) {
  if (!dateStr) return null;
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function daysUntil(dateStr) {
  const d = parseDate(dateStr);
  if (!d) return null;
  return Math.ceil((d - todayDate()) / 86400000);
}
function formatDate(dateStr) {
  if (!dateStr) return 'TBC';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-SG', { day: 'numeric', month: 'short' });
}
function formatLongDate(dateStr) {
  if (!dateStr) return 'Teacher will inform';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('en-SG', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}
function shortTime(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-SG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}
function markVisit() {
  const now = new Date().toISOString();
  const last = load(LS.lastOpen, '');
  if (last) save(LS.previousOpen, last);
  save(LS.lastOpen, now);
}
function getAudit() { return load(LS.audit, []); }
function setAudit(list) { save(LS.audit, list.slice(-80)); }
function getEvidence() { return load(LS.evidence, {}); }
function setEvidence(obj) { save(LS.evidence, obj); }
function recordAudit(entry) {
  const list = getAudit();
  list.push({ ...entry, ts: new Date().toISOString() });
  setAudit(list);
}
function evidenceKey(type, id) { return `${type}:${id}`; }
function saveEvidence(type, id, text) {
  const ev = getEvidence();
  ev[evidenceKey(type, id)] = { text, ts: new Date().toISOString() };
  setEvidence(ev);
}
function getEvidenceItem(type, id) {
  return getEvidence()[evidenceKey(type, id)] || null;
}
function requestEvidence(label) {
  const text = prompt(`Quick proof check\n\nWhat did you actually do for:\n${label}\n\nWrite 2–8 words, e.g. "finished Q1-Q6" or "packed PE shirt".`);
  if (!text || !text.trim()) return null;
  return text.trim().slice(0, 120);
}
function completionMeta(type, id) {
  const ev = getEvidenceItem(type, id);
  if (!ev) return '<span class="proof-missing">Proof needed when completed</span>';
  return `<span class="proof-line">✓ ${ev.text}</span><span class="time-line">Completed ${shortTime(ev.ts)}</span>`;
}
function getRecentAudit(limit = 6) {
  return getAudit().slice().reverse().slice(0, limit);
}
function auditWarning() {
  const recent = getRecentAudit(8);
  if (!recent.length) return 'No checked tasks yet. Complete one task with proof to start the audit trail.';
  const last = recent[0];
  const tenMins = 10 * 60 * 1000;
  const now = new Date(last.ts).getTime();
  const burst = recent.filter(a => now - new Date(a.ts).getTime() <= tenMins && a.checked).length;
  if (burst >= 3) return `Heads up: ${burst} tasks were ticked within 10 minutes. Check the proof if needed.`;
  return `Latest proof: ${last.label || last.id} · ${shortTime(last.ts)}`;
}

function getWa3Done() { return load(LS.wa3Done, {}); }
function setWa3Done(obj) { save(LS.wa3Done, obj); }
function getWa3Notes() { return load(LS.wa3Notes, {}); }
function setWa3Notes(obj) { save(LS.wa3Notes, obj); }
function getPlanner() {
  const defaultPlanner = {
    Monday: [{ id: 'mon-pack', text: 'Check school diary and pack files for tomorrow', type: 'Pack', done: false }],
    Tuesday: [{ id: 'tue-wa3', text: 'Check the next WA3 deadline', type: 'Project', done: false }],
    Wednesday: [{ id: 'wed-revision', text: 'Complete one Revision Lab practice round', type: 'Revision', done: false }],
    Thursday: [{ id: 'thu-mistake', text: 'Review one mistake from Mistake Book', type: 'Revision', done: false }],
    Friday: [{ id: 'fri-week', text: 'Plan next week and clear unfinished tasks', type: 'Homework', done: false }],
    Saturday: [{ id: 'sat-wa3', text: 'Work on one WA3 project or submission', type: 'Project', done: false }],
    Sunday: [{ id: 'sun-pack', text: 'Pack bag and files for Monday', type: 'Pack', done: false }]
  };
  return load(LS.planner, defaultPlanner);
}
function setPlanner(planner) { save(LS.planner, planner); }
function getMistakes() { return load(LS.mistakes, []); }
function setMistakes(list) { save(LS.mistakes, list); }
function getMastered() { return load(LS.mastered, []); }
function setMastered(list) { save(LS.mastered, list); }
function getHistory() { return load(LS.history, []); }
function setHistory(list) { save(LS.history, list); }
function getFocusTasks() {
  const upcoming = getUpcomingIncomplete()[0];
  const title = upcoming ? `Complete next WA3 task: ${upcoming.subject} — ${upcoming.title}` : 'Check the WA3 Board';
  return [
    {
      id: upcoming ? `focus-deadline-${upcoming.id}` : 'focus-deadline-clear',
      text: title,
      sub: upcoming ? `Due ${formatLongDate(upcoming.date)}` : 'Everything is loaded',
      wa3Id: upcoming ? upcoming.id : ''
    },
    { id: 'focus-practice', text: 'Complete one short Revision Lab round', sub: '5 questions is enough to start' },
    { id: 'focus-pack', text: 'Pack files for tomorrow', sub: `Use Timetable: ${getNextCycleDay(getSelectedCycleDay())}` }
  ];
}
function getUpcomingIncomplete() {
  const done = getWa3Done();
  return WA3_TASKS
    .filter(t => !done[t.id])
    .sort((a, b) => {
      const da = parseDate(a.date)?.getTime() ?? Infinity;
      const db = parseDate(b.date)?.getTime() ?? Infinity;
      return da - db;
    });
}
function toast(message) {
  const el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

function switchSection(id) {
  if (id === 'mistakes') id = 'revision';
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active-section', s.id === id));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.section === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderAll();
}

function renderDashboard() {
  document.getElementById('todayLabel').textContent = new Date().toLocaleDateString('en-SG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  renderFocus();
  renderNextDeadline();
  renderWa3ProgressMini();
  renderUpcomingDeadlines();
  renderParentSummary();
  renderWeekPreview();
  renderTimetableDashboard();
  renderAuditStatus();
}

function renderFocus() {
  const focusDone = load(LS.focusDone, {});
  const tasks = getFocusTasks();
  const list = document.getElementById('todayFocusList');
  list.innerHTML = tasks.map(t => `
    <label class="task-row ${focusDone[t.id] ? 'done' : ''}">
      <input type="checkbox" data-focus-id="${t.id}" ${t.wa3Id ? `data-focus-wa3-id="${t.wa3Id}"` : ''} ${focusDone[t.id] ? 'checked' : ''} />
      <span class="task-text"><strong>${t.text}</strong><span>${t.sub}</span></span>
    </label>
  `).join('');
  const count = tasks.filter(t => focusDone[t.id]).length;
  document.getElementById('focusCountBadge').textContent = `${count}/3`;
}

function renderNextDeadline() {
  const upcoming = getUpcomingIncomplete()[0];
  const card = document.getElementById('nextDeadlineCard');
  const badge = document.getElementById('nextDeadlineUrgency');
  const bar = document.getElementById('deadlineTimeBar');
  if (!upcoming) {
    card.innerHTML = `<strong>All WA3 missions completed</strong><p>Great job. Keep reviewing mistakes and practising.</p><div class="days-left">Done</div>`;
    badge.textContent = 'Clear';
    badge.classList.remove('danger');
    bar.style.width = '100%';
    return;
  }
  const days = daysUntil(upcoming.date);
  let label = 'Soon';
  if (days === null) label = 'TBC';
  else if (days < 0) label = 'Overdue';
  else if (days <= 3) label = 'Urgent';
  else if (days <= 10) label = 'Soon';
  else label = 'Upcoming';
  badge.textContent = label;
  badge.classList.toggle('danger', days !== null && days <= 3);
  const daysText = days === null ? 'TBC' : days < 0 ? `${Math.abs(days)} days overdue` : days === 0 ? 'Due today' : `${days} days left`;
  card.innerHTML = `<strong>${formatLongDate(upcoming.date)}</strong><p>${upcoming.subject} · ${upcoming.title}</p><div class="days-left">${daysText}</div>`;
  const pct = days === null ? 25 : Math.max(8, Math.min(100, 100 - (days / 30) * 100));
  bar.style.width = `${pct}%`;
}

function renderWa3ProgressMini() {
  const done = getWa3Done();
  const completed = WA3_TASKS.filter(t => done[t.id]).length;
  const total = WA3_TASKS.length;
  const pct = Math.round((completed / total) * 100);
  document.getElementById('wa3ProgressText').textContent = `${completed} / ${total}`;
  document.getElementById('wa3PercentBadge').textContent = `${pct}%`;
  document.getElementById('wa3ProgressBar').style.width = `${pct}%`;
  document.getElementById('wa3Encouragement').textContent = completed === 0
    ? '12 missions are already loaded. Start with the next deadline.'
    : completed < total
      ? 'Keep going. Finish the next small mission first.'
      : 'All WA3 missions are complete. Well done.';
  document.getElementById('wa3HeaderCompleted').textContent = `${completed}/${total}`;
}

function renderUpcomingDeadlines() {
  const list = document.getElementById('upcomingDeadlines');
  const upcoming = getUpcomingIncomplete().filter(t => t.date).slice(0, 5);
  if (!upcoming.length) {
    list.innerHTML = `<div class="empty-state"><h3>No upcoming dated tasks</h3><p>Check teacher-announced items and keep practising.</p></div>`;
    return;
  }
  list.innerHTML = upcoming.map(t => {
    const days = daysUntil(t.date);
    const status = days === 0 ? 'Today' : days < 0 ? 'Overdue' : `${days}d left`;
    return `
      <div class="deadline-item">
        <div class="date-badge"><strong>${formatDate(t.date).split(' ')[0]}</strong><small>${formatDate(t.date).split(' ')[1] || ''}</small></div>
        <div class="deadline-title"><strong>${t.subject}</strong><span>${t.title}</span></div>
        <span class="status-badge">${status}</span>
      </div>
    `;
  }).join('');
}

function renderParentSummary() {
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const recent = getRecentAudit(1)[0];
  const prevOpen = load(LS.previousOpen, '');
  document.getElementById('parentSummary').innerHTML = `
    <div class="summary-tile"><strong>${wa3Done}/${WA3_TASKS.length}</strong><span>WA3 completed</span></div>
    <div class="summary-tile"><strong>${plannerDone}/${plannerTasks.length}</strong><span>weekly tasks done</span></div>
    <div class="summary-tile"><strong>${prevOpen ? shortTime(prevOpen) : 'First visit'}</strong><span>previous open</span></div>
    <div class="summary-tile"><strong>${recent ? shortTime(recent.ts) : 'No proof yet'}</strong><span>latest task proof</span></div>
  `;
  const nudge = document.getElementById('auditNudge');
  if (nudge) nudge.textContent = auditWarning();
}

function renderAuditStatus() {
  const pill = document.getElementById('lastOpenedPill');
  if (pill) pill.textContent = `Last opened: ${formatDateTime(load(LS.lastOpen, ''))}`;
}

function renderWeekPreview() {
  const planner = getPlanner();
  document.getElementById('weekPreview').innerHTML = DAYS.map(day => {
    const tasks = (planner[day] || []).slice(0, 3);
    return `<div class="day-preview"><h4>${day.slice(0, 3)}</h4>${tasks.length ? tasks.map(t => `<p>${t.done ? '✅' : '□'} ${t.text}</p>`).join('') : '<p>No task yet</p>'}</div>`;
  }).join('');
}

function renderWa3Board() {
  renderWa3ProgressMini();
  const done = getWa3Done();
  const notes = getWa3Notes();
  const tasks = WA3_TASKS.filter(t => state.currentFilter === 'all' || t.type === state.currentFilter);
  document.getElementById('wa3TaskList').innerHTML = tasks.map(t => {
    const dateDisplay = formatDate(t.date);
    return `
      <article class="wa3-card ${done[t.id] ? 'done' : ''}">
        <div class="wa3-main">
          <div class="date-badge"><strong>${dateDisplay.split(' ')[0]}</strong><small>${dateDisplay.split(' ')[1] || ''}</small></div>
          <div>
            <h3>${t.subject}</h3>
            <div class="wa3-meta"><strong>${t.title}</strong><br>${[t.duration, t.marks].filter(Boolean).join(' · ')}</div>
            <span class="type-badge">${t.type}</span>
          </div>
          <label class="done-toggle"><input type="checkbox" data-wa3-id="${t.id}" ${done[t.id] ? 'checked' : ''}>Done</label>
        </div>
        <div class="wa3-meta" style="margin-top:10px;">${t.detail}</div>
        <div class="completion-meta">${done[t.id] ? completionMeta('wa3', t.id) : '<span class="proof-missing">When done, Evans must add quick proof.</span>'}</div>
        <details class="notes-box" ${notes[t.id] ? 'open' : ''}>
          <summary>Notes / things to remember</summary>
          <textarea data-note-id="${t.id}" placeholder="Add teacher instructions, materials to bring, links, or reminders...">${notes[t.id] || ''}</textarea>
        </details>
      </article>
    `;
  }).join('');
}

function plannerDayName(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString('en-US', { weekday: 'long' });
}
function plannerDayShort(day) {
  return day.slice(0, 3);
}
function renderPlannerTask(task, day, options = {}) {
  const meta = task.done ? completionMeta('planner', task.id) : '<span class="proof-chip">Proof needed</span>';
  const typeClass = (task.type || 'Task').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `
    <div class="planner-list-item ${task.done ? 'done' : ''} ${options.compact ? 'compact' : ''}">
      <input type="checkbox" data-plan-day="${day}" data-plan-id="${task.id}" ${task.done ? 'checked' : ''} aria-label="Complete ${task.text}">
      <div class="planner-item-main">
        <div class="planner-item-title">${options.showDay ? `<span class="day-pill">${plannerDayShort(day)}</span>` : ''}<strong>${task.text}</strong></div>
        <div class="planner-item-meta"><span class="type-dot ${typeClass}">${task.type || 'Task'}</span>${meta}</div>
      </div>
      <div class="planner-item-actions">
        <button data-move-day="${day}" data-move-id="${task.id}">Move</button>
        <button data-delete-day="${day}" data-delete-id="${task.id}">Delete</button>
      </div>
    </div>
  `;
}
function renderPlannerGroup(title, subtitle, tasks, className, emptyText, options = {}) {
  return `
    <article class="planner-group ${className || ''}">
      <div class="planner-group-head">
        <div>
          <h3>${title}</h3>
          ${subtitle ? `<p>${subtitle}</p>` : ''}
        </div>
        <span class="group-count">${tasks.length}</span>
      </div>
      <div class="planner-list">
        ${tasks.length ? tasks.map(item => renderPlannerTask(item.task, item.day, options)).join('') : `<div class="empty-small">${emptyText}</div>`}
      </div>
    </article>
  `;
}
function renderPlanner() {
  const planner = getPlanner();
  const todayName = DAYS.includes(plannerDayName(0)) ? plannerDayName(0) : 'Monday';
  const tomorrowName = DAYS.includes(plannerDayName(1)) ? plannerDayName(1) : DAYS[(DAYS.indexOf(todayName) + 1) % DAYS.length];
  const todayTasks = (planner[todayName] || []).map(task => ({ day: todayName, task }));
  const tomorrowTasks = (planner[tomorrowName] || []).map(task => ({ day: tomorrowName, task }));
  const laterTasks = DAYS
    .filter(day => day !== todayName && day !== tomorrowName)
    .flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const allTasks = DAYS.flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const doneCount = allTasks.filter(item => item.task.done).length;

  document.getElementById('plannerGrid').innerHTML = `
    <div class="planner-summary-strip">
      <div><strong>${doneCount}/${allTasks.length}</strong><span>tasks completed this week</span></div>
      <div><strong>${todayTasks.length}</strong><span>today</span></div>
      <div><strong>${tomorrowTasks.length}</strong><span>tomorrow</span></div>
    </div>
    <div class="planner-flow">
      <div class="planner-priority-col">
        ${renderPlannerGroup(`Today · ${todayName}`, 'Do these first. Tick only after adding quick proof.', todayTasks, 'today-group', 'No tasks for today. Add one small task to get started.')}
        ${renderPlannerGroup(`Tomorrow · ${tomorrowName}`, 'Prepare early so it does not become last-minute.', tomorrowTasks, 'tomorrow-group', 'No tasks for tomorrow yet.')}
      </div>
      ${renderPlannerGroup('Later this week', 'Keep the rest visible, but not overwhelming.', laterTasks, 'later-group', 'No later tasks planned yet.', { showDay: true, compact: true })}
    </div>
  `;
}

function renderRevisionControls() {
  const subjectSelect = document.getElementById('subjectSelect');
  const currentSubject = subjectSelect.value || Object.keys(QUESTION_BANK)[0];
  subjectSelect.innerHTML = Object.keys(QUESTION_BANK).map(s => `<option value="${s}">${s}</option>`).join('');
  subjectSelect.value = QUESTION_BANK[currentSubject] ? currentSubject : Object.keys(QUESTION_BANK)[0];
  renderTopicOptions();
  renderPracticeHistoryMini();
}
function renderTopicOptions() {
  const subject = document.getElementById('subjectSelect').value;
  const topicSelect = document.getElementById('topicSelect');
  topicSelect.innerHTML = Object.keys(QUESTION_BANK[subject]).map(t => `<option value="${t}">${t}</option>`).join('');
}
function renderPracticeHistoryMini() {
  const history = getHistory();
  const last = history[history.length - 1];
  document.getElementById('lastScoreLabel').textContent = last ? `${last.score}/${last.total}` : '—';
  document.getElementById('practiceHistoryMini').innerHTML = last ? `
    <strong>Last round</strong><br>${last.subject} · ${last.topic}<br>Score: ${last.score}/${last.total}<br>${new Date(last.date).toLocaleDateString('en-SG')}
  ` : `<strong>No practice history yet.</strong><br>Start one short round to unlock your first score.`;
}
function startPracticeRound() {
  const subject = document.getElementById('subjectSelect').value;
  const topic = document.getElementById('topicSelect').value;
  const count = Number(document.getElementById('questionCountSelect').value);
  const source = QUESTION_BANK[subject][topic];
  const questions = [...source].sort(() => Math.random() - 0.5).slice(0, Math.min(count, source.length));
  state.practiceRound = { subject, topic, questions, answers: [] };
  state.currentQuestionIndex = 0;
  state.score = 0;
  renderQuestion();
}
function renderQuestion() {
  const round = state.practiceRound;
  const area = document.getElementById('questionArea');
  if (!round) return;
  if (state.currentQuestionIndex >= round.questions.length) {
    finishPracticeRound();
    return;
  }
  const q = round.questions[state.currentQuestionIndex];
  area.className = '';
  area.innerHTML = `
    <div class="question-top"><span class="mini-badge">Question ${state.currentQuestionIndex + 1}/${round.questions.length}</span><span class="mini-badge">Score ${state.score}</span></div>
    <div class="question-text">${q.q}</div>
    <div class="option-grid">${q.options.map(opt => `<button class="option-btn" data-answer="${encodeURIComponent(opt)}">${opt}</button>`).join('')}</div>
    <div id="questionFeedback"></div>
  `;
}
function answerQuestion(answer) {
  const round = state.practiceRound;
  const q = round.questions[state.currentQuestionIndex];
  const correct = answer === q.answer;
  if (correct) state.score += 1;
  else addMistake(round.subject, round.topic, q, answer);
  const feedback = document.getElementById('questionFeedback');
  feedback.innerHTML = `<div class="feedback ${correct ? 'correct' : 'wrong'}">${correct ? 'Correct ✅' : `Not yet. Correct answer: ${q.answer}`}<br><small>${q.explain}</small></div>`;
  document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
  setTimeout(() => { state.currentQuestionIndex += 1; renderQuestion(); }, 1300);
}
function finishPracticeRound() {
  const round = state.practiceRound;
  const history = getHistory();
  history.push({ subject: round.subject, topic: round.topic, score: state.score, total: round.questions.length, date: new Date().toISOString() });
  setHistory(history);
  document.getElementById('questionArea').innerHTML = `
    <div class="empty-state"><h3>Round complete</h3><p>Your score: <strong>${state.score}/${round.questions.length}</strong></p><p>Wrong answers have been saved to the Mistake Book.</p><button class="primary-action" id="practiceAgainBtn">Practise again</button></div>
  `;
  state.practiceRound = null;
  renderPracticeHistoryMini();
  renderParentSummary();
  toast('Practice round saved');
}
function addMistake(subject, topic, q, selected) {
  const mistakes = getMistakes();
  const exists = mistakes.find(m => m.q === q.q && m.subject === subject);
  if (exists) {
    exists.lastSelected = selected;
    exists.correctCount = 0;
    exists.updatedAt = new Date().toISOString();
  } else {
    mistakes.push({ id: `m-${Date.now()}-${Math.random().toString(16).slice(2)}`, subject, topic, q: q.q, answer: q.answer, explain: q.explain, lastSelected: selected, correctCount: 0, createdAt: new Date().toISOString() });
  }
  setMistakes(mistakes);
}

function renderMistakeBook() {
  const mistakes = getMistakes();
  const mastered = getMastered();
  const streak = load(LS.streak, { count: 0, lastDate: '' });
  document.getElementById('streakLabel').textContent = `🔥 ${streak.count || 0}`;
  document.getElementById('masteredCountLabel').textContent = mastered.length;
  const list = document.getElementById('mistakeList');
  if (!mistakes.length) {
    list.innerHTML = `<div class="empty-state"><h3>No active mistakes saved yet.</h3><p>Do a Revision Lab round. Questions Evans gets wrong will appear here for review.</p></div>`;
  } else {
    list.innerHTML = mistakes.map(m => `
      <article class="mistake-card">
        <strong>${m.subject} · ${m.topic}</strong>
        <p>${m.q}</p>
        <p>Correct answer: <strong>${m.answer}</strong></p>
        <p>${m.explain}</p>
        <p>Correct reviews: ${m.correctCount}/2</p>
        <div class="mistake-actions">
          <button data-review-correct="${m.id}">I got it correct</button>
          <button data-review-wrong="${m.id}">Still wrong</button>
          <button data-remove-mistake="${m.id}">Remove</button>
        </div>
      </article>
    `).join('');
  }
  document.getElementById('masteredList').innerHTML = mastered.length ? mastered.slice(-6).reverse().map(m => `
    <div class="mistake-card"><strong>${m.subject}</strong><p>${m.q}</p><p>Mastered ✅</p></div>
  `).join('') : `<div class="empty-small">Mastered mistakes will appear here after two correct reviews.</div>`;
}
function updateReviewStreak() {
  const today = todayDate().toISOString().slice(0, 10);
  const streak = load(LS.streak, { count: 0, lastDate: '' });
  if (streak.lastDate !== today) {
    const yesterday = new Date(todayDate());
    yesterday.setDate(yesterday.getDate() - 1);
    const y = yesterday.toISOString().slice(0, 10);
    streak.count = streak.lastDate === y ? (streak.count || 0) + 1 : 1;
    streak.lastDate = today;
    save(LS.streak, streak);
  }
}

function renderProgress() {
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const mistakes = getMistakes();
  const mastered = getMastered();
  const history = getHistory();
  const subjectCounts = history.reduce((acc, h) => { acc[h.subject] = (acc[h.subject] || 0) + 1; return acc; }, {});
  const subjectRows = Object.entries(subjectCounts).length ? Object.entries(subjectCounts).map(([s, n]) => `<div class="metric"><span>${s}</span><strong>${n} rounds</strong></div>`).join('') : `<p class="helper-text">Start one practice round to see subject history.</p>`;
  document.getElementById('progressDashboard').innerHTML = `
    <article class="progress-panel"><h3>Task Progress</h3><div class="metric"><span>WA3 completed</span><strong>${wa3Done}/${WA3_TASKS.length}</strong></div><div class="metric"><span>Weekly tasks done</span><strong>${plannerDone}/${plannerTasks.length}</strong></div><div class="metric"><span>Next deadline</span><strong>${getUpcomingIncomplete()[0] ? formatDate(getUpcomingIncomplete()[0].date) : 'Done'}</strong></div></article>
    <article class="progress-panel"><h3>Practice Progress</h3><div class="metric"><span>Practice rounds</span><strong>${history.length}</strong></div><div class="metric"><span>Last score</span><strong>${history.length ? `${history[history.length-1].score}/${history[history.length-1].total}` : '—'}</strong></div>${subjectRows}</article>
    <article class="progress-panel"><h3>Mistake Review</h3><div class="metric"><span>Active mistakes</span><strong>${mistakes.length}</strong></div><div class="metric"><span>Mastered mistakes</span><strong>${mastered.length}</strong></div><p class="helper-text">To unlock more progress: complete one WA3 task, finish one Revision Lab round, and review one mistake.</p></article>
    <article class="progress-panel"><h3>Usage Check</h3><div class="metric"><span>Last opened</span><strong>${shortTime(load(LS.lastOpen, '')) || '—'}</strong></div><div class="metric"><span>Recent proof records</span><strong>${getAudit().length}</strong></div><p class="helper-text">Self-check tasks now require a short proof note and store a timestamp.</p></article>
  `;
  const auditList = document.getElementById('auditLogList');
  if (auditList) {
    const recent = getRecentAudit(10);
    auditList.innerHTML = recent.length ? recent.map(a => `
      <div class="audit-row"><strong>${a.label || a.id}</strong><span>${a.checked ? 'Completed' : 'Reopened'} · ${shortTime(a.ts)}</span>${a.evidence ? `<em>${a.evidence}</em>` : ''}</div>
    `).join('') : '<div class="empty-small">No proof records yet. Complete one WA3 or Planner task to start.</div>';
  }
}


function getSelectedCycleDay() {
  return load(LS.cycleDay, getAutoCycleDay());
}
function localDateOnly(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}
function isSchoolDay(date) {
  const day = date.getDay();
  return day >= 1 && day <= 5;
}
function schoolDayOffset(anchorDate, targetDate) {
  const anchor = localDateOnly(anchorDate);
  const target = localDateOnly(targetDate);
  if (anchor.getTime() === target.getTime()) return 0;
  let cursor = new Date(anchor);
  let offset = 0;
  if (target > anchor) {
    while (cursor < target) {
      cursor.setDate(cursor.getDate() + 1);
      if (isSchoolDay(cursor)) offset += 1;
    }
  } else {
    while (cursor > target) {
      if (isSchoolDay(cursor)) offset -= 1;
      cursor.setDate(cursor.getDate() - 1);
    }
  }
  return offset;
}
function getAutoCycleDay(date = new Date()) {
  const anchor = parseLocalDate('2026-07-07'); // Tuesday 7 Jul 2026 is Day 7.
  const anchorIndex = 6; // Day 7 in zero-based TIMETABLE_DAYS.
  const offset = schoolDayOffset(anchor, date);
  const idx = ((anchorIndex + offset) % TIMETABLE_DAYS.length + TIMETABLE_DAYS.length) % TIMETABLE_DAYS.length;
  return TIMETABLE_DAYS[idx];
}
function isCycleManualOverride() {
  return Boolean(localStorage.getItem(LS.cycleDay));
}
function getNextCycleDay(day) {
  const idx = TIMETABLE_DAYS.indexOf(day);
  return TIMETABLE_DAYS[(idx + 1) % TIMETABLE_DAYS.length];
}
function getPackItemsForDay(day) {
  const classes = TIMETABLE[day] || [];
  const items = new Set(['school diary', 'pencil case', 'water bottle']);
  classes.forEach(c => {
    (PACK_ITEMS[c.subject] || []).forEach(item => items.add(item));
  });
  return [...items];
}
function classRow(c) {
  const extra = [c.teacher, c.venue].filter(Boolean).join(' · ');
  return `<div class="class-row"><span class="class-time">${c.time}</span><div><strong>${c.subject}</strong>${extra ? `<span>${extra}</span>` : ''}</div></div>`;
}
function renderTimetableDashboard() {
  const day = getSelectedCycleDay();
  const classes = (TIMETABLE[day] || []).filter(c => !['Lunch', 'Recess'].includes(c.subject));
  const nextDay = getNextCycleDay(day);
  const preview = document.getElementById('dashboardTimetablePreview');
  const pack = document.getElementById('dashboardPackPreview');
  const badge = document.getElementById('tomorrowCycleBadge');
  if (badge) badge.textContent = nextDay;
  if (preview) {
    preview.innerHTML = `<div class="cycle-chip">${day}</div>` + classes.slice(0, 6).map(classRow).join('') + (classes.length > 6 ? `<button class="text-btn" data-section="timetable">View ${classes.length - 6} more</button>` : '');
  }
  if (pack) {
    pack.innerHTML = getPackItemsForDay(nextDay).slice(0, 7).map(item => `<label class="pack-item"><input type="checkbox"> <span>${item}</span></label>`).join('');
  }
}
function renderTimetable() {
  const selector = document.getElementById('cycleDaySelect');
  if (!selector) return;
  const selected = getSelectedCycleDay();
  selector.innerHTML = TIMETABLE_DAYS.map(day => `<option value="${day}">${day}</option>`).join('');
  selector.value = selected;
  const classes = TIMETABLE[selected] || [];
  const nextDay = getNextCycleDay(selected);
  document.getElementById('selectedCycleTitle').textContent = `${selected} Classes`;
  const info = document.getElementById('cycleInfo');
  if (info) info.textContent = isCycleManualOverride() ? `Manual override is on. Auto today would be ${getAutoCycleDay()}.` : `Auto today: ${getAutoCycleDay()} · Anchor: 7 Jul 2026 = Day 7.`;
  document.getElementById('selectedClassCount').textContent = `${classes.filter(c => !['Lunch', 'Recess'].includes(c.subject)).length} classes`;
  document.getElementById('selectedDayClasses').innerHTML = classes.map(classRow).join('');
  document.getElementById('packListTitle').textContent = `Pack for ${nextDay}`;
  document.getElementById('tomorrowPackList').innerHTML = getPackItemsForDay(nextDay).map(item => `<label class="pack-item"><input type="checkbox"> <span>${item}</span></label>`).join('');
  document.getElementById('fullTimetableGrid').innerHTML = TIMETABLE_DAYS.map(day => {
    const dayClasses = (TIMETABLE[day] || []).filter(c => !['Lunch', 'Recess'].includes(c.subject));
    return `<article class="timetable-day ${day === selected ? 'active' : ''}"><h3>${day}</h3>${dayClasses.map(c => `<p><strong>${c.time}</strong> ${c.subject}${c.venue ? ` · ${c.venue}` : ''}</p>`).join('')}</article>`;
  }).join('');
}

function renderAll() {
  renderDashboard();
  renderWa3Board();
  renderPlanner();
  renderTimetable();
  renderRevisionControls();
  renderMistakeBook();
  renderProgress();
}

function setupEvents() {
  document.addEventListener('click', e => {
    if (e.target.id === 'autoCycleBtn') {
      localStorage.removeItem(LS.cycleDay);
      renderTimetable();
      renderTimetableDashboard();
      toast(`Auto cycle restored: ${getAutoCycleDay()}`);
      return;
    }
    const nav = e.target.closest('[data-section]');
    if (nav) switchSection(nav.dataset.section);

    if (e.target.id === 'startMissionBtn') {
      switchSection('planner');
      toast('Start with today’s top task');
    }
    if (e.target.id === 'addPlannerTaskBtn') openTaskModal();
    if (e.target.id === 'closeTaskModal') closeTaskModal();
    if (e.target.id === 'savePlannerTaskBtn') savePlannerTask();
    if (e.target.id === 'startPracticeBtn') startPracticeRound();
    if (e.target.id === 'practiceAgainBtn') startPracticeRound();
    if (e.target.classList.contains('option-btn')) answerQuestion(decodeURIComponent(e.target.dataset.answer));
    if (e.target.id === 'startMistakeReviewBtn') {
      const first = document.querySelector('[data-review-correct]');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      else toast('No active mistakes yet');
    }

    const moveBtn = e.target.closest('[data-move-id]');
    if (moveBtn) movePlannerTask(moveBtn.dataset.moveDay, moveBtn.dataset.moveId);
    const delBtn = e.target.closest('[data-delete-id]');
    if (delBtn) deletePlannerTask(delBtn.dataset.deleteDay, delBtn.dataset.deleteId);
    const correctBtn = e.target.closest('[data-review-correct]');
    if (correctBtn) reviewMistake(correctBtn.dataset.reviewCorrect, true);
    const wrongBtn = e.target.closest('[data-review-wrong]');
    if (wrongBtn) reviewMistake(wrongBtn.dataset.reviewWrong, false);
    const removeBtn = e.target.closest('[data-remove-mistake]');
    if (removeBtn) removeMistake(removeBtn.dataset.removeMistake);
  });

  document.addEventListener('change', e => {
    if (e.target.matches('[data-focus-id]')) {
      const done = load(LS.focusDone, {});
      const task = getFocusTasks().find(t => t.id === e.target.dataset.focusId);
      let proof = '';

      // The first focus card is the current next WA3 task.
      // Ticking it should complete the linked WA3 item too, so the deadline card moves on.
      if (e.target.dataset.focusWa3Id) {
        const wa3Task = WA3_TASKS.find(t => t.id === e.target.dataset.focusWa3Id);
        const wa3Done = getWa3Done();
        if (e.target.checked) {
          proof = requestEvidence(wa3Task ? `${wa3Task.subject} — ${wa3Task.title}` : 'WA3 task');
          if (!proof) { e.target.checked = false; toast('Add quick proof before ticking done'); return; }
          saveEvidence('wa3', e.target.dataset.focusWa3Id, proof);
        }
        wa3Done[e.target.dataset.focusWa3Id] = e.target.checked;
        setWa3Done(wa3Done);
        recordAudit({
          type: 'wa3',
          id: e.target.dataset.focusWa3Id,
          label: wa3Task ? `${wa3Task.subject}: ${wa3Task.title}` : 'WA3 task',
          checked: e.target.checked,
          evidence: proof
        });
      }

      done[e.target.dataset.focusId] = e.target.checked;
      save(LS.focusDone, done);
      recordAudit({ type: 'focus', id: e.target.dataset.focusId, label: task?.text || 'Focus task', checked: e.target.checked, evidence: proof });
      toast(e.target.checked ? 'Focus task done' : 'Focus task reopened');
      renderAll();
    }
    if (e.target.matches('[data-wa3-id]')) {
      const done = getWa3Done();
      const task = WA3_TASKS.find(t => t.id === e.target.dataset.wa3Id);
      let proof = '';
      if (e.target.checked) {
        proof = requestEvidence(task ? `${task.subject} — ${task.title}` : 'WA3 task');
        if (!proof) { e.target.checked = false; toast('Add quick proof before ticking done'); return; }
        saveEvidence('wa3', e.target.dataset.wa3Id, proof);
      }
      done[e.target.dataset.wa3Id] = e.target.checked;
      setWa3Done(done);
      recordAudit({ type: 'wa3', id: e.target.dataset.wa3Id, label: task ? `${task.subject}: ${task.title}` : 'WA3 task', checked: e.target.checked, evidence: proof });
      toast(e.target.checked ? 'WA3 mission completed with proof' : 'WA3 mission reopened');
      renderAll();
    }
    if (e.target.matches('[data-plan-id]')) {
      const planner = getPlanner();
      const task = planner[e.target.dataset.planDay].find(t => t.id === e.target.dataset.planId);
      let proof = '';
      if (task && e.target.checked) {
        proof = requestEvidence(task.text);
        if (!proof) { e.target.checked = false; toast('Add quick proof before ticking done'); return; }
        saveEvidence('planner', task.id, proof);
      }
      if (task) task.done = e.target.checked;
      setPlanner(planner);
      recordAudit({ type: 'planner', id: e.target.dataset.planId, label: task?.text || 'Planner task', checked: e.target.checked, evidence: proof });
      toast(e.target.checked ? 'Task completed with proof' : 'Task reopened');
      renderAll();
    }
    if (e.target.id === 'subjectSelect') renderTopicOptions();
    if (e.target.id === 'cycleDaySelect') {
      save(LS.cycleDay, e.target.value);
      toast(`Timetable set to ${e.target.value}`);
      renderAll();
    }
  });

  document.addEventListener('input', e => {
    if (e.target.matches('[data-note-id]')) {
      const notes = getWa3Notes();
      notes[e.target.dataset.noteId] = e.target.value;
      setWa3Notes(notes);
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter = btn.dataset.filter;
      renderWa3Board();
    });
  });
}

function openTaskModal() {
  document.getElementById('modalDaySelect').innerHTML = DAYS.map(d => `<option value="${d}">${d}</option>`).join('');
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  if (DAYS.includes(todayName)) document.getElementById('modalDaySelect').value = todayName;
  document.getElementById('modalTaskInput').value = '';
  document.getElementById('taskModal').classList.add('open');
  document.getElementById('taskModal').setAttribute('aria-hidden', 'false');
  setTimeout(() => document.getElementById('modalTaskInput').focus(), 50);
}
function closeTaskModal() {
  document.getElementById('taskModal').classList.remove('open');
  document.getElementById('taskModal').setAttribute('aria-hidden', 'true');
}
function savePlannerTask() {
  const day = document.getElementById('modalDaySelect').value;
  const text = document.getElementById('modalTaskInput').value.trim();
  const type = document.getElementById('modalTaskType').value;
  if (!text) { toast('Please type a task first'); return; }
  const planner = getPlanner();
  planner[day] = planner[day] || [];
  planner[day].push({ id: `p-${Date.now()}`, text, type, done: false });
  setPlanner(planner);
  closeTaskModal();
  renderAll();
  toast('Task added');
}
function movePlannerTask(day, id) {
  const planner = getPlanner();
  const idx = DAYS.indexOf(day);
  const nextDay = DAYS[(idx + 1) % DAYS.length];
  const taskIndex = planner[day].findIndex(t => t.id === id);
  if (taskIndex === -1) return;
  const [task] = planner[day].splice(taskIndex, 1);
  task.done = false;
  planner[nextDay] = planner[nextDay] || [];
  planner[nextDay].push(task);
  setPlanner(planner);
  renderAll();
  toast(`Moved to ${nextDay}`);
}
function deletePlannerTask(day, id) {
  if (!confirm('Delete this task?')) return;
  const planner = getPlanner();
  planner[day] = planner[day].filter(t => t.id !== id);
  setPlanner(planner);
  renderAll();
  toast('Task deleted');
}
function reviewMistake(id, correct) {
  const mistakes = getMistakes();
  const mastered = getMastered();
  const m = mistakes.find(x => x.id === id);
  if (!m) return;
  updateReviewStreak();
  if (correct) {
    m.correctCount = (m.correctCount || 0) + 1;
    if (m.correctCount >= 2) {
      setMistakes(mistakes.filter(x => x.id !== id));
      mastered.push({ ...m, masteredAt: new Date().toISOString() });
      setMastered(mastered);
      toast('Mastered after 2 correct reviews');
    } else {
      setMistakes(mistakes);
      toast('Good. One more correct review to master it');
    }
  } else {
    m.correctCount = 0;
    setMistakes(mistakes);
    toast('Keep this in review');
  }
  renderAll();
}
function removeMistake(id) {
  if (!confirm('Remove this mistake from active review?')) return;
  setMistakes(getMistakes().filter(m => m.id !== id));
  renderAll();
  toast('Mistake removed');
}


// ===== v7 Daily Homework + Schedule additions =====
LS.homework = 'eshq_v7_homework';
LS.activities = 'eshq_v7_activities';

function inputDateString(date = new Date()) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function getHomework() { return load(LS.homework, []); }
function setHomework(list) { save(LS.homework, list); }
function getActivities() { return load(LS.activities, []); }
function setActivities(list) { save(LS.activities, list); }
function dueLabel(dateStr) {
  if (!dateStr) return 'No date';
  const diff = Math.round((parseDate(dateStr) - todayDate()) / 86400000);
  const exact = parseDate(dateStr).toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short' });
  if (diff === 0) return `Today · ${exact}`;
  if (diff === 1) return `Tomorrow · ${exact}`;
  if (diff === -1) return `Yesterday · ${exact}`;
  if (diff < 0) return `${Math.abs(diff)} days overdue · ${exact}`;
  if (diff <= 6) return `${exact}`;
  return exact;
}
function homeworkSort(a, b) {
  const da = parseDate(a.dueDate)?.getTime() ?? Infinity;
  const db = parseDate(b.dueDate)?.getTime() ?? Infinity;
  return da - db;
}
function homeworkGroups() {
  const hw = getHomework().slice().sort(homeworkSort);
  const today = inputDateString(todayDate());
  const tomorrow = inputDateString(addDays(todayDate(), 1));
  return {
    overdue: hw.filter(h => !h.done && h.dueDate && h.dueDate < today),
    today: hw.filter(h => !h.done && h.dueDate === today),
    tomorrow: hw.filter(h => !h.done && h.dueDate === tomorrow),
    upcoming: hw.filter(h => !h.done && h.dueDate && h.dueDate > tomorrow),
    nodate: hw.filter(h => !h.done && !h.dueDate),
    completed: hw.filter(h => h.done).sort((a, b) => (b.completedAt || '').localeCompare(a.completedAt || ''))
  };
}
function homeworkMeta(h) {
  if (h.done) return completionMeta('homework', h.id);
  const diff = h.dueDate ? Math.round((parseDate(h.dueDate) - todayDate()) / 86400000) : null;
  const urgent = diff !== null && diff <= 1;
  return `<span class="${urgent ? 'status-badge danger' : 'status-badge'}">${dueLabel(h.dueDate)}</span><span class="proof-chip">Proof needed</span>`;
}
function renderHomeworkItem(h, compact = false) {
  const typeClass = (h.subject || 'other').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `
    <div class="homework-item ${h.done ? 'done' : ''} ${compact ? 'compact' : ''}">
      <input type="checkbox" data-hw-id="${h.id}" ${h.done ? 'checked' : ''} aria-label="Complete ${h.text}">
      <div class="homework-main">
        <div class="homework-title"><span class="subject-pill ${typeClass}">${h.subject || 'Other'}</span><strong>${h.text}</strong></div>
        <div class="homework-meta">${homeworkMeta(h)}</div>
      </div>
      <div class="planner-item-actions">
        <button data-hw-edit="${h.id}">Edit</button>
        <button data-hw-delete="${h.id}">Delete</button>
      </div>
    </div>`;
}
function renderHomeworkGroup(title, items, emptyText, className = '') {
  return `<article class="homework-group ${className}"><div class="planner-group-head"><div><h3>${title}</h3></div><span class="group-count">${items.length}</span></div><div class="homework-list">${items.length ? items.map(h => renderHomeworkItem(h)).join('') : `<div class="empty-small">${emptyText}</div>`}</div></article>`;
}
function renderHomeworkBoard() {
  const board = document.getElementById('homeworkBoard');
  if (!board) return;
  const g = homeworkGroups();
  const activeCount = g.overdue.length + g.today.length + g.tomorrow.length + g.upcoming.length + g.nodate.length;
  board.innerHTML = `
    <div class="homework-summary-strip">
      <div><strong>${activeCount}</strong><span>active homework</span></div>
      <div><strong>${g.today.length}</strong><span>due today</span></div>
      <div><strong>${g.tomorrow.length}</strong><span>due tomorrow</span></div>
      <div><strong>${g.completed.length}</strong><span>completed</span></div>
    </div>
    <div class="homework-grid">
      ${renderHomeworkGroup('Overdue', g.overdue, 'No overdue homework. Good.', 'overdue-group')}
      ${renderHomeworkGroup('Due Today', g.today, 'Nothing due today.', 'today-group')}
      ${renderHomeworkGroup('Due Tomorrow', g.tomorrow, 'Nothing due tomorrow yet.', 'tomorrow-group')}
      ${renderHomeworkGroup('Upcoming', g.upcoming.slice(0, 8), 'No upcoming homework.', 'upcoming-group')}
      ${renderHomeworkGroup('No Date Yet', g.nodate, 'No homework without date.', 'nodate-group')}
      ${renderHomeworkGroup('Completed', g.completed.slice(0, 8), 'Completed homework will appear here.', 'completed-group')}
    </div>`;
}
function renderDashboardHomework() {
  const el = document.getElementById('dashboardHomeworkPreview');
  if (!el) return;
  const g = homeworkGroups();
  const items = [...g.overdue, ...g.today, ...g.tomorrow, ...g.upcoming].slice(0, 4);
  if (!items.length) {
    el.innerHTML = `<div class="empty-small"><strong>No homework due soon.</strong><br>Add homework after school so tomorrow’s list is clear.</div>`;
    return;
  }
  el.innerHTML = items.map(h => renderHomeworkItem(h, true)).join('');
}
function openHomeworkModal(editId = '') {
  const modal = document.getElementById('homeworkModal');
  if (!modal) return;
  modal.dataset.editId = editId || '';
  const h = editId ? getHomework().find(x => x.id === editId) : null;
  document.getElementById('homeworkSubjectInput').value = h?.subject || 'Mathematics';
  document.getElementById('homeworkTextInput').value = h?.text || '';
  document.getElementById('homeworkDueInput').value = h?.dueDate || inputDateString(addDays(todayDate(), 1));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  setTimeout(() => document.getElementById('homeworkTextInput').focus(), 50);
}
function closeHomeworkModal() {
  const modal = document.getElementById('homeworkModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function saveHomework() {
  const subject = document.getElementById('homeworkSubjectInput').value;
  const text = document.getElementById('homeworkTextInput').value.trim();
  const dueDate = document.getElementById('homeworkDueInput').value;
  if (!text) { toast('Please type the homework details'); return; }
  const list = getHomework();
  const editId = document.getElementById('homeworkModal').dataset.editId;
  if (editId) {
    const h = list.find(x => x.id === editId);
    if (h) Object.assign(h, { subject, text, dueDate, updatedAt: new Date().toISOString() });
  } else {
    list.push({ id: `hw-${Date.now()}`, subject, text, dueDate, done: false, createdAt: new Date().toISOString() });
  }
  setHomework(list);
  closeHomeworkModal();
  renderAll();
  toast(editId ? 'Homework updated' : 'Homework added');
}
function toggleHomework(id, checked) {
  const list = getHomework();
  const h = list.find(x => x.id === id);
  if (!h) return;
  let proof = '';
  if (checked) {
    proof = requestEvidence(`${h.subject} — ${h.text}`);
    if (!proof) { toast('Add quick proof before ticking done'); return false; }
    saveEvidence('homework', id, proof);
    h.completedAt = new Date().toISOString();
  } else {
    h.completedAt = '';
  }
  h.done = checked;
  setHomework(list);
  recordAudit({ type: 'homework', id, label: `${h.subject}: ${h.text}`, checked, evidence: proof });
  renderAll();
  toast(checked ? 'Homework completed with proof' : 'Homework reopened');
  return true;
}
function deleteHomework(id) {
  if (!confirm('Delete this homework?')) return;
  setHomework(getHomework().filter(h => h.id !== id));
  renderAll();
  toast('Homework deleted');
}
function clearCompletedHomework() {
  if (!confirm('Clear completed homework from the visible list?')) return;
  setHomework(getHomework().filter(h => !h.done));
  renderAll();
  toast('Completed homework cleared');
}
function activityDateKey(a) { return `${a.date || ''} ${a.time || ''}`; }
function getTodayActivities() {
  const today = inputDateString(todayDate());
  return getActivities().filter(a => a.date === today).sort((a,b)=>activityDateKey(a).localeCompare(activityDateKey(b)));
}
function getUpcomingActivities(limit = 8) {
  const today = inputDateString(todayDate());
  return getActivities().filter(a => !a.date || a.date >= today).sort((a,b)=>activityDateKey(a).localeCompare(activityDateKey(b))).slice(0, limit);
}
function renderActivityItem(a, compact = false) {
  return `<div class="activity-item ${compact ? 'compact' : ''}"><span class="type-badge">${a.type}</span><div><strong>${a.title}</strong><span>${a.date ? dueLabel(a.date) : 'No date'}${a.time ? ` · ${a.time}` : ''}${a.notes ? ` · ${a.notes}` : ''}</span></div><button data-activity-delete="${a.id}">Delete</button></div>`;
}
function renderActivitiesDashboard() {
  const el = document.getElementById('dashboardActivitiesPreview');
  if (!el) return;
  const today = getTodayActivities();
  const upcoming = getUpcomingActivities(3);
  const items = today.length ? today : upcoming;
  el.innerHTML = items.length ? items.map(a => renderActivityItem(a, true)).join('') : `<div class="empty-small"><strong>No after-school schedule added.</strong><br>Add tuition, taekwondo, CCA or reminders in Schedule.</div>`;
}
function renderActivities() {
  const el = document.getElementById('activityList');
  if (!el) return;
  const items = getUpcomingActivities(20);
  el.innerHTML = items.length ? items.map(a => renderActivityItem(a)).join('') : `<div class="empty-state"><h3>No activities added yet.</h3><p>Add tuition, taekwondo grading, CCA, family reminders or exam prep sessions here.</p></div>`;
}
function openActivityModal() {
  const modal = document.getElementById('activityModal');
  if (!modal) return;
  document.getElementById('activityTypeInput').value = 'Tuition';
  document.getElementById('activityTitleInput').value = '';
  document.getElementById('activityDateInput').value = inputDateString(todayDate());
  document.getElementById('activityTimeInput').value = '';
  document.getElementById('activityNotesInput').value = '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}
function closeActivityModal() {
  const modal = document.getElementById('activityModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function saveActivity() {
  const type = document.getElementById('activityTypeInput').value;
  const title = document.getElementById('activityTitleInput').value.trim();
  const date = document.getElementById('activityDateInput').value;
  const time = document.getElementById('activityTimeInput').value;
  const notes = document.getElementById('activityNotesInput').value.trim();
  if (!title) { toast('Please type the schedule title'); return; }
  const list = getActivities();
  list.push({ id: `act-${Date.now()}`, type, title, date, time, notes, createdAt: new Date().toISOString() });
  setActivities(list);
  closeActivityModal();
  renderAll();
  toast('Schedule item added');
}
function deleteActivity(id) {
  if (!confirm('Delete this schedule item?')) return;
  setActivities(getActivities().filter(a => a.id !== id));
  renderAll();
  toast('Schedule item deleted');
}

// Override focus, dashboard, planner and progress for v7
function getFocusTasks() {
  const g = homeworkGroups();
  const firstHomework = [...g.overdue, ...g.today, ...g.tomorrow][0];
  const upcoming = getUpcomingIncomplete()[0];
  const primary = firstHomework
    ? { text: `Finish homework: ${firstHomework.subject} — ${firstHomework.text}`, sub: `Due ${dueLabel(firstHomework.dueDate)}` }
    : upcoming
      ? { text: `Work on: ${upcoming.subject} — ${upcoming.title}`, sub: `Due ${formatLongDate(upcoming.date)}` }
      : { text: 'Check homework after school', sub: 'Add new homework before starting games or rest' };
  return [
    { id: 'focus-primary', text: primary.text, sub: primary.sub },
    { id: 'focus-pack', text: 'Check tomorrow’s pack list', sub: `Use Schedule: ${getNextCycleDay(getSelectedCycleDay())}` },
    { id: 'focus-practice', text: 'Complete one short Revision Lab round', sub: '5 questions is enough to start' }
  ];
}
function getPlanner() {
  const defaultPlanner = {
    Monday: [{ id: 'mon-plan', text: 'Set this week’s main study focus', type: 'Study', done: false }],
    Tuesday: [{ id: 'tue-activity', text: 'Check activity or tuition schedule for the week', type: 'Reminder', done: false }],
    Wednesday: [{ id: 'wed-project', text: 'Work on one long project or WA3 item', type: 'Project', done: false }],
    Thursday: [{ id: 'thu-review', text: 'Review weak topic before the weekend', type: 'Study', done: false }],
    Friday: [{ id: 'fri-clear', text: 'Clear unfinished homework before weekend', type: 'Reminder', done: false }],
    Saturday: [{ id: 'sat-long', text: 'Longer study block or activity practice', type: 'Study', done: false }],
    Sunday: [{ id: 'sun-prepare', text: 'Prepare for next school week', type: 'Family', done: false }]
  };
  return load(LS.planner, defaultPlanner);
}
function renderDashboard() {
  document.getElementById('todayLabel').textContent = `${new Date().toLocaleDateString('en-SG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · ${getSelectedCycleDay()}`;
  renderFocus();
  renderDashboardHomework();
  renderActivitiesDashboard();
  renderNextDeadline();
  renderWa3ProgressMini();
  renderUpcomingDeadlines();
  renderParentSummary();
  renderWeekPreview();
  renderTimetableDashboard();
  renderAuditStatus();
}
function renderParentSummary() {
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const hw = getHomework();
  const activeHw = hw.filter(h => !h.done).length;
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const recent = getRecentAudit(1)[0];
  const prevOpen = load(LS.previousOpen, '');
  document.getElementById('parentSummary').innerHTML = `
    <div class="summary-tile"><strong>${activeHw}</strong><span>active homework</span></div>
    <div class="summary-tile"><strong>${wa3Done}/${WA3_TASKS.length}</strong><span>WA3 completed</span></div>
    <div class="summary-tile"><strong>${plannerDone}/${plannerTasks.length}</strong><span>weekly plans done</span></div>
    <div class="summary-tile"><strong>${recent ? shortTime(recent.ts) : 'No proof yet'}</strong><span>latest proof</span></div>
    <div class="summary-tile"><strong>${prevOpen ? shortTime(prevOpen) : 'First visit'}</strong><span>previous open</span></div>
  `;
  const nudge = document.getElementById('auditNudge');
  if (nudge) nudge.textContent = auditWarning();
}
function renderWeekPreview() {
  const planner = getPlanner();
  document.getElementById('weekPreview').innerHTML = DAYS.map(day => {
    const tasks = (planner[day] || []).slice(0, 2);
    return `<div class="day-preview"><h4>${day.slice(0, 3)}</h4>${tasks.length ? tasks.map(t => `<p>${t.done ? '✅' : '□'} ${t.type}: ${t.text}</p>`).join('') : '<p>No plan yet</p>'}</div>`;
  }).join('');
}
function renderPlanner() {
  const planner = getPlanner();
  const todayName = DAYS.includes(plannerDayName(0)) ? plannerDayName(0) : 'Monday';
  const tomorrowName = DAYS.includes(plannerDayName(1)) ? plannerDayName(1) : DAYS[(DAYS.indexOf(todayName) + 1) % DAYS.length];
  const todayTasks = (planner[todayName] || []).map(task => ({ day: todayName, task }));
  const tomorrowTasks = (planner[tomorrowName] || []).map(task => ({ day: tomorrowName, task }));
  const laterTasks = DAYS.filter(day => day !== todayName && day !== tomorrowName).flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const allTasks = DAYS.flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const doneCount = allTasks.filter(item => item.task.done).length;
  document.getElementById('plannerGrid').innerHTML = `
    <div class="planner-summary-strip">
      <div><strong>${doneCount}/${allTasks.length}</strong><span>long-term plans done</span></div>
      <div><strong>${todayTasks.length}</strong><span>today</span></div>
      <div><strong>${tomorrowTasks.length}</strong><span>tomorrow</span></div>
    </div>
    <div class="planner-flow">
      <div class="planner-priority-col">
        ${renderPlannerGroup(`Today · ${todayName}`, 'Longer plan, not daily homework. Use Homework Log for school assignments.', todayTasks, 'today-group', 'No longer plan for today. Add tuition, activity, project or revision plan.')}
        ${renderPlannerGroup(`Tomorrow · ${tomorrowName}`, 'Prepare any activity, tuition or project work early.', tomorrowTasks, 'tomorrow-group', 'No plan for tomorrow yet.')}
      </div>
      ${renderPlannerGroup('Later this week', 'Activities, exam prep and longer projects stay visible here.', laterTasks, 'later-group', 'No later plans yet.', { showDay: true, compact: true })}
    </div>`;
}
function renderProgress() {
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const hw = getHomework();
  const hwDone = hw.filter(h => h.done).length;
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const mistakes = getMistakes();
  const mastered = getMastered();
  const history = getHistory();
  const subjectCounts = history.reduce((acc, h) => { acc[h.subject] = (acc[h.subject] || 0) + 1; return acc; }, {});
  const subjectRows = Object.entries(subjectCounts).length ? Object.entries(subjectCounts).map(([s, n]) => `<div class="metric"><span>${s}</span><strong>${n} rounds</strong></div>`).join('') : `<p class="helper-text">Start one practice round to see subject history.</p>`;
  document.getElementById('progressDashboard').innerHTML = `
    <article class="progress-panel"><h3>Daily Work</h3><div class="metric"><span>Homework completed</span><strong>${hwDone}/${hw.length}</strong></div><div class="metric"><span>Active homework</span><strong>${hw.filter(h=>!h.done).length}</strong></div><div class="metric"><span>Schedule items</span><strong>${getActivities().length}</strong></div></article>
    <article class="progress-panel"><h3>Assessment & Plans</h3><div class="metric"><span>WA3 completed</span><strong>${wa3Done}/${WA3_TASKS.length}</strong></div><div class="metric"><span>Weekly plans done</span><strong>${plannerDone}/${plannerTasks.length}</strong></div><div class="metric"><span>Next deadline</span><strong>${getUpcomingIncomplete()[0] ? formatDate(getUpcomingIncomplete()[0].date) : 'Done'}</strong></div></article>
    <article class="progress-panel"><h3>Practice Progress</h3><div class="metric"><span>Practice rounds</span><strong>${history.length}</strong></div><div class="metric"><span>Last score</span><strong>${history.length ? `${history[history.length-1].score}/${history[history.length-1].total}` : '—'}</strong></div>${subjectRows}</article>
    <article class="progress-panel"><h3>Mistake Review</h3><div class="metric"><span>Active mistakes</span><strong>${mistakes.length}</strong></div><div class="metric"><span>Mastered mistakes</span><strong>${mastered.length}</strong></div><p class="helper-text">Finish homework, practise one round, then review mistakes.</p></article>
  `;
  const auditList = document.getElementById('auditLogList');
  if (auditList) {
    const recent = getRecentAudit(10);
    auditList.innerHTML = recent.length ? recent.map(a => `<div class="audit-row"><strong>${a.label || a.id}</strong><span>${a.checked ? 'Completed' : 'Reopened'} · ${shortTime(a.ts)}</span>${a.evidence ? `<em>${a.evidence}</em>` : ''}</div>`).join('') : '<div class="empty-small">No proof records yet. Complete one Homework, WA3 or Plan task to start.</div>';
  }
}
function renderAll() {
  renderDashboard();
  renderHomeworkBoard();
  renderWa3Board();
  renderPlanner();
  renderTimetable();
  renderActivities();
  renderRevisionControls();
  renderMistakeBook();
  renderProgress();
}
function setupExtraEvents() {
  document.addEventListener('click', e => {
    if (e.target.id === 'startMissionBtn') switchSection('homework');
    if (e.target.id === 'addHomeworkBtn' || e.target.id === 'quickAddHomeworkBtn') openHomeworkModal();
    if (e.target.id === 'closeHomeworkModal') closeHomeworkModal();
    if (e.target.id === 'saveHomeworkBtn') saveHomework();
    if (e.target.id === 'clearCompletedHomeworkBtn') clearCompletedHomework();
    const hwEdit = e.target.closest('[data-hw-edit]');
    if (hwEdit) openHomeworkModal(hwEdit.dataset.hwEdit);
    const hwDel = e.target.closest('[data-hw-delete]');
    if (hwDel) deleteHomework(hwDel.dataset.hwDelete);
    if (e.target.id === 'addActivityBtn') openActivityModal();
    if (e.target.id === 'closeActivityModal') closeActivityModal();
    if (e.target.id === 'saveActivityBtn') saveActivity();
    const actDel = e.target.closest('[data-activity-delete]');
    if (actDel) deleteActivity(actDel.dataset.activityDelete);
  });
  document.addEventListener('change', e => {
    if (e.target.matches('[data-hw-id]')) {
      const ok = toggleHomework(e.target.dataset.hwId, e.target.checked);
      if (!ok) e.target.checked = false;
    }
  });
}
async function init() {
  setupEvents();
  setupExtraEvents();
  await initCloudSync();
  markVisit();
  renderAll();
}
document.addEventListener('DOMContentLoaded', init);


/* v8 Daily streak - Duolingo-style habit check */
LS.dailyCheckins = 'eshq_v8_daily_checkins';
LS.bestStreak = 'eshq_v8_best_streak';

function localDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
function addDays(date, days) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() + days);
  return d;
}
function getDailyCheckins() {
  return load(LS.dailyCheckins, []);
}
function setDailyCheckins(list) {
  save(LS.dailyCheckins, Array.from(new Set(list)).sort().slice(-120));
}
function streakStats() {
  const dates = new Set(getDailyCheckins());
  const today = todayDate();
  const todayKey = localDateKey(today);
  const checkedToday = dates.has(todayKey);
  let cursor = checkedToday ? today : addDays(today, -1);
  let current = 0;
  while (dates.has(localDateKey(cursor))) {
    current += 1;
    cursor = addDays(cursor, -1);
  }
  let best = Number(load(LS.bestStreak, 0)) || 0;
  if (current > best) {
    best = current;
    save(LS.bestStreak, best);
  }
  return { current, best, checkedToday, todayKey };
}
function recordDailyCheckin(reason = 'manual') {
  const list = getDailyCheckins();
  const key = localDateKey();
  if (!list.includes(key)) {
    list.push(key);
    setDailyCheckins(list);
  }
  save('eshq_v8_last_checkin_reason', reason);
  return streakStats();
}
function renderStreakCard() {
  const card = document.querySelector('.streak-card');
  if (!card) return;
  const stats = streakStats();
  const count = document.getElementById('streakCount');
  const badge = document.getElementById('streakStatusBadge');
  const helper = document.getElementById('streakHelper');
  const btn = document.getElementById('dailyCheckinBtn');
  const dots = document.getElementById('streakWeekDots');
  if (count) count.textContent = stats.current;
  if (badge) badge.textContent = stats.checkedToday ? 'Done today' : 'Not yet';
  if (helper) helper.textContent = stats.checkedToday
    ? `Checked in today. Best streak: ${stats.best} day${stats.best === 1 ? '' : 's'}.`
    : 'Do one real action, then check in to keep the streak alive.';
  if (btn) btn.textContent = stats.checkedToday ? 'Checked in today ✓' : 'Check in today';
  card.classList.toggle('checked-in', stats.checkedToday);
  if (dots) {
    const dates = new Set(getDailyCheckins());
    const labels = ['M','T','W','T','F','S','S'];
    const today = todayDate();
    const start = addDays(today, -6);
    let html = '';
    for (let i = 0; i < 7; i += 1) {
      const d = addDays(start, i);
      const key = localDateKey(d);
      const isToday = key === stats.todayKey;
      html += `<span class="streak-dot ${dates.has(key) ? 'done' : ''} ${isToday ? 'today' : ''}" title="${d.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short' })}">${labels[d.getDay() === 0 ? 6 : d.getDay() - 1]}</span>`;
    }
    dots.innerHTML = html;
  }
}

const v7RecordAudit = recordAudit;
recordAudit = function(entry) {
  v7RecordAudit(entry);
  if (entry && entry.checked) recordDailyCheckin(entry.type || 'task');
};

const v7FinishPracticeRound = finishPracticeRound;
finishPracticeRound = function() {
  v7FinishPracticeRound();
  recordDailyCheckin('practice');
  renderStreakCard();
};

const v7RenderDashboard = renderDashboard;
renderDashboard = function() {
  v7RenderDashboard();
  renderStreakCard();
};

const v7RenderProgress = renderProgress;
renderProgress = function() {
  v7RenderProgress();
  const dash = document.getElementById('progressDashboard');
  if (!dash) return;
  const stats = streakStats();
  const panel = document.createElement('article');
  panel.className = 'progress-panel';
  panel.innerHTML = `<h3>Daily Streak</h3><div class="metric"><span>Current streak</span><strong>${stats.current} day${stats.current === 1 ? '' : 's'}</strong></div><div class="metric"><span>Best streak</span><strong>${stats.best} day${stats.best === 1 ? '' : 's'}</strong></div><div class="metric"><span>Today</span><strong>${stats.checkedToday ? 'Checked in' : 'Not yet'}</strong></div><p class="helper-text">Completing homework, WA3, weekly plans or a practice round also keeps the streak alive.</p>`;
  dash.prepend(panel);
};

document.addEventListener('click', e => {
  if (e.target.id === 'dailyCheckinBtn') {
    const stats = streakStats();
    if (!stats.checkedToday) {
      recordDailyCheckin('manual');
      toast('Daily streak updated 🔥');
    } else {
      toast('Already checked in today');
    }
    renderAll();
  }
});

/* v11 bilingual language toggle */
const ESHQ_LANG_KEY = 'eshq_v11_language';
const ZH_TEXT = new Map(Object.entries({
  'Dashboard': '首页', 'Homework': '功课', 'Schedule': '日程', 'WA3 Board': 'WA3任务', 'Weekly Plan': '周计划', 'Revision Lab': '练习室', 'Mistake Book': '错题本', 'Progress': '进度',
  'Evans Study HQ': 'Evans 学习总部', 'Daily Study Dashboard': '每日学习看板', 'Last opened:': '上次打开：', 'Open this first': '先看这里', 'Hi Evans 👋': 'Hi Evans 👋',
  'Check today’s mission, finish one task, then practise or review mistakes.': '先看今天任务，完成一件事，再做练习或复习错题。',
  "Today's Mission": '今天任务', "Start Today’s Mission": '开始今天任务', 'Focus': '今日重点', "Today’s Top 3": '今天最重要的3件事', "Today's Top 3": '今天最重要的3件事',
  'Tick one small task at a time. Progress is saved on this device.': '一次完成一个小任务，进度会保存在这台设备上。',
  'Deadline': '截止日期', 'Next Deadline': '下一个截止日期', 'WA3': 'WA3', 'Daily habit': '每日习惯', 'Study Streak': '学习连续打卡', 'Ready': '准备好', 'days': '天', 'day': '天',
  'Check in once a day after doing one real action.': '每天完成一个真实动作后打卡一次。', 'Do one real action, then check in to keep the streak alive.': '完成一个真实动作后再打卡，保持连续记录。',
  'Check in today': '今天打卡', 'Checked in today ✓': '今天已打卡 ✓', 'Done today': '今天已打卡', 'Not yet': '还没打卡', 'Checked in': '已打卡',
  'Quick Start': '快速开始', 'What do you need now?': '现在要做什么？', 'Daily Homework': '每日功课', 'Homework Due Soon': '近期要交的功课',
  'Record daily homework and due dates': '记录每天功课和截止日期', 'School, tuition and activities': '学校、补习和活动', 'Track tests, projects and submissions': '追踪考试、项目和提交',
  'Longer plans, activities and projects': '长期计划、活动和项目', 'Practise questions by topic': '按知识点练习题目', 'Review mistakes until mastered': '复习错题直到掌握', 'See what is improving': '查看进步情况',
  'Open homework': '打开功课', '+ Add homework': '+ 添加功课', '+ Add task': '+ 添加任务', '+ Add plan': '+ 添加计划', '+ Add activity': '+ 添加日程', 'Next 5': '最近5项', 'Upcoming Deadlines': '即将到来的截止日期', 'View all': '查看全部',
  'Today': '今天', 'Tomorrow': '明天', 'After-school Schedule': '课后日程', 'Open schedule': '打开日程', 'Mum Check': '妈妈检查', 'Proof & Activity': '完成证明与使用记录',
  'School day': '学校日', "Today’s Classes": '今天课程', "Today's Classes": '今天课程', 'Open timetable': '打开课表', 'Pack List': '书包检查清单', 'Tomorrow Pack List': '明日书包清单',
  'Timeline': '时间线', 'This Week Timeline': '本周时间线', 'Edit week': '编辑本周', 'Daily homework': '每日功课', 'Homework Log': '功课记录', 'Clear completed': '清除已完成',
  'NCHS Sec 1 · Term 3': '南侨中一 · 第三学期', 'WA3 Mission Board': 'WA3任务板', 'completed': '已完成', 'Completed': '已完成',
  'All': '全部', 'Tests': '考试', 'Submissions': '提交', 'Projects': '项目', 'Presentation': '演讲', 'Longer plan': '长期计划', 'School + after-school': '学校 + 课后',
  'Today is': '今天是', 'Use auto': '自动计算', 'Auto cycle is on.': '已开启自动循环计算。', 'Selected day': '选中的日子', 'Bag check': '书包检查', 'Pack for Tomorrow': '准备明天书包',
  'After school': '课后', 'Tuition, CCA & Activities': '补习、CCA和活动', '10-day cycle': '10天循环', 'School Timetable': '学校课表', 'My Timetable': '我的课表',
  'Practice': '练习', 'last score': '上次分数', 'Subject': '科目', 'Topic': '知识点', 'Number of questions': '题目数量', '5 questions': '5题', '10 questions': '10题', 'Start Practice Round': '开始一轮练习',
  'Ready for a short round?': '准备好做一小轮了吗？', 'Question': '题目', 'Choose the best answer.': '选择最佳答案。', 'Review loop': '复习闭环', 'review streak': '复习连续记录',
  'Active Mistakes': '正在复习的错题', 'Start Review': '开始复习', 'Mastered': '已掌握', 'Evidence': '完成证明', 'Progress Dashboard': '进度看板', 'Audit trail': '记录轨迹', 'Recent Task Evidence': '最近完成证明',
  'Add a Weekly Plan': '添加周计划', 'Day': '日期', 'Task': '任务', 'Type': '类别', 'Study': '学习', 'Project': '项目', 'Tuition': '补习', 'Taekwondo': '跆拳道', 'Exam': '考试', 'Family': '家庭', 'Reminder': '提醒', 'Save plan': '保存计划',
  'Add Homework': '添加功课', 'Homework details': '功课内容', 'Due date': '截止日期', 'Save homework': '保存功课', 'Add Schedule Item': '添加日程', 'Title': '标题', 'Date': '日期', 'Time': '时间', 'Notes': '备注', 'Save schedule item': '保存日程',
  'Mathematics': '数学', 'Science': '科学', 'English Language': '英文', 'English': '英文', 'Higher Chinese': '高级华文', 'History': '历史', 'Geography': '地理', 'English Literature': '英文文学', 'Literature': '文学', 'Food & Consumer Education': 'FCE家政', 'Art': '美术', 'Music': '音乐', 'PE (LS)': '体育', 'Recess': '课间休息', 'Lunch': '午餐', 'DEAR time': 'DEAR阅读时间',
  'Pack': '整理书包', 'Revision': '复习', 'Other': '其他', 'No homework due soon.': '近期没有要交的功课。', 'No activities added yet.': '还没有添加课后日程。', 'No proof yet': '暂无证明', 'First visit': '第一次打开',
  'Daily Streak': '每日连续打卡', 'Current streak': '当前连续天数', 'Best streak': '最高连续天数', 'Homework completed': '已完成功课', 'Active homework': '待完成功课', 'Schedule items': '日程项目', 'Assessment & Plans': '评估与计划',
  'WA3 completed': 'WA3已完成', 'Weekly plans done': '周计划已完成', 'Next deadline': '下一个截止日期', 'Practice Progress': '练习进度', 'Practice rounds': '练习轮数', 'Last score': '上次分数', 'Mistake Review': '错题复习', 'Active mistakes': '待复习错题', 'Mastered mistakes': '已掌握错题',
  'Usage Check': '使用检查', 'Recent proof records': '最近证明记录', 'No proof records yet. Complete one Homework, WA3 or Plan task to start.': '还没有完成证明。完成一项功课、WA3或计划任务后，这里会开始记录。',
  'Proof needed': '需要证明', 'Proof needed when completed': '完成时需要填写证明', 'Move': '移到明天', 'Move to tomorrow': '移到明天', 'Delete': '删除', 'Edit': '编辑', 'Done': '完成',
  'Soon': '即将到来', 'Urgent': '紧急', 'Upcoming': '即将到来', 'Overdue': '已逾期', 'TBC': '待确认', 'Clear': '完成', 'No task yet': '还没有任务', 'No Date Yet': '还没有日期', 'Due Today': '今天要交', 'Due Tomorrow': '明天要交',
  'Overdue': '已逾期', 'No overdue homework. Good.': '没有逾期功课，很好。', 'Nothing due today.': '今天没有要交的功课。', 'Nothing due tomorrow yet.': '明天暂时没有要交的功课。', 'No upcoming homework.': '没有之后的功课。', 'No homework without date.': '没有未填日期的功课。', 'Completed homework will appear here.': '完成的功课会显示在这里。'
}));
const ZH_REVERSE = new Map(Array.from(ZH_TEXT.entries()).map(([en, zh]) => [zh, en]));
const ORIGINAL_TEXT = new WeakMap();
const ORIGINAL_ATTR = new WeakMap();

function getLang() { return localStorage.getItem(ESHQ_LANG_KEY) || 'en'; }
function setLang(lang) { localStorage.setItem(ESHQ_LANG_KEY, lang); applyLanguage(); }
function translateTextValue(value) {
  if (!value || typeof value !== 'string') return value;

  // Handle mixed dynamic phrases before dictionary replacement.
  // This prevents the generic word "day" from turning "today" into "to天".
  let out = value
    .replace(/(\d+) days left/g, '还剩 $1 天')
    .replace(/(\d+) day left/g, '还剩 $1 天')
    .replace(/(\d+) days overdue/g, '已逾期 $1 天')
    .replace(/(\d+) day overdue/g, '已逾期 $1 天')
    .replace(/(\d+)d left/g, '还剩 $1 天')
    .replace(/Due today/g, '今天截止')
    .replace(/Due tomorrow/g, '明天截止')
    .replace(/Due ([^·\n]+)/g, '截止：$1')
    .replace(/Question (\d+)\/(\d+)/g, '第 $1/$2 题')
    .replace(/Score (\d+)/g, '分数 $1')
    .replace(/Correct answer:/g, '正确答案：')
    .replace(/Correct reviews:/g, '答对复习次数：')
    .replace(/(\d+) rounds/g, '$1 轮')
    .replace(/(\d+) classes/g, '$1 节课')
    .replace(/(\d+) class/g, '$1 节课');

  Array.from(ZH_TEXT.entries()).sort((a,b)=>b[0].length-a[0].length).forEach(([en, zh]) => {
    if (en === 'day' || en === 'days') return;
    out = out.split(en).join(zh);
  });
  return out;
}
function shouldSkipTranslation(parent) {
  return !parent || ['SCRIPT','STYLE','TEXTAREA','INPUT','OPTION'].includes(parent.tagName) || parent.closest('.language-switch');
}
function applyLanguage(root = document.body) {
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', (btn.id === 'langZhBtn') === (lang === 'zh')));
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (shouldSkipTranslation(parent)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const text = node.nodeValue;
    if (!ORIGINAL_TEXT.has(node) || (lang === 'zh' && ZH_TEXT.has(text.trim()))) ORIGINAL_TEXT.set(node, text);
    const original = ORIGINAL_TEXT.get(node) || text;
    if (lang === 'zh') {
      node.nodeValue = translateTextValue(original);
    } else {
      if (ZH_REVERSE.has(text.trim()) || ORIGINAL_TEXT.has(node)) node.nodeValue = original;
    }
  });
  document.querySelectorAll('input[placeholder], textarea[placeholder], button[aria-label], [title]').forEach(el => {
    let store = ORIGINAL_ATTR.get(el);
    if (!store) { store = {}; ORIGINAL_ATTR.set(el, store); }
    ['placeholder','aria-label','title'].forEach(attr => {
      const current = attr === 'placeholder' ? el.placeholder : el.getAttribute(attr);
      if (!current) return;
      if (!store[attr]) store[attr] = current;
      const original = store[attr];
      if (lang === 'zh') {
        if (attr === 'placeholder') el.placeholder = translateTextValue(original);
        else el.setAttribute(attr, translateTextValue(original));
      } else {
        if (attr === 'placeholder') el.placeholder = original;
        else el.setAttribute(attr, original);
      }
    });
  });
}

const v11RenderAll = renderAll;
renderAll = function() { v11RenderAll(); applyLanguage(); };
const v11Toast = toast;
toast = function(message) { v11Toast(getLang() === 'zh' ? translateTextValue(message) : message); };
const v11RequestEvidence = requestEvidence;
requestEvidence = function(label) {
  if (getLang() !== 'zh') return v11RequestEvidence(label);
  const text = prompt(`完成证明\n\n你实际完成了什么：\n${translateTextValue(label)}\n\n写2–8个词，例如：“完成Q1-Q6” 或 “已带PE衣服”。`);
  if (!text || !text.trim()) return null;
  return text.trim().slice(0, 120);
};

document.addEventListener('DOMContentLoaded', () => {
  const enBtn = document.getElementById('langEnBtn');
  const zhBtn = document.getElementById('langZhBtn');
  if (enBtn) enBtn.addEventListener('click', () => { setLang('en'); toast('Language set to English'); });
  if (zhBtn) zhBtn.addEventListener('click', () => { setLang('zh'); toast('语言已切换为中文'); });
  applyLanguage();
});
