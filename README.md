# Amber CFO Launch

Build a complete, multi-page website for "TheCFO.Site" 

from scratch following the exact Brand Guide and Site 

Architecture provided below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 EXACT COLOR SYSTEM — NO DEVIATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

--color-navy:        #121A28  (headings, buttons, footer)

--color-amber:       #B9832B  (icons, highlights, active states)

--color-amber-dark:  #996500  (hover states)

--color-canvas:      #F7F4EF  (main page background)

--color-card:        #FEFDFB  (card surfaces)

--color-secondary:   #EEEAE3  (muted sections, badges)

--color-white:       #FFFFFF  (alternate sections)

--color-body:        #5D524A  (body text)

--color-border:      #E1DDD6  (card borders, dividers)

RULES:

- Golden Amber ONLY for icons, highlights, active 

  nav links — NEVER as large background fill

- Navy ONLY for headings, CTAs, footer — 

  NEVER for body text

- ALL backgrounds use warm-toned neutrals only

- NEVER use cool grays or blue-tinted backgrounds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✍️ TYPOGRAPHY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Font: "Plus Jakarta Sans" from Google Fonts

Weights: 400, 500, 600, 700, 800

H1: 36–48px / 800 weight / tight tracking

H2: 30–36px / 800 weight / tight tracking

H3: 18px / 700 weight / normal tracking

Body: 16px / 400 / leading-relaxed (1.625)

Body Small: 14px / 400

Label/Overline: 12px / 600 / UPPERCASE / wide tracking

Button: 14px / 600

RULE: Key words in H1/H2 use Golden Amber color

RULE: Overline labels appear above every section heading

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 SPACING & LAYOUT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Max width: 1280px centered

Mobile padding: 16px

Tablet padding: 24px

Desktop padding: 32px

Section vertical padding: 80–112px

Card gap: 20–24px

Border Radius:

- Buttons: 8px

- Cards: 12px

- Images: 16px

- Icon containers: 8px

- Inputs: 8px

Shadows:

- Default card: border only (no shadow)

- Hover card: shadow-lg with golden amber 5% tint

- Hero floating card: shadow-lg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ ANIMATIONS (Framer Motion)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Section fade-in: opacity 0→1, y 24px→0 on scroll

Stagger: 80–100ms between sibling elements

Duration: 500ms scroll reveals, 200ms interactions

Easing: [0.25, 0.46, 0.45, 0.94]

Hover on all buttons/cards: translateY(-1px to -2px)

Nav indicator: spring animation, bounce 0.15

Mobile menu: height 0→auto, opacity 0→1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖼️ IMAGES (Unsplash — real photos only)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Style: Bright, airy, modern office with natural 

light and warm wood tones. Real workspaces only.

Hero:

https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85

Team/About:

https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85

Services:

https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85

CTA background (85% navy overlay):

https://images.unsplash.com/photo-1497366754035-f200968a5db4?w=1400&q=80

Testimonial 1:

https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85

Testimonial 2:

https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85

Testimonial 3:

https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85

All images: loading="lazy", object-fit:cover, 

border-radius 16px (rounded-2xl)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧭 NAVBAR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Fixed position, transparent on load

On scroll: white background + blur + 

  border-bottom 1px #E1DDD6

Logo: "TheCFO.Site" wordmark — dark on light bg, 

white (CSS invert) on dark bg

Height: 36–40px

Nav items (max 6):

Services ▾ | Software | Resources ▾ | About | Careers

Right side:

Phone number (desktop only) + 

[Book a Call] button — Navy bg, white text

Active link: Golden Amber color + underline

Mobile: hamburger → slide-down overlay menu

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏠 PAGE 1: HOMEPAGE (/)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1 — HERO:

Background: Canvas #F7F4EF

Top padding: 112–144px (accounts for fixed nav)

Overline: "FRACTIONAL CFO SERVICES" 

  (amber, uppercase, 12px semibold)

H1: "Financial Leadership for"

H1 accent word: "Growth" (Golden Amber)

Subheadline: "We embed senior financial leadership 

into service-based businesses scaling from $2M to 

$30M+ — delivering the clarity, systems, and 

strategy your next stage demands."

Two CTAs:

Primary: [Book a Free Consultation →] — Navy bg

Secondary: [See How We Work] — outline Navy

