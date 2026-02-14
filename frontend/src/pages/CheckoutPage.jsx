import React from 'react';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-800">
      <div className="mx-12 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* --- LEFT SIDE: FORMS --- */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Shipping Address Section */}
          <div className="rounded-2xl bg-[#eeeeee]/60 p-10 shadow-sm">
            <h3 className="mb-8 text-xl font-bold text-gray-700">Shipping Address</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input type="text" placeholder="Full Name" className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]" />
              <input type="text" placeholder="Phone Number" className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]" />
              <input type="email" placeholder="Email Address" className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]" />
              <div className="relative">
                <select className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm text-gray-500 outline-none">
                  <option>Country</option>
                </select>
                <div className="absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gray-800" />
              </div>
              <input type="text" placeholder="Address 1" className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]" />
              <input type="text" placeholder="Zip Code" className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]" />
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="rounded-2xl bg-[#eeeeee]/60 p-10 shadow-sm">
            <h3 className="mb-10 text-xl font-bold text-gray-700 font-sans">Pay with credit card</h3>
            
            <div className="space-y-8">
              {/* Option 1: Credit Card */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-5 w-5 rounded-full bg-gray-800" /> {/* Selected State */}
                  <span className="text-lg font-bold text-gray-700">Pay with credit card</span>
                </div>
                <div className="grid grid-cols-1 gap-6 pl-9 md:grid-cols-2">
                  <input type="text" placeholder="Card Number" className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none" />
                  <input type="text" placeholder="Card Number" className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none" />
                  <input type="text" placeholder="Name of the card" className="md:col-span-1 rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none" />
                </div>
              </div>

              {/* Option 2: Paypal */}
              <div className="flex items-center gap-4">
                <div className="h-5 w-5 rounded-full bg-gray-300" />
                <span className="text-lg font-bold text-gray-500">Pay with Paypal</span>
              </div>

              {/* Option 3: Cash */}
              <div className="flex items-center gap-4 pb-4">
                <div className="h-5 w-5 rounded-full bg-gray-300" />
                <span className="text-lg font-bold text-gray-500">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: SUMMARY --- */}
        <div className="h-fit rounded-2xl bg-[#eeeeee]/60 p-10 shadow-sm">
          <div className="space-y-5 border-b border-gray-300 pb-8">
            <div className="flex justify-between text-lg font-medium">
              <span>Sub Total :</span>
              <span className="font-bold">850.0 Birr</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Shipping :</span>
              <span>-</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Tax :</span>
              <span>-</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Discount :</span>
              <span>-</span>
            </div>
          </div>

          <div className="mt-8 text-3xl font-bold">
            850.0 Birr
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;