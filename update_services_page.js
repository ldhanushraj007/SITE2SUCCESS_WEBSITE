const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'website', 'website', 'pages', 'services.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. New CSS for Flagships, Lead Magnets, and Synergy Matrix
const newCss = `
        /* ===== 6 STRATEGIC FLAGSHIP SERVICES (PRIMARY PRIORITY) ===== */
        .flagships-section {
            padding: 6.5rem 1.5rem 5rem;
            background: #ffffff;
            position: relative;
            scroll-margin-top: 80px;
        }

        .flagships-container {
            max-width: 1240px;
            margin: 0 auto;
        }

        .pillar-filter-bar {
            display: flex;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 3.5rem;
            flex-wrap: wrap;
        }

        .pillar-btn {
            padding: 0.65rem 1.4rem;
            border-radius: 100px;
            border: 1px solid rgba(0, 0, 0, 0.08);
            background: #ffffff;
            color: var(--gray-500);
            font-size: 0.92rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.25s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .pillar-btn:hover {
            border-color: var(--coral);
            color: var(--coral);
            transform: translateY(-1px);
        }

        .pillar-btn.active {
            background: var(--navy-dark);
            color: #ffffff;
            border-color: var(--navy-dark);
            box-shadow: 0 4px 15px rgba(26, 26, 46, 0.2);
        }

        .flagships-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        @media (max-width: 1024px) {
            .flagships-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .flagships-grid {
                grid-template-columns: 1fr;
            }
        }

        .flagship-card {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.07);
            border-radius: 24px;
            padding: 2.25rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .flagship-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
            border-color: rgba(255, 107, 74, 0.35);
        }

        .flagship-pillar-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.35rem 0.85rem;
            border-radius: 100px;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 1.15rem;
        }

        .flagship-pillar-badge.grow {
            background: rgba(255, 107, 74, 0.12);
            color: #FF6B4A;
        }

        .flagship-pillar-badge.test {
            background: rgba(147, 51, 234, 0.12);
            color: #9333EA;
        }

        .flagship-pillar-badge.build {
            background: rgba(14, 165, 233, 0.12);
            color: #0EA5E9;
        }

        .flagship-card h3 {
            font-size: 1.45rem;
            font-weight: 800;
            color: var(--navy-dark);
            margin-bottom: 0.65rem;
            line-height: 1.25;
            letter-spacing: -0.015em;
        }

        .flagship-promise {
            font-size: 0.88rem;
            font-weight: 700;
            color: var(--coral);
            margin-bottom: 0.85rem;
            line-height: 1.45;
            display: flex;
            align-items: flex-start;
            gap: 0.4rem;
            background: rgba(255, 107, 74, 0.05);
            padding: 0.55rem 0.85rem;
            border-radius: 10px;
            border-left: 3px solid var(--coral);
        }

        .flagship-desc {
            font-size: 0.93rem;
            color: var(--gray-500);
            line-height: 1.65;
            margin-bottom: 1.25rem;
        }

        .flagship-features {
            list-style: none;
            padding: 0;
            margin: 0 0 1.5rem 0;
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
        }

        .flagship-features li {
            font-size: 0.86rem;
            color: var(--gray-500);
            display: flex;
            align-items: flex-start;
            gap: 0.55rem;
            line-height: 1.5;
        }

        .flagship-features li svg {
            color: var(--coral);
            flex-shrink: 0;
            margin-top: 2px;
        }

        .flagship-meta-row {
            display: flex;
            justify-content: space-between;
            padding-top: 1.15rem;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            margin-bottom: 1.15rem;
            font-size: 0.82rem;
        }

        .flagship-meta-item .meta-label {
            color: var(--gray-400);
            display: block;
            margin-bottom: 0.2rem;
            font-size: 0.7rem;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.04em;
        }

        .flagship-meta-item .meta-val {
            color: var(--navy-dark);
            font-weight: 700;
        }

        .flagship-cta-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.85rem 1.25rem;
            border-radius: 12px;
            background: #F8FAFC;
            color: var(--navy-dark);
            font-weight: 700;
            font-size: 0.9rem;
            text-decoration: none;
            border: 1px solid rgba(0, 0, 0, 0.06);
            transition: all 0.25s ease;
        }

        .flagship-card:hover .flagship-cta-btn {
            background: var(--gradient-primary);
            color: #ffffff;
            border-color: transparent;
            box-shadow: 0 6px 18px rgba(255, 107, 74, 0.3);
        }

        /* ===== LEAD MAGNETS & DIAGNOSTICS ===== */
        .diagnostics-section {
            padding: 5.5rem 1.5rem;
            background: linear-gradient(180deg, #F8FAFC 0%, #ffffff 100%);
            border-top: 1px solid rgba(0, 0, 0, 0.04);
            border-bottom: 1px solid rgba(0, 0, 0, 0.04);
            scroll-margin-top: 80px;
        }

        .diagnostics-container {
            max-width: 1240px;
            margin: 0 auto;
        }

        .diagnostics-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        @media (max-width: 900px) {
            .diagnostics-grid {
                grid-template-columns: 1fr;
            }
        }

        .diag-card {
            background: #ffffff;
            border: 1.5px dashed rgba(255, 107, 74, 0.35);
            border-radius: 22px;
            padding: 2.25rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
            transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .diag-card:hover {
            transform: translateY(-3px);
            border-color: var(--coral);
            box-shadow: 0 10px 30px rgba(255, 107, 74, 0.08);
        }

        .diag-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--coral);
            background: rgba(255, 107, 74, 0.08);
            padding: 0.3rem 0.75rem;
            border-radius: 100px;
            margin-bottom: 1rem;
        }

        .diag-card h3 {
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--navy-dark);
            margin-bottom: 0.65rem;
        }

        .diag-card p {
            font-size: 0.92rem;
            color: var(--gray-500);
            line-height: 1.65;
            margin-bottom: 1.5rem;
        }

        .diag-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--coral);
            text-decoration: none;
            transition: gap 0.2s;
        }

        .diag-btn:hover {
            gap: 0.75rem;
        }

        /* ===== HOW SERVICES WORK TOGETHER MATRIX ===== */
        .synergy-section {
            padding: 5.5rem 1.5rem;
            background: #ffffff;
            scroll-margin-top: 80px;
        }

        .synergy-container {
            max-width: 1100px;
            margin: 0 auto;
        }

        .synergy-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.07);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .synergy-table th {
            background: #F8FAFC;
            padding: 1.25rem 1.75rem;
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--navy-dark);
            border-bottom: 1px solid rgba(0, 0, 0, 0.07);
            text-align: left;
        }

        .synergy-table td {
            padding: 1.15rem 1.75rem;
            font-size: 0.93rem;
            color: var(--gray-500);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .synergy-table tr:last-child td {
            border-bottom: none;
        }

        .synergy-table tr:hover td {
            background: rgba(255, 107, 74, 0.02);
        }

        .synergy-start {
            font-weight: 700;
            color: var(--navy-dark);
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .synergy-arrow {
            color: var(--coral);
            font-weight: 800;
        }

        .synergy-next {
            font-weight: 600;
            color: #1E293B;
        }

        @media (max-width: 768px) {
            .synergy-table th, .synergy-table td {
                padding: 0.9rem 1rem;
                font-size: 0.85rem;
            }
        }
`;

