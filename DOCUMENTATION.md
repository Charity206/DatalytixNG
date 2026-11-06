# Datalytix NG — Project Documentation & Architecture Guide

> **Project:** Datalytix NG  
> **Framework:** React 19 + Vite 8 + Tailwind CSS v4  
> **Brand Palette:** `#3CB5D0` (Electric Cyan / Brand Highlight), `#0A2540` / `#040814` (Dark Navy Blue for Icons & Depth), `#FFFFFF` (Crisp White)

---

## 1. Executive Summary & Tech Stack

This project is the enterprise web application for **Datalytix NG** — an IT Solutions Delivery, Data Management, Business Intelligence, and Cloud Architecture company.

### Design Standards: 100% Authentic, Zero AI Slop
* **No fake metrics**: Stripped out fabricated proof numbers and generic stats.
* **No artificial clutter**: Removed pulsing dots (`animate-ping`), fake floating badges, giant watermark numbers, and colored blur fog blobs.
* **True to real design**: Clean, bold photography occupying substantial viewport height, high-contrast typography, and authentic layout structures.

### Core Technologies
* **React 19**: Modern functional component architecture with hooks (`useState`, `useEffect`, `useRef`).
* **Vite 8**: Ultra-fast module bundler with instant Hot Module Replacement.
* **Tailwind CSS v4**: Engine utilizing `@tailwindcss/vite` and `@import "tailwindcss";` with CSS-first configuration and `@theme` variables.

---

## 2. Global Color System & Roles

| Color / Role | Hex / Value | Usage & Meaning |
| :--- | :--- | :--- |
| **Primary Brand Accent** | `#3CB5D0` (Cyan) | Background for the About Us section, brand underlines, active indicators, and highlight accents. |
| **Dark Blue (Icons & Depth)** | `#0A2540` | Used for solid icon pods, bold headlines, and high-contrast typography. |
| **Deep Space Navy** | `#040814` | Atmospheric backdrop for the Hero slider and dark overlays. |
| **Clean White & Light Slate** | `#FFFFFF` / `slate-50` | Primary reading surface for sections and cards to ensure optimal contrast and readability. |

---

## 3. Detailed Component Breakdown & Functionality

### Component 1: `Header.jsx` (Sticky Navigation Bar)
* **Location:** [`src/Components/Header.jsx`](./src/Components/Header.jsx)
* **Features:**
  - **Left:** Real logo asset (`datalytix-logo.png`) with smooth hover micro-zoom.
  - **Center:** Navigation links (`Home`, `Who We Are`, `Services`, `Contact Us`) with animated `#3CB5D0` bottom line indicators on hover.
  - **Right:** CSS Grid (`grid-rows-2`) stacking:
    - **Top Row:** Physical office address with location pin icon in dark blue.
    - **Bottom Row:** Clickable phone number link (`tel:...`) with telephone icon in dark blue.
  - `sticky top-0 z-50`: Locks to the top of the viewport when scrolling with frosted glass transparency (`backdrop-blur-md bg-white/95`).
  - **Mobile Menu Drawer**: Responsive toggle button that opens an animated collapsible drawer containing all links and contact information on small screens.

---

### Component 2: `Hero.jsx` (5-Slide Showcase with Data Waves)
* **Location:** [`src/Components/Hero.jsx`](./src/Components/Hero.jsx)
* **Features:**
  - Deep space background (`#040814`) with layered dark blue gradient overlays to ensure text is always readable over photos.
  - Symmetrical **Left and Right Harmonic Data Waves** (custom SVG cubic-bezier ribbons) framing the central text with clean particle nodes.
  - Central ambient blue glow (`bg-blue-600/15 blur-[140px]`).
  - Clean slide topic badge, bold headline, and descriptive subtitle without gimmicky pulsing dots.
  - Minimalist bottom slider controls with arrow buttons, slide numbers (`01 / 05`), and active progress indicators.
  - **5-Slide Engine**: Cycles through imported assets (`IT-IMAGES1.jpg`, `IT-IMAGES2.jpg`, etc.) with crossfading and a slow Ken Burns subtle zoom effect.
  - **Auto-Play with Pause-on-Hover**: Automatically advances every 6 seconds, pausing when the mouse enters so visitors can read at their own pace.
  - **Mobile Touch Swipe**: Listens for touch start/move/end coordinates; users can swipe left or right on mobile to change slides.
  - **Zero CTA Buttons**: Intentionally uncluttered without buttons so the typography, imagery, and waves stand out cleanly.

