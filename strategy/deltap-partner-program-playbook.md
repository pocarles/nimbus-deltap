# ∆P Partner Program — Playbook & Status

**Last Updated:** February 9, 2026
**Status:** Live at https://deltap.nimbus-suspensions.com/partners.html

---

## Program Overview

The ∆P Partner Program builds a network of local nitrogen refill partners across the continental US. Partners purchase a Starter Kit, perform refills locally, and keep the majority of revenue.

**Key Insight:** Shipping pre-filled high-pressure nitrogen cartridges is complex, expensive, and heavily regulated (Hazmat). This creates a natural local monopoly for partners — online competitors can't undercut them.

---

## Economics (Final — Live on Page)

| Item | Amount |
|------|--------|
| Suggested refill price | $30 (partner sets own rate) |
| Nimbus flat fee per refill | $3 (non-negotiable, clearly disclosed) |
| Nitrogen cost | ~$0.50 |
| Partner profit per refill | ~$26.50 (88% gross margin) |
| Annual projection (10/week) | $13,780 |

**Disclaimers on page:**
- "Nitrogen and operating costs may vary by location and supplier."
- Full financial disclaimer: estimates only, not a guarantee of earnings
- Footer: "Financial projections on this page are estimates only and do not guarantee results."

---

## Starter Kit Pricing

| | Price |
|---|---|
| Pre-launch price | $999 |
| Regular price (post-launch) | $1,499 |
| Refundable deposit | $100 |
| Balance due at ship | $899 |

**Stripe Payment Link:** https://buy.stripe.com/eVq28s4pO8Ydgsb7Tj0gw0g
- Product ID: `prod_Twx9rkNkDXkDrI`
- Price ID: `price_1Sz3FWJedRjz2IfOII6nYCO7`
- Redirects to: `thank-you.html?source=partner-deposit`
- Fires `partner_deposit` dataLayer event for GTM/Meta pixel

**Starter Kit includes:**
- Pro Refill Station (charging ramp)
- Official partner status & listing
- Customer referrals in your area
- Marketing materials & signage
- Priority access at launch

---

## Target Partner Types (8 — displayed on page)

1. Off-Road & 4×4 Shops
2. Aviation Maintenance / FBOs
3. Suspension Specialists
4. Racing Teams & Performance Shops
5. Mobile Operators / Solo Entrepreneurs
6. Industrial Service
7. Commercial Door Installers
8. Engineering Students

---

## Page Structure (Final Flow)

1. **Hero** — "Add a High-Margin Revenue Stream to Your Business"
   - CTAs scroll to #apply section (Reserve + Have Questions)
   - ∆P PARTNER PROGRAM label
   - pt-44 padding from nav

2. **Why This Works** — 4 empathy cards
   - Recurring Revenue / No Complex Training / Works With Existing Business / Growing Market

3. **Your Local Advantage** — Hazmat shipping barrier = your moat
   - "A Business That Can't Be Undercut Online"
   - No exclusivity claims (changed "you own your territory" to "you become the local go-to")

4. **The Service** — "A 5-Minute Service Anyone Can Learn"
   - Connect → Fill → Done (3 steps)
   - No specific pressure numbers (removed 120 bar — varies by application)
   - No "suspension" — says "equipment" (applies to aviation, industrial, etc.)

5. **Video Demo** — YouTube embed (j17Q8eMmGO8)

6. **The Economics** — 4 cards ($30 / $3 Nimbus fee / $0.50 nitrogen / $26.50 profit)
   - $13,780/year projection
   - Financial disclaimers

7. **Killian Quote** — "Once we started using the ∆P, we found ourselves reaching for it even back at the shop — where we have our full nitrogen setup."
   - Killian Carles, Chief Product Officer, Nimbus Suspensions

8. **Two Paths** — Shops & Service Centers vs Solo Entrepreneurs
   - No "NEW" badge on Solo

