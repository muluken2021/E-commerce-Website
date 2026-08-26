import React, { useState } from 'react';
import SignInForm from './Auth/SignInForm';
import SignUpForm from './Auth/SignUpForm';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* ── Form side ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'sign-in' : 'sign-up'}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-md"
          >
            {isLogin
              ? <SignInForm switchForm={() => setIsLogin(false)} />
              : <SignUpForm switchForm={() => setIsLogin(true)} />
            }
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Promo side ── */}
      <div className="hidden md:flex w-1/2 bg-brand-800 text-white flex-col items-center justify-center relative overflow-hidden p-12">
        {/* Background shapes */}
        <div className="absolute top-[-15%] right-[-15%] w-[360px] h-[360px] bg-white/5 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[280px] h-[280px] bg-white/5 rounded-full" />

        <div className="relative z-10 text-center space-y-6 max-w-sm">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-base">L</span>
            </div>
            <span className="font-black text-2xl tracking-tight">lenny.</span>
          </div>

          <h2 className="text-3xl font-black leading-tight">
            Shop the Best<br />Deals Today
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Explore trending products, exclusive discounts, and seasonal collections curated just for you.
          </p>

          {/* Feature pills */}
          <div className="flex flex-col gap-3 mt-6">
            {['🚀 Fast, reliable delivery', '🛡️ Secure checkout', '💚 100,000+ happy customers'].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5 text-[13px] font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
