# Client Organisation — Getting Started

> **Version 4.0 — July 2026** · Production guide for live end users · en-GB
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

## 2. Signing In & Onboarding

### Onboarding a New Organisation
If your organisation is new to Tri-Netra and does not have a workspace setup yet, click the **Contact sales** button on the platform's sign-in page to open and submit the sales onboarding request form. Our team will review your request, configure your workspace, and invite your primary Client Admin.

### First-Time Sign-In (For Invited Users)
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
