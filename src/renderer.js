'use strict';

/* ================================================================
   LANGUAGE DEFINITIONS
   ================================================================ */
const LANG_BY_EXT = {
  js:   { mode: 'javascript', label: 'JavaScript' },
  mjs:  { mode: 'javascript', label: 'JavaScript' },
  cjs:  { mode: 'javascript', label: 'JavaScript' },
  jsx:  { mode: { name: 'javascript', jsx: true }, label: 'JSX' },
  ts:   { mode: { name: 'javascript', typescript: true }, label: 'TypeScript' },
  tsx:  { mode: { name: 'javascript', typescript: true, jsx: true }, label: 'TSX' },
  py:   { mode: 'python', label: 'Python' },
  pyw:  { mode: 'python', label: 'Python' },
  html: { mode: 'htmlmixed', label: 'HTML' },
  htm:  { mode: 'htmlmixed', label: 'HTML' },
  css:  { mode: 'css', label: 'CSS' },
  scss: { mode: 'css', label: 'SCSS' },
  less: { mode: 'css', label: 'Less' },
  json: { mode: { name: 'javascript', json: true }, label: 'JSON' },
  md:   { mode: 'markdown', label: 'Markdown' },
  markdown: { mode: 'markdown', label: 'Markdown' },
  xml:  { mode: 'xml', label: 'XML' },
  svg:  { mode: 'xml', label: 'SVG' },
  sh:   { mode: 'shell', label: 'Shell' },
  bash: { mode: 'shell', label: 'Shell' },
  zsh:  { mode: 'shell', label: 'Shell' },
  c:    { mode: 'text/x-csrc', label: 'C' },
  cpp:  { mode: 'text/x-c++src', label: 'C++' },
  cc:   { mode: 'text/x-c++src', label: 'C++' },
  h:    { mode: 'text/x-c++src', label: 'C/C++' },
  hpp:  { mode: 'text/x-c++src', label: 'C++' },
  java: { mode: 'text/x-java', label: 'Java' },
  cs:   { mode: 'text/x-csharp', label: 'C#' },
  sql:  { mode: 'sql', label: 'SQL' },
  yaml: { mode: 'yaml', label: 'YAML' },
  yml:  { mode: 'yaml', label: 'YAML' },
  go:   { mode: 'go', label: 'Go' },
  rs:   { mode: 'rust', label: 'Rust' },
  php:  { mode: 'php', label: 'PHP' },
  rb:   { mode: 'ruby', label: 'Ruby' },
  lua:  { mode: 'lua', label: 'Lua' },
  swift: { mode: 'swift', label: 'Swift' },
  dart: { mode: 'dart', label: 'Dart' },
  kt:   { mode: 'text/x-kotlin', label: 'Kotlin' },
  kts:  { mode: 'text/x-kotlin', label: 'Kotlin' },
  r:    { mode: 'r', label: 'R' },
  pl:   { mode: 'perl', label: 'Perl' },
  pm:   { mode: 'perl', label: 'Perl' },
  groovy: { mode: 'groovy', label: 'Groovy' },
  gradle: { mode: 'groovy', label: 'Groovy' },
  hs:   { mode: 'haskell', label: 'Haskell' },
  lhs:  { mode: 'haskell', label: 'Haskell' },
  ps1:  { mode: 'powershell', label: 'PowerShell' },
  psm1: { mode: 'powershell', label: 'PowerShell' },
  psd1: { mode: 'powershell', label: 'PowerShell' },
  toml: { mode: 'toml', label: 'TOML' },
  diff: { mode: 'diff', label: 'Diff' },
  patch: { mode: 'diff', label: 'Diff' },
  vb:   { mode: 'vb', label: 'VB.NET' },
  vbs:  { mode: 'vbscript', label: 'VBScript' },
  properties: { mode: 'properties', label: 'Properties' },
  env:  { mode: 'properties', label: 'Properties' },
  ini:  { mode: 'properties', label: 'INI' },
  coffee: { mode: 'coffeescript', label: 'CoffeeScript' },
  jl:   { mode: 'julia', label: 'Julia' },
  nginx: { mode: 'nginx', label: 'Nginx' },
  erl:  { mode: 'erlang', label: 'Erlang' },
  hrl:  { mode: 'erlang', label: 'Erlang' },
  clj:  { mode: 'clojure', label: 'Clojure' },
  cljs: { mode: 'clojure', label: 'ClojureScript' },
  txt:  { mode: null, label: 'Plain Text' },
  log:  { mode: null, label: 'Plain Text' },
};

const LANG_BY_NAME = {
  'Plain Text':    { mode: null, label: 'Plain Text' },
  'JavaScript':    { mode: 'javascript', label: 'JavaScript' },
  'TypeScript':    { mode: { name: 'javascript', typescript: true }, label: 'TypeScript' },
  'Python':        { mode: 'python', label: 'Python' },
  'HTML':          { mode: 'htmlmixed', label: 'HTML' },
  'CSS':           { mode: 'css', label: 'CSS' },
  'JSON':          { mode: { name: 'javascript', json: true }, label: 'JSON' },
  'Markdown':      { mode: 'markdown', label: 'Markdown' },
  'XML':           { mode: 'xml', label: 'XML' },
  'Shell':         { mode: 'shell', label: 'Shell' },
  'C':             { mode: 'text/x-csrc', label: 'C' },
  'C++':           { mode: 'text/x-c++src', label: 'C++' },
  'Java':          { mode: 'text/x-java', label: 'Java' },
  'C#':            { mode: 'text/x-csharp', label: 'C#' },
  'Kotlin':        { mode: 'text/x-kotlin', label: 'Kotlin' },
  'SQL':           { mode: 'sql', label: 'SQL' },
  'YAML':          { mode: 'yaml', label: 'YAML' },
  'Go':            { mode: 'go', label: 'Go' },
  'Rust':          { mode: 'rust', label: 'Rust' },
  'PHP':           { mode: 'php', label: 'PHP' },
  'Ruby':          { mode: 'ruby', label: 'Ruby' },
  'Lua':           { mode: 'lua', label: 'Lua' },
  'Swift':         { mode: 'swift', label: 'Swift' },
  'Dart':          { mode: 'dart', label: 'Dart' },
  'R':             { mode: 'r', label: 'R' },
  'Perl':          { mode: 'perl', label: 'Perl' },
  'Groovy':        { mode: 'groovy', label: 'Groovy' },
  'Haskell':       { mode: 'haskell', label: 'Haskell' },
  'PowerShell':    { mode: 'powershell', label: 'PowerShell' },
  'TOML':          { mode: 'toml', label: 'TOML' },
  'Diff':          { mode: 'diff', label: 'Diff' },
  'VB.NET':        { mode: 'vb', label: 'VB.NET' },
  'VBScript':      { mode: 'vbscript', label: 'VBScript' },
  'Properties':    { mode: 'properties', label: 'Properties' },
  'CoffeeScript':  { mode: 'coffeescript', label: 'CoffeeScript' },
  'Julia':         { mode: 'julia', label: 'Julia' },
  'Nginx':         { mode: 'nginx', label: 'Nginx' },
  'Erlang':        { mode: 'erlang', label: 'Erlang' },
  'Clojure':       { mode: 'clojure', label: 'Clojure' },
};

function langFromExt(ext) {
  return LANG_BY_EXT[(ext || '').toLowerCase()] || { mode: null, label: 'Plain Text' };
}

// Returns the preferred file extension for a language label, e.g. 'Python' → 'py'
const LANG_DEFAULT_EXT = (() => {
  const map = {};
  for (const [ext, lang] of Object.entries(LANG_BY_EXT)) {
    if (!(lang.label in map)) map[lang.label] = ext;
  }
  return map;
})();

// For unsaved tabs, swap the fileName extension to match the new language
function applyLangExtToFileName(tab, newLang) {
  if (tab.filePath) return; // already saved — don't rename
  const newExt = LANG_DEFAULT_EXT[newLang.label];
  const base = tab.fileName.includes('.')
    ? tab.fileName.slice(0, tab.fileName.lastIndexOf('.'))
    : tab.fileName;
  tab.fileName = newExt ? `${base}.${newExt}` : base;
}

function makeFoldWidget() {
  const el = document.createElement('span');
  el.className = 'cm-fold-marker';
  el.textContent = '···';
  return el;
}

function extFromPath(filePath) {
  const parts = filePath.split('.');
  return parts.length > 1 ? parts.pop() : '';
}

function fileNameFromPath(filePath) {
  return filePath.split(/[\\/]/).pop();
}

function detectEOL(content) {
  if (content.includes('\r\n')) return 'CRLF';
  if (content.includes('\r')) return 'CR';
  return 'LF';
}

/* ================================================================
   STATE
   ================================================================ */
const tabs = [];
let tabCounter = 0;
let activeTabId = null;
let fontSize = 14;
// Find/Replace state
let findQuery = '';
let replaceQuery = '';
let findCaseSensitive = false;
let findWholeWord = false;
let findRegex = false;
let searchOverlay = null;
let allMatches = [];
let currentMatchIdx = -1;

// Split-view state
const splits = new Map();   // splitId → [tabId1, tabId2]
let splitIdCounter = 0;
let activeSplitId  = null;
let splitRatio     = 0.5;
let draggingTabId  = null;
let draggingFilePath = null;
let ctxMenuCleanup = null;

// Zen mode
let zenMode = false;

// Sidebar
let sidebarFolderPath = null;

// Terminal IPC dispatch maps
const termDataHandlers = new Map(); // termId → (data: string) => void
const termExitHandlers = new Map(); // termId → () => void

// addon-fit's UMD exposes the module wrapper object, not the class directly
const FitAddonClass = (typeof FitAddon === 'function') ? FitAddon : FitAddon.FitAddon;

/* ================================================================
   SETTINGS
   ================================================================ */
const SETTINGS_KEY = 'bn-settings';
const SESSION_KEY  = 'caret-session';

const DEFAULT_SETTINGS = {
  bgMode: 'default',      // 'default' | 'image'
  bgImagePath: null,
  accentColor: '#808080',
  fontFamily: 'default',
  fontSize: 14,
  lineHeight: 1.6,
  tabSize: 2,
  wordWrap: false,
};

let appSettings = { ...DEFAULT_SETTINGS };

const NAMED_ACCENTS = {
  default: '#808080',
  blue: '#4fc1ff', teal: '#4ec9b0', purple: '#c586c0',
  yellow: '#dcdcaa', orange: '#ce9178', red: '#f44747', green: '#6a9955',
};

let _fontDropdownEl = null;
let _cachedFonts = null;

const FONT_MAP = {
  'default':         "'Cascadia Code','Fira Code','JetBrains Mono','Consolas',monospace",
  'Cascadia Code':   "'Cascadia Code',monospace",
  'Fira Code':       "'Fira Code',monospace",
  'JetBrains Mono':  "'JetBrains Mono',monospace",
  'Consolas':        "Consolas,monospace",
  'Courier New':     "'Courier New',monospace",
};

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) appSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {}
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
  } catch {}
}

function saveSession() {
  try {
    const editorTabs = tabs.filter(t => t.type !== 'terminal' && t.type !== 'settings');
    const activeIndex = editorTabs.findIndex(t => t.id === activeTabId);

    let splitState = null;
    if (activeSplitId !== null && splits.has(activeSplitId)) {
      const [id1, id2] = splits.get(activeSplitId);
      const idx1 = editorTabs.findIndex(t => t.id === id1);
      const idx2 = editorTabs.findIndex(t => t.id === id2);
      if (idx1 >= 0 && idx2 >= 0) splitState = { idx1, idx2, ratio: splitRatio };
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify({
      tabs: editorTabs.filter(t => t.filePath).map(t => ({
        filePath: t.filePath,
        fileName: t.fileName,
        content: null, // always re-read from disk on restore
        isModified: false,
        cursor: t.editor.getCursor(),
        scrollTop: t.editor.getScrollInfo().top,
        eol: t.eol,
        langMode: t.lang?.mode ?? null,
      })),
      activeIndex: Math.max(0, activeIndex),
      splitState,
      sidebarPath: sidebarFolderPath || null,
      sidebarVisible: !document.body.classList.contains('sidebar-hidden'),
    }));
  } catch {}
}

async function restoreSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const session = JSON.parse(raw);
    if (!session?.tabs?.length) return false;

    let activeTab = null;
    const createdTabs = [];

    for (let i = 0; i < session.tabs.length; i++) {
      const saved = session.tabs[i];
      let content = saved.content;
      let filePath = saved.filePath;

      if (filePath && content === null) {
        try { content = await window.api.readFile(filePath); }
        catch { content = ''; filePath = null; }
      }

      const tab = createTab({ fileName: saved.fileName, filePath, content: content || '' });
      tab.isModified = saved.isModified || false;
      tab.eol = saved.eol || 'LF';
      if (saved.langMode && saved.langMode !== tab.lang?.mode) {
        const found = Object.values(LANG_BY_EXT).find(l => l.mode === saved.langMode)
                   || Object.values(LANG_BY_NAME).find(l => l.mode === saved.langMode);
        if (found) { tab.lang = found; tab.editor.setOption('mode', found.mode); }
      }
      tab.editor.setCursor(saved.cursor || { line: 0, ch: 0 });
      tab._restoreScroll = saved.scrollTop || 0;

      createdTabs.push(tab);
      if (i === session.activeIndex) activeTab = tab;
    }

    if (session.splitState) {
      const { idx1, idx2, ratio } = session.splitState;
      const t1 = createdTabs[idx1];
      const t2 = createdTabs[idx2];
      if (t1 && t2) {
        createSplit(t1.id, t2.id);
        splitRatio = ratio ?? 0.5;
        if (activeSplitId !== null) applySplitRatio(activeSplitId);
      }
    } else {
      const toActivate = activeTab || tabs[0];
      if (toActivate) {
        switchTab(toActivate.id);
        requestAnimationFrame(() => toActivate.editor?.scrollTo(null, toActivate._restoreScroll || 0));
      }
    }

    if (session.sidebarPath) {
      await openSidebarFolder(session.sidebarPath);
      if (!session.sidebarVisible) document.body.classList.add('sidebar-hidden');
    }

    return true;
  } catch (e) {
    console.error('Session restore failed:', e);
    return false;
  }
}

function applySettings() {
  const root = document.documentElement;
  const ff = appSettings.fontFamily;
  root.style.setProperty('--editor-font',
    (!ff || ff === 'default') ? FONT_MAP['default'] : `'${ff}', monospace`);
  root.style.setProperty('--editor-line-height', String(appSettings.lineHeight));
  root.style.setProperty('--accent', appSettings.accentColor || DEFAULT_SETTINGS.accentColor);
  setFontSize(appSettings.fontSize);
  tabs.forEach(t => {
    if (!t.editor) return;
    t.editor.setOption('tabSize', appSettings.tabSize);
    t.editor.setOption('indentUnit', appSettings.tabSize);
    t.editor.setOption('lineWrapping', appSettings.wordWrap);
    t.editor.refresh();
  });
  updateTerminalFonts();
  applyBackground();
}


function applyBackground() {
  const body = document.body;
  const ec   = document.getElementById('editor-container');
  body.classList.remove('bg-image');
  ec.style.backgroundImage = '';

  if (appSettings.bgImagePath) {
    const url = 'file:///' + appSettings.bgImagePath.replace(/\\/g, '/');
    ec.style.backgroundImage = `url(${JSON.stringify(url)})`;
    body.classList.add('bg-image');
  }
}

function initSettings() {
  loadSettings();
  applyBackground();
  document.documentElement.style.setProperty('--editor-font', FONT_MAP[appSettings.fontFamily] || FONT_MAP['default']);
  document.documentElement.style.setProperty('--editor-line-height', String(appSettings.lineHeight));
  document.documentElement.style.setProperty('--accent', appSettings.accentColor || DEFAULT_SETTINGS.accentColor);

  _fontDropdownEl = document.createElement('div');
  _fontDropdownEl.className = 'settings-dropdown';
  document.body.appendChild(_fontDropdownEl);

  document.getElementById('settings-btn').addEventListener('click', () => {
    const existing = tabs.find(t => t.type === 'settings');
    if (existing) switchTab(existing.id);
    else switchTab(createSettingsTab().id);
  });
}

