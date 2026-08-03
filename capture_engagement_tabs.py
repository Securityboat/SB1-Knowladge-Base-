#!/usr/bin/env python3
"""Capture screenshots of all engagement detail tabs for docs."""
from playwright.sync_api import sync_playwright
import time

BASE = "http://localhost:3000"
IMG = "/home/test/Desktop/public/docs/images"
ENG_ID = "0755064a-9fa1-43fb-867a-3f7fe1991898"
ENG_URL = f"{BASE}/ptaas/engagements/{ENG_ID}"

TABS = [
    ("brief", ""),                                    # default
    ("assets", "?tab=assets"),
    ("team", "?tab=team"),
    ("coverage", "?tab=coverage"),
    ("findings", "?tab=findings"),
    ("analytics", "?tab=analytics"),
    ("reports", "?tab=reports"),
    ("chat", "?tab=chat"),
    ("integrations", "?tab=integrations"),
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1920, "height": 1080})
    page = ctx.new_page()

    # Login via dev bypass
    page.goto(f"{BASE}/login")
    page.wait_for_timeout(2000)
    page.select_option("select", "client@acmecorp.local")
    page.click("button:has-text('Dev sign in')")
    page.wait_for_url("**/dashboard**", timeout=15000)
    print("Logged in as Client Admin")

    # Also capture the engagements list page
    page.goto(f"{BASE}/ptaas/engagements")
    page.wait_for_timeout(3000)
    page.screenshot(path=f"{IMG}/client_engagements_list_01.png")
    print("Captured: engagements list")

    # Capture each tab
    for slug, query in TABS:
        url = f"{ENG_URL}{query}"
        page.goto(url)
        page.wait_for_timeout(2500)
        path = f"{IMG}/client_engagement_{slug}.png"
        page.screenshot(path=path)
        print(f"Captured: {slug}")

    browser.close()
    print("All done!")
