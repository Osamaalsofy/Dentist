# مجمع اليقين لطب وتقويم الأسنان | DentalOS SaaS Platform

> **DentalOS** is a cinematic, production-grade SaaS website template tailored for premium specialized dental and orthodontic medical centers in Saudi Arabia and the GCC. Built RTL-first with seamless English language switching, customizable design tokens, and a plug-and-play clinic configuration engine.

---

## 🌟 Key Highlights & Features

### 1. ⚙️ Reusable Multi-Tenant SaaS Architecture (`clinic.config.ts`)
- **Single Engine, Any Clinic**: Launch new clinic brands without touching UI code. Simply provide a new configuration file defining:
  - Clinic branding (names in Arabic/English, taglines, license numbers, hotlines, WhatsApp numbers).
  - Design tokens (primary brand teal, champagne gold accents, warm ivory background, typography).
  - Treatment catalog (pricing, duration, detailed clinical process, FAQs).
  - Medical team profiles (credentials, specialties, board certifications, surgery years).
  - Before & After case studies (porcelain veneers, clear aligners, immediate implants, laser whitening).
  - Branch network (geolocations, cities, street addresses, direct phone numbers).

### 2. 🎬 Cinematic Hero Section
- High-definition portrait of Saudi patients displaying healthy, aligned smiles.
- Unobstructed composition with the content division anchored smoothly to the right, letting the clinic imagery shine.
- Directional atmospheric scrim for clear typography and contrast.
- One-click Consultation Booking and instant direct hotline calling.
- Clinical trust indicators: sub-micron 3D digital scanning, Saudi Board certified consultants, and 0% installment plans (Tabby & Tamara).

### 3. 🗓️ Intelligent Multi-Step Appointment Booking System
- **Step-by-step clinical scheduling**:
  1. Branch & treatment selection with transparent starting fees.
  2. Doctor preference and interactive date/time slot picker.
  3. Patient details with Saudi mobile phone validation (`05xxxxxxxx`).
  4. Instant confirmation with automated WhatsApp dispatch link and booking reference ID.
- Automatically synchronizes new bookings into the internal Front-Desk Receptionist Dashboard.

### 4. 🩺 Interactive Dental Symptom Checker
- Self-assessment tool allowing patients to choose their dental symptoms (toothache, chipped tooth, crooked teeth, discoloration, missing tooth).
- Instant triage evaluation: clinical urgency rating, root cause explanation, and recommended specialty treatments with 1-click booking pre-fill.

### 5. ✨ Split-Screen Before & After Slider
- Interactive vertical drag comparison slider for real clinical outcomes.
- Category filters for Porcelain Veneers, Laser Teeth Whitening, Dental Implants, and Clear Orthodontics.

### 6. 👨‍⚕️ Interactive Doctors Stage
- Dynamic consultant showcase with experience counters, spoken languages, and university degrees.
- Instant booking trigger that pre-selects the doctor in the appointment workflow.

### 7. 📍 Saudi Branches & Geographic Reach
- Interactive branch switcher covering Riyadh (Olaya & Hittin), Jeddah (Rawdah), and Khobar (Corniche).
- Integrated Google Maps directions, clinic hours, and direct branch calling.

### 8. 🎛️ Live SaaS Clinic Customizer Drawer
- Live in-app configurator to test multiple clinic brands and themes in real-time.
- Switch between presets (Al-Yaqeen Specialized, Pearl Dental Lounge, Elite Orthodontics).
- Live token color pickers and instant `clinic.config.json` export.

### 9. 📋 SaaS Front-Desk Reception Leads Dashboard
- Simulated reception interface tracking new patient booking inquiries, appointment statuses (New, Contacted, Confirmed, Completed), notes, and direct WhatsApp links.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom Arabic typographic scale
- **Typography**: `IBM Plex Sans Arabic`, `Tajawal`, and `Plus Jakarta Sans` via Google Fonts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- `npm` or `yarn` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dental-saas-website.git

# Navigate into the project directory
cd dental-saas-website

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
# Compile and bundle for production
npm run build

# Preview the production build locally
npm run preview
```

The compiled static assets will be output to the `dist/` directory, ready to deploy to any hosting provider.

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with RTL Arabic setup & Google Fonts
├── metadata.json                # Project metadata & platform configuration
├── package.json                 # Dependencies and build scripts
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── src/
│   ├── main.tsx                 # React DOM root render
│   ├── App.tsx                  # Master application orchestrator
│   ├── index.css                # Global design tokens and Tailwind imports
│   ├── types/
│   │   └── clinic.ts            # Type definitions for clinics, doctors, services, bookings
│   ├── config/
│   │   └── clinic.config.ts     # Default clinic configuration & presets
│   ├── context/
│   │   └── ClinicContext.tsx    # State management for clinic config, language, bookings
│   ├── assets/
│   │   └── images/              # High-fidelity clinic and treatment images
│   └── components/
│       ├── Navbar.tsx           # Floating glass navbar with RTL/LTR language toggle
│       ├── ClinicLogo.tsx       # Al-Yaqeen vector brand mark
│       ├── Hero.tsx             # Cinematic hero section with couple imagery & right-aligned text
│       ├── QuickReservationSection.tsx # Express appointment bar
│       ├── WhyUs.tsx            # Interactive storytelling feature cards
│       ├── ServicesSection.tsx  # 8+ clinical service cards with pricing
│       ├── ServiceModal.tsx     # Comprehensive treatment detail modal
│       ├── DoctorsSection.tsx   # Doctors showcase stage
│       ├── BeforeAfterSection.tsx # Split comparison drag slider
│       ├── PatientJourney.tsx   # 4-stage patient treatment timeline
│       ├── SymptomChecker.tsx   # Interactive patient symptom checker
│       ├── TestimonialsSection.tsx # Verified patient reviews
│       ├── BookingSection.tsx   # Multi-step appointment form with Saudi phone validation
│       ├── BranchesSection.tsx  # Multi-city branch locator & map links
│       ├── FaqSection.tsx       # Medical and insurance FAQ accordion
│       ├── TechnologySection.tsx # Architectural gallery & clinical equipment
│       ├── TrustStrip.tsx       # Accreditation badges & insurance network
│       ├── FinalCta.tsx         # Conversion banner
│       ├── Footer.tsx           # Comprehensive footer with license & legal info
│       ├── MobileBottomBar.tsx  # Sticky bottom action bar for mobile devices
│       ├── SaaSConfigDrawer.tsx # Real-time SaaS theme customizer drawer
│       ├── ReceptionDashboardModal.tsx # Reception desk appointment tracking
│       └── Toast.tsx            # Floating feedback alerts
```

---

## 🌐 Deploying to GitHub & Hosting

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: DentalOS SaaS clinic platform"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Hosting Options

- **Vercel**: Import the GitHub repository; Vercel automatically detects Vite. Build command: `npm run build`, Output directory: `dist`.
- **Netlify**: Connect your repository. Build command: `npm run build`, Publish directory: `dist`.
- **Cloud Run / Docker**: Static container serving the `dist/` directory with Nginx or Caddy.

---

## 📄 License

This project is licensed under the Apache-2.0 License.
