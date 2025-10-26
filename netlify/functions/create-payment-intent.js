const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
            headers: {
                "Allow": "POST"
            }
        };
    }

    try {
        const { amount } = JSON.parse(event.body);
        
        if (!amount || isNaN(amount) || amount <= 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Invalid amount" })
            };
        }

        const amountInCents = Math.round(amount * 100);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: "usd",
        });
        
        return {
            statusCode: 200,
            body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // Update this in production to your actual domain
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    } catch (error) {
        console.error("Stripe error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
            headers: {
                "Content-Type": "application/json"
            }
        };
    }
};
