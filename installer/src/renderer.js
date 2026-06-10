'use strict';

// ── State ──────────────────────────────────────────────────────────
let mode = 'quick'; // 'quick' | 'manual'
let installPath = '';
let defaultUserPath = '';
let defaultAllPath  = '';
let version = '1.0.0';
let installedExePath = '';

const MANUAL_STEPS = ['scope', 'location', 'options', 'review'];
let stepIdx = 0; // index into MANUAL_STEPS during manual install

// ── DOM helpers ────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const screen = id => document.getElementById('screen-' + id);

function showScreen(id, direction = 'forward') {
  document.querySelectorAll('.screen').forEach(s => {
    if (s.classList.contains('active')) {
      s.classList.remove('active');
      s.classList.add('exit');
      setTimeout(() => s.classList.remove('exit'), 200);
    }
  });
  const next = screen(id);
  next.style.transform = direction === 'forward' ? 'translateX(20px)' : 'translateX(-20px)';
  requestAnimationFrame(() => { next.classList.add('active'); });
}

function updateSidebarSteps(activeStep) {
  document.querySelectorAll('.step').forEach(el => {
    const s = el.dataset.step;
    const ai = MANUAL_STEPS.indexOf(activeStep);
    const si = MANUAL_STEPS.indexOf(s);
    el.classList.toggle('active', s === activeStep);
    el.classList.toggle('done', si < ai);
  });
}

function setBottomBar({ back = true, cancelLabel = 'Cancel', nextLabel = 'Next', nextDisabled = false } = {}) {
  $('btn-back').style.display = back ? '' : 'none';
  $('btn-cancel').textContent = cancelLabel;
  $('btn-next').textContent = nextLabel;
  $('btn-next').disabled = nextDisabled;
}

// ── Init ───────────────────────────────────────────────────────────
window.setup.getInfo().then(info => {
  version        = info.version;
  defaultUserPath = info.defaultUserPath;
  defaultAllPath  = info.defaultAllPath;
  installPath    = defaultUserPath;

  $('w-version').textContent = 'v' + version;
  $('sidebar-ver').textContent = 'v' + version;
  $('scope-user-path').textContent = defaultUserPath;
  $('path-input').value = installPath;
  $('rev-version').textContent = 'v' + version;
});

window.setup.onProgress(({ step, percent }) => {
  $('prog-step').textContent = step;
  $('prog-fill').style.width = percent + '%';
  $('prog-pct').textContent = percent + '%';
});

// ── Titlebar ───────────────────────────────────────────────────────
$('btn-min').onclick   = () => window.setup.minimize();
$('btn-close').onclick = () => window.setup.close();

// ── Welcome screen ─────────────────────────────────────────────────
setBottomBar({ back: false, cancelLabel: 'Cancel', nextLabel: 'Next', nextDisabled: true });
$('btn-next').style.display = 'none';
$('btn-cancel').onclick = () => window.setup.close();
$('btn-back').style.display = 'none';

$('btn-quick').onclick = () => {
  mode = 'quick';
  startInstall();
};

$('btn-manual').onclick = () => {
  mode = 'manual';
  stepIdx = 0;
  $('sidebar').classList.add('visible');
  gotoStep(0, 'forward');
};

// ── Manual step navigation ─────────────────────────────────────────
function gotoStep(idx, direction = 'forward') {
  stepIdx = idx;
  const step = MANUAL_STEPS[idx];
  showScreen(step, direction);
  updateSidebarSteps(step);

  $('btn-back').style.display = '';
  $('btn-next').style.display = '';
  $('btn-cancel').style.display = '';
  $('btn-next').disabled = false;

  if (step === 'review') {
    populateReview();
    $('btn-next').textContent = 'Install';
    $('btn-next').onclick = () => startInstall();
  } else {
    $('btn-next').textContent = 'Next';
    $('btn-next').onclick = () => gotoStep(stepIdx + 1, 'forward');
  }

  $('btn-back').onclick = () => {
    if (stepIdx === 0) {
      $('sidebar').classList.remove('visible');
      showScreen('welcome', 'back');
      setBottomBar({ back: false, nextDisabled: true });
      $('btn-next').style.display = 'none';
      $('btn-cancel').textContent = 'Cancel';
      $('btn-cancel').onclick = () => window.setup.close();
    } else {
      gotoStep(stepIdx - 1, 'back');
    }
  };
}

// Scope change updates default path
document.querySelectorAll('input[name="scope"]').forEach(r => {
  r.addEventListener('change', () => {
    const isAll = r.value === 'all' && r.checked;
    installPath = isAll ? defaultAllPath : defaultUserPath;
    $('path-input').value = installPath;
  });
});

// Browse button
$('btn-browse').onclick = async () => {
  const chosen = await window.setup.chooseDir($('path-input').value);
  if (chosen) { installPath = chosen; $('path-input').value = chosen; }
};
$('path-input').oninput = () => { installPath = $('path-input').value; };

function populateReview() {
  const scope = document.querySelector('input[name="scope"]:checked')?.value;
  const desktop   = $('opt-desktop').checked;
  const startMenu = $('opt-startmenu').checked;
  $('rev-path').textContent = installPath;
  $('rev-scope').textContent = scope === 'all' ? 'All users' : 'Current user';
  const parts = [desktop && 'Desktop', startMenu && 'Start Menu'].filter(Boolean);
  $('rev-shortcuts').textContent = parts.length ? parts.join(', ') : 'None';
}

// ── Install ────────────────────────────────────────────────────────
async function startInstall() {
  const desktop   = mode === 'quick' ? true  : $('opt-desktop').checked;
  const startMenu = mode === 'quick' ? true  : $('opt-startmenu').checked;
  const launchAfter = mode === 'quick' ? false : $('opt-launch').checked;
  const path      = mode === 'quick' ? defaultUserPath : installPath;

  $('sidebar').classList.remove('visible');
  showScreen('installing', 'forward');
  $('btn-back').style.display  = 'none';
  $('btn-next').style.display  = 'none';
  $('btn-cancel').style.display = 'none';

  const result = await window.setup.install({ installPath: path, desktop, startMenu });

  if (!result.success) {
    $('prog-step').textContent = 'Error: ' + result.error;
    $('prog-pct').textContent = '';
    $('btn-cancel').style.display = '';
    $('btn-cancel').textContent = 'Close';
    $('btn-cancel').onclick = () => window.setup.close();
    return;
  }

  installedExePath = result.exePath;
  showScreen('done', 'forward');
  $('done-path').textContent = path;

  if (launchAfter) {
    window.setup.launchApp(installedExePath);
    return;
  }

  $('btn-next').style.display  = '';
  $('btn-cancel').style.display = '';
  $('btn-next').textContent = 'Launch Caret';
  $('btn-next').onclick = () => window.setup.launchApp(installedExePath);
  $('btn-cancel').textContent = 'Close';
  $('btn-cancel').onclick = () => window.setup.close();
  $('btn-back').style.display = 'none';
}
