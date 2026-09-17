# SHOWCASE REVIVAL — slutrapport

Datum: 2026-09-17  
Inga DNS-writes. Inga originalprojekt raderade. Inga extra `-revival`-projekt skapade för 02–05.

## Tabell

| Site | Repo | Branch | Preview | Sajtmaskin CTA | Sanering | QA | Risk |
|---|---|---|---|---|---|---|---|
| Byråflöde | [byraflode-showcase](https://github.com/Jakeminator123/byraflode-showcase) | `main` | https://byraflode-showcase.vercel.app (production-alias på *nya* projektet) | Footer *Baserad på ett exempel…* + CTA *Behöver du en marknadssajt…* `utm_source=byraflode` | Inga priser/omdömen/auth | lint/typecheck/build + live 200 | Production-target trots preview-only-önskemål; `byraflode-revival` är dublett |
| Springa | [springa-showcase](https://github.com/Jakeminator123/springa-showcase) | `preview` | lokal `http://127.0.0.1:43148` · Vercel när GitHub kopplats | Footer *Baserad på ett exempel…* + CTA lopp/community `utm_source=springa` | mejl, km, “100%” | lint/typecheck/build | Ingen Vercel-preview förrän repo kopplas i UI |
| Paddlelines | [paddlelines-showcase](https://github.com/Jakeminator123/paddlelines-showcase) | `preview` | lokal `http://127.0.0.1:43149` | Footer *Built as a Sajtmaskin experiment* + CTA *Different idea…* `utm_source=paddlelines` | `/testsidan`, fiktiva figurer | lint/typecheck/build | Samma kopplingssteg |
| Glass | [glass-showcase](https://github.com/Jakeminator123/glass-showcase) | `preview` | lokal `http://127.0.0.1:43150` | Footer *Baserad på ett exempel…* + CTA lokalt företag `utm_source=glass` | mejl, 2 år, 1000+, OpenAI-klar | lint/typecheck/build | Samma kopplingssteg |
| Palma | [palma-showcase](https://github.com/Jakeminator123/palma-showcase) | `preview` | lokal `http://127.0.0.1:43151` | Footer *Exempelprojekt, baserat på…* + CTA premium `utm_source=palma-premium` | superlativ, mejl, telefon | lint/typecheck/build | Samma kopplingssteg |

## Provenance

Alla fem: **rekonstruktion**. Ingen redigerbar originalkälla/GitHub-repo hittades.

| Site | Original live | Originalkälla |
|---|---|---|
| Byråflöde | production-alias dött | file-deploy, borta |
| Springa | 200 `sajtmaskin-springa-b305f652` | ingen git |
| Paddlelines | 200 `sajtmaskin-paddlelines-97715366` | ingen git |
| Glass | 200 `sajtmaskin-glass-5c5ffed3` | ingen git |
| Palma | 200 `sajtmaskin-palma-6ec6f5e3` | ingen git |

Attribution följer det: *Baserad på / experiment / exempelprojekt* — inte “Skapad med Sajtmaskin” som om den här koden vore Sajtmaskins output.

## Vercel-projekt att behålla

| Behåll | Låt ligga (radera inte) | Skapa inte |
|---|---|---|
| `byraflode-showcase` | `byraflode-revival`, `byraflode` | fler Byråflöde-dubletter |
| `springa-showcase` | original `sajtmaskin-springa-b305f652` | `springa-revival` |
| `paddlelines-showcase` | original `sajtmaskin-paddlelines-97715366` | `paddlelines-revival` |
| `glass-showcase` | original `sajtmaskin-glass-5c5ffed3` | `glass-revival` |
| `palma-showcase` | original `sajtmaskin-palma-6ec6f5e3` | `palma-revival` |

02–05: `main` är fortfarande auto-init README. All kod ligger på `preview` så en GitHub-koppling inte omedelbart ger en stabil production-sajt. Koppla repo i Vercel-UI (samma som Byråflöde). Öppna preview för branchen `preview`. Promota inte.

## Föreslagen DNS (ej skriven)

- `byraflode.exempel.sajtmaskin.se`
- `springa.exempel.sajtmaskin.se`
- `paddlelines.exempel.sajtmaskin.se`
- `glass.exempel.sajtmaskin.se`
- `palma.exempel.sajtmaskin.se`

## Starkast som publika showcases

1. **Byråflöde** — tydligast produktbredd, redan live.
2. **Springa** — starkast visuell identitet, minst “demo-skräp”.
3. **Palma** — visar premium/mörk riktning som de andra inte täcker.

## noindex

**Alla fem: keep noindex** tills separat beslut. Innehållet är fiktivt.

## Kräver manuellt innehåll innan ev. indexering

- Glass — riktig plats/öppettider om den ska se lokal ut på riktigt
- Palma — riktiga foton och kontakt om den ska sluta vara exempel
- Paddlelines — förblir lekfull fiction; indexera inte som resevarumärke
