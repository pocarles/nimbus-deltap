# ∆P Website Redesign: B2B2C Partner-First Strategy

**Date:** 2026-02-09  
**Author:** Oslo  
**Status:** Proposal — awaiting approval

---

## The Problem

**Current messaging doesn't match the business model:**

1. **Homepage is B2C-first**  
   - "Reserve Your Spot" hero CTA  
   - "28% off for first 100"  
   - Direct purchase flow dominates  
   - Partners page is buried in nav

2. **$100 signup is confusing**  
   - Says "Lock in your discounted price" (implies commitment)  
   - No clarity that launch is conditional  
   - Partners think they're buying product, not reserving a spot  
   - Doesn't explain pre-launch timestamp concept

3. **B2B2C model is invisible**  
   - Partners will be the primary channel  
   - Direct sales are secondary  
   - Website doesn't reflect this reality

---

## The Solution: Three-Tier Homepage Redesign

### 1. **Hero Section: Partners First**

**New headline:**  
> "Power the ∆P Network. Build Your Business."

**Subhead:**  
> "Join the first portable nitrogen refill network. Whether you run a shop or want to build a side hustle, we send you customers — you keep the profits."

**Two CTAs (side by side):**  
- **Primary (black button):** "Become a Partner" → partners.html  
- **Secondary (outline button):** "Buy for Your Own Shop" → #reserve

**Visual:** Replace product-only image with composite:  
- Left: Partner at work (mobile refill or shop setting)  
- Right: Product in use  
- Visual hierarchy: partners > product

---

### 2. **Clarify the $100 Pre-Launch Signup**

**Current language (confusing):**  
> "Lock in your discounted price with a $100 refundable deposit. Limited spots available."

**New language (transparent):**  
> **"Reserve Your Pre-Launch Spot — $100 Refundable"**  
>  
> We're gauging demand to decide if we should manufacture the ∆P.  
>  
> **If we launch:** Your $100 holds your 28% early-bird discount. Pay the balance when ready to ship (Q2 2026).  
> **If we don't launch:** Full refund. No risk.  
>  
> This is a timestamp, not a commitment. You're helping us validate demand.

**Add visual trust signals:**  
- ✅ 100% refundable  
- ✅ No obligation to purchase  
- ✅ You decide when we ship (if we launch)

---

### 3. **Restructure Homepage Sections**

**New order (partner-first):**

1. **Hero:** Partners first, direct sales secondary  
2. **Stats Bar:** Keep (validates credibility)  
3. **NEW: Partner Value Prop** (move up from buried section)  
   - "Why Partners Love the ∆P Network"  
   - Recurring revenue, we send customers, zero admin  
   - CTA: "See Partner Benefits"

4. **Product Video:** Keep (shows what partners will service)  
5. **Story Section:** Keep, but tweak copy to emphasize B2B2C  
6. **Technology/Specs:** Keep  
7. **Reserve Section:** Clarify pre-launch signup (see above)  
8. **FAQ:** Add partner-specific questions  
9. **CTA:** Final dual CTA (partners + direct)

---

### 4. **Partners Page Enhancements**

**Keep current structure, but add:**

1. **Pre-Launch Clarity Section** (new, top of page after hero)  
   > **"Join Now, Launch Later — Here's How It Works"**  
   >  
   > We're collecting interest to validate demand before manufacturing.  
   >  
   > **Your $100 signup:**  
   > - Secures your territory (first in your area)  
   > - Locks in pre-launch partner pricing  
   > - Gets you on the priority list for training & support  
   > - 100% refundable if we don't launch  
   >  
   > **No commitment.** You're helping us decide if the market wants this.

2. **Territory Map Teaser**  
   - Visual: US map with "Be the first in your area"  
   - Implies scarcity without being misleading

3. **Social Proof Section**  
   - "Shops already interested: [number]"  
   - "Solo entrepreneurs signed up: [number]"  
   - Build FOMO without lying

---

### 5. **Navigation Changes**

**Current nav:**  
Story | Technology | Specs | FAQ | Partners | Contact

**New nav:**  
**Partners** | For Direct Use | Story | Tech | Specs | FAQ | Contact

