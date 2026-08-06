## Create Asset

Only users with **Client Admin** or **Client TPM** roles can create new assets. For read-only users, the buttons to add or import assets are hidden.

---

### 1. Manual Asset Creation — Step-by-Step

Click **New asset** on the Assets list page to launch the creation form. The form is structured into numbered sections to help you build the asset profile systematically.

A sticky footer at the bottom tracks your progress, displaying a count of completed required fields (e.g., `N / total required fields ready`). The **Create asset** button is enabled only when all required inputs are valid.

> **Scope Isolation:** The form is automatically scoped to your organisation; you cannot accidentally assign assets to a different business entity.

![New asset form — Section 1: Basic Information with asset name ('Acme Financial Services production customer portal'), Criticality set to 'Critical', and a filled description.](../../images/client_assets_new_01.png)
![New asset form — Section 2: Asset type picker with 'Web Application' and 'API / Web Services' selected; Section 3: Scope Details showing the Web Application URL input (https://portal.acmefs.example.com) and file upload areas for Architecture diagram and Auth-flow document.](../../images/client_assets_new_02.png)
![New asset form — Section 3 continued: API/Web Services base URL (https://api.acmefs.example.com/v2), Postman collection & OpenAPI upload areas; Section 4: Credentials with a filled 'Standard User' row including username, masked secret, and notes.](../../images/client_assets_new_03.png)

#### Section 1 — Basic Information

Configure the identifier and business value of the asset.

| Field | Type | Required | Validation / Limits | Purpose |
|---|---|:---:|---|---|
| **Asset name** | Text | ✅ | ≤ 255 characters; must be unique within your organization (case-insensitive). | The primary label used throughout the platform (e.g., in reports and engagement scopes). |
| **Criticality** | Single-select dropdown | ✅ | One of 5 levels. Defaults to `Medium`. | The business risk level. Used to prioritize finding triage. |
| **Description** | Rich Text Editor | — | No strict limit. Supports markdown formatting and image pasting. | Business context for testers (what it does, user types, known restrictions). |

##### Choosing Criticality Levels

Set asset criticality realistically. Over-inflating all assets to "Critical" dilutes the value of prioritisation for your security team.

| Level | Guidelines for Selection | Impact on Testing |
|---|---|---|
| **Critical** | Core business-critical application. Compromise causes severe business disruption. | Findings trigger immediate alert escalation; fixes block releases. |
| **High** | Customer-facing apps handling sensitive data (PII, financials) or core APIs. | Vulnerabilities prioritized for rapid turnaround. |
| **Medium** | Internal tools, corporate services, or staging environments (default). | Standard patch cycle and notification urgency. |
| **Low** | Read-only sites, marketing pages, or isolated utilities. | Bounded risk; resolved within standard SLA windows. |
| **Informational**| Dev environments or sandboxes containing no production data. | Awareness-only tracking; findings do not affect posture scoring. |

#### Section 2 — Asset Type Picker

Select **up to 3 types** that represent the asset. Picking a type dynamically unlocks its corresponding **Scope Details** input fields in Section 3.

> **Why support multiple types?** Real-world products often span multiple layers. For example, a single product might consist of a Web Application interface, a backing API, and a Mobile App. Grouping them under a single asset keeps the security posture and findings cohesive rather than fragmenting them across separate records.

#### Section 3 — Scope Details (The Scope Contract)

This section acts as a "contract" between you and the security Researchers. **Researchers will only test targets explicitly listed here.** Any unlisted infrastructure or endpoints are considered out-of-scope.

Depending on the types selected in Section 2, provide the following details:

- **Web Application**: Specify one or more **URLs** (e.g., `https://app.example.com`). You can add URLs individually or use **Import CSV/TXT** to batch-paste a list. You can also upload an architecture diagram or auth-flow document (up to 50 MB per file).
- **API & Web Services**: Provide base URLs (e.g., `https://api.example.com/v1`). You can upload a **Postman collection** (JSON) or **OpenAPI/Swagger spec** (JSON/YAML) to let testers immediately map out the endpoints.
- **Mobile (Android/iOS)**: Provide at least one of the following: a Store URL, an uploaded binary (`.apk` or `.ipa`), or testing instructions.
- **Network & Infrastructure**: Populate a targets table with **IPs** or **CIDR ranges** (up to 5,000 targets). You can import targets via a simple CSV format. Add VPN notes and upload network diagrams as needed.
- **Cloud, Thick Client, IoT, Hardware, Telecom, Physical, Other**: Enter descriptive notes (up to 2,000 characters) and upload one supporting document (up to 50 MB).

> **Behind the Scenes:** The details are compiled into a structured JSON scope contract (maximum 2 MB). Files are staged locally in your browser and uploaded to the platform's secure storage when you submit the form.

#### Section 4 — Credentials (Optional)

Provide test account details to allow authenticated security testing.

| Field | Type | Required | Notes |
|---|---|:---:|---|
| **Label** | Text | ✅ | A descriptive identifier (e.g., `Standard User`, `Manager Role`). |
| **Username** | Text | — | Account login or email. |
| **Secret** | Password | ✅ | The password, token, or key. |
| **Notes** | Text | — | Special instructions (e.g., "MFA has been bypassed for this source IP"). |

> **Security & Encryption:** To protect sensitive accounts, secrets are **encrypted at rest** at the database layer immediately upon save. Because they are securely hashed and stored, they **cannot be read back from the form or the edit page**. Credential management (revealing, adding, or deleting) is handled entirely via the **Credentials** tab on the Asset Details page.

#### Submitting the Form

Click **Create asset**. If a file upload fails during submission, the asset record is still saved, and a warning informs you which file upload failed so you can retry it on the asset's edit page.

---

### 2. Bulk Creation via CSV Import

When onboarding a large inventory of assets, use the bulk import feature.

![Import assets page — CSV format instructions (column names, max rows, scope format), a 'Download template' button, and the CSV file picker with 'Upload + import' button.](../../images/client_assets_import.png)

#### CSV File Schema

To avoid parsing errors, download the layout structure using the **Download template** button.

| Column Header | Required | Valid Formats / Values | Purpose |
|---|:---:|---|---|
| `name` | ✅ | Text (≤ 255 chars); unique within organization | The asset name. |
| `type` | ✅ | Web Application, API & Web Services, Mobile (Android), Mobile (iOS), Network & Infrastructure, etc. | The primary asset type. |
| `target` | — | Valid URL or hostname | The main entry point URL. |
| `criticality` | ✅ | Critical / High / Medium / Low / Informational | Risk tier classification. |
| `Owner Email` | — | Valid email address | The assigned owner account. |
| `description` | — | Text | Description or notes. |
| `scope` | — | Semicolon-separated IPs/CIDRs | Target definitions (specifically for network assets). |

> **Validation Guard:** The presence of any unknown columns will reject the entire file to prevent malformed data imports.

#### CSV Import Process

1. Click **Import CSV** in the toolbar of the Assets list page.
2. Select your formatted CSV file and click **Upload + import**.
3. **Security Virus Scan:** The platform automatically scans all uploaded CSVs. On a cold start, this scanning queue can take up to 15 minutes. You will see a "still scanning" message.
4. **Queue Processing:** Once cleared by the scanner, the file is processed as a background job.
5. **Real-time Status:** The progress panel displays the running tally of successfully imported rows and failed rows.
6. **Error Reporting:** Any malformed or duplicate rows are reported in an error table showing the `row number`, `error code`, `field`, and `reason`. **Successful rows are committed immediately**, so a few bad rows will not block the import of valid records.

---

← Previous: [Overview](overview.md) | Next: [Asset Detail](asset-detail.md)
