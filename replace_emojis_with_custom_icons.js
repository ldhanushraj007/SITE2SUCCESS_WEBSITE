const fs = require('fs');
const path = require('path');

// ══════════════════════════════════════════════════════════════════
// 🎨 REUSABLE HIGH-END SVG VECTOR ICONS (BRAND STYLED)
// ══════════════════════════════════════════════════════════════════
const ICONS = {
  grow: '<svg class="s2s-icon s2s-icon-grow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"></circle></svg>',
  test: '<svg class="s2s-icon s2s-icon-test" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>',
  build: '<svg class="s2s-icon s2s-icon-build" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  target: '<svg class="s2s-icon s2s-icon-target" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  search: '<svg class="s2s-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  flask: '<svg class="s2s-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4.69 18.5a2 2 0 0 0 1.71 3h11.2a2 2 0 0 0 1.71-3L14 9.31V2"></path><line x1="8.5" y1="2" x2="15.5" y2="2"></line><line x1="14" y1="9" x2="10" y2="9"></line></svg>',
  sheet: '<svg class="s2s-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>',
  gift: '<svg class="s2s-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>',
  star: '<svg class="s2s-icon" width="14" height="14" viewBox="0 0 24 24" fill="#FFA337" stroke="#FFA337" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
};

// ══════════════════════════════════════════════════════════════════
// 1. UPDATE generate-services.js
// ══════════════════════════════════════════════════════════════════
const genServicesPath = path.join(__dirname, 'website', 'website', 'pages', 'generate-services.js');
let genContent = fs.readFileSync(genServicesPath, 'utf8');

// Replace promise emoji
genContent = genContent.replace(
  /\${s\.promise \? `<div class="sd-promise">🎯 <strong>Promise:<\/strong> \${s\.promise}<\/div>` : ''}/g,
  `\${s.promise ? \`<div class="sd-promise"><svg class="s2s-icon s2s-icon-target" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px;color:var(--coral);"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg><strong>Promise:</strong> \${s.promise}</div>\` : ''}`
);

// Replace gift emoji in leadMagnetHtml
genContent = genContent.replace(
  /🎁 Free Diagnostic Available/g,
  `<svg class="s2s-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:4px;"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>Free Diagnostic Available`
);

fs.writeFileSync(genServicesPath, genContent, 'utf8');
console.log('✓ Updated generate-services.js template with custom SVG icons');

// ══════════════════════════════════════════════════════════════════
// 2. UPDATE services.html
// ══════════════════════════════════════════════════════════════════
const servicesPath = path.join(__dirname, 'website', 'website', 'pages', 'services.html');
let servicesHtml = fs.readFileSync(servicesPath, 'utf8');

// Ensure icon CSS is in services.html
const iconCss = `
        /* Custom S2S Vector Icon System */
        .s2s-icon {
            display: inline-block;
            vertical-align: -2px;
            flex-shrink: 0;
            transition: transform 0.25s ease, color 0.25s ease;
        }
        .s2s-icon-grow { color: #FF6B4A; }
        .s2s-icon-test { color: #9333EA; }
        .s2s-icon-build { color: #0EA5E9; }
        .s2s-icon-target { color: var(--coral, #FF6B4A); margin-right: 0.35rem; }
        .pillar-btn .s2s-icon { margin-right: 0.4rem; }
        .pillar-btn:hover .s2s-icon { transform: scale(1.15); }
        .pillar-btn.active .s2s-icon { color: #ffffff !important; }
`;

if (!servicesHtml.includes('/* Custom S2S Vector Icon System */')) {
  servicesHtml = servicesHtml.replace('/* ===== 6 STRATEGIC FLAGSHIP SERVICES', iconCss + '\n        /* ===== 6 STRATEGIC FLAGSHIP SERVICES');
}

// Replace button emojis in filter bar
servicesHtml = servicesHtml.replace(
  '<button class="pillar-btn" data-filter="grow">🚀 Grow (1)</button>',
  `<button class="pillar-btn" data-filter="grow">${ICONS.grow}<span>Grow (1)</span></button>`
);
servicesHtml = servicesHtml.replace(
  '<button class="pillar-btn" data-filter="test">🛡️ Test (2)</button>',
  `<button class="pillar-btn" data-filter="test">${ICONS.test}<span>Test (2)</span></button>`
);
servicesHtml = servicesHtml.replace(
  '<button class="pillar-btn" data-filter="build">⚙️ Build (3)</button>',
  `<button class="pillar-btn" data-filter="build">${ICONS.build}<span>Build (3)</span></button>`
);