function createSettingsTab() {
  const id = ++tabCounter;

  const wrapper = document.createElement('div');
  wrapper.className = 'editor-wrapper settings-wrapper hidden';
  wrapper.dataset.tabId = id;
  editorContainer.appendChild(wrapper);

  wrapper.innerHTML = `
<div class="settings-page">
  <div class="settings-content">
    <div class="settings-section">
      <div class="settings-section-title">Appearance</div>

      <div class="settings-row">
        <div class="settings-label">Background</div>
        <div class="seg-control" id="sttab-seg-bg">
          <button class="seg-btn" data-value="default">Default</button>
          <button class="seg-btn" data-value="image">Custom Image</button>
        </div>
        <div class="settings-sub" id="sttab-bg-path-row" style="display:none">
          <input type="text" class="settings-text-input" id="sttab-bg-path" placeholder="Paste image path here…" spellcheck="false" autocomplete="off">
          <button class="settings-apply-btn" id="sttab-bg-apply">Apply</button>
        </div>
      </div>

      <div class="settings-row">
        <div class="settings-label">Accent Color</div>
        <input type="text" class="settings-text-input" id="sttab-accent" placeholder="blue" spellcheck="false" autocomplete="off">
        <div class="settings-hint">// default · blue · teal · purple · yellow · orange · red · green · or any #hex</div>
      </div>

      <div class="settings-row">
        <div class="settings-label">Font Family</div>
        <div id="sttab-font-select">
          <button id="sttab-font-btn" type="button" title="Browse installed fonts">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <input type="text" id="sttab-font-input" placeholder="Font name…" spellcheck="false" autocomplete="off">
          <button id="sttab-font-default" type="button">Default</button>
        </div>
      </div>

      <div class="settings-row">
        <div class="settings-label">Font Size <span class="settings-val" id="sttab-val-font-size">${appSettings.fontSize}px</span></div>
        <input type="range" class="settings-slider" id="sttab-font-size" min="8" max="32" step="1" value="${appSettings.fontSize}">
      </div>

      <div class="settings-row">
        <div class="settings-label">Line Height <span class="settings-val" id="sttab-val-line-height">${appSettings.lineHeight.toFixed(1)}</span></div>
        <input type="range" class="settings-slider" id="sttab-line-height" min="1.2" max="2.2" step="0.1" value="${appSettings.lineHeight}">
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">Editor</div>

      <div class="settings-row">
        <div class="settings-label">Word Wrap</div>
        <div class="seg-control" id="sttab-seg-wordwrap">
          <button class="seg-btn" data-value="on">On</button>
          <button class="seg-btn" data-value="off">Off</button>
        </div>
      </div>
    </div>

  </div>
</div>`;

  const q = sel => wrapper.querySelector(sel);

  function syncTab() {
    q('#sttab-seg-bg').querySelectorAll('.seg-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.value === appSettings.bgMode));
    q('#sttab-bg-path-row').style.display = appSettings.bgMode === 'image' ? '' : 'none';

    const c = appSettings.accentColor;
    const named = Object.entries(NAMED_ACCENTS).find(([, hex]) => hex === c);
    q('#sttab-accent').value = named ? named[0] : (c || '');

    q('#sttab-font-input').value = appSettings.fontFamily === 'default' ? '' : appSettings.fontFamily;

    q('#sttab-seg-wordwrap').querySelectorAll('.seg-btn').forEach(b =>
      b.classList.toggle('active', (b.dataset.value === 'on') === !!appSettings.wordWrap));
  }

  syncTab();

  // Background segment
  q('#sttab-seg-bg').querySelectorAll('.seg-btn').forEach(b => {
    b.addEventListener('click', () => {
      const mode = b.dataset.value;
      if (mode === 'default') {
        appSettings.bgMode = 'default';
        appSettings.bgImagePath = null;
        saveSettings(); applyBackground(); syncTab();
      } else {
        appSettings.bgMode = 'image';
        syncTab();
      }
    });
  });

  // Custom image path
  q('#sttab-bg-apply').addEventListener('click', () => {
    const src = q('#sttab-bg-path').value.trim();
    if (!src) return;
    appSettings.bgImagePath = src;
    saveSettings(); applyBackground();
  });
  q('#sttab-bg-path').addEventListener('keydown', e => {
    if (e.key === 'Enter') q('#sttab-bg-apply').click();
  });

  // Accent color
  function applyAccentInput(val) {
    const t = val.trim().toLowerCase();
    const resolved = NAMED_ACCENTS[t] || (/^#[0-9a-f]{3,8}$/i.test(t) ? t : null);
    if (!resolved) return;
    appSettings.accentColor = resolved;
    document.documentElement.style.setProperty('--accent', resolved);
    saveSettings();
  }
  q('#sttab-accent').addEventListener('change', e => applyAccentInput(e.target.value));
  q('#sttab-accent').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); applyAccentInput(e.target.value); } });

  // Font family
  function applyFontInput(value) {
    const name = value.trim();
    appSettings.fontFamily = name || 'default';
    document.documentElement.style.setProperty('--editor-font',
      name ? `'${name}', monospace` : FONT_MAP['default']);
    tabs.forEach(t => t.editor?.refresh());
    updateTerminalFonts();
    saveSettings();
  }

  function populateFontDropdown(fonts, fontInput) {
    _fontDropdownEl.innerHTML = '';
    if (fonts.length === 0) {
      const e = document.createElement('div');
      e.className = 'settings-dropdown-empty';
      e.textContent = 'No matching fonts';
      _fontDropdownEl.appendChild(e);
      return;
    }
    fonts.forEach(family => {
      const item = document.createElement('button');
      item.className = 'menu-dropdown-item';
      item.textContent = family;
      item.classList.toggle('checked', family === appSettings.fontFamily);
      item.addEventListener('click', () => {
        fontInput.value = family;
        applyFontInput(family);
        closeFontDropdown();
      });
      _fontDropdownEl.appendChild(item);
    });
  }

  function closeFontDropdown() {
    _fontDropdownEl.classList.remove('open');
    q('#sttab-font-btn').classList.remove('open');
  }

  async function openFontDropdownST() {
    if (!_cachedFonts) {
      try {
        const raw = await window.queryLocalFonts();
        _cachedFonts = [...new Set(raw.map(f => f.family))].sort((a, b) => a.localeCompare(b));
      } catch {
        _cachedFonts = ['Cascadia Code', 'Consolas', 'Courier New', 'Fira Code',
                        'JetBrains Mono', 'Segoe UI', 'Source Code Pro'];
      }
    }
    const fontInput = q('#sttab-font-input');
    const qv = fontInput.value.trim().toLowerCase();
    populateFontDropdown(qv ? _cachedFonts.filter(f => f.toLowerCase().includes(qv)) : _cachedFonts, fontInput);

    const wrap = q('#sttab-font-select');
    const r = wrap.getBoundingClientRect();
    _fontDropdownEl.style.top   = (r.bottom + 4) + 'px';
    _fontDropdownEl.style.left  = r.left + 'px';
    _fontDropdownEl.style.width = r.width + 'px';
    _fontDropdownEl.classList.add('open');
    q('#sttab-font-btn').classList.add('open');
  }

  const fontBtnEl = q('#sttab-font-btn');
  fontBtnEl.addEventListener('click', e => {
    e.stopPropagation();
    _fontDropdownEl.classList.contains('open') ? closeFontDropdown() : openFontDropdownST();
  });

  const fontInputEl = q('#sttab-font-input');
  fontInputEl.addEventListener('input', () => {
    if (_fontDropdownEl.classList.contains('open') && _cachedFonts) {
      const qv = fontInputEl.value.trim().toLowerCase();
      populateFontDropdown(qv ? _cachedFonts.filter(f => f.toLowerCase().includes(qv)) : _cachedFonts, fontInputEl);
    }
  });
  fontInputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); applyFontInput(fontInputEl.value); closeFontDropdown(); }
    if (e.key === 'Escape') { closeFontDropdown(); fontInputEl.blur(); }
  });
  fontInputEl.addEventListener('blur', () => applyFontInput(fontInputEl.value));

  q('#sttab-font-default').addEventListener('click', () => {
    fontInputEl.value = '';
    applyFontInput('');
    closeFontDropdown();
  });

  const fontClickOutside = e => {
    if (!_fontDropdownEl.classList.contains('open')) return;
    if (wrapper.classList.contains('hidden') ||
        !_fontDropdownEl.contains(e.target) && e.target !== fontBtnEl)
      closeFontDropdown();
  };
  document.addEventListener('click', fontClickOutside);

  // Font size slider
  const fsSlider = q('#sttab-font-size');
  fsSlider.addEventListener('input', () => {
    const v = Number(fsSlider.value);
    appSettings.fontSize = v;
    q('#sttab-val-font-size').textContent = v + 'px';
    setFontSize(v);
    saveSettings();
  });

  // Line height slider
  const lhSlider = q('#sttab-line-height');
  lhSlider.addEventListener('input', () => {
    const v = parseFloat(lhSlider.value);
    appSettings.lineHeight = v;
    q('#sttab-val-line-height').textContent = v.toFixed(1);
    document.documentElement.style.setProperty('--editor-line-height', String(v));
    tabs.forEach(t => t.editor?.refresh());
    saveSettings();
  });

  // Word Wrap
  q('#sttab-seg-wordwrap').querySelectorAll('.seg-btn').forEach(b => {
    b.addEventListener('click', () => {
      appSettings.wordWrap = b.dataset.value === 'on';
      tabs.forEach(t => {
        if (t.editor) t.editor.setOption('lineWrapping', appSettings.wordWrap);
        if (t.term && t._ready) { fitTermTab(t); if (t.termId) window.api.terminalResize(t.termId, t.term.cols, t.term.rows); }
      });
      syncTab();
      saveSettings();
    });
  });

  const tab = {
    id, type: 'settings',
    fileName: 'Settings', filePath: null, isModified: false,
    lang: { label: 'Settings', mode: null }, eol: '',
    editor: null, smoothCaret: null, wrapper,
    _fontClickOutside: fontClickOutside,
  };
  tabs.push(tab);
  renderTabBar();
  return tab;
}

/* ================================================================
   CUSTOM DIALOG
   ================================================================ */
function showCustomDialog({ message, detail = '', anchor = null, anchorSide = 'bottom', primaryLabel = 'Save', files = null, confirm = false, danger = false }) {
  return new Promise(resolve => {
    const overlay = document.getElementById('dialog-overlay');
    const box     = document.getElementById('dialog-box');
    document.getElementById('dialog-message').textContent = message;
    document.getElementById('dialog-detail').textContent  = detail;
    const saveBtn = document.getElementById('dialog-btn-save');
    saveBtn.textContent = primaryLabel;
    saveBtn.classList.toggle('danger', danger);
    document.getElementById('dialog-btn-dontsave').style.display = confirm ? 'none' : '';

    // Files list (created on first use, reused after)
    let filesEl = document.getElementById('dialog-files');
    if (files && files.length > 0) {
      if (!filesEl) {
        filesEl = document.createElement('div');
        filesEl.id = 'dialog-files';
        box.insertBefore(filesEl, document.getElementById('dialog-buttons'));
      }
      filesEl.innerHTML = files.map(f => `<div class="dialog-file-item">${f}</div>`).join('');
      filesEl.style.display = '';
    } else if (filesEl) {
      filesEl.style.display = 'none';
    }

    const DIALOG_W = 260;
    const MARGIN   = 8;

    box.classList.remove('arrow-left');
    if (anchor && anchorSide === 'right') {
      box.classList.remove('no-arrow');
      box.classList.add('arrow-left');
      const r = anchor.getBoundingClientRect();
      box.style.left = (r.right + 16) + 'px';
      box.style.top  = (r.top + r.height / 2 - 80) + 'px';
    } else if (anchor) {
      box.classList.remove('no-arrow');
      const r = anchor.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      let left = cx - DIALOG_W / 2;
      left = Math.max(MARGIN, Math.min(window.innerWidth - DIALOG_W - MARGIN, left));
      const arrowX = Math.max(16, Math.min(DIALOG_W - 16, cx - left));
      box.style.left = left + 'px';
      box.style.top  = (r.bottom + 16) + 'px';
      box.style.setProperty('--arrow-x', arrowX + 'px');
    } else {
      box.classList.add('no-arrow');
      box.style.left = Math.max(MARGIN, (window.innerWidth  - DIALOG_W) / 2) + 'px';
      box.style.top  = Math.max(MARGIN, (window.innerHeight - 200) / 2) + 'px';
    }

    let resolved = false;
    function cleanup(result) {
      if (resolved) return;
      resolved = true;
      overlay.classList.remove('open');
      resolve(result);
    }

    overlay.onclick = (e) => { if (e.target === overlay) cleanup(2); };

    document.getElementById('dialog-btn-save').onclick     = () => cleanup(0);
    document.getElementById('dialog-btn-dontsave').onclick = () => cleanup(1);
    document.getElementById('dialog-btn-cancel').onclick   = () => cleanup(2);

    requestAnimationFrame(() => {
      if (anchor && anchorSide === 'right') {
        const r = anchor.getBoundingClientRect();
        const cy = r.top + r.height / 2;
        const bh = box.offsetHeight || 140;
        const top = Math.max(MARGIN, Math.min(window.innerHeight - bh - MARGIN, cy - bh / 2));
        box.style.top = top + 'px';
        box.style.setProperty('--arrow-y', Math.max(16, Math.min(bh - 16, cy - top)) + 'px');
      }
      requestAnimationFrame(() => overlay.classList.add('open'));
    });
  });
}

/* ================================================================
   DOM REFS
   ================================================================ */
const tabsEl        = document.getElementById('tabs');
const tabsScrollEl  = document.getElementById('tabs-scroll');
const newTabBtnEl   = document.getElementById('new-tab-btn');

const editorContainer = document.getElementById('editor-container');
const findBar       = document.getElementById('find-bar');
const findInput     = document.getElementById('find-input');
const replaceInput  = document.getElementById('replace-input');
const findCount     = document.getElementById('find-count');
const replaceRow    = document.getElementById('replace-row');
const optCase       = document.getElementById('opt-case');
const optWord       = document.getElementById('opt-word');
const optRegex      = document.getElementById('opt-regex');
const statusBarEl   = document.getElementById('status-bar');
const statusLang    = document.getElementById('status-lang');
const statusEol     = document.getElementById('status-eol');
const statusCursor  = document.getElementById('status-cursor');
const statusSel     = document.getElementById('status-selection');


// Smooth horizontal scroll on the tab bar
{
  let _tabScrollTarget = 0;
  let _tabScrollAnim   = null;

  function _tickTabScroll() {
    const diff = _tabScrollTarget - tabsScrollEl.scrollLeft;
    if (Math.abs(diff) < 0.5) {
      tabsScrollEl.scrollLeft = _tabScrollTarget;
      _tabScrollAnim = null;
      return;
    }
    tabsScrollEl.scrollLeft += diff * 0.18;
    _tabScrollAnim = requestAnimationFrame(_tickTabScroll);
  }

  tabsScrollEl.addEventListener('wheel', e => {
    if (e.deltaY !== 0 && e.deltaX === 0) {
      e.preventDefault();
      const max = tabsScrollEl.scrollWidth - tabsScrollEl.clientWidth;
      _tabScrollTarget = Math.max(0, Math.min(max, _tabScrollTarget + e.deltaY));
      if (!_tabScrollAnim) _tabScrollAnim = requestAnimationFrame(_tickTabScroll);
    }
  }, { passive: false });
}

/* ================================================================
   SMOOTH SCROLL
   ================================================================ */
function setupSmoothScroll(cm) {
  const scroller = cm.getScrollerElement();
  let targetY = 0;
  let animId  = null;

  function tick() {
    const diff = targetY - scroller.scrollTop;
    if (Math.abs(diff) < 0.5) {
      scroller.scrollTop = targetY;
      animId = null;
      return;
    }
    scroller.scrollTop += diff * 0.14;
    animId = requestAnimationFrame(tick);
  }

  // Sync target when CM scrolls programmatically (keyboard, goToLine, etc.)
  cm.on('scroll', () => { if (!animId) targetY = scroller.scrollTop; });

  scroller.addEventListener('wheel', e => {
    if (e.ctrlKey) return; // leave Ctrl+scroll for zoom
    e.preventDefault();
    const px = e.deltaMode === 1 ? e.deltaY * 40
             : e.deltaMode === 2 ? e.deltaY * scroller.clientHeight
             : e.deltaY;
    targetY = Math.max(0, Math.min(scroller.scrollHeight - scroller.clientHeight, targetY + px));
    if (!animId) animId = requestAnimationFrame(tick);
  }, { passive: false });
}

/* ================================================================
   ZEN MODE
   ================================================================ */
let zenToastTimer = null;

/* ================================================================
   SIDEBAR / FILE EXPLORER
   ================================================================ */
function toggleSidebar() {
  document.body.classList.toggle('sidebar-hidden');
  requestAnimationFrame(updateStatusLangPosition);
}

async function openSidebarFolder(folderPath) {
  if (!folderPath) folderPath = await window.api.openFolderDialog();
  if (!folderPath) return;
  sidebarFolderPath = folderPath;
  const nameEl = document.getElementById('sidebar-folder-name');
  nameEl.textContent = folderPath.split(/[/\\]/).pop() || folderPath;
  nameEl.title = folderPath;
  await refreshSidebarTree();
  document.body.classList.remove('sidebar-hidden');
  closeSidebarPathBar();
}

function closeSidebarPathBar() {
  const bar = document.getElementById('sidebar-path-bar');
  bar.classList.remove('open');
  document.getElementById('sidebar-path-input').value = '';
}

async function refreshSidebarTree() {
  const tree = document.getElementById('sidebar-tree');
  tree.innerHTML = '';
  if (!sidebarFolderPath) return;
  const entries = await window.api.readDir(sidebarFolderPath);
  if (entries.length === 0) {
    tree.innerHTML = '<div class="sidebar-empty">Empty folder</div>';
    return;
  }
  entries.forEach(e => tree.appendChild(makeTreeItem(e, sidebarFolderPath, 0)));
}

function joinPath(a, b) {
  const sep = a.includes('/') ? '/' : '\\';
  return a.replace(/[/\\]+$/, '') + sep + b;
}

