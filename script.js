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
  streak: 'eshq_v2_streak'
};

const state = {
  currentFilter: 'all',
  practiceRound: null,
  currentQuestionIndex: 0,
  score: 0
};

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
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
  const title = upcoming ? `Work on: ${upcoming.subject} — ${upcoming.title}` : 'Check the WA3 Board';
  return [
    { id: 'focus-deadline', text: title, sub: upcoming ? `Due ${formatLongDate(upcoming.date)}` : 'Everything is loaded' },
    { id: 'focus-practice', text: 'Complete one short Revision Lab round', sub: '5 questions is enough to start' },
    { id: 'focus-pack', text: 'Pack files for tomorrow', sub: 'Check school diary and timetable' }
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
}

function renderFocus() {
  const focusDone = load(LS.focusDone, {});
  const tasks = getFocusTasks();
  const list = document.getElementById('todayFocusList');
  list.innerHTML = tasks.map(t => `
    <label class="task-row ${focusDone[t.id] ? 'done' : ''}">
      <input type="checkbox" data-focus-id="${t.id}" ${focusDone[t.id] ? 'checked' : ''} />
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
  const mistakes = getMistakes();
  const mastered = getMastered();
  const history = getHistory();
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  document.getElementById('parentSummary').innerHTML = `
    <div class="summary-tile"><strong>${wa3Done}/${WA3_TASKS.length}</strong><span>WA3 completed</span></div>
    <div class="summary-tile"><strong>${plannerDone}/${plannerTasks.length}</strong><span>weekly tasks done</span></div>
    <div class="summary-tile"><strong>${history.length}</strong><span>practice rounds</span></div>
    <div class="summary-tile"><strong>${mastered.length}/${mistakes.length + mastered.length}</strong><span>mistakes mastered</span></div>
  `;
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
        <details class="notes-box" ${notes[t.id] ? 'open' : ''}>
          <summary>Notes / things to remember</summary>
          <textarea data-note-id="${t.id}" placeholder="Add teacher instructions, materials to bring, links, or reminders...">${notes[t.id] || ''}</textarea>
        </details>
      </article>
    `;
  }).join('');
}

function renderPlanner() {
  const planner = getPlanner();
  document.getElementById('plannerGrid').innerHTML = DAYS.map(day => {
    const tasks = planner[day] || [];
    return `
      <article class="planner-day">
        <h3>${day}</h3>
        ${tasks.length ? tasks.map(task => `
          <div class="planner-task ${task.done ? 'done' : ''}">
            <input type="checkbox" data-plan-day="${day}" data-plan-id="${task.id}" ${task.done ? 'checked' : ''}>
            <div class="planner-task-text"><strong>${task.text}</strong><span>${task.type || 'Task'}</span></div>
            <div class="task-actions">
              <button data-move-day="${day}" data-move-id="${task.id}">Move to tomorrow</button>
              <button data-delete-day="${day}" data-delete-id="${task.id}">Delete</button>
            </div>
          </div>
        `).join('') : '<div class="empty-small">No tasks yet. Add homework, revision or packing reminders.</div>'}
      </article>
    `;
  }).join('');
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
  `;
}

function renderAll() {
  renderDashboard();
  renderWa3Board();
  renderPlanner();
  renderRevisionControls();
  renderMistakeBook();
  renderProgress();
}

function setupEvents() {
  document.addEventListener('click', e => {
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
      done[e.target.dataset.focusId] = e.target.checked;
      save(LS.focusDone, done);
      toast(e.target.checked ? 'Focus task done' : 'Focus task reopened');
      renderAll();
    }
    if (e.target.matches('[data-wa3-id]')) {
      const done = getWa3Done();
      done[e.target.dataset.wa3Id] = e.target.checked;
      setWa3Done(done);
      toast(e.target.checked ? 'WA3 mission completed' : 'WA3 mission reopened');
      renderAll();
    }
    if (e.target.matches('[data-plan-id]')) {
      const planner = getPlanner();
      const task = planner[e.target.dataset.planDay].find(t => t.id === e.target.dataset.planId);
      if (task) task.done = e.target.checked;
      setPlanner(planner);
      toast(e.target.checked ? 'Task completed' : 'Task reopened');
      renderAll();
    }
    if (e.target.id === 'subjectSelect') renderTopicOptions();
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

function init() {
  setupEvents();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
