import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contacts = [
  { Icon: MapPin,  label: 'Location', value: 'Marollen Street, No. 14, 2nd floor, Brussels' },
  { Icon: Mail,    label: 'Email',    value: 'support@lenny.com' },
  { Icon: Phone,   label: 'Phone',    value: '+40 733 222 456' },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Get In Touch</h1>
        <p className="text-gray-400 text-[14px] max-w-md mx-auto">
          Have a question or feedback? We'd love to hear from you. Our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-5">
          {contacts.map(({ Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-25 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-brand-700" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-[13.5px] font-semibold text-gray-800">{value}</p>
              </div>
            </motion.div>
          ))}

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden h-48 bg-gray-100 border border-gray-100 shadow-sm flex items-center justify-center">
            <p className="text-gray-400 text-sm font-semibold">📍 Brussels, Belgium</p>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-8"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-400 text-sm max-w-xs">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-brand-700 font-semibold text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-black text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-600 bg-gray-50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-600 bg-gray-50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-600 bg-gray-50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-600 bg-gray-50 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2.5 w-full bg-brand-800 hover:bg-brand-700 text-white py-3.5 rounded-xl font-bold text-[14px] transition-all active:scale-[0.97] shadow-lg shadow-brand-900/20"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
