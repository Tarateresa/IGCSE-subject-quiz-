// app.js
const KEY_USERS = "igcse_users_v1";
const KEY_SESSION = "igcse_session_v1";
const KEY_PROGRESS = "igcse_progress_v1";
const KEY_THEME = "igcse_theme_v1";

function getUsers(){
  return JSON.parse(localStorage.getItem(KEY_USERS) || "[]");
}
function setUsers(users){
  localStorage.setItem(KEY_USERS, JSON.stringify(users));
}
function setSession(username){
  localStorage.setItem(KEY_SESSION, JSON.stringify({ username }));
}
function getSession(){
  return JSON.parse(localStorage.getItem(KEY_SESSION) || "null");
}
function logout(){
  localStorage.removeItem(KEY_SESSION);
}

function getProgressAll(){
  return JSON.parse(localStorage.getItem(KEY_PROGRESS) || "{}");
}
function setProgressAll(obj){
  localStorage.setItem(KEY_PROGRESS, JSON.stringify(obj));
}

function createSubjectProgress(){
  return { idx: 0, correct: 0, attempted: 0, answers: {} };
}

function normalizeSubjectProgress(p){
  if (!p || typeof p !== "object") p = createSubjectProgress();
  if (typeof p.idx !== "number") p.idx = 0;
  if (typeof p.correct !== "number") p.correct = 0;
  if (typeof p.attempted !== "number") p.attempted = 0;
  if (!p.answers || typeof p.answers !== "object") p.answers = {};
  return p;
}

function ensureUserProgress(username){
  const all = getProgressAll();
  if (!all[username]){
    all[username] = {
      bio: createSubjectProgress(),
      chem: createSubjectProgress(),
      phy: createSubjectProgress(),
      ict: createSubjectProgress(),
    };
    setProgressAll(all);
    return;
  }

  ["bio", "chem", "phy", "ict"].forEach(key => {
    all[username][key] = normalizeSubjectProgress(all[username][key]);
  });
  setProgressAll(all);
}

function progressForSubject(username, subjectKey){
  ensureUserProgress(username);
  const all = getProgressAll();
  return all[username][subjectKey];
}

function updateProgress(username, subjectKey, questionIndex, selectedIndex, isCorrect, skipped = false){
  const all = getProgressAll();
  const p = normalizeSubjectProgress(all[username][subjectKey]);
  const key = String(questionIndex);
  const previous = p.answers[key];

  // Prevent accidental double-counting if a question is submitted twice.
  if (!previous){
    p.attempted += 1;
    if (isCorrect) p.correct += 1;
  } else {
    if (previous.correct && !isCorrect) p.correct -= 1;
    if (!previous.correct && isCorrect) p.correct += 1;
  }

  p.answers[key] = {
    selected: selectedIndex,
    correct: isCorrect,
    skipped: Boolean(skipped),
    timestamp: Date.now()
  };

  p.idx = Math.max(p.idx, questionIndex + 1);
  all[username][subjectKey] = p;
  setProgressAll(all);
  return p;
}

function percentCorrect(username, subjectKey){
  const p = progressForSubject(username, subjectKey);
  if (p.attempted === 0) return 0;
  return Math.round((p.correct / p.attempted) * 100);
}

function getWrongAnswers(username, subjectKey){
  const p = progressForSubject(username, subjectKey);
  return Object.entries(p.answers)
    .filter(([, result]) => result && result.correct === false)
    .map(([index, result]) => ({ index: Number(index), ...result }));
}

function resetSubjectProgress(username, subjectKey){
  const all = getProgressAll();
  all[username][subjectKey] = createSubjectProgress();
  setProgressAll(all);
}

// ---------- Theme ----------
function applyTheme(theme){
  const chosen = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = chosen;
  localStorage.setItem(KEY_THEME, chosen);

  const toggle = document.getElementById("themeToggle");
  if (toggle){
    toggle.setAttribute("aria-label", chosen === "dark" ? "Switch to light mode" : "Switch to dark mode");
    toggle.innerHTML = chosen === "dark" ? "☀️ <span>Light</span>" : "🌙 <span>Dark</span>";
  }
}

function initTheme(){
  const saved = localStorage.getItem(KEY_THEME);
  const systemLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(saved || (systemLight ? "light" : "dark"));
}

function toggleTheme(){
  const current = document.documentElement.dataset.theme || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", initTheme);
