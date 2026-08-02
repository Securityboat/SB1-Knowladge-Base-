# Digital Risk Protection (DRP)

**Digital Risk Protection** watches the threat landscape outside your walls, not just the assets inside them. It detects phishing clones, leaked credentials, brand impersonation, and other external threats targeting your organisation.

---

## Interface Tabs

### Overview

The main dashboard shows:

| Metric | Description |
|---|---|
| Open Alerts | Active threats requiring attention |
| Critical Alerts | Highest-severity threats |
| Domains Taken Down | Impersonating domains successfully removed |
| Leaked Credentials Found | Credentials exposed in breaches, dumps, or forums |

### Watchlist

Define keywords, domains, and brand terms to monitor. The system continuously scans:

- Domain registrations (typosquatting, homograph attacks)
- Social media and forums
- Code repositories and paste sites
- Dark web marketplaces and forums

### Alerts

The **Severity-Scored Alert Stream** shows every detected threat ranked by impact. Each alert includes:

- Title and description of the threat
- Severity classification
- Discovery timestamp
- Current status (Active, Investigating, Resolved)
- Recommended action

### Takedowns

Track the status of domain takedowns and content removal requests:

- Domain under impersonation
- Registrar and hosting provider
- Takedown request status
- Resolution timeline

---

## Phishing-Clone Comparator

The platform uses automated favicon and HTML structural diffing to identify phishing clones:

- **Favicon hash match** — detects identical or near-identical favicons on suspicious domains
- **HTML similarity scoring** — compares the structure and content of phishing pages against your genuine login pages
- **Side-by-side visual proof** — you see the genuine page next to the clone with a similarity percentage

Example: A detected clone at `a3cm-corp.com` showed a 96% HTML similarity to your genuine `aecm-corp.com` netbanking login page.

---

## Alert Types

| Threat Type | Example |
|---|---|
| Phishing clone | Pixel-perfect replica of your login page on a typosquatted domain |
| Credential leak | Employee credentials found in a breach database or dark web forum |
| Brand impersonation | Fake social media account or app using your brand assets |
| Data exposure | Customer data sample offered for sale on a cybercrime forum |
| Subdomain takeover | Dangling DNS record that could be hijacked |