Trust line: "Trusted by 40+ firms across Canada"

Right side: Floating card (shadow-lg, warm white bg):

  - Dashboard/metrics visual

  - Animated stat counter showing key numbers

SECTION 2 — TRUST BAR:

Background: White #FFFFFF

Border top/bottom: 1px #E1DDD6

"Trusted by growing firms across Canada and the US"

Client industry logos/names in warm gray

SECTION 3 — THE PROBLEM:

Background: Canvas #F7F4EF

Overline: "SOUND FAMILIAR?"

H2: "You have a bookkeeper. But no one's telling you 

what the numbers actually mean."

3 pain point cards:

Card 1: "Your books are clean but your cash flow 

is unpredictable — you never know what's coming."

Card 2: "You're making major decisions without 

a financial model to validate them."

Card 3: "You need a CFO seat at the table but 

can't justify a $200K+ full-time salary."

Each: Icon (amber) + H3 + body text

SECTION 4 — OUR WORKFLOW:

Background: White #FFFFFF

Overline: "HOW WE WORK"

H2: "We Build Your Financial Infrastructure 

from the Ground Up"

Visual staircase/progression (5 phases):

Phase 1: Data Capture & Foundation

  AR, AP, expense categorization, 

  Dext/Hubdoc, Plooto

Phase 2: Monthly Close & Compliance

  Bank reconciliations, accruals, 

  journal entries, financial statements

Phase 3: Reporting & Insights

  Management reports, Power BI dashboards,

  KPI tracking, variance analysis

Phase 4: FP&A / Budgeting / Forecasting

  Annual budgets, rolling forecasts, 

  scenario modeling, cash flow projections

Phase 5: Strategic Advisory

  Board guidance, growth strategy, 

  M&A support, capital raising

Each phase: Number + Icon (amber) + Title + 

2-line description

Visual connecting arrow/line between phases

SECTION 5 — SERVICES OVERVIEW:

Background: Canvas #F7F4EF

Overline: "WHAT WE DO"

H2: "Senior Finance Leadership, 

Tailored to Your Stage"

4-5 service cards (grid):

Card 1: Bookkeeping & Month-End Close

Card 2: Financial Reporting & KPI Dashboards

Card 3: FP&A / Budgeting / Forecasting

Card 4: Controllership Services

Card 5: Fractional CFO

Each card:

- Icon container: 44px, amber bg 8% opacity, 

  amber icon

- H3 + body description (2 lines)

- [Learn More →] amber link

Card hover: border shifts to amber 30% opacity,

shadow appears, card lifts 2px

SECTION 6 — WHO WE WORK WITH:

Background: White #FFFFFF

Overline: "WHO WE SERVE"

H2: "Built for Service-Based Businesses 

Scaling Past $2M"

Primary cards (3, with icons + pain points):

⚖️ Law Firms — "Track billable hours, manage 

  trust accounts, understand profitability 

  by practice area"

📣 PR & Communications Firms — "Forecast 

  retainer revenue, manage contractor costs, 

  understand campaign profitability"

📊 Marketing Agencies — "Track project margins, 

  manage burn rate, forecast growth with 

  confidence"

Below cards: Muted text:

"We also partner with businesses in broadcasting, 

healthcare, education, and other sectors. 

If you need financial clarity to scale, we can help."

SECTION 7 — RESULTS / STATS:

Background: Canvas #F7F4EF

Overline: "OUR IMPACT"

H2: "The Numbers Behind the Work"

4 animated stat counters (animate on scroll):

$50M+ — in client revenue managed

40% — average cost savings vs. full-time hire

98% — client retention rate

10+ — years of senior finance experience

Each: Number (48px, 800, Navy) + 

Label (14px, Slate Brown)

SECTION 8 — TESTIMONIALS:

Background: White #FFFFFF

Overline: "CLIENT STORIES"

H2: "What Our Clients Are Saying"

2-3 testimonial cards or carousel:

Each card:

- Client photo (circle, 48px)

- Star rating ★★★★★ (amber)

- Quote (italic, Slate Brown)

- Name + Title + Company (Navy, semibold)

Testimonial 1:

Photo: photo-1494790108377-be9c29b29330

"TheCFO.Site transformed how we run our firm. 

We finally have dashboards that show us profitability 

by client, not just total revenue. Our decisions 

are completely different now."