function makeTreeItem(entry, parentPath, depth) {
  const fullPath = joinPath(parentPath, entry.name);
  const item = document.createElement('div');
  item.className = `tree-item ${entry.isDir ? 'tree-dir' : 'tree-file'}`;
  item.dataset.path = fullPath;

  const row = document.createElement('div');
  row.className = 'tree-row';
  row.style.paddingLeft = `${6 + depth * 14}px`;

  if (entry.isDir) {
    row.innerHTML = `
      <svg class="tree-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M3 2l4 3-4 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    const nameSpan = document.createElement('span');
    nameSpan.className = 'tree-name';
    nameSpan.textContent = entry.name;
    row.appendChild(nameSpan);

    const childrenEl = document.createElement('div');
    childrenEl.className = 'tree-children';
    const childrenInner = document.createElement('div');
    childrenInner.className = 'tree-children-inner';
    childrenEl.appendChild(childrenInner);

    item.appendChild(row);
    item.appendChild(childrenEl);

    row.addEventListener('click', async () => {
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      if (!isOpen && childrenInner.children.length === 0) {
        const sub = await window.api.readDir(fullPath).catch(() => []);
        if (sub.length === 0) {
          childrenInner.innerHTML = '<div class="tree-empty">Empty</div>';
        } else {
          sub.forEach(e => childrenInner.appendChild(makeTreeItem(e, fullPath, depth + 1)));
        }
      }
    });
    row.addEventListener('contextmenu', e => showTreeContextMenu(e, { entryPath: fullPath, isDir: true, item, nameSpan, childrenInner, parentPath }));
  } else {
    row.innerHTML = `<span style="width:10px;flex-shrink:0"></span>`;
    const nameSpan = document.createElement('span');
    nameSpan.className = 'tree-name';
    nameSpan.textContent = entry.name;
    row.appendChild(nameSpan);
    item.appendChild(row);

    row.setAttribute('draggable', 'true');
    row.addEventListener('dragstart', e => {
      draggingFilePath = fullPath;
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/plain', fullPath);
      startDragGhost(row, e);
    });
    row.addEventListener('dragend', () => { draggingFilePath = null; endDragGhost(); });

    row.addEventListener('click', async () => {
      document.querySelectorAll('.tree-row.active').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
      try {
        const content = await window.api.readFile(fullPath);
        openFileInTab(fullPath, content);
      } catch { /* unreadable */ }
    });
    row.addEventListener('contextmenu', e => showTreeContextMenu(e, { entryPath: fullPath, isDir: false, item, nameSpan, childrenInner: null, parentPath }));
  }

  return item;
}

function showTreeContextMenu(e, { entryPath, isDir, item, nameSpan, childrenInner, parentPath }) {
  e.preventDefault();
  e.stopPropagation();
  const menu = document.getElementById('tab-context-menu');
  menu.innerHTML = '';

  const addItem = (label, action, cls = '') => {
    const btn = document.createElement('button');
    btn.className = 'menu-dropdown-item' + (cls ? ' ' + cls : '');
    btn.textContent = label;
    btn.addEventListener('click', () => { closeContextMenu(); action(); });
    menu.appendChild(btn);
  };
  const addSep = () => {
    const sep = document.createElement('div');
    sep.className = 'menu-separator';
    menu.appendChild(sep);
  };

  if (isDir) {
    addItem('New File',   () => createTreeEntry(entryPath, childrenInner, item, false));
    addItem('New Folder', () => createTreeEntry(entryPath, childrenInner, item, true));
    addSep();
  }
  addItem('Rename…', () => startTreeRename(entryPath, item, nameSpan, parentPath));
  addSep();
  addItem('Delete', () => deleteTreeEntry(entryPath, item), 'item-accent');

  menu.style.left = e.clientX + 'px';
  menu.style.top  = e.clientY + 'px';
  menu.classList.add('open');

  requestAnimationFrame(() => {
    const r = menu.getBoundingClientRect();
    if (r.right  > window.innerWidth)  menu.style.left = (e.clientX - r.width)  + 'px';
    if (r.bottom > window.innerHeight) menu.style.top  = (e.clientY - r.height) + 'px';
  });

  if (ctxMenuCleanup) ctxMenuCleanup();
  const handler = ev => { if (!menu.contains(ev.target)) closeContextMenu(); };
  setTimeout(() => document.addEventListener('mousedown', handler), 0);
  ctxMenuCleanup = () => document.removeEventListener('mousedown', handler);
}

async function startTreeRename(oldPath, item, nameSpan, parentPath) {
  const oldName = oldPath.replace(/.*[\\/]/, '');
  const isDir   = item.classList.contains('tree-dir');

  const input = document.createElement('input');
  input.className = 'tree-rename-input';
  input.value = oldName;
  nameSpan.replaceWith(input);
  input.focus();
  input.select();

  let done = false;
  const commit = async () => {
    if (done) return;
    done = true;
    const newName = input.value.trim();
    input.replaceWith(nameSpan);
    if (!newName || newName === oldName) return;
    const newPath = joinPath(parentPath, newName);
    try {
      await window.api.fsRename(oldPath, newPath);
      nameSpan.textContent = newName;
      item.dataset.path = newPath;
      if (isDir) {
        item.classList.remove('open');
        const ci = item.querySelector('.tree-children-inner');
        if (ci) ci.innerHTML = '';
      } else {
        tabs.forEach(t => {
          if (t.filePath === oldPath) { t.filePath = newPath; t.fileName = newName; }
        });
        renderTabBar();
        updateWindowTitle();
      }
    } catch (err) { console.error('Rename failed:', err); }
  };
  const cancel = () => {
    if (done) return;
    done = true;
    input.replaceWith(nameSpan);
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); commit(); }
    if (e.key === 'Escape') { e.preventDefault(); cancel(); }
    e.stopPropagation();
  });
  input.addEventListener('blur', commit);
}

async function deleteTreeEntry(entryPath, item) {
  const name = entryPath.replace(/.*[\\/]/, '');
  const r = await showCustomDialog({
    message: `Delete "${name}"?`,
    detail: 'This action cannot be undone.',
    primaryLabel: 'Delete',
    anchor: item.querySelector(':scope > .tree-row'),
    anchorSide: 'right',
    confirm: true,
  });
  if (r !== 0) return;
  try {
    await window.api.fsDelete(entryPath);
    item.remove();
    const norm = p => p.replace(/\\/g, '/');
    const base = norm(entryPath);
    tabs.filter(t => t.filePath && (norm(t.filePath) === base || norm(t.filePath).startsWith(base + '/')))
        .forEach(t => closeTab(t.id));
  } catch (err) { console.error('Delete failed:', err); }
}

async function createTreeEntry(dirPath, childrenInner, dirItem, isDir) {
  if (dirItem && !dirItem.classList.contains('open')) dirItem.classList.add('open');

  const newDepth = dirItem
    ? Math.round((parseFloat(dirItem.querySelector(':scope > .tree-row').style.paddingLeft) - 6) / 14) + 1
    : 0;

  if (dirItem) {
    const hasEmpty = childrenInner.children.length === 1 && childrenInner.children[0].classList?.contains('tree-empty');
    if (childrenInner.children.length === 0 || hasEmpty) {
      if (hasEmpty) childrenInner.innerHTML = '';
      const sub = await window.api.readDir(dirPath).catch(() => []);
      sub.forEach(e => childrenInner.appendChild(makeTreeItem(e, dirPath, newDepth)));
    }
  }

  const tempRow = document.createElement('div');
  tempRow.className = 'tree-row';
  tempRow.style.paddingLeft = `${6 + newDepth * 14}px`;
  tempRow.innerHTML = `<span style="width:10px;flex-shrink:0"></span>`;

  const input = document.createElement('input');
  input.className = 'tree-rename-input';
  input.placeholder = isDir ? 'folder name' : 'file name';
  tempRow.appendChild(input);
  childrenInner.insertBefore(tempRow, childrenInner.firstChild);
  input.focus();

  let done = false;
  const commit = async () => {
    if (done) return;
    done = true;
    const name = input.value.trim();
    tempRow.remove();
    if (!name) return;
    const newPath = joinPath(dirPath, name);
    try {
      if (isDir) await window.api.fsCreateDir(newPath);
      else await window.api.fsCreateFile(newPath);
      const newItem = makeTreeItem({ name, isDir }, dirPath, newDepth);
      const existing = [...childrenInner.querySelectorAll(':scope > .tree-item')];
      let inserted = false;
      for (const el of existing) {
        const elIsDir  = el.classList.contains('tree-dir');
        const elName   = el.dataset.path.replace(/.*[\\/]/, '');
        if ((isDir && !elIsDir) ||
            (isDir === elIsDir && name.localeCompare(elName, undefined, { sensitivity: 'base' }) < 0)) {
          childrenInner.insertBefore(newItem, el);
          inserted = true;
          break;
        }
      }
      if (!inserted) childrenInner.appendChild(newItem);
    } catch (err) { console.error('Create failed:', err); }
  };
  const cancel = () => {
    if (done) return;
    done = true;
    tempRow.remove();
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); commit(); }
    if (e.key === 'Escape') { e.preventDefault(); cancel(); }
    e.stopPropagation();
  });
  input.addEventListener('blur', commit);
}

function initSidebarResize() {
  const resizer = document.getElementById('sidebar-resizer');
  resizer.addEventListener('mousedown', e => {
    e.preventDefault();
    const startX = e.clientX;
    const startW = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w')) || 220;
    resizer.classList.add('dragging');
    document.body.classList.add('sidebar-resizing');
    const onMove = e => {
      const w = Math.max(120, Math.min(520, startW + (e.clientX - startX)));
      document.documentElement.style.setProperty('--sidebar-w', w + 'px');
      updateStatusLangPosition();
    };
    const onUp = () => {
      resizer.classList.remove('dragging');
      document.body.classList.remove('sidebar-resizing');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

function toggleZenMode() {
  zenMode = !zenMode;

  // #menu-bar normally has overflow:visible so dropdowns work.
  // Temporarily set overflow:hidden so max-height can animate it closed/open.
  const menuBar = document.getElementById('menu-bar');
  menuBar.style.overflow = 'hidden';
  const cleanup = () => { menuBar.style.overflow = ''; };
  menuBar.addEventListener('transitionend', cleanup, { once: true });

  document.body.classList.toggle('zen-mode', zenMode);

  if (zenMode) {
    const toast = document.getElementById('zen-toast');
    toast.classList.add('show');
    if (zenToastTimer) clearTimeout(zenToastTimer);
    zenToastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  // Give editors/terminals a moment to see new size
  setTimeout(() => {
    const refreshTab = t => {
      if (!t) return;
      if (t.type === 'terminal') { try { t.fitAddon?.fit(); } catch {} }
      else t.editor?.refresh();
    };
    if (activeSplitId) {
      const [id1, id2] = splits.get(activeSplitId);
      refreshTab(tabs.find(t => t.id === id1));
      refreshTab(tabs.find(t => t.id === id2));
    } else {
      refreshTab(tabs.find(t => t.id === activeTabId));
    }
  }, 340);
}

/* ================================================================
   TAB MANAGEMENT
   ================================================================ */
/* ================================================================
   SMOOTH CARET
   ================================================================ */
function setupSmoothCaret(cm) {
  const wrapper = cm.getWrapperElement();
  const cursors = wrapper.querySelector('.CodeMirror-cursors');

  // Attach to the stable .CodeMirror wrapper — CM5 never touches this element,
  // so it is NEVER removed from the DOM.  That's critical: CSS transitions only
  // play when the browser can compare the element's previous computed transform
  // to its new one.  If the element is removed and re-inserted between two moves,
  // the browser has no "from" state and the transition is skipped entirely.
  const el = document.createElement('div');
  el.className = 'smooth-caret unfocused';
  wrapper.appendChild(el);

  let curX = 0;
  let curY = 0;
  let blinkTimer = null;
  let initialized = false;

  function placeCaret(instant) {
    if (!cm.hasFocus()) { el.classList.add('unfocused'); return; }
    // Native cursor is the first .CodeMirror-cursor in the layer.
    const native = cursors.querySelector('.CodeMirror-cursor');
    if (!native) return;

    // getBoundingClientRect gives viewport-relative coords for both elements.
    // Subtracting the wrapper rect converts to wrapper-local coords — this
    // correctly accounts for the gutter width, editor scroll, and page scroll.
    const nR = native.getBoundingClientRect();
    const wR = wrapper.getBoundingClientRect();
    const newX = nR.left - wR.left;
    const newY = nR.top  - wR.top;
    const h    = nR.height || cm.defaultTextHeight();

    el.style.height = h + 'px';

    if (!initialized) {
      // First paint — snap with no animation.
      el.style.transition = 'none';
      el.style.transform  = `translate(${newX}px,${newY}px)`;
      // Allow one frame to pass so the transition property takes effect for
      // all subsequent moves.
      requestAnimationFrame(() => { el.style.transition = ''; });
      curX = newX; curY = newY;
      initialized = true;
      return;
    }

    const dist = Math.hypot(newX - curX, newY - curY);

    if (instant || dist > 400) {
      // Large jump — snap immediately, then re-enable transitions.
      el.style.transition = 'none';
      el.style.transform  = `translate(${newX}px,${newY}px)`;
      requestAnimationFrame(() => { el.style.transition = ''; });
    } else {
      el.style.transform = `translate(${newX}px,${newY}px)`;
    }

    curX = newX; curY = newY;

    // Word-style blink restart: solid while moving, blink after idle.
    el.classList.remove('blinking');
    if (blinkTimer) clearTimeout(blinkTimer);
    blinkTimer = setTimeout(() => el.classList.add('blinking'), 600);
  }

  // Watch the cursor layer for position changes.  CM5 rebuilds its cursor
  // elements on every change, so MutationObserver is the right hook.
  const observer = new MutationObserver(() => placeCaret(false));
  observer.observe(cursors, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style'],
  });

  cm.on('focus', () => {
    el.classList.remove('unfocused');
    placeCaret(true);
    if (blinkTimer) clearTimeout(blinkTimer);
    blinkTimer = setTimeout(() => el.classList.add('blinking'), 600);
  });

  cm.on('blur', () => {
    el.classList.add('unfocused');
    el.classList.remove('blinking');
    if (blinkTimer) clearTimeout(blinkTimer);
  });

  // Initial sync after the first CM render pass.
  cm.on('update', function onFirstUpdate() {
    placeCaret(true);
    cm.off('update', onFirstUpdate);
  });

  return { el, observer,
    forceUnfocus() {
      el.classList.add('unfocused');
      el.classList.remove('blinking');
      if (blinkTimer) clearTimeout(blinkTimer);
    },
    destroy() {
      observer.disconnect();
      if (blinkTimer) clearTimeout(blinkTimer);
      el.remove();
    }
  };
}


function buildTermTheme() {
  const s = getComputedStyle(document.documentElement);
  const g = v => s.getPropertyValue(v).trim();
  return {
    background:         g('--base')    || '#1e1e1e',
    foreground:         g('--text')    || '#d4d4d4',
    cursor:             g('--cursor')  || '#aeafad',
    cursorAccent:       g('--base')    || '#1e1e1e',
    selectionBackground: 'rgba(80,80,80,0.4)',
    black:   '#1e1e1e', red:     '#f44747', green:   '#6a9955', yellow:  '#dcdcaa',
    blue:    '#4fc1ff', magenta: '#c586c0', cyan:    '#4ec9b0', white:   '#d4d4d4',
    brightBlack: '#808080', brightRed: '#f44747', brightGreen: '#6a9955',
    brightYellow: '#dcdcaa', brightBlue: '#4fc1ff', brightMagenta: '#c586c0',
    brightCyan: '#4ec9b0', brightWhite: '#ffffff',
  };
}

function setupTerminalCaret(term, container) {
  const screen = container.querySelector('.xterm-screen');
  if (!screen) return null;

  const caret = document.createElement('div');
  caret.className = 'smooth-caret terminal-caret unfocused';
  screen.appendChild(caret);

  let blinkTimer = null;
  let curX = 0, curY = 0;
  let initialized = false;
  let rafPending = false;

  function applyPos(instant) {
    rafPending = false;
    // Read position directly from xterm's own cursor element — always correct regardless of font/zoom
    const nc = screen.querySelector('.xterm-cursor');
    if (!nc) { caret.style.opacity = '0'; return; }

    const ncRect = nc.getBoundingClientRect();
    const scRect = screen.getBoundingClientRect();

    // Hide when cursor is scrolled outside the visible terminal area
    if (ncRect.width === 0 || ncRect.top >= scRect.bottom || ncRect.bottom <= scRect.top) {
      caret.style.opacity = '0';
      return;
    }
    caret.style.opacity = '';

    const newX = ncRect.left - scRect.left;
    const newY = ncRect.top  - scRect.top;
    const dist = Math.hypot(newX - curX, newY - curY);

    if (!initialized || instant || dist > 400) {
      caret.style.transition = 'none';
      caret.style.transform  = `translate(${newX}px,${newY}px)`;
      caret.style.height     = ncRect.height + 'px';
      requestAnimationFrame(() => { caret.style.transition = ''; });
      initialized = true;
    } else {
      caret.style.transform = `translate(${newX}px,${newY}px)`;
    }

    curX = newX; curY = newY;
    caret.classList.remove('blinking');
    clearTimeout(blinkTimer);
    blinkTimer = setTimeout(() => caret.classList.add('blinking'), 600);
  }

  function scheduleUpdate(instant) {
    if (instant) { applyPos(true); return; }
    if (!rafPending) { rafPending = true; requestAnimationFrame(() => applyPos(false)); }
  }

  term.onRender(() => scheduleUpdate(false));
  term.onResize(() => requestAnimationFrame(() => scheduleUpdate(true)));
  container.addEventListener('focusin',  () => { caret.classList.remove('unfocused'); scheduleUpdate(true); });
  container.addEventListener('focusout', () => {
    caret.classList.add('unfocused');
    caret.classList.remove('blinking');
    clearTimeout(blinkTimer);
  });

  // Called by updateTerminalFonts after xterm repaints with new metrics
  caret.forceRecalc = () => requestAnimationFrame(() => scheduleUpdate(true));

  return caret;
}

function createTerminalTab({ cwd = null } = {}) {
  const id = ++tabCounter;

  const wrapper = document.createElement('div');
  wrapper.className = 'editor-wrapper hidden';
  wrapper.dataset.tabId = id;
  editorContainer.appendChild(wrapper);

  const termContainer = document.createElement('div');
  termContainer.className = 'term-container';
  wrapper.appendChild(termContainer);

  // Pane status bar for split view (mirrors editor tab paneStatus)
  const termPaneStatus = document.createElement('div');
  termPaneStatus.className = 'pane-status';
  termPaneStatus.style.display = 'none';
  const termPsLang   = document.createElement('span');
  const termPsCursor = document.createElement('span');
  termPaneStatus.appendChild(termPsLang);
  termPaneStatus.appendChild(termPsCursor);

  const term = new Terminal({
    fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--editor-font').trim()
                || "'Cascadia Code', Consolas, monospace",
    fontSize: appSettings.fontSize,
    theme: buildTermTheme(),
    cursorStyle: 'bar',
    cursorBlink: false,
    scrollback: 5000,
  });

  const fitAddon = new FitAddonClass();
  term.loadAddon(fitAddon);

  // Intercept app-level shortcuts that xterm would otherwise swallow
  term.attachCustomKeyEventHandler((e) => {
    if (e.type !== 'keydown') return true;
    const ctrl = e.ctrlKey || e.metaKey;
    const intercept = () => { e.stopPropagation(); e.preventDefault(); };
    if (e.key === 'F11') { intercept(); toggleZenMode(); return false; }
    if (ctrl && e.key === 'w') { intercept(); closeTab(tab.id); return false; }
    if (ctrl && (e.key === 't' || e.key === 'T') && !e.shiftKey && !e.altKey) { intercept(); handleAction('new-file'); return false; }
    if (ctrl && (e.key === 't' || e.key === 'T') && e.shiftKey && !e.altKey) { intercept(); handleAction('new-terminal'); return false; }
    if (ctrl && e.key === 'Tab') { intercept(); switchToRelativeTab(e.shiftKey ? -1 : 1); return false; }
    return true;
  });

  const tab = {
    id, type: 'terminal',
    fileName: 'PowerShell', filePath: null, isModified: false,
    lang: { label: 'Terminal', mode: null }, eol: 'LF',
    editor: null, smoothCaret: null, wrapper,
    term, termId: null, fitAddon, resizeObserver: null,
    _ready: false, _hScroll: 0, _termContainer: termContainer,
    paneStatus: termPaneStatus, _psLang: termPsLang, _psCursor: termPsCursor,
  };
  tabs.push(tab);
  wrapper.appendChild(termPaneStatus);
  addPaneDropListeners(wrapper, () => tab);

  // Called once, the first time this terminal becomes visible.
  // term.open() needs a visible element with real dimensions.
  tab._init = async () => {
    if (tab._ready) return;
    tab._ready = true;

    term.open(termContainer);
    // Wait one frame so the browser lays out the now-visible element
    await new Promise(r => requestAnimationFrame(r));
    fitTermTab(tab);

    termContainer.addEventListener('wheel', (e) => {
      if (!e.shiftKey || appSettings.wordWrap) return;
      const screen = termContainer.querySelector('.xterm-screen');
      if (!screen) return;
      const canvas = screen.querySelector('canvas');
      const maxScroll = canvas ? Math.max(0, canvas.offsetWidth - termContainer.clientWidth) : 0;
      if (maxScroll <= 0) return;
      e.preventDefault();
      tab._hScroll = Math.max(0, Math.min(maxScroll, tab._hScroll + e.deltaY));
      screen.style.transform = tab._hScroll > 0 ? `translateX(${-tab._hScroll}px)` : '';
    }, { passive: false });

    tab.smoothCaret = setupTerminalCaret(term, termContainer);

    // Resize observer for subsequent layout changes
    const ro = new ResizeObserver(() => {
      if (wrapper.offsetParent !== null) {
        fitTermTab(tab);
        if (tab.termId != null) window.api.terminalResize(tab.termId, term.cols, term.rows);
      }
    });
    ro.observe(wrapper);
    tab.resizeObserver = ro;

    const termId = await window.api.createTerminal({ rows: term.rows, cols: term.cols, cwd });
    if (termId && !termId.error) {
      tab.termId = termId;
      term.onData(data => window.api.terminalInput(termId, data));
      termDataHandlers.set(termId, data => term.write(data));
      termExitHandlers.set(termId, () => {
        const t = tabs.find(tt => tt.termId === termId);
        if (t) { t.fileName = 'PowerShell [done]'; renderTabBar(); }
      });
      window.api.terminalResize(termId, term.cols, term.rows);
    } else {
      term.write('\r\nTerminal unavailable: node-pty could not be loaded.\r\n');
    }
    term.focus();
  };

  renderTabBar();
  return tab;
}

function addPaneDropListeners(wrapper, getTab) {
  const isDroppable = (tab) => {
    const sid = getSplitForTab(tab.id);
    if (sid === null || sid !== activeSplitId) return false;
    if (draggingFilePath) return true;
    if (draggingTabId && draggingTabId !== tab.id) return true;
    return false;
  };

  wrapper.addEventListener('dragover', e => {
    const tab = getTab();
    if (!isDroppable(tab)) return;
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = draggingTabId ? 'move' : 'copy';
    wrapper.classList.add('drop-target');
  }, true);
  wrapper.addEventListener('dragleave', e => {
    if (!wrapper.contains(e.relatedTarget)) wrapper.classList.remove('drop-target');
  }, true);
  wrapper.addEventListener('drop', async e => {
    wrapper.classList.remove('drop-target');
    const tab = getTab();
    const sid = getSplitForTab(tab.id);
    if (sid === null || sid !== activeSplitId) return;
    e.preventDefault();
    e.stopPropagation();

    if (draggingFilePath) {
      const fp = draggingFilePath;
      draggingFilePath = null;
      try {
        const content = await window.api.readFile(fp);
        loadFileIntoPane(tab, fp, content, sid);
      } catch (err) { console.error('Drop load failed:', err); }
    } else if (draggingTabId && draggingTabId !== tab.id) {
      const incomingId = draggingTabId;
      const [id1, id2] = splits.get(sid);
      splits.set(sid, [id1 === tab.id ? incomingId : id1, id2 === tab.id ? incomingId : id2]);
      hideSplitView();
      activeSplitId = null;
      switchToSplit(sid);
    }
  }, true);
}

/* ================================================================
   AUTOCOMPLETE — keyword lists + smart hint function
   ================================================================ */
const LANG_COMPLETIONS = {
  python: [
    // keywords
    'False','None','True','and','as','assert','async','await','break','class',
    'continue','def','del','elif','else','except','finally','for','from',
    'global','if','import','in','is','lambda','nonlocal','not','or','pass',
    'raise','return','try','while','with','yield',
    // builtins
    'abs','aiter','all','anext','any','ascii','bin','bool','breakpoint',
    'bytearray','bytes','callable','chr','classmethod','compile','complex',
    'copyright','delattr','dict','dir','divmod','enumerate','eval','exec',
    'exit','filter','float','format','frozenset','getattr','globals',
    'hasattr','hash','help','hex','id','input','int','isinstance','issubclass',
    'iter','len','list','locals','map','max','memoryview','min','next',
    'object','oct','open','ord','pow','print','property','quit','range',
    'repr','reversed','round','set','setattr','slice','sorted','staticmethod',
    'str','sum','super','tuple','type','vars','zip',
    // common stdlib
    'os','sys','re','json','math','time','datetime','pathlib','subprocess',
    'threading','collections','itertools','functools','typing','dataclasses',
    'unittest','logging','argparse','shutil','copy','io','random','string',
    'hashlib','urllib','http','socket','struct','array','queue','abc',
    'contextlib','warnings','traceback','inspect','importlib',
    // common patterns
    'self','cls','__init__','__str__','__repr__','__len__','__iter__',
    '__next__','__enter__','__exit__','__name__','__main__','__file__',
    '__doc__','__all__','__slots__','__class__','__dict__',
  ],
  javascript: [
    // keywords
    'break','case','catch','class','const','continue','debugger','default',
    'delete','do','else','export','extends','finally','for','function','if',
    'import','in','instanceof','let','new','of','return','static','super',
    'switch','throw','try','typeof','var','void','while','with','yield',
    'async','await','from','as','get','set',
    // globals
    'Array','Boolean','Date','Error','Function','JSON','Map','Math','Number',
    'Object','Promise','Proxy','Reflect','RegExp','Set','String','Symbol',
    'WeakMap','WeakRef','WeakSet','Infinity','NaN','undefined','null','true',
    'false','globalThis','self','window','document','console','process',
    'module','exports','require','__dirname','__filename','setTimeout',
    'setInterval','clearTimeout','clearInterval','setImmediate',
    'clearImmediate','queueMicrotask','fetch','URL','URLSearchParams',
    'Event','EventTarget','CustomEvent','AbortController','AbortSignal',
    'ReadableStream','WritableStream','TransformStream','TextEncoder',
    'TextDecoder','Blob','File','FileReader','FormData','Headers','Request',
    'Response','performance','crypto','atob','btoa','structuredClone',
    // common methods chained (shown as completions when typing)
    'constructor','prototype','length','name','call','apply','bind',
    'toString','valueOf','hasOwnProperty','then','catch','finally',
    'resolve','reject','all','allSettled','race','any',
    'push','pop','shift','unshift','splice','slice','concat','join',
    'map','filter','reduce','forEach','find','findIndex','findLast',
    'some','every','includes','indexOf','lastIndexOf','flat','flatMap',
    'sort','reverse','fill','copyWithin','entries','keys','values','at',
    'assign','create','keys','values','entries','fromEntries','freeze',
    'seal','defineProperty','getPrototypeOf','setPrototypeOf',
    'log','warn','error','info','debug','table','dir','time','timeEnd',
    'trim','trimStart','trimEnd','padStart','padEnd','repeat','replace',
    'replaceAll','split','startsWith','endsWith','match','matchAll',
    'search','charAt','charCodeAt','codePointAt','normalize','at',
    'parseInt','parseFloat','isNaN','isFinite','isInteger','isSafeInteger',
    'floor','ceil','round','abs','max','min','pow','sqrt','cbrt','log',
    'log2','log10','exp','sin','cos','tan','random','PI','E','SQRT2',
  ],
  typescript: [
    'type','interface','enum','namespace','declare','abstract','readonly',
    'implements','override','satisfies','infer','keyof','typeof','never',
    'unknown','any','void','string','number','boolean','bigint','symbol',
    'object','null','undefined','true','false',
  ],
  'text/x-csrc': [
    // C keywords
    'auto','break','case','char','const','continue','default','do','double',
    'else','enum','extern','float','for','goto','if','inline','int','long',
    'register','restrict','return','short','signed','sizeof','static',
    'struct','switch','typedef','union','unsigned','void','volatile','while',
    '_Bool','_Complex','_Imaginary','NULL','EOF','stdin','stdout','stderr',
    // common headers/functions
    'printf','scanf','fprintf','fscanf','sprintf','sscanf','fgets','fputs',
    'puts','putchar','getchar','fopen','fclose','fread','fwrite','fseek',
    'ftell','rewind','malloc','calloc','realloc','free','memcpy','memmove',
    'memset','memcmp','strcpy','strncpy','strcat','strncat','strcmp',
    'strncmp','strlen','strchr','strrchr','strstr','strtok','atoi','atof',
    'atol','strtol','strtod','rand','srand','abs','labs','exit','abort',
    'assert','errno','perror','strerror',
    '#include','#define','#ifdef','#ifndef','#endif','#pragma','#if',
    '#else','#elif','#undef',
  ],
  'text/x-c++src': [
    'alignas','alignof','and','and_eq','asm','auto','bitand','bitor','bool',
    'break','case','catch','char','char8_t','char16_t','char32_t','class',
    'compl','concept','const','consteval','constexpr','constinit',
    'const_cast','continue','co_await','co_return','co_yield','decltype',
    'default','delete','do','double','dynamic_cast','else','enum','explicit',
    'export','extern','false','float','for','friend','goto','if','inline',
    'int','long','mutable','namespace','new','noexcept','not','not_eq',
    'nullptr','operator','or','or_eq','private','protected','public',
    'register','reinterpret_cast','requires','return','short','signed',
    'sizeof','static','static_assert','static_cast','struct','switch',
    'template','this','thread_local','throw','true','try','typedef',
    'typeid','typename','union','unsigned','using','virtual','void',
    'volatile','wchar_t','while','xor','xor_eq',
    'std','string','vector','map','unordered_map','set','unordered_set',
    'list','deque','queue','stack','pair','tuple','array','optional',
    'variant','any','function','thread','mutex','unique_ptr','shared_ptr',
    'weak_ptr','make_unique','make_shared','move','forward','swap',
    'cout','cin','cerr','endl','flush','getline','printf','scanf',
    '#include','#define','#ifdef','#ifndef','#endif','#pragma',
  ],
  'text/x-java': [
    'abstract','assert','boolean','break','byte','case','catch','char',
    'class','const','continue','default','do','double','else','enum',
    'extends','final','finally','float','for','goto','if','implements',
    'import','instanceof','int','interface','long','native','new','package',
    'private','protected','public','return','short','static','strictfp',
    'super','switch','synchronized','this','throw','throws','transient',
    'try','var','void','volatile','while','true','false','null','record',
    'sealed','permits','yield',
    'String','Object','Integer','Long','Double','Float','Boolean','Byte',
    'Short','Character','Void','Number','Math','System','Runtime',
    'StringBuilder','StringBuffer','Thread','Runnable','Callable',
    'Exception','RuntimeException','Error','Throwable','StackTraceElement',
    'Class','ClassLoader','Enum','Iterable','Iterator','Comparable',
    'Cloneable','Serializable','AutoCloseable','Closeable',
    'List','ArrayList','LinkedList','Map','HashMap','LinkedHashMap',
    'TreeMap','Set','HashSet','LinkedHashSet','TreeSet','Queue',
    'ArrayDeque','PriorityQueue','Stack','Collections','Arrays','Objects',
    'Optional','Stream','Collectors','Function','Predicate','Consumer',
    'Supplier','BiFunction','BiPredicate','UnaryOperator','BinaryOperator',
    'CompletableFuture','ExecutorService','Executors','Future',
    'System.out.println','System.out.print','System.err.println',
    'Override','Deprecated','SuppressWarnings','FunctionalInterface',
  ],
  'text/x-csharp': [
    'abstract','as','base','bool','break','byte','case','catch','char',
    'checked','class','const','continue','decimal','default','delegate',
    'do','double','else','enum','event','explicit','extern','false',
    'finally','fixed','float','for','foreach','goto','if','implicit',
    'in','int','interface','internal','is','lock','long','namespace',
    'new','null','object','operator','out','override','params','private',
    'protected','public','readonly','ref','return','sbyte','sealed',
    'short','sizeof','stackalloc','static','string','struct','switch',
    'this','throw','true','try','typeof','uint','ulong','unchecked',
    'unsafe','ushort','using','virtual','void','volatile','while',
    'async','await','var','dynamic','record','init','with','global',
    'required','file','nint','nuint','scoped',
    'Console','String','Math','Array','List','Dictionary','HashSet',
    'Queue','Stack','Tuple','Task','Thread','DateTime','TimeSpan',
    'StringBuilder','Regex','Exception','ArgumentException',
    'ArgumentNullException','InvalidOperationException','NotImplementedException',
    'IEnumerable','IEnumerator','IList','IDictionary','ISet',
    'Linq','Select','Where','OrderBy','GroupBy','First','FirstOrDefault',
    'Single','SingleOrDefault','Any','All','Count','Sum','Min','Max',
    'ToList','ToArray','ToDictionary','ToHashSet',
  ],
  'text/x-kotlin': [
    'abstract','actual','annotation','as','break','by','catch','class',
    'companion','const','constructor','continue','crossinline','data',
    'delegate','do','dynamic','else','enum','expect','external','false',
    'field','file','final','finally','for','fun','get','if','import',
    'in','infix','init','inline','inner','interface','internal','is',
    'it','lateinit','noinline','null','object','open','operator',
    'out','override','package','param','private','property','protected',
    'public','reified','return','sealed','set','super','suspend','tailrec',
    'this','throw','true','try','typealias','typeof','val','value',
    'var','vararg','when','where','while',
    'String','Int','Long','Double','Float','Boolean','Byte','Short',
    'Char','Unit','Nothing','Any','Array','List','MutableList','Map',
    'MutableMap','Set','MutableSet','Pair','Triple','Sequence',
    'println','print','readLine','listOf','mutableListOf','mapOf',
    'mutableMapOf','setOf','mutableSetOf','arrayOf','emptyList',
    'emptyMap','emptySet','run','let','also','apply','with','takeIf',
    'takeUnless','repeat','TODO','lazy','by','Lazy',
  ],
  rust: [
    'as','async','await','break','const','continue','crate','dyn','else',
    'enum','extern','false','fn','for','if','impl','in','let','loop',
    'match','mod','move','mut','pub','ref','return','self','Self',
    'static','struct','super','trait','true','type','union','unsafe',
    'use','where','while','abstract','become','box','do','final',
    'macro','override','priv','try','typeof','unsized','virtual','yield',
    'i8','i16','i32','i64','i128','isize','u8','u16','u32','u64','u128',
    'usize','f32','f64','bool','char','str','String','Vec','Box','Rc',
    'Arc','Cell','RefCell','Option','Result','Some','None','Ok','Err',
    'HashMap','HashSet','BTreeMap','BTreeSet','VecDeque','BinaryHeap',
    'println!','print!','eprintln!','eprint!','format!','write!',
    'writeln!','vec!','todo!','unimplemented!','unreachable!','panic!',
    'assert!','assert_eq!','assert_ne!','dbg!','include!',
    'Clone','Copy','Debug','Display','Default','PartialEq','Eq',
    'PartialOrd','Ord','Hash','Iterator','IntoIterator','FromIterator',
    'From','Into','TryFrom','TryInto','Deref','DerefMut','Drop',
    'Send','Sync','Sized','Fn','FnMut','FnOnce','Future','Stream',
    'unwrap','expect','is_some','is_none','is_ok','is_err','map',
    'and_then','or_else','unwrap_or','unwrap_or_else','iter','iter_mut',
    'into_iter','collect','map','filter','fold','for_each','enumerate',
    'zip','take','skip','chain','flat_map','any','all','count',
  ],
  go: [
    'break','case','chan','const','continue','default','defer','else',
    'fallthrough','for','func','go','goto','if','import','interface',
    'map','package','range','return','select','struct','switch','type',
    'var','true','false','nil','iota',
    'bool','byte','complex64','complex128','error','float32','float64',
    'int','int8','int16','int32','int64','rune','string','uint','uint8',
    'uint16','uint32','uint64','uintptr','any','comparable',
    'append','cap','clear','close','complex','copy','delete','imag',
    'len','make','max','min','new','panic','print','println','real',
    'recover',
    'fmt','os','io','strings','strconv','bytes','bufio','log','net',
    'http','json','sync','context','time','math','sort','errors',
    'filepath','regexp','testing','reflect','atomic','rand',
    'Println','Printf','Sprintf','Fprintf','Errorf','Stringer',
    'Error','New','Wrap','Is','As','Unwrap',
  ],
  ruby: [
    'BEGIN','END','__ENCODING__','__END__','__FILE__','__LINE__',
    'alias','and','begin','break','case','class','def','defined?',
    'do','else','elsif','end','ensure','false','for','if','in',
    'module','next','nil','not','or','redo','rescue','retry','return',
    'self','super','then','true','undef','unless','until','when',
    'while','yield','raise','require','require_relative','include',
    'extend','prepend','attr_accessor','attr_reader','attr_writer',
    'private','protected','public','initialize','puts','print','p',
    'pp','gets','chomp','chop','strip','split','join','push','pop',
    'shift','unshift','each','map','select','reject','reduce','inject',
    'find','all?','any?','none?','count','length','size','empty?',
    'nil?','is_a?','respond_to?','send','tap','then','yield_self',
    'Integer','Float','String','Array','Hash','Symbol','Range','Regexp',
    'Proc','Lambda','Method','Module','Class','Object','BasicObject',
    'IO','File','Dir','Pathname','Time','Date',
  ],
  php: [
    'abstract','and','array','as','break','callable','case','catch',
    'class','clone','const','continue','declare','default','die','do',
    'echo','else','elseif','empty','enddeclare','endfor','endforeach',
    'endif','endswitch','endwhile','eval','exit','extends','final',
    'finally','fn','for','foreach','function','global','goto','if',
    'implements','include','include_once','instanceof','insteadof',
    'interface','isset','list','match','namespace','new','or','print',
    'private','protected','public','readonly','require','require_once',
    'return','static','switch','throw','trait','try','unset','use',
    'var','while','yield','true','false','null','self','parent',
    'echo','print','var_dump','var_export','print_r','isset','empty',
    'unset','die','exit','include','require','list','array','count',
    'strlen','strpos','strrpos','substr','str_replace','str_contains',
    'str_starts_with','str_ends_with','trim','ltrim','rtrim',
    'strtolower','strtoupper','ucfirst','lcfirst','ucwords','sprintf',
    'printf','number_format','round','floor','ceil','abs','max','min',
    'array_push','array_pop','array_shift','array_unshift','array_merge',
    'array_slice','array_splice','array_keys','array_values','array_map',
    'array_filter','array_reduce','array_search','array_unique',
    'array_flip','array_reverse','sort','rsort','asort','arsort',
    'ksort','krsort','usort','in_array','implode','explode',
    'json_encode','json_decode','serialize','unserialize',
    'date','time','mktime','strtotime','microtime',
    'is_array','is_string','is_int','is_float','is_bool','is_null',
    'is_object','is_callable','is_numeric','intval','floatval','strval',
  ],
  shell: [
    'if','then','else','elif','fi','for','in','do','done','while',
    'until','case','esac','function','return','exit','break','continue',
    'local','export','readonly','declare','typeset','shift','source',
    'echo','printf','read','test','true','false','set','unset',
    'eval','exec','trap','wait','jobs','bg','fg','kill','sleep',
    'ls','cd','pwd','mkdir','rmdir','rm','cp','mv','touch','chmod',
    'chown','chgrp','find','grep','sed','awk','cut','sort','uniq',
    'head','tail','cat','less','more','tee','xargs','wc','tr',
    'curl','wget','ssh','scp','rsync','tar','gzip','zip','unzip',
    'date','whoami','hostname','uname','uptime','ps','top','kill',
    'pgrep','pkill','nohup','screen','tmux','env','printenv',
    '$?','$!','$$','$0','$1','$2','$@','$*','$#','${}'
  ],
  powershell: [
    'Begin','Break','Catch','Class','Continue','Data','Define','Do',
    'DynamicParam','Else','ElseIf','End','Enum','Exit','Filter',
    'Finally','For','ForEach','From','Function','Hidden','If','In',
    'InlineScript','Param','Process','Return','Static','Switch',
    'Throw','Trap','Try','Until','Using','Var','While','Workflow',
    '$true','$false','$null','$_','$PSItem','$args','$input',
    '$MyInvocation','$PSScriptRoot','$PSCommandPath','$env:',
    'Write-Host','Write-Output','Write-Error','Write-Warning',
    'Write-Verbose','Write-Debug','Write-Information',
    'Get-Item','Get-ChildItem','Set-Item','New-Item','Remove-Item',
    'Move-Item','Copy-Item','Rename-Item','Clear-Item','Invoke-Item',
    'Get-Content','Set-Content','Add-Content','Clear-Content',
    'Get-Variable','Set-Variable','New-Variable','Remove-Variable',
    'Get-Process','Start-Process','Stop-Process','Wait-Process',
    'Get-Service','Start-Service','Stop-Service','Restart-Service',
    'Get-Command','Get-Help','Get-Member','Get-Module','Import-Module',
    'Select-Object','Where-Object','ForEach-Object','Sort-Object',
    'Group-Object','Measure-Object','Compare-Object','Tee-Object',
    'ConvertTo-Json','ConvertFrom-Json','ConvertTo-Csv','ConvertFrom-Csv',
    'Invoke-RestMethod','Invoke-WebRequest','Test-Path','Resolve-Path',
    'Join-Path','Split-Path','New-Object','Add-Type',
  ],
  lua: [
    'and','break','do','else','elseif','end','false','for','function',
    'goto','if','in','local','nil','not','or','repeat','return','then',
    'true','until','while',
    'print','tostring','tonumber','type','pairs','ipairs','next',
    'select','unpack','table.unpack','rawget','rawset','rawequal',
    'rawlen','setmetatable','getmetatable','pcall','xpcall','error',
    'assert','load','loadfile','dofile','require','collectgarbage',
    'io','math','os','string','table','coroutine','package','debug',
    'io.read','io.write','io.open','io.close','io.lines',
    'string.format','string.len','string.sub','string.find',
    'string.match','string.gmatch','string.gsub','string.byte',
    'string.char','string.rep','string.reverse','string.upper',
    'string.lower',
    'table.insert','table.remove','table.sort','table.concat',
    'table.move','math.abs','math.ceil','math.floor','math.max',
    'math.min','math.sqrt','math.random','math.randomseed',
    'os.time','os.clock','os.date','os.exit',
  ],
  swift: [
    'associatedtype','class','deinit','enum','extension','fileprivate',
    'func','import','init','inout','internal','let','open','operator',
    'precedencegroup','private','protocol','public','rethrows','static',
    'struct','subscript','typealias','var','break','case','catch',
    'continue','default','defer','do','else','fallthrough','for','guard',
    'if','in','repeat','return','switch','throw','where','while',
    'false','nil','self','Self','super','true','Any','AnyObject',
    'as','is','try','throws','async','await','actor','nonisolated',
    'distributed','isolated','some','any','consuming','borrowing',
    'String','Int','Double','Float','Bool','Character','Array',
    'Dictionary','Set','Optional','Result','Error','Void','Never',
    'print','debugPrint','dump','fatalError','precondition','assert',
    'zip','stride','sequence','AnySequence','min','max','abs',
    'map','flatMap','compactMap','filter','reduce','forEach','sorted',
    'contains','first','last','count','isEmpty','append','remove',
    'insert','reversed','enumerated','zip',
  ],
  dart: [
    'abstract','as','assert','async','await','base','break','case',
    'catch','class','const','continue','covariant','default','deferred',
    'do','dynamic','else','enum','export','extends','extension',
    'external','factory','false','final','finally','for','Function',
    'get','hide','if','implements','import','in','interface','is',
    'late','library','mixin','new','null','of','on','operator','part',
    'required','rethrow','return','sealed','set','show','static',
    'super','switch','sync','this','throw','true','try','type',
    'typedef','var','void','when','with','while','yield',
    'String','int','double','num','bool','List','Map','Set','Object',
    'dynamic','Null','Symbol','Type','Iterable','Iterator','Future',
    'Stream','Duration','DateTime','RegExp','Comparable','Pattern',
    'StringBuffer','Uri','Error','Exception','StackTrace',
    'print','identical','identityHashCode','runApp','StatelessWidget',
    'StatefulWidget','BuildContext','Widget','State','Key','Text',
    'Column','Row','Container','Scaffold','AppBar','MaterialApp',
  ],
  r: [
    'if','else','repeat','while','function','for','in','next','break',
    'TRUE','FALSE','NULL','Inf','NaN','NA','NA_integer_','NA_real_',
    'NA_complex_','NA_character_','...','..1',
    'c','list','vector','matrix','array','data.frame','factor','table',
    'print','cat','paste','paste0','sprintf','format','formatC',
    'class','typeof','is','as','inherits','which','which.min','which.max',
    'length','dim','nrow','ncol','names','colnames','rownames',
    'head','tail','str','summary','View','edit',
    'sum','prod','mean','median','var','sd','min','max','range',
    'abs','sqrt','exp','log','log2','log10','ceiling','floor','round',
    'trunc','sign','cumsum','cumprod','cummax','cummin',
    'seq','seq_len','seq_along','rep','rev','sort','order','rank',
    'unique','duplicated','table','prop.table','cut','findInterval',
    'cbind','rbind','merge','reshape','subset','transform','aggregate',
    'apply','lapply','sapply','vapply','tapply','mapply','Map','Reduce',
    'Filter','Find','Position',
    'plot','hist','barplot','boxplot','pie','curve','points','lines',
    'abline','legend','title','axis','mtext','text','polygon',
    'library','require','install.packages','data','source','setwd',
    'getwd','ls','rm','save','load','readRDS','saveRDS',
    'read.csv','write.csv','read.table','write.table','readLines','writeLines',
  ],
  perl: [
    'if','else','elsif','unless','while','until','for','foreach','do',
    'sub','my','our','local','use','no','require','package','BEGIN',
    'END','return','last','next','redo','goto','wantarray',
    'print','say','warn','die','exit','chomp','chop','defined','undef',
    'ref','bless','tied','tie','untie','scalar','length','index',
    'rindex','substr','sprintf','printf','push','pop','shift','unshift',
    'splice','join','split','reverse','sort','grep','map','keys',
    'values','each','delete','exists','open','close','read','write',
    'binmode','eof','tell','seek','rename','unlink','mkdir','rmdir',
    'opendir','readdir','closedir','stat','chmod','chown',
    'lc','uc','lcfirst','ucfirst','chr','ord','hex','oct','abs',
    'int','sqrt','rand','srand','time','localtime','gmtime',
    'qw','qq','q','m','s','tr','y','x',
  ],
  haskell: [
    'case','class','data','default','deriving','do','else','forall',
    'foreign','hiding','if','import','in','infix','infixl','infixr',
    'instance','let','module','newtype','of','qualified','then','type',
    'where','undefined','error','head','tail','init','last','length',
    'null','reverse','concat','concatMap','map','filter','foldl','foldr',
    'foldl1','foldr1','scanl','scanr','iterate','repeat','replicate',
    'cycle','take','drop','takeWhile','dropWhile','span','break',
    'splitAt','elem','notElem','lookup','zip','zipWith','unzip',
    'show','read','print','putStr','putStrLn','getLine','getContents',
    'interact','readFile','writeFile','appendFile',
    'IO','Maybe','Either','Left','Right','Just','Nothing','Bool',
    'Char','String','Int','Integer','Float','Double','Rational',
    'True','False','otherwise',
  ],
  groovy: [
    'abstract','as','assert','break','case','catch','class','const',
    'continue','def','default','do','else','enum','extends','false',
    'finally','for','goto','if','implements','import','in','instanceof',
    'interface','new','null','package','return','static','super',
    'switch','this','throw','throws','trait','true','try','while',
    'println','print','assert','it','with','tap','each','eachWithIndex',
    'collect','find','findAll','any','every','inject','sort','min','max',
    'size','isEmpty','contains','containsAll','add','remove','put','get',
    'String','Integer','Long','Double','Float','Boolean','List','Map',
    'Set','GString','Closure','def',
  ],
  coffeescript: [
    'and','break','by','catch','class','continue','delete','do','else',
    'extends','false','finally','for','from','if','import','in',
    'instanceof','is','isnt','let','loop','namespace','new','no',
    'not','null','of','off','on','or','own','return','static','switch',
    'then','this','throw','true','try','typeof','undefined','unless',
    'until','void','when','while','with','yes','yield',
  ],
  julia: [
    'abstract','baremodule','begin','break','catch','const','continue',
    'do','else','elseif','end','export','finally','for','function',
    'global','if','import','importall','in','let','local','macro',
    'module','mutable','outer','primitive','quote','return','struct',
    'try','type','using','while','true','false','nothing','missing',
    'Inf','NaN','pi','ℯ','im',
    'print','println','show','dump','typeof','isa','sizeof','typemax',
    'typemin','zero','one','ones','zeros','rand','randn','fill',
    'collect','map','filter','reduce','foldl','foldr','mapreduce',
    'sum','prod','minimum','maximum','mean','median','std','var',
    'length','size','ndims','eltype','axes','eachindex','enumerate',
    'zip','pairs','push!','pop!','append!','prepend!','insert!',
    'deleteat!','sort!','reverse!','unique!','union!','intersect!',
    'String','Int','Float64','Float32','Complex','Bool','Char',
    'Array','Vector','Matrix','Dict','Set','Tuple','NamedTuple',
    'AbstractArray','AbstractVector','AbstractMatrix',
  ],
  erlang: [
    'after','and','andalso','band','begin','bnot','bor','bsl','bsr',
    'bxor','case','catch','cond','div','end','fun','if','let','maybe',
    'not','of','or','orelse','receive','rem','try','when','xor',
    'true','false','ok','error','undefined','infinity',
    'erlang','lists','maps','proplists','dict','sets','gb_trees',
    'gb_sets','ordsets','orddict','string','io','io_lib','file',
    'os','timer','gen_server','gen_statem','supervisor','application',
    'lists:map','lists:filter','lists:foldl','lists:foldr',
    'lists:foreach','lists:append','lists:flatten','lists:sort',
    'lists:reverse','lists:nth','lists:last','lists:member',
    'maps:get','maps:put','maps:remove','maps:keys','maps:values',
    'maps:to_list','maps:from_list','maps:merge','maps:fold',
    'io:format','io:read','io:write','io:get_line',
  ],
  clojure: [
    'def','defn','defn-','defmacro','defmulti','defmethod','defrecord',
    'defprotocol','deftype','defonce','ns','require','use','import',
    'fn','let','letfn','loop','recur','if','if-not','if-let','if-some',
    'when','when-not','when-let','when-some','cond','condp','case',
    'do','and','or','not','true','false','nil',
    'map','filter','reduce','for','doseq','dotimes','dorun','doall',
    'apply','partial','comp','complement','identity','constantly',
    'first','second','last','rest','next','butlast','nth','get','get-in',
    'assoc','assoc-in','dissoc','merge','merge-with','update','update-in',
    'conj','cons','concat','flatten','distinct','sort','sort-by',
    'count','empty?','seq','vec','list','set','hash-map','hash-set',
    'str','name','keyword','symbol','namespace','clojure.string/join',
    'println','print','prn','pr','format','printf','sprintf',
  ],
  nginx: [
    'server','location','upstream','http','events','worker_processes',
    'worker_connections','listen','server_name','root','index',
    'error_page','access_log','error_log','include','proxy_pass',
    'proxy_set_header','proxy_read_timeout','proxy_connect_timeout',
    'proxy_send_timeout','proxy_cache','proxy_cache_valid',
    'fastcgi_pass','fastcgi_param','fastcgi_index',
    'return','rewrite','try_files','alias','autoindex',
    'gzip','gzip_types','gzip_comp_level','gzip_min_length',
    'ssl_certificate','ssl_certificate_key','ssl_protocols',
    'ssl_ciphers','ssl_session_cache','ssl_session_timeout',
    'add_header','expires','etag','if_modified_since',
    'limit_req','limit_conn','deny','allow',
    'sendfile','tcp_nopush','tcp_nodelay','keepalive_timeout',
    'client_max_body_size','client_body_timeout','send_timeout',
  ],
};

// TypeScript and JSX share JS completions plus extra TS keywords
// Mode string aliases that differ from the key used above
LANG_COMPLETIONS['application/x-powershell'] = LANG_COMPLETIONS.powershell;
LANG_COMPLETIONS['application/x-httpd-php']  = LANG_COMPLETIONS.php;
// JS-family mode objects share the JS list (modeKey resolves to 'javascript' already)

function makeHintFn(tab) {
  return function(cm, options) {
    const cursor = cm.getCursor();
    const token = cm.getTokenAt(cursor);

    // Only complete on identifier characters
    if (!token.string || !/^[\w$#@]/.test(token.string.trimStart())) return null;

    const word = token.string.replace(/^\s+/, '');
    const from = { line: cursor.line, ch: token.start + (token.string.length - word.length) };
    const to = cursor;
    if (!word) return null;

    const mode = tab.lang?.mode;
    const modeKey = typeof mode === 'string' ? mode : (mode?.name || '');
    const lw = word.toLowerCase();

    // Use CM5 hint addons for languages that have rich context-aware completions
    let addonResult = null;
    try {
      if (modeKey === 'javascript')
        addonResult = CodeMirror.hint.javascript?.(cm, options);
      else if (modeKey === 'css')
        addonResult = CodeMirror.hint.css?.(cm, options);
      else if (modeKey === 'htmlmixed')
        addonResult = CodeMirror.hint.html?.(cm, options);
      else if (modeKey === 'xml')
        addonResult = CodeMirror.hint.xml?.(cm, options);
      else if (modeKey === 'sql')
        addonResult = CodeMirror.hint.sql?.(cm, options);
    } catch {}

    // Keyword/builtin completions for this language
    const kwList = LANG_COMPLETIONS[modeKey] || [];
    const kwMatches = kwList.filter(k => k.toLowerCase().startsWith(lw) && k !== word);

    // Doc-word completions (scan document) — filter to identifier-like words only, no numbers or lone symbols
    const docWords = [];
    const seen = new Set([word]);
    const docText = cm.getValue();
    const wordRe = /[a-zA-Z_$][a-zA-Z0-9_$]*/g;
    let m;
    while ((m = wordRe.exec(docText)) !== null) {
      const w = m[0];
      if (!seen.has(w) && w.toLowerCase().startsWith(lw) && w !== word) {
        seen.add(w);
        docWords.push(w);
      }
    }

    // For addon-supported languages: addon result wins, merge in kw+doc as extras
    if (addonResult) {
      const addonSeen = new Set(addonResult.list.map(i => typeof i === 'string' ? i : i.text));
      const extras = [...kwMatches, ...docWords].filter(w => !addonSeen.has(w));
      const list = [...addonResult.list, ...extras];
      return list.length ? { list, from: addonResult.from, to: addonResult.to } : null;
    }

    // For all other languages: keywords first, then doc words
    const kwSeen = new Set(kwMatches);
    const finalDoc = docWords.filter(w => !kwSeen.has(w));
    const list = [...kwMatches, ...finalDoc];
    return list.length ? { list, from, to } : null;
  };
}

function createTab({ fileName = 'untitled', filePath = null, content = '' } = {}) {
  const id = ++tabCounter;
  const ext = filePath ? extFromPath(filePath) : '';
  const lang = langFromExt(ext);
  const eol = filePath ? detectEOL(content) : 'LF';

  const tab = { id, fileName, filePath, isModified: false, lang, eol, editor: null, wrapper: null };
  tabs.push(tab);

  // Editor wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'editor-wrapper hidden';
  wrapper.dataset.tabId = id;
  editorContainer.appendChild(wrapper);
  tab.wrapper = wrapper;
  addPaneDropListeners(wrapper, () => tab);

  // CodeMirror instance
  const cm = CodeMirror(wrapper, {
    value: content,
    mode: lang.mode,
    theme: 'caret',
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    styleActiveLine: true,
    lineWrapping: appSettings.wordWrap,
    tabSize: appSettings.tabSize,
    indentWithTabs: false,
    indentUnit: appSettings.tabSize,
    autoRefresh: true,
    scrollbarStyle: 'native',
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    foldOptions: {
      widget: makeFoldWidget,
      rangeFinder: (cm, start) =>
        CodeMirror.fold.brace?.(cm, start)  ||
        CodeMirror.fold.xml?.(cm, start)    ||
        CodeMirror.fold.indent?.(cm, start) ||
        CodeMirror.fold.comment?.(cm, start)||
        CodeMirror.fold.markdown?.(cm, start),
    },
    extraKeys: {
      'Tab': (cm) => cm.somethingSelected() ? cm.indentSelection('add') : cm.replaceSelection(' '.repeat(appSettings.tabSize)),
      'Shift-Tab': (cm) => cm.indentSelection('subtract'),
      'Ctrl-/': (cm) => cm.toggleComment({ indent: true }),
      'Ctrl-F': () => openFindBar(false),
      'Ctrl-H': () => openFindBar(true),
      'Escape': () => {
        const wasOpen = findBar.classList.contains('open');
        closeFindBar();
        if (zenMode && !wasOpen) toggleZenMode();
      },
      'Ctrl-Tab': () => switchToRelativeTab(1),
      'Shift-Ctrl-Tab': () => switchToRelativeTab(-1),
      'Ctrl-Shift-[': cm => cm.foldCode(cm.getCursor(), null, 'fold'),
      'Ctrl-Shift-]': cm => cm.foldCode(cm.getCursor(), null, 'unfold'),
      'Ctrl-Space': cm => cm.showHint({ hint: makeHintFn(tab), completeSingle: false }),
    },
  });
  tab.editor = cm;

  cm.getScrollerElement().addEventListener('wheel', (e) => {
    if (!e.shiftKey || appSettings.wordWrap) return;
    e.preventDefault();
    cm.getScrollerElement().scrollLeft += e.deltaY;
  }, { passive: false });

  // Pane status bar (visible in split view only, appended after CM so it's at the bottom of the flex column)
  const paneStatus = document.createElement('div');
  paneStatus.className = 'pane-status';
  paneStatus.style.display = 'none';
  const psLang   = document.createElement('span');
  const psCursor = document.createElement('span');
  paneStatus.appendChild(psLang);
  paneStatus.appendChild(psCursor);
  wrapper.appendChild(paneStatus);
  tab.paneStatus = paneStatus;
  tab._psLang    = psLang;
  tab._psCursor  = psCursor;

  // Smooth Word-style caret
  tab.smoothCaret = setupSmoothCaret(cm);

  // Smooth mouse-wheel scroll
  setupSmoothScroll(cm);

  // Custom scrollbar (bypasses CM5 vscrollbar snap-back on large files)
  setupCmScrollbar(cm, wrapper);

  // Auto-trigger autocomplete — inputRead fires as soon as CM processes the keystroke,
  // well before keyup, giving the fastest possible response time
  let hintDebounce = null;
  cm.on('inputRead', (instance, change) => {
    if (instance.state.completionActive) return;
    const inserted = change.text?.[0] ?? '';
    if (!/[\w$]/.test(inserted)) return;
    clearTimeout(hintDebounce);
    hintDebounce = setTimeout(() => {
      if (instance.state.completionActive) return;
      const cursor = instance.getCursor();
      const token = instance.getTokenAt(cursor);
      const type = token.type || '';
      if (type.includes('comment') || type.includes('string')) return;
      if (token.string.trim().length < 1) return;
      instance.showHint({ hint: makeHintFn(tab), completeSingle: false });
    }, 50);
  });

  cm.on('change', () => {
    if (!tab.isModified) {
      tab.isModified = true;
      renderTabBar();
      updateWindowTitle();
    }
  });

  cm.on('cursorActivity', () => {
    if (tab.id === activeTabId) updateStatusBar();
    updatePaneStatus(tab);
    cm.getWrapperElement().classList.toggle('cm-first-line-active', cm.getCursor().line === 0);
  });

  cm.getWrapperElement().classList.add('cm-first-line-active');

  renderTabBar();
  return tab;
}

function renameTab(tabId) {
  const tab = tabs.find(t => t.id === tabId);
  if (!tab || tab.type === 'settings') return;

  const tabEl = tabsEl.querySelector(`[data-tab-id="${tabId}"]`);
  if (!tabEl) return;
  const titleSpan = tabEl.querySelector('.tab-title');
  if (!titleSpan) return;

  const input = document.createElement('input');
  input.className = 'tab-rename-input';
  input.value = tab.fileName;
  titleSpan.replaceWith(input);
  input.focus();
  input.select();

  let done = false;
  function confirm() {
    if (done) return;
    done = true;
    const newName = input.value.trim() || tab.fileName;
    input.replaceWith(titleSpan);
    if (newName !== tab.fileName) {
      tab.fileName = newName;
      titleSpan.textContent = newName;
      tabEl.title = tab.filePath || newName;
      renderTabBar();
      updateWindowTitle();
    }
  }
  function cancel() {
    if (done) return;
    done = true;
    input.replaceWith(titleSpan);
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); confirm(); }
    if (e.key === 'Escape') { e.preventDefault(); cancel(); }
    e.stopPropagation();
  });
  input.addEventListener('blur', confirm);
}

function renameSplitTab(splitId, tabId) {
  const tab = tabs.find(t => t.id === tabId);
  if (!tab) return;
  const splitEl = tabsEl.querySelector(`[data-split-id="${splitId}"]`);
  if (!splitEl) return;
  const [id1, id2] = splits.get(splitId);
  const isLeft = tabId === id1;
  const half = splitEl.querySelector(isLeft ? '.tab-split-left' : '.tab-split-right');
  if (!half) return;
  const nameSpan = half.querySelector('.tab-split-half-name');
  if (!nameSpan) return;

  const input = document.createElement('input');
  input.className = 'tab-rename-input';
  input.value = tab.fileName;
  nameSpan.replaceWith(input);
  input.focus();
  input.select();

  let done = false;
  function confirm() {
    if (done) return;
    done = true;
    const newName = input.value.trim() || tab.fileName;
    tab.fileName = newName;
    const restored = document.createElement('span');
    restored.className = 'tab-split-half-name';
    restored.textContent = newName;
    input.replaceWith(restored);
    const t1 = tabs.find(t => t.id === id1);
    const t2 = tabs.find(t => t.id === id2);
    splitEl.title = `${t1?.fileName} | ${t2?.fileName}`;
    renderTabBar();
    updateWindowTitle();
  }
  function cancel() {
    if (done) return;
    done = true;
    const restored = document.createElement('span');
    restored.className = 'tab-split-half-name';
    restored.textContent = tab.fileName;
    input.replaceWith(restored);
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); confirm(); }
    if (e.key === 'Escape') { e.preventDefault(); cancel(); }
    e.stopPropagation();
  });
  input.addEventListener('blur', confirm);
}

function makeTabEl(tab) {
  const typeClass = tab.type === 'terminal' ? ' tab-terminal' : tab.type === 'settings' ? ' tab-settings' : '';
  const el = document.createElement('div');
  el.className = 'tab' + (tab.id === activeTabId && !activeSplitId ? ' active' : '') + (tab.isModified ? ' modified' : '') + typeClass;
  el.dataset.tabId = tab.id;
  el.title = tab.filePath || tab.fileName;
  el.setAttribute('draggable', tab.type === 'settings' ? 'false' : 'true');

  const icon = document.createElement('div');
  icon.className = 'tab-icon';

  const title = document.createElement('span');
  title.className = 'tab-title';
  title.textContent = tab.fileName;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'tab-close';
  closeBtn.innerHTML = '×';
  closeBtn.title = 'Close (Ctrl+W)';
  closeBtn.addEventListener('click', e => { e.stopPropagation(); closeTab(tab.id); });

  el.appendChild(icon);
  el.appendChild(title);
  el.appendChild(closeBtn);
  el.addEventListener('click', () => switchTab(tab.id));
  el.addEventListener('mousedown', e => { if (e.button === 1) { e.preventDefault(); closeTab(tab.id); } });
  el.addEventListener('contextmenu', e => showContextMenu(e, { tabId: tab.id }));

  el.addEventListener('dragstart', e => {
    draggingTabId = tab.id;
    e.dataTransfer.effectAllowed = 'move';
    startDragGhost(el, e);
    setTimeout(() => el.classList.add('dragging'), 0);
  });
  el.addEventListener('dragend', () => {
    draggingTabId = null;
    el.classList.remove('dragging');
    endDragGhost();
    tabsEl.querySelectorAll('.drag-over').forEach(t => t.classList.remove('drag-over'));
  });
  el.addEventListener('dragover', e => {
    if (draggingTabId && draggingTabId !== tab.id && tab.type !== 'settings') {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      tabsEl.querySelectorAll('.drag-over').forEach(t => { if (t !== el) t.classList.remove('drag-over'); });
      el.classList.add('drag-over');
    }
  });
  el.addEventListener('dragleave', e => {
    if (!el.contains(e.relatedTarget)) el.classList.remove('drag-over');
  });
  el.addEventListener('drop', e => {
    e.preventDefault();
    el.classList.remove('drag-over');
    if (draggingTabId && draggingTabId !== tab.id && tab.type !== 'settings') {
      createSplit(draggingTabId, tab.id);
    }
  });

  return el;
}

function updateTabsWidth() {
  // Each visible item is either a regular tab or a split-group element (counts once)
  const seenSplits = new Set();
  let count = 0;
  tabs.forEach(tab => {
    const sid = getSplitForTab(tab.id);
    if (sid !== null) {
      if (!seenSplits.has(sid)) { seenSplits.add(sid); count++; }
    } else {
      count++;
    }
  });
  tabsEl.style.width = (count * 224 + 6) + 'px';
}

function renderTabBar() {
  // Build map of existing elements by key: 't{tabId}' or 's{splitId}'
  const existing = new Map();
  tabsEl.querySelectorAll('.tab[data-tab-id], .tab[data-split-id]').forEach(el => {
    if (el.classList.contains('tab-removing')) return;
    const key = el.dataset.splitId ? `s${el.dataset.splitId}` : `t${el.dataset.tabId}`;
    existing.set(key, el);
  });

  const toInsert = [];
  const seenSplits = new Set();

  tabs.forEach(tab => {
    const splitId = getSplitForTab(tab.id);

    if (splitId !== null) {
      if (seenSplits.has(splitId)) return; // second tab of pair — skip
      seenSplits.add(splitId);
      const key = `s${splitId}`;
      const el = existing.get(key);
      if (el) {
        existing.delete(key);
        // Update combined tab in-place
        const isActive = activeSplitId === splitId;
        const nc = 'tab tab-split' + (isActive ? ' active' : '');
        if (el.className !== nc) el.className = nc;
        const [id1, id2] = splits.get(splitId);
        const t1 = tabs.find(t => t.id === id1);
        const t2 = tabs.find(t => t.id === id2);
        const lh = el.querySelector('.tab-split-left');
        const rh = el.querySelector('.tab-split-right');
        if (lh) { lh.querySelector('.tab-split-half-dot').classList.toggle('visible', !!t1?.isModified); lh.querySelector('.tab-split-half-name').textContent = t1?.fileName || '?'; }
        if (rh) { rh.querySelector('.tab-split-half-dot').classList.toggle('visible', !!t2?.isModified); rh.querySelector('.tab-split-half-name').textContent = t2?.fileName || '?'; }
        el.title = `${t1?.fileName} | ${t2?.fileName}`;
      } else {
        toInsert.push({ type: 'split', splitId });
      }
    } else {
      const key = `t${tab.id}`;
      const el = existing.get(key);
      if (el) {
        existing.delete(key);
        const tc = tab.type === 'terminal' ? ' tab-terminal' : tab.type === 'settings' ? ' tab-settings' : '';
        const nc = 'tab' + (tab.id === activeTabId && !activeSplitId ? ' active' : '') + (tab.isModified ? ' modified' : '') + tc;
        if (el.className !== nc) el.className = nc;
        el.title = tab.filePath || tab.fileName;
        el.querySelector('.tab-title').textContent = tab.fileName;
      } else {
        toInsert.push({ type: 'tab', tab });
      }
    }
  });

  existing.forEach(el => el.remove());

  if (!tabsEl.querySelector('.tab-removing')) {
    updateTabsWidth();
  }

  toInsert.forEach(item => {
    if (item.type === 'tab') {
      const el = makeTabEl(item.tab);
      tabsEl.appendChild(el);
      animateTabAppear(el);
    } else {
      tabsEl.appendChild(makeSplitTabEl(item.splitId));
    }
  });
}

function makeSplitHalf(t, side) {
  const half = document.createElement('div');
  half.className = `tab-split-half tab-split-${side}`;
  const dot = document.createElement('div');
  dot.className = 'tab-split-half-dot' + (t?.isModified ? ' visible' : '');
  const name = document.createElement('span');
  name.className = 'tab-split-half-name';
  name.textContent = t?.fileName || '?';
  half.appendChild(dot);
  half.appendChild(name);
  return half;
}

function makeSplitTabEl(splitId) {
  const [id1, id2] = splits.get(splitId);
  const t1 = tabs.find(t => t.id === id1);
  const t2 = tabs.find(t => t.id === id2);

  const el = document.createElement('div');
  el.className = 'tab tab-split' + (activeSplitId === splitId ? ' active' : '');
  el.dataset.splitId = splitId;
  el.title = `${t1?.fileName} | ${t2?.fileName}`;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'tab-close';
  closeBtn.innerHTML = '×';
  closeBtn.title = 'Unsplit';
  closeBtn.addEventListener('click', e => { e.stopPropagation(); unsplit(splitId); });

  el.appendChild(makeSplitHalf(t1, 'left'));
  el.appendChild(makeSplitHalf(t2, 'right'));
  el.appendChild(closeBtn);
  el.addEventListener('click', () => switchToSplit(splitId));
  el.addEventListener('mousedown', e => { if (e.button === 1) { e.preventDefault(); unsplit(splitId); } });
  el.addEventListener('contextmenu', e => showContextMenu(e, { splitId }));
  return el;
}

// ── Drag ghost ──────────────────────────────────────────────────────────────
let _dragGhost        = null;
let _dragGhostHandler = null;
let _dragGhostRaf     = null;
let _dragGhostActive  = false;

function startDragGhost(sourceEl, e) {
  endDragGhost();

  // Suppress the browser's built-in ghost image
  const blank = document.createElement('canvas');
  blank.width = blank.height = 1;
  e.dataTransfer.setDragImage(blank, 0, 0);

  const rect = sourceEl.getBoundingClientRect();
  const ox = e.clientX - rect.left;
  const oy = e.clientY - rect.top;

  const ghost = sourceEl.cloneNode(true);
  let curX = e.clientX - ox, curY = e.clientY - oy;
  let tgtX = curX,           tgtY = curY;

  ghost.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: ${rect.width}px;
    height: ${rect.height}px;
    opacity: 0.92;
    transform: rotate(-1.5deg) scale(1.04);
    box-shadow: 0 8px 28px rgba(0,0,0,0.5);
    transition: none;
    animation: none;
    left: ${curX}px;
    top: ${curY}px;
    margin: 0;
  `;
  document.body.appendChild(ghost);
  _dragGhost = ghost;
  _dragGhostActive = true;

  // Frame-rate-independent lerp — BASE is the "remaining fraction" per 16.67ms (60Hz frame)
  // Lower BASE = smoother/floatier; higher = snappier
  const BASE = 0.82;
  let lastT = performance.now();
  function frame(now) {
    if (!_dragGhostActive) return;
    const factor = 1 - Math.pow(BASE, (now - lastT) / 16.667);
    lastT = now;
    curX += (tgtX - curX) * factor;
    curY += (tgtY - curY) * factor;
    ghost.style.left = curX + 'px';
    ghost.style.top  = curY + 'px';
    _dragGhostRaf = requestAnimationFrame(frame);
  }
  _dragGhostRaf = requestAnimationFrame(frame);

  // Track cursor via drag event (capture so we always get it)
  _dragGhostHandler = ev => {
    if (ev.clientX === 0 && ev.clientY === 0) return; // final dragend fires at 0,0
    tgtX = ev.clientX - ox;
    tgtY = ev.clientY - oy;
  };
  document.addEventListener('drag', _dragGhostHandler, true);
}

function endDragGhost() {
  _dragGhostActive = false;
  if (_dragGhostRaf) { cancelAnimationFrame(_dragGhostRaf); _dragGhostRaf = null; }
  _dragGhost?.remove();
  _dragGhost = null;
  if (_dragGhostHandler) {
    document.removeEventListener('drag', _dragGhostHandler, true);
    _dragGhostHandler = null;
  }
}
// ────────────────────────────────────────────────────────────────────────────

function animateTabRemove(el) {
  if (!el) return Promise.resolve();
  const w = el.getBoundingClientRect().width;
  el.classList.add('tab-removing');
  el.style.minWidth = '0';
  el.style.maxWidth = w + 'px';
  el.style.overflow = 'hidden';
  el.style.pointerEvents = 'none';
  void el.offsetWidth; // force reflow so transition has a "from" state
  el.style.transition = 'max-width 0.15s ease, margin 0.15s ease, opacity 0.12s ease, padding-left 0.15s ease, padding-right 0.15s ease';
  el.style.maxWidth   = '0';
  el.style.opacity    = '0';
  el.style.margin     = '0';
  el.style.paddingLeft  = '0';
  el.style.paddingRight = '0';
  return new Promise(r => el.addEventListener('transitionend', r, { once: true }));
}

function animateTabAppear(el) {
  el.style.minWidth    = '0';
  el.style.maxWidth    = '0';
  el.style.margin      = '0';
  el.style.opacity     = '0';
  el.style.paddingLeft = '0';
  el.style.overflow    = 'hidden';
  void el.offsetWidth; // force reflow so transition has a "from" state
  el.style.transition  = 'max-width 0.15s ease, margin 0.15s ease, opacity 0.12s ease, padding-left 0.15s ease';
  el.style.maxWidth    = '220px';
  el.style.margin      = '0 2px';
  el.style.opacity     = '1';
  el.style.paddingLeft = '14px';
  el.addEventListener('transitionend', () => {
    el.style.transition = '';
    el.style.minWidth = '';
    el.style.maxWidth = '';
    el.style.margin = '';
    el.style.opacity = '';
    el.style.paddingLeft = '';
    el.style.overflow = '';
  }, { once: true });
}

function switchTab(id) {
  if (activeTabId === id && !activeSplitId) return;

  // Clean up whichever view was previously active
  if (activeSplitId) {
    hideSplitView();
    activeSplitId = null;
  } else {
    const prev = tabs.find(t => t.id === activeTabId);
    if (prev) {
      if (prev.editor) prev._savedScroll = prev.editor.getScrollInfo().top;
      prev.wrapper.classList.add('hidden');
    }
  }

  activeTabId = id;
  const next = tabs.find(t => t.id === id);
  if (next) {
    next.wrapper.classList.remove('hidden');
    if (next.type === 'terminal') {
      if (!next._ready) {
        next._init().catch(e => console.error('terminal init error:', e));
      } else {
        requestAnimationFrame(() => {
          fitTermTab(next);
          if (next.termId) window.api.terminalResize(next.termId, next.term.cols, next.term.rows);
          next.term.focus();
        });
      }
    } else if (next.type !== 'settings') {
      next.editor.refresh();
      next.editor.focus();
      if (next._restoreScroll !== undefined) {
        requestAnimationFrame(() => next.editor?.scrollTo(null, next._restoreScroll));
        delete next._restoreScroll;
      } else if (next._savedScroll !== undefined) {
        requestAnimationFrame(() => next.editor?.scrollTo(null, next._savedScroll));
      }
    }
  }

  renderTabBar();
  updateStatusBar();
  updateWindowTitle();

  if (findBar.classList.contains('open')) {
    if (next?.type === 'terminal' || next?.type === 'settings') closeFindBar();
    else { updateSearchOverlay(); refreshMatches(); }
  }
}

function switchToSplit(splitId) {
  if (activeSplitId === splitId) return;

  // Clean up previous view
  if (activeSplitId) {
    hideSplitView();
  } else if (activeTabId) {
    const prev = tabs.find(t => t.id === activeTabId);
    if (prev) prev.wrapper.classList.add('hidden');
  }

  activeSplitId = splitId;
  const [id1] = splits.get(splitId);
  activeTabId = id1;

  showSplitView(splitId);
  renderTabBar();
  updateStatusBar();
  updateWindowTitle();
}

function switchToRelativeTab(delta) {
  if (tabs.length < 2) return;
  const idx = tabs.findIndex(t => t.id === activeTabId);
  const next = (idx + delta + tabs.length) % tabs.length;
  switchTab(tabs[next].id);
}

function destroyTerminalTab(tab) {
  tab.resizeObserver?.disconnect();
  if (tab.termId != null) {
    termDataHandlers.delete(tab.termId);
    termExitHandlers.delete(tab.termId);
    window.api.destroyTerminal(tab.termId);
  }
  try { tab.term?.dispose(); } catch {}
}

async function closeTab(id) {
  const tab = tabs.find(t => t.id === id);
  if (!tab) return;

  // Don't close the last tab if it's a clean untitled editor
  if (tabs.length === 1 && tab.type !== 'terminal' && tab.type !== 'settings'
      && !tab.filePath && !tab.isModified) return;

  if (tab.type === 'settings') {
    if (tab._fontClickOutside) document.removeEventListener('click', tab._fontClickOutside);
    if (_fontDropdownEl) _fontDropdownEl.classList.remove('open');
  }

  if (tab.type === 'terminal') {
    const tabSplitId = getSplitForTab(id);
    if (tabSplitId !== null) {
      if (activeSplitId === tabSplitId) { hideSplitView(); activeSplitId = null; }
      splits.delete(tabSplitId);
      renderTabBar();
    }
    const idx = tabs.findIndex(t => t.id === id);
    const tabEl = tabsEl.querySelector(`[data-tab-id="${id}"]`);
    const removeAnim = animateTabRemove(tabEl);
    destroyTerminalTab(tab);
    tab.wrapper.remove();
    tabs.splice(idx, 1);
    tabsEl.style.transition = 'width 0.15s ease';
    updateTabsWidth();
    if (tabs.length === 0) { activeTabId = null; const nt = createTab(); switchTab(nt.id); }
    else { activeTabId = null; switchTab(tabs[Math.min(idx, tabs.length - 1)].id); }
    await removeAnim; tabEl?.remove(); tabsEl.style.transition = ''; updateTabsWidth();
    return;
  }

  if (tab.isModified) {
    // If in a split, find the tab element (may need to look after unsplitting)
    let anchor = tabsEl.querySelector(`[data-tab-id="${id}"]`)?.querySelector('.tab-close') || null;
    const r = await showCustomDialog({
      message: `Save changes to "${tab.fileName}"?`,
      detail: "Your changes will be lost if you don't save them.",
      anchor,
    });
    if (r === 0) {
      const saved = await saveTab(id);
      if (!saved) return;
    } else if (r === 2) {
      return;
    }
  }

  // If in a split, silently unsplit before closing
  const tabSplitId = getSplitForTab(id);
  if (tabSplitId !== null) {
    if (activeSplitId === tabSplitId) {
      hideSplitView();
      activeSplitId = null;
    }
    splits.delete(tabSplitId);
    renderTabBar(); // creates individual tab elements so animation can find them
  }

  const idx = tabs.findIndex(t => t.id === id);

  const tabEl = tabsEl.querySelector(`[data-tab-id="${id}"]`);
  const removeAnim = animateTabRemove(tabEl);

  // Clean up editor state right away so the UI feels instant
  if (tab.smoothCaret) tab.smoothCaret.destroy();
  tab.wrapper.remove();
  tabs.splice(idx, 1);

  // Animate #tabs width so the + button follows the collapsing tab
  tabsEl.style.transition = 'width 0.15s ease';
  updateTabsWidth();

  if (tabs.length === 0) {
    activeTabId = null;
    const nt = createTab();
    switchTab(nt.id);
  } else {
    activeTabId = null;
    switchTab(tabs[Math.min(idx, tabs.length - 1)].id);
  }

  // Wait for the shrink animation to finish, then pull the element out of the DOM
  await removeAnim;
  tabEl?.remove();
  tabsEl.style.transition = '';
  updateTabsWidth();
}

/* ================================================================
   SPLIT VIEW HELPERS
   ================================================================ */
function getSplitForTab(tabId) {
  for (const [splitId, tabIds] of splits) {
    if (tabIds.includes(tabId)) return splitId;
  }
  return null;
}

function applySplitRatio(splitId) {
  const [tabId1, tabId2] = splits.get(splitId);
  const tab1 = tabs.find(t => t.id === tabId1);
  const tab2 = tabs.find(t => t.id === tabId2);
  const pct = splitRatio * 100;
  if (tab1) tab1.wrapper.style.right = (100 - pct) + '%';
  if (tab2) tab2.wrapper.style.left  = pct + '%';
  const divider = document.getElementById('split-divider');
  if (divider) divider.style.left = pct + '%';
}

function showSplitView(splitId) {
  const [tabId1, tabId2] = splits.get(splitId);
  const tab1 = tabs.find(t => t.id === tabId1);
  const tab2 = tabs.find(t => t.id === tabId2);

  // Hide all wrappers and clear any leftover split inline positioning
  document.querySelectorAll('.editor-wrapper').forEach(w => {
    w.classList.add('hidden');
    w.style.left  = '';
    w.style.right = '';
  });

  if (tab1) tab1.wrapper.classList.remove('hidden');
  if (tab2) tab2.wrapper.classList.remove('hidden');

  let divider = document.getElementById('split-divider');
  if (!divider) {
    divider = document.createElement('div');
    divider.id = 'split-divider';
    editorContainer.appendChild(divider);
  }
  divider.style.display = 'block';
  applySplitRatio(splitId);

  divider.onmousedown = e => {
    e.preventDefault();
    const rect = editorContainer.getBoundingClientRect();
    divider.classList.add('dragging');
    const onMove = ev => {
      splitRatio = Math.max(0.2, Math.min(0.8, (ev.clientX - rect.left) / rect.width));
      applySplitRatio(splitId);
    };
    const onUp = () => {
      divider.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      [tabId1, tabId2].forEach(id => {
        const t = tabs.find(t => t.id === id);
        if (!t) return;
        if (t.type === 'terminal') { try { t.fitAddon?.fit(); if (t.termId != null) window.api.terminalResize(t.termId, t.term.cols, t.term.rows); } catch {} }
        else t.editor?.refresh();
      });
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const showTerm = (t, focus) => {
    if (!t._ready) { t._init().catch(e => console.error('terminal init error:', e)); }
    else { requestAnimationFrame(() => { fitTermTab(t); if (focus) t.term.focus(); }); }
  };

  if (tab1?.type === 'terminal') { showTerm(tab1, true); }
  else { tab1?.editor.refresh(); tab1?.editor.focus(); }

  if (tab2?.type === 'terminal') { showTerm(tab2, false); }
  else { tab2?.editor.refresh(); }

  if (tab1?.paneStatus) { tab1.paneStatus.style.display = ''; updatePaneStatus(tab1); }
  if (tab2?.paneStatus) { tab2.paneStatus.style.display = ''; updatePaneStatus(tab2); }
  statusBarEl.style.display = 'none';
  document.body.classList.add('is-split');
}

function hideSplitView() {
  document.querySelectorAll('.editor-wrapper').forEach(w => {
    w.classList.add('hidden');
    w.style.left  = '';
    w.style.right = '';
  });
  const divider = document.getElementById('split-divider');
  if (divider) divider.style.display = 'none';
  tabs.forEach(t => { if (t.paneStatus) t.paneStatus.style.display = 'none'; });
  statusBarEl.style.display = '';
  document.body.classList.remove('is-split');
}

function createSplit(tabId1, tabId2) {
  if (tabId1 === tabId2) return;
  const t1 = tabs.find(t => t.id === tabId1);
  const t2 = tabs.find(t => t.id === tabId2);
  if (t1?.type === 'settings' || t2?.type === 'settings') return;

  // If either tab is already in a split, unsplit it first (silently)
  const s1 = getSplitForTab(tabId1);
  const s2 = getSplitForTab(tabId2);
  if (s1 !== null) {
    if (activeSplitId === s1) { hideSplitView(); activeSplitId = null; }
    splits.delete(s1);
  }
  if (s2 !== null && s2 !== s1) {
    if (activeSplitId === s2) { hideSplitView(); activeSplitId = null; }
    splits.delete(s2);
  }

  if (!tabs.find(t => t.id === tabId1) || !tabs.find(t => t.id === tabId2)) return;

  const splitId = ++splitIdCounter;
  splits.set(splitId, [tabId1, tabId2]);
  splitRatio = 0.5;
  switchToSplit(splitId);
}

function unsplit(splitId) {
  if (!splits.has(splitId)) return;
  const [tabId1] = splits.get(splitId);

  if (activeSplitId === splitId) {
    hideSplitView();
    activeSplitId = null;
  }

  splits.delete(splitId);
  renderTabBar();
  switchTab(tabId1);
}

/* ================================================================
   TAB CONTEXT MENU
   ================================================================ */
function showContextMenu(e, { tabId = null, splitId = null, folderMenu = false }) {
  e.preventDefault();
  const menu = document.getElementById('tab-context-menu');
  menu.innerHTML = '';

  const addItem = (label, action, cls = '') => {
    const btn = document.createElement('button');
    btn.className = 'menu-dropdown-item' + (cls ? ' ' + cls : '');
    btn.textContent = label;
    btn.addEventListener('click', () => { closeContextMenu(); action(); });
    menu.appendChild(btn);
  };

  const addSep = () => {
    const sep = document.createElement('div');
    sep.className = 'menu-separator';
    menu.appendChild(sep);
  };

  if (folderMenu && sidebarFolderPath) {
    addItem('Copy Path', () => navigator.clipboard.writeText(sidebarFolderPath));
    addItem('Open in PowerShell', () => switchTab(createTerminalTab({ cwd: sidebarFolderPath }).id));
  } else if (splitId !== null) {
    const [id1, id2] = splits.get(splitId);
    const t1 = tabs.find(t => t.id === id1);
    const t2 = tabs.find(t => t.id === id2);
    addItem(`Rename "${t1?.fileName}"…`, () => renameSplitTab(splitId, id1));
    addItem(`Rename "${t2?.fileName}"…`, () => renameSplitTab(splitId, id2));
    addSep();
    addItem('Swap Panes', () => {
      splits.set(splitId, [id2, id1]);
      if (activeSplitId === splitId) showSplitView(splitId);
      renderTabBar();
    });
    addItem('Unsplit', () => unsplit(splitId));
    addSep();
    addItem(`Close "${t1?.fileName}"`, () => { unsplit(splitId); closeTab(id1); });
    addItem(`Close "${t2?.fileName}"`, () => { unsplit(splitId); closeTab(id2); });
    addSep();
    addItem('Close Both', () => { const pair = splits.get(splitId); unsplit(splitId); closeTab(pair[0]); closeTab(pair[1]); }, 'item-danger');
  } else {
    const tab = tabs.find(t => t.id === tabId);
    if (tab && tab.type !== 'settings') {
      addItem('Rename…', () => renameTab(tabId));
      addSep();
    }
    addItem('Close Tab', () => closeTab(tabId));
    addSep();
    addItem('Close Other Tabs', () => {
      tabs.filter(t => t.id !== tabId).map(t => t.id).forEach(id => closeTab(id));
    });
    addItem('Close All Tabs', () => tabs.map(t => t.id).forEach(id => closeTab(id)), 'item-danger');
  }

  // Position — render first then adjust if off-screen
  menu.style.left = e.clientX + 'px';
  menu.style.top  = e.clientY + 'px';
  menu.classList.add('open');

  requestAnimationFrame(() => {
    const r = menu.getBoundingClientRect();
    if (r.right  > window.innerWidth)  menu.style.left = (e.clientX - r.width)  + 'px';
    if (r.bottom > window.innerHeight) menu.style.top  = (e.clientY - r.height) + 'px';
  });

  if (ctxMenuCleanup) ctxMenuCleanup();
  const handler = ev => { if (!menu.contains(ev.target)) closeContextMenu(); };
  setTimeout(() => document.addEventListener('mousedown', handler), 0);
  ctxMenuCleanup = () => document.removeEventListener('mousedown', handler);
}

function closeContextMenu() {
  document.getElementById('tab-context-menu').classList.remove('open');
  if (ctxMenuCleanup) { ctxMenuCleanup(); ctxMenuCleanup = null; }
}

async function closeAllTabs() {
  const ids = tabs.map(t => t.id);
  for (const id of ids) {
    const tab = tabs.find(t => t.id === id);
    if (!tab) continue;
    if (tab.type === 'terminal') {
      destroyTerminalTab(tab);
      tab.wrapper.remove();
      const i = tabs.findIndex(t => t.id === id);
      if (i !== -1) tabs.splice(i, 1);
      continue;
    }
    if (tab.isModified) {
      switchTab(id);
      const tabEl = tabsEl.querySelector(`[data-tab-id="${id}"]`);
      const anchor = tabEl?.querySelector('.tab-close') || null;
      const r = await showCustomDialog({
        message: `Save changes to "${tab.fileName}"?`,
        detail: "Your changes will be lost if you don't save them.",
        anchor,
      });
      if (r === 2) return false;
      if (r === 0) {
        const saved = await saveTab(id);
        if (!saved) return false;
      }
    }
    if (tab.smoothCaret) tab.smoothCaret.destroy();
    tab.wrapper.remove();
    const i = tabs.findIndex(t => t.id === id);
    if (i !== -1) tabs.splice(i, 1);
  }
  return true;
}

/* ================================================================
   FILE OPERATIONS
   ================================================================ */
async function saveTab(id) {
  const tab = tabs.find(t => t.id === id);
  if (!tab || tab.type === 'terminal' || tab.type === 'settings') return false;
  const content = tab.editor.getValue();

  if (tab.filePath) {
    await window.api.saveFile({ filePath: tab.filePath, content });
    tab.isModified = false;
    renderTabBar();
    updateWindowTitle();
    return true;
  }
  return saveTabAs(id);
}

async function saveTabAs(id) {
  const tab = tabs.find(t => t.id === id);
  if (!tab || tab.type === 'terminal' || tab.type === 'settings') return false;
  const content = tab.editor.getValue();

  // For unsaved files, append the language's default extension if the name has none
  let defaultPath = tab.fileName;
  if (!tab.filePath && !extFromPath(defaultPath)) {
    const ext = LANG_DEFAULT_EXT[tab.lang?.label];
    if (ext) defaultPath = `${defaultPath}.${ext}`;
  }
  const filePath = await window.api.saveFileAs({ defaultPath, content });
  if (!filePath) return false;

  tab.filePath = filePath;
  tab.fileName = fileNameFromPath(filePath);
  tab.isModified = false;
  tab.lang = langFromExt(extFromPath(filePath));
  tab.editor.setOption('mode', tab.lang.mode);
  tab.eol = detectEOL(content);

  renderTabBar();
  updateStatusBar();
  updateWindowTitle();
  return true;
}

async function saveAllTabs() {
  for (const tab of tabs) {
    if (tab.isModified) {
      await saveTab(tab.id);
    }
  }
}

function openFileInTab(filePath, content) {
  const existing = tabs.find(t => t.filePath === filePath);
  if (existing) { switchTab(existing.id); return; }

  if (content.length > 10_000_000) {
    alert('File is too large to open (>10 MB).');
    return;
  }

  const fileName = fileNameFromPath(filePath);
  const tab = createTab({ fileName, filePath, content });
  switchTab(tab.id);
}

function loadFileIntoPane(tab, filePath, content, splitId) {
  const fileName = fileNameFromPath(filePath);
  if (tab.type === 'terminal' || tab.type === 'settings') {
    const newTab = createTab({ fileName, filePath, content });
    const [id1, id2] = splits.get(splitId);
    splits.set(splitId, [id1 === tab.id ? newTab.id : id1, id2 === tab.id ? newTab.id : id2]);
    hideSplitView();
    activeSplitId = null;
    switchToSplit(splitId);
  } else {
    tab.fileName = fileName;
    tab.filePath = filePath;
    tab.isModified = false;
    tab.lang = langFromExt(extFromPath(filePath));
    tab.eol = detectEOL(content);
    tab.editor.setValue(content);
    tab.editor.setOption('mode', tab.lang.mode);
    tab.editor.clearHistory();
    renderTabBar();
    updateStatusBar();
    updateWindowTitle();
  }
}

/* ================================================================
   STATUS BAR
   ================================================================ */
function updateStatusLangPosition() {
  const statusLeftEl = document.getElementById('status-left');
  // Only align to code area in single-tab (non-split) editor views
  if (activeSplitId !== null) { statusLeftEl.style.paddingLeft = ''; return; }
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab?.editor) { statusLeftEl.style.paddingLeft = ''; return; }
  const guttersEl = tab.editor.getWrapperElement().querySelector('.CodeMirror-gutters');
  if (!guttersEl) { statusLeftEl.style.paddingLeft = ''; return; }
  // gutters.left = left edge of the editor area (same x as pane-status in split view)
  // status-bar already has 10px left padding, so the button lands at editor_left + 10px,
  // which matches exactly where the language label sits inside the pane-status (padding: 0 10px)
  const pl = Math.max(0, guttersEl.getBoundingClientRect().left);
  statusLeftEl.style.paddingLeft = pl + 'px';
}

function updateStatusBar() {
  updateStatusLangPosition();
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab) { statusLang.textContent = 'Plain Text'; return; }

  if (tab.type === 'terminal' || tab.type === 'settings') {
    statusLang.textContent = tab.type === 'terminal' ? 'Terminal' : 'Settings';
    statusCursor.textContent = '';
    statusEol.textContent = '';
    statusSel.textContent = '';
    return;
  }

  const cm = tab.editor;
  const cur = cm.getCursor();
  statusCursor.textContent = `Ln ${cur.line + 1}, Col ${cur.ch + 1}`;
  statusLang.textContent = tab.lang.label;
  statusEol.textContent = tab.eol;

  const sel = cm.getSelection();
  statusSel.textContent = sel.length ? `${sel.length} selected` : '';

  if (activeSplitId !== null) {
    const pair = splits.get(activeSplitId);
    if (pair) pair.forEach(id => { const t = tabs.find(t => t.id === id); if (t) updatePaneStatus(t); });
  }
}

function updatePaneStatus(tab) {
  if (!tab._psLang) return;
  tab._psLang.textContent = tab.lang.label;
  if (tab.editor) {
    const cur = tab.editor.getCursor();
    tab._psCursor.textContent = `Ln ${cur.line + 1}, Col ${cur.ch + 1}`;
  } else {
    tab._psCursor.textContent = '';
  }
}

function updateWindowTitle() {
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab) { window.api.setTitle('Caret'); return; }
  if (tab.type === 'terminal') { window.api.setTitle('PowerShell — Caret'); return; }
  if (tab.type === 'settings') { window.api.setTitle('Settings — Caret'); return; }
  const mod = tab.isModified ? '● ' : '';
  window.api.setTitle(`${mod}${tab.fileName} — Caret`);
}

