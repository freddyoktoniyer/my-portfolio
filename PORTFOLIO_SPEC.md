# Freddy Oktoniyer S — Senior Software Engineer Portfolio

## 0. ROLE

You are acting as a **Senior Staff Frontend Engineer, Product Designer, UX Engineer, and Technical Architect**.

Build a production-quality personal portfolio website for:

**Freddy Oktoniyer S**

Professional title:

**Backend / Full Stack Software Engineer**

This is NOT a generic developer portfolio.

The website must position Freddy as an experienced software engineer who understands:

* Backend engineering
* REST API design
* Mobile applications
* Android / iOS
* Enterprise system integration
* SAP / OData integration
* Databases
* Business processes
* System troubleshooting
* Production support
* SDLC
* Application reliability
* Technical problem solving

The website should feel like a portfolio of an experienced professional engineer who can work across the system, not a collection of technology badges.

---

# 1. PRIMARY OBJECTIVE

Create a premium, modern, technical, highly responsive portfolio that can be used for:

* Senior Software Engineer applications
* Backend Engineer applications
* Full Stack Engineer applications
* Mobile Engineer applications
* Technical recruiter review
* Engineering Manager review
* CTO review
* Professional networking

The website must communicate the following idea:

> "I build and maintain reliable software across backend services, mobile applications, APIs, databases, and enterprise systems."

Do not use fabricated achievements.

Do not invent metrics.

Do not invent clients.

Do not invent project names.

Do not invent certifications.

Do not invent architecture patterns.

Use only information supported by the CV and the project information explicitly provided in this specification.

---

# 2. SOURCE OF TRUTH

The attached CV is the primary source of truth.

CV:

`Freddy Oktoniyer S - CV(5).pdf`

Important information from the CV:

## Personal

Name:

Freddy Oktoniyer S

Location:

Tangerang, Indonesia

Email:

[freddy.oktoniyer@gmail.com](mailto:freddy.oktoniyer@gmail.com)

LinkedIn:

linkedin.com/in/freddy-oktoniyer-s9b3408182/

Phone:

082284475259

Professional title:

Backend / Full Stack Software Engineer

Experience:

5+ years

---

# 3. PROFESSIONAL POSITIONING

Primary positioning:

## Backend / Full Stack Software Engineer

Supporting positioning:

> Building reliable software across backend services, REST APIs, mobile applications, enterprise integrations, and database-driven systems.

Do NOT make "Frontend Developer" the primary positioning.

Do NOT make "Mobile Developer" the primary positioning.

Mobile is an important technical strength, but the overall profile should communicate broader engineering capability.

---

# 4. CORE TECHNOLOGY STACK

Use these technologies based on the CV.

## Backend

* Golang
* Laravel
* PHP
* Java
* Python
* REST API

## Mobile

* Kotlin
* Android
* Swift
* iOS
* Jetpack Compose
* Flutter
* Dart

## Frontend

* Vue.js
* Angular
* JavaScript
* jQuery
* HTML5
* CSS

## Database

* MySQL
* PostgreSQL
* SQL Server

## Engineering

* Software Architecture
* API
* Performance
* Crash Fix
* UI/UX
* Manual Testing
* User Acceptance Testing
* Project Management
* Compliance Management
* System Integration
* Troubleshooting

## Enterprise

* SAP
* OData
* Enterprise API Integration

---

# 5. TECHNOLOGY REQUIREMENTS

Use the following stack.

## Core

* Next.js
* TypeScript
* React
* Tailwind CSS
* Framer Motion

## Recommended supporting libraries

* lucide-react
* clsx
* tailwind-merge
* next-themes if dark/light mode is implemented

Do NOT introduce unnecessary dependencies.

Prefer native browser / React / Next.js functionality whenever possible.

---

# 6. NEXT.JS REQUIREMENTS

Use:

* Next.js
* App Router
* TypeScript
* Server Components by default

Use Client Components only where interaction requires them.

Examples:

* Framer Motion animation components
* Mobile navigation
* Theme toggle
* Interactive case study
* Interactive architecture diagram
* Copy-to-clipboard
* Interactive timeline

Do NOT make the entire application `"use client"`.

Keep the application server-first.

Use:

```text
app/
```

with the App Router.

---

# 7. TYPESCRIPT REQUIREMENTS

TypeScript must use strict mode.

`tsconfig.json` must contain strict type checking.

Avoid:

```typescript
any
```

unless absolutely unavoidable.

Prefer explicit types.

Create domain types for:

* Experience
* Skill
* Project
* Education
* NavigationItem
* SocialLink
* ArchitectureLayer

Example:

```typescript
export interface Experience {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
}
```

