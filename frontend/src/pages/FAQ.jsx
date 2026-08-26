import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

const faqData = {
  en: [
    {
      title: 'Orders & Payments',
      questions: [
        { q: 'How do I place an order on the website?', a: 'Browse our collections, select your preferred size or color, and click "Add to Cart" or "Buy Now". Follow the checkout prompts to provide your shipping address and complete your secure payment.' },
        { q: 'What payment methods do you accept?', a: 'We support secure online payments, credit/debit cards, and local integration gateways such as Chapa for seamless transactions.' },
        { q: 'Can I modify or cancel my order after placing it?', a: 'Orders can be modified or canceled within 2 hours of placement. Please contact our support team immediately if you need to make changes.' },
      ],
    },
    {
      title: 'Shipping & Delivery',
      questions: [
        { q: 'How long does local delivery take within Addis Ababa?', a: 'Local deliveries within Addis Ababa typically arrive within 1 to 2 business days via direct courier.' },
        { q: 'Do you ship internationally?', a: 'Yes! We ship worldwide via air freight and international carriers. Delivery generally takes between 7 to 15 business days depending on your destination.' },
        { q: 'How can I track my shipment?', a: 'Once your order is dispatched, you will receive a confirmation email containing your tracking number and instructions on how to monitor your delivery.' },
      ],
    },
    {
      title: 'Products & Sizing',
      questions: [
        { q: 'Are your traditional Habesha Kemis garments hand-loomed?', a: 'Yes, all our authentic traditional attire features premium hand-loomed Shemma cotton crafted meticulously by expert local artisans.' },
        { q: 'How do I find my correct size?', a: 'Each product page features detailed specifications and sizing options. If you have custom sizing requirements, you can reach out to us directly for personalized tailoring.' },
        { q: 'How should I wash and care for my traditional clothing?', a: 'We recommend gentle hand washing in cold water with mild detergent or dry cleaning to preserve the delicate cotton threads and intricate embroidery.' },
      ],
    },
    {
      title: 'Returns & Exchanges',
      questions: [
        { q: 'What is your return policy?', a: 'You can request a return or size exchange within 14 days of receiving your order, provided the garment is unworn, unwashed, and has original tags attached.' },
        { q: 'Are custom-tailored orders returnable?', a: 'Custom hand-loomed pieces tailored strictly to specific custom body measurements are final sale and cannot be returned unless there is a structural manufacturing defect.' },
      ],
    },
  ],
  am: [
    {
      title: 'ትዕዛዞች & ክፍያዎች',
      questions: [
        { q: 'ትዕዛዝ እንዴት ማስቀመጥ እችላለሁ?', a: 'ስብስቦቻችንን ይፈልሉ፣ ልኬት ወይም ቀለም ይምረጡ፣ "ወደ ቅርጫት አክል" ወይም "አሁን ግዛ" ይጫኑ። ከዚያ የመላኪያ አድራሻዎን ያስገቡ እና ክፍያዎን ያጠናቅቁ።' },
        { q: 'ምን ዓይነት የክፍያ ዘዴዎችን ይቀበላሉ?', a: 'ደህንነቱ የተጠበቀ የኦንላይን ክፍያ፣ ክሬዲት/ዴቢት ካርዶች እና እንደ ቻፓ ያሉ የሀገር ውስጥ ቅብብሎሾችን እንቀበላለን።' },
        { q: 'ትዕዛዝ ካስቀመጥኩ በኋላ መቀየር ወይም መሰረዝ ይቻላል?', a: 'ትዕዛዝ ካስቀመጡ ከ2 ሰዓት ውስጥ ሊቀየር ወይም ሊሰረዝ ይችላል። ፍጥነት ሰጥተው የድጋፍ ቡድናችንን ያናግሩ።' },
      ],
    },
    {
      title: 'መላኪያ & ማድረሻ',
      questions: [
        { q: 'በአዲስ አበባ ውስጥ ምን ያህል ጊዜ ይወስዳል?', a: 'ቀጥተኛ ኮሪየር በኩል ከ1 እስከ 2 የሥራ ቀናት ውስጥ ይደርሳል።' },
        { q: 'ዓለም አቀፍ ይላኩ ዋ?', a: 'አዎ! ዓለምአቀፍ ጭነት አቅርቦት አለን። ከ7 እስከ 15 የሥራ ቀናት ይወስዳል።' },
        { q: 'ጭነቴን እንዴት መከታተል እችላለሁ?', a: 'ትዕዛዝ ከተላከ በኋላ የትራኪንግ ቁጥርዎን ጨምሮ ማረጋገጫ ኢሜይል ይደርስዎታል።' },
      ],
    },
    {
      title: 'ምርቶች & ልኬት',
      questions: [
        { q: 'ሃበሻ ቀሚሶቻችሁ በእጅ ሸማ ተሰርተዋ?', a: 'አዎ፣ ሁሉም ባህላዊ ልብሶቻችን ከፍተኛ ጥራት ባለው የሸማ ጥጥ ሽሪ ብቃት ባላቸው የሀገር ውስጥ ጠባቂ አርቲሳኖች ነው የተሰሩት።' },
        { q: 'ትክክለኛ ልኬቴን እንዴት አገኛለሁ?', a: 'እያንዳንዱ የምርት ገጽ ዝርዝር ስፋት እና ልኬት አቅርቦቶቹን ያካትታል። ልዩ ልኬት ከፈለጉ ቀጥተኛ ያናግሩን።' },
        { q: 'ባህላዊ ልብሶቸን እንዴት ማጠብ አለብኝ?', a: 'ለጥጥ ክርክሮቹ እና ውስብስብ ጥልፉ ጥበቃ ቀዝቃዛ ውሃ ጠቅሞ ወይም ደረቅ ማጽዳት እንመክራለን።' },
      ],
    },
    {
      title: 'መመለሻ & ልውውጥ',
      questions: [
        { q: 'የመመለሻ ፖሊሲዎ ምንድን ነው?', a: 'ትዕዛዝ ከደረሰዎ ከ14 ቀናት ውስጥ ያልተለበሰ፣ ያልታጠበ እና ዘርፉ ያልጠፋ ምርት ሊመለስ ወይም ልኬቱ ሊቀየር ይችላል።' },
        { q: 'ልዩ ልኬት ትዕዛዞች ይመለሳሉ?', a: 'ለልዩ ሰውነት ልኬት የተዘጋጁ ምርቶች ቋሚ ሽያጭ ናቸው ነገር ግን ስህተት ካለ ይተካሉ።' },
      ],
    },
  ],
};