- Move Partners to first position (signals priority)  
- Rename "Reserve Now" to "For Direct Use" or "Buy Direct" (clarifies it's not the main path)

---

## Messaging Framework

### Key Themes to Reinforce

1. **B2B2C Model:**  
   - "We build it. You service it. Customers come to you."  
   - "Join the network. We send you customers."

2. **Pre-Launch Transparency:**  
   - "We're gauging demand."  
   - "Your signup helps us decide if we should manufacture this."  
   - "No obligation. Just interest."

3. **Partner-First Economics:**  
   - "Recurring revenue from refills"  
   - "We can't ship nitrogen. You become the local refill point."  
   - "Build a business. We'll send you customers."

4. **Risk-Free Signup:**  
   - "100% refundable"  
   - "No commitment"  
   - "You decide later"

---

## Copy Changes: Before & After

### Homepage Hero

**BEFORE:**  
> "Portable Nitrogen System for Suspension Tuning"  
> "We built this for ourselves. Now we're gauging demand to see if we should produce it for others."  
> [Single CTA: "Reserve Your Spot"]

**AFTER:**  
> "Power the ∆P Refill Network"  
> "Join the first portable nitrogen system designed for partners. We build it. You service it. Customers come to you."  
> [Dual CTA: "Become a Partner" (primary) | "Buy for Your Shop" (secondary)]

---

### Reserve Section Headline

**BEFORE:**  
> "28% off for the first 100"  
> "Lock in your discounted price with a $100 refundable deposit. Limited spots available."

**AFTER:**  
> "Reserve Your Pre-Launch Spot"  
> "Help us validate demand. Your $100 holds your place in line — 100% refundable if we don't launch."

---

### Partner Page Hero

**BEFORE:**  
> "Become the Go-To Nitrogen Refill Point in Your Area"  
> [Generic benefits]

**AFTER:**  
> "Join the ∆P Partner Network — Pre-Launch Signup"  
> "We're gauging demand. Your $100 signup is a vote of interest, not a commitment. If we launch, you're first in your area. If we don't, full refund."

---

## Technical Implementation

**Files to modify:**

1. `/root/deltap-website/index.html`  
   - Hero section (new dual CTA)  
   - New partner value prop section (move up)  
   - Reserve section (clarify pre-launch)  
   - Navigation (reorder)

2. `/root/deltap-website/partners.html`  
   - Add pre-launch clarity section at top  
   - Territory map teaser  
   - Social proof counters

3. `/root/deltap-website/styles.css`  
   - New dual-CTA button styles  
   - Partner-first visual hierarchy

4. **No backend changes needed** — Stripe checkout stays the same, messaging changes only

---

## Risks & Mitigations

**Risk 1:** Confusion between partner signup vs direct purchase  
**Mitigation:** Clear visual distinction (different CTAs, different pages, different copy)

**Risk 2:** Lower direct sales conversion (if people think they MUST be partners)  
**Mitigation:** Keep direct purchase path visible but secondary. "Not interested in partnering? Buy for your own use here."

**Risk 3:** Partners still don't understand pre-launch concept  
**Mitigation:** Repeat "100% refundable, no commitment" everywhere. Add FAQ: "What if you don't launch?"

---

## Next Steps

1. **Approve this strategy** (or request changes)  
2. I'll create mockup HTML sections for key changes  
3. You review mockups  
4. I implement changes to live site  
5. Update ad copy to match new messaging (Aviation + Partners ads)  
6. Monitor conversion impact

---

## Questions for You

1. **Hero CTA priority:** Do you want "Become a Partner" as the ONLY hero CTA, or dual CTAs?  
2. **Direct sales visibility:** How visible should direct purchase be? (e.g., hero secondary CTA vs buried below fold?)  
3. **Territory exclusivity:** Can we claim "first in your area" for partners? (scarcity angle)  
4. **Social proof numbers:** Do you have actual counts of partner signups I can use?  
5. **Timeline messaging:** Still comfortable with "Q2 2026 if we launch"?

---

**Recommendation:**  
Let's implement this in phases:  
- **Phase 1 (this week):** Homepage hero + reserve section clarity  
- **Phase 2 (next week):** Partners page enhancements  
- **Phase 3:** New ad variants testing B2B2C messaging

Approve Phase 1 and I'll start building.