// Insert CSS before </style>
html = html.replace('</style>', newCss + '\n    </style>');

// 2. Update Hero Section
const oldHeroRegex = /<section class="services-hero">[\s\S]*?<\/section>/;
const newHero = `<!-- Services Hero Section -->
    <section class="services-hero">
        <div class="services-hero-container">
            <div class="services-hero-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Strategic Agency Services · Site2Success Flagships</span>
            </div>
            <h1 class="services-hero-title">
                We Build, We Test, and We Make Your Business <span>Visible to Technology</span>
            </h1>
            <p class="services-hero-description">
                Six core software services built on painful problems, measurable business outcomes, and mandatory senior engineering review. Explore our primary offerings across Grow, Test, and Build.
            </p>
            <div class="services-hero-stats">
                <div class="hero-stat-card">
                    <div class="hero-stat-number">6 Flagships</div>
                    <div class="hero-stat-label">Grow, Test &amp; Build</div>
                </div>
                <div class="hero-stat-card">
                    <div class="hero-stat-number">100% QA</div>
                    <div class="hero-stat-label">Mandatory Senior Audit</div>
                </div>
                <div class="hero-stat-card">
                    <div class="hero-stat-number">Full IP</div>
                    <div class="hero-stat-label">100% Client Ownership</div>
                </div>
                <div class="hero-stat-card">
                    <div class="hero-stat-number">Zero Lock-In</div>
                    <div class="hero-stat-label">Flexible Retainers &amp; Sprints</div>
                </div>
            </div>
        </div>
    </section>`;

