# Edit a Bug Bounty Program

> **Who can do this:** Client Admin only. **When:** Only when the program is **Inactive**. Active programs cannot be edited through the client UI — contact your CSM for changes to live programs.

Editing a program uses the same form as [creating a program](create-bug-bounty.md), pre-filled with the current values. You can modify any field except the **program type**, which is locked after creation.

---

## Accessing the Edit page

1. Navigate to **BB Program** in the sidebar.
2. Click the program you want to edit to open its detail page.
3. If the program is **Inactive**, an **Edit** button appears in the program header bar.
4. Click **Edit** to open the configuration form.

> If you do not see the Edit button, the program is Active or Closed. Contact your CSM if you need to make changes to a live program.

---

## What you can edit

All fields from the creation form are editable except the program type:

| Section | Editable fields |
|---------|----------------|
| **Organisation & Basics** | Program name, Description |
| **Scope & Policy** | In-scope assets, Rules of engagement, Safe-harbor policy |
| **Schedule & Visibility** | Start date, End date, Visibility (Public/Private), Hall of Fame toggle |
| **Management Model** | SB-Managed or Self-Managed |
| **Reward Structure** | P1–P5 payout amounts, Reward currency |

> **Program type** (VDP or Bug Bounty) is **locked** after creation and cannot be changed. If you need to switch from VDP to Bug Bounty or vice versa, you must create a new program.

---

## Editing workflow

1. Open the Edit form from the program detail page.
2. Modify any fields you need to change. All existing values are pre-filled.
3. The form validates as you type — the save button becomes active when all required fields are filled.
4. Click **Save changes** to apply your edits.
5. You are returned to the program detail page, where you can review the updated configuration.

---

## Important notes

- **Editing does not automatically activate the program** — the program remains Inactive until you activate it from the detail page.
- **All changes are audited** — modifications appear in the [Activity tab](program-detail.md) log for full traceability.
- **Visibility changes take effect immediately** — switching from Private to Public makes the program visible to all eligible researchers. Switching from Public to Private hides it from new researchers but does not remove existing collaborators.
- **Scope changes** should be communicated to active researchers via the [Updates tab](program-detail.md) (posted by your CSM).

---

## Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **The Edit button is missing** | The program is Active or Closed. Only Inactive programs can be edited by clients. Contact your CSM. |
| **I changed the scope but researchers are still testing old targets** | Scope changes should be announced via a program update. Contact your CSM to post one. |
| **I cannot change the program type** | Program type is locked after creation. Create a new program with the desired type. |
| **My edits are not saving** | Check that all required fields are filled. The sticky footer validation counter shows how many fields are still incomplete. |

---

← Previous: [Chat](detail/chat.md) | Next: [Hacktivity →](../17-hacktivity.md)