Do not duplicate content directly inside UI components.

---

# 8. TAILWIND REQUIREMENTS

Use Tailwind CSS for layout and styling.

Do not create huge custom CSS files.

Use CSS only for:

* Global variables
* Complex visual effects
* Custom scrollbar if needed
* Noise / grain effect
* Special technical visualizations
* CSS that is genuinely difficult to express through Tailwind

Create reusable utility classes where appropriate.

Maintain a consistent spacing system.

Avoid arbitrary values everywhere.

Bad:

```tsx
<div className="mt-[17px] ml-[23px]">
```

Prefer:

```tsx
<div className="mt-4 ml-6">
```

Use arbitrary values only when they provide real design value.

---

# 9. FRAMER MOTION REQUIREMENTS

Use Framer Motion for subtle professional interactions.

Animations should feel:

* Smooth
* Technical
* Premium
* Controlled

Do NOT create excessive animations.

Use:

## Page entrance

Subtle opacity + vertical movement.

## Section entrance

Use viewport-based reveal.

## Project cards

Subtle hover movement.

## Navigation

Smooth active state.

## Architecture diagram

Subtle connection / layer animation.

## Timeline

Subtle reveal.

## Hero

Very subtle ambient movement.

Avoid:

* Excessive bouncing
* Huge parallax
* Rotating elements everywhere
* Infinite distracting animations
* Animation on every DOM element

Respect:

```css
prefers-reduced-motion
```

---

# 10. DESIGN SYSTEM

Create a coherent design system.

## Color

Primary:

Near-black / charcoal.

Suggested:

```text
Background:
#09090B

Surface:
#111113

Surface Elevated:
#18181B

Border:
#27272A

Primary Text:
#F4F4F5

Secondary Text:
#A1A1AA

Muted:
#71717A
```

Accent should be restrained.

Suggested accent:

Electric blue / cyan.

Do not make the entire site blue.

Use accent only for:

* Links
* Active navigation
* Small indicators
* Interactive elements
* Technical highlights
* CTA

---

# 11. TYPOGRAPHY

Use a premium sans-serif.

Recommended:

* Geist
* Inter

Use a monospace font selectively:

* JetBrains Mono
* Geist Mono

Monospace should only be used for:

* Section numbers
* Technical labels
* Technology tags
* Small metadata
* Code-like UI

Do NOT use monospace for entire paragraphs.

---

# 12. LAYOUT PHILOSOPHY

The site should have strong editorial spacing.

Use:

* Large typography
* Wide containers
* Generous whitespace
* Strong visual hierarchy
* Thin borders
* Subtle surfaces
* Large project cards

Recommended maximum content width:

```text
max-w-7xl
```

or approximately:

```text
1280px
```

Do not stretch text across the entire screen.

---

# 13. WEBSITE INFORMATION ARCHITECTURE

Main navigation:

```text
Home
Work
Experience
Engineering
Education
Contact
```

Desktop:

Sticky top navigation.

Mobile:

Animated mobile menu.

Navigation should remain minimal.

---

# 14. PROJECT STRUCTURE

Use the following folder structure.

```text
freddy-portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── opengraph-image.tsx
│   ├── icon.svg
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   │
│   ├── hero/
│   │   ├── Hero.tsx
│   │   ├── HeroSystemVisual.tsx
│   │   └── HeroActions.tsx
│   │
│   ├── about/
│   │   ├── About.tsx
│   │   └── EngineeringPhilosophy.tsx
│   │
│   ├── work/
│   │   ├── SelectedWork.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── ProjectTechnology.tsx
│   │
│   ├── experience/
│   │   ├── ExperienceTimeline.tsx
│   │   ├── ExperienceItem.tsx
│   │   └── ExperienceDetails.tsx
│   │
│   ├── engineering/
│   │   ├── EngineeringCapabilities.tsx
│   │   ├── SystemThinking.tsx
│   │   ├── ArchitectureDiagram.tsx
│   │   ├── ProblemSolving.tsx
│   │   └── TechnologyGroup.tsx
│   │
│   ├── education/
│   │   ├── Education.tsx
│   │   └── EducationItem.tsx
│   │
│   ├── contact/
│   │   ├── Contact.tsx
│   │   └── SocialLinks.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── SectionHeading.tsx
│       ├── Reveal.tsx
│       ├── MagneticButton.tsx
│       └── Divider.tsx
│
├── data/
│   ├── profile.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── education.ts
│   └── navigation.ts
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── profile/
│   │
│   ├── resume/
│   │   └── Freddy-Oktoniyer-S-CV.pdf
│   │
│   └── favicon/
│
├── types/
│   └── portfolio.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
└── PORTFOLIO_SPEC.md
```

