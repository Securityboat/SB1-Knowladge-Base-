## Edit Asset

Only users with **Client Admin** or **Client TPM** privileges can edit assets. This guide explains how to update existing asset configurations and define boundaries for security testing.

---

### 1. Accessing the Edit Interface

To edit an asset:

1. Navigate to the **Assets** module in the sidebar.
2. Click on the name of the asset you want to update to open its **Asset Details** page.
3. In the top-right header, click the **Edit** button.

---

### 2. Editable Fields & Structure

The page is titled **Edit *asset name*** and is organised into numbered sections, the same way as the asset creation form:

| Section | What you can update |
|---|---|
| **1. Basic information** | The asset name (must remain unique), the criticality level, and the rich-text **Description** (what the asset is, who uses it, and any special context testers should know). |
| **2. Asset type** | Add or remove types (pick up to 3). Deselecting a type removes its scope section. |
| **3. Scope details** | The type-specific targets and optional file uploads: URL lists, Postman collections, OpenAPI / Swagger specs, APK / IPA files, diagrams, and the network target IP/CIDR table. |
| **4. Credential sets** | Upload a credential file for bug bounty / VDP researchers. This section appears only if your role can manage this asset's credentials. |

---

### 3. How Credentials Work on the Edit Page

Test credentials contain sensitive secrets that are encrypted at rest, so they are handled differently from the other fields:

- The **Credential sets** section (section 4) lets you upload a credential file. Uploads are **saved immediately** and are independent of the **Save changes** button.
- Existing secrets are never shown back on the edit form. Viewing (revealing), adding, and deleting test accounts is managed under the **Credentials tab** on the **Asset Details** page.

> The Edit Asset page has no *Rules of engagement* fields. In-scope and out-of-scope notes are provided when you request a pentest engagement or a Bug Bounty / VDP program. See [Create Engagement](../engagements/create-engagement.md) and [Request a Program](../bug-bounty/create-bug-bounty.md).

---

### 4. Saving Changes

Once updates are complete, click **Save changes** in the sticky footer, or **Cancel** to return to the Asset Details page without saving. If any file uploads fail during the save process, you will receive a notification prompting you to retry uploading that specific file.

---

← Previous: [Asset Detail](asset-detail.md) | Next: [Findings](../05-findings.md)
