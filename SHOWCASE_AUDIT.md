# SHOWCASE AUDIT — Site 01 Byråflöde

Datum: 2026-09-17  
Agent: Cursor Cloud  
Scope: endast site 01. Site 02+ orörd.

## Discovery

| Fält | Fynd |
|---|---|
| Vercel-slug (pack) | `sajtmaskin-jag-bygger-en-saas-f-r-svenska-881c7ede` |
| Production alias | `https://sajtmaskin-jag-bygger-en-saas-f-r-svenska-881c7ede.vercel.app` → **404 DEPLOYMENT_NOT_FOUND** |
| Unik deploy-host | `https://sajtmaskin-jag-bygger-en-saas-f-r-svenska-881c7ede-4yloglb9j.vercel.app` → **302 Vercel SSO** |
| Vercel project id | `prj_0c5wqr0JyR7arFkvshbESNCMxIdO` |
| Vercel deployment id | `dpl_CiHX8dhYXgWHjKnv4yeiZWTW28so` |
| Status i jakebase | `ready` (2026-08-11) |
| Git-repo | **saknas** — file-deploy, inget GitHub-repo |
| Branch | **saknas** |
| `app_projects`-rad | **raderad** (`onv4b2A9qa-wH5KCmMX__` finns inte) |
| `engine_versions` / `project_data` / `versions` | **tomt** — ingen `files_json` |
| Originalprompt | `prompt_handoffs` id `DaOWaxKkjVMWNEBx-AQxt` |

### Vercel-åtkomst (denna session)

- Team: `jakeminator123's projects` / `team_j7KE5zKTm5rdg7zfWzOZhJ89` / plan Pro
- MCP `list_teams` + `list_projects`: **fungerar**
- Synliga projekt på teamet: `sajtmaskin`, `sajtagent-site` (git-länkade)
- Byråflöde-projektet: **inte** på detta team (`get_project` → 404)
- Springa/Glass/Palma/Paddlelines production-alias: **200** (andra Vercel-ytor)
- Slutsats: Vercel-plugin funkar. Originalprojektet för site 01 går inte att styra härifrån.
- Efter manuell GitHub-koppling: nytt isolerat projekt `byraflode-showcase` är READY på `06e689b` → https://byraflode-showcase.vercel.app

### Originalprompt (2026-08-11)

> Jag bygger en SaaS för svenska redovisningsbyråer: landningssida med priser, login-skal och en AI-assistent som svarar på vanliga frågor om produkten. Modern, corporate, mörkt tema.

## Audit av nuvarande live

Går inte att öppna visuellt.

- Production alias död
- Unik host SSO-låst och utanför anslutet team
- Ingen källkod att diff:a

## Bedömning mot brief

| Aspekt | Status | Kommentar |
|---|---|---|
| Styrkor (enligt pack) | Historiska | Dashboard, features, pricing, FAQ — syns inte live |
| Private data | Okänt | Ingen källkod; originalprompten saknar PII |
| Falska claims | Hög risk (enligt pack) | Priser, gränser, citat, säkerhet, "mest vald" |
| Brutna länkar | Production 404 | Alias död |
| Demo-skräp | Okänt | Login/AI kan ha sett live ut |
| Metadata | Okänt | — |
| Mobile-risk | Okänt | — |
| Sajtmaskin-placement | Saknas historiskt | Ingen attribution i bevarad data |

## Beslut

Pack-regeln: improvisera inte om repo saknas.  
Samtidigt: site 01 är död och källan är raderad. Enda vägen till preview + QA + handoff är en **revival i detta repo**, styrd av originalprompt + site brief.

Revival-principer:

1. Behåll idén: mörk corporate SaaS för redovisningsbyråer
2. Tydligt **exempelprojekt** — inte ett livebolag
3. Pricing endast som layoutmönster
4. Login = skal, ingen auth
5. AI-assistent = produktidé med färdiga svar, inte live
6. Inga påhittade kunder, omdömen, säkerhetscert, användarsiffror
7. `noindex, nofollow`
8. Footer + 1 CTA, `utm_source=byraflode`
9. Preview only — ingen production/DNS-write på originalprojektet

## Sajtmaskin-länk

`https://sajtmaskin.se/builder?new=1&utm_source=byraflode&utm_medium=showcase&utm_campaign=showcase_revival`
