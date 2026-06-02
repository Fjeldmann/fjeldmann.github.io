---
name: fjeldmann-design
description: Apply Fjeldmann brand design standards. Only invoke when the user explicitly types /fjeldmann-design — never auto-trigger.
---

# Fjeldmann Design System — Senior UI/UX Engineering Framework

This skill enforces Fjeldmann's brand identity on every frontend output. It combines the Fjeldmann brand bible with a structured design-quality framework to prevent generic, low-taste AI output.

---

## Brand Essence

Fjeldmann builds **human-centered, simple, and enjoyable software**.
Keywords: *menneskelig, grundig, konstruktiv*.
Tagline: *Skarp software med bløde værdier.*

Every visual decision should feel warm, calm, purposeful, and optimistic — never corporate, sterile, or decorative for decoration's sake.

---

## Design Thinking — Do This First

Before writing a single line of code, commit to a clear aesthetic direction:

- **Purpose**: What is this interface doing? Who uses it?
- **Tone**: Fjeldmann sits in the zone of *refined Scandinavian simplicity* — calm, focused, human. Generous negative space. Clarity over decoration.
- **Differentiation**: What makes this section or component feel genuinely Fjeldmann, not generic?

**CRITICAL**: Execute with intentionality. A calm, minimal approach and a rich, textured hero section can both be correct — what matters is that the choice is deliberate and on-brand.

---

## Typography

### Primary — Inter

Used for all headings, paragraphs, body text, UI labels, and long-form content.

| Element        | Weight  | Size                        | Line-height | Letter-spacing | Notes                          |
| -------------- | ------- | --------------------------- | ----------- | -------------- | ------------------------------ |
| H1 (hero)      | 700     | `clamp(2.5rem, 5vw, 4rem)` | `1.1`       | `-0.03em`      | Hero titles                    |
| H1 (page)      | 700     | `3rem`                      | `1.1`       | `-0.02em`      | Page-level titles              |
| H2             | 600     | `2rem`                      | `1.2`       | `-0.02em`      | Section titles                 |
| H3             | 600     | `1.5rem`                    | `1.2`       | `-0.02em`      | Subsections                    |
| H4             | 700     | `1.5rem`                    | `1.2`       | `-0.02em`      | Smaller headers                |
| Paragraph      | Regular | `1rem`                      | `1.6`       | none           | Body copy — comfortable rhythm |
| Paragraph long | Regular | `1.1rem`                    | `1.7`       | none           | Long-form / article body       |
| Links          | Regular | `1rem`                      | —           | none           | Underline on hover             |

Global heading rule: `letter-spacing: -0.02em`. H1 tightens further to `-0.03em`. Never use positive letter-spacing on headings.

### Secondary — Montserrat

Used for: buttons, labels, tags, and UI microtext requiring emphasis.

- **Always Bold (700)**
- **Always uppercase**
- **Letter-spacing: `0.1em`** for buttons; **`0.14em`** for kicker/tagline labels
- Font-size: `0.78rem` for buttons, `0.85rem` for kicker/section labels
- Do not use Montserrat for long-form text or paragraphs

**Do not use**: Geist, Outfit, Cabinet Grotesk, Space Grotesk, or system fonts as a design choice. Inter is the intentional primary typeface — this is the brand, not a default.

---

## Colour Palette

### Core Brand Colours

| Name              | Hex       | CSS Token              | Usage                                      |
| ----------------- | --------- | ---------------------- | ------------------------------------------ |
| **Sort blæk**     | `#222222` | `--black-ink`          | Primary text, dark UI elements             |
| **Mørkegrå**      | `#6D6D6D` | `--dark-gray`          | Secondary text, captions                   |
| **Mellemgrå**     | `#D5D5D5` | `--mid-gray`           | Borders, dividers, subtle lines            |
| **Lysegrå**       | `#F8F8F8` | `--light-gray`         | Cards, alt section fills                   |
| **Hvid sne**      | `#FFFFFF` | `--white-snow`         | True white — use for contrast elements     |
| **Warm bone**     | `#FBFBFA` | `--surface-default`    | **Actual page background** — off-white, not pure white |
| **Surface alt 2** | `#E9ECEF` | `--surface-alt-2`      | Subtle step up from bone for section differentiation |

### Accent Colours

| Name            | Hex       | CSS Token              | Usage                                          |
| --------------- | --------- | ---------------------- | ---------------------------------------------- |
| **Gyldent rav** | `#DC851F` | `--amber`              | Primary accent — CTAs, highlights, key UI      |
| **Varmt sand**  | `#E0BB89` | `--warm-sand`          | Soft accent backgrounds, warm overlays         |
| **Blågran**     | `#025951` | `--blue-fir`           | Secondary accent — use sparingly               |

### Derived Tokens (hover/active states)

| Token                       | Value                       | Usage                              |
| --------------------------- | --------------------------- | ---------------------------------- |
| `--accent-primary-700`      | `#B86A18`                   | Amber hover state                  |
| `--accent-secondary-100`    | `#038F8A`                   | Lighter blue-fir                   |
| `--accent-secondary-200`    | `#027373`                   | Blue-fir hover                     |
| `--accent-secondary-700`    | `#024D4D`                   | Darker blue-fir / footer bg        |
| `--accent-secondary-900`    | `#013F3F`                   | Deepest blue-fir                   |
| `--white-soft`              | `rgba(255,255,255,0.97)`    | Text on dark/coloured backgrounds  |

### Colour Usage Rules

