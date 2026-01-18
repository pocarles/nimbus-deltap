/**
 * Nimbus ∆P — Stripe Checkout Integration
 *
 * Calls /api/create-checkout to create a Stripe Checkout Session
 * and redirects the user to complete payment.
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

const CONFIG = {
    // API endpoint (relative URL works on same domain)
    checkoutEndpoint: '/api/create-checkout',

    // Product metadata for tracking
    products: {
        standard: {
            name: '∆P Standard Kit',
            deposit: 100,
            fullPrice: 849,
            description: 'Head Unit V2, Gauge, Hose, 1x Filled Cartridge'
        },
        extended: {
            name: '∆P Extended Kit',
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

async function handlePreOrder(event) {
    event.preventDefault();

    const button = event.currentTarget;
    const productType = button.getAttribute('data-product');

    if (!productType || !CONFIG.products[productType]) {
        console.error('Invalid product type:', productType);
        return;
    }

    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;

    try {
        // Track the click (analytics)
        trackPreOrderClick(productType);

        // Call our API to create a checkout session
        const response = await fetch(CONFIG.checkoutEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product: productType })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to create checkout session');
        }

        if (data.url) {
            // Redirect to Stripe Checkout
            window.location.href = data.url;
        } else {
            throw new Error('No checkout URL returned');
        }

    } catch (error) {
        console.error('Checkout error:', error);
        alert('Something went wrong. Please try again or contact support.');

        // Reset button
        button.textContent = originalText;
        button.disabled = false;
    }
}

// =============================================================================
// ANALYTICS / TRACKING
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