html = html.replace(oldHeroRegex, newHero);

// 3. New Flagships Section, Diagnostics, and Synergy Matrix
const newSections = `
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- SECTION: 6 CORE FLAGSHIP SERVICES (PRIMARY PRIORITY)              -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="flagships-section" id="flagships">
        <div class="flagships-container">
            <div class="section-header-center">
                <span class="section-label">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    Primary Studio Offerings
                </span>
                <h2>Six High-Impact Flagship Services</h2>
                <p>Designed around real client pain points, clear recurring business value, and disciplined engineering execution. Filter by strategic objective below.</p>
            </div>

            <!-- Pillar Filter Bar -->
            <div class="pillar-filter-bar">
                <button class="pillar-btn active" data-filter="all">All Services (6)</button>
                <button class="pillar-btn" data-filter="grow">🚀 Grow (1)</button>
                <button class="pillar-btn" data-filter="test">🛡️ Test (2)</button>
                <button class="pillar-btn" data-filter="build">⚙️ Build (3)</button>
            </div>

            <!-- 6 Flagship Cards Grid -->
            <div class="flagships-grid" id="flagshipsGrid">
                
                <!-- 1. AI Visibility -->
                <div class="flagship-card" data-category="grow">
                    <div class="flagship-top">
                        <span class="flagship-pillar-badge grow">🚀 Grow · Search &amp; AI Visibility</span>
                        <h3>AI Visibility (SEO + AEO + GEO)</h3>
                        <div class="flagship-promise">
                            🎯 "Get found on Google and recommended by ChatGPT, Perplexity and Gemini"
                        </div>
                        <p class="flagship-desc">
                            People now discover businesses in three ways: Google ranking, voice/snippet answers, and generative recommendations. We optimize your website, schemas, and llms.txt so search and AI models quote you.
                        </p>
                        <ul class="flagship-features">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Multi-Engine Discovery (Google, Perplexity, ChatGPT, Gemini)</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Structured JSON-LD Schema &amp; semantic llms.txt</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Q&amp;A page formatting &amp; monthly prompt benchmark tracking</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flagship-meta-row">
                            <div class="flagship-meta-item">
                                <span class="meta-label">Model</span>
                                <span class="meta-val">Setup + Monthly Retainer</span>
                            </div>
                            <div class="flagship-meta-item" style="text-align:right;">
                                <span class="meta-label">Lead Magnet</span>
                                <span class="meta-val" style="color:var(--coral);">Free AI Visibility Score</span>
                            </div>
                        </div>
                        <a href="services/ai-visibility-seo-aeo-geo.html" class="flagship-cta-btn">
                            Explore Full Scope &rarr;
                        </a>
                    </div>
                </div>

                <!-- 2. AI Agent Reliability Audit -->
                <div class="flagship-card" data-category="test">
                    <div class="flagship-top">
                        <span class="flagship-pillar-badge test">🛡️ Test · AI Agent Risk Mitigation</span>
                        <h3>AI Agent Reliability Audit</h3>
                        <div class="flagship-promise">
                            🎯 "Prove your AI bot gives correct, safe answers"
                        </div>
                        <p class="flagship-desc">
                            Almost no company tests their chatbots systematically. Bots invent prices, leak prompts, and make rogue promises. Backed by our research on hallucination spread in multi-agent systems, we stress-test and harden your bot.
                        </p>
                        <ul class="flagship-features">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>200+ multi-scenario adversarial conversational stress tests</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Hallucination rate, prompt injection &amp; data leakage defense</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Client-owned test suite &amp; verified Reliability Scorecard</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flagship-meta-row">
                            <div class="flagship-meta-item">
                                <span class="meta-label">Model</span>
                                <span class="meta-val">One-time Audit + Monitoring</span>
                            </div>
                            <div class="flagship-meta-item" style="text-align:right;">
                                <span class="meta-label">Lead Magnet</span>
                                <span class="meta-val" style="color:var(--coral);">Free Bot Reliability Check</span>
                            </div>
                        </div>
                        <a href="services/ai-agent-reliability-audit.html" class="flagship-cta-btn">
                            Explore Full Scope &rarr;
                        </a>
                    </div>
                </div>

                <!-- 3. QA-as-a-Service -->
                <div class="flagship-card" data-category="test">
                    <div class="flagship-top">
                        <span class="flagship-pillar-badge test">🛡️ Test · Dedicated Software QA</span>
                        <h3>QA-as-a-Service</h3>
                        <div class="flagship-promise">
                            🎯 "Stop bugs reaching your customers"
                        </div>
                        <p class="flagship-desc">
                            Startups and agencies ship fast without dedicated testers, causing customer-facing bugs and churn. We provide an agile outsourced QA squad: cross-device exploratory testing, reproducible tickets, and automated regression suites.
                        </p>
                        <ul class="flagship-features">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Cross-browser &amp; multi-device tests (iOS, Android, Desktop)</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Core flows tested: signup, login, search, checkout, payments</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Jira/GitHub video bug reports &amp; automated release suites</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flagship-meta-row">
                            <div class="flagship-meta-item">
                                <span class="meta-label">Model</span>
                                <span class="meta-val">Monthly Retainer or Pre-Launch</span>
                            </div>
                            <div class="flagship-meta-item" style="text-align:right;">
                                <span class="meta-label">Lead Magnet</span>
                                <span class="meta-val" style="color:var(--coral);">Free UI &amp; Flow Audit</span>
                            </div>
                        </div>
                        <a href="services/qa-as-a-service.html" class="flagship-cta-btn">
                            Explore Full Scope &rarr;
                        </a>
                    </div>
                </div>

                <!-- 4. Spreadsheet-to-Software Migration -->
                <div class="flagship-card" data-category="build">
                    <div class="flagship-top">
                        <span class="flagship-pillar-badge build">⚙️ Build · Custom Software &amp; DB</span>
                        <h3>Spreadsheet-to-Software Migration</h3>
                        <div class="flagship-promise">
                            🎯 "Replace fragile Excel and WhatsApp workflows with real software"
                        </div>
                        <p class="flagship-desc">
                            Growing businesses run on Excel, Google Sheets, and WhatsApp groups until formulas break, data duplicates, and one person leaving cripples operations. We replace messy sheets with secure, custom web software.
                        </p>
                        <ul class="flagship-features">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Role-based access (Owner, Manager, Staff, Viewer)</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Validated input forms &amp; multi-step approval workflows</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>100% historical data cleaning &amp; total reconciliation guarantee</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flagship-meta-row">
                            <div class="flagship-meta-item">
                                <span class="meta-label">Model</span>
                                <span class="meta-val">Fixed-Price Project + Retainer</span>
                            </div>
                            <div class="flagship-meta-item" style="text-align:right;">
                                <span class="meta-label">Lead Magnet</span>
                                <span class="meta-val" style="color:var(--coral);">Free Spreadsheet Review</span>
                            </div>
                        </div>
                        <a href="services/spreadsheet-to-software.html" class="flagship-cta-btn">
                            Explore Full Scope &rarr;
                        </a>
                    </div>
                </div>

                <!-- 5. Document Intelligence -->
                <div class="flagship-card" data-category="build">
                    <div class="flagship-top">
                        <span class="flagship-pillar-badge build">⚙️ Build · Intelligent Pipelines</span>
                        <h3>Document Intelligence</h3>
                        <div class="flagship-promise">
                            🎯 "Stop typing data from invoices and forms by hand"
                        </div>
                        <p class="flagship-desc">
                            Eliminate manual paperwork entry. We build custom document pipelines that ingest GST bills, invoices, purchase orders, and forms via email or WhatsApp, run OCR and AI extraction, and sync directly to Tally or database.
                        </p>
                        <ul class="flagship-features">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Intake via WhatsApp, email forwarding, or web upload</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>GSTIN, invoice #, dates, line items &amp; math validation rules</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Split review screen &amp; export to Tally, Excel or SQL</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flagship-meta-row">
                            <div class="flagship-meta-item">
                                <span class="meta-label">Model</span>
                                <span class="meta-val">Project + Per-Doc Retainer</span>
                            </div>
                            <div class="flagship-meta-item" style="text-align:right;">
                                <span class="meta-label">Lead Magnet</span>
                                <span class="meta-val" style="color:var(--coral);">Free 5-Doc Test Extraction</span>
                            </div>
                        </div>
                        <a href="services/document-intelligence.html" class="flagship-cta-btn">
                            Explore Full Scope &rarr;
                        </a>
                    </div>
                </div>

                <!-- 6. Fractional Tech Team -->
                <div class="flagship-card" data-category="build">
                    <div class="flagship-top">
                        <span class="flagship-pillar-badge build">⚙️ Build · Dedicated Engineering Squad</span>
                        <h3>Fractional Tech Team</h3>
                        <div class="flagship-promise">
                            🎯 "A full tech department on a monthly retainer"
                        </div>
                        <p class="flagship-desc">
                            A complete outsourced technology department: trained university builder squad led by a senior engineering reviewer, working on your product roadmap. Full-stack development, DevOps, and weekly sprints for a fraction of one hire.
                        </p>
                        <ul class="flagship-features">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Dedicated squad with named senior engineering reviewer</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Weekly sprints, demo calls &amp; direct Slack/Discord access</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>100% code ownership, zero lock-in (Lite, Standard, Growth)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flagship-meta-row">
                            <div class="flagship-meta-item">
                                <span class="meta-label">Model</span>
                                <span class="meta-val">Monthly Retainer by Squad</span>
                            </div>
                            <div class="flagship-meta-item" style="text-align:right;">
                                <span class="meta-label">Lead Magnet</span>
                                <span class="meta-val" style="color:var(--coral);">Free Architecture Audit</span>
                            </div>
                        </div>
                        <a href="services/fractional-tech-team.html" class="flagship-cta-btn">
                            Explore Full Scope &rarr;
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- SECTION: FREE DIAGNOSTIC TOOLS & LEAD MAGNETS                     -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="diagnostics-section" id="diagnostics">
        <div class="diagnostics-container">
            <div class="section-header-center">
                <span class="section-label">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                    Zero-Risk Entry
                </span>
                <h2>Free Diagnostic Tools &amp; Audits</h2>
                <p>We prove our value on your actual data and systems before you commit to any engagement.</p>
            </div>

            <div class="diagnostics-grid">
                <!-- Diagnostic 1 -->
                <div class="diag-card">
                    <div>
                        <span class="diag-badge">🔍 Free Tool</span>
                        <h3>AI Visibility Score Check</h3>
                        <p>Share your website and core business offering. We test how visible you are across Google, ChatGPT, Perplexity, and Gemini, delivering a 1-page gap scorecard.</p>
                    </div>
                    <a href="contact.html?audit=ai-visibility" class="diag-btn">
                        Request Free Visibility Score &rarr;
                    </a>
                </div>

                <!-- Diagnostic 2 -->
                <div class="diag-card">
                    <div>
                        <span class="diag-badge">🧪 Free Stress Test</span>
                        <h3>Bot Reliability Check</h3>
                        <p>Running an existing customer chatbot on WhatsApp or website? We run 20 to 30 tricky adversarial questions against it and deliver a summary of what broke.</p>
                    </div>
                    <a href="contact.html?audit=bot-reliability" class="diag-btn">
                        Request Bot Reliability Check &rarr;
                    </a>
                </div>

                <!-- Diagnostic 3 -->
                <div class="diag-card">
                    <div>
                        <span class="diag-badge">📊 Free Blueprint</span>
                        <h3>"Messiest Spreadsheet" Audit</h3>
                        <p>Send us your most complex, fragile Excel or Google Sheet. We will analyze the formulas, map the workflows, and tell you what it takes to turn it into custom software.</p>
                    </div>
                    <a href="contact.html?audit=spreadsheet" class="diag-btn">
                        Send Your Spreadsheet &rarr;
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════════ -->
    <!-- SECTION: HOW OUR SERVICES WORK TOGETHER (THE INTEGRATED ENGINE)   -->
    <!-- ═════════════════════════════════════════════════════════════════ -->
    <section class="synergy-section" id="synergy">
        <div class="synergy-container">
            <div class="section-header-center">
                <span class="section-label">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    The Integrated Engine
                </span>
                <h2>How Our Services Work Together</h2>
                <p>Each service is an entry door into a resilient technology infrastructure. Here is how our clients compound their tech advantages.</p>
            </div>

            <table class="synergy-table">
                <thead>
                    <tr>
                        <th style="width: 45%;">If you start with...</th>
                        <th style="width: 55%;">You naturally unlock...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="synergy-start">
                                <span class="synergy-arrow">&rarr;</span>
                                A new website from Site2Success
                            </div>
                        </td>
                        <td>
                            <div class="synergy-next">
                                <strong>AI Visibility (monthly)</strong> — so customers find you on Google, ChatGPT &amp; Perplexity
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="synergy-start">
                                <span class="synergy-arrow">&rarr;</span>
                                An AI chatbot (ours or third-party)
                            </div>
                        </td>
                        <td>
                            <div class="synergy-next">
                                <strong>AI Agent Reliability Audit</strong>, followed by continuous automated monitoring
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="synergy-start">
                                <span class="synergy-arrow">&rarr;</span>
                                QA-as-a-Service testing squad
                            </div>
                        </td>
                        <td>
                            <div class="synergy-next">
                                <strong>Fractional Tech Team</strong> to quickly patch and resolve every defect QA discovers
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="synergy-start">
                                <span class="synergy-arrow">&rarr;</span>
                                Spreadsheet-to-Software Migration
                            </div>
                        </td>
                        <td>
                            <div class="synergy-next">
                                <strong>Document Intelligence</strong> for automated bill intake &amp; maintenance retainers
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="synergy-start">
                                <span class="synergy-arrow">&rarr;</span>
                                Document Intelligence pipeline
                            </div>
                        </td>
                        <td>
                            <div class="synergy-next">
                                <strong>Spreadsheet-to-Software Migration</strong> to manage and act on extracted data cleanly
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="synergy-start">
                                <span class="synergy-arrow">&rarr;</span>
                                A Fractional Tech Team
                            </div>
                        </td>
                        <td>
                            <div class="synergy-next">
                                <strong>AI Visibility &amp; QA-as-a-Service</strong> for the software and products being engineered
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
`;

// Insert the new sections right before the Packages Ladder section
const ladderStart = '<section class="ladder-section" id="packages">';
html = html.replace(ladderStart, newSections + '\n    ' + ladderStart);

// 4. Inject Interactive Filtering JavaScript before </body>
const filterJs = `
    <!-- Flagship Pillar Interactive Filter Script -->
    <script>
    (function() {
        var buttons = document.querySelectorAll('.pillar-btn');
        var cards = document.querySelectorAll('.flagship-card');
        if (!buttons.length || !cards.length) return;

        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                buttons.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');

                var filter = btn.getAttribute('data-filter');
                cards.forEach(function(card) {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    })();
    </script>
`;

html = html.replace('</body>', filterJs + '\n</body>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated services.html with 6 flagship services, diagnostics, and synergy matrix!');
