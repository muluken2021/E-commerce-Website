import React from 'react';
import { Mail, Phone, MapPin, Youtube, Instagram, Dribbble, Twitter } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 p-4 md:p-8">


      <main className="max-w-7xl mx-auto relative grid grid-cols-12 gap-8">
        
        

        {/* Main Content Area */}
        <div className="col-span-12 md:col-span-11 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="max-w-md">
            <h1 className="text-3xl font-bold mb-2">Contact us</h1>
            <p className="text-gray-400 mb-8 text-sm">Reach out to us for any inquiry</p>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full name" 
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-500 transition-colors text-sm"
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-500 transition-colors text-sm"
              />
              <textarea 
                placeholder="Message" 
                rows="4"
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-500 transition-colors text-sm resize-none"
              ></textarea>
              
              <button className="w-full bg-brand-500 text-white font-bold py-4 rounded-md shadow-lg shadow-brand-200 hover:bg-brand-600 transition-all uppercase text-xs tracking-widest mt-4">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="relative">
            {/* The brand L-Shape Accent */}
            <div className="absolute -top-4 -right-4 w-32 h-48 border-t-[20px] border-r-[20px] border-brand-500 z-0 hidden lg:block"></div>
            
            <div className="relative z-10 overflow-hidden rounded-sm shadow-sm bg-gray-100 aspect-square lg:aspect-video border border-gray-100">
               {/* Map Placeholder - Replace with real Google Map iframe or library */}
               <img 
                src="https://api.placeholder.com/600/400?text=Brussels+Map+Monochrome" 
                alt="Brussels Map" 
                className="w-full h-full object-cover grayscale opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Brussels</span>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Contact Details */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-50 rounded-lg text-brand-500">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Location:</p>
              <p className="text-gray-400 text-xs">Marollen Street, No. 14, 2nd floor</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-50 rounded-lg text-brand-500">
              <Mail size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Email:</p>
              <p className="text-gray-400 text-xs">bulbudragas@everone.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-50 rounded-lg text-brand-500">
              <Phone size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Phone:</p>
              <p className="text-gray-400 text-xs">+40 733 222 456</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;