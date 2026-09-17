# Showcase Vercel-projekt

Inga raderingar. Inga fler dubletter. Inga DNS-writes.

## Site 01 Byråflöde — behåll detta

| Fält | Värde |
|---|---|
| Behåll | **`byraflode-showcase`** |
| Primär tillfällig adress | https://byraflode-showcase.vercel.app |
| GitHub | https://github.com/Jakeminator123/byraflode-showcase |
| Provenance | Rekonstruktion. Original var file-deploy utan git. |
| Attribution | Baserad på ett exempel skapat med Sajtmaskin |
| Index | `noindex` tills separat beslut |
| Target idag | Production på *nya* projektet (hände när GitHub kopplades) |
| Föreslagen framtida domän | `byraflode.exempel.sajtmaskin.se` — **inte konfigurerad** |

## Dubletter mot samma repo/commit — rör inte

GitHub deployments för `byraflode-showcase` visar flera Vercel-miljöer:

| Projekt | Alias | Åtgärd |
|---|---|---|
| `byraflode-showcase` | https://byraflode-showcase.vercel.app | **Behåll** |
| `byraflode-revival` | https://byraflode-revival.vercel.app | Låt ligga. Samma innehåll (70370 byte, samma H1). Radera inte. |
| `byraflode` | (skapades i plugin, syns som deploy-miljö) | Låt ligga. Skapa inte fler. |

MCP `list_projects` visar inte dessa (404/403) men aliasen svarar. Skapa inte `byraflode-revival-2` eller liknande.

## Original, orört

`prj_0c5wqr0JyR7arFkvshbESNCMxIdO` / `sajtmaskin-jag-bygger-en-saas-f-r-svenska-881c7ede` — dött alias, utanför teamet. Ingen write.

## Sites 02–05 — ett project vardera

| Site | Vercel-project | Föreslagen domän (ej skriven) |
|---|---|---|
| Springa | `springa-showcase` | `springa.exempel.sajtmaskin.se` |
| Paddlelines | `paddlelines-showcase` | `paddlelines.exempel.sajtmaskin.se` |
| Glass | `glass-showcase` | `glass.exempel.sajtmaskin.se` |
| Palma premium | `palma-showcase` | `palma.exempel.sajtmaskin.se` |

Kod på branch `preview` tills godkännande. `main` är fortfarande auto-init README så en GitHub-koppling inte omedelbart ger en snygg production-sajt.

| Site | Preview-commit |
|---|---|
| Springa | `909d3ed` |
| Paddlelines | `d6c1914` |
| Glass | `42b8eab` |
| Palma | `d8ec14e` |

Koppla varje `*-showcase`-repo i Vercel-UI (samma metod som Byråflöde). Öppna deployment för `preview`. Promota inte. Ingen DNS.
