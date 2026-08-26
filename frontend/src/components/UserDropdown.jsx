import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

const user = {
  name: 'Abebe Kebede',
  email: 'abebekebede@gmail.com',
  photo: 'https://i.pravatar.cc/80?img=51',
};

const items = [
  { to: '/profile',  Icon: User,        label: 'My Profile' },
  { to: '/cart',     Icon: Settings,    label: 'My Orders' },
  { to: '/support',  Icon: HelpCircle,  label: 'Support' },
];

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-xl overflow-hidden border-2 border-transparent hover:border-brand-300 transition-all focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-1"
      >
        <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-[240px] bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
          {/* User info */}
          <div className="px-4 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <img src={user.photo} alt={user.name} className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-gray-900 truncate">{user.name}</p>
                <p className="text-[11px] text-gray-400 truncate">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Nav items */}
          <ul className="py-2">
            {items.map(({ to, Icon, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-brand-700 transition-colors group"
                >
                  <Icon size={15} className="text-gray-400 group-hover:text-brand-700 transition-colors flex-shrink-0" />
                  <span className="flex-1">{label}</span>
                  <ChevronRight size={12} className="text-gray-300 group-hover:text-brand-700 transition-colors" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout */}
          <div className="border-t border-gray-100 py-2">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors group">
              <LogOut size={15} className="text-gray-400 group-hover:text-red-500 transition-colors flex-shrink-0" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
