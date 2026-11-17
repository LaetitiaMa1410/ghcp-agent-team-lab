# WholesaleCon Europe 2026 — participants

Local sources only. Names, titles and company spellings below are source evidence; canonical company names are quoted from the linked profile H1 headings. No contact details are included.

| Source key | File | Format and record numbering |
| --- | --- | --- |
| P | `data/conferences/wholesalecon-europe-2026/participants.csv` | CSV with header; P1–P12 are data rows. |
| E | `data/conferences/wholesalecon-europe-2026/exhibitors.json` | JSON; E1–E4 index the `exhibitors` array, with contacts numbered within each entry. |
| S | `data/conferences/wholesalecon-europe-2026/badge_scans.txt` | Semicolon-separated text; initial comment and header excluded; S1–S5 are data rows. Names converted from “Last, First” to “First Last”. |

Profile paths are relative to the repository root. `unknown` means not supplied by these sources. Booths are company-level evidence from E, applied to all people at the matched company.

| Person | Job title | Company | Profile file | Sources | Booth |
| --- | --- | --- | --- | --- | --- |
| Lena Hartmann | Head of Wholesale Purchasing | Nordwave Networks GmbH | `data/company-profiles/nordwave-networks.md` | P1 | unknown |
| Tobias Kranz | Network Engineer | Nordwave Networks GmbH | `data/company-profiles/nordwave-networks.md` | P2 | unknown |
| Priya Raman | Director Network Partnerships | Skyline Cloud Ltd | `data/company-profiles/skyline-cloud.md` | P3 | B12 (E1) |
| Diego Fuentes | VP Carrier Relations | Andes Telecom S.A. | `data/company-profiles/andes-telecom.md` | P4 | unknown |
| Sofia Lindqvist | CTO | Brightloop IoT AB | `data/company-profiles/brightloop-iot.md` | P5 | unknown |
| Marcus Webb | Marketing Manager | Pocket Mobile Ltd | `data/company-profiles/pocket-mobile.md` | P6 | unknown |
| Aisha Al-Mansouri | Head of Voice Business | Orbitel Communications FZ-LLC | `data/company-profiles/orbitel-communications.md` | P7 | unknown |
| Jan de Vries | Interconnect Manager | Helix Data Centers B.V. | `data/company-profiles/helix-data-centers.md` | P8 | D21 (E4) |
| Emily Carter | Head of Content Delivery | StreamNest Media Inc. | `data/company-profiles/streamnest-media.md` | P9 | unknown |
| Felix Brandt | IT Procurement Lead | Kestrel Bank AG | `data/company-profiles/kestrel-bank.md` | P10 | unknown |
| Ingrid Solberg | Chief Commercial Officer | Fjord Fiber AS | `data/company-profiles/fjord-fiber.md` | P11 | unknown |
| Hannah Vogel | Working Student | Quartz Logistics GmbH | unknown | P12 | unknown |
| Oliver Grant | Peering Coordinator | Skyline Cloud Ltd | `data/company-profiles/skyline-cloud.md` | E1 contact 1 | B12 (E1) |
| Mei Tanaka | Head of Capacity Sales | Vantage Subsea Systems | `data/company-profiles/vantage-subsea.md` | E2 contact 1 | C03 (E2) |
| Rafael Costa | Solutions Architect | Vantage Subsea Systems | `data/company-profiles/vantage-subsea.md` | E2 contact 2 | C03 (E2) |
| Nadia Petrova | Director Voice Termination | Arcadia Voice Hub Ltd | `data/company-profiles/arcadia-voice-hub.md` | E3 contact 1; S5 | A07 (E3) |
| Emre Kaya | Head of Network Planning | Nordwave Networks GmbH | `data/company-profiles/nordwave-networks.md` | S1; company match uncertain | unknown |
| Claire Moreau | Head of Roaming & Interconnect | Pocket Mobile Ltd | `data/company-profiles/pocket-mobile.md` | S2 | unknown |
| Erik Svensson | Business Development Manager | Brightloop IoT AB | `data/company-profiles/brightloop-iot.md` | S3 | unknown |
| Daniel Okafor | Senior Engineer | Andes Telecom S.A. | `data/company-profiles/andes-telecom.md` | S4 | unknown |

