# Byråflöde — showcase revival

Exempelprojekt: mörk corporate SaaS-marknadssajt för en tänkt produkt mot svenska redovisningsbyråer.

Originalet (`sajtmaskin-jag-bygger-en-saas-f-r-svenska-881c7ede`) saknade git-repo och production-aliaset är dött. Den här koden är revivalen enligt `MASTER_AGENT_PROMPT` och site brief 01.

## Vad sajten är

- Landning med produktsektioner, dashboardmock, prislayout, FAQ och AI-skal
- Login-skal utan auth (`/login`)
- Intern vy som illustration (`/demo`)
- `noindex, nofollow`
- En footer-länk + en kontextuell CTA till Sajtmaskin (`utm_source=byraflode`)

## Vad sajten inte är

- Inte ett livebolag
- Inte en prislista att köpa från
- Inte en fungerande inloggning eller live-assistent

## Köra lokalt

```bash
npm install
npm run dev
```

Öppna adressen som dev-servern skriver ut.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Preview

Deploya endast till Vercel preview. Ingen production-promotion, ingen DNS-ändring.

GitHub-källa: `Jakeminator123/byraflode-showcase` på `main`.

Publik URL efter GitHub-koppling: https://byraflode-showcase.vercel.app  
READY-commit: `06e689b`. Första bygget mot ofullständiga `bc8e4d2` är inaktuellt.

## Dokumentation

- `SHOWCASE_AUDIT.md` — discovery innan ändring
- `SHOWCASE_HANDOFF.md` — efter preview + QA
