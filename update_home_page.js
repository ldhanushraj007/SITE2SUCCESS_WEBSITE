const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'website', 'website', 'pages', 'home.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Hero Title & Description
const oldTitleSearch = `<h1 class="hero-title">
        Have an idea?<br>
        <span class="studio-gradient-word">We turn it into working software.</span>
      </h1>

      <p class="hero-desc">
        Site2Success combines AI-native velocity with disciplined engineering to build real web applications, MVPs, and automated systems in 14 days.
      </p>`;

const newTitle = `<h1 class="hero-title">
        We Build. We Test.<br>
        <span class="studio-gradient-word">We make your business visible to technology.</span>
      </h1>

      <p class="hero-desc">
        Site2Success delivers high-impact software, rigorous AI reliability audits, and generative engine visibility (SEO + AEO + GEO) powered by university builder squads and senior engineering review.
      </p>`;

if (html.includes('Have an idea?<br>')) {
  html = html.replace(oldTitleSearch, newTitle);
}

// 2. Update CSS for 6-card grid in home.html if needed
const newHomeCss = `
  /* ═══ 6 FLAGSHIPS GRID ON HOME ═══ */
  .offer-grid-6 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    .offer-grid-6 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    .offer-grid-6 {
      grid-template-columns: 1fr;
    }
  }
  .offer-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .offer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
    border-color: rgba(255, 110, 46, 0.35);
  }
  .offer-pillar-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.3rem 0.75rem;
    border-radius: 100px;
    margin-bottom: 0.85rem;
  }
  .offer-pillar-tag.grow { background: rgba(255,107,74,0.12); color: #FF6B4A; }
  .offer-pillar-tag.test { background: rgba(147,51,234,0.12); color: #9333EA; }
  .offer-pillar-tag.build { background: rgba(14,165,233,0.12); color: #0EA5E9; }
  .offer-promise-text {
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--brand-coral, #FF6E2E);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }
  .offer-cta-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(0,0,0,0.05);
    font-size: 0.88rem;
    font-weight: 700;
    color: #FF6E2E;
  }
`;

html = html.replace('</style>', newHomeCss + '\n  </style>');

// 3. Update `#what-we-build` section
const whatWeBuildRegex = /<!-- ═══ WHAT WE SHIP: 4 CLEAN FLAGSHIPS ═══ -->[\s\S]*?<\/section>/;