## Unmatched companies

| Raw company name | Evidence | Disposition |
| --- | --- | --- |
| Quartz Logistics GmbH | P12: “Quartz Logistics GmbH” | No matching profile H1; retained as supplied for Hannah Vogel. |

## Merge log

All raw company spellings are recorded below, including exact matches. Normalization ignores case, spacing, punctuation and legal forms; no company facts beyond source identity are inferred.

| Canonical company / entity | Raw evidence and source | Match or merge reason |
| --- | --- | --- |
| Nordwave Networks GmbH | “Nordwave Networks GmbH” (P1); “NordWave Networks” (P2); “Nordwave” (S1) | P1 exact H1; P2 case and omitted legal form. S1 **uncertain**: shortened name also omits “Networks”; unique matching name stem among available profile H1s, but normalization alone cannot establish identity. Retained provisionally. |
| Skyline Cloud Ltd | “Skyline Cloud Ltd.” (P3); “Skyline Cloud” (E1) | Punctuation and omitted legal form; same normalized H1. E1 supplies booth B12. |
| Andes Telecom S.A. | “Andes Telecom S.A.” (P4); “Andes Telecom” (S4) | Exact H1 / omitted legal form. |
| Brightloop IoT AB | “Brightloop IoT AB” (P5); “Brightloop IoT” (S3) | Exact H1 / omitted legal form. |
| Pocket Mobile Ltd | “Pocket Mobile Ltd” (P6); “PocketMobile” (S2) | Exact H1 / spacing and omitted legal form. |
| Orbitel Communications FZ-LLC | “Orbitel Communications FZ-LLC” (P7) | Exact H1. |
| Helix Data Centers B.V. | “Helix Data Centers B.V.” (P8); “Helix Data Centers” (E4) | Exact H1 / omitted legal form. E4 supplies booth D21; its empty contacts array creates no additional person. |
| StreamNest Media Inc. | “StreamNest Media Inc.” (P9) | Exact H1. |
| Kestrel Bank AG | “Kestrel Bank AG” (P10) | Exact H1. |
| Fjord Fiber AS | “Fjord Fiber AS” (P11) | Exact H1. |
| Vantage Subsea Systems | “Vantage Subsea Systems” (E2) | Exact H1; E2 supplies booth C03. Two distinct contacts remain separate people. |
| Arcadia Voice Hub Ltd | “Arcadia Voice Hub Ltd” (E3); “Arcadia Voice Hub” (S5) | Exact H1 / omitted legal form. E3 supplies booth A07. |
| Quartz Logistics GmbH | “Quartz Logistics GmbH” (P12) | Unmatched; no profile assigned. |
| Nadia Petrova | “Nadia Petrova”, “Director Voice Termination” (E3 contact 1); “Petrova, Nadia”, “Director Voice Termination” (S5) | One person: identical name after order conversion, identical title and same normalized company. Both sources retained. |
| Badge-scan name normalization | “Kaya, Emre” → Emre Kaya (S1); “Moreau, Claire” → Claire Moreau (S2); “Svensson, Erik” → Erik Svensson (S3); “Okafor, Daniel” → Daniel Okafor (S4); “Petrova, Nadia” → Nadia Petrova (S5) | Export uses “Last, First”; display order only changed. No other person merges found. |

## Counts

| Source / measure | Rows read / count | Interpretation |
| --- | --- | --- |
| P — participants.csv | 12 | Data rows; header excluded; 12 person occurrences. |
| E — exhibitors.json | 4 | Exhibitor records; 4 contact records total, including two at E2 and none at E4. |
| S — badge_scans.txt | 5 | Data rows; comment and header excluded; 5 person occurrences. |
| Person occurrences before deduplication | 21 | 12 registration rows + 4 exhibitor contacts + 5 badge scans. |
| Duplicate person occurrences removed | 1 | Nadia Petrova: E3 contact 1 and S5. |
| Participant rows written | 20 | 19 with a profile (including 1 uncertain company match); 1 without a profile. |
| Distinct companies retained | 13 | 12 profile matches (including provisional Nordwave shorthand); 1 unmatched company. |
