You are a senior UX/UI designer and senior frontend architect.

Create a production-ready mobile-first landing page for a premium Colombian chocolate brand called MOKAO.

The project must be built using:

* Next.js (App Router)
* TypeScript
* TailwindCSS
* Node.js (managed via nvm)
* npm

Follow modern best practices and clean modular architecture.

---

# 📁 Project Media Source

All media resources are located in:

```
resources/media
```

This folder contains:

* `reference 1.jpg`
* `reference 2.jpg`
* `reference 3.jpg`
* `Cajas_blanco_verde.pdf`
* `web_mockup.html`


---

## 📦 Asset Handling Requirement

When generating the Next.js project structure:

1. Create a new folder:

```
public/assets/media
```

2. Copy or reference media from:

```
resources/media
```

into the new public structure.


---

##  Design Guidance

### Packaging

* The **green version** from `Cajas_blanco_verde.pdf` is the selected official packaging.
* Extract visual direction from that design:

  * Primary green tone
  * Accent gold
  * Typography feeling
* Use it to define:

  * Buttons
  * Section accents
  * Highlight elements

---

### web_mockup.html

* Use only as layout inspiration.
* Do NOT reuse structure or code.
* Reinterpret design in a cleaner, more modern Next.js + Tailwind way.

---

### Images

* `reference 1.jpg`, `reference 2.jpg`, `reference 3.jpg` can be used for:

  * Hero background
  * Origin section
  * Texture overlays
* Stock images are allowed if necessary, but must feel premium and cohesive.

---

# 🎯 Business Requirements

The landing page must communicate:

* Direct trade
* Real partnership with farmers
* Premium quality (Fino de Aroma cacao)
* Sustainable long-term growth
* Elegant European positioning
* Multilingual structure (EN / DE / ES toggle in navbar)

Tone:
Premium. Calm. Honest. Confident.
No activism tone.
No charity tone.
Ethical but elegant.

---

# 🌱 Brand Concept

Core philosophy:

* We are partners of the farmer, not resellers.
* Quality over volume.
* Grow well, not fast.
* Every grain and bar tells a story.

Mission:
Eliminate unnecessary intermediaries and create a direct ethical connection between Colombian farmers and consumers.

Vision:
Become the European/worldwide reference for Colombian-origin chocolate in 5 years.

---

# 🧭 Landing Page Structure

## 1️⃣ Navbar

* Logo (MOKAO)
* Language switch (EN / DE / ES)
* Shop icon
* Menu icon
* Sticky on scroll

Prepare structure ready for future i18n integration (no full implementation required).

---

## 2️⃣ HERO — “From Seed to Soul”

Title:
From Seed to Soul

Sub:
Experience the deep, complex notes of Maceo, Antioquia. A journey through the heart of Colombian cacao.

CTA:
Discover Our Origin

Background:
Use one of the reference images as full-bleed background.

Foreground:
Floating green packaging mockup (based on PDF design).

Soft gradient overlay.
Premium layered composition.

---

## 3️⃣ Origin Preview Section

Title:
From Maceo to Europe

Short explanation of the producer partnership.

Include:

* Small image (can reuse reference images)
* Short quote
* Location reference
* Subtle decorative map placeholder

CTA:
→ Meet the Family

Link to:

```
/producer
```

Keep landing page simple.
Do NOT implement dynamic routing.

---

## 4️⃣ Product Section

Title:
70% Fino de Aroma

Include:

* Ingredients
* Tasting notes
* Sustainability badges
* Green packaging visuals


---

## 5️⃣ Philosophy Section

Editorial layout:

"We do not aim to grow fast.
We aim to grow right."

Spacious.
Elegant typography.
Minimal design.

---

## 6️⃣ Footer

Include:

* Mission
* Berlin retail partners (placeholder)
* Contact
* Social links
* Copyright

---

# 🧱 Architecture Requirements

Use this structure:

```
app/
  layout.tsx
  page.tsx
  producer/
    page.tsx
components/
  Navbar.tsx
  Hero.tsx
  OriginPreview.tsx
  ProductSection.tsx
  PhilosophySection.tsx
  Footer.tsx
public/
  assets/
    media/
```

Landing page must NOT include:

* Dynamic routing
* Query parameters
* Batch logic
* QR logic

Create a clean placeholder `/producer/page.tsx`.

---

# 🧠 Technical Requirements

* Use Next.js Image component
* Tailwind utility classes
* TypeScript everywhere
* Clean semantic HTML
* Modular reusable components
* Mobile-first design
* Clear comments explaining architectural decisions
* Clean, readable, scalable code

---

# 🚀 Deliverables

Provide:

1. Folder structure
2. `page.tsx`
3. All component files
4. Placeholder `/producer/page.tsx`
5. Tailwind styling
6. Comments explaining reasoning
7. Clear indication of where media files are used

Do not overcomplicate.
Do not introduce backend.
Keep it elegant and production-ready.