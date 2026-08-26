import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const col = (title, items) => ({ title, items });

const columns = [
  col('About Lenny', [
    { label: 'Our Story', to: '/' },
    { label: 'Careers', to: '/' },
    { label: 'Press', to: '/' },
    { label: 'Blog', to: '/' },
    { label: 'Gift Cards', to: '/' },
    { label: 'Sitemap', to: '/' },
  ]),
  col('Account', [
    { label: 'FAQ', to: '/support' },
    { label: 'Privacy Policy', to: '/' },
    { label: 'Help Center', to: '/support' },
    { label: 'Gallery Service', to: '/' },
    { label: 'Contact Us', to: '/contactus' },
  ]),
  col('Contact Us', [
    { label: 'Put 10 new Street', to: null },
    { label: 'Caxton St.', to: null },
    { label: 'London, UK', to: null },
    { label: 'lenny@company.com', to: null, icon: Mail },
    { label: '+45 1234 5678', to: null, icon: Phone },
  ]),
];

const socials = [
  { Icon: Facebook, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-brand-800 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm">L</span>
              </div>
              <span className="font-black text-[22px] text-gray-900 tracking-tight">lenny.</span>
            </Link>
            <p className="text-[12.5px] text-gray-400 leading-relaxed mb-6 max-w-[220px]">
              Eget neque aenean viverra aliquam tortor diam nunc. Your trusted online marketplace for every need.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-800 hover:text-white hover:border-brand-800 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(({ title, items }) => (
            <div key={title}>
              <h5 className="text-[13px] font-black text-gray-900 mb-4">{title}</h5>
              <ul className="space-y-2.5">
                {items.map(({ label, to, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-1.5 text-[12.5px] text-gray-500">
                    {Icon && <Icon size={11} className="text-gray-400 flex-shrink-0" />}
                    {to ? (
                      <Link to={to} className="hover:text-brand-700 transition-colors">{label}</Link>
                    ) : (
                      <span>{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-gray-400">
          <p>COPYRIGHT © 2026 LENNY. ALL RIGHTS RESERVED</p>
          <div className="flex gap-5">
            <Link to="/" className="hover:text-brand-700 transition-colors">Terms of Use</Link>
            <Link to="/" className="hover:text-brand-700 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
