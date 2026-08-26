import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignInPage = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-white font-sans">
      
      {/* ── Left Column: Hero Cover Image ── */}
      <div className="hidden lg:block relative w-full h-full min-h-screen bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80"
          alt="HABESHA Fashion Banner"
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Optional Overlay Content / Tagline */}
        <div className="absolute bottom-12 left-12 text-white max-w-md space-y-2">
          <h2 className="font-serif text-3xl font-medium tracking-wide">
            Discover Fashion Excellence
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed font-light">
            Join HABESHA today to explore curated seasonal collections and exclusive member deals.
          </p>
        </div>
      </div>

      {/* ── Right Column: Sign In Form Container ── */}
      <div className="w-full h-full flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-[400px] flex flex-col justify-between min-h-[580px] py-4">
          
          <div className="w-full flex flex-col items-center text-center my-auto">
            
            {/* Brand Logo */}
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-wide text-gray-900 mb-6">
              HABESHA
            </h1>

            {/* Heading */}
            <h2 className="font-serif text-base sm:text-lg font-medium text-gray-700 mb-8">
              Sign In To HABESHA
            </h2>

            {/* Social Authentication */}
            <div className="grid grid-cols-2 gap-3 w-full mb-6">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition text-sm font-medium text-gray-600 shadow-sm cursor-pointer"
              >
                {/* Google Icon */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
                <span className="truncate">Sign up with Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition text-sm font-medium text-gray-600 shadow-sm cursor-pointer"
              >
                {/* Email Icon */}
                <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="truncate">Sign up with Email</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative w-full flex items-center justify-center mb-6">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-white px-3 text-sm text-gray-400 font-semibold tracking-wider absolute">
                — OR —
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full p-3 bg-transparent border-b border-gray-300 text-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
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
                  className="w-full p-3 pr-8 bg-transparent border-b border-gray-300 text-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4 text-gray-400 hover:text-gray-700 transition cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                {/* Primary Sign In */}
                <button
                  type="submit"
                  className="w-full bg-[#AA061B] text-white py-3 rounded-md text-sm font-medium tracking-wide hover:bg-[#9b071a] transition-colors shadow-sm cursor-pointer"
                >
                  Sign In
                </button>

                {/* Switch to Register */}
                <Link to="/signup">
                  <button
                    type="button"
                    className="w-full bg-white text-[#AA061B] border border-[#AA061B] py-2.5 rounded-md text-sm font-medium tracking-wide hover:bg-[#ac001721] transition-colors text-center cursor-pointer"
                  >
                    Register Now
                  </button>
                </Link>
              </div>

              {/* Forgot Password */}
              <div className="text-right pt-1">
                <a
                  href="#"
                  className="text-sm text-[#AA061B]-500 hover:underline font-medium"
                >
                  Forget Password?
                </a>
              </div>
            </form>

          </div>

          {/* Terms Footer */}
          <div className="text-center pt-6">
            <a
              href="#"
              className="text-[10px] text-gray-400 hover:text-gray-700 transition-colors"
            >
              HABESHA Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SignInPage;