---

# 15. DATA-DRIVEN CONTENT

All portfolio content should live in `/data`.

Do not hardcode large content blocks directly inside components.

Example:

```typescript
// data/profile.ts

export const profile = {
  name: "Freddy Oktoniyer S",
  title: "Backend / Full Stack Software Engineer",
  location: "Tangerang, Indonesia",
  email: "freddy.oktoniyer@gmail.com",
  linkedin:
    "https://linkedin.com/in/freddy-oktoniyer-s9b3408182/",
  experience: "5+ years",
}
```

Components consume the data.

This makes future updates easy.

---

# 16. HERO SECTION

Create an exceptional hero.

Desktop layout:

```text
------------------------------------------------------

FREDDY OKTONIYER S

Backend / Full Stack
Software Engineer

Building reliable software across backend services,
mobile applications, APIs, and enterprise systems.

[ View Selected Work ]
[ Download CV ]

                                      ┌─────────────┐
                                      │   MOBILE    │
                                      │      ↓      │
                                      │   REST API  │
                                      │      ↓      │
                                      │   BACKEND   │
                                      │      ↓      │
                                      │ DB / SAP    │
                                      └─────────────┘

------------------------------------------------------
```

The hero visual should communicate system thinking.

Do not use a generic profile illustration.

---

# 17. HERO SYSTEM VISUAL

Create:

`HeroSystemVisual.tsx`

Visual layers:

```text
MOBILE
Android / iOS
      ↓
API
REST
      ↓
BACKEND
Golang / Laravel
      ↓
DATA
PostgreSQL / MySQL / SQL Server
      ↓
ENTERPRISE
SAP / OData
```

Use Framer Motion to subtly animate the connections.

Keep it abstract and clean.

---

# 18. ABOUT SECTION

Headline:

```text
Engineering across
the system, not just
the interface.
```

Supporting narrative:

Freddy is a software engineer with 5+ years of professional experience developing and maintaining backend services, RESTful APIs, mobile applications, system integrations, and database-driven applications.

He has experience translating business requirements into technical solutions, troubleshooting production issues, integrating enterprise systems, and supporting applications throughout the software development lifecycle.

Do not simply dump the CV summary.

Turn it into concise editorial content.

---

# 19. ENGINEERING PHILOSOPHY

Create four principles.

## Understand

Understand business requirements and system context before implementation.

## Design

Translate requirements into maintainable technical solutions.

## Build

Develop reliable applications, APIs, integrations, and services.

## Improve

Investigate root causes, improve reliability, and continuously refine the system.

Visualize as a loop:

```text
UNDERSTAND
     ↓
DESIGN
     ↓
BUILD
     ↓
VALIDATE
     ↓
IMPROVE
     ↺
```

---

# 20. SELECTED WORK

This section should feel like the centerpiece of the portfolio.

Title:

```text
Selected Work
```

Subtitle:

```text
Systems, applications, and integrations I've worked on.
```

Because the CV does not contain detailed public project names for every engagement, do not fabricate project names.

Use supported work categories where detailed project information is unavailable.

Suggested cards:

### Backend & API Services

Golang / Laravel

RESTful APIs supporting mobile applications and business processes.

### Mobile Application Ecosystem

Android / iOS / Flutter

Applications consuming backend services and supporting business workflows.

### Enterprise System Integration

SAP / OData / REST

Integration between applications, backend services, and enterprise systems.

### Business Applications

Laravel / CodeIgniter / Vue.js / Angular

Enterprise and internal applications supporting operational workflows.

---

# 21. PROJECT CARD DESIGN

Project cards should have:

* Number
* Category
* Title
* Short description
* Technologies
* Engineering focus
* Arrow icon

Example:

```text
01

BACKEND / API

Backend & API Services

Designing and maintaining RESTful services
for mobile applications and business processes.

Golang · Laravel · REST API · SQL

                         View Work →
```

On hover:

* Card moves slightly upward
* Border becomes accent
* Arrow moves right
* Background subtly changes

---

# 22. VIVERE EXPERIENCE

This must be the strongest professional experience.

Company:

VIVERE GROUP

Role:

Fullstack Developer

Period:

09/2024 — Present

Use the actual CV responsibilities.

Important topics:

* Golang backend services
* RESTful APIs
* Android / iOS integration
* Authentication
* Request validation
* Business logic
* Error handling
* SAP / OData
* Enterprise integrations
* Relational databases
* SQL
* Performance
* Reliability
* Root cause analysis
* API contracts
* SIT
* UAT
* Production support
* Deployment
* Monitoring

Do not invent numerical impact.

---

# 23. VIVERE ARCHITECTURE

