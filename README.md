# Bhavani Surepally Portfolio

Modern personal portfolio website generated from `bhavani_resume_f.pdf`.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

## Project Structure

```text
portfolio-site/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    Section.tsx
    SkillChips.tsx
  lib/
    resume.ts
  public/
    Bhavani-Surepally-Resume.pdf
    profile.jpeg
    secure-code-review-workspace.png
```

## Resume-Derived Content

All concrete content is based on the provided resume:

- Summary
- Skills
- Oracle internship experience
- Projects
- Education
- Certifications
- Leadership and activities
- Contact details

The downloadable resume button points to:

```text
public/Bhavani-Surepally-Resume.pdf
```

## Profile Visual

The intro uses:

```text
public/profile.jpeg
```

## Accessibility and SEO

The site includes semantic sections, skip navigation, visible focus states, responsive layout, reduced-motion handling, image alt text, downloadable resume support, and metadata for search/social previews.
