/**
 * Nimbus Delta-P — Stripe Checkout Integration
 *
 * This handles the $100 deposit pre-order flow.
 *
 * SETUP REQUIRED:
 * 1. Replace STRIPE_PUBLISHABLE_KEY with your actual key
 * 2. Create two products in Stripe Dashboard:
 *    - "Delta-P Standard Kit Deposit" at $100
 *    - "Delta-P Extended Kit Deposit" at $100
 * 3. Create Payment Links for each product and update the URLs below
 *
 * OPTION A: Stripe Payment Links (Simplest - No backend needed)
 * OPTION B: Stripe Checkout with your own backend (More control)
 */

// =============================================================================
// CONFIGURATION — UPDATE THESE VALUES
// =============================================================================

const CONFIG = {
    // Option A: Payment Links (recommended for MVP)
    // Create these in Stripe Dashboard > Payment Links
    paymentLinks: {
        standard: 'https://buy.stripe.com/YOUR_STANDARD_KIT_LINK',
        extended: 'https://buy.stripe.com/YOUR_EXTENDED_KIT_LINK'
    },

    // Option B: Checkout Sessions (requires backend)
    // Uncomment and configure if using server-side checkout
    // checkoutEndpoint: 'https://your-api.com/create-checkout-session',

    // Product metadata for tracking
    products: {
        standard: {
            name: 'Delta-P Standard Kit',
            deposit: 100,
            fullPrice: 849,
            description: 'Head Unit V2, Gauge, Hose, 1x Filled Cartridge'
        },
        extended: {
            name: 'Delta-P Extended Kit',
            deposit: 100,
            fullPrice: 1099,
            description: 'Head Unit V2, Gauge, Hose, 2x Filled Cartridges'
        }
    }
};

// =============================================================================
// CHECKOUT HANDLER
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Find all pre-order buttons
    const buttons = document.querySelectorAll('[data-product]');

    buttons.forEach(button => {
        button.addEventListener('click', handlePreOrder);
    });
});

function handlePreOrder(event) {
    event.preventDefault();

    const button = event.currentTarget;
    const productType = button.getAttribute('data-product');

    if (!productType || !CONFIG.paymentLinks[productType]) {
        console.error('Invalid product type:', productType);
        return;
    }

    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Redirecting...';
    button.disabled = true;

    // Track the click (add your analytics here)
    trackPreOrderClick(productType);

    // Redirect to Stripe Payment Link
    // This is the simplest approach — no backend needed
    window.location.href = CONFIG.paymentLinks[productType];

    // Reset button after delay (in case redirect fails)
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 3000);
}

// =============================================================================
// ANALYTICS / TRACKING (Optional)
// =============================================================================

function trackPreOrderClick(productType) {
    const product = CONFIG.products[productType];

    // Google Analytics 4 (if configured)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            currency: 'USD',
            value: product.deposit,
            items: [{
                item_id: productType,
                item_name: product.name,
                price: product.deposit,
                quantity: 1
            }]
        });
    }

    // Facebook Pixel (if configured)
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
            content_name: product.name,
            content_ids: [productType],
            content_type: 'product',
            value: product.deposit,
            currency: 'USD'
        });
    }

    // Console log for debugging
    console.log('Pre-order initiated:', {
        product: productType,
        name: product.name,
        deposit: product.deposit
    });
}

// =============================================================================
// ALTERNATIVE: Stripe Checkout Sessions (Server-side)
//
// If you want more control, you can create checkout sessions on a backend.
// Uncomment and modify the function below if needed.
// =============================================================================

/*
async function handlePreOrderWithBackend(productType) {
    try {
        const response = await fetch(CONFIG.checkoutEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product: productType,
                successUrl: window.location.origin + '/thank-you',
                cancelUrl: window.location.href
            })
        });

        const { url } = await response.json();

        if (url) {
            window.location.href = url;
        } else {
            throw new Error('No checkout URL returned');
        }
    } catch (error) {
        console.error('Checkout error:', error);
        alert('Something went wrong. Please try again or contact support.');
    }
}
*/