— Sarah Mitchell, Managing Partner, 

  Mitchell Law Group

Testimonial 2:

Photo: photo-1507003211169-0a1dd7228f2d

"We were growing fast but flying blind financially. 

Within 60 days they had our close down to 3 days 

and built a forecast model that's been spot-on 

for two quarters straight."

— Marcus Webb, CEO, Apex Communications

SECTION 9 — RESOURCES PREVIEW:

Background: Canvas #F7F4EF

Overline: "INSIGHTS & TOOLS"

H2: "Built to Help You Scale Smarter"

3 latest blog/resource cards:

Card: Category tag (amber) + Title + 

2-line excerpt + Read time + [Read More →]

Blog 1: "The 5 Financial Metrics Every 

Service Firm Must Track Past $2M"

Blog 2: "Why Your Bookkeeper Can't Replace 

a CFO (And When You Need Both)"

Blog 3: "How to Build a 13-Week Cash Flow 

Forecast for Your Agency"

SECTION 10 — FINAL CTA:

Background: Navy #121A28 + image with 85% overlay

Image: photo-1497366754035-f200968a5db4

White text throughout

Overline: "READY TO SCALE?" (amber)

H2: "Let's Build Your Financial Foundation"

Body: "Book a free 30-minute discovery call. 

We'll discuss your challenges, where you want 

to go, and whether we're the right fit. 

No obligation, no pressure."

Two buttons:

[Book a Free Consultation →] 

  White bg, Navy text

[See How We Work]

  Ghost, white border

Testimonial below buttons (trust):

"Working with TheCFO.Site was the best decision 

we made for our firm's growth." 

— Jennifer Park, COO

FOOTER:

Background: Navy #121A28

Logo: CSS invert (white)

Tagline: "Financial Leadership for Growth"

4-column grid:

Col 1: Logo + tagline + phone + email

Col 2: Services (all 8 service links)

Col 3: Company (About, Careers, Software, Resources)

Col 4: Newsletter signup + social icons

Bottom bar: © 2025 TheCFO.Site | Privacy | Terms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 PAGE 2: SERVICES (/services)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero (Canvas bg):

Overline: "OUR SERVICES"

H1: "Building Financial Infrastructure, 

Layer by Layer"

Section A — Workflow Visualization (staircase):

Visual 5-phase staircase (same as homepage 

but expanded with full descriptions)

Each phase full detail:

Phase 1 — Data Capture & Foundation:

  AR, AP, Dext, Hubdoc, Plooto, expense 

  categorization, payment automation

Phase 2 — Monthly Close & Compliance:

  Bank reconciliations, accruals, 

  journal entries, month-end close, 

  financial statement preparation

Phase 3 — Reporting & Insights:

  Monthly management reports, Power BI 

  dashboards, KPI tracking, variance analysis, 

  job-level and employee-level metrics

Phase 4 — FP&A / Budgeting / Forecasting:

  Annual budgets, rolling forecasts, 

  scenario modeling, cash flow projections, 

  revenue forecasting

Phase 5 — Strategic Advisory:

  Board guidance, growth strategy, 

  exit planning, M&A, capital raising, 

  negotiations

Section B — Individual Service Cards (8 cards):

1. Accounts Receivable & Payable

2. Bookkeeping & Month-End Close

3. Financial Reporting

4. FP&A / Budgeting / Forecasting

5. Controllership Services

6. Strategic Advisory

7. Negotiation & Litigation Support

8. Fractional CFO

Each card: Icon + H3 + 2-3 sentence description 

+ 3 bullet deliverables + [Learn More]

Relevant testimonial quote alongside each 

major service

Section C — "Not Sure Where to Start?" CTA:

Warm navy section: 

"Not sure which services you need? That's 

exactly what our free discovery call is for."

[Book a Free Call →]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 PAGE 3: SOFTWARE & TOOLS (/software)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero (Canvas):

Overline: "OUR TECH STACK"

H1: "The Tools We've Built Our Practice Around"

Intro: "We believe the right tools eliminate 

busywork and surface insights faster. Each tool 

chosen for reliability, integration capabilities, 

and value to service-based businesses."

Horizontal jump-to bar (sticky):

[QuickBooks] [Xero] [QBO Time] [Dext] 

[Hubdoc] [Plooto] [Power BI]

7 individual tool sections 

