import React from "react";

const ChapaPayment = () => {
  const handleChapaPayment = async () => {
    // Example using Chapa's v2 Checkout
    try {
      const response = await fetch("/api/create-chapa-payment", {
        method: "POST",
      });
      const data = await response.json();

      if (data.checkout_url) {
        window.location.href = data.checkout_url; // Redirect to Chapa checkout
      }
    } catch (error) {
      console.error("Chapa payment error:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-gray-700">
      <p className="mb-2 font-semibold">Pay with Chapa</p>
      <p className="text-sm mb-4">
        You will be redirected to Chapa's secure payment gateway.
      </p>
      <button
        onClick={handleChapaPayment}
        className="bg-orange-400 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition"
      >
        Proceed to Chapa
      </button>
    </div>
  );
};

export default ChapaPayment;
