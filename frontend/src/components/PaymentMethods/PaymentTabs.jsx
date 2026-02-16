import React from "react";
import { CreditCard, Banknote } from "lucide-react";

const PaymentTabs = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={() => setSelectedMethod("card")}
        className={`flex-1 flex flex-col items-start p-4 rounded-xl border-2 transition-all ${
          selectedMethod === "card"
            ? "border-brand-400 bg-white ring-4 ring-blue-50"
            : "border-gray-100 bg-gray-50"
        }`}
      >
        <CreditCard
          className={`w-5 h-5 mb-1 ${
            selectedMethod === "card" ? "text-brand-400" : "text-gray-400"
          }`}
        />
        <span className="font-semibold text-gray-700">Card</span>
      </button>

      <button
        onClick={() => setSelectedMethod("chapa")}
        className={`flex-1 flex flex-col items-start p-4 rounded-xl border-2 transition-all ${
          selectedMethod === "chapa"
            ? "border-brand-400 bg-white ring-4 ring-blue-50"
            : "border-gray-100 bg-gray-50"
        }`}
      >
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.tqtIGpAPqP8t7_yVAUTTtQHaGV?pid=Api&P=0&h=220"
          className="w-10 h-7 mb-1"
        />
        <span className="font-semibold text-gray-700">Chapa</span>
      </button>

      
    </div>
  );
};

export default PaymentTabs;