Create an interactive visual:

```text
┌──────────────────────┐
│      ANDROID         │
│        iOS           │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      REST API        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   GOLANG / LARAVEL   │
│                      │
│ Business Logic       │
│ Validation           │
│ Error Handling       │
└───────┬──────────────┘
        │
   ┌────┴─────┐
   ▼          ▼
DATABASE     SAP
             OData
```

Use animated connections.

Do not claim a specific microservice architecture unless explicitly supported.

---

# 24. CAREER TIMELINE

Create a visually impressive timeline.

## 2024 — Present

### VIVERE GROUP

Fullstack Developer

Focus:

Backend
REST API
Mobile integration
SAP
Enterprise systems
Production support

---

## 2022 — 2024

### PT. Garuda Yamato Steel

Application Developer & Support Engineer

Focus:

Business applications
REST API
SAP integration
Production support
SIT / UAT
RPA

Include:

**34 UiPath RPA processes monitored and enhanced**

This exact fact is supported by the CV.

---

## 2022

### PT. Kost Profesional Indonesia

Fullstack Developer

Laravel 9

---

## 2022

### PDSI Kementerian Komunikasi dan Informatika

Fullstack Developer

CodeIgniter 3
MySQL

---

## 2021

### PT PIN

Fullstack Developer

CodeIgniter 3
MySQL

---

## 2021

### UMKM Bogor City

Web Developer - Frontend

HTML5
CSS

---

# 25. CAREER PROGRESSION VISUAL

Create a horizontal / vertical visual:

```text
FRONTEND
   ↓
FULL STACK
   ↓
APPLICATION DEVELOPMENT
   ↓
ENTERPRISE INTEGRATION
   ↓
BACKEND / API
   ↓
SYSTEM-LEVEL ENGINEERING
```

The purpose is not to claim an official title progression.

It is a visual interpretation of the experience documented in the CV.

---

# 26. ENGINEERING CAPABILITIES

Do NOT make a simple list of 30 technologies.

Instead create engineering categories.

## Backend Engineering

Golang
Laravel
PHP
REST API
Business Logic
Validation
Error Handling

## Mobile Engineering

Kotlin
Android
Swift
iOS
Compose
Flutter
Dart

## System Integration

REST
SAP
OData
API Integration
Data Exchange

## Data

MySQL
PostgreSQL
SQL Server
SQL Queries
Data Processing

## Quality & Reliability

Testing
SIT
UAT
Troubleshooting
Root Cause Analysis
Production Support
Performance

---

# 27. TECHNOLOGY DISPLAY

Use small premium technology pills.

Example:

```text
GOLANG
LARAVEL
KOTLIN
SWIFT
ANDROID
IOS
FLUTTER
POSTGRESQL
MYSQL
SQL SERVER
SAP
OData
```

Avoid huge logos.

If logos are used, use only official / appropriate icons and ensure licensing.

Text labels are preferred.

---

# 28. SYSTEM THINKING SECTION

Title:

```text
One system.
Multiple layers.
```

Create an interactive diagram.

Layers:

```text
USER
 ↓
MOBILE APPLICATION
 ↓
API
 ↓
BACKEND
 ↓
BUSINESS LOGIC
 ↓
DATABASE
 ↓
ENTERPRISE SYSTEM
```

Hovering a layer should display a short explanation.

Example:

### API

"Defines the contract between applications and backend services."

### Backend

"Handles business logic, validation, processing, and service workflows."

### Enterprise

"Integrates application services with enterprise systems such as SAP."

Keep the explanations factual.

---

# 29. PROBLEM SOLVING SECTION

Title:

```text
From problem
to production.
```

Create seven steps.

### 01 — Understand

Requirements and business context.

### 02 — Analyze

Investigate application, API, data, and integration behavior.

### 03 — Design

Define the technical approach.

### 04 — Build

Implement the solution.

### 05 — Validate

Testing, SIT, UAT, and debugging.

### 06 — Deploy

Release and production support.

### 07 — Improve

Root cause analysis, reliability, and optimization.

Use Framer Motion for sequential reveal.

---

# 30. EDUCATION

Show:

### BINUS University

Bachelor Degree — Information System

02/2023 — 01/2025

GPA:

3.89 / 4.00

---

### Vocational School IPB University

Diploma — Informatics Management

07/2019 — 08/2022

GPA:

3.74 / 4.00

---

### SMA Negeri 1 Siborongborong

Science

07/2016 — 04/2019

Do not make education more prominent than professional experience.

---

# 31. CONTACT

Final section should be visually strong.

Headline:

```text
Have a system
worth building?
```

Supporting text:

