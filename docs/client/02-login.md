## Logging In

### 1. How SecurityBoat sign-in works

SecurityBoat uses **WorkOS** as its identity provider. You never create or store a
password inside SecurityBoat itself — authentication is delegated to WorkOS's hosted
login (AuthKit), which supports email/password, **Single Sign-On (SSO)**,
**SAML** (your corporate identity provider), and **multi-factor authentication
(2FA/MFA)**. This means your organisation's existing security policies (SSO,
enforced MFA) apply automatically.

Access is **invite-only**: you can sign in only with an account that has been
invited to your organisation. A Client Admin at your company (or your SecurityBoat
CSM) sends the invitation. If your organisation is new to SecurityBoat, please click the **Contact sales** button on the sign-in screen to submit an onboarding request.

### 2. The sign-in screen

![SecurityBoat sign-in — "Continue with SSO" launches the WorkOS hosted login; below are MFA recovery and apply/contact links.](../images/login_workos.png)

Open your SecurityBoat URL. You'll see the **Sign in to Tri-Netra** card with:

- **Continue with SSO** — the primary button; starts the WorkOS login flow.
- **Reset MFA** — "Lost access to your authenticator app?" recovery link.
- **Apply as a researcher / Contact sales** — for prospective researchers and new
  customers (if you are a new organisation, click the **Contact sales** button to open and submit the onboarding request form).

### 3. Sign-in, step by step (end to end)

1. **Click "Continue with SSO".** SecurityBoat redirects your browser to the WorkOS
   hosted login page.
2. **Authenticate with WorkOS.** Depending on how your organisation is configured:
   - **Email + password** (with your WorkOS credentials), or
   - **SSO / SAML** — you're bounced to your company's identity provider (e.g.
     Okta, Azure AD, Google Workspace) and sign in there.
3. **Complete MFA** if your account or organisation requires it (authenticator app
   code, etc.).
4. **Redirected to SecurityBoat:** Once verified, you are automatically returned to the platform.
5. **You land on your Dashboard**, scoped to your role and organisation.

```mermaid
graph LR
    A[You] -->|Click Continue with SSO| B[WorkOS Hosted Login]
    B --> C{Authenticate}
    C -->|Password| D[Verify + MFA]
    C -->|SSO / SAML| D
    D --> E[SecurityBoat Callback]
    E --> F[Dashboard]
```

### 4. First-time sign-in (from an invitation)

If you're new, you'll receive an **invitation email**. Follow its link to complete
account setup in WorkOS (set your password and/or link your SSO, and enrol MFA if
required). After that first setup, you sign in normally via **Continue with SSO**.

### 5. MFA and recovery

- **Enrol/manage MFA** from **Settings → MFA Setup** once signed in.
- **Lost your authenticator?** Use **Reset MFA** on the sign-in screen (the
  "Lost access to your authenticator app?" link) to start recovery.

### 6. Signing out

Use the **user menu** (top-right) → **Sign out**. This ends your SecurityBoat
session (clears the session cookie). For shared or public devices, always sign out.

### Best practices

- **Enable MFA** — it's your best protection against account takeover.
- **Use your corporate SSO** if your org offers it — one identity, central control.
- **Never share your login** — accounts are per-person and audited.

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **"You're not invited" / access denied** | Your account isn't invited to an org yet — ask your Client Admin or CSM to invite you. |
| **Stuck at your company's SSO** | An SSO/SAML issue on your identity provider — contact your internal IT. |
| **Lost MFA device** | Use **Reset MFA** on the sign-in page. |
| **Signed out unexpectedly** | Sessions expire for security; simply sign in again. |

---

← Previous: [Introduction](01-introduction.md) | Next: [Dashboard →](03-dashboard.md)
