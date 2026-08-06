# Client Organisation — Getting Started

> **Version 4.1 — August 2026** · Production guide for live end users · en-GB
> **Applies to client roles:** Client Admin, Client TPM, Client Viewer.

Welcome to **Tri-Netra**. This Getting Started guide helps client users quickly understand their workspace, navigation, role permissions, and key workflows.

---

## 1. What Tri-Netra is for Clients

Tri-Netra is your organisation's central security portal. Instead of managing
security work through static emails and PDFs, you have a single, governed
workspace where every activity testing, remediation, compliance is tracked
from start to verified fix.

### The accessable modules

- **Dashboard** — your security posture at a glance.
- **Assets** — your testable inventory: web apps, APIs, mobile, networks, cloud.
- **Findings** — verified vulnerabilities with a full remediation workflow.
- **Engagements** — live penetration tests: request, track, receive reports.
- **My Requests** — track pentest requests through go-live.
- **Compliance Reports** — regulator-ready deliverables (SOC 2, ISO 27001, RBI, …).
- **Attack Surface (ASM)** — continuous monitoring of your exposed surface *(if subscribed)*.
- **Bug Bounty** — crowd-sourced testing programs *(if subscribed)*.
- **Integrations** — sync findings to Jira *(Client Admin only)*.
- **AI Assistant** — plain-language questions about your security data.
- **Settings** — your account, MFA, and notification preferences.

> Some modules are **platform-gated** — they appear only if your organisation
> is subscribed. If you don't see ASM or Bug Bounty, ask your CSM.

### Security & Privacy

Your data is kept private and secure. You only have access to information within your own organisation.

---

## 2. Client Roles & Access

| Capability | Client Admin | Client TPM | Client Viewer |
|------------|:---:|:---:|:---:|
| View Dashboard, Assets, Findings, Engagements, Compliance | ✅ | ✅ | ✅ (read-only) |
| Acknowledge findings & request retests | ✅ | ✅ | ❌ |
| Submit new pentest requests | ✅ | ✅ | ❌ |
| Manage team members (Admin → Users) | ✅ | ❌ | ❌ |
| Configure Jira integration | ✅ | ❌ | ❌ |

---

## 3. Chapter Index

For complete step-by-step documentation on each module, see the chapters below:

1. [Introduction](01-introduction.md)
2. [Logging In](02-login.md)
3. [Dashboard](03-dashboard.md)
4. [Assets](assets/overview.md)
5. [Findings](05-findings.md)
6. [Engagements](engagements/overview.md)
7. [My Requests](07-my-requests.md)
8. [Compliance Reports](08-compliance-reports.md)
9. [Admin — Users](09-admin.md) *(Client Admin only)*
10. [Integrations — Jira](10-integrations.md) *(Client Admin only)*
11. [Attack Surface (ASM)](11-asm.md)
12. [Bug Bounty](bug-bounty/overview.md)
13. [AI Assistant](13-ai-assistant.md)
14. [Settings](14-settings.md)
