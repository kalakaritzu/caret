# Caret

**[kalakaritzu.github.io/caret](https://kalakaritzu.github.io/caret)**

Code editor for Windows. Tabs, split view, built-in terminal. No bloat.

## What it does

- Tabbed editing, drag one tab onto another to split
- PowerShell terminal as a tab
- File explorer sidebar (open folder, create/rename/delete files, drag to open)
- Syntax highlighting for 30+ languages
- Find & replace with regex support
- Autocomplete, code folding, active line highlight
- Zen mode (F11)
- Session restore on relaunch
- Word wrap toggle (Alt+Z), works in terminal too

## Running it

Node 18+ required.

```bash
git clone https://github.com/kalakaritzu/caret.git
cd caret
npm install
npm start
```

## Shortcuts

| | |
|---|---|
| New tab | Ctrl+T |
| New terminal | Ctrl+Shift+T |
| Close tab | Ctrl+W |
| Save / Save As | Ctrl+S / Ctrl+Shift+S |
| Find / Replace | Ctrl+F / Ctrl+H |
| Word wrap | Alt+Z |
| Sidebar | Ctrl+B |
| Cycle tabs | Ctrl+Tab |
| Fold / unfold | Ctrl+Shift+[ / ] |
| Zen mode | F11 |

## Stack

Electron 28, CodeMirror 5, xterm.js v6, node-pty.

## License

MIT
