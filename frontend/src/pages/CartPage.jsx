import React from 'react';
import { Trash2, Plus, Minus, Delete, RemoveFormatting, DeleteIcon, ChevronDown, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { assets } from '../assets/assets';

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
    <div className="min-h-screen font-sans text-gray-800 p-6">
      {cartItems.length === 0 ? (
      <div className="flex flex-col items-center justify-center text-center  px-4 sm:px-6 lg:px-12">
        {/* Empty cart image */}
        <img src={assets.empitycart} alt="Empty cart" className="mx-auto w-48 sm:w-64 lg:w-80 mb-8" />

        {/* Heading */}
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-500 mb-4">
          Your cart is empty
        </p>

        {/* Description */}
        <p className="text-gray-500 max-w-md sm:max-w-xl lg:max-w-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum itaque sit odit. Rerum itaque sit odit.
        </p>

        {/* Shop Now Button */}
        <Link to="/category/all" className="inline-block">
          <button className="cursor-pointer group flex items-center gap-3 bg-brand-500 text-white px-8 sm:px-10 py-4 sm:py-4 rounded-2xl font-bold text-lg sm:text-lg hover:bg-brand-400 active:scale-95 transition-all duration-300">
            <ShoppingBag size={20} />
            <span>Shop Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      ) : (
      <div className="mx-0 lg:mx-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* --- LEFT SIDE: CART ITEMS --- */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl bg-gray-100 px-4 py-3 shadow-sm gap-4 md:gap-6">
              {/* Image + Name */}
              <div className="flex items-start md:items-center gap-4 md:gap-6 flex-1">
                <div className="h-20 w-20 rounded-lg bg-white p-2 flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <img src={item.img} alt={item.name} className="max-h-full mix-blend-multiply" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.name}</h3>
                  <p className="text-sm font-bold text-gray-600">{item.price.toFixed(1)} Birr</p>
                </div>
              </div>

              {/* Quantity + Price + Delete */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-12 mt-2 md:mt-0">
                <div className="flex items-center gap-2 sm:gap-4">
                  <button onClick={() => increaseQuantity(item.id)} className="cursor-pointer text-gray-400 hover:text-gray-600">
                    <Plus size={16} />
                  </button>
                  <span className="text-sm sm:text-lg font-bold">{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item.id)} className="cursor-pointer text-gray-400 hover:text-gray-600">
                    <Minus size={16} />
                  </button>
                </div>

                <span className="w-20 sm:w-24 text-right font-bold text-gray-800 text-sm sm:text-base">
                  {(item.price * item.quantity).toFixed(1)} Birr
                </span>

                <button onClick={() => handleRemoveItem(item.id)} className="cursor-pointer h-8 w-8 rounded flex items-center justify-center text-brand-400 hover:text-brand-500 transition-colors">
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}

          {/* Clear Cart Button */}
          <div className="flex justify-end pt-4">
            <button onClick={handleClearCart} className="cursor-pointer flex items-center gap-2 rounded-md border border-red-400 px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-50 transition-colors">
              <Trash2 /> Clear cart
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: SUMMARY & ESTIMATE --- */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-gray-50 p-6 md:p-8 shadow-sm flex flex-col gap-6">
            {/* Total */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-4">
              <span className="text-xl font-medium">Total :</span>
              <span className="text-2xl font-bold">{totalAmount.toFixed(1)} Birr</span>
            </div>

            {/* Voucher */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                placeholder="Voucher ..." 
                className="flex-1 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-xs italic outline-none w-full"
              />
              <button className="rounded-md bg-brand-500 px-6 py-2 text-xs font-bold text-white hover:bg-[#d17a50] w-full sm:w-auto">
                Apply
              </button>
            </div>

            {/* Shipping Estimate */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold">Shipping Estimate</h4>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <select className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm text-gray-500 outline-none">
                    <option>Country</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2"><ChevronDown /></span>
                </div>

                <div className="relative">
                  <select className="w-full appearance-none rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm text-gray-500 outline-none">
                    <option>State</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2"><ChevronDown /></span>
                </div>

                <input 
                  type="text" 
                  placeholder="Zip Code" 
                  className="w-full rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm outline-none"
                />
              </div>

              <button className="w-full rounded-md border border-gray-500 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                Calculate shipping
              </button>
            </div>

            {/* Checkout */}
            <Link to="/checkout" className="w-full">
              <button className="cursor-pointer w-full rounded-md bg-[#333333] py-2.5 text-sm font-bold text-white hover:bg-black transition-colors">
                Checkout Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    )}
</div>

  );
};

export default CartPage;
