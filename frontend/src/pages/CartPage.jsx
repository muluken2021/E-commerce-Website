import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Over-Ear Headphones", price: 250.0, quantity: 2, img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
    { id: 2, name: "Wireless Over-Ear Headphones", price: 150.0, quantity: 1, img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
    { id: 3, name: "Wireless Over-Ear Headphones", price: 150.0, quantity: 4, img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-800 p-6">

      <div className="mx-0 lg:mx-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* --- LEFT SIDE: CART ITEMS --- */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-12">Your cart is empty</p>
          ) : cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-[#eeeeee]/60 p-6 shadow-sm">
              <div className="flex items-center gap-6">
                <div className="h-20 w-20 rounded-lg bg-white p-2 flex items-center justify-center border border-gray-100">
                  <img src={item.img} alt={item.name} className="max-h-full mix-blend-multiply" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm font-bold text-gray-600">{item.price.toFixed(1)} Birr</p>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="flex items-center gap-4">
                  <button onClick={() => increaseQuantity(item.id)} className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item.id)} className="text-gray-400 hover:text-gray-600"><Minus size={16} /></button>
                </div>
                
                <span className="w-24 text-right font-bold text-gray-800">
                  {(item.price * item.quantity).toFixed(1)} Birr
                </span>

                <button onClick={() => removeItem(item.id)} className="h-8 w-8 rounded bg-red-400 flex items-center justify-center text-white hover:bg-red-500 transition-colors">
                  <Trash2 size={16} fill="white" />
                </button>
              </div>
            </div>
          ))}

          {cartItems.length > 0 && (
            <div className="flex justify-end pt-4">
              <button onClick={clearCart} className="flex items-center gap-2 rounded-md border border-red-400 px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-50 transition-colors">
                <span className="h-3 w-3 bg-red-400 rounded-full"></span> Clear cart
              </button>
            </div>
          )}
        </div>

        {/* --- RIGHT SIDE: SUMMARY & ESTIMATE --- */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#eeeeee]/60 p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-300 pb-4">
              <span className="text-xl font-medium">Total :</span>
              <span className="text-2xl font-bold">{total.toFixed(1)} Birr</span>
            </div>

            <div className="mt-6 flex gap-2">
              <input 
                type="text" 
                placeholder="Voucher ..." 
                className="flex-1 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-xs italic outline-none"
              />
              <button className="rounded-md bg-[#e88154] px-6 py-2 text-xs font-bold text-white hover:bg-[#d17a50]">
                Apply
              </button>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-bold">Shipping Estimate</h4>
              <div className="mt-4 space-y-3">
                <div className="relative">
                  <select className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm text-gray-500 outline-none">
                    <option>Country</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-gray-600"></div>
                </div>
                <div className="relative">
                  <select className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm text-gray-500 outline-none">
                    <option>State</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-gray-600"></div>
                </div>
                <input 
                  type="text" 
                  placeholder="Zip Code" 
                  className="w-full rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none"
                />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full rounded-md border border-gray-500 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                Calculate shipping
              </button>
              <Link to="/checkout" >
              <button className="cursor-pointer w-full rounded-md bg-[#333333] py-2.5 text-sm font-bold text-white hover:bg-black transition-colors">
                Checkout Now
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
