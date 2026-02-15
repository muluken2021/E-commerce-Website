import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm"; // Your Stripe form

const stripePromise = loadStripe("YOUR_STRIPE_KEY"); // Replace with your Stripe key

const CardPayment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CardPayment;