// Replace card pillar badge emojis
servicesHtml = servicesHtml.replace(
  /<span class="flagship-pillar-badge grow">🚀 Grow · Search &amp; AI Visibility<\/span>/g,
  `<span class="flagship-pillar-badge grow">${ICONS.grow} Grow · Search &amp; AI Visibility</span>`
);
servicesHtml = servicesHtml.replace(
  /<span class="flagship-pillar-badge test">🛡️ Test · AI Agent Risk Mitigation<\/span>/g,
  `<span class="flagship-pillar-badge test">${ICONS.test} Test · AI Agent Risk Mitigation</span>`
);
servicesHtml = servicesHtml.replace(
  /<span class="flagship-pillar-badge test">🛡️ Test · Dedicated Software QA<\/span>/g,
  `<span class="flagship-pillar-badge test">${ICONS.test} Test · Dedicated Software QA</span>`
);
servicesHtml = servicesHtml.replace(
  /<span class="flagship-pillar-badge build">⚙️ Build · Custom Software &amp; DB<\/span>/g,
  `<span class="flagship-pillar-badge build">${ICONS.build} Build · Custom Software &amp; DB</span>`
);
servicesHtml = servicesHtml.replace(
  /<span class="flagship-pillar-badge build">⚙️ Build · Intelligent Pipelines<\/span>/g,
  `<span class="flagship-pillar-badge build">${ICONS.build} Build · Intelligent Pipelines</span>`
);
servicesHtml = servicesHtml.replace(
  /<span class="flagship-pillar-badge build">⚙️ Build · Dedicated Engineering Squad<\/span>/g,
  `<span class="flagship-pillar-badge build">${ICONS.build} Build · Dedicated Engineering Squad</span>`
);

// Replace promise emojis in flagship cards
servicesHtml = servicesHtml.replace(
  /<div class="flagship-promise">\s*🎯\s*"([^"]+)"\s*<\/div>/g,
  `<div class="flagship-promise">${ICONS.target} <span>"$1"</span></div>`
);

// Replace diagnostic badges
servicesHtml = servicesHtml.replace(
  /<span class="diag-badge">🔍 Free Tool<\/span>/g,
  `<span class="diag-badge">${ICONS.search} Free Tool</span>`
);
servicesHtml = servicesHtml.replace(
  /<span class="diag-badge">🧪 Free Stress Test<\/span>/g,
  `<span class="diag-badge">${ICONS.flask} Free Stress Test</span>`
);
servicesHtml = servicesHtml.replace(
  /<span class="diag-badge">📊 Free Blueprint<\/span>/g,
  `<span class="diag-badge">${ICONS.sheet} Free Blueprint</span>`
);

// Replace any remaining ⭐ in comparison matrix with elegant star SVG
servicesHtml = servicesHtml.replace(
  /⭐ MVP Sprint/g,
  `${ICONS.star} MVP Sprint`
);

fs.writeFileSync(servicesPath, servicesHtml, 'utf8');
console.log('✓ Updated services.html with custom SVG icons (zero emojis)');

// ══════════════════════════════════════════════════════════════════
// 3. UPDATE home.html
// ══════════════════════════════════════════════════════════════════
const homePath = path.join(__dirname, 'website', 'website', 'pages', 'home.html');
let homeHtml = fs.readFileSync(homePath, 'utf8');

// Ensure icon CSS is in home.html
if (!homeHtml.includes('.s2s-icon {')) {
  homeHtml = homeHtml.replace('/* ═══ 6 FLAGSHIPS GRID ON HOME ═══ */', iconCss + '\n  /* ═══ 6 FLAGSHIPS GRID ON HOME ═══ */');
}

// Replace pillar tags in home offer cards
homeHtml = homeHtml.replace(
  /<span class="offer-pillar-tag grow">🚀 Grow · Search &amp; AI<\/span>/g,
  `<span class="offer-pillar-tag grow">${ICONS.grow} Grow · Search &amp; AI</span>`
);
homeHtml = homeHtml.replace(
  /<span class="offer-pillar-tag test">🛡️ Test · Risk Mitigation<\/span>/g,
  `<span class="offer-pillar-tag test">${ICONS.test} Test · Risk Mitigation</span>`
);
homeHtml = homeHtml.replace(
  /<span class="offer-pillar-tag test">🛡️ Test · Dedicated QA<\/span>/g,
  `<span class="offer-pillar-tag test">${ICONS.test} Test · Dedicated QA</span>`
);
homeHtml = homeHtml.replace(
  /<span class="offer-pillar-tag build">⚙️ Build · Core Systems<\/span>/g,
  `<span class="offer-pillar-tag build">${ICONS.build} Build · Core Systems</span>`
);
homeHtml = homeHtml.replace(
  /<span class="offer-pillar-tag build">⚙️ Build · Automation<\/span>/g,
  `<span class="offer-pillar-tag build">${ICONS.build} Build · Automation</span>`
);
homeHtml = homeHtml.replace(
  /<span class="offer-pillar-tag build">⚙️ Build · Full Tech Team<\/span>/g,
  `<span class="offer-pillar-tag build">${ICONS.build} Build · Full Tech Team</span>`
);

// Replace promise text with SVG target
homeHtml = homeHtml.replace(
  /<div class="offer-promise-text">"([^"]+)"<\/div>/g,
  `<div class="offer-promise-text">${ICONS.target} <span>"$1"</span></div>`
);

// Replace diagnostic banner emoji
homeHtml = homeHtml.replace(
  /🎁 Free Diagnostic Tools Available/g,
  `${ICONS.gift} Free Diagnostic Tools Available`
);

fs.writeFileSync(homePath, homeHtml, 'utf8');
console.log('✓ Updated home.html with custom SVG icons (zero emojis)');