export default function FAQ() {
  const { t, language } = useLangCurrency();
  const [openIndex, setOpenIndex] = useState('0-0');

  const faqCategories = faqData[language] || faqData.en;

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4 sm:px-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-medium text-gray-800 tracking-tight mb-3">
          {t('faqTitle')}
        </h1>
        <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          {t('faqDesc')}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2">
                <HelpCircle size={16} className="text-[#AA061B]" />
                <span>{category.title}</span>
              </h2>
              <div className="space-y-3">
                {category.questions.map((item, qIdx) => {
                  const isOpen = openIndex === `${catIdx}-${qIdx}`;
                  return (
                    <div key={qIdx} className="border border-gray-200/80 rounded-xl overflow-hidden bg-white shadow-sm">
                      <button
                        onClick={() => toggleAccordion(catIdx, qIdx)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-gray-800 text-xs md:text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <span>{item.q}</span>
                        <ChevronDown size={18} className={`text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#AA061B]' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-xs text-gray-500 leading-relaxed border-t border-gray-100 bg-gray-50/40">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] mx-auto mb-4 shadow-sm">
            <MessageSquare size={22} />
          </div>
          <h3 className="font-serif text-xl font-medium text-gray-800 mb-2">{t('stillHaveQuestions')}</h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto mb-6">{t('stillHaveDesc')}</p>
          <Link to="/contact" className="inline-block bg-[#AA061B] text-white text-xs font-semibold px-8 py-3.5 rounded-lg shadow hover:bg-[#8d0517] transition-all">
            {t('contactTeam')}
          </Link>
        </div>
      </div>
    </div>
  );
}
