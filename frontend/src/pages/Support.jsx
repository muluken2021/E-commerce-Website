import React, { useState } from "react";
import { Rocket, CreditCard, ShieldCheck, UserCog, Smartphone, Code } from "lucide-react";
import { useLangCurrency } from "../context/LanguageCurrencyContext";

const Support = () => {
  const { t } = useLangCurrency();

  const topicsData = {
    en: [
      { id: 1, title: "Getting Started", desc: "Guides to help you get started with our platform quickly.", content: "Step 1: Sign up. Step 2: Verify email. Step 3: Start exploring the dashboard.", icon: <Rocket /> },
      { id: 2, title: "My Account", desc: "Manage your account and profile settings.", content: "You can update your profile, change password, and configure notifications in your account settings.", icon: <UserCog /> },
      { id: 3, title: "Billing & Payments", desc: "Learn about charges, invoices, and payment options.", content: "We accept credit cards and PayPal. You can view invoices and update payment methods in your billing section.", icon: <CreditCard /> },
      { id: 4, title: "Mobile App", desc: "Documentation and troubleshooting our mobile app.", content: "Download our app from App Store or Google Play. You can manage notifications and use offline mode.", icon: <Smartphone /> },
      { id: 5, title: "Legal & Privacy", desc: "Information about privacy, terms, and policies.", content: "Our privacy policy explains how we handle your data. You can read our terms of service for legal information.", icon: <ShieldCheck /> },
      { id: 6, title: "Developers", desc: "API and integration documentation for developers.", content: "Use our REST API to integrate with other tools. API keys can be generated in the developer section.", icon: <Code /> },
    ],
    am: [
      { id: 1, title: "መጀመሪያ", desc: "መድረኩን በፍጥነት ለመጀመር መምሪያዎች።", content: "ደረጃ 1: ይመዝገቡ። ደረጃ 2: ኢሜልዎን ያረጋግጡ። ደረጃ 3: ዳሽቦርዱን ይጀምሩ።", icon: <Rocket /> },
      { id: 2, title: "ሂሳቤ", desc: "ሂሳብዎን እና የፕሮፋይል ቅንጅቶችዎን ያስተዳድሩ።", content: "ፕሮፋይልዎን ማዘመን፣ ይለፍ ቃልዎን መቀየር እና ማሳወቂያዎቹን ማዋቀር ይቻላል።", icon: <UserCog /> },
      { id: 3, title: "ክፍያ & ሒሳቦች", desc: "ስለ ሒሳቦች፣ ደረሰኞች እና የክፍያ አማራጮች ይወቁ።", content: "ክሬዲት ካርዶች እና ፓይፓልን እንቀበላለን። ደረሰኞችን ማየት እና የክፍያ ዘዴዎችን ማዘመን ይቻላል።", icon: <CreditCard /> },
      { id: 4, title: "የሞባይል አፕ", desc: "የሞባይል አፕ ሰነድ እና አጠቃቀም።", content: "አፕ ስቶር ወይም ጉግል ፕሌይ ላይ ያውርዱ።", icon: <Smartphone /> },
      { id: 5, title: "ህጋዊ & ግላዊነት", desc: "ስለ ፕሩቫሲ፣ ውሎች እና ፖሊሲዎች መረጃ።", content: "የፕሩቫሲ ፖሊሲያችን ውሂብዎን እንዴት እንደምንጠቀምበት ያብራራል።", icon: <ShieldCheck /> },
      { id: 6, title: "ገንቢዎች", desc: "ለገንቢዎች API እና ውህደት ሰነዶች።", content: "ከሌሎች ሳጅኖች ጋር ለማዋሃድ REST API ይጠቀሙ።", icon: <Code /> },
    ],
  };

  const articlesData = {
    en: [
      { id: 101, title: "How to Track Your Order", content: "Go to your account > Orders > Track order. You will see delivery status and estimated time." },
      { id: 102, title: "How to Return a Product", content: "Navigate to Orders > Return. Fill the return form and schedule pickup." },
      { id: 103, title: "How to Update Your Billing Info", content: "Go to Account > Billing > Payment Methods to update credit card or PayPal info." },
      { id: 104, title: "How to Download the Mobile App", content: "Visit App Store or Google Play, search our platform, and click download." },
      { id: 105, title: "How to Contact Customer Support", content: "Click the Contact Support button at the bottom or email support@example.com." },
    ],
    am: [
      { id: 101, title: "ትዕዛዝዬን እንዴት እከታተላለሁ?", content: "ሂሳብዎ > ትዕዛዞች > ትዕዛዝ ክትትል ይሂዱ። የማድረሻ ሁኔታ ያያሉ።" },
      { id: 102, title: "ምርት እንዴት እመልሳለሁ?", content: "ትዕዛዞች > መመለሻ ይሂዱ። ቅጹን ይሙሉ እና ቀጠሮ ይያዙ።" },
      { id: 103, title: "የክፍያ መረጃዬን እንዴት አዘምናለሁ?", content: "ሂሳብ > ሒሳብ > የክፍያ ዘዴዎች ይሂዱ።" },
      { id: 104, title: "የሞባይል አፕ እንዴት አወርዳለሁ?", content: "አፕ ስቶር ወይም ጉግል ፕሌይ ይጎብኙ እና ያውርዱ።" },
      { id: 105, title: "ደንበኛ አገልግሎትን እንዴት አናግራለሁ?", content: "ወደ ታች ያለውን ድጋፍ ያናግሩ ቁልፍ ይጫኑ ወይም support@example.com ኢሜይል ይላኩ።" },
    ],
  };

  const starterCards = [
    { id: 201, title: "Getting started", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80", content: "This is a detailed guide to get started on our platform quickly." },
    { id: 202, title: "Video tutorials", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80", content: "Watch our video tutorials to learn step by step." },
    { id: 203, title: "Navigating the platform", img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=500&q=80", content: "Learn how to move around the dashboard and use all features efficiently." },
  ];

  const { language } = useLangCurrency();
  const topics = topicsData[language] || topicsData.en;
  const popularArticles = articlesData[language] || articlesData.en;

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Starter Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-medium mb-10">{t('howCanWeHelp')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {starterCards.map((card) => (
            <div key={card.id} className="group cursor-pointer" onClick={() => setSelectedCard(card)}>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-sm">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <h3 className="text-lg font-medium">{card.title}</h3>
            </div>
          ))}
        </div>
        {selectedCard && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4">{selectedCard.title}</h3>
            <p>{selectedCard.content}</p>
            <button className="mt-4 text-teal-700 font-semibold" onClick={() => setSelectedCard(null)}>{t('close')}</button>
          </div>
        )}
      </section>

      {/* Help Topics + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-8">{t('helpTopics')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {topics.map((topic) => (
                <div key={topic.id} className="flex gap-5 group cursor-pointer border-b border-gray-50 pb-6" onClick={() => setSelectedTopic(topic)}>
                  <div className="group-hover:scale-110 transition-transform text-gray-700">
                    {React.cloneElement(topic.icon, { size: 32, strokeWidth: 1.5 })}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{topic.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{topic.desc}</p>
                  </div>
                </div>
              ))}
              {selectedTopic && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 col-span-full">
                  <h3 className="text-xl font-bold mb-4">{selectedTopic.title}</h3>
                  <p>{selectedTopic.content}</p>
                  <button className="mt-4 text-teal-700 font-semibold" onClick={() => setSelectedTopic(null)}>{t('close')}</button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-80 space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="font-bold text-lg mb-6">{t('popularArticles')}</h3>
              <ul className="space-y-4">
                {popularArticles.map((art) => (
                  <li key={art.id} className="text-sm text-gray-600 hover:text-[#AA061B] cursor-pointer flex gap-2" onClick={() => setSelectedArticle(art)}>
                    <span className="shrink-0">•</span>
                    {art.title}
                  </li>
                ))}
              </ul>
              {selectedArticle && (
                <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold mb-2">{selectedArticle.title}</h4>
                  <p className="text-sm">{selectedArticle.content}</p>
                  <button className="mt-3 text-teal-700 font-semibold" onClick={() => setSelectedArticle(null)}>{t('close')}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
