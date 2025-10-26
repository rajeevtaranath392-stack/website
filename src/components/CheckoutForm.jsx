import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.scss";

// Determine the payment endpoint based on the environment
const PAYMENT_ENDPOINT = import.meta.env.PROD 
    ? '/.netlify/functions/create-payment-intent'
    : 'http://localhost:5000/create-payment-intent';

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    // Log the current environment and endpoint being used
    console.log('Environment:', import.meta.env.PROD ? 'Production' : 'Development');
    console.log('Using payment endpoint:', PAYMENT_ENDPOINT);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        amount: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setError(null);

        if (!stripe || !elements || !validateAmount(formData.amount)) {
            setError("Please enter a valid amount");
            setProcessing(false);
            return;
        }

        try {
            // Create a PaymentIntent using the appropriate endpoint
            const response = await fetch(PAYMENT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseFloat(formData.amount),
                    email: formData.email,
                    name: formData.name
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create payment intent');
            }

            const { clientSecret } = await response.json();

            // Confirm the payment with Stripe
            const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: formData.name,
                        email: formData.email,
                        address: {
                            line1: formData.address
                        }
                    }
                }
            });

            if (confirmError) {
                throw new Error(confirmError.message);
            }

            if (paymentIntent.status === 'succeeded') {
                setSuccess(true);
            } else {
                throw new Error('Payment was not successful. Please try again.');
            }

            setProcessing(false);
        } catch (err) {
            console.error('Payment Error:', err);
            setError(err.message || "An unexpected error occurred. Please try again later.");
            setProcessing(false);
        }
    };

    if (success) {
        return (
            <div className="checkout-container">
                <div className="checkout-success">
                    <h2>Thank you for your donation!</h2>
                    <p>Your payment of ${formData.amount} has been processed successfully.</p>
                    <p>A confirmation email will be sent to {formData.email}</p>
                </div>
            </div>
        );
    }

    const validateAmount = (value) => {
        const numValue = parseFloat(value);
        return !isNaN(numValue) && numValue > 0;
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        // Only allow numbers and decimal point
        if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
            handleInputChange(e);
        }
    };

    return (
        <div className="checkout-container">
            <div className="checkout-wrapper">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <h2>Secure Donation</h2>
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">Donation Amount ($)</label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleAmountChange}
                            required
                            placeholder="Enter donation amount"
                            pattern="^\d*\.?\d{0,2}$"
                            title="Please enter a valid amount"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your address"
                        />
                    </div>

                    <div className="form-group">
                        <label>Card Details</label>
                        <div className="card-element-wrapper">
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        className="submit-button"
                        type="submit"
                        disabled={!stripe || processing || !validateAmount(formData.amount)}
                    >
                        {processing ? "Processing..." : `Donate $${formData.amount || '0'}`}
                    </button>

                    <div className="secure-notice">
                        <small>🔒 Your payment information is secure and encrypted</small>
                    </div>
                </form>
            </div>
        </div>
    );
}