(alternating canvas/white backgrounds):

Each section:

- Official logo (large, prominently displayed)

- Tool name + category badge (amber)

- 2-3 paragraphs: what it does, why chosen, 

  how used for clients, who it's best for

- 3-4 key benefits (checkmarks, amber)

- Integration note: how it connects with 

  other tools

Tool 1: QuickBooks Advanced

Category: Accounting & ERP

Core platform for larger clients needing 

advanced reporting, custom roles, batch invoicing, 

detailed job costing

Tool 2: Xero

Category: Accounting & ERP

Cloud accounting for clients preferring 

streamlined interface, strong bank feeds, 

multi-currency support

Tool 3: QuickBooks Time

Category: Time Tracking

Employee time tracking, job costing, billable 

hours — critical for service firms tracking 

utilization

Tool 4: Dext

Category: Receipt Capture

Automated receipt capture and categorization, 

eliminating manual data entry at source

Tool 5: Hubdoc

Category: Document Management

Fetching bills, statements, receipts automatically 

from vendors and financial institutions

Tool 6: Plooto

Category: Payments & AP Automation

Automating vendor payments, approval workflows, 

payment reconciliation — replacing manual cheques

Tool 7: Microsoft Power BI

Category: Business Intelligence

Custom dashboards turning financial data into 

actionable insights for leadership

Closing: Visual data flow diagram:

Dext/Hubdoc → QBO/Xero → Power BI

(with Plooto handling outflows, QBO Time 

feeding job costing)

Client quote about tech stack

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 PAGE 4: RESOURCES (/resources)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero (Canvas):

Overline: "RESOURCES"

H1: "Tools and Insights to Help You Scale"

4 sub-sections:

A. BLOG / INSIGHTS:

3-column card grid

Category tag + Title + Excerpt + 

Read time + Date + [Read Article]

5 blog articles:

1. "The 5 Financial Metrics Every Service 

   Firm Must Track Past $2M"

2. "Why Your Bookkeeper Can't Replace a CFO"

3. "How to Build a 13-Week Cash Flow Forecast"

4. "KPI Dashboards for Agency Owners: 

   A Complete Guide"

5. "When Is It Time to Hire a Fractional CFO?"

B. GUIDES & TEMPLATES (gated):

3 downloadable resources (email gate):

1. CFO Readiness Checklist (PDF, 12 pages)

2. Cash Flow Forecast Template (Excel)

3. KPI Dashboard Template for Service Firms

Each: Cover mockup + title + 

"What you'll learn" bullets + 

[Download Free] → email modal

C. PRICING CALCULATOR:

Multi-step interactive tool:

Step 1 — What roles do you need?

Checkboxes:

☐ Bookkeeper

☐ Accountant  

☐ Controller

☐ CFO

Step 2 — Employment type:

Full-time vs TheCFO.Site fractional

Step 3 — Location / Market:

Dropdown (affects salary benchmarks)

Toronto / Vancouver / Calgary / Montreal / Other

Step 4 — Hours needed per month:

Slider: 10hrs → 160hrs

RESULTS — Side-by-side comparison table:

Cost Element | Full-Time | TheCFO.Site

Base Salary | $185,000/yr | —

Benefits 25% | $46,250/yr | Included

Software | $8,000/yr | Included

Recruiting | $18,500 | —

Training | $5,000 | —

─────────────────────────────────

Total Annual | $262,750 | $48,000

Your Savings | — | $214,750/yr

Below: "Plus, you get a team with cross-industry 

experience, not a single hire who may leave 

in 18 months."

[Book a Free Call →]

Email gate for detailed results

D. FAQ (accordion, 8 questions):

Q: How is TheCFO.Site different from 

   a bookkeeper?

Q: What does a fractional CFO actually do 

   day-to-day?

Q: How much does it cost?

Q: How long does an engagement typically last?

Q: What size of business do you work with?

Q: How quickly can you start?

Q: What accounting software do you support?

Q: Do we need to change our current systems?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 PAGE 5: ABOUT (/about)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero (Canvas):

Overline: "OUR STORY"

H1: "Built for the Businesses That 

Didn't Have a Seat at the CFO Table"

Section 1 — Our Story (image left, text right):

Image: photo-1600880292203-757bb62b4baf

3 paragraphs on founding story, gap in market, 

