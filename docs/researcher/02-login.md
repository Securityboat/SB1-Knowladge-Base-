## 2. Logging In

### 2.0 How SecurityBoat sign-in works

SecurityBoat uses **WorkOS** as its identity provider. You never create or store a
password inside SecurityBoat itself — authentication is delegated to WorkOS's hosted
login (AuthKit), which supports email/password, **Single Sign-On (SSO)**,
**SAML**, and **multi-factor authentication (2FA/MFA)**.

Access is **invite-only**: you can sign in only with an account that has been
approved as a researcher. If you're new, you'll typically start by applying via
**Apply as a researcher** on the sign-in screen; once approved and invited, you sign
in normally.

### 2.1 The sign-in screen

![SecurityBoat sign-in — "Continue with SSO" launches the WorkOS hosted login; below are MFA recovery and apply/contact links.](../images/login_workos.png)

Open your SecurityBoat URL. You'll see the **Sign in to Tri-Netra** card with:

- **Continue with SSO** — the primary button; starts the WorkOS login flow.
- **Reset MFA** — "Lost access to your authenticator app?" recovery link.
- **Apply as a researcher** — for prospective researchers who don't yet have an
  account.
- **Contact sales** — for prospective customers (not used by researchers).

### 2.2 Sign-in, step by step (end to end)

1. **Click "Continue with SSO".** SecurityBoat redirects your browser to the WorkOS
   hosted login page.
2. **Authenticate with WorkOS** using your email + password (or SSO/SAML if you've
   linked one).
3. **Complete MFA** if your account requires it (authenticator app code, etc.).
4. **WorkOS verifies you** and redirects back to SecurityBoat's secure callback.
5. **You land on your Dashboard**, scoped to your engagements and findings.

```
You → "Continue with SSO" → WorkOS hosted login (password / SSO / SAML + MFA)
    → verified → SecurityBoat callback → Dashboard
```

### 2.3 First-time sign-in (from an invitation)

After your researcher application is approved, you'll receive an **invitation
email**. Follow its link to complete account setup in WorkOS (set your password
and/or link your SSO, and enrol MFA if required). After that first setup, you sign
in normally via **Continue with SSO**.

> Before you can be seated on paid work you'll usually also complete **Identity
> Verification** — see that chapter.

### 2.4 MFA and recovery

- **Enrol/manage MFA** from **Settings → MFA Setup** once signed in.
- **Lost your authenticator?** Use **Reset MFA** on the sign-in screen (the
  "Lost access to your authenticator app?" link) to start recovery.

### 2.5 Signing out

Use the **user menu** (top-right) → **Sign out**. This ends your SecurityBoat
session (clears the session cookie). For shared or public devices, always sign out.

### Best practices

- **Enable MFA** — it's your best protection against account takeover.
- **Never share your login** — accounts are per-person and audited.

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **"You're not invited" / access denied** | Your researcher application isn't approved yet, or you haven't accepted your invite. |
| **Lost MFA device** | Use **Reset MFA** on the sign-in page. |
| **Signed out unexpectedly** | Sessions expire for security; simply sign in again. |

---

← Previous: [Introduction](01-introduction.md) | Next: [Dashboard →](03-dashboard.md)
