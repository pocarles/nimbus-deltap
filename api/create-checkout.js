/**
 * Vercel Serverless Function: Create Stripe Checkout Session
 *
 * POST /api/create-checkout
 * Body: { product: "standard" | "extended" }
 * Returns: { url: "https://checkout.stripe.com/..." }
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Product configuration (Early Bird: 28% off for first 100)
const PRODUCTS = {
    standard: {
        name: 'Nimbus ∆P Range Kit — $100 Deposit (Early Bird)',
        description: 'Reserve your ∆P Range Kit at 28% off ($611 total, reg. $849). $100 deposit today, $511 + shipping due before shipment.',
        amount: 10000, // $100.00 in cents
        fullPrice: 611,
        metadata: {
            product_type: 'range_kit',
            full_price: '611',
            regular_price: '849',
            balance_due: '511',
            discount: '28_percent_early_bird'
        }
    },
    extended: {
        name: 'Nimbus ∆P Extended Range Kit — $100 Deposit (Early Bird)',
        description: 'Reserve your ∆P Extended Range Kit at 28% off ($791 total, reg. $1,099). $100 deposit today, $691 + shipping due before shipment.',
        amount: 10000, // $100.00 in cents
        fullPrice: 791,
        metadata: {
            product_type: 'extended_range_kit',
            full_price: '791',
            regular_price: '1099',
            balance_due: '691',
            discount: '28_percent_early_bird'
        }
    }
};

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

module.exports = async (req, res) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).json({ ok: true });
        return;
    }

    // Only allow POST
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const { product } = req.body;

        // Validate product type
        if (!product || !PRODUCTS[product]) {
            res.status(400).json({
                error: 'Invalid product. Must be "standard" or "extended".'
            });
            return;
        }

        const productConfig = PRODUCTS[product];

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',

            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: productConfig.name,
                        description: productConfig.description,
                    },
                    unit_amount: productConfig.amount,
                },
                quantity: 1,
            }],

            // Collect shipping address (US only)
            shipping_address_collection: {
                allowed_countries: ['US'],
            },

            // Store product info in metadata for later reference
            metadata: productConfig.metadata,

            // Redirect URLs
            success_url: `${req.headers.origin || 'https://nimbus-deltap.vercel.app'}/thank-you.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin || 'https://nimbus-deltap.vercel.app'}/#pre-order`,

            // Customer email collection
            customer_creation: 'always',

            // Custom branding text
            custom_text: {
                submit: {
                    message: 'Your $100 deposit reserves your spot. Full refund available anytime before shipping.',
                },
            },
        });

        res.status(200).json({ url: session.url });

    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({
            error: 'Failed to create checkout session',
            details: error.message
        });
    }
};
