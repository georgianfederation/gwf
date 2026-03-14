# Wrestling Federation Website - Master Plan

## 1. Project Overview
A premium, professional web platform for the Wrestling Federation, providing real-time tournament analytics, athlete profiles, match results, and news. The site is bilingual (Georgian/English) with Georgian as the primary language and features a robust management dashboard.

## 2. Technical Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Framer Motion
- **Database:** Neon (PostgreSQL)
- **ORM:** Prisma
- **Localization:** `next-intl`
- **Deployment:** Vercel
- **Icons:** Lucide-React

## 3. Sprint Plan & Task List

### Sprint 1: Foundation & Design Implementation (COMPLETE)
- [x] **Project Initialization:** Next.js 16 setup with TS/Tailwind v4.
- [x] **Localization Engine:** `next-intl` setup with `/[locale]` routing and KA/EN support.
- [x] **Global Styling:** Integrated design tokens, fonts (Noto Sans Georgian, Inter, Roboto Condensed), and dark theme.
- [x] **Database Schema:** Prisma models for Athletes, Tournaments, Matches, and Blog.
- [x] **Homepage (Full Stitch Implementation):**
    - [x] **Header:** Responsive navigation with language switcher.
    - [x] **Hero Section:** Animated impact header with live status.
    - [x] **Stats Overview:** Dynamic cards for federation growth metrics.
    - [x] **Tournament Analytics:** Performance scoreboard table with filtering.
    - [x] **Upcoming Events:** Calendar of championships with registration CTAs.
    - [x] **News Section:** Latest blog previews with category tags.
    - [x] **1x1 Match Results:** Recent tournament results carousel.
    - [x] **Partners:** Federation sponsor showcase.
    - [x] **Footer:** Detailed navigation and social hub.

### Sprint 2: "Iron Grip" Admin Dashboard & Security
- [ ] **Secure Auth Foundation:**
    - [ ] Next-Auth v5 implementation with `super_admin`, `admin`, and `editor` roles.
    - [ ] Bootstrap logic for the first `super_admin`.
    - [ ] MFA setup for Admin/SuperAdmin roles.
    - [ ] Server-side RBAC guards and Editor permission toggles (JSON).
- [ ] **Audit & Governance:**
    - [ ] Audit Log system capturing all sensitive actions and metadata diffs.
    - [ ] Editor function management (Enable/Disable specific CMS areas).
- [ ] **Athletes & Stats Control:**
    - [ ] Full Athlete Directory CRUD (KA/EN).
    - [ ] Federation Growth Metrics override.
    - [ ] Hero Section "Next Major Event" & "World Rank" management.
- [ ] **Competition & Content Engine:**
    - [ ] Tournament Results Scoreboard (Medalist management).
    - [ ] Scheduled Events Calendar & Registration toggle.
    - [ ] 1x1 Match Highlights manager.
    - [ ] Blog/News CMS & Partner logo uploader.

### Sprint 3: Detailed Features & Analytics
- [ ] **Athlete Directory:** Advanced filtering (weight, style, ranking).
- [ ] **Dynamic Brackets:** Real-time bracket rendering for live tournaments.
- [ ] **Live Match Integration:** Websocket or polling for real-time score updates.
- [ ] **Media Gallery:** Video highlights and photo archives.

### Sprint 4: Polish, QA & Deployment
- [ ] **Performance Audit:** Image optimization and bundle size reduction.
- [ ] **Cross-browser/Device Testing:** Mobile responsiveness QA.
- [ ] **SEO & Metadata:** Localized SEO tags for all pages.
- [ ] **Vercel Deployment:** Production environment configuration.

## 4. CMS Content Model (Architecture)
- **Athletes:** Multi-language strings for Name/Bio.
- **Tournaments:** Date-time management and relationship to Matches.
- **Matches:** Status tracking (Upcoming, Live, Finished) and scorecard logic.
- **Site Settings:** Global manages for CTA text, contact info, and SEO.
