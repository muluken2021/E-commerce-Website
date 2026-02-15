import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    // Create payment method with card details
    const { error: stripeError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name,
        },
      });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
    } else {
      console.log("Payment Method Created:", paymentMethod);
      setSucceeded(true);
      setProcessing(false);
      // Here you can call your backend to create a payment intent
    }
  };

  const cardStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        "::placeholder": {
          color: "#a0aec0",
        },
        fontFamily: "sans-serif",
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name on Card"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
        required
      />

      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
        <CardElement options={cardStyle} />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}
      {succeeded && <div className="text-green-500 text-sm">Payment succeeded!</div>}

      <button
        type="submit"
        disabled={!stripe || processing}
        className={`w-full p-4 rounded-xl font-bold text-white transition ${
          processing ? "bg-gray-400" : "bg-orange-400 hover:bg-orange-500"
        }`}
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
