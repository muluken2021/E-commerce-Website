import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SignUpForm = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-600 mb-2">Create Account</h1>
      <p className="text-gray-400 mb-6 text-sm">
        Already have an account?{' '}
        <span
          onClick={switchForm}
          className="text-brand-500 font-semibold underline underline-offset-2 cursor-pointer"
        >
          Sign In
        </span>
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
          />
        </div>

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

        <button className="w-full bg-brand-500 text-white py-3 rounded-xl font-bold hover:bg-brand-600 transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
