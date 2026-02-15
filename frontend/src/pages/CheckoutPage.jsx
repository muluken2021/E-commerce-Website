import React, { useState } from "react";
import PaymentTabs from "../components/PaymentMethods/PaymentTabs";
import CardPayment from "../components/PaymentMethods/CardPayment";
import ChapaPayment from "../components/PaymentMethods/ChapaPayment";



const CheckoutPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-800">
      <div className="md:mx-12 mx-3 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* LEFT: Shipping + Payment */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Form */}
          <div className="rounded-2xl bg-[#eeeeee]/60 p-5 md:p-10 shadow-sm">
            <h3 className="mb-8 text-xl font-bold text-gray-700">Shipping Address</h3>
             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <input

                type="text"

                placeholder="Full Name"

                className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]"

              />

              <input

                type="text"

                placeholder="Phone Number"

                className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]"

              />

              <input

                type="email"

                placeholder="Email Address"

                className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]"

              />

              <div className="relative">

                <select

                  value=""

                  

                  className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#e88154]"

                >

                  <option value="">Select Country</option>

                  <option value="ethiopia">Ethiopia</option>

                  <option value="usa">USA</option>

                  <option value="uk">UK</option>

                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">

                  ▼

                </div>

              </div>

              <input

                type="text"

                placeholder="Address 1"

                className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]"

              />

              <input

                type="text"

                placeholder="Zip Code"

                className="rounded-md border border-gray-400 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#e88154]"

              />

            </div>

            
          </div>

          {/* Payment Section */}
          <div className="rounded-2xl bg-[#eeeeee]/60 p-5 md:p-10 shadow-sm">
            <h3 className="mb-8 text-xl font-bold text-gray-700">Payment</h3>
            <PaymentTabs
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
            />

            {selectedMethod === "card" && <CardPayment />}
            {selectedMethod === "chapa" && <ChapaPayment />}
           
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