9. **Benefits of Joining the ∆P Program** — 9 cards (3×3)
   - Refill Ramp / Official Partner Status / Partner Locator Listing
   - Customer Referrals / Sell ∆P Products / No Minimums, No Franchise Fees
   - One-of-a-Kind Product / Drive Foot Traffic / Backed by Nimbus

10. **How It Works** — 4 realistic steps
    - Apply & Get Approved → Finalize Your Partnership (contract/payment) → Receive Kit & Get Onboarded → Start Earning

11. **Starter Kit** — $999 (~~$1,499~~) with checklist

12. **Ideal Partner Types** — 8 types (4×2 grid)

13. **Built by Nimbus Suspensions** — Brand story
    - Family-owned, Florida-founded, aerospace-grade, military vehicles, racing, off-road enthusiasts
    - Link to nimbus-suspensions.com

14. **Pre-Launch Status** — 23/50 counter (own section)

15. **Ready to Join?** — Two-column layout
    - Left: "Partner Starter Kit" pricing card (Stripe checkout)
    - Right: "Have Questions?" contact form (Softr webhook)

16. **Footer** — Legal disclaimer

---

## Key Decisions Made (Feb 9, 2026)

- **No "zero effort" messaging** — We want hardworking people, not side hustlers
- **No phone call offers** — Pierre-Olivier prefers written communication only
- **No exclusivity claims** — "you own your territory" removed (implies exclusivity we don't offer)
- **No absolute competition claims** — "One-of-a-Kind Product" qualified by pressure/size/weight
- **$3 Nimbus fee is non-negotiable** — Clearly disclosed upfront so partners don't try to negotiate
- **"Summer 2026" not "Q2 2026"** — Less binding, same timeframe
- **Continental US only** — Noted on the form
- **No training offered** — We offer support if needed, not formal training
- **23/50 counter kept** — But only once (bottom of page), not at top
- **Always preview before pushing** — Oslo sends draft to Desktop, Pierre-Olivier approves before deploy

---

## Meta Ad Campaigns (Active)

**Ad Account:** act_1053197295840663 (Nimbus Suspensions US)
**Pixel:** 904570802505882 (via GTM: GTM-WVK6898Q)
**Landing URL:** https://deltap.nimbus-suspensions.com/partners.html

### Active Campaigns (Total: $39/day)

**∆P Partners - Prospecting** (120240160811190642)
- Aviation ad set: $12/day (120240160827210642)
- Shop Owners ad set: $10/day (120240160833490642)
- Mobile Entrepreneurs ad set: $12/day (120240160834240642)
- Advantage+ Audience: OFF on all

**∆P Partners - Retargeting** (120240160811250642)
- Retargeting ad set: $5/day (120240160834650642)
- Audiences: Website Visitors 30d, exclude Leads

**∆P Pre-Launch** (older, reduced budgets)
- Aviation: $3/day
- Partners: $3/day
- Retarget: $1/day

### Tracking
- `deposit_submitted` — dataLayer event on thank-you page
- `partner_deposit` — dataLayer event when `?source=partner-deposit` param present
- GTM trigger needed for Meta Pixel `Purchase` event on partner_deposit

---

## Form Submission

**Webhook:** Softr workflow
- URL: `https://workflows-api.softr.io/v1/workflows/77c325dc-b451-420c-ae41-9330e58b1d5d/executions/1d5269c2-c615-4e81-89e1-eaadd631be2a`
- Fields: name, business (default N/A), email, phone, city, state, business_type, message

---

## Next Steps

1. Configure GTM trigger for `partner_deposit` event → Meta Pixel Purchase
2. Monitor ad performance after page redesign (new landing page = new conversion data)
3. Update 23/50 counter as new deposits come in
4. Get real partner testimonials once program launches
5. Consider interactive territory map (future enhancement)
6. A/B test: pricing card prominence, form length, CTA wording
