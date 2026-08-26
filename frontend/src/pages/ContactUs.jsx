import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate submission action
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Page Header Banner ── */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4 sm:px-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-medium text-gray-800 tracking-tight mb-3">
          Get In Touch
        </h1>
        <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Have questions about our handwoven traditional wear or custom orders? Reach out to our team and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#AA061B] uppercase block mb-1">
                We Are Here For You
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-800">
                Let’s Start a Conversation
              </h2>
            </div>

            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Whether you need sizing assistance, wholesale inquiries, or shipping details, our customer support representatives are glad to assist you.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Bole Road, Near Friendship City Center<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">Phone Number</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    +251 11 123 4567<br />
                    +251 91 234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">Email Address</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    support@habeshastore.com<br />
                    info@syncaddis.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">Working Hours</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Mon - Sat: 8:30 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
            <p className="text-xs md:text-sm text-gray-400 mb-6">
              Fill out the form below and we will respond within 24 business hours.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 text-xs font-semibold">
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Muluken Kassaw"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="muluken@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#AA061B] text-white text-xs font-semibold py-4 rounded-lg shadow-md hover:bg-[#8d0517] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}