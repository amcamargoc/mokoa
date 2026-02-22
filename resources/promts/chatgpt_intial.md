Perfect. This is exactly the kind of project where **prompt quality = output quality**, especially when using Gemini inside Antigravity.

I’ll give you:

1. ✅ A **structured master prompt** (ready to paste into Gemini)
2. ✅ A **refinement prompt** (for iterating on your existing mobile mockup)
3. ✅ A **QR architecture prompt** (to define the technical approach cleanly)

Everything aligned with your `.md` concept 

---

# 1️⃣ MASTER PROMPT — Generate the Landing Page

Copy this into Gemini (inside Antigravity):

---

### 🔥 PROMPT — MOKAO Landing Page

You are a senior UX/UI designer and frontend architect.

Create a mobile-first landing page for a premium Colombian chocolate brand called **MOKAO**.

This landing page must communicate:

* Direct trade (no unnecessary intermediaries)
* Radical transparency (cost breakdown visible)
* Real partnership with farmers
* Premium quality (Fino de Aroma cacao)
* Sustainable and ethical long-term growth
* European market positioning
* Multilingual support (EN / DE / ES toggle in navbar)

---

## 🌱 Brand Concept

MOKAO is born from passion for Colombian cacao and commitment to real fair trade.

Core philosophy:

* We are partners of the farmer, not resellers.
* Quality over volume.
* Grow well, not fast.
* Every grain and bar tells a story.

Mission:
Eliminate unnecessary intermediaries and create a direct ethical connection between Colombian farmers and the European market.

Vision:
Become the European reference for Colombian-origin chocolate in 5 years.

Tone:
Premium, calm, honest, confident.
No activism tone. No charity tone.
Ethical but elegant.

---

## 🎨 Visual Direction

* Mobile-first layout
* Refined typography (serif for headings, clean sans for body)
* Generous spacing
* Earth tones: deep cacao brown, forest green, cream background
* Subtle gold accent (from packaging)
* Soft shadows, rounded corners
* Minimal but emotional photography

---

## 🧭 Page Structure

### 1. Navbar

* Logo (MOKAO)
* Language switch (EN / DE / ES)
* Shop icon
* Menu icon
  Sticky on scroll.

---

### 2. HERO — “From Seed to Soul”

Title:
From Seed to Soul

Sub:
Experience the deep, complex notes of Maceo, Antioquia. A journey through the heart of Colombian cacao.

CTA:
Meet the Producer

Background:
Emotional cacao plantation image with soft dark overlay.

---

### 3. Meet the Producer

Title:
The Family Behind the Bar

Content:

* Video or thumbnail
* Quote:
  "For three generations, our family has nurtured these hills in Maceo..."
* Location data:
  Maceo, Antioquia
  Altitude: 1,100m
  Region: Magdalena Medio

Add subtle map element or geographic indicator.

---

### 4. Radical Transparency Section

Title:
Every Euro Has a Story

Include:

* Visual breakdown of cost per bar
* Farmer share
* Production
* Logistics
* Sustainability fund
* Company margin

Make it visually interactive or at least visually clear.

Add microcopy:
"We believe transparency builds trust."

---

### 5. Product Section

Title:
70% Fino de Aroma

Include:

* Ingredients
* Tasting notes
* Sustainability badges
* QR explanation:
  Each bar contains a QR code that links to the specific producer and batch.

Explain:
Each production batch may be linked to a different farming family.

---

### 6. Philosophy Section

Short editorial style block:

"We do not aim to grow fast.
We aim to grow right."

Explain long-term partnership mindset.

---

### 7. Footer

Include:

* Mission
* Berlin retail partners (placeholder)
* Contact
* Social links
* Copyright

---

## 🧠 Technical Requirements

* Mobile-first Tailwind layout
* Clean semantic HTML
* Easy language switch structure
* Prepared to dynamically load producer data based on URL query parameter:
  Example:
  mokao.com?batch=2026-01-maceo

Make layout modular so producer data can change dynamically.

---

Deliver:

* Clean HTML structure
* Tailwind classes
* Clean, readable code
* Placeholder images
* Comments in code explaining sections

---

# 2️⃣ REFINEMENT PROMPT — Improve Your Existing Mockup

After Gemini generates the first version, paste this:

---

Improve the previous landing page.

Refinements needed:

1. Make typography more premium and less template-like.
2. Increase vertical spacing between sections.
3. Improve hierarchy in the Transparency section.
4. Make the Producer section more emotional.
5. Improve CTA clarity and contrast.
6. Add subtle animations (fade in, soft hover).
7. Improve language switch UX.
8. Ensure visual alignment between luxury and ethical positioning.

Keep mobile-first.
Do not over-design.
Maintain calm elegance.

---

# 3️⃣ QR ARCHITECTURE PROMPT (Technical Design)

This is important for your scalability.

---

Design a scalable architecture for batch-based QR traceability.

Requirements:

* Each chocolate bar contains a QR code.
* QR includes a batch parameter.
* Example:
  mokao.com?batch=maceo-2026-01

System must:

* Dynamically load producer data
* Support multilingual content
* Allow video embedding per batch
* Be easily extendable

Propose:

* URL structure
* Data model (JSON example)
* Folder structure
* Best approach for static generation (Next.js compatible)
* How to cache efficiently
* How to avoid SEO duplication

Keep solution simple and production-ready.

---

# 💡 Important Strategy Advice

Since you're using Antigravity + Gemini:

1. Generate structure first.
2. Then refine visual tone.
3. Then refine microcopy.
4. Then refine animations.
5. Only then polish colors.

Otherwise you'll get overwhelmed.

---

If you want next, I can:

* Help you design the **data schema for producers**
* Help you structure this for **Next.js + i18n**
* Help you design the **QR batch system properly**
* Or help you refine the **brand positioning text**

What do you want to optimize first — design or architecture?
