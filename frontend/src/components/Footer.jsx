import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-500 p-1.5 rounded-lg text-white font-bold italic">OS</div>
              <span className="font-bold text-xl">OnlineShop</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-8">
              Your favorite meals delivered fast! Explore our menu and enjoy fresh flavors at your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-gray-800 mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <Link to="/"><li className="hover:text-brand-500 cursor-pointer">Home</li></Link>
              <Link to="/contactus"><li className="hover:text-brand-500 cursor-pointer">Contact</li></Link>
              <Link to="/category/all"><li className="hover:text-brand-500 cursor-pointer">Shop Now</li></Link>
              <Link to="/support"><li className="hover:text-brand-500 cursor-pointer">Support</li></Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-gray-800 mb-6">Contact Us</h5>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Got questions? Reach out to us via email or call us directly.
            </p>
            <p className="text-sm font-bold text-gray-800">
              Email: <span className="font-normal text-gray-500">support@onlineshop.com</span>
            </p>
            <p className="text-sm font-bold text-gray-800">
              Phone: <span className="font-normal text-gray-500">+251 986 756 453</span>
            </p>
          </div>

          {/* App Badges */}
          <div className="flex flex-col gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-40 cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-40 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 OnlineShop. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;