why built specifically for service businesses

Section 2 — Our Approach (5 steps):

How an engagement works:

1. Free Discovery Call (30 min)

2. Financial Assessment & Proposal

3. Onboarding & System Setup (Week 1-2)

4. Monthly Close & Reporting Begins

5. Ongoing CFO Partnership & Strategy

Section 3 — Our Values (4 cards):

🎯 Transparency — "No surprises, no jargon"

⚡ Precision — "Every number tells a story"

🤝 Partnership — "We grow when you grow"

📈 Growth-Minded — "Always looking forward"

Section 4 — Why Us vs Alternatives (table):

| | TheCFO.Site | Full-Time CFO | Traditional Firm |

|Cost/month| $2,500–$8K | $15K–$25K | $1K–$3K |

|Seniority | C-Suite | Varies | Staff level |

|Start time| 1 week | 3–6 months | 2–4 weeks |

|Scalability| Flexible | Fixed | Limited |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 PAGE 6: CAREERS (/careers)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero (Navy dark bg):

H1 (white): "Join a Team That's 

Redefining Financial Leadership"

Section 1 — Why Join Us (Canvas bg):

4 benefit cards:

🌍 100% Remote — Work from anywhere

📈 Growth-First — Certifications, mentorship

💰 Competitive Pay — Market rate

🤝 Variety — Work with 10+ industries

Section 2 — Open Positions:

Filter: All | Senior | Mid | Entry

Job listings (expandable cards):

- Senior CFO Advisor | Remote | $100K–$140K

- Controller | Remote | $75K–$95K

- Senior Bookkeeper | Remote | $45K–$65K

- Power BI Analyst | Remote | $55K–$80K

Section 3 — General Application form:

Name + Email + Role + LinkedIn + 

Resume upload + Message + [Apply]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 PAGE 7: CONTACT (/contact)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hero (Canvas):

H1: "Let's Talk About Your Growth"

Subtext: "Free 30-minute discovery call. 

No obligation."

Split layout:

LEFT — Booking (primary):

Embedded Calendly placeholder

[Book a Free 30-Min Call →] large Navy button

Short form below:

Name* | Company* | Email* | Revenue Range | 

Brief message | [Send Message →]

What to expect:

"We'll discuss your current challenges, where 

you want to go, and whether we're the right fit."

RIGHT — Contact info:

Phone, email, response time promise

One strong testimonial

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔘 BUTTON STYLES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary: Navy bg (#121A28), white text, 8px radius

  Hover: 90% opacity + translateY(-1px)

Secondary/Outline: transparent bg, Navy border 

  20% opacity, Navy text

Accent (on dark bg): White bg, Navy text

Ghost (on dark bg): transparent, white border 

  30% opacity, white text

Padding default: px-6 py-3.5

Padding large: px-7 py-4

Font: 14px SemiBold

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ LEAD CAPTURE (every page)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- "Book a Free Consultation" in hero, 

  end of every page, sticky navbar

- Pricing Calculator with email gate

- Gated guides with email modal

- Newsletter in footer

- Exit-intent popup after 30 seconds: 

  "Before you go — see how much you could save"

  → links to Pricing Calculator

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 RESPONSIVE BREAKPOINTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mobile (<640px):

- Hamburger menu, full overlay

- All grids: 1 column

- H1: 32px, H2: 26px

- Section padding: 60px 16px

- Buttons: full width

Tablet (640–1024px):

- 2-column grids

- Section padding: 80px 24px

Desktop (1024px+):

- Full layout, max-width 1280px

- Section padding: 80–112px 32px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛠️ TECH STACK

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React 18 + TypeScript

Tailwind CSS (exact colors above)

Framer Motion (all animations)

React Router v6 (all pages)

Lucide React (icons)

Google Fonts: Plus Jakarta Sans

SECTION PATTERN (alternating):

Odd sections: Canvas #F7F4EF

Even sections: White #FFFFFF

Special: Navy for CTAs and footer

START: Build the complete Homepage first 

with 100% quality. Every section must be 

complete. All images loaded from Unsplash 

URLs. All animations working. Then build 

each page in order. Use exactly the colors, fonts, and layout from the Brand Guide. Warm cream backgrounds only — no dark navy sections except the footer and final CTA

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1ea38451-5cbb-4a9a-842d-12f8d7d81aee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
