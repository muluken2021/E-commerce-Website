import React from 'react';
import { CreditCard } from 'lucide-react';

export default function PaymentTabs({ selectedMethod, setSelectedMethod }) {
  const methods = [
    {
      key: 'card',
      label: 'Credit / Debit Card',
      icon: <CreditCard size={18} className="text-current" />,
    },
    {
      key: 'chapa',
      label: 'Chapa',
      icon: (
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.tqtIGpAPqP8t7_yVAUTTtQHaGV?pid=Api&P=0&h=220"
          className="w-8 h-6 object-contain"
          alt="Chapa"
        />
      ),
    },
  ];

  return (
    <div className="flex gap-3 mb-6">
      {methods.map(({ key, label, icon }) => {
        const active = selectedMethod === key;
        return (
          <button
            key={key}
            onClick={() => setSelectedMethod(key)}
            className={`flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all ${
              active
                ? 'border-brand-700 bg-brand-25 text-brand-700'
                : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
            }`}
          >
            <span className={active ? 'text-brand-700' : 'text-gray-400'}>{icon}</span>
            <span className="font-bold text-[13px]">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
