import React from "react";

const companies = [
  { name: "santimpay", logo: "https://dailyjobsethiopia.com/wp-content/uploads/2023/11/santim-pay.png" },
  { name: "ride", logo: "https://ride8294.com/wp-content/uploads/2024/01/cropped-icon-Group-12034-e1744195136478.png" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "ethioairlines", logo: "https://images.seeklogo.com/logo-png/4/1/ethiopian-airlines-logo-png_seeklogo-49734.png" },
  { name: "yango", logo: "https://tse2.mm.bing.net/th/id/OIP.y7IKfJz7PAo5UQOl8OkpLgHaCy?pid=Api&P=0&h=220" },
  { name: "chapapay", logo: "https://tse4.mm.bing.net/th/id/OIP.j90Ghq903uzYqb763AvfbAHaCS?pid=Api&P=0&h=220" },
  { name: "safaricom", logo: "https://tse4.mm.bing.net/th/id/OIP.BX9cXJCWq38fFoKf2sgazgHaCS?pid=Api&P=0&h=220" },
  { name: "ethiotelecom", logo: "https://ethiopianlogos.com/logos/ethio_telecom/ethio_telecom.svg" },
];

const TrustedSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-4">
          Trusted by many companies
        </h2>

        <p className="text-gray-500 max-w-lg mb-10 text-sm leading-relaxed">
          We partner with global companies to provide high-quality services and
          trusted solutions for our customers.
        </p>

        <div className="overflow-hidden relative">
  <div className="flex gap-12 items-center animate-scroll whitespace-nowrap">
    
    {/* duplicate list for infinite loop */}
    {[...companies, ...companies].map((company, i) => (
      <img
        key={i}
        src={company.logo}
        alt={company.name}
        className="h-10 object-contain inline-block"
      />
    ))}

  </div>
</div>
      </div>
    </div>
  );
};

export default TrustedSection;
