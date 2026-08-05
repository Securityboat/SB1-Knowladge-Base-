## Settings

### 1. Overview

**Settings** is your personal, per-user area — it controls *your* account, not your
organisation's. Every role has it. It has these tabs: **Account**, **MFA Setup**,
and **Notifications**. (The **Payouts** tab is researcher-only and won't appear for
client users.)

### Navigation

Click **Settings** at the bottom of the sidebar. It opens on the **Account** tab.

---

### 2. Account

![Account settings — avatar, editable name, read-only administered identity (email/role/org/2FA), and theme toggle.](../images/client_settings_account_01.png)

| Section | What you can do |
|---------|-----------------|
| **Avatar** | Upload a profile picture shown in the top bar. |
| **Identity (name)** | Edit your first/last name. |
| **Administered identity** | **Read-only.** Your **email**, **role**, **organization**, and **two-factor** status are provisioned by your administrator and identity provider. To change your email or role, contact your admin — such changes are logged and require re-verification. |
| **Theme** | Switch **Light / Dark / System**. Saved per browser. |

> **Why email/role/org are locked:** these are security-critical identity
> attributes. Letting users self-edit them would undermine tenant isolation and
> access control, so they're admin/IdP-managed and audited.

### 3. MFA Setup

![MFA Setup — configure multi-factor authentication for your account.](../images/client_settings_mfa.png)

Manage multi-factor authentication (MFA) to secure your account. Because your profile grants access to organization assets, vulnerability reports, and project tracking dashboards, maintaining active MFA is strongly recommended. Your current two-factor setup status also appears on the **Account** tab.

#### How to Enroll in MFA
1. **Open Setup**: Navigate to **Settings → MFA Setup** and click **Setup MFA**.
2. **Scan QR Code**: Open your preferred authenticator app (e.g., Google Authenticator, Authy, Microsoft Authenticator, or 1Password) and scan the displayed QR code. If your device cannot scan the code, click **Show** to reveal the secret key and enter it manually.
3. **Save/Copy Key**: You can also click the copy icon to securely copy the configuration key to your clipboard.
4. **Complete Enrollment**: Once you have scanned or entered the code into your authenticator app, click the **Done — I've added it to my app** button. The app will confirm your enrollment, and you will be prompted for your MFA verification code during your next login attempt.

#### Disabling or Resetting MFA
If you currently have MFA enabled and need to re-key or disable it:

1. Navigate to **Settings → MFA Setup**.
2. Click the red **Reset MFA** button.
3. Confirming this action removes all active MFA factors from your account immediately. You can now log in using only your email and password, or begin the enrollment flow again.

#### Recovery & Lost Authenticator Access
If you lose access to your authenticator app, you can reset your MFA using the self-service flow:

*   **Request recovery**: Click the **Reset MFA** link on the login page, enter your registered email, and follow the link sent to your inbox.
*   **Administrative assistance**: You can also contact your organization's Client Administrator (who can reset user MFA settings via the administrative panel) or reach out to your SecurityBoat Customer Success Manager (CSM) to reset your MFA factors.

### 4. Notifications

![Notification preferences — per-event toggles and delivery channels.](../images/client_settings_notifications.png)

Choose **which** notifications reach you and **how** (the delivery channels). Toggle
categories on/off to tune the noise to your role.

> **Critical security alerts may bypass these settings** — some safety-critical
> notifications are always delivered regardless of your preferences.

### Best practices

- **Enable MFA** immediately if it isn't already.
- **Tune notifications** so the alerts that matter to your role aren't lost in
  noise — but leave security-critical categories on.
- **Keep your name/avatar current** so teammates recognise you in comments and chat.

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **Can't edit email/role/organization** | These are admin/IdP-managed by design. Contact your administrator. |
| **No Payouts tab** | Correct — Payouts is for researchers only. |
| **Theme keeps resetting** | Theme is saved **per browser**; a different browser/device starts at System. |

---

← Previous: [AI Assistant](13-ai-assistant.md) | Back to [Full Client Guide](CLIENT_Guide.md)
