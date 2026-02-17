import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-500 p-1.5 rounded-lg text-white font-bold italic"></div>
              <span className="font-bold text-xl">OnlineShop</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, ratione, quibusdam explicabo quo.</p>
            
            <h5 className="font-bold text-gray-800 mb-4">Lets stay in touch</h5>
            <div className="flex gap-2">
              <input type="text" placeholder="Email Address" className="bg-gray-200 py-2.5 px-4 rounded-lg text-xs flex-1 outline-none" />
              <button className="bg-brand-500 text-white px-4 py-2.5 rounded-lg text-xs font-bold">Suscribe</button>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-gray-800 mb-6">Quik links</h5>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <Link to="/"><li className="hover:text-brand-500 cursor-pointer">Home</li></Link>
              <Link to="/contactus"><li className="hover:text-brand-500 cursor-pointer">Contact</li></Link>
              <Link to="/category/all"><li className="hover:text-brand-500 cursor-pointer">Shop Now</li></Link>
              <Link to="/support"><li className="hover:text-brand-500 cursor-pointer">Support </li></Link>
             
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-gray-800 mb-6">Contact Us</h5>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia.</p>
            <p className="text-sm font-bold text-gray-800">Email : <span className="font-normal text-gray-500">onlineshop@gmail.com</span></p>
            <p className="text-sm font-bold text-gray-800">Phone : <span className="font-normal text-gray-500">+251986756453</span></p>
          </div>

          <div className="flex flex-col gap-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-40 cursor-pointer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-40 cursor-pointer" />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex justify-between items-center text-xs text-gray-400">
          <p>© 2026 OnlineShop. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;