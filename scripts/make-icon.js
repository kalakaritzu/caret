'use strict';
const { Resvg } = require('@resvg/resvg-js');
const toIco    = require('to-ico');
const fs       = require('fs');
const path     = require('path');

const SIZES = [16, 24, 32, 48, 64, 128, 256];

// Document drawn on a 256×256 canvas.
// Body:  rounded rect (all corners except top-right which is the fold cut)
// Fold:  lighter triangle in the top-right cut corner
// Lines: rounded-end rects representing text
const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <!-- Square document body: 16px margins all sides, fold cut at TR -->
  <path d="
    M 44 16
    L 196 16
    L 240 60
    L 240 212 Q 240 240 212 240
    L 44 240  Q 16 240  16 212
    L 16 44   Q 16 16   44 16
    Z
  " fill="#5c5c5c"/>

  <!-- Fold flap (lighter) -->
  <path d="M 196 16 L 240 16 L 240 60 Z" fill="#8c8c8c"/>

  <!-- Text lines with rounded ends -->
  <rect x="40" y="86"  width="162" height="16" rx="7" fill="#eeeeee"/>
  <rect x="40" y="114" width="162" height="16" rx="7" fill="#eeeeee"/>
  <rect x="40" y="142" width="162" height="16" rx="7" fill="#eeeeee"/>
  <rect x="40" y="170" width="118" height="16" rx="7" fill="#eeeeee"/>
</svg>`;

function svgToPng(size) {
  const resvg = new Resvg(SVG, { fitTo: { mode: 'width', value: size } });
  return Buffer.from(resvg.render().asPng());
}

async function main() {
  const outDir = path.join(__dirname, '..', 'assets');
  fs.mkdirSync(outDir, { recursive: true });

  console.log('Rendering icon sizes...');
  const pngs = SIZES.map(size => {
    const buf = svgToPng(size);
    console.log(`  ${size}x${size}`);
    return buf;
  });

  const ico = await toIco(pngs);
  const dest = path.join(outDir, 'icon.ico');
  fs.writeFileSync(dest, ico);
  console.log(`\nSaved: ${dest}`);
}

main().catch(e => { console.error(e); process.exit(1); });
