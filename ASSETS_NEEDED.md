# Assets to drop in before deploying

The mockup includes photography, a QR code, and cert badges that weren't
supplied as files — only as images inside the design screenshot. Code
references the paths below; add the real files at each path and
everything renders with no further code changes.

| Path                                          | Used in                        | Notes |
|------------------------------------------------|---------------------------------|-------|
| `/public/images/rishi-sharma-portrait.jpg`      | Hero                            | ~1000x1250px, portrait orientation |
| `/public/images/rishi-sharma-about.jpg`         | About Me                        | Square crop works best |
| `/public/images/projects/literature-review.jpg` | Projects & Academic Contributions | 16:9 or wider |
| `/public/images/projects/dark-matter.jpg`       | Projects & Academic Contributions | 16:9 or wider |
| `/public/images/projects/dark-energy.jpg`       | Projects & Academic Contributions | 16:9 or wider |
| `/public/images/linkedin-qr-code.png`           | Let's Connect                   | Square, transparent or white background |
| `/public/resume/rishi-sharma-resume.pdf`        | Every "Download Resume" button  | Referenced via `siteConfig.resumeUrl` in `constants/site.ts` |
| `/public/images/og-cover.jpg`                   | Open Graph / social share preview | 1200x630px |
| `/public/favicon.ico`, `/public/apple-touch-icon.png` | Browser tab / iOS home screen icon | Standard sizes |

## Certifications

`data/certifications.ts` currently holds placeholder entries because the
approved design shows the certification tiles empty (no badge artwork
or titles were provided). Once you have the real certifications, update
that file — the component (`components/sections/certifications.tsx`)
already documents how to swap the icon fallback for real badge images.