```text
Let's talk about software, systems,
integrations, or the next product.
```

Buttons:

```text
Email Me
LinkedIn
Download CV
```

Contact:

```text
freddy.oktoniyer@gmail.com

Tangerang, Indonesia
```

---

# 32. FOOTER

Minimal footer.

Example:

```text
© 2026 Freddy Oktoniyer S

Backend / Full Stack Software Engineer

Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
```

Do not include unnecessary links.

---

# 33. COMPONENT ARCHITECTURE

Components should be small and composable.

Avoid giant components such as:

```text
page.tsx = 1000 lines
```

Instead:

```text
page.tsx
 ├── Navbar
 ├── Hero
 ├── About
 ├── SelectedWork
 ├── ExperienceTimeline
 ├── EngineeringCapabilities
 ├── SystemThinking
 ├── ProblemSolving
 ├── Education
 ├── Contact
 └── Footer
```

Each major section should have its own component.

---

# 34. REUSABLE UI COMPONENTS

Create:

```text
Button
Badge
SectionHeading
Container
Divider
Reveal
```

Example:

```tsx
<SectionHeading
  eyebrow="01 / ABOUT"
  title="Engineering across the system."
  description="..."
/>
```

Keep the API simple.

---

# 35. REVEAL COMPONENT

Create reusable:

```tsx
<Reveal>
  {children}
</Reveal>
```

Use Framer Motion.

Requirements:

* Fade in
* Slight vertical movement
* Viewport triggered
* Runs once
* Respects reduced motion

---

# 36. BUTTON COMPONENT

Create reusable button variants:

```text
primary
secondary
ghost
```

Example:

```tsx
<Button variant="primary">
  View Selected Work
</Button>
```

Do not duplicate button styling.

---

# 37. DATA FILES

Use:

```text
data/profile.ts
data/experience.ts
data/projects.ts
data/skills.ts
data/education.ts
data/navigation.ts
```

Example:

```typescript
export const experiences: Experience[] = [
  {
    company: "VIVERE GROUP",
    role: "Fullstack Developer",
    period: "09/2024 — Present",
    description:
      "Develop and maintain backend services and RESTful APIs supporting mobile applications and enterprise business processes.",
    highlights: [
      "Develop backend services using Golang",
      "Design and maintain RESTful APIs",
      "Integrate backend services with SAP through OData APIs",
      "Support SIT and UAT",
      "Investigate production issues and perform root cause analysis",
    ],
    technologies: [
      "Golang",
      "Laravel",
      "REST API",
      "SAP",
      "OData",
      "SQL",
    ],
  },
]
```

---

# 38. IMAGE STRATEGY

Do not depend on random stock images.

The portfolio should work even without a personal photograph.

Preferred visual assets:

* System diagrams
* Technical abstract visuals
* Project screenshots if available
* UI screenshots if available
* Architecture visualizations

If no real project screenshots exist, use abstract technical compositions rather than fake product screenshots.

---

# 39. PROFILE PHOTO

Do not make a profile photo mandatory.

The portfolio should remain visually strong without one.

If a profile photo is later provided:

Use it subtly.

Do not create a huge circular avatar occupying the hero.

---

# 40. RESPONSIVE DESIGN

Breakpoints should be designed intentionally.

Desktop:

```text
>= 1280px
```

Tablet:

```text
768px - 1279px
```

Mobile:

```text
< 768px
```

Mobile should NOT simply be a collapsed desktop.

Redesign layouts where necessary.

---

# 41. MOBILE NAVIGATION

Desktop:

```text
FREDDY       About Work Experience Engineering Contact
```

Mobile:

```text
FREDDY                       ☰
```

Opening menu:

```text
About
Work
Experience
Engineering
Education
Contact
```

Use Framer Motion for menu animation.

Prevent background scroll when menu is open.

---

# 42. ACCESSIBILITY

Must include:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* ARIA labels where needed
* Accessible buttons
* Accessible navigation
* Reduced motion support
* Sufficient color contrast

Never use a `<div>` as a button when a `<button>` is appropriate.

---

# 43. SEO

Implement:

```text
metadata
robots.ts
sitemap.ts
Open Graph
Twitter metadata
```

Title:

```text
Freddy Oktoniyer S — Backend / Full Stack Software Engineer
```

Description:

```text
Portfolio of Freddy Oktoniyer S, a Backend / Full Stack Software Engineer experienced in Golang, Laravel, REST APIs, mobile applications, enterprise integrations, SAP, and database-driven systems.
```

Use structured metadata where appropriate.

---

# 44. PERFORMANCE

The portfolio itself should demonstrate engineering quality.

Requirements:

