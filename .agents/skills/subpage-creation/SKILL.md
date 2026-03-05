---
name: subpage-creation
description: Create or update a non-homepage subpage for this Fjeldmann Jekyll site. Use when asked to add a new page in Danish and English, keep URL/permalink conventions aligned, and preserve shared layout/navigation/contact behavior.
---

# Subpage Creation

Create pages using the existing Jekyll collections setup.

## Bilingual Structure
If the user explicitly requests a bilingual page, create two files: one in `_da` for Danish and one in `_en` for English. Both files should have the same slug (filename without extension) to maintain URL consistency. Other if the user only requests a single language, create just that file in the appropriate collection.

## Follow This Workflow for bilingual pages:

1. Define one slug (for example `services`) and create both language files with the same slug.
2. Create `_da/<slug>.md` and `_en/<slug>.md`.
3. Add frontmatter in both files:

```yaml
---
title: <localized title>
description: <localized meta description>
permalink: /<slug>/        # Danish
---
```

```yaml
---
title: <localized title>
description: <localized meta description>
permalink: /en/<slug>/     # English
---
```

4. Write localized content only; do not duplicate Danish text in English files.
5. Reuse existing CSS classes before adding new styles (`page-header`, `container`, `content-section`, `services-grid`, `service`, `btn-primary`).
6. If the page should appear in top navigation, add localized links in `_includes/navigation.html`.

## Framework And Setup Facts To Respect

- Site uses Jekyll collections (`_da`, `_en`) with collection defaults from `_config.yml`.
- URLs must be collection-aware: Danish `/slug/`, English `/en/slug/`.
- Always use Liquid `relative_url` for internal links and assets: `{{ '/path' | relative_url }}` (required because `baseurl` is set).
- Use `layout: home` only for landing pages with hero slideshow; subpages should stay on default layout behavior.

## Non-Obvious Gotchas

- Any page URL containing `contact` skips `contact-form-simple` because of logic in `_layouts/default.html`.
- Inner-page navbar styling depends on the absence of `.hero-section` (handled in `assets/js/main.js`), so do not add `.hero-section` to regular subpages.
- Language switch currently points to `/` and `/en/`; if same-page language switching is requested, extend that logic explicitly.

## Quality Bar

- Keep both language pages structurally aligned.
- Keep frontmatter minimal and valid YAML.
- Prefer semantic HTML and existing design tokens/CSS variables in `assets/css/main.scss`.
- Validate with `bundle exec jekyll build` (or `bundle exec jekyll serve`) before finishing.