---

### Component 3: `Partners.jsx` (Infinite Auto-Scroll Carousel)
* **Location:** [`src/Components/Partners.jsx`](./src/Components/Partners.jsx)
* **Features:**
  - Clean heading: "Our Partners" with an accent divider line in `#3CB5D0`.
  - A moving ribbon of 8 partner logos: *Nimble Storage, HP, Weavy, McAfee, Symantec, Oracle, AVG, Commvault*.
  - Left and right soft edge fade masks so logos smoothly appear and disappear at the screen edges.
  - **Size Normalization**: Logos of different original shapes and aspect ratios are fitted inside standardized pure white card capsules (`w-48 sm:w-56 h-22 sm:h-24`) using `object-contain`. This ensures every logo renders with identical visual balance.
  - **Continuous Infinite Marquee (`.animate-marquee`)**: Infinite horizontal translation (`translateX(0%)` to `-50%`) with zero jump or stutter.
  - **No Scrollbar**: Operates without any track bar or manual scrollbars.
  - **Pause on Hover**: Hovering over any partner logo smoothly pauses the marquee so visitors can inspect the brand.

---

### Component 4: `WhoWeAre.jsx` (Large Viewport-Height Dual Perspective)
* **Location:** [`src/Components/WhoWeAre.jsx`](./src/Components/WhoWeAre.jsx)
* **Features:**
  - **Left Column:** A large viewport-height dual-image stage (`~75vh` height, `max-w-[1500px]` width).
    - Image A (Primary large photo) + Image B (Secondary overlapping photo with 4px border).
    - Smooth hover swap: Hovering on the overlapping photo fluidly brings it to the primary position.
  - **Right Column:** 
    - Small blue accent bar + `WHO WE ARE`.
    - Editorial headline: "Information Technology solutions Delivery".
    - Narrative copy detailing Tier-1 certifications and data infrastructure competencies.
    - Clean 2-column checklist with solid dark circular checkmark badges matching the design reference.

---

### Component 5: `AboutUs.jsx` (3-Cards Architectural Section)
* **Location:** [`src/Components/AboutUs.jsx`](./src/Components/AboutUs.jsx)
* **Features:**
  - **Background:** Rich `#3CB5D0` (Electric Cyan) section backdrop.
  - **Header:** Clean dark blue (`#0A2540`) title and subtitle.
  - **3 Pure White Cards Grid:**
    - High-contrast pure white cards with soft drop shadows that float cleanly against the cyan background.
    - Custom Dark Blue (`#0A2540`) icon container pods with `#3CB5D0` icons.
    - Authentic, comfortable editorial typography and paragraph formatting directly matching client copy.
    - **Card 1 — Who We Are**: Identity, Tier-1 OEM certifications, and 40+ years combined industry experience.
    - **Card 2 — Our Approach**: Consultative research, competitive advantage, and 3-phased methodology (Analysis, Design, Implementation).
    - **Card 3 — Our Process**: Comprehensive project cycle, continuous communication, deliverables on-time and on-budget, and engineering integrity.

---

## 4. How the Page is Assembled in `App.jsx`

[`src/App.jsx`](./src/App.jsx) structures the top-to-bottom rhythm:

```jsx
<div className="min-h-screen bg-slate-50/40 text-slate-900 flex flex-col antialiased">
  <Header />        {/* Sticky Frosted Header with Logo, Nav & Contact */}
  <main className="flex-1 w-full">
    <Hero />        {/* Deep Dark Blue 5-Slide Slider with Waves */}
    <Partners />    {/* Pure White Infinite Marquee Logo Carousel */}
    <WhoWeAre />    {/* Viewport-Height Dual-Image Hover Swap + 8 Services */}
    <AboutUs />     {/* #3CB5D0 Branded Canvas with 3 Pure White Cards */}
  </main>
</div>
```