* Server Components by default
* Minimal client-side JavaScript
* Optimized assets
* Lazy load non-critical images
* Avoid unnecessary dependencies
* Avoid large animation libraries beyond Framer Motion
* Avoid huge background videos
* Avoid autoplay video
* Avoid unnecessary API calls
* Avoid external runtime dependencies where possible

Target:

Excellent Lighthouse performance.

---

# 45. SECURITY

Do not expose:

* API keys
* Secrets
* Environment variables
* Private repository URLs
* Internal company information
* Internal infrastructure details
* Sensitive business data

Never place secrets in client-side code.

---

# 46. CODE QUALITY

Follow:

* Clean Code principles
* SOLID where appropriate
* DRY
* Composition over duplication
* Strong TypeScript typing
* Small reusable components
* Clear naming
* No dead code
* No commented-out old implementations
* No unnecessary abstraction

Do not over-engineer.

A portfolio does not need a complicated architecture.

---

# 47. ESLINT

Configure ESLint properly.

The final code must have no lint errors.

Run:

```bash
npm run lint
```

and fix all errors.

Do not disable ESLint rules simply to make the build pass.

---

# 48. BUILD VALIDATION

Before considering the implementation complete, run:

```bash
npm run lint
npm run build
```

Both must pass.

If the project includes tests:

```bash
npm test
```

Run them as well.

---

# 49. TYPESCRIPT VALIDATION

Run:

```bash
npx tsc --noEmit
```

There should be no TypeScript errors.

Do not solve TypeScript errors using:

```typescript
as any
```

unless absolutely necessary.

---

# 50. PACKAGE INSTALLATION

Initialize the project if necessary.

Expected dependencies:

```bash
npm install next react react-dom
npm install framer-motion lucide-react clsx tailwind-merge
```

Install TypeScript types as needed.

Do not install libraries that are not necessary.

---

# 51. NEXT.JS CONFIGURATION

Use a clean:

```text
next.config.ts
```

Do not add experimental flags unless there is a real reason.

Keep configuration minimal.

---

# 52. ENVIRONMENT VARIABLES

This portfolio should ideally require no environment variables.

Do not introduce backend/API dependencies unless specifically required.

The website should be deployable as a static-like Next.js application.

---

# 53. NO DATABASE

Do NOT create a database.

Do NOT create an authentication system.

Do NOT create a CMS.

Do NOT create an API backend.

This is a personal portfolio website.

Keep the architecture simple.

---

# 54. NO CONTACT FORM BACKEND

For the first version, use:

```text
mailto:
```

for email.

Use LinkedIn for professional contact.

Do not create an unnecessary backend just for a contact form.

---

# 55. DOWNLOAD CV

Place the CV in:

```text
public/resume/Freddy-Oktoniyer-S-CV.pdf
```

Button:

```text
Download CV
```

Link:

```text
/resume/Freddy-Oktoniyer-S-CV.pdf
```

Use:

```html
download
```

when appropriate.

Do not rename the CV content.

---

# 56. URL STRUCTURE

The first version can be a single-page portfolio:

```text
/
```

Use anchor sections:

```text
/#about
/#work
/#experience
/#engineering
/#education
/#contact
```

Do not create unnecessary routes.

If detailed project case studies are later added, then introduce:

```text
/work/[slug]
```

---

# 57. VISUAL HIERARCHY

The order of visual importance should be:

1. Identity
2. Professional positioning
3. Engineering capability
4. Selected work
5. VIVERE experience
6. Career progression
7. System thinking
8. Technology
9. Education
10. Contact

Do not allow the technology list to visually dominate the portfolio.

---

# 58. SENIORITY SIGNALS

The website should communicate seniority through:

## 1. System thinking

Show relationships between mobile, API, backend, database, and enterprise systems.

## 2. Problem solving

Show how problems are analyzed and solved.

## 3. Production awareness

Highlight troubleshooting, testing, deployment, and production support.

## 4. Business understanding

Show requirements analysis and business-process understanding.

## 5. Integration

Highlight SAP / OData and enterprise system integration.

## 6. Reliability

Highlight validation, error handling, performance, and stability.

Do NOT simply write:

```text
Senior Developer
```

everywhere.

Let the content demonstrate seniority.

---

# 59. DO NOT USE THESE COMMON PORTFOLIO PATTERNS

Avoid:

```text
Hi, I'm Freddy 👋
I'm a passionate developer.
```

Avoid:

```text
I love coding and solving problems.
```

Avoid:

```text
10+ technologies
50+ projects
100+ commits
```

unless those metrics are verified.

Avoid:

```text
★★★★★ Kotlin
★★★★★ Golang
```

Avoid:

```text
Expert / Intermediate / Beginner
```