const newWhatWeBuild = `<!-- ═══ WHAT WE SHIP: 6 CORE FLAGSHIP SERVICES (PRIMARY PRIORITY) ═══ -->
  <section class="section" id="what-we-build">
    <div class="section-head">
      <span class="section-tag">
        <span class="c-emoji c-emoji-rocket">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="url(#flame-grad)" stroke="#FF6E2E" stroke-width="1.5"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="url(#flame-grad)" stroke="#FF3B56" stroke-width="1.5"/><circle cx="15.5" cy="8.5" r="1.5" fill="#FFFFFF"/></svg>
        </span>
        Primary Agency Solutions
      </span>
      <h2 class="section-title">Our 6 Core Flagship Services</h2>
      <p class="section-sub">We build technology, we test technology, and we make your business visible to technology.</p>
    </div>

    <div class="offer-grid-6">
      <!-- 1. AI Visibility -->
      <a href="services/ai-visibility-seo-aeo-geo.html" class="offer-card">
        <div>
          <div class="offer-top-strip">
            <span class="offer-pillar-tag grow">🚀 Grow · Search &amp; AI</span>
            <span class="offer-speed-pill">
              <span class="c-emoji c-emoji-bolt"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#flame-grad)" stroke="#FF8A5B" stroke-width="1.2"/></svg></span>
              Retainer
            </span>
          </div>
          <h3>AI Visibility (SEO + AEO + GEO)</h3>
          <div class="offer-promise-text">"Get found on Google and recommended by ChatGPT, Perplexity and Gemini"</div>
          <p>Optimize your website, structured schema, and llms.txt so search engines and generative AI tools actively quote and cite your brand.</p>
        </div>
        <div>
          <div class="offer-deliverables">
            <span class="offer-chip">Google &amp; ChatGPT</span>
            <span class="offer-chip">Schema &amp; llms.txt</span>
            <span class="offer-chip">Monthly Score</span>
          </div>
          <div class="offer-cta-link">View Full Scope &rarr;</div>
        </div>
      </a>

      <!-- 2. AI Agent Reliability Audit -->
      <a href="services/ai-agent-reliability-audit.html" class="offer-card">
        <div>
          <div class="offer-top-strip">
            <span class="offer-pillar-tag test">🛡️ Test · Risk Mitigation</span>
            <span class="offer-speed-pill">
              <span class="c-emoji c-emoji-bolt"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#flame-grad)" stroke="#FF8A5B" stroke-width="1.2"/></svg></span>
              2–3 Weeks
            </span>
          </div>
          <h3>AI Agent Reliability Audit</h3>
          <div class="offer-promise-text">"Prove your AI bot gives correct, safe answers"</div>
          <p>Adversarial stress-testing across 200+ conversations to eliminate hallucinations, prompt injection leaks, and rogue pricing promises.</p>
        </div>
        <div>
          <div class="offer-deliverables">
            <span class="offer-chip">200+ Test Suite</span>
            <span class="offer-chip">Anti-Hallucination</span>
            <span class="offer-chip">Hardened Guardrails</span>
          </div>
          <div class="offer-cta-link">View Full Scope &rarr;</div>
        </div>
      </a>

      <!-- 3. QA-as-a-Service -->
      <a href="services/qa-as-a-service.html" class="offer-card">
        <div>
          <div class="offer-top-strip">
            <span class="offer-pillar-tag test">🛡️ Test · Dedicated QA</span>
            <span class="offer-speed-pill">
              <span class="c-emoji c-emoji-bolt"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#flame-grad)" stroke="#FF8A5B" stroke-width="1.2"/></svg></span>
              Monthly
            </span>
          </div>
          <h3>QA-as-a-Service</h3>
          <div class="offer-promise-text">"Stop bugs reaching your customers"</div>
          <p>Outsource your testing to an agile QA squad: cross-device exploratory testing, reproducible Jira/GitHub video tickets, and automated regression suites.</p>
        </div>
        <div>
          <div class="offer-deliverables">
            <span class="offer-chip">Multi-Device Audits</span>
            <span class="offer-chip">Checkout &amp; Auth</span>
            <span class="offer-chip">Automated Suites</span>
          </div>
          <div class="offer-cta-link">View Full Scope &rarr;</div>
        </div>
      </a>

      <!-- 4. Spreadsheet-to-Software Migration -->
      <a href="services/spreadsheet-to-software.html" class="offer-card">
        <div>
          <div class="offer-top-strip">
            <span class="offer-pillar-tag build">⚙️ Build · Core Systems</span>
            <span class="offer-speed-pill">
              <span class="c-emoji c-emoji-bolt"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#flame-grad)" stroke="#FF8A5B" stroke-width="1.2"/></svg></span>
              4–6 Weeks
            </span>
          </div>
          <h3>Spreadsheet-to-Software Migration</h3>
          <div class="offer-promise-text">"Replace fragile Excel and WhatsApp workflows with real software"</div>
          <p>Replace broken Excel files, formula errors, and chaotic WhatsApp groups with custom, mobile-friendly web software: logins, roles, forms, approvals, and real databases.</p>
        </div>
        <div>
          <div class="offer-deliverables">
            <span class="offer-chip">PostgreSQL &bull; Auth</span>
            <span class="offer-chip">Approval Chains</span>
            <span class="offer-chip">100% Data Migration</span>
          </div>
          <div class="offer-cta-link">View Full Scope &rarr;</div>
        </div>
      </a>

      <!-- 5. Document Intelligence -->
      <a href="services/document-intelligence.html" class="offer-card">
        <div>
          <div class="offer-top-strip">
            <span class="offer-pillar-tag build">⚙️ Build · Automation</span>
            <span class="offer-speed-pill">
              <span class="c-emoji c-emoji-bolt"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#flame-grad)" stroke="#FF8A5B" stroke-width="1.2"/></svg></span>
              3–4 Weeks
            </span>
          </div>
          <h3>Document Intelligence</h3>
          <div class="offer-promise-text">"Stop typing data from invoices and forms by hand"</div>
          <p>Automate data extraction from GST invoices, bills, and KYC forms via WhatsApp or email directly into Tally, ERPs, or SQL databases with human review consoles.</p>
        </div>
        <div>
          <div class="offer-deliverables">
            <span class="offer-chip">GST &amp; OCR Vision</span>
            <span class="offer-chip">Split Review Screen</span>
            <span class="offer-chip">Tally &amp; SQL Sync</span>
          </div>
          <div class="offer-cta-link">View Full Scope &rarr;</div>
        </div>
      </a>

      <!-- 6. Fractional Tech Team -->
      <a href="services/fractional-tech-team.html" class="offer-card">
        <div>
          <div class="offer-top-strip">
            <span class="offer-pillar-tag build">⚙️ Build · Full Tech Team</span>
            <span class="offer-speed-pill">
              <span class="c-emoji c-emoji-bolt"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#flame-grad)" stroke="#FF8A5B" stroke-width="1.2"/></svg></span>
              Monthly
            </span>
          </div>
          <h3>Fractional Tech Team</h3>
          <div class="offer-promise-text">"A full tech department on a monthly retainer"</div>
          <p>A trained student software builder squad guided by senior engineering reviewers, working on your product roadmap for a fraction of the cost of one full-time hire.</p>
        </div>
        <div>
          <div class="offer-deliverables">
            <span class="offer-chip">Dedicated Squad</span>
            <span class="offer-chip">Senior Code Audit</span>
            <span class="offer-chip">Full IP Transfer</span>
          </div>
          <div class="offer-cta-link">View Full Scope &rarr;</div>
        </div>
      </a>
    </div>

    <!-- Home Lead Magnets Banner -->
    <div style="max-width:1200px;margin:3rem auto 0;background:linear-gradient(135deg,rgba(255,110,46,0.06),rgba(255,59,86,0.04));border:1.5px dashed rgba(255,110,46,0.3);border-radius:20px;padding:2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <span style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#FF6E2E;margin-bottom:0.4rem;">
          🎁 Free Diagnostic Tools Available
        </span>
        <h4 style="font-size:1.25rem;font-weight:800;color:var(--brand-dark,#0B101D);margin:0 0 0.4rem 0;">Test Our Quality Before Committing</h4>
        <p style="font-size:0.92rem;color:#64748B;margin:0;max-width:650px;">Free AI Visibility Score check, 25-question Bot Reliability stress test, or our "Messiest Spreadsheet" architecture review.</p>
      </div>
      <a href="services.html#diagnostics" class="btn-primary" style="padding:0.75rem 1.5rem;font-size:0.9rem;white-space:nowrap;">
        Explore Free Diagnostics &rarr;
      </a>
    </div>
  </section>`;

html = html.replace(whatWeBuildRegex, newWhatWeBuild);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated home.html with the 6 flagship services and lead magnets banner!');
