import React from 'react';
import SignInForm from './SignInForm';

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-100 min-h-[580px]">
        
        {/* ── Left Side - Fashion Cover Image ── */}
        <div className="w-full md:w-1/2 relative min-h-[280px] md:min-h-[580px] bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
            alt="FASCO Fashion"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* ── Right Side - Sign In Form Container ── */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white">
          <SignInForm switchForm={() => console.log('Switch to Register')} />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;