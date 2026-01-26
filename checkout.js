/**
 * Nimbus ∆P — Stripe Payment Links Integration
 * 
 * Direct redirect to Stripe Payment Links (no backend required)
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

const CONFIG = {
    // Direct Stripe Payment Links
    paymentLinks: {
        standard: 'https://buy.stripe.com/fZu00k1dCfmB2Bl3D30gw0e',
        extended: 'https://buy.stripe.com/28E00k9K8a2h4Jt7Tj0gw0f'
    },

    // Product metadata for tracking
    products: {
        standard: {
            name: '∆P Range Kit',
            deposit: 100,
            fullPrice: 611,
            description: 'Head Unit V2, Gauge, Hose, 1x Filled Cartridge'
        },
        extended: {
            name: '∆P Extended Range Kit',
            deposit: 100,
            fullPrice: 791,
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

    // Track the click (analytics)
    trackPreOrderClick(productType);

    // Redirect to Stripe Payment Link
    window.location.href = CONFIG.paymentLinks[productType];
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
        deposit: product.deposit,
        paymentLink: CONFIG.paymentLinks[productType]
    });
}
