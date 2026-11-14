const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'services');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const services = [
  // ═════════════════════════════════════════════════════════════════
  // 🌟 THE 6 STRATEGIC FLAGSHIP SERVICES (NOVEMBER 2026 ROADMAP)
  // ═════════════════════════════════════════════════════════════════
  {
    id: 'ai-visibility-seo-aeo-geo',
    title: 'AI Visibility (SEO + AEO + GEO)',
    pillar: 'Grow',
    cat: 'grow',
    catLabel: 'Grow · AI Visibility & Search Engine Optimization',
    promise: 'Get found on Google and recommended by ChatGPT, Perplexity and Gemini',
    revenueModel: 'Setup + Monthly Retainer',
    subtitle: 'Comprehensive optimization making your business effortlessly discovered, understood, and recommended by search engines and generative AI tools.',
    overview: 'People now find businesses in three distinct ways: ranking in standard Google searches (SEO), being served as direct answers in Google AI summaries and voice queries (AEO), and being actively cited and recommended when customers query ChatGPT, Perplexity, and Gemini (GEO). Most businesses have not adapted to generative engines — early movers capture the market. Site2Success audits your search and AI footprint, implements semantic schema markup and llms.txt, structures your answers in quotation-ready formats, and tracks citations month-over-month.',
    features: [
      'Multi-engine discovery: Google, ChatGPT, Perplexity, Gemini, and Google AI Overviews',
      'Full technical crawlability, speed, and Core Web Vitals remediation',
      'Rich JSON-LD structured data schema (LocalBusiness, Organization, FAQPage, Services)',
      'llms.txt file deployment formatted specifically for LLM scraper comprehension',
      'Question-and-Answer page restructuring designed for direct AI citations',
      'Entity consistency synchronization across directories, social channels, and Google Business Profile',
      'Monthly AI Visibility Score benchmark reports tracking prompt rankings and snippet wins'
    ],
    phases: [
      { name: 'Phase A: Full Visibility Audit (Week 1)', desc: 'Benchmark Google rankings, test 20+ queries across ChatGPT, Perplexity, and Gemini, run crawlability and Core Web Vitals audits, and calculate your initial AI Visibility Score.' },
      { name: 'Phase B: Technical & Schema Fixes (Weeks 2–3)', desc: 'Deploy JSON-LD schemas, fix canonicals, robots.txt, and sitemaps, publish semantic llms.txt, and optimize Google Business Profile.' },
      { name: 'Phase C: Content for Answers (Weeks 3–6)', desc: 'Restructure high-intent pages into concise Q&A blocks, publish customer FAQ matrices, and establish authoritative directory citations.' },
      { name: 'Phase D: Monthly Tracking & Iteration (Ongoing)', desc: 'Re-test key prompts across AI models every month, monitor snippet wins, publish new optimized content, and deliver action reports.' }
    ],
    leadMagnet: 'Free AI Visibility Score: We test how visible your brand is across Google, ChatGPT, and Perplexity with a free 1-page gap analysis.',
    bestFor: ['D2C Brands', 'Clinics & Healthcare', 'Coaching & EdTech', 'Local Service Businesses', 'B2B Firms & Consultants'],
    delivery: '2–4 Weeks Setup + Monthly Retainer',
    type: 'Flagship · Growth'
  },
  {
    id: 'ai-agent-reliability-audit',
    title: 'AI Agent Reliability Audit',
    pillar: 'Test',
    cat: 'test',
    catLabel: 'Test · AI Agent Verification & Risk Mitigation',
    promise: 'Prove your AI bot gives correct, safe answers',
    revenueModel: 'One-time Audit + Optional Monitoring',
    subtitle: 'Stress-test and harden your customer-facing AI chatbots and voice agents against hallucinations, prompt leaks, rogue discounts, and jailbreaks.',
    overview: 'Many companies have rushed to deploy chatbots on WhatsApp, web portals, or internal tools — yet almost none test them systematically. Unmonitored bots invent fictitious prices, make unauthorized refund promises, hallucinate policies, leak proprietary prompts, or succumb to prompt injection attacks. Backed by our published research on hallucination propagation in multi-agent pipelines, Site2Success runs hundreds of adversarial test conversations against your bot, measures exact failure metrics, installs ironclad guardrails, and provides ongoing regression monitoring.',
    features: [
      '200+ multi-scenario adversarial test suite custom-built for your specific business domain',
      'Hallucination and fabricated pricing stress-testing with strict refusal boundary verification',
      'Prompt injection, jailbreak defense, and system-prompt extraction vulnerability checks',
      'Tone, brand persona, sentiment, and emotional edge-case safety analysis',
      'Multilingual evaluation in Hindi, Kannada, Hinglish, and regional vernacular queries',
      'Multi-turn consistency auditing to ensure bot never contradicts itself across prolonged chats',
      'Comprehensive Reliability Scorecard with before-and-after proof and root-cause fixes'
    ],
    phases: [
      { name: 'Phase A: Understand The System (Week 1)', desc: 'Review prompts, tools, APIs, and knowledge base. Define strict organizational definitions of "correct", "prohibited", and "unsafe" responses.' },
      { name: 'Phase B: Build Test Suite (Weeks 1–2)', desc: 'Generate 200–500 adversarial conversational test cases covering accuracy, injection, hallucinations, multi-turn consistency, and regional vernacular.' },
      { name: 'Phase C: Automated Run & Manual Audit (Week 2)', desc: 'Execute the full test suite automatically, compute failure and hallucination percentages, and manually verify sample edge cases.' },
      { name: 'Phase D: Root-Cause Fixes & Re-Testing (Week 3)', desc: 'Deliver the Reliability Score report, rewrite vulnerable prompts, add guardrails and refusal rules, clean knowledge bases, and re-run suite to prove improvements.' },
      { name: 'Phase E: Continuous Monitoring (Optional)', desc: 'Re-run test suites on every bot prompt update, sample real conversations, and send instant alerts upon anomalous bot behavior.' }
    ],
    leadMagnet: 'Free Bot Reliability Check: We run 20–30 tricky adversarial questions against your public AI agent and send a concise summary of what broke.',
    bestFor: ['Customer Support Bots', 'WhatsApp Sales Agents', 'Fintech & Banking', 'Clinics & Telehealth', 'E-Commerce Brands'],
    delivery: '2–3 Weeks Sprint + Optional Monitoring',
    type: 'Flagship · Risk Mitigation'
  },
  {
    id: 'document-intelligence',
    title: 'Document Intelligence',
    pillar: 'Build',
    cat: 'build',
    catLabel: 'Build · Intelligent Data Extraction & Pipelines',
    promise: 'Stop typing data from invoices and forms by hand',
    revenueModel: 'Project Setup + Per-Document / Volume Retainer',
    subtitle: 'Automate manual data entry from GST invoices, purchase orders, delivery challans, KYC forms, and contracts directly into Tally, ERPs, or SQL databases.',
    overview: 'Businesses spend hundreds of hours having administrative staff manually read invoices, tax filings, bills of lading, and paper forms, and key the numbers into accounting or ERP software. This process is painfully slow, expensive, and riddled with human error. Site2Success builds bespoke intelligent document extraction pipelines: ingest documents via email, WhatsApp, or cloud upload, extract structured data with advanced OCR and vision models, validate GST and math totals automatically, and provide an intuitive split-screen human review console for rapid verification before syncing directly into your database.',
    features: [
      'Multi-source ingestion via WhatsApp, email inbox forwarding, or web upload portal',
      'High-precision OCR and AI extraction for printed, scanned, and handwritten documents',
      'Deep Indian business document support: GST invoices, bills of entry, challans, KYC',
      'Mathematical validation rules (tax rate verification, subtotal + GST summation checks)',
      'Side-by-side split screen review interface highlighting low-confidence fields for instant fix',
      'Direct integration with Tally, Google Sheets, PostgreSQL, MySQL, and custom ERPs',
      'Duplicate detection engine and immutable audit trail tracking who approved each entry'
    ],
    phases: [
      { name: 'Phase A: Document Discovery (Week 1)', desc: 'Collect 50–100 sample documents, classify layouts, formats, and scan quality, map exact target fields, and establish accuracy criteria.' },
      { name: 'Phase B: Extraction Pipeline Build (Weeks 2–3)', desc: 'Build ingestion webhooks, OCR engines, vision-LLM extraction prompts, confidence scoring, and automated math validation rules.' },
      { name: 'Phase C: Human Review Console (Week 3)', desc: 'Deploy an intuitive split-view web console allowing staff to verify low-confidence extractions in one click, feeding continuous training.' },
      { name: 'Phase D: ERP & Database Integration (Weeks 3–4)', desc: 'Connect verified extractions directly to Tally, accounting software, or databases with duplicate suppression and audit logs.' },
      { name: 'Phase E: Benchmarking & Team Handover (Week 4)', desc: 'Evaluate accuracy against unseen document batches, train operational staff, and transfer complete operational documentation.' }
    ],
    leadMagnet: 'Free Document Extraction Pilot: Send us 5 sample invoices or forms; we will extract and structure the data into Excel/JSON completely free to show accuracy.',
    bestFor: ['CA & Accounting Firms', 'Logistics & Fleets', 'Wholesale Distributors', 'Diagnostic Labs & Clinics', 'Manufacturing Units'],
    delivery: '3–4 Weeks Implementation',
    type: 'Flagship · Operational Automation'
  },
  {
    id: 'spreadsheet-to-software',
    title: 'Spreadsheet-to-Software Migration',
    pillar: 'Build',
    cat: 'build',
    catLabel: 'Build · Custom Software & Database Engineering',
    promise: 'Replace fragile Excel and WhatsApp workflows with real software',
    revenueModel: 'Fixed-Price Project + Maintenance Retainer',
    subtitle: 'Transform messy Google Sheets, fragile Excel files, and chaotic WhatsApp approval groups into secure, custom web software with roles, forms, and real databases.',
    overview: 'Growing businesses run on Excel, Google Sheets, Tally exports, and WhatsApp groups. While acceptable early on, teams quickly outgrow them: files get duplicated, complex formulas break silently, nobody knows which version is current, and a single departing employee can paralyze business operations. Site2Success analyzes how your team actually works in your spreadsheets and replaces them with custom, mobile-friendly web software: secure role-based logins, validated forms, automated multi-step approvals, executive dashboards, and guaranteed 100% data reconciliation from your legacy sheets.',
    features: [
      'Role-based permissions (Super Admin, Branch Manager, Staff, Viewer)',
      'Strict input validation forms that prevent invalid, duplicate, or corrupted entries',
      'Multi-level approval workflows with automated WhatsApp and email notifications',
      'Real-time operational dashboards and summary reports replacing sheet calculations',
      '100% historical data cleaning, migration, and mathematical reconciliation guarantee',
      'One-click Excel and PDF export so your team retains immediate data portability',
      'Full source code and database ownership transferred directly to your organization'
    ],
    phases: [
      { name: 'Phase A: Workflow & Formula Discovery (Week 1)', desc: 'Collect current spreadsheets, shadow daily staff operations, map approvals and reporting bottlenecks, and document formula business logic.' },
      { name: 'Phase B: Schema & UI Design (Weeks 1–2)', desc: 'Architect relational PostgreSQL database, design intuitive role-based web interfaces, and lock fixed-scope specifications.' },
      { name: 'Phase C: Core Software Build (Weeks 2–5)', desc: 'Develop authenticated web app, input validation, notification webhooks, automated approval queues, and executive analytics dashboards.' },
      { name: 'Phase D: Data Cleaning & Migration (Weeks 4–5)', desc: 'Scrub legacy spreadsheet records, import to PostgreSQL database, and reconcile totals to prove zero data loss.' },
      { name: 'Phase E: Parallel Run & Production Cutover (Weeks 5–6)', desc: 'Conduct staff training, run old spreadsheets and new software side-by-side, cut over smoothly, and initiate warranty support.' }
    ],
    leadMagnet: 'Free Spreadsheet Review: "Send us your messiest spreadsheet and we will outline exactly how to turn it into secure custom software."',
    bestFor: ['Manufacturers & Traders', 'Distributors & Warehouses', 'Schools & Coaching Centers', 'Real Estate & Builders', 'Clinics & Hospitals'],
    delivery: '4–6 Weeks End-to-End Migration',
    type: 'Flagship · Core Systems'
  },
  {
    id: 'qa-as-a-service',
    title: 'QA-as-a-Service',
    pillar: 'Test',
    cat: 'test',
    catLabel: 'Test · Dedicated Quality Assurance Retainer',
    promise: 'Stop bugs reaching your customers',
    revenueModel: 'Monthly Retainer (or Fixed Pre-Launch Sprint)',
    subtitle: 'Outsource your software testing to an agile, dedicated QA squad: exploratory testing, multi-device audits, and automated regression test suites.',
    overview: 'Quality assurance means catching software defects and usability flaws before your customers encounter them. Early-stage startups, digital agencies, and lean SaaS teams ship code at high speed with nobody dedicated solely to testing. This leads to broken checkouts, failed onboarding flows, and customer churn. Site2Success provides an outsourced testing team on a flexible monthly retainer. We test your app across real devices and screen sizes, log reproducible bug reports with screen recordings directly into your Jira/GitHub, and build automated regression suites that re-run after every release.',
    features: [
      'Multi-device and cross-browser testing across modern iOS, Android, macOS, and Windows',
      'Critical user journey verification (signup, login, search, checkout, payment processing)',
      'Structured bug logging directly into Jira, GitHub Issues, or Trello with repro steps and video',
      'Automated end-to-end regression suites running prior to every production release',
      'Core Web Vitals, page load velocity, and basic vulnerability security auditing',
      'Exploratory edge-case testing designed to uncover unexpected user behaviors',
      'Weekly release readiness summaries and monthly bug burn-down reports'
    ],
    phases: [
      { name: 'Phase A: Product Onboarding (Week 1)', desc: 'Understand product architecture, map core user journeys, set up staging environments, and define severity thresholds.' },
      { name: 'Phase B: Manual & Exploratory Testing (Ongoing)', desc: 'Execute structured test cases against every new build across physical devices, browsers, and viewport resolutions.' },
      { name: 'Phase C: Bug Reporting & Verification (Ongoing)', desc: 'File comprehensive bug tickets with steps, expected vs. actual results, and screen recordings; re-verify fixed issues.' },
      { name: 'Phase D: Regression Test Automation (Month 2 Onward)', desc: 'Build Playwright/Cypress automated regression suites to safeguard legacy features against breaking changes.' },
      { name: 'Phase E: Performance & Security Audits', desc: 'Perform regular Lighthouse audits, responsiveness reviews, and standard vulnerability checks.' },
      { name: 'Phase F: Monthly Quality Reporting', desc: 'Deliver executive metrics on bug resolution rates, test coverage, and release stability.' }
    ],
    leadMagnet: 'Free Pre-Launch Test Sprint: We run a 15-point usability, responsive UI, and payment flow audit on your staging app and deliver a free bug report.',
    bestFor: ['Early-Stage Startups', 'Digital Agencies Shipping Client Work', 'E-Commerce Brands', 'SaaS Product Teams'],
    delivery: 'Monthly Retainer or 7-Day Pre-Launch Sprint',
    type: 'Flagship · Quality Assurance'
  },
  {
    id: 'fractional-tech-team',
    title: 'Fractional Tech Team',
    pillar: 'Build',
    cat: 'build',
    catLabel: 'Build · Outsourced Engineering Department',
    promise: 'A full tech department on a monthly retainer',
    revenueModel: 'Monthly Retainer by Squad Tier (Lite / Standard / Growth)',
    subtitle: 'A dedicated software engineering squad guided by senior technical leaders, executing your product roadmap for a fraction of the cost of one full-time hire.',
    overview: 'Early-stage startups and non-technical founders need talented engineers to build and scale their products, but cannot afford a $150k+ CTO or an expensive in-house engineering team. Site2Success acts as your complete outsourced tech department on a transparent monthly retainer: a trained university builder squad led by a senior engineering reviewer, tackling your roadmap in disciplined weekly sprints. From feature development to bug fixing, cloud DevOps, and API integrations — you gain elite engineering velocity with zero long-term lock-in and 100% intellectual property ownership.',
    features: [
      'Dedicated builder squad with an assigned, named senior engineering reviewer',
      'Disciplined sprint planning with weekly progress demos and shared Slack/Discord channels',
      'Full-stack web, mobile, and backend development (Next.js, Node, Python, React Native)',
      'Production DevOps: cloud hosting setup, CI/CD pipelines, automated backups, and uptime monitoring',
      'Third-party integrations: payment gateways (Stripe, Razorpay), messaging, AI APIs, CRMs',
      'Mandatory senior code review on every pull request before release to production',
      '100% client code and account ownership — no vendor lock-in, pause or scale anytime'
    ],
    phases: [
      { name: 'Phase A: Roadmap & Environment Onboarding (Week 1)', desc: 'Review existing code, infrastructure, and product roadmap with founders; configure shared Slack/Discord and issue tracker.' },
      { name: 'Phase B: Monthly Planning & Sprint Cycles', desc: 'Conduct monthly priority alignment call, break features into weekly sprints, and execute with daily updates.' },
      { name: 'Phase C: Continuous Delivery', desc: 'Build frontend, backend, APIs, database migrations, and integrations with rapid preview environments.' },
      { name: 'Phase D: Senior Quality Control Gate', desc: 'Every line of code undergoes senior engineer audit and automated testing before client signoff and merge.' },
      { name: 'Phase E: Monthly Retrospective & Scaling', desc: 'Review velocity, deployed features, capacity utilization, and adjust squad sizing for upcoming milestones.' }
    ],
    leadMagnet: 'Free 30-Minute Architecture & Codebase Review: Our technical lead reviews your current stack and provides a 1-page roadmap optimization plan.',
    bestFor: ['Seed-Stage Startups', 'Non-Technical Founders', 'SMEs with Software but No Tech Team', 'Agencies Needing Delivery Capacity'],
    delivery: 'Monthly Retainer (Lite, Standard, Growth)',
    type: 'Flagship · Complete Tech Team'
  },

  // ═════════════════════════════════════════════════════════════════
  // ⚡ SPECIALIZED STUDIO CAPABILITIES & AUTOMATIONS
  // ═════════════════════════════════════════════════════════════════
  {id:'whatsapp-ai-agent',title:'WhatsApp AI Agent',pillar:'Grow',cat:'ai',catLabel:'AI Agents & Chatbots',subtitle:'Automatically replies to customer enquiries, captures leads, and answers FAQs on your existing WhatsApp number, 24/7.',overview:'Our WhatsApp AI Agent connects to your existing business number and handles customer conversations automatically. It understands natural language, answers product questions, captures lead information, and routes complex queries to your team.',features:['24/7 automated replies on your WhatsApp Business number','Natural language understanding for customer queries','Automatic lead capture and qualification','FAQ handling with instant accurate responses','Smart escalation to human agents when needed','Multi-language support for diverse customer bases'],bestFor:['Retail & E-commerce','Clinics & Healthcare','Real Estate','Education & Coaching'],delivery:'1-2 Weeks',type:'AI Agent'},
  {id:'website-lead-capture-bot',title:'Website Lead Capture Bot',pillar:'Grow',cat:'ai',catLabel:'AI Agents & Chatbots',subtitle:'Engages website visitors instantly, qualifies them, and collects their details — no forms, no drop-offs.',overview:'Replace boring forms with an intelligent chatbot that greets visitors, asks the right questions, and captures their details conversationally. It reduces bounce rates and increases lead conversion.',features:['Instant visitor engagement on page load','Conversational lead qualification','Smart data collection without forms','Real-time lead notifications to your team','Integration with CRM and email tools','Custom branding to match your website'],bestFor:['Service Businesses','SaaS Companies','Agencies','Consultants'],delivery:'1 Week',type:'AI Bot'},
  {id:'ai-appointment-booking',title:'AI Appointment Booking Agent',pillar:'Grow',cat:'ai',catLabel:'AI Agents & Chatbots',subtitle:'Lets customers book, reschedule, and receive reminders automatically without any manual effort.',overview:'Automate your entire booking process. Customers can book appointments via WhatsApp or your website, receive confirmations and reminders, and reschedule — all handled by an AI agent that syncs with your calendar in real-time.',features:['Automated booking via WhatsApp or website','Calendar sync with Google Calendar, Calendly, etc.','Automatic confirmation and reminder messages','Easy rescheduling and cancellation handling','No-show reduction with smart reminders','Multi-staff and multi-location support'],bestFor:['Clinics & Salons','Coaching Centres','Consultants','Service Providers'],delivery:'1-2 Weeks',type:'AI Agent'},
  {id:'ai-customer-support',title:'AI Customer Support Agent',pillar:'Test',cat:'ai',catLabel:'AI Agents & Chatbots',subtitle:'Resolves your most common support questions instantly and escalates to a human only when needed.',overview:'Train an AI agent on your business knowledge base — product details, policies, troubleshooting guides — and let it handle the top 80% of support queries automatically. It escalates complex issues to your team with full context.',features:['Handles top 80% of support queries automatically','Trained on your specific business knowledge','Smart escalation with full conversation context','Available 24/7 across WhatsApp and web','Reduces support team workload significantly','Continuous learning from new interactions'],bestFor:['E-commerce','SaaS Products','Service Companies','Tech Startups'],delivery:'2 Weeks',type:'AI Agent'},
  {id:'ai-sales-qualification',title:'AI Sales Qualification Agent',pillar:'Grow',cat:'ai',catLabel:'AI Agents & Chatbots',subtitle:'Scores incoming leads and tells your sales team exactly who to prioritise and call first.',overview:'Not all leads are equal. This AI agent scores and qualifies every incoming lead based on your criteria — budget, timeline, requirements — and sends your sales team a prioritised list so they focus only on high-intent prospects.',features:['Automated lead scoring based on your criteria','Real-time qualification via chat conversations','Priority alerts for hot leads','Integration with your CRM pipeline','Custom qualification frameworks','Detailed lead insights for your sales team'],bestFor:['B2B Companies','Real Estate','Financial Services','High-Ticket Services'],delivery:'2 Weeks',type:'AI Agent'},
  {id:'internal-knowledge-bot',title:'Internal Team Knowledge Bot',pillar:'Build',cat:'ai',catLabel:'AI Agents & Chatbots',subtitle:'Lets your staff instantly query SOPs, policies, and company information instead of asking a manager.',overview:'Upload your SOPs, HR policies, product manuals, and company documents. Your team can then ask the bot any question and get instant, accurate answers — saving hours of back-and-forth with managers.',features:['Instant answers from your company knowledge base','Supports SOPs, policies, manuals, and FAQs','Searchable via WhatsApp or internal portal','Reduces dependency on managers for routine queries','Always up-to-date with document syncing','Secure access controls per department'],bestFor:['Growing Teams','HR Departments','Operations','Multi-Branch Businesses'],delivery:'2 Weeks',type:'Knowledge Bot'},
  {id:'lead-followup-automation',title:'Lead Follow-Up Automation',pillar:'Grow',cat:'auto',catLabel:'Automation & Integrations',subtitle:'Sends personalised WhatsApp or email sequences automatically the moment a new lead comes in.',overview:'Never lose a lead to slow follow-up again. The moment someone fills a form or sends an enquiry, our system triggers a personalised WhatsApp or email sequence — nurturing them until they convert or your sales team takes over.',features:['Instant follow-up within seconds of lead capture','Personalised WhatsApp and email sequences','Multi-step drip campaigns','Automatic tagging and segmentation','Follow-up reminders for your sales team','Performance tracking and analytics'],bestFor:['Real Estate','Education','Service Businesses','D2C Brands'],delivery:'1 Week',type:'Automation'},
  {id:'crm-automation',title:'CRM Automation',pillar:'Build',cat:'auto',catLabel:'Automation & Integrations',subtitle:'Auto-logs leads, updates deal stages, and alerts your sales team. Works with Notion, HubSpot, Zoho, and Google Sheets.',overview:'Stop manually entering leads into spreadsheets. Our CRM automation captures leads from all your sources, logs them automatically, updates deal stages as they progress, and sends alerts to your team.',features:['Auto-log leads from forms, WhatsApp, and ads','Deal stage tracking and updates','Team alerts and task assignments','Works with Notion, HubSpot, Zoho, Google Sheets','Custom pipeline stages for your workflow','Automated reporting and dashboards'],bestFor:['Sales Teams','Agencies','Consultants','B2B Companies'],delivery:'1-2 Weeks',type:'Automation'},
  {id:'workflow-automation',title:'Multi-Tool Workflow Automation',pillar:'Build',cat:'auto',catLabel:'Automation & Integrations',subtitle:'Connects your existing tools — forms, CRM, WhatsApp, email, calendar — into one seamless automated pipeline.',overview:'Your business probably uses 5-10 different tools that don\'t talk to each other. We connect them into one automated pipeline — so data flows seamlessly from forms to CRM, triggers WhatsApp messages, updates calendars, and sends emails.',features:['Connect forms, CRM, WhatsApp, email, and calendar','End-to-end automated data flow','Custom trigger and action rules','Error handling and retry logic','Works with Zapier, Make, and custom APIs','Scalable for complex multi-step workflows'],bestFor:['Operations Teams','Growing Startups','Agencies','Multi-Department Businesses'],delivery:'1-2 Weeks',type:'Automation'},
  {id:'invoice-payment-reminders',title:'Invoice & Payment Reminders',pillar:'Build',cat:'auto',catLabel:'Automation & Integrations',subtitle:'Automatically follows up on pending payments via WhatsApp or email, reducing delays without manual chasing.',overview:'Stop chasing payments manually. Our system automatically sends polite, professional payment reminders via WhatsApp or email at the right intervals — reducing late payments and improving your cash flow.',features:['Automated WhatsApp and email payment reminders','Customisable reminder schedules','Overdue escalation workflows','Payment confirmation tracking','Professional, branded message templates','Integration with accounting tools'],bestFor:['Freelancers','Agencies','Service Providers','B2B Companies'],delivery:'1 Week',type:'Automation'},
  {id:'business-website-chatbot',title:'Business Website + AI Chatbot',pillar:'Grow',cat:'web',catLabel:'Web & App Development',subtitle:'A professional website built with an AI chatbot embedded from day one — designed to generate leads, not just look good.',overview:'We build modern, high-performance business websites with an AI chatbot integrated from the start. Your website won\'t just look great — it will actively capture leads, answer visitor questions, and drive conversions 24/7.',features:['Modern, responsive design that looks premium','AI chatbot embedded from day one','SEO-optimised for search visibility','Fast-loading, performance-tuned pages','Mobile-first design approach','CMS integration for easy content updates'],bestFor:['Small Businesses','Startups','Consultants','Service Providers'],delivery:'2-3 Weeks',type:'Development'},
  {id:'ecommerce-store',title:'E-Commerce Store',pillar:'Build',cat:'web',catLabel:'Web & App Development',subtitle:'A complete online store with product catalogue, payment gateway, and order tracking, built for D2C brands and retailers.',overview:'Launch your online store with everything you need — product catalogue, shopping cart, secure payments, and order tracking. We build e-commerce platforms that are easy to manage and optimised for conversions.',features:['Product catalogue with categories and filters','Secure payment gateway integration','Order tracking and management dashboard','Inventory management system','Mobile-responsive shopping experience','SEO and marketing tools built-in'],bestFor:['D2C Brands','Retailers','Food & Beverage','Fashion & Lifestyle'],delivery:'3-4 Weeks',type:'Development'},
  {id:'mobile-app-development',title:'Mobile App Development',pillar:'Build',cat:'web',catLabel:'Web & App Development',subtitle:'Custom Android and iOS apps for businesses that need a customer-facing product or an internal operations tool.',overview:'We build custom mobile applications for Android and iOS — whether you need a customer-facing app to serve your users or an internal tool to streamline operations. Built for performance, usability, and scale.',features:['Native Android and iOS development','Cross-platform for cost efficiency','Push notifications and real-time updates','Offline functionality where needed','Backend API development included','App store submission and launch support'],bestFor:['Startups','Service Businesses','Enterprise Teams','Product Companies'],delivery:'4-8 Weeks',type:'Development'},
  {id:'admin-dashboard-portals',title:'Admin Dashboard & Portals',pillar:'Build',cat:'web',catLabel:'Web & App Development',subtitle:'Custom-built dashboards for managing orders, clients, bookings, or teams — designed around your exact workflow.',overview:'Off-the-shelf tools don\'t fit every business. We build custom admin dashboards and portals designed around your exact workflow — whether you need to manage orders, clients, bookings, inventory, or teams.',features:['Custom-designed for your specific workflow','Real-time data and analytics','User roles and access controls','CRUD operations for all your data','Integration with your existing tools','Mobile-responsive admin interface'],bestFor:['Operations Teams','Multi-Location Businesses','Booking Services','Logistics'],delivery:'3-4 Weeks',type:'Development'}
];