- The actual page background is `#FBFBFA` (`--surface-default`) — a warm bone off-white, not pure `#FFFFFF`. Never use a hard white page background.
- Lead with **soft neutrals and high clarity**. Colour guides attention; it does not fill space.
- Use `#DC851F` (`--amber`) as the **single primary accent** — one CTA accent at a time.
- Text on dark/coloured backgrounds uses `--white-soft` (`rgba(255,255,255,0.97)`), not pure white.
- Never place the orange/coloured logo on greenish (`#025951`-adjacent) backgrounds.
- **Absolutely banned**: AI purple/blue gradients, neon glows, pure `#000000`, oversaturated fills, gradient text.
- Maintain strong contrast for accessibility — at minimum WCAG AA.

---

## Layout & Spatial Composition

- Prefer **soft neutrals with generous negative space** — the "glasset er halvt fyldt" philosophy, expressed visually.
- Use **asymmetry intentionally**: offset headings, pull-quotes that break the grid, images that bleed into adjacent sections.
- CSS Grid is preferred for layout; avoid complex flexbox hacks.
- **Anti-center bias**: do not default to centered hero sections. Left-aligned or asymmetric layouts are the brand's natural posture.
- Mobile-first. Use `min-h-[100dvh]` instead of `h-screen` to prevent iOS Safari layout failures.
- On busy or image-heavy backgrounds, apply a **50% white overlay** before placing coloured logo or text.

---

## Buttons & UI Elements

### Primary Buttons

- Font: **Montserrat Bold**, uppercase, `0.78rem`, `letter-spacing: 0.1em`
- Background: `#DC851F` (`--amber`)
- `border-radius: 5px` (`--radius-btn`)
- Generous padding, soft corners (softness is a brand value)
- Hover: darker amber `#B86A18` (`--accent-primary-700`)
- Tactile active state: subtle lift (`-translate-y-[1px]`)
- Full interactive cycle: default → hover → active → disabled

### Secondary Buttons

- Montserrat Bold, uppercase
- Neutral greys from the core palette
- Clear, undecorated — clarity over decoration

### Labels / Tags

- Montserrat Bold, uppercase, slight tracking
- Use `#F8F8F8` or `#D5D5D5` backgrounds with `#222222` text
- Avoid decorative colour fills unless signalling a specific semantic state

### Forms

- Labels **above** inputs
- Error text **below** inputs
- Standard `gap-2` spacing between form elements
- Inline validation, clear error states

---

## Motion & Animation

Fjeldmann motion is **calm and purposeful** — it supports comprehension and delight, it never distracts.

- Animate exclusively via `transform` and `opacity` for hardware acceleration
- Default spring physics: `stiffness: 100, damping: 20`
- One well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions
- Scroll-triggered reveals: subtle, directional, intentional
- Perpetual micro-interactions (looping animations) must be isolated in memoized Client Components
- No aggressive entrance effects, no fast flickers, no parallax that fights the user

**Motion intensity baseline**: 4–6 out of 10. Calm and fluid, not performative.

---

## Icons & Graphics

- Use **outlined Material Symbols** (Google) exclusively
- Clean, geometric, minimal — consistent stroke weight
- Icons communicate simplicity and reduced complexity
- Do not mix icon libraries

---

## Imagery

### Photography Style

- Human-centric: people × technology × nature
- Deep tones, soft backgrounds, shallow depth of field
- Natural light, authentic expressions
- **Avoid**: sterile corporate stock photos, white-background product shots, posed diversity stock

### Compositional Feel

- Calm, focused, optimistic
- Visual balance with negative space reserved for text overlays
- For busy images: apply 50% white overlay before placing logos or key text

### Textures (Sparingly)

For hero sections or background accents only: rope, stone, soft-focus surfaces, bark, skin.
Keep subtle and non-intrusive — texture as atmosphere, not wallpaper.

---

## Tone of Voice (Web Copy)

Short, warm, constructive, and human.

- Address the reader as **"du"** (Danish informal)
- **Optimistic, not naive** — "glasset er halvt fyldt"
- Use examples to explain technical concepts
- Humour: *kæk, ikke fræk* — light wit, never sarcastic or edgy
- Emphasise action, clarity, and improvement
- No filler, no corporate-speak, no AI clichés ("robust", "seamless", "leverage")

---

## Banned Patterns ("AI Tells")

These are automatically wrong for this project:

**Visual**
- `#000000` pure black — use `#222222` instead
- AI purple/blue gradient aesthetic
- Neon outer glows or oversaturated accents
- Gradient text fills
- Generic 3-column card grids without visual differentiation
- Default component library styling without customisation
- Broken or placeholder image links
- Oversized centred H1 + subtitle + CTA button — the textbook AI hero pattern

**Typography**
- Geist, Outfit, Cabinet Grotesk, Space Grotesk — not Fjeldmann fonts
- Serif fonts in dashboard or UI contexts
- Montserrat for body copy or paragraphs

**Copy**
- "John Doe", "Acme Corp", "99.99% uptime" — use real-feeling specifics
- Filler CTA text like "Learn More" or "Get Started" — write actual Fjeldmann copy
- Corporate buzzwords: "robust", "seamless", "cutting-edge", "leverage", "synergy"

**Colour**
- Coloured logo on greenish backgrounds
- White logo on light backgrounds
- Black logo on dark backgrounds

---

## Logo Usage Rules

- Never use the mark alone unless "Fjeldmann" is nearby
- Minimum spacing: equal to the width of the "F" on all sides
- Minimum sizes: logo mark 16px, logotype 60px
- Do not alter proportions, colours, rotation, or apply outlines/fill effects

---

## Output Standard

Treat every output as production-ready. A partial implementation is a broken implementation.

- No `// ...` or `/* ... */` placeholder comments
- No "for brevity" shortcuts
- Complete interactive states: loading, empty, error, success
- If output approaches length limits, stop at a logical breakpoint and note exactly where to resume — do not compress or skip sections
