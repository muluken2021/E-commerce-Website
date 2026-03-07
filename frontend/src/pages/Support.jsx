import React, { useState } from "react";
import { Search, Rocket, CreditCard, ShieldCheck, UserCog, Smartphone, Code, ChevronRight } from "lucide-react";

const Support = () => {
  const topSearches = ["Orders", "Shipping", "Returns", "Billing", "Products"];

  const topics = [
    { id: 1, title: "Getting Started", desc: "Guides to help you get started with our platform quickly.", icon: <Rocket />, content: "Step 1: Sign up. Step 2: Verify email. Step 3: Start exploring the dashboard." },
    { id: 2, title: "My Account", desc: "Manage your account and profile settings.", icon: <UserCog />, content: "You can update your profile, change password, and configure notifications in your account settings." },
    { id: 3, title: "Billing & Payments", desc: "Learn about charges, invoices, and payment options.", icon: <CreditCard />, content: "We accept credit cards and PayPal. You can view invoices and update payment methods in your billing section." },
    { id: 4, title: "Mobile App", desc: "Documentation and troubleshooting our mobile app.", icon: <Smartphone />, content: "Download our app from App Store or Google Play. You can manage notifications, sync data, and use offline mode." },
    { id: 5, title: "Legal & Privacy", desc: "Information about privacy, terms, and policies.", icon: <ShieldCheck />, content: "Our privacy policy explains how we handle your data. You can read our terms of service for legal information." },
    { id: 6, title: "Developers", desc: "API and integration documentation for developers.", icon: <Code />, content: "Use our REST API to integrate with other tools. API keys can be generated in the developer section." },
  ];

  const popularArticles = [
    { id: 101, title: "How to Track Your Order", content: "Go to your account > Orders > Track order. You will see delivery status and estimated time." },
    { id: 102, title: "How to Return a Product", content: "Navigate to Orders > Return. Fill the return form and schedule pickup." },
    { id: 103, title: "How to Update Your Billing Info", content: "Go to Account > Billing > Payment Methods to update credit card or PayPal info." },
    { id: 104, title: "How to Download the Mobile App", content: "Visit App Store or Google Play, search our platform, and click download." },
    { id: 105, title: "How to Contact Customer Support", content: "Click the Contact Support button at the bottom or email support@example.com." },
  ];

  const starterCards = [
    { id: 201, title: "Getting started", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80", content: "This is a detailed guide to get started on our platform quickly." },
    { id: 202, title: "Video tutorials", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80", content: "Watch our video tutorials to learn step by step." },
    { id: 203, title: "Navigating the platform", img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=500&q=80", content: "Learn how to move around the dashboard and use all features efficiently." },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Filter functions
  const filteredTopics = topics.filter(
    (t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArticles = popularArticles.filter((a) => a.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredCards = starterCards.filter((c) => c.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* HERO SECTION */}


      {/* STARTER CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-medium mb-10">How we can help you ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <div key={card.id} className="group cursor-pointer" onClick={() => setSelectedCard(card)}>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-sm">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <h3 className="text-lg font-medium group-hover:text-brand-600">{card.title}</h3>
            </div>
          ))}
        </div>

        {/* Selected Card Content */}
        {selectedCard && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4">{selectedCard.title}</h3>
            <p>{selectedCard.content}</p>
            <button className="mt-4 text-teal-700 font-semibold" onClick={() => setSelectedCard(null)}>Close</button>
          </div>
        )}
      </section>

      {/* HELP TOPICS + SIDEBAR */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Topics */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-8">Help Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {filteredTopics.map((topic) => (
                <div key={topic.id} className="flex gap-5 group cursor-pointer border-b border-gray-50 pb-6" onClick={() => setSelectedTopic(topic)}>
                  <div className="text-brand-600 group-hover:scale-110 transition-transform">
                    {React.cloneElement(topic.icon, { size: 32, strokeWidth: 1.5 })}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-brand-700">{topic.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{topic.desc}</p>
                  </div>
                </div>
              ))}

              {/* Selected Topic Content */}
              {selectedTopic && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 col-span-full">
                  <h3 className="text-xl font-bold mb-4">{selectedTopic.title}</h3>
                  <p>{selectedTopic.content}</p>
                  <button className="mt-4 text-teal-700 font-semibold" onClick={() => setSelectedTopic(null)}>Close</button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-8">
            {/* Popular Articles */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="font-bold text-lg mb-6">Popular Articles</h3>
              <ul className="space-y-4">
                {filteredArticles.map((art) => (
                  <li key={art.id} className="text-sm text-gray-600 hover:text-brand-600 cursor-pointer flex gap-2" onClick={() => setSelectedArticle(art)}>
                    <span className="shrink-0">•</span>
                    {art.title}
                  </li>
                ))}
              </ul>

              {/* Selected Article Content */}
              {selectedArticle && (
                <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold mb-2">{selectedArticle.title}</h4>
                  <p>{selectedArticle.content}</p>
                  <button className="mt-3 text-teal-700 font-semibold" onClick={() => setSelectedArticle(null)}>Close</button>
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