unless explicitly required.

Avoid giant skill clouds.

Avoid fake project screenshots.

Avoid fake statistics.

---

# 60. PREMIUM DETAILS

Add subtle details that make the website feel polished.

Examples:

```text
01 / ABOUT
02 / WORK
03 / EXPERIENCE
04 / ENGINEERING
05 / CONTACT
```

Use monospace labels.

Use thin divider lines.

Use subtle grid background.

Use subtle noise texture if performance remains good.

Use tiny status indicators.

Example:

```text
● SYSTEM ONLINE
```

But do not make it look like a fake monitoring dashboard.

---

# 61. BACKGROUND

Use subtle technical background.

Possible:

```text
radial-gradient
grid pattern
noise texture
```

Do not make the background visually dominant.

A very subtle grid can be used behind the hero:

```text
+   +   +   +   +
  +   +   +   +
+   +   +   +   +
```

Keep opacity extremely low.

---

# 62. INTERACTION DESIGN

Every interactive element must have a purpose.

Examples:

Project card:

```text
hover → card elevation + border accent
```

Architecture:

```text
hover layer → highlight layer
```

Timeline:

```text
scroll → reveal
```

Navigation:

```text
scroll → active section
```

Do not add interaction simply because it is technically possible.

---

# 63. CONTENT TONE

Writing style:

* Professional
* Clear
* Technical
* Confident
* Concise
* Mature

Avoid:

* Marketing hype
* Excessive adjectives
* Corporate buzzwords
* Fake claims
* Overly casual language

Prefer:

> "Developed and maintained RESTful APIs supporting mobile applications and business processes."

Instead of:

> "Built amazing next-generation APIs that transformed the business."

---

# 64. COPYWRITING STYLE

Use strong technical language.

Good:

```text
Designing and maintaining backend services that connect
mobile applications with business and enterprise systems.
```

Good:

```text
Investigating production issues across application,
API, business logic, data processing, and integration layers.
```

Good:

```text
Translating business requirements into maintainable
technical solutions and service workflows.
```

Avoid generic:

```text
I create awesome digital experiences.
```

---

# 65. ARCHITECTURE VISUAL STYLE

Architecture diagrams should look like engineering documentation.

Use:

* Thin borders
* Monospace labels
* Directional arrows
* Minimal color
* Accent only on active layer
* Smooth animation

Do not make them look like colorful startup infographics.

---

# 66. PROJECT DETAIL STYLE

If project details are expanded, use:

```text
OVERVIEW

ROLE

ENGINEERING FOCUS

TECHNOLOGIES

SYSTEM FLOW

CHALLENGE

APPROACH

RESULT
```

Only populate sections when information is actually available.

Never fabricate "Result".

If no measurable result exists:

Use:

```text
Focus:
Improving reliability, maintainability,
integration, and business workflow support.
```

---

# 67. CURRENT VIVERE SECTION

This section should clearly demonstrate the broadest engineering responsibility.

Suggested layout:

```text
VIVERE GROUP
Fullstack Developer
09/2024 — Present

Backend
Golang · Laravel

API
REST · Validation · Authentication

Integration
SAP · OData

Mobile
Android · iOS

Engineering
Testing · Troubleshooting · Production Support
```

Then show the architecture.

---

# 68. GARUDA YAMATO SECTION

Emphasize the combination of:

```text
Application Development
+
Enterprise Integration
+
Application Support
```

Key technologies:

```text
Laravel
CodeIgniter 3
Vue.js
Angular
JavaScript
Go
Flutter
SQL Server
SAP
UiPath
```

Mention:

```text
34 UiPath RPA processes
```

because it is explicitly documented in the CV.

---

# 69. EDUCATION DESIGN

Use a compact timeline.

Do not use large GPA graphics.

Instead:

```text
BINUS University
Bachelor Degree — Information System

GPA 3.89 / 4.00
2023 — 2025
```

The GPA can be a small accent detail.

---

# 70. FOOTER TECH STACK

Small footer text:

```text
Designed & engineered with
Next.js · TypeScript · Tailwind CSS · Framer Motion
```

This subtly demonstrates the engineering stack used to build the portfolio.

---

# 71. FINAL FILE CHECK

Before finishing, ensure these files exist:

