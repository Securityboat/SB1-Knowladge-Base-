# Scope

The **Scope** tab acts as the formal contract between you and the client organization. It defines exactly what you are authorized to test, how you must identify yourself, and which assets are strictly off-limits.

---

## Scope Asset Tables

The tab is split into two primary lists:

### 1. In-Scope Assets
These are the assets you are authorized to test. Each asset entry displays:
*   **Asset Name**: A label representing the target (e.g., `Acme Web Portal`).
*   **Type**: The platform category:
    *   **Web Application** (Websites, Single-Page Apps)
    *   **API & Web Services** (REST, GraphQL, gRPC endpoints)
    *   **Mobile iOS / Mobile Android** (Native or hybrid mobile binaries)
    *   **Cloud Infrastructure** (S3 buckets, cloud configurations)
    *   **External / Internal Network** (Public IP ranges, domain controllers)
    *   **Source Code** (GitHub/GitLab repositories)
    *   **AI/LLM Model** (AI prompts, model endpoints)
*   **Target/URL**: The specific domain, API gateway, IP range, or repository path.
*   **Instructions / Credentials**: Special notes for researchers, such as custom headers required for identification (e.g., `User-Agent: SecurityBoat-Researcher`), test user credentials, or specific endpoints to focus on.

### 2. Out-of-Scope Assets
These are systems or targets that are strictly excluded from testing. **Testing out-of-scope assets is a violation of platform guidelines.** Out-of-scope lists typically include:
*   Third-party integrations or external payment gateways (e.g., Stripe, Paypal).
*   Production databases or sensitive backend endpoints.
*   Acquired subsidiaries or sandbox systems not owned by the parent program.

---

## Rules of Engagement & Testing Guidelines

When testing in-scope assets, you must follow the rules of engagement specified by the program:

1.  **Researcher Identification**: Always inject the requested HTTP identification header (usually detailed in the asset instructions) so client security teams can distinguish your testing traffic from malicious activities.
2.  **Rate Limiting**: Do not flood the target with excessive automated scanner requests. Keep scanning speeds within the limits defined in the policy (e.g., under 5 requests per second).
3.  **Data Preservation**: Never modify, delete, or exfiltrate customer or organizational data. If you discover an SQL Injection or directory traversal, demonstrate the vulnerability by querying benign system values (e.g., `@@version` or `whoami`) and stop.
4.  **No Disruptive Testing**: Refrain from launching Denial of Service (DoS/DDoS) attacks, brute-forcing user credentials, or attempting social engineering (phishing) against organization staff.

---

## Troubleshooting Scope Issues

| Problem | Cause / Solution |
| :--- | :--- |
| **No credentials listed for a Grey-Box target** | If the program is marked Grey-Box but no credentials are provided in the instructions, request them via the program **Chat** or contact a SecurityBoat TPM. |
| **Unsure if a subdomain is in-scope** | If the scope list contains wildcard entries (e.g., `*.acme.test`), subdomains are in-scope. If it is a flat list, only the exact domains listed are in-scope. When in doubt, ask in **Chat** before testing. |

---

← Previous: [Program Details Overview](overview.md) | Next: [Rewards →](rewards.md)