const chk = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
const chev = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;opacity:0.5"><polyline points="9 18 15 12 9 6"></polyline></svg>';

services.forEach(s => {
  const featHtml = s.features.map(f => `                <li>${chk} <span>${f}</span></li>`).join('\n');
  const tagHtml = s.bestFor.map(b => `                    <span>${b}</span>`).join('\n');
  
  let phasesHtml = '';
  if (s.phases && s.phases.length > 0) {
    phasesHtml = `
            <div class="sd-phases-section" style="margin-top:2.5rem;padding-top:2rem;border-top:1px solid rgba(0,0,0,0.06);">
                <h2 style="font-size:1.5rem;font-weight:800;color:var(--navy-dark);margin-bottom:0.75rem;">Phased Delivery Plan</h2>
                <p style="color:var(--gray-500);line-height:1.7;margin-bottom:1.5rem;">Transparent weekly execution milestones with clear deliverables and acceptance criteria.</p>
                <div class="sd-phase-list" style="display:flex;flex-direction:column;gap:1.15rem;">
                    ${s.phases.map((p, idx) => `
                    <div style="background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:14px;padding:1.25rem 1.5rem;box-shadow:0 2px 10px rgba(0,0,0,0.02);">
                        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.4rem;">
                            <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:rgba(255,107,74,0.12);color:var(--coral);font-size:0.75rem;font-weight:800;">${idx+1}</span>
                            <strong style="color:var(--navy-dark);font-size:1.02rem;">${p.name}</strong>
                        </div>
                        <p style="margin:0;color:var(--gray-500);font-size:0.92rem;line-height:1.65;padding-left:2.25rem;">${p.desc}</p>
                    </div>`).join('\n')}
                </div>
            </div>`;
  }

  let leadMagnetHtml = '';
  if (s.leadMagnet) {
    leadMagnetHtml = `
            <div class="sd-card" style="background:linear-gradient(135deg,rgba(255,107,74,0.05),rgba(255,107,74,0.01));border:1.5px dashed rgba(255,107,74,0.35);">
                <div style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.72rem;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--coral);margin-bottom:0.5rem;">
                    🎁 Free Diagnostic Available
                </div>
                <h4 style="font-size:1rem;font-weight:800;color:var(--navy-dark);margin-bottom:0.5rem;">Try Before Committing</h4>
                <p style="font-size:0.88rem;color:var(--gray-500);line-height:1.6;margin-bottom:1rem;">${s.leadMagnet}</p>
                <a href="../contact.html?leadmagnet=${s.id}" style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.85rem;font-weight:700;color:var(--coral);text-decoration:none;">Claim Free Check &rarr;</a>
            </div>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${s.title} | Site2Success — We Build, Test &amp; Make You Visible</title>
    <meta name="description" content="${s.subtitle} Site2Success combines university talent with senior engineering review.">
    <meta name="keywords" content="${s.title}, Site2Success, AI engineering, Bengaluru, startup, ${s.catLabel}">
    <link rel="canonical" href="https://site2success.in/pages/services/${s.id}.html">
    <meta name="robots" content="index, follow">
    <meta name="google-site-verification" content="r2KQbMoNOZAo78tLcECG6MVv-J5ouSXwvsv0NKNYGb4">
    <meta name="google-site-verification" content="hUuqrSM6DO2-IPt-vKFLi6_DoScVl3sxZFX5Q328wno">
    <meta name="google-site-verification" content="erB9FH8CbM0SuXc1aqRoS94toNrKQ-dM144Mg-gx-9o">
    
    <!-- Geographic & Local Meta Tags (GEO / AEO) -->
    <meta name="geo.region" content="IN-KA">
    <meta name="geo.placename" content="Bengaluru">
    <meta name="geo.position" content="12.9716;77.5946">
    <meta name="ICBM" content="12.9716, 77.5946">
    
    <!-- Favicon & Search Engine Icons -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_IN">
    <meta property="og:site_name" content="Site2Success">
    <meta property="og:url" content="https://site2success.in/pages/services/${s.id}.html">
    <meta property="og:title" content="${s.title} | Site2Success">
    <meta property="og:description" content="${s.subtitle}">
    <meta property="og:image" content="https://site2success.in/assets/images/logo.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://site2success.in/pages/services/${s.id}.html">
    <meta property="twitter:title" content="${s.title} | Site2Success">
    <meta property="twitter:description" content="${s.subtitle}">
    <meta property="twitter:image" content="https://site2success.in/assets/images/logo.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/main.css">
    <link rel="stylesheet" href="../../assets/css/pages.css">
    <style>
        .sd-hero{padding:8.5rem 2rem 3rem;max-width:1200px;margin:0 auto}
        .sd-bc{display:flex;align-items:center;gap:.5rem;margin-bottom:2rem;font-size:.875rem;color:var(--gray-400)}
        .sd-bc a{color:var(--gray-400);transition:color .2s;text-decoration:none}
        .sd-bc a:hover{color:var(--coral)}
        .sd-badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border-radius:100px;font-size:.8rem;font-weight:700;margin-bottom:1.25rem}
        .sd-badge.grow{background:rgba(255,107,74,.12);color:#FF6B4A}
        .sd-badge.test{background:rgba(147,51,234,.12);color:#9333EA}
        .sd-badge.build{background:rgba(14,165,233,.12);color:#0EA5E9}
        .sd-badge.ai{background:rgba(74,144,217,.1);color:#4A90D9}
        .sd-badge.auto{background:rgba(40,200,64,.1);color:#28C840}
        .sd-badge.web{background:rgba(255,107,74,.1);color:var(--coral)}
        .sd-dot{width:8px;height:8px;border-radius:50%}
        .sd-badge.grow .sd-dot{background:#FF6B4A}
        .sd-badge.test .sd-dot{background:#9333EA}
        .sd-badge.build .sd-dot{background:#0EA5E9}
        .sd-badge.ai .sd-dot{background:#4A90D9}
        .sd-badge.auto .sd-dot{background:#28C840}
        .sd-badge.web .sd-dot{background:var(--coral)}
        .sd-promise{display:inline-block;padding:0.45rem 1rem;background:#F8FAFC;border:1px solid rgba(0,0,0,0.08);border-radius:100px;font-size:0.875rem;font-weight:600;color:var(--navy-dark);margin-bottom:1.5rem}
        .sd-hero h1{font-size:2.85rem;font-weight:800;color:var(--navy-dark);line-height:1.15;margin-bottom:1rem;letter-spacing:-0.02em}
        .sd-hero .sd-sub{font-size:1.22rem;color:var(--gray-500);line-height:1.75;max-width:760px;margin-bottom:2rem}
        .sd-btn{display:inline-flex;align-items:center;gap:.6rem;padding:1rem 2rem;background:var(--gradient-primary);color:#fff;border-radius:100px;font-weight:700;font-size:1rem;transition:all .3s;text-decoration:none}
        .sd-btn:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(255,107,74,.35)}
        .sd-content{max-width:1200px;margin:0 auto;padding:0 2rem 4rem;display:grid;grid-template-columns:2fr 1fr;gap:3rem}
        .sd-main h2{font-size:1.5rem;font-weight:800;color:var(--navy-dark);margin-bottom:1rem}
        .sd-main p{font-size:1.0625rem;color:var(--gray-500);line-height:1.85;margin-bottom:1.25rem}
        .sd-features{list-style:none;padding:0;margin:1.5rem 0 2rem}
        .sd-features li{padding:.65rem 0;color:var(--gray-500);font-size:1rem;display:flex;align-items:flex-start;gap:.75rem;line-height:1.6}
        .sd-features li svg{color:var(--coral);flex-shrink:0;margin-top:4px}
        .sd-sidebar{display:flex;flex-direction:column;gap:1.5rem}
        .sd-card{background:#fff;border-radius:20px;padding:1.75rem;border:1px solid rgba(0,0,0,.06);box-shadow:0 4px 20px rgba(0,0,0,.03)}
        .sd-card h3{font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;color:var(--gray-400);font-weight:700;margin-bottom:1rem}
        .sd-item{display:flex;justify-content:space-between;padding:.65rem 0;border-bottom:1px solid rgba(0,0,0,.04);font-size:.95rem}
        .sd-item:last-child{border-bottom:none}
        .sd-item .label{color:var(--gray-400)}
        .sd-item .value{color:var(--navy-dark);font-weight:600;text-align:right}
        .sd-tags{display:flex;flex-wrap:wrap;gap:.5rem}
        .sd-tags span{padding:.35rem .85rem;background:var(--gray-50);border-radius:8px;font-size:.85rem;color:var(--gray-500);font-weight:500}
        .sd-cta{max-width:1200px;margin:0 auto 4rem;padding:0 2rem}
        .sd-cta-card{background:linear-gradient(135deg,#1a1a2e,#16213e);border-radius:24px;padding:3rem;display:flex;justify-content:space-between;align-items:center;gap:2rem;flex-wrap:wrap}
        .sd-cta-card h2{color:#fff;font-size:1.75rem;font-weight:800;margin-bottom:.5rem}
        .sd-cta-card p{color:rgba(255,255,255,.65);font-size:1rem}
        @media(max-width:768px){
            .sd-hero h1{font-size:2.1rem}
            .sd-content{grid-template-columns:1fr}
            .sd-cta-card{flex-direction:column;text-align:center}
        }
        
        /* ── Mobile Nav ── */
        @media (max-width: 1024px) {
            .nav-links {
                position: fixed;
                top: 80px;
                left: 50%;
                transform: translateX(-50%) translateY(-20px);
                width: calc(100% - 48px);
                max-width: 400px;
                flex-direction: column;
                gap: 0.5rem;
                padding: 1.5rem;
                background: rgba(255,255,255,0.97);
                backdrop-filter: blur(20px) saturate(180%);
                -webkit-backdrop-filter: blur(20px) saturate(180%);
                border-radius: 24px;
                border: 1px solid rgba(255,255,255,0.6);
                box-shadow: 0 8px 32px rgba(0,0,0,0.06);
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
                z-index: 999;
            }
            .nav-links.mobile-open {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transform: translateX(-50%) translateY(0);
            }
            .nav-item {
                width: 100%;
                text-align: center;
                padding: 0.875rem 1.25rem;
            }
            .menu-toggle {
                display: flex !important;
            }
            .menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
            .menu-toggle.active span:nth-child(2) { opacity: 0; }
            .menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        }
    </style>
</head>
<body>
    <nav class="navbar" id="navbar">
        <a href="../home.html" class="nav-logo"><img src="../../assets/images/logo.png" alt="Site2Success" style="height:48px;width:auto;border-radius:0"></a>
        <div class="nav-links" id="nav-links">
            <a href="../home.html" class="nav-item">Home</a>
            <a href="../services.html" class="nav-item active">Services</a>
            <a href="../projects.html" class="nav-item">Projects</a>
            <a href="../about.html" class="nav-item">About</a>
            <a href="../internships.html" class="nav-item">Builders</a>
            <a href="../automation.html" class="nav-item">KIRA AI</a>
            <a href="../contact.html" class="nav-item">Contact</a>
        </div>
        <div class="menu-toggle" id="menu-toggle"><span></span><span></span><span></span></div>
    </nav>

    <div class="sd-hero">
        <div class="sd-bc">
            <a href="../home.html">Home</a>${chev}<a href="../services.html">Services</a>${chev}<span style="color:var(--navy-dark);font-weight:600">${s.title}</span>
        </div>
        <div class="sd-badge ${s.cat}"><div class="sd-dot"></div>${s.catLabel}</div>
        ${s.promise ? `<div class="sd-promise">🎯 <strong>Promise:</strong> ${s.promise}</div>` : ''}
        <h1>${s.title}</h1>
        <p class="sd-sub">${s.subtitle}</p>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
            <a href="../contact.html?service=${s.id}" class="sd-btn">
                Inquire About Service 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="../services.html#flagships" style="color:var(--gray-500);font-size:0.95rem;font-weight:600;text-decoration:none;">&larr; View All Services</a>
        </div>
    </div>

    <section class="sd-content">
        <div class="sd-main">
            <h2>The Challenge &amp; Solution</h2>
            <p>${s.overview}</p>
            
            <h2 style="margin-top:2.5rem">What You Get (Deliverables)</h2>
            <ul class="sd-features">
${featHtml}
            </ul>

${phasesHtml}
        </div>

        <div class="sd-sidebar">
            <div class="sd-card">
                <h3>Service Summary</h3>
                <div class="sd-item"><span class="label">Pillar</span><span class="value" style="color:var(--coral);">${s.pillar || 'Build'}</span></div>
                <div class="sd-item"><span class="label">Category</span><span class="value">${s.catLabel}</span></div>
                <div class="sd-item"><span class="label">Model</span><span class="value">${s.revenueModel || s.delivery}</span></div>
                <div class="sd-item"><span class="label">Velocity</span><span class="value">${s.delivery}</span></div>
                <div class="sd-item"><span class="label">Code Ownership</span><span class="value">100% Client IP</span></div>
                <div class="sd-item"><span class="label">QA Guarantee</span><span class="value">Senior Human Review</span></div>
            </div>

${leadMagnetHtml}

            <div class="sd-card">
                <h3>Ideal For</h3>
                <div class="sd-tags">
${tagHtml}
                </div>
            </div>
        </div>
    </section>

    <section class="sd-cta">
        <div class="sd-cta-card">
            <div>
                <h2>Ready to Elevate Your Technology?</h2>
                <p>Discuss your operational requirements directly with our studio leads and senior engineers.</p>
            </div>
            <a href="../contact.html?service=${s.id}" class="sd-btn">
                Start Discovery Call 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
        </div>
    </section>

    <!-- FOOTER with NAP -->
    <footer style="background:#1a1a2e;color:rgba(255,255,255,0.7);padding:4rem 2rem 2rem;">
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem;max-width:1200px;margin:0 auto 3rem;">
            <div>
                <img src="../../assets/images/logo-white.png" alt="Site2Success Logo" style="height:44px;width:auto;margin-bottom:1rem;display:inline-block;background:transparent !important;padding:0 !important;border:none !important;">
                <p style="font-size:0.9rem;line-height:1.7;color:rgba(255,255,255,0.5);max-width:280px;">We build technology, we test technology, and we make your business visible to technology.</p>
            </div>
            <div>
                <h4 style="font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(255,255,255,0.4);margin-bottom:1.25rem;">Pages</h4>
                <a href="../home.html" style="display:block;font-size:0.9375rem;color:rgba(255,255,255,0.6);margin-bottom:0.625rem;text-decoration:none;">Home</a>
                <a href="../services.html" style="display:block;font-size:0.9375rem;color:rgba(255,255,255,0.6);margin-bottom:0.625rem;text-decoration:none;">Services</a>
                <a href="../projects.html" style="display:block;font-size:0.9375rem;color:rgba(255,255,255,0.6);margin-bottom:0.625rem;text-decoration:none;">Projects</a>
                <a href="../about.html" style="display:block;font-size:0.9375rem;color:rgba(255,255,255,0.6);margin-bottom:0.625rem;text-decoration:none;">About</a>
                <a href="../contact.html" style="display:block;font-size:0.9375rem;color:rgba(255,255,255,0.6);margin-bottom:0.625rem;text-decoration:none;">Contact</a>
            </div>
            <div>
                <h4 style="font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(255,255,255,0.4);margin-bottom:1.25rem;">Contact (NAP)</h4>
                <div style="font-size:0.9rem;line-height:1.8;color:rgba(255,255,255,0.5);" itemscope itemtype="https://schema.org/LocalBusiness">
                    <strong itemprop="name" style="color:rgba(255,255,255,0.8);">Site2Success</strong><br>
                    <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                        <span itemprop="addressLocality">Bengaluru</span>,
                        <span itemprop="addressRegion">Karnataka</span>,
                        <span itemprop="addressCountry">India</span>
                    </span><br>
                    <a href="tel:+916361446768" itemprop="telephone" style="color:rgba(255,255,255,0.5);text-decoration:none;">+91 6361446768</a><br>
                    <a href="mailto:info@site2success.in" itemprop="email" style="color:rgba(255,255,255,0.5);text-decoration:none;">info@site2success.in</a>
                </div>
            </div>
        </div>
        <div style="max-width:1200px;margin:0 auto;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
            <p style="font-size:0.875rem;color:rgba(255,255,255,0.3);">&copy; 2024–2026 Site2Success. All rights reserved.</p>
            <div style="display:flex;gap:1rem;">
                <a href="https://linkedin.com/company/site2success" rel="noopener" target="_blank" style="color:rgba(255,255,255,0.35);text-decoration:none;font-size:0.875rem;">LinkedIn</a>
                <a href="https://github.com/site2success" rel="noopener" target="_blank" style="color:rgba(255,255,255,0.35);text-decoration:none;font-size:0.875rem;">GitHub</a>
                <a href="https://instagram.com/site2success" rel="noopener" target="_blank" style="color:rgba(255,255,255,0.35);text-decoration:none;font-size:0.875rem;">Instagram</a>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="../../assets/js/main.js"></script>
    <script>
    (function() {
        var toggle = document.getElementById('menu-toggle');
        var links  = document.getElementById('nav-links');
        var navbar = document.getElementById('navbar');
        if (!toggle || !links) return;
        window.addEventListener('scroll', function() {
            if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggle.classList.toggle('active');
            links.classList.toggle('mobile-open');
        });
        links.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                toggle.classList.remove('active');
                links.classList.remove('mobile-open');
            });
        });
        document.addEventListener('click', function(e) {
            if (navbar && !navbar.contains(e.target)) {
                toggle.classList.remove('active');
                links.classList.remove('mobile-open');
            }
        });
    })();
    </script>

    <!-- BreadcrumbList Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Home","item":"https://site2success.in/pages/home.html"},
        {"@type":"ListItem","position":2,"name":"Services","item":"https://site2success.in/pages/services.html"},
        {"@type":"ListItem","position":3,"name":"${s.title}","item":"https://site2success.in/pages/services/${s.id}.html"}
      ]
    }
    </script>

    <!-- Service Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "${s.title}",
      "serviceType": "${s.catLabel}",
      "description": "${s.subtitle}",
      "provider": {
        "@type": "Organization",
        "name": "Site2Success",
        "url": "https://site2success.in",
        "logo": "https://site2success.in/assets/images/logo.png"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "url": "https://site2success.in/pages/services/${s.id}.html"
    }
    </script>

    <!-- Organization Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Site2Success",
      "url": "https://site2success.in",
      "logo": "https://site2success.in/assets/images/logo.png",
      "description": "We build technology, we test technology, and we make your business visible to technology.",
      "foundingDate": "2024-10",
      "founders": [
        {"@type":"Person","name":"Rahul R"},
        {"@type":"Person","name":"L Dhanush Raj"}
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6361446768",
        "contactType": "customer service",
        "email": "info@site2success.in"
      },
      "sameAs": [
        "https://linkedin.com/company/site2success",
        "https://github.com/site2success",
        "https://instagram.com/site2success"
      ]
    }
    </script>
</body>
</html>`;
  fs.writeFileSync(path.join(dir, s.id + '.html'), html, 'utf8');
  console.log('Created: ' + s.id + '.html');
});
console.log(`Done! All ${services.length} pages created.`);
