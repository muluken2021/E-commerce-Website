import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

export default function ContactUs() {
  const { t } = useLangCurrency();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4 sm:px-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-medium text-gray-800 tracking-tight mb-3">
          {t('getInTouch')}
        </h1>
        <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          {t('getInTouchDesc')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#AA061B] uppercase block mb-1">
                {t('weAreHere')}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-gray-800">
                {t('letsConverse')}
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{t('contactIntro')}</p>

            <div className="space-y-4 mt-2">
              {[
                { Icon: MapPin, titleKey: 'ourLocation', lines: ['Bole Road, Near Friendship City Center', 'Addis Ababa, Ethiopia'] },
                { Icon: Phone, titleKey: 'phoneNumber', lines: ['+251 11 123 4567', '+251 91 234 5678'] },
                { Icon: Mail, titleKey: 'emailAddress', lines: ['support@habeshastore.com', 'info@syncaddis.com'] },
                { Icon: Clock, titleKey: 'workingHours', lines: ['Mon - Sat: 8:30 AM - 6:00 PM', 'Sunday: Closed'] },
              ].map(({ Icon, titleKey, lines }) => (
                <div key={titleKey} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{t(titleKey)}</h3>
                    {lines.map((line, i) => (
                      <p key={i} className="text-xs text-gray-500">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('sendMessage')}</h3>
            <p className="text-xs md:text-sm text-gray-400 mb-6">{t('sendMessageDesc')}</p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 text-xs font-semibold">
                <CheckCircle2 size={18} />
                <span>{t('messageSent')}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">{t('yourName')}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Muluken Kassaw"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all"
                    required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">{t('emailAddress')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="muluken@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all"
                    required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">{t('subject')}</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                  placeholder={t('subjectPlaceholder')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">{t('message')}</label>
                <textarea name="message" rows={5} value={formData.message} onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#AA061B] transition-all resize-none"
                  required />
              </div>

              <button type="submit"
                className="w-full bg-[#AA061B] text-white text-xs font-semibold py-4 rounded-lg shadow-md hover:bg-[#8d0517] transition-all flex items-center justify-center gap-2 cursor-pointer">
                <Send size={16} />
                <span>{t('sendBtn')}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
