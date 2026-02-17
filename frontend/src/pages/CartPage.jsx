import React from 'react';
import { Trash2, Plus, Minus, Delete, RemoveFormatting, DeleteIcon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const CartPage = () => {
  const { cartItems, addItem, removeItem, updateQuantity, clearCart, totalAmount } = useCart();

  const increaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      addItem(item, 1);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: `Added 1 more ${item.name}`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQty = Math.max(item.quantity - 1, 1);
      updateQuantity(id, newQty);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'info',
        title: `Decreased quantity of ${item.name}`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  const handleRemoveItem = (id) => {
    const item = cartItems.find(item => item.id === id);
    removeItem(id);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: `${item.name} removed from cart`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const handleClearCart = () => {
    clearCart();
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: `Cart cleared`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  return (
    <div className="min-h-screen  font-sans text-gray-800 p-6">
      <div className="mx-0 lg:mx-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* --- LEFT SIDE: CART ITEMS --- */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-12">Your cart is empty</p>
          ) : cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-gray-100 px-6 p-3 shadow-sm">
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
                  <button onClick={() => increaseQuantity(item.id)} className="cursor-pointer text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item.id)} className="cursor-pointer text-gray-400 hover:text-gray-600"><Minus size={16} /></button>
                </div>
                
                <span className="w-24 text-right font-bold text-gray-800">
                  {(item.price * item.quantity).toFixed(1)} Birr
                </span>

                <button onClick={() => handleRemoveItem(item.id)} className="cursor-pointer h-8 w-8 rounded  flex items-center justify-center text-brand-400 hover:text-brand-500 transition-colors">
                  <Trash2  />
                </button>
              </div>
            </div>
          ))}

          {cartItems.length > 0 && (
            <div className="flex justify-end pt-4">
              <button onClick={handleClearCart} className="cursor-pointer flex items-center gap-2 rounded-md border border-red-400 px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-50 transition-colors">
                <Trash2 /> Clear cart
              </button>
            </div>
          )}
        </div>

        {/* --- RIGHT SIDE: SUMMARY & ESTIMATE --- */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-300 pb-4">
              <span className="text-xl font-medium">Total :</span>
              <span className="text-2xl font-bold">{totalAmount.toFixed(1)} Birr</span>
            </div>

            <div className="mt-6 flex gap-2">
              <input 
                type="text" 
                placeholder="Voucher ..." 
                className="flex-1 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-xs italic outline-none"
              />
              <button className="rounded-md bg-brand-500 px-6 py-2 text-xs font-bold text-white hover:bg-[#d17a50]">
                Apply
              </button>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-bold">Shipping Estimate</h4>
              <div className="mt-4 space-y-3">
                <div className="relative flex">
                  <select className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm text-gray-500 outline-none">
                    <option>Country</option>
                  </select>
                  <span className='-ml-10 mt-2'><ChevronDown /></span> 
                </div>
                <div className="relative flex">
                  <select className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm text-gray-500 outline-none">
                    <option>State</option>
                  </select>
                   <span className='-ml-10 mt-2'><ChevronDown /></span> 
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
