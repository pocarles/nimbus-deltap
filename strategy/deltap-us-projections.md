# ∆P US Projections — Cost & Revenue Model

**Created:** 2026-02-10
**Source:** PFF Invoice FC_000875 (2025-09-09) + Pierre-Olivier inputs

## Component Costs (Ex-Works France, HT)

From PFF (Production Functional Factory) invoice:

| Reference | Description | Unit Cost (EUR) | Unit Cost (USD @1.04) |
|-----------|-------------|-----------------|----------------------|
| BV-TCAPSV2 | Tête de Capsule V2 (Head V2) | €96.00 | $99.84 |
| BI-BOE-CART8 | Cartouche 0.450L Alu (Cartridge) | €95.00 | $98.80 |
| BV-RPAZOTE160B | Rampe Chargement Azote 160 Bars (Nitrogen Ramp) | €260.00 | $270.40 |
| BV-AMANODIGIT-SUSP | Manomètre Digital (Digital Gauge) | €89.50 | $93.08 |
| **TOTAL** | | **€540.50** | **$562.12** |

**Supplier:** SAS PFF Production Functional Factory
**Exchange rate:** EUR/USD 1.20 (Pierre-Olivier directive, Feb 2026 — rate is 1.18, using 1.20 for safety margin)

## Tariffs & Shipping (France → US)

**US Tariff Regime (as of Feb 2026):**
- **EU Reciprocal tariff:** 15% (US-EU deal, July 2025)
- **Section 232 aluminum/steel:** 50% but ONLY on raw metal content (not full manufactured value)
- **232 products excluded from reciprocal** — one or the other, not stacked
- **Blended effective rate on aluminum parts (head, cartridge):** ~20%
- **Standard rate on non-metal parts (ramp, gauge):** 15%

**Landed Costs (USD @1.20):**
- Head V2: $115.20 + 20% = **$138.24**
- Cartridge: $114.00 + 20% = **$136.80**
- Ramp: $312.00 + 15% = **$358.80**
- Gauge: $107.40 + 15% = **$123.51**
- Consumer kit (H+C+shipping): **$305.04**
- Starter kit (all+shipping): **$807.35**

**Margins:**
- Consumer kit at $849 retail: **64.1% gross margin**
- Starter kit at $1,499: **46.1% gross margin**

## Retail Prices (from deltap.nimbus-suspensions.com)

- **Standard Kit:** $849 (pre-launch $611) — Head V2 + 1 Pre-Filled Cartridge
- **Pro Kit:** $1,099 (pre-launch $791) — Head V2 + Cartridge (larger config)

## Partner Program Economics

- **Starter Kit:** $999 pre-launch / $1,499 regular
- **Nimbus refill fee:** $3/refill (non-negotiable)
- **Nitrogen cost:** ~$0.50/refill
- **Suggested refill price:** $30
- **Partner profit per refill:** ~$26.50 (88% gross margin for partner)
- **Refill capture rate:** ~80% (cheating/unreported estimated 20-25%)
- **Partner onboarding rate:** 10-15/month with dedicated person

## Revenue Streams for Nimbus US

1. **Partner Starter Kits** — one-time per partner
2. **∆P Hardware sales** (heads + cartridges to partners for resale)
3. **$3/refill fee** — recurring per service performed

## Partner Commission Tiers (Quarterly Reset)

- **Tier 1 — 25%**: 1-10 units/quarter
- **Tier 2 — 35%**: 11-30 units/quarter
- **Tier 3 — 40%**: 31+ units/quarter
- Resets each quarter — no permanent tiers

## Projections Model

- **Script:** `/tmp/deltap_projections.py`
- **Launch:** June 2026
- **Onboarding:** 12 partners/month
- **Partner ramp:** 2 units/month (new) → 5 units/month (mature, 10+ months)
- **Refill ramp:** 10/month (new) → 50/month (mature)
- **Refill capture:** 80% (20% cheating/unreported)

### Year 1 Results (V2 — EUR/USD 1.20, real tariffs)
- 144 partners, 2,940 hardware units, 17,664 refills
- **Revenue: $2.13M** | **Gross Profit: $1.12M** | **52.5% margin**

### 18-Month Results
- 216 partners, 7,368 hardware units, 49,056 refills
- **Revenue: $5.10M** | **Gross Profit: $2.67M** | **52.5% margin**

### Month 18 Run Rate (Annualized)
- Revenue: $7.06M/year
- Profit: $3.69M/year
- Refill ARR: $231K (and growing)

### TAM (Total Addressable Market)
- Aircraft mechanics: 160,800
- FAA repair stations: ~3,700
- Auto repair shops: 176,000+
- Motorcycle/powersports: 15,781
- Golf cart dealers: 919-5,924
- RV repair: 9,205
- Bike shops: ~3,000-7,000
- **Realistic addressable: 30,000-50,000**
- Year 1 target = <0.5% of TAM

### ⚠️ To Validate
- Shipping per unit France → FL (using $30-50 estimate)
- Units per partner per month assumptions (2→5 ramp)
- Refills per partner per month assumptions (10→50 ramp)
- Exact Section 232 aluminum content % in cartridge and head
