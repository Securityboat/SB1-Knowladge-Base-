# Client Organisation Guide — Client Admin · Client TPM · Client Viewer

> **Version 4.0 — July 2026** · Production guide for live end users · en-GB
> **Applies to the three client roles:** Client Admin, Client TPM, Client Viewer.

This guide is for client users — the people at your organisation who consume
SecurityBoat's testing services. Everything is **scoped to your organisation**;
you never see another company's data. Role-restricted actions are labelled
throughout (e.g. "Client Admin only").

## Chapters

| # | Chapter | What it covers |
|---|---------|----------------|
| 1 | [Introduction](01-introduction.md) | The platform, the three client roles, and the modules you can access. |
| 2 | [Logging In](02-login.md) | WorkOS sign-in end to end — SSO, SAML, MFA, sessions, sign-out. |
| 3 | [Dashboard](03-dashboard.md) | Your security posture at a glance — key metrics, top findings, posture ring. |
| 4 | [Assets](assets/overview.md) | Your testable inventory; create/import/export per role. |
| 5 | [Findings](05-findings.md) | Verified vulnerabilities and the remediation workflow. |
| 6 | [Engagements](engagements/overview.md) | Your penetration tests — request, track, report. |
| 7 | [My Requests](07-my-requests.md) | Submit and track new pentest requests. |
| 8 | [Compliance Reports](08-compliance-reports.md) | Regulator-ready reports and management responses. |
| 9 | [Admin — Users](09-admin.md) | Team/user management — **Client Admin only**. |
| 10 | [Integrations — Jira](10-integrations.md) | Sync findings to Jira — **Client Admin only**. |
| 11 | [Attack Surface (ASM)](11-asm.md) | Continuous exposure monitoring *(if subscribed)*. |
| 12 | [Bug Bounty](bug-bounty/overview.md) | Crowd-sourced testing programs *(if subscribed)*. |
| 13 | [AI Assistant](13-ai-assistant.md) | Ask about your security data in plain language. |
| 14 | [Settings](14-settings.md) | Account, MFA, and notifications. |

## Role access at a glance

| Capability | Client Admin | Client TPM | Client Viewer |
|------------|:---:|:---:|:---:|
| View dashboard, assets, engagements, findings, compliance | ✅ | ✅ | ✅ (read-only) |
| Acknowledge / transition findings | ✅ | ✅ | ❌ |
| Submit engagement requests | ✅ | ✅ | ❌ |
| Manage users (Admin → Users) | ✅ | ❌ | ❌ |
| Configure Jira integration | ✅ | ❌ | ❌ |

> Modules ASM, Bug Bounty, and Compliance are **platform-gated** — they appear only
> if your organisation is onboarded for them.

---

Start with [Introduction →](01-introduction.md)
