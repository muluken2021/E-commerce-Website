import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SignInForm = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full md:w-1/2 p-8 md:p-15 xl:p-32 flex flex-col justify-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-600 mb-2">Welcome Back</h1>
      <p className="text-gray-400 mb-6 text-sm">
        New to OnlineShop?{' '}
        <span
          onClick={switchForm}
          className="text-brand-500 font-semibold underline underline-offset-2 cursor-pointer"
        >
          Create Account
        </span>
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-10 text-gray-400 hover:text-brand-500 transition"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-brand-500" />
            Remember me
          </label>
          <a href="#" className="text-brand-500 font-semibold underline underline-offset-2">
            Forgot Password?
          </a>
        </div>

        <button className="w-full bg-brand-500 text-white py-3 rounded-xl font-bold hover:bg-brand-600 transition-colors">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
