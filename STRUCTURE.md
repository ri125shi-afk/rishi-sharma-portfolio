rishi-portfolio/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, providers
│   ├── page.tsx                 # Home page — composes all sections
│   ├── globals.css              # Tailwind layers + design tokens
│   ├── sitemap.ts               # Dynamic sitemap (Next Metadata API)
│   ├── robots.ts                # robots.txt generation
│   └── api/
│       └── contact/route.ts     # Contact form submission handler
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── container.tsx        # Max-width wrapper (matches 2-col page shell)
│   │   └── section.tsx          # Section wrapper (eyebrow + heading + rule)
│   │
│   ├── ui/                      # shadcn/ui primitives (button, card, badge, etc.)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   └── ... (generated per-component as needed)
│   │
│   └── sections/
│       ├── hero.tsx
│       ├── about-me.tsx
│       ├── core-expertise.tsx
│       ├── professional-experience.tsx
│       ├── subjects-i-teach.tsx
│       ├── teaching-methodology.tsx
│       ├── curriculum-development.tsx     # process stepper
│       ├── session-auditing.tsx           # process stepper
│       ├── lesson-planning-assessment.tsx # two-card split
│       ├── digital-teaching-skills.tsx
│       ├── projects-contributions.tsx
│       ├── certifications.tsx
│       ├── awards-recognition.tsx
│       └── lets-connect.tsx
│
├── lib/
│   ├── utils.ts                 # cn() helper, shared utils
│   └── validations/
│       └── contact-schema.ts    # Zod schema for contact form
│
├── hooks/
│   ├── use-media-query.ts
│   └── use-scroll-spy.ts        # active nav link tracking
│
├── types/
│   ├── index.ts                 # shared types
│   ├── experience.ts
│   ├── project.ts
│   └── skill.ts
│
├── constants/
│   ├── site.ts                  # name, title, social links, nav items
│   └── nav.ts
│
├── data/
│   ├── experience.ts
│   ├── subjects.ts
│   ├── core-expertise.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── certifications.ts
│   ├── awards.ts
│   └── teaching-methodology.ts
│
├── public/
│   └── images/                  # profile photo, project thumbnails, cert badges
│
├── styles/                      # (reserved — non-Tailwind CSS if ever needed)
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .eslintrc.json  (flat config: eslint.config.mjs)
├── .prettierrc
└── postcss.config.mjs
