# Threat Intelligence

The **Threat Intelligence** module gives you continuous visibility into your organization's external attack surface. It scans your domains, IPs, subdomains, and cloud assets to surface exposures before attackers find them.

---

## Attack Surface Dashboard

The dashboard provides a high-level overview of your exposure posture:

- **Coverage percentage** — how many of your registered targets are being actively watched
- **Open Findings** — total vulnerabilities discovered across all targets
- **Subdomain Takeovers** — dangling DNS records that could be hijacked
- **At-Risk Targets** — targets flagged for immediate attention
- **Targets Monitored** — active vs total registered targets ratio

### Key Metrics

| Metric | Description |
|---|---|
| Assets Discovered | Subdomains, IPs, and open ports found by the scanner |
| CVEs Discovered | Known exploitable vulnerabilities detected on your assets |
| Exposed Login Portals | Internet-reachable authentication surfaces |
| Secrets Exposed | Keys, tokens, and credentials found in public-facing resources |
| Weak TLS Hosts | Servers using deprecated protocols or cipher suites |

---

## Targets

The **Targets** tab lists all registered domains and IP ranges being scanned. Each target shows:

- Threat level classification
- Number of open findings
- Last scan date
- Coverage status

Click any target to drill into its detailed scan results.

---

## Scans

The **Scans** tab shows the history of automated scans. You can:

- View all past and active scans
- Start a new on-demand scan
- Filter by target or date range
- Download scan reports

Each scan runs through an 11-stage pipeline covering DNS enumeration, subdomain discovery, port scanning, service fingerprinting, vulnerability detection, and more.

---

## Subdomains

The **Subdomains** tab lists all discovered subdomains across your targets. Each entry includes:

- Subdomain name and resolved IP
- Discovery source (DNS brute-force, certificate transparency, etc.)
- First seen and last seen timestamps
- Risk indicators (takeover potential, exposed services)

---

## Most Exposed Targets

Below the metrics panel, the **Most Exposed Targets** section ranks your assets by risk:

| Target | Open Findings | Status |
|---|---|---|
| E-commerce storefront | 160 | At Risk |
| Primary banking portal | 152 | At Risk |
| AWS Production account | 123 | Needs Attention |
| GCP Production project | 75 | Needs Attention |

---

## Threat Posture

The **Threat Posture** section visualises your exposure trend over time, helping you track whether your attack surface is shrinking or growing.
