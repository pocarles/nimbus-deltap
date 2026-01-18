# Delta-P Landing Page — Setup Guide

## Quick Start

This landing page uses Stripe Payment Links for the simplest possible checkout flow. No backend required.

---

## Step 1: Create Stripe Products

1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → Products
2. Click **+ Add Product**

### Product 1: Standard Kit Deposit
- **Name:** Delta-P Standard Kit — $100 Deposit
- **Description:** Reserve your Delta-P Standard Kit ($849 total). $100 deposit today, $749 + shipping due before shipment.
- **Price:** $100.00 USD (One-time)
- Click **Save**

### Product 2: Extended Kit Deposit
- **Name:** Delta-P Extended Kit — $100 Deposit
- **Description:** Reserve your Delta-P Extended Kit ($1,099 total). $100 deposit today, $999 + shipping due before shipment.
- **Price:** $100.00 USD (One-time)
- Click **Save**

---

## Step 2: Create Payment Links

1. Go to Stripe Dashboard → Payment Links
2. Click **+ New**

### Link 1: Standard Kit
- Select "Delta-P Standard Kit — $100 Deposit"
- **After payment:** Redirect to your thank-you page (e.g., `https://your-domain.com/thank-you.html`)
- **Collect:** Email address (required), Shipping address (recommended)
- Click **Create link**
- Copy the URL (looks like `https://buy.stripe.com/abc123`)

### Link 2: Extended Kit
- Repeat for Extended Kit
- Copy the URL

---

## Step 3: Update the Code

Open `checkout.js` and update the payment links:

```javascript
const CONFIG = {
    paymentLinks: {
        standard: 'https://buy.stripe.com/YOUR_STANDARD_LINK_HERE',
        extended: 'https://buy.stripe.com/YOUR_EXTENDED_LINK_HERE'
    },
    // ...
};
```

---

## Step 4: Deploy to Vercel

### Option A: Via GitHub (Recommended)

1. Create a GitHub repo:
   ```bash
   cd /Users/bigbrother/Documents/Claude-Projects/Delta-P/landing-page
   git init
   git add .
   git commit -m "Initial landing page"
   gh repo create nimbus-delta-p --public --source=. --push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click **Add New → Project**
4. Import your GitHub repo
5. Click **Deploy**

### Option B: Direct Upload

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `cd /path/to/landing-page && vercel`
3. Follow the prompts

---

## Step 5: Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add `delta-p.nimbus-suspensions.com` (or similar)
3. Update your DNS:
   - Type: CNAME
   - Name: delta-p
   - Value: cname.vercel-dns.com

---

## File Structure

```
landing-page/
├── index.html      # Main landing page
├── styles.css      # All styling
├── checkout.js     # Stripe integration
├── thank-you.html  # Post-purchase page (create this)
└── SETUP.md        # This file
```

---

## Testing Checklist

- [ ] Payment Links work in Stripe test mode
- [ ] Buttons redirect to correct checkout
- [ ] Thank-you page shows after payment
- [ ] Mobile layout looks good
- [ ] All links work (Contact, Privacy, Terms)

---

## After Launch: Collecting Balance

When ready to ship (Q2 2026):

1. Export customers from Stripe Dashboard → Payments
2. Email each customer with a new Payment Link for their balance:
   - Standard Kit: $749 + shipping
   - Extended Kit: $999 + shipping
3. Ship once balance is paid

---

## Optional: Add Analytics

### Google Analytics 4

Add before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

Add before `</head>`:
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## Support

Questions? Email delta-p@nimbus-suspensions.com