```text
app/layout.tsx
app/page.tsx
app/globals.css

components/layout/Navbar.tsx
components/layout/Footer.tsx
components/layout/Container.tsx

components/hero/Hero.tsx
components/hero/HeroSystemVisual.tsx
components/hero/HeroActions.tsx

components/about/About.tsx
components/about/EngineeringPhilosophy.tsx

components/work/SelectedWork.tsx
components/work/ProjectCard.tsx

components/experience/ExperienceTimeline.tsx
components/experience/ExperienceItem.tsx

components/engineering/EngineeringCapabilities.tsx
components/engineering/SystemThinking.tsx
components/engineering/ArchitectureDiagram.tsx
components/engineering/ProblemSolving.tsx

components/education/Education.tsx

components/contact/Contact.tsx
components/contact/SocialLinks.tsx

components/ui/Button.tsx
components/ui/Badge.tsx
components/ui/SectionHeading.tsx
components/ui/Reveal.tsx
components/ui/Divider.tsx

data/profile.ts
data/experience.ts
data/projects.ts
data/skills.ts
data/education.ts
data/navigation.ts

types/portfolio.ts

lib/utils.ts
lib/constants.ts

public/resume/Freddy-Oktoniyer-S-CV.pdf
```

---

# 72. IMPLEMENTATION ORDER

Implement in this order:

## Phase 1

Project initialization

* Next.js
* TypeScript
* Tailwind
* Framer Motion
* ESLint

## Phase 2

Design system

* Colors
* Typography
* Container
* Buttons
* Badges
* Section headings
* Dividers

## Phase 3

Layout

* Navbar
* Footer
* Responsive navigation

## Phase 4

Hero

* Hero
* CTA
* System visualization

## Phase 5

About

* About
* Engineering philosophy

## Phase 6

Selected Work

* Project cards
* Project interactions

## Phase 7

Experience

* Timeline
* VIVERE architecture
* Garuda Yamato section

## Phase 8

Engineering

* Capabilities
* System thinking
* Problem solving

## Phase 9

Education

## Phase 10

Contact

## Phase 11

SEO

## Phase 12

Performance / accessibility / responsive QA

---

# 73. DEVELOPMENT COMMANDS

Use:

```bash
npm install
npm run dev
```

Validation:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

All must pass.

---

# 74. CLAUDE CODE WORKFLOW

When working on this project:

1. Inspect the repository before changing anything.
2. Read this `PORTFOLIO_SPEC.md`.
3. Inspect the existing package configuration.
4. Reuse existing project configuration where reasonable.
5. Do not overwrite working code unnecessarily.
6. Build the foundation first.
7. Implement section by section.
8. Run TypeScript validation.
9. Run ESLint.
10. Run production build.
11. Fix all errors.
12. Review mobile responsiveness.
13. Review accessibility.
14. Review visual hierarchy.
15. Remove unnecessary complexity.
16. Ensure no fabricated content exists.

Do not stop after generating a basic static page.

Continue until the implementation satisfies the quality bar defined in this specification.

---

# 75. CLAUDE CODE UI/UX REVIEW

After implementation, perform a self-review.

Check:

### Hero

* Is the professional identity obvious?
* Does it feel senior?
* Is the system visual useful?
* Are CTAs clear?

### Work

* Do projects feel like real engineering work?
* Is the information hierarchy strong?
* Are there any invented claims?

### Experience

* Is VIVERE clearly the strongest current experience?
* Is the career progression understandable?
* Are responsibilities concise?

### Engineering

* Does the site communicate system thinking?
* Are APIs, backend, mobile, databases, and integrations visible?
* Does it demonstrate production awareness?

### Visual

* Is spacing consistent?
* Is typography professional?
* Is the accent color restrained?
* Is there too much animation?
* Is the page too dense?

### Mobile

* Does everything fit?
* Are cards readable?
* Does navigation work?
* Are diagrams usable?
* Are buttons touch-friendly?

---

# 76. FINAL QUALITY STANDARD

The final result should look like something a professional software engineer could send directly to:

* CTO
* VP Engineering
* Engineering Manager
* Senior Technical Recruiter

It should NOT look like:

* A bootcamp portfolio
* A junior developer template
* A generic Tailwind landing page
* A Dribbble-only visual experiment
* A collection of technology badges

The strongest impression should be:

> "This person understands software systems."

Not:

> "This person knows many programming languages."

---

# 77. FINAL INSTRUCTION TO CLAUDE CODE

Build the portfolio now.

Do not ask for confirmation for every small design decision.

Use the specification as the source of truth.

Make reasonable engineering and design decisions independently.

If something is not specified:

1. Prefer simplicity.
2. Prefer maintainability.
3. Prefer accessibility.
4. Prefer performance.
5. Prefer a premium engineering aesthetic.
6. Never invent professional achievements.

The final website must be:

* Production quality
* Responsive
* Accessible
* SEO-ready
* Type-safe
* Maintainable
* Fast
* Visually premium
* Technically credible

The website should make Freddy's experience and engineering thinking immediately understandable within the first 10 seconds.
