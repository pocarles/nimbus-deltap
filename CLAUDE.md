# Delta-P Project

## Overview
The Nimbus Delta-P is a high-pressure (120 bar / 725 PSI output) portable nitrogen adjustment system for the premium off-road, motorsport, and industrial markets. Key differentiator: **"Ready-to-Race"** — the only pre-filled nitrogen solution on the US market (competitors ship empty).

## Project Status
**Phase**: Pre-Execution / Strategy Phase

## Product Information
- **Product Name**: Nimbus Delta-P
- **Brand**: Nimbus Suspensions
- **Type**: Portable nitrogen adjustment system (120 bar)
- **HQ**: Palm Beach Gardens, FL
- **Target Market**: US (primary), B2B industrial niches
- **OEM**: Bimpair (France)
- **Warranty**: 2 years

## Technical Specs (Quick Reference)
| Spec | Value |
|------|-------|
| Storage Pressure | 120 bar |
| Output Pressure | 0–50 bar (0–725 PSI) |
| Deployed Volume | ~54 liters N₂ per cartridge |
| Cartridge Capacity | 0.450 L |
| Cartridge Dimensions | 61mm Ø × 300mm H |
| Cartridge Weight | 900g |
| Head Unit Weight | 215g |
| Gauge Weight | 350g |
| Total Kit Weight | ~1.5 kg |
| Safety Rating | Tested to 300 bar |

### Component References (OEM Part Numbers)
- Head Unit V2: `BV-TCAPSV2`
- Cartridge: `BI-BOE-CART8`
- Analog Gauge 50B: `BV-ADSUSP-40B`
- Charging Ramp: `BV-RPAZOTE160B`

### Why Nitrogen (vs Air)
- Pressure stability over time
- Humidity insensitive
- Consistent damping behavior
- Reduced internal oxidation

## Competitive Position
- **Main Competitor**: Power Tank (Shock Boss) @ $699 — ships empty, customer must find welding shop
- **Nimbus Advantage**: "Unbox & Go" — ships pre-filled, ready to use

## SKUs & Pricing

| SKU | Contents | MSRP | Wholesale (-30%) | COGS |
|-----|----------|------|------------------|------|
| Standard Kit | Head V2, Gauge, Hose, 1x Filled Cartridge | $849 | $594.30 | $288.81 |
| Extended Kit | Head V2, Gauge, Hose, 2x Filled Cartridges | $1,099 | $769.30 | $376.73 |
| Pro Refill Station (B2B) | Charging Ramp + Workshop Stand | $1,499 | $999 | $394.77 |

**Margins**:
- Standard Kit: 66% gross, ~$505 net (after ~$55 Hazmat shipping)
- Extended Kit: 66% gross, ~$667 net (after ~$55 Hazmat shipping)

## OEM Pricing (Ex-Works France @ 1.17 USD/EUR)
*Source: Quote OFR000388 (2025-12-09), Supplier: SAS PFF / Bimpair*

| Component | List (EUR) | Net -30% (EUR) | Net (USD) |
|-----------|------------|----------------|-----------|
| Head Unit V2 | €110.00 | €77.00 | $90.09 |
| Cartridge 0.450L | €95.00 | €66.50 | $77.81 |
| Analog Gauge 50B | €96.50 | €67.55 | $79.03 |
| Charging Ramp | €440.00 | €308.00 | $360.36 |

**OEM Payment Terms**: Cheque, due on invoice (Société Générale)

## Logistics Model ("Florida Hub")
1. **Import**: Ships EMPTY from France (non-hazmat, Class 9)
2. **Production**: Fill to 120 bar at Palm Beach Gardens workshop
3. **Distribution**:
   - DTC: UPS/FedEx Ground Hazmat (Class 2.2 UN1066), $40-55 surcharge baked into price
   - B2B Partners: Ship EMPTY, partners fill on-site

## Partner Network: Hologram Seal System
- Partners buy "Refill Packs" ($250 for 50 serialized hologram stickers = $5/refill)
- Consumer refill price: $30
- Partner profit per refill: $24.50 (81% margin)
- No metering needed — stickers are the control mechanism

