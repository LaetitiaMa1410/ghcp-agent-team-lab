# Reference — Data inventory (use case A)

> One possible result of step 1a. Yours may be structured differently.

| Source | Format | Owner | Content / key fields | Personal data? | Quality issues found |
| --- | --- | --- | --- | --- | --- |
| `participants.csv` | CSV, comma | Event organizer | first/last name, job title, company, **e-mail**, country — 12 rows | **Yes** (names, e-mails) | E-mail addresses (must not reach the output); company spellings differ from profiles ("NordWave Networks" vs. "Nordwave Networks GmbH"); junior roles (Working Student, Engineer) |
| `exhibitors.json` | JSON | Event app | exhibitor name, booth, contacts (name, role) | Yes (names) | Helix Data Centers has a booth but **no contacts**; short names ("Skyline Cloud", "Arcadia Voice Hub Ltd") |
| `badge_scans.txt` | Semicolon text, German headers (`Name;Firma;Position;Scan-Zeit`), comment line | Contoso booth scanner | people who visited Contoso's booth | Yes (names) | Names as **"Last, First"**; short company names ("Nordwave", "PocketMobile"); **Nadia Petrova** also in `exhibitors.json` |
| `company-profiles/*.md` | Markdown, one file per company | Stand-in for websites | about, products, customers, network & partnerships | No | **No profile for Quartz Logistics**; Kestrel Bank is a bank (not a wholesale buyer); StreamNest mentions "private network interconnects" (not voice!) |
| `product-categories.json` | JSON | Contoso product management | 4 categories with target segments and **signal words** | No | Signal words cause false positives if matched without context |
| `crm-existing-customers.csv` | CSV | Contoso CRM | account, owner team, products, since | No | Only 2 rows: **Orbitel** and **Fjord Fiber** are existing customers |

## What this means for the design

- **Entity resolution first:** company spellings and duplicate people must be resolved before anything else.
- **CRM check before scoring**, otherwise existing customers take meeting slots.
- **Evidence over keywords:** scoring must quote the sentence, not just a signal word.
- **Data minimization** at the end: e-mails can be dropped as early as the first step.
- **Unknowns are results:** a company without a profile is reported, not dropped or invented.