/* ================================================================
   FIND & REPLACE
   ================================================================ */
function buildSearchQuery() {
  const raw = findInput.value;
  if (!raw) return null;
  if (findRegex) {
    try { return new RegExp(raw, findCaseSensitive ? '' : 'i'); }
    catch { return null; }
  }
  if (findWholeWord) {
    const escaped = raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b${escaped}\\b`, findCaseSensitive ? '' : 'i');
  }
  return raw;
}

function updateSearchOverlay() {
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab || tab.type === 'terminal') return;
  const cm = tab.editor;

  if (searchOverlay) { cm.removeOverlay(searchOverlay); searchOverlay = null; }

  const query = buildSearchQuery();
  if (!query) return;

  let regex;
  if (query instanceof RegExp) {
    regex = new RegExp(query.source, query.flags.includes('i') ? 'gi' : 'g');
  } else {
    const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regex = new RegExp(esc, findCaseSensitive ? 'g' : 'gi');
  }

  searchOverlay = {
    token(stream) {
      regex.lastIndex = stream.pos;
      const m = regex.exec(stream.string);
      if (m && m.index === stream.pos) {
        stream.pos += m[0].length || 1;
        return 'search-highlight';
      }
      stream.pos = m ? m.index : stream.string.length;
    }
  };
  cm.addOverlay(searchOverlay);
}

function refreshMatches() {
  allMatches = [];
  currentMatchIdx = -1;
  findCount.textContent = '';

  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab || tab.type === 'terminal') return;
  const cm = tab.editor;
  const query = buildSearchQuery();
  if (!query) return;

  const cursor = cm.getSearchCursor(query, { line: 0, ch: 0 }, { caseFold: !findCaseSensitive });
  while (cursor.findNext()) {
    allMatches.push({ from: cursor.from(), to: cursor.to() });
  }

  if (allMatches.length > 0) {
    findCount.textContent = `${allMatches.length} match${allMatches.length !== 1 ? 'es' : ''}`;
    findInput.style.color = '';
  } else if (findInput.value) {
    findCount.textContent = 'No matches';
    findInput.style.color = 'var(--red)';
  }
}

function findMove(forward) {
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab || tab.type === 'terminal') return;
  const cm = tab.editor;
  const query = buildSearchQuery();
  if (!query) return;

  refreshMatches();
  if (allMatches.length === 0) return;

  const cur = cm.getCursor(forward ? 'to' : 'from');
  let idx = -1;

  if (forward) {
    idx = allMatches.findIndex(m => m.from.line > cur.line || (m.from.line === cur.line && m.from.ch >= cur.ch));
    if (idx === -1) idx = 0;
  } else {
    for (let i = allMatches.length - 1; i >= 0; i--) {
      const m = allMatches[i];
      if (m.to.line < cur.line || (m.to.line === cur.line && m.to.ch <= cur.ch)) { idx = i; break; }
    }
    if (idx === -1) idx = allMatches.length - 1;
  }

  currentMatchIdx = idx;
  const match = allMatches[idx];
  cm.setSelection(match.from, match.to);
  cm.scrollIntoView({ from: match.from, to: match.to }, 80);
  findCount.textContent = `${idx + 1} of ${allMatches.length}`;
}

function doReplaceOne() {
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab || tab.type === 'terminal') return;
  const cm = tab.editor;
  const query = buildSearchQuery();
  if (!query) return;

  const sel = cm.getSelection();
  const replacement = replaceInput.value;

  // If current selection matches, replace it
  const testCursor = cm.getSearchCursor(query, cm.getCursor('from'), { caseFold: !findCaseSensitive });
  if (testCursor.findNext()) {
    const selFrom = cm.getCursor('from');
    const selTo   = cm.getCursor('to');
    if (selFrom.line === testCursor.from().line && selFrom.ch === testCursor.from().ch) {
      cm.replaceRange(replacement, testCursor.from(), testCursor.to());
    }
  }
  findMove(true);
}

function doReplaceAll() {
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab || tab.type === 'terminal') return;
  const cm = tab.editor;
  const query = buildSearchQuery();
  if (!query) return;

  const replacement = replaceInput.value;
  cm.operation(() => {
    const cursor = cm.getSearchCursor(query, { line: 0, ch: 0 }, { caseFold: !findCaseSensitive });
    let count = 0;
    while (cursor.findNext()) { cursor.replace(replacement); count++; }
    findCount.textContent = `Replaced ${count}`;
  });
  updateSearchOverlay();
}

function openFindBar(withReplace) {
  const tab = tabs.find(t => t.id === activeTabId);
  if (tab?.type === 'terminal' || tab?.type === 'settings') return;
  findBar.classList.add('open');
  if (withReplace) findBar.classList.add('with-replace');
  else findBar.classList.remove('with-replace');
  replaceRow.style.display = withReplace ? 'flex' : 'none';
  findInput.focus();
  findInput.select();
}

function closeFindBar() {
  findBar.classList.remove('open', 'with-replace');
  const tab = tabs.find(t => t.id === activeTabId);
  if (tab && tab.editor && searchOverlay) { tab.editor.removeOverlay(searchOverlay); searchOverlay = null; }
  findCount.textContent = '';
  findInput.style.color = '';
  if (tab?.type === 'terminal') tab.term?.focus();
  else if (tab?.editor) tab.editor.focus();
}

/* ================================================================
   ZOOM
   ================================================================ */
function setFontSize(size) {
  fontSize = Math.max(8, Math.min(40, size));
  document.documentElement.style.setProperty('--editor-font-size', fontSize + 'px');
  updateTerminalFonts();
}

function fitTermTab(t) {
  if (!t.fitAddon || !t.term || !t._ready) return;
  try {
    if (appSettings.wordWrap) {
      t._hScroll = 0;
      const screen = t._termContainer?.querySelector('.xterm-screen');
      if (screen) screen.style.transform = '';
      t.fitAddon.fit();
      if (t.term.rows > 4) t.term.resize(t.term.cols, t.term.rows - 2);
    } else {
      const dims = t.fitAddon.proposeDimensions?.();
      if (dims) {
        const cols = Math.max(dims.cols, 220);
        const rows = Math.max(2, dims.rows - 2);
        t.term.resize(cols, rows);
      } else {
        t.fitAddon.fit();
        if (t.term.rows > 4) t.term.resize(t.term.cols, t.term.rows - 2);
      }
    }
  } catch {}
}

function updateTerminalFonts() {
  const ff = getComputedStyle(document.documentElement).getPropertyValue('--editor-font').trim();
  tabs.forEach(t => {
    if (!t.term || !t._ready) return;
    t.term.options.fontFamily = ff;
    t.term.options.fontSize   = fontSize;
    fitTermTab(t);
    t.smoothCaret?.forceRecalc?.();
  });
}

/* ================================================================
   MENU ACTION HANDLER
   ================================================================ */
async function handleAction(action) {
  const tab = tabs.find(t => t.id === activeTabId);

  switch (action) {
    case 'new-file': {
      const nt = createTab();
      switchTab(nt.id);
      break;
    }
    case 'new-terminal': {
      switchTab(createTerminalTab().id);
      break;
    }
    case 'open-file': {
      const files = await window.api.openFileDialog();
      files.forEach(({ filePath, content }) => openFileInTab(filePath, content));
      break;
    }
    case 'open-folder': await openSidebarFolder(); break;
    case 'save':       if (activeTabId) await saveTab(activeTabId); break;
    case 'save-as':    if (activeTabId) await saveTabAs(activeTabId); break;
    case 'save-all':   await saveAllTabs(); break;
    case 'close-tab':  if (activeTabId) await closeTab(activeTabId); break;
    case 'find':       openFindBar(false); break;
    case 'replace':    openFindBar(true); break;
    case 'undo':       if (tab?.editor) tab.editor.undo(); break;
    case 'redo':       if (tab?.editor) tab.editor.redo(); break;
    case 'select-all': if (tab?.editor) tab.editor.execCommand('selectAll'); break;
    case 'toggle-comment': if (tab?.editor) tab.editor.toggleComment({ indent: true }); break;
    case 'toggle-word-wrap':
      appSettings.wordWrap = !appSettings.wordWrap;
      tabs.forEach(t => {
        if (t.editor) t.editor.setOption('lineWrapping', appSettings.wordWrap);
        if (t.term && t._ready) { fitTermTab(t); if (t.termId) window.api.terminalResize(t.termId, t.term.cols, t.term.rows); }
      });
      saveSettings();
      break;
    case 'zoom-in':    setFontSize(fontSize + 1); break;
    case 'zoom-out':   setFontSize(fontSize - 1); break;
    case 'zoom-reset': setFontSize(14); break;
    case 'zen-mode':       toggleZenMode(); break;
    case 'toggle-sidebar': toggleSidebar(); break;
    case 'quit':       handleWindowClose(); break;
    default:
      if (action.startsWith('set-language:')) {
        const langName = action.slice('set-language:'.length);
        const langInfo = LANG_BY_NAME[langName];
        if (langInfo && tab && tab.editor) {
          applyLangExtToFileName(tab, langInfo);
          tab.lang = langInfo;
          tab.editor.setOption('mode', langInfo.mode);
          renderTabBar();
          updateStatusBar();
          updateWindowTitle();
          if (findBar.classList.contains('open')) updateSearchOverlay();
        }
      }
  }
}

/* ================================================================
   CUSTOM MENU BAR
   ================================================================ */
const MENUS = [
  {
    id: 'file', label: 'File',
    items: [
      { label: 'New',            shortcut: 'Ctrl+N',         action: 'new-file' },
      { label: 'Open…',          shortcut: 'Ctrl+O',         action: 'open-file' },
      { label: 'Open Folder…',   shortcut: 'Ctrl+Shift+O',   action: 'open-folder' },
      null,
      { label: 'Save',      shortcut: 'Ctrl+S',       action: 'save' },
      { label: 'Save As…',  shortcut: 'Ctrl+Shift+S', action: 'save-as' },
      { label: 'Save All',  shortcut: 'Ctrl+Alt+S',   action: 'save-all' },
      null,
      { label: 'Close Tab', shortcut: 'Ctrl+W',       action: 'close-tab' },
      null,
      { label: 'Exit',      shortcut: 'Alt+F4',       action: 'quit' },
    ],
  },
  {
    id: 'edit', label: 'Edit',
    items: [
      { label: 'Undo',           shortcut: 'Ctrl+Z', action: 'undo' },
      { label: 'Redo',           shortcut: 'Ctrl+Y', action: 'redo' },
      null,
      { label: 'Select All',     shortcut: 'Ctrl+A', action: 'select-all' },
      null,
      { label: 'Find…',          shortcut: 'Ctrl+F', action: 'find' },
      { label: 'Replace…',       shortcut: 'Ctrl+H', action: 'replace' },
      null,
      { label: 'Toggle Comment', shortcut: 'Ctrl+/', action: 'toggle-comment' },
    ],
  },
  {
    id: 'view', label: 'View',
    items: [
      { label: 'Word Wrap',       shortcut: 'Alt+Z',        action: 'toggle-word-wrap' },
      null,
      { label: 'Zoom In',         shortcut: 'Ctrl++',       action: 'zoom-in' },
      { label: 'Zoom Out',        shortcut: 'Ctrl+−',       action: 'zoom-out' },
      { label: 'Reset Zoom',      shortcut: 'Ctrl+0',       action: 'zoom-reset' },
      null,
      { label: 'Toggle Sidebar',  shortcut: 'Ctrl+B',       action: 'toggle-sidebar' },
      null,
      { label: 'New Terminal',    shortcut: 'Ctrl+Shift+T', action: 'new-terminal' },
      null,
      { label: 'Zen Mode',        shortcut: 'F11',          action: 'zen-mode' },
    ],
  },
  {
    id: 'language', label: 'Language',
    items: Object.keys(LANG_BY_NAME).map(name => ({
      label: name, action: `set-language:${name}`,
    })),
  },
];

function buildMenuBar() {
  const bar = document.getElementById('menu-bar');
  let activeMenuId = null;

  function closeAll() {
    bar.querySelectorAll('.menu-item').forEach(mi => mi.classList.remove('open'));
    activeMenuId = null;
  }

  function openMenu(id, itemEl) {
    closeAll();
    itemEl.classList.add('open');
    activeMenuId = id;
  }

  MENUS.forEach(menu => {
    const item = bar.querySelector(`.menu-item:has([data-menu="${menu.id}"])`);
    const btn  = item.querySelector('.menu-btn');

    const dropdown = document.createElement('div');
    dropdown.className = 'menu-dropdown';
    dropdown.id = `dropdown-${menu.id}`;

    menu.items.forEach(entry => {
      if (!entry) {
        const sep = document.createElement('div');
        sep.className = 'menu-separator';
        dropdown.appendChild(sep);
        return;
      }

      const el = document.createElement('button');
      el.className = 'menu-dropdown-item';

      const labelSpan = document.createElement('span');
      labelSpan.textContent = entry.label;
      el.appendChild(labelSpan);

      if (entry.shortcut) {
        const sc = document.createElement('span');
        sc.className = 'menu-shortcut';
        sc.textContent = entry.shortcut;
        el.appendChild(sc);
      }

      el.addEventListener('click', () => {
        closeAll();
        handleAction(entry.action);
      });

      dropdown.appendChild(el);
    });

    item.appendChild(dropdown);

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeMenuId === menu.id ? closeAll() : openMenu(menu.id, item);
    });

    btn.addEventListener('mouseenter', () => {
      if (activeMenuId && activeMenuId !== menu.id) openMenu(menu.id, item);
    });
  });

  document.addEventListener('click', closeAll);
}

window.api.onFileOpened(({ filePath, content }) => {
  openFileInTab(filePath, content);
});

/* ================================================================
   WINDOW CLOSE HANDLER
   ================================================================ */
async function handleWindowClose() {
  const modified = tabs.filter(t => t.isModified);
  if (modified.length === 0) { window.api.closeApp(); return; }

  if (modified.length === 1) {
    const tab = modified[0];
    switchTab(tab.id);
    const tabEl = tabsEl.querySelector(`[data-tab-id="${tab.id}"]`);
    const r = await showCustomDialog({
      message: `Save changes to "${tab.fileName}"?`,
      detail: "Your changes will be lost if you don't save them.",
      anchor: tabEl?.querySelector('.tab-close') || null,
    });
    if (r === 2) return;
    if (r === 0) { const saved = await saveTab(tab.id); if (!saved) return; }
  } else {
    const r = await showCustomDialog({
      message: `You have ${modified.length} unsaved files`,
      detail: "Your changes will be lost if you don't save them.",
      anchor: document.getElementById('btn-close'),
      primaryLabel: 'Save All',
      files: modified.map(t => t.fileName),
    });
    if (r === 2) return;
    if (r === 0) {
      for (const tab of modified) {
        const saved = await saveTab(tab.id);
        if (!saved) return;
      }
    }
  }

  window.api.closeApp();
}

window.api.onWindowClosing(() => handleWindowClose());

// Route terminal data/exit to the correct tab
window.api.onTerminalData(({ termId, data }) => { termDataHandlers.get(termId)?.(data); });
window.api.onTerminalExit(({ termId }) => { termExitHandlers.get(termId)?.(); });

// Update notification
window.api.onUpdateAvailable(({ latest, downloadUrl }) => {
  const overlay = document.getElementById('update-overlay');
  document.getElementById('update-version-new').textContent = `Caret ${latest}`;
  document.getElementById('update-version-current').textContent = `v${appSettings.version || '1.0.0'}`;
  overlay.classList.add('show');
  document.getElementById('update-btn-later').onclick = () => overlay.classList.remove('show');
  document.getElementById('update-btn-download').onclick = () => {
    window.api.openExternal(downloadUrl);
    overlay.classList.remove('show');
  };
});

/* ================================================================
   FIND BAR EVENTS
   ================================================================ */
findInput.addEventListener('input', () => {
  findQuery = findInput.value;
  findInput.style.color = '';
  updateSearchOverlay();
  refreshMatches();
});

findInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); findMove(!e.shiftKey); }
  if (e.key === 'Escape') closeFindBar();
});

replaceInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeFindBar();
});

document.getElementById('find-prev-btn').addEventListener('click', () => findMove(false));
document.getElementById('find-next-btn').addEventListener('click', () => findMove(true));
document.getElementById('find-close-btn').addEventListener('click', closeFindBar);
document.getElementById('replace-one-btn').addEventListener('click', doReplaceOne);
document.getElementById('replace-all-btn').addEventListener('click', doReplaceAll);

optCase.addEventListener('click', () => {
  findCaseSensitive = !findCaseSensitive;
  optCase.classList.toggle('active', findCaseSensitive);
  updateSearchOverlay(); refreshMatches();
});

optWord.addEventListener('click', () => {
  findWholeWord = !findWholeWord;
  optWord.classList.toggle('active', findWholeWord);
  updateSearchOverlay(); refreshMatches();
});

optRegex.addEventListener('click', () => {
  findRegex = !findRegex;
  optRegex.classList.toggle('active', findRegex);
  updateSearchOverlay(); refreshMatches();
});

/* ================================================================
   STATUS BAR LANGUAGE BUTTON
   ================================================================ */
statusLang.addEventListener('click', () => {
  const tab = tabs.find(t => t.id === activeTabId);
  if (!tab || tab.type === 'terminal') return;
  const names = Object.keys(LANG_BY_NAME);
  const cur = names.indexOf(tab.lang.label);
  const next = names[(cur + 1) % names.length];
  const nextLang = LANG_BY_NAME[next];
  applyLangExtToFileName(tab, nextLang);
  tab.lang = nextLang;
  tab.editor.setOption('mode', tab.lang.mode);
  renderTabBar();
  updateStatusBar();
  updateWindowTitle();
});

/* ================================================================
   DRAG & DROP FILES
   ================================================================ */
document.body.addEventListener('dragover', e => e.preventDefault());
document.body.addEventListener('drop', async e => {
  e.preventDefault();
  const files = [...e.dataTransfer.files];
  for (const file of files) {
    const fp = file.path;
    if (!fp) continue;
    try {
      const content = await window.api.readFile(fp);
      openFileInTab(fp, content);
    } catch (err) {
      console.error('Failed to read dropped file:', fp, err);
    }
  }
});

/* ================================================================
   GLOBAL KEYBOARD SHORTCUTS
   ================================================================ */
document.addEventListener('keydown', e => {
  const ctrl = e.ctrlKey || e.metaKey;

  // Ctrl+1-9: switch to visual tab slot by index (splits count as one slot)
  if (ctrl && !e.shiftKey && !e.altKey && e.key >= '1' && e.key <= '9') {
    const idx = parseInt(e.key) - 1;
    const slots = [];
    tabsEl.querySelectorAll('.tab[data-tab-id], .tab[data-split-id]').forEach(el => {
      if (el.classList.contains('tab-removing')) return;
      if (el.dataset.splitId) slots.push({ type: 'split', splitId: parseInt(el.dataset.splitId) });
      else slots.push({ type: 'tab', id: parseInt(el.dataset.tabId) });
    });
    if (idx < slots.length) {
      e.preventDefault();
      const slot = slots[idx];
      if (slot.type === 'split') switchToSplit(slot.splitId);
      else switchTab(slot.id);
    }
    return;
  }

  if (ctrl && !e.shiftKey && !e.altKey) {
    switch (e.key) {
      case 'n': case 't': e.preventDefault(); handleAction('new-file'); return;
      case 'o': e.preventDefault(); handleAction('open-file'); return;
      case 's': e.preventDefault(); handleAction('save'); return;
      case 'w': e.preventDefault(); handleAction('close-tab'); return;
      case '0': e.preventDefault(); handleAction('zoom-reset'); return;
      case '=': case '+': e.preventDefault(); handleAction('zoom-in'); return;
      case '-': case '_': e.preventDefault(); handleAction('zoom-out'); return;
    }
  }

  if (ctrl && e.shiftKey && !e.altKey) {
    switch (e.key.toLowerCase()) {
      case 's': e.preventDefault(); handleAction('save-as'); return;
      case 't': e.preventDefault(); handleAction('new-terminal'); return;
      case 'o': e.preventDefault(); handleAction('open-folder'); return;
    }
  }

  if (ctrl && !e.shiftKey && e.altKey) {
    switch (e.key.toLowerCase()) {
      case 's': e.preventDefault(); handleAction('save-all'); return;
    }
  }

  if (!ctrl && e.altKey && !e.shiftKey) {
    if (e.key.toLowerCase() === 'z') { e.preventDefault(); handleAction('toggle-word-wrap'); return; }
  }

  if (e.key === 'F11') { e.preventDefault(); toggleZenMode(); return; }
  if (e.ctrlKey && e.key === 'b') { e.preventDefault(); toggleSidebar(); return; }
});

/* ================================================================
   CODEMIRROR CUSTOM SCROLLBAR
   ================================================================ */
function setupCmScrollbar(cm, wrapperEl) {
  const thumb = document.createElement('div');
  thumb.className = 'fade-sb fade-sb-cm';
  wrapperEl.appendChild(thumb);

  let hideTimer;

  function updateThumb() {
    const si = cm.getScrollInfo();
    if (si.height <= si.clientHeight) { thumb.style.display = 'none'; return; }
    thumb.style.display = '';
    const tH = Math.max(24, si.clientHeight * si.clientHeight / si.height);
    const tTop = (si.top / (si.height - si.clientHeight)) * (si.clientHeight - tH);
    thumb.style.height = tH + 'px';
    thumb.style.top = tTop + 'px';
  }

  function show() { updateThumb(); clearTimeout(hideTimer); thumb.classList.add('visible'); }
  function hide(delay) { clearTimeout(hideTimer); hideTimer = setTimeout(() => thumb.classList.remove('visible'), delay); }

  cm.on('scroll', () => { show(); hide(1200); });
  cm.on('update', updateThumb);
  wrapperEl.addEventListener('mouseenter', show);
  wrapperEl.addEventListener('mouseleave', () => hide(300));

  thumb.addEventListener('mousedown', e => {
    e.preventDefault();
    e.stopPropagation();
    thumb.classList.add('dragging');
    const si = cm.getScrollInfo();
    const tH = parseFloat(thumb.style.height);
    const maxScroll = si.height - si.clientHeight;
    const maxThumbTop = si.clientHeight - tH;
    const startY = e.clientY;
    const startScrollTop = si.top;

    clearTimeout(hideTimer);
    thumb.classList.add('visible');

    const onMove = ev => {
      const dy = ev.clientY - startY;
      const newScroll = Math.max(0, Math.min(maxScroll, startScrollTop + dy * (maxScroll / maxThumbTop)));
      cm.scrollTo(null, newScroll);
    };
    const onUp = () => {
      thumb.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      hide(600);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

/* ================================================================
   FADE SCROLLBAR
   ================================================================ */
function setupFadeScrollbar(scrollEl, { vertical } = {}) {
  const parent = scrollEl.parentElement;
  const thumb = document.createElement('div');
  thumb.className = 'fade-sb';
  if (vertical) {
    thumb.style.cssText = 'right:2px;width:4px;background:var(--surface1);';
  } else {
    thumb.style.cssText = 'bottom:0;height:2px;background:var(--overlay0);border-radius:1px;';
  }
  parent.appendChild(thumb);

  let hideTimer;

  function updateThumb() {
    const pr = parent.getBoundingClientRect();
    const sr = scrollEl.getBoundingClientRect();
    if (vertical) {
      const viewH = scrollEl.clientHeight;
      const totalH = scrollEl.scrollHeight;
      if (totalH <= viewH) { thumb.style.display = 'none'; return; }
      thumb.style.display = '';
      const tH = Math.max(24, viewH * viewH / totalH);
      const tTop = (sr.top - pr.top) + scrollEl.scrollTop / (totalH - viewH) * (viewH - tH);
      thumb.style.height = tH + 'px';
      thumb.style.top = tTop + 'px';
    } else {
      const viewW = scrollEl.clientWidth;
      const totalW = scrollEl.scrollWidth;
      if (totalW <= viewW) { thumb.style.display = 'none'; return; }
      thumb.style.display = '';
      const tW = Math.max(24, viewW * viewW / totalW);
      const tLeft = (sr.left - pr.left) + scrollEl.scrollLeft / (totalW - viewW) * (viewW - tW);
      thumb.style.width = tW + 'px';
      thumb.style.left = tLeft + 'px';
    }
  }

  function show() { updateThumb(); clearTimeout(hideTimer); thumb.classList.add('visible'); }
  function hide(delay) { clearTimeout(hideTimer); hideTimer = setTimeout(() => thumb.classList.remove('visible'), delay); }

  scrollEl.addEventListener('scroll', () => { show(); hide(1200); });
}

/* ================================================================
   INIT
   ================================================================ */
const MAXIMIZE_ICON = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
  <rect x="0.5" y="0.5" width="9" height="9" stroke="currentColor" stroke-width="1"/>
</svg>`;

const RESTORE_ICON = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
  <rect x="2" y="0" width="8" height="8" stroke="currentColor" stroke-width="1"/>
  <path d="M0 2v8h8" stroke="currentColor" stroke-width="1"/>
</svg>`;

async function init() {
  initSettings();
  setFontSize(appSettings.fontSize);
  buildMenuBar();
  document.body.classList.add('sidebar-hidden');

  const restored = await restoreSession();
  if (!restored) { const nt = createTab(); switchTab(nt.id); }

  window.addEventListener('beforeunload', saveSession);

  newTabBtnEl.addEventListener('click', (e) => {
    if (e.shiftKey) { switchTab(createTerminalTab().id); return; }
    const t = createTab();
    switchTab(t.id);
  });

  new ResizeObserver(updateTabsWidth).observe(tabsScrollEl);

  // Sidebar
  const sidebarOpenBtn   = document.getElementById('sidebar-open-btn');
  const sidebarPathBar   = document.getElementById('sidebar-path-bar');
  const sidebarPathInput = document.getElementById('sidebar-path-input');
  const sidebarPathBrowse = document.getElementById('sidebar-path-browse');

  sidebarOpenBtn.addEventListener('click', () => {
    sidebarPathBar.classList.toggle('open');
    if (sidebarPathBar.classList.contains('open')) sidebarPathInput.focus();
    else sidebarPathInput.value = '';
  });

  sidebarPathInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); openSidebarFolder(sidebarPathInput.value.trim()); }
    if (e.key === 'Escape') { e.preventDefault(); closeSidebarPathBar(); }
  });

  sidebarPathBrowse.addEventListener('click', () => openSidebarFolder());

  sidebarOpenBtn.addEventListener('contextmenu', e => {
    if (!sidebarFolderPath) return;
    showContextMenu(e, { folderMenu: true });
  });

  document.getElementById('sidebar-tree').addEventListener('contextmenu', e => {
    if (!sidebarFolderPath) return;
    e.preventDefault();
    const treeEl = document.getElementById('sidebar-tree');
    const menu = document.getElementById('tab-context-menu');
    menu.innerHTML = '';
    const addItem = (label, action) => {
      const btn = document.createElement('button');
      btn.className = 'menu-dropdown-item';
      btn.textContent = label;
      btn.addEventListener('click', () => { closeContextMenu(); action(); });
      menu.appendChild(btn);
    };
    addItem('New File',   () => createTreeEntry(sidebarFolderPath, treeEl, null, false));
    addItem('New Folder', () => createTreeEntry(sidebarFolderPath, treeEl, null, true));
    menu.style.left = e.clientX + 'px';
    menu.style.top  = e.clientY + 'px';
    menu.classList.add('open');
    requestAnimationFrame(() => {
      const r = menu.getBoundingClientRect();
      if (r.right  > window.innerWidth)  menu.style.left = (e.clientX - r.width)  + 'px';
      if (r.bottom > window.innerHeight) menu.style.top  = (e.clientY - r.height) + 'px';
    });
    if (ctxMenuCleanup) ctxMenuCleanup();
    const handler = ev => { if (!menu.contains(ev.target)) closeContextMenu(); };
    setTimeout(() => document.addEventListener('mousedown', handler), 0);
    ctxMenuCleanup = () => document.removeEventListener('mousedown', handler);
  });

  initSidebarResize();
  setupFadeScrollbar(document.getElementById('sidebar-tree'), { vertical: true });
  setupFadeScrollbar(tabsScrollEl, { vertical: false });

  // Ctrl+scroll font zoom
  document.addEventListener('wheel', e => {
    if (!(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1 : -1;
    const next = Math.max(8, Math.min(40, appSettings.fontSize + delta));
    appSettings.fontSize = next;
    setFontSize(next);
    saveSettings();
    tabs.forEach(t => t.editor?.refresh());
  }, { passive: false });

  // Drag files from OS onto the editor
  editorContainer.addEventListener('dragover', e => {
    if (draggingTabId || draggingFilePath) return;
    if (!e.dataTransfer.types.includes('Files')) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    editorContainer.classList.add('drag-file-over');
  });
  editorContainer.addEventListener('dragleave', e => {
    if (!editorContainer.contains(e.relatedTarget)) editorContainer.classList.remove('drag-file-over');
  });
  editorContainer.addEventListener('drop', async e => {
    editorContainer.classList.remove('drag-file-over');
    if (draggingTabId || draggingFilePath) return;
    if (!e.dataTransfer.files.length) return;
    e.preventDefault();
    for (const file of e.dataTransfer.files) {
      const filePath = file.path;
      if (!filePath) continue;
      try {
        const content = await window.api.readFile(filePath);
        openFileInTab(filePath, content);
      } catch {}
    }
  });

  // Window controls
  const btnMax = document.getElementById('btn-maximize');
  document.getElementById('btn-minimize').addEventListener('click', () => window.api.minimizeWindow());
  btnMax.addEventListener('click', () => window.api.maximizeWindow());
  document.getElementById('btn-close').addEventListener('click', () => handleAction('quit'));

  // Double-click empty drag area = maximize/restore
  document.getElementById('menu-bar').addEventListener('dblclick', (e) => {
    if (!e.target.closest('.menu-item, #window-controls')) window.api.maximizeWindow();
  });

  window.api.onMaximizeChange((isMax) => {
    btnMax.innerHTML  = isMax ? RESTORE_ICON : MAXIMIZE_ICON;
    btnMax.title      = isMax ? 'Restore' : 'Maximize';
  });

  replaceRow.style.display = 'none';
}

init();
