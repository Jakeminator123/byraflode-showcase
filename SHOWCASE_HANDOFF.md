# SHOWCASE HANDOFF — Site 01 Byråflöde

Datum: 2026-09-17  
Scope: site 01 (kvalitetsreferens). Site 02–05: se `SHOWCASE_REVIVAL_HANDOFF.md`.

## Identitet

| Fält | Värde |
|---|---|
| Vercel project (nytt, isolerat) | `byraflode-showcase` |
| Vercel project (original, orört) | `prj_0c5wqr0JyR7arFkvshbESNCMxIdO` — utanför anslutet team, production-alias dött |
| Repo | https://github.com/Jakeminator123/byraflode-showcase |
| Branch | `main` |
| READY-commit | `06e689b` |
| PR | ingen — revivalen lever på `main` |
| Publik URL | https://byraflode-showcase.vercel.app |
| Unik deploy-host | https://byraflode-showcase-72sqmnu8d-jakeminator123s-projects.vercel.app |
| GitHub deploy-status | `success` (vercel[bot], environment `Production – byraflode-showcase`) |

Vercel-plugin i denna session: `list_teams` + `list_projects` fungerar (team `team_j7KE5zKTm5rdg7zfWzOZhJ89`). Det nya projektet syns som namnkonflikt (409) men inte i `list_projects` / `get_project` (404/403). GitHub-kopplingen gjordes manuellt; därefter blev aliaset READY.

## Vad som sanerades

Originalkällan saknades (file-deploy, raderad `files_json`). Revivalen är byggd från originalprompt + brief, som **exempelprojekt**.

Borttaget / aldrig infört:

- belopp, “mest vald”, checkout, schema.org Offer
- påhittade omdömen, säkerhetscert, användarsiffror som sanning
- fungerande auth / live-assistent
- privata mejladresser och påhittade domäner

Kvar som tydligt mönster:

- prislayout utan belopp
- login-skal som inte skickar något
- AI-yta med färdiga svar och badge “Inte live”
- exempelrader i dashboardmock, märkta som påhittade

## Visuellt

- Mörk corporate identitet: varmt bläck + mässing, Source Serif 4 + Geist
- Hero med en H1 och två badges: Exempelprojekt / Ingen live-tjänst
- Produktkort, dashboardmock, tre priskolumner, FAQ, assistent-skal
- Mobil nav i horisontell rad under headern

## Sajtmaskin

| Placering | Text | UTM |
|---|---|---|
| Footer | Baserad på ett exempel skapat med Sajtmaskin · Skapa din egen | `utm_source=byraflode` |
| CTA efter assistent | Behöver du en marknadssajt för din egen tjänst? | samma |

Länk: `https://sajtmaskin.se/builder?new=1&utm_source=byraflode&utm_medium=showcase&utm_campaign=showcase_revival`

Exakt två länkar på landningen. Inga extra CTA på `/login` eller `/demo` (bara footern).

## QA

| Check | Resultat |
|---|---|
| lint | pass |
| typecheck | pass |
| `/` `/login` `/demo` | 200 |
| `/robots.txt` | `Disallow: /` |
| `/saknas` | 404 + egen 404-vy |
| title | `Byråflöde — exempel på SaaS-marknadssajt` |
| description | exempelprojekt, inga riktiga priser |
| robots meta | `noindex, nofollow, nocache` |
| H1 | 1 |
| Sajtmaskin-UTM | korrekt, unik source |
| JSON-LD Offer | saknas (bara disclaimer-text) |
| Original-DNS / original-projekt | orört |

## Kvarvarande risk

- Vercel kopplade `main` till **Production** på det *nya* projektet när GitHub anslöts. Det är inte originaldomänen, men det är inte en isolerad preview-only target.
- Unik `*.vercel.app`-host bakom team-SSO; den publika aliasen är öppen.
- MCP kan inte läsa projektets deployments (403). Status kommer från GitHub deployments API + HTTP mot aliaset.
- Fiktivt innehåll: ska inte indexeras.

## Rekommendation

**keep noindex** tills separat beslut.

Behåll Vercel-projektet `byraflode-showcase`. `byraflode-revival` och `byraflode` är dubletter mot samma GitHub-repo — radera inte, skapa inte fler.

Föreslagen senare adress (ej DNS): `byraflode.exempel.sajtmaskin.se`.

Se `SHOWCASE_PROJECTS.md`.
