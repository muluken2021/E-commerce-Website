import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SignInForm = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
  };

  return (
    <div className="w-full flex flex-col justify-between min-h-[560px] py-2 px-4 max-w-[360px] mx-auto">
      <div className="w-full flex flex-col items-center text-center my-auto">
        
        {/* Brand Logo */}
        <h1 className="font-serif text-4xl font-normal tracking-wide text-gray-800 mb-8">
          FASCO
        </h1>

        {/* Heading */}
        <h2 className="font-serif text-lg font-semibold text-gray-800 mb-6">
          Sign In To FASCO
        </h2>

        {/* Social Authentication */}
        <div className="grid grid-cols-2 gap-3 w-full mb-8">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-3 border border-blue-400 rounded-md bg-white hover:bg-gray-50 transition text-[11px] font-medium text-gray-500 shadow-sm"
          >
            {/* Google Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Sign up with Google</span>
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-3 border border-blue-400 rounded-md bg-white hover:bg-gray-50 transition text-[11px] font-medium text-gray-500 shadow-sm"
          >
            {/* Email Icon */}
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span>Sign up with Email</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative w-full flex items-center justify-center mb-8">
          <div className="border-t border-gray-300 w-full" />
          <span className="bg-white px-3 text-xs text-gray-500 font-semibold tracking-wider absolute">
            — OR —
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-1.5 bg-transparent border-b border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-1.5 pr-8 bg-transparent border-b border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1.5 text-gray-400 hover:text-black transition"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-3">
            {/* Primary Sign In */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md text-xs font-medium tracking-wide hover:bg-gray-800 transition-colors shadow-sm"
            >
              Sign In
            </button>

            {/* Switch to Register */}
            <button
              type="button"
              onClick={switchForm}
              className="w-full bg-white text-blue-500 border border-blue-400 py-2.5 rounded-md text-xs font-medium tracking-wide hover:bg-blue-50 transition-colors text-center"
            >
              Register Now
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right pt-0.5">
            <a
              href="#"
              className="text-[11px] text-blue-500 hover:underline font-medium"
            >
              Forget Password?
            </a>
          </div>
        </form>

      </div>

      {/* Terms Footer */}
      <div className="text-center pt-8">
        <a
          href="#"
          className="text-[10px] text-gray-500 hover:text-gray-800 transition-colors"
        >
          FASCO Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default SignInForm;