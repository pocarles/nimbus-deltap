/**
 * Nimbus ∆P — Stripe Payment Links
 */

const PAYMENT_LINKS = {
    standard: 'https://buy.stripe.com/fZu00k1dCfmB2Bl3D30gw0e',
    extended: 'https://buy.stripe.com/28E00k9K8a2h4Jt7Tj0gw0f'
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-product]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.getAttribute('data-product');
            if (PAYMENT_LINKS[product]) {
                window.location.href = PAYMENT_LINKS[product];
            }
        });
    });
});