## B2B Niche Markets
1. **Aviation Maintenance (GSE)**: Landing gear struts on light aircraft
2. **Industrial Automation**: Nitrogen die springs, gas struts in machinery
3. **Commercial Door Installers**: Fire doors, overhead gates

## Financial Projections (First 100 Units)
- Revenue: ~$95,000
- COGS + Shipping: ~$38,000
- Net Profit: ~$57,000
- Break-even: 36 units

## Open Questions (from launch plan)
### Logistics
- [ ] Hazmat shipping account setup (UPS/FedEx)
- [ ] Source "K" Size N2 tank + 200 Bar regulator for FL workshop

### Pricing Validation
- [ ] Validate $30 consumer refill price
- [ ] Confirm Hazmat surcharge range with carrier quotes

### Partner Network
- [ ] Identify first 5 seed partners
- [ ] Validate partner interest in Hologram system

### Marketing
- [ ] ROI One-Pager for Shop Partners
- [ ] Website update with MSRPs and "Ready-to-Use" messaging

## E-Commerce Strategy
**Decision**: Landing page + Stripe API (MVP) → Shopify later

**Current Setup**:
- Static landing page (HTML/CSS/JS) + Vercel serverless API
- Stripe Checkout Sessions via restricted API key
- Deploy via Vercel (auto-deploy from GitHub)
- Manual order fulfillment for first batch
- US-only shipping (address collection at checkout)

**Why not Shopify yet**: Testing demand before committing to full store setup
**Why not GHL**: No Hazmat shipping support, manual tracking required

**Pre-Order Flow**:
1. Customer clicks "Reserve" → Stripe Checkout (collects US address)
2. $100 deposit charged, confirmation email sent
3. When ready to ship: send balance-due Payment Link ($749 or $999 + shipping)
4. Ship after balance paid

**Stripe Integration**:
- Mode: Test (switching to live after validation)
- API: Restricted key with Checkout Sessions, Products, Prices, Customers write access
- Key stored in: Vercel environment variables (STRIPE_SECRET_KEY)

**GitHub Repo**: https://github.com/pocarles/nimbus-deltap

**Files**: `landing-page/` contains all source code + setup guide

## Naming Convention
- Primary: **∆P** (delta symbol)
- Fallback: **DeltaP** (when symbols not supported)

## Deliverables Checklist
- [x] Strategic launch plan document
- [x] Landing page design
- [x] Landing page development
- [x] Marketing copy (landing page)
- [x] FAQ section
- [ ] Product documentation / user manual
- [ ] Product images / renders
- [ ] Technical specifications sheet (public version)
- [ ] Partner ROI One-Pager

## Project Structure
```
Delta-P/
├── CLAUDE.md              # Project memory (quick reference)
├── SOURCE-OF-TRUTH.md     # Single authoritative reference for all facts
├── specs/
│   ├── launch-plan.md     # Full strategic launch plan
│   ├── technical-specifications.md  # OEM tech specs
│   └── cost-structure.md  # Pricing, COGS, margins (CONFIDENTIAL)
├── landing-page/          # Landing page source files
├── docs/                  # User documentation
├── assets/                # Images, logos, renders
└── marketing/             # Marketing copy and materials
```

## Key Decisions
- Premium positioning above $699 competitor (MSRP $849+)
- "Hologram Seal" system for partner network monetization (no metering)
- Florida Hub model to ship pre-filled (unique market advantage)

## Version History
- 2026-01-18: Landing page built (HTML/CSS/JS + Stripe integration)
- 2026-01-18: E-commerce decision: Landing page + Stripe MVP (not GHL/Shopify yet)
- 2026-01-18: SOURCE-OF-TRUTH.md created (consolidated authoritative reference)
- 2026-01-18: Cost structure & sales terms added (Quote OFR000388)
- 2026-01-18: Technical specifications added (OEM Bimpair data)
- 2026-01-18: Project created, launch plan memorized
