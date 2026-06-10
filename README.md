# Caret

**[kalakaritzu.github.io/caret](https://kalakaritzu.github.io/caret)**

A fast, lightweight code editor for Windows built with Electron, CodeMirror 5, and xterm.js.

## Features

- **Tabbed editing** — open multiple files, drag tabs onto each other to create a split view
- **Split view** — edit two files side by side with a resizable divider
- **Integrated terminal** — PowerShell tab with full xterm.js rendering
- **File explorer** — sidebar with create, rename, delete, and drag-to-open
- **Syntax highlighting** — 30+ languages via CodeMirror 5
- **Find & replace** — regex, case-sensitive, whole-word with live match count
- **Autocomplete** — keyword hints for all supported languages
- **Code folding** — fold braces, indentation, comments, and markdown sections
- **Zen mode** — F11 to hide everything but the editor
- **Session restore** — tabs, split state, and sidebar reopen on next launch
- **Word wrap** — toggle per session, applies to both editors and terminal
- **Smooth caret** — animated cursor in both editors and terminal

## Getting Started

**Prerequisites:** Node.js 18+, npm

```bash
git clone https://github.com/kalakaritzu/caret.git
cd caret
npm install
npm start
```

## Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| New tab | Ctrl+T |
| New terminal | Ctrl+Shift+T |
| Close tab | Ctrl+W |
| Save | Ctrl+S |
| Save As | Ctrl+Shift+S |
| Find | Ctrl+F |
| Find & Replace | Ctrl+H |
| Toggle word wrap | Alt+Z |
| Toggle sidebar | Ctrl+B |
| Cycle tabs | Ctrl+Tab / Ctrl+Shift+Tab |
| Fold / unfold | Ctrl+Shift+[ / ] |
| Zen mode | F11 |

## Tech Stack

- [Electron 28](https://www.electronjs.org/)
- [CodeMirror 5](https://codemirror.net/5/)
- [xterm.js v6](https://xtermjs.org/)
- [node-pty](https://github.com/microsoft/node-pty)

## License

MIT
