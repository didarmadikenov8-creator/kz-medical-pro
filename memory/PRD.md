# PRD — НПМЦ (Научно-практический медицинский центр) Website

## Original Problem Statement
Create a complete, modern, professional Russian-language website for НПМЦ — Научно-практический медицинский центр in Almaty, Kazakhstan (real address: ул. Суюнбая, 2/10, с. Райымбек, Карасайский район, Алматинская область). A large trustworthy private clinic feel: premium medical design (deep medical blue, turquoise/teal, light blue, white), alternating section backgrounds, large typography, rounded cards, subtle shadows, clean icons, responsive desktop/mobile. Sections: Header (nav + Записаться/WhatsApp), Hero with trust indicators, 15 service cards, large doctor cards with profile modals, diagnostics & equipment image section, symptom navigation, "Как проходит обращение" steps, About, Why choose us, demo reviews, appointment CTA form, contacts with map, footer, floating WhatsApp/call buttons. No invented certifications, awards, experience years, prices, addresses or doctor names. No empty image placeholders.

## User Decisions (from clarification)
1. Appointment form → opens WhatsApp (+7 707 700 0608) with pre-filled message (name, phone, specialist/service). No backend storage.
2. Doctor names → placeholder «Имя Фамилия» + realistic temporary photos, clearly marked as replaceable.
3. Address → real: Улица Суюнбая, 2/10, с. Райымбек, Карасайский район, Алматинская область. Working hours → placeholder «уточняется».

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion (reveals, parallax, modals), lenis (smooth momentum scrolling), sonner (toasts). Fonts self-hosted via @fontsource: Unbounded (display) + Onest (body), full Cyrillic support.
- All medical photos downloaded locally to /app/frontend/public/images/ (20 files) with SmartImg onError fallback — no external image dependency, no empty blocks.
- Backend: template FastAPI/MongoDB untouched (site needs no data layer; WhatsApp-only form flow).
- Single-page landing with anchor navigation handled by lenis (offset -72px) + CSS smooth-scroll fallback.

## Implemented (2026-09-15)
- Header: sticky, logo, 6 anchor links, WhatsApp + Записаться buttons, mobile drawer.
- Hero: navy section, masked line-by-line headline reveal, parallax hero photo, phone card, 3 trust indicators.
- Marquee: slow teal band scrolling 15 service names (pauses on hover).
- Services: 15 cards with lucide icons + «Подробнее» modal (full description, Записаться → prefill form).
- Doctors: 9 large cards (Имя Фамилия, specialty, «Стаж уточняется», description, Подробнее + Записаться), profile modal (photo, education placeholder, expertise chips).
- Diagnostics: navy section, 4 image cards (УЗИ, Лаборатория, Процедурный кабинет, Диагностическое оборудование).
- Symptoms: 7 interactive pills → scroll to form with prefilled specialist.
- Steps: teal section, numbered 01–04 («Как проходит обращение»).
- About: image collage + badge, multidisciplinary story, 4 feature checks.
- WhyUs: 6 cards. Reviews: 6 demo cards with stars + demo disclaimer.
- Appointment: deep-blue section, form (Имя/Телефон/Специалист) → wa.me pre-filled message + success toast, validation.
- Contacts: address/phone/WhatsApp/hours cards + Google Maps embed (resolves real address with pin).
- Footer: brand, nav, services, contacts, social links. Floating WhatsApp + call buttons.

## Verified
- Desktop 1440 & mobile 390 screenshots: no overflow, no broken images, all sections render.
- E2E: form submit builds correct WhatsApp message (verified decoded URL), toast shown; doctor modal opens/closes; map iframe loads real address.

## Backlog (P0/P1/P2)
- P0: Replace placeholder doctor names/photos with real data; add real working hours.
- P1: Real patient reviews; click-to-call tracking; SEO meta per anchor page.
- P2: Online booking with time slots (backend), price list (needs clinic data), clinic photo gallery.

## Next Tasks
1. Real doctor profiles (names, photos, credentials).
2. Real reviews from patients.
3. Confirmed working hours + any additional contacts (Instagram/Telegram links).
