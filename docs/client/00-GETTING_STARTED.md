# Client Organisation — Getting Started

> **Version 4.0 — July 2026** · Production guide for live end users · en-GB
> **Applies to client roles:** Client Admin, Client TPM, Client Viewer.

Welcome to **Tri-Netra**. This Getting Started guide helps client users quickly understand their workspace, navigation, role permissions, and key workflows without needing to reference internal administrative documentation.

---

## 1. What Tri-Netra is for Clients

Tri-Netra is your central security portal. Instead of managing security reports via static emails or PDFs, you use SecurityBoat to:
- Monitor your testable inventory (**Assets**).
- Track pentest progress and request new tests (**Engagements** / **My Requests**).
- Review and remediate verified vulnerabilities (**Findings**).
- Access regulator-ready compliance deliverables (**Compliance Reports**).
- Monitor continuous exposure (**Attack Surface**) and crowd-sourced programs (**Bug Bounty**) if subscribed.

All data is strictly multi-tenant and **scoped to your organisation** — you only see your own company's assets and findings.

---

## 2. Signing In & First-Time Setup

1. **Sign-in:** Navigate to the platform sign-in page, enter your company email, and authenticate via **Single Sign-On (SSO)** or email credentials.
2. **Multi-Factor Authentication (MFA):** Complete 2FA verification if required by your organisation's security policy.
3. **Profile & Preferences:** Go to **Settings** (bottom sidebar) to update your name, set your theme (Light/Dark/System), and configure notification channels for new findings or delivered reports.

---

## 3. Client Roles & Access

| Capability | Client Admin | Client TPM | Client Viewer |
|------------|:---:|:---:|:---:|
| View Dashboard, Assets, Findings, Engagements, Compliance | ✅ | ✅ | ✅ (read-only) |
| Acknowledge findings & request retests | ✅ | ✅ | ❌ |
| Submit new pentest requests | ✅ | ✅ | ❌ |
| Manage team members (Admin → Users) | ✅ | ❌ | ❌ |
| Configure Jira integration | ✅ | ❌ | ❌ |

---

## 4. Key Workflows

### Remediating a Vulnerability
1. Open **Findings** from the main sidebar menu.
2. Filter by severity or state.
3. Review the detailed description, evidence, and remediation guidance.
4. Mark the finding as **Fix in Progress**, complete the fix internally, then click **Ready for Retest**.
5. Once retested by the SecurityBoat team, the finding state updates to **Resolved**.

### Requesting a Pentest
1. Click **My Requests** or **Engagements** in the sidebar.
2. Click **New request**.
3. Select your target asset, preferred testing window, and scope details.
4. Submit the request for SecurityBoat team review.

---

## 5. Chapter Index

For complete step-by-step documentation on each module, see the chapters below:

1. [Introduction](01-introduction.md)
2. [Logging In](02-login.md)
3. [Dashboard](03-dashboard.md)
4. [Assets](04-assets.md)
5. [Findings](05-findings.md)
6. [Engagements](06-engagements.md)
7. [My Requests](07-my-requests.md)
8. [Compliance Reports](08-compliance-reports.md)
9. [Admin — Users](09-admin.md) *(Client Admin only)*
10. [Integrations — Jira](10-integrations.md) *(Client Admin only)*
11. [Attack Surface (ASM)](11-asm.md)
12. [Bug Bounty](12-bug-bounty.md)
13. [AI Assistant](13-ai-assistant.md)
14. [Settings](14-settings.md)
