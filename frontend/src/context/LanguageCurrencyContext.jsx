import React, { createContext, useContext, useState, useEffect } from "react";

// ── Supported currencies ──────────────────────────────────────────────────────
export const CURRENCIES = {
  USD: { code: "USD", symbol: "$",   name: "US Dollar",       rate: 1     },
  ETB: { code: "ETB", symbol: "ብር",  name: "Ethiopian Birr",  rate: 57.5  },
  EUR: { code: "EUR", symbol: "€",   name: "Euro",            rate: 0.92  },
  GBP: { code: "GBP", symbol: "£",   name: "British Pound",   rate: 0.79  },
};

// ── Translations ──────────────────────────────────────────────────────────────
export const translations = {
  en: {
    // ── Navbar ──
    home:         "Home",
    products:     "Products",
    deals:        "Deals",
    newArrivals:  "New Arrivals",
    signIn:       "Sign In",
    signUp:       "Sign Up",

    // ── Hero ──
    heroUltimate:     "Ultimate",
    heroSale:         "Sale",
    heroNewCollection:"New Collection",
    shopNow:          "Shop Now",

    // ── Deals of the Month ──
    dealsOfTheMonth:  "Deals Of The Month",
    dealsDesc:        "Discover limited-time discounts on our exclusive flash sale collection. Grab yours before stocks run out!",
    buyNow:           "Buy Now",
    hurryText:        "Hurry, Before It's Too Late!",
    days:             "Days",
    hours:            "Hr",
    mins:             "Mins",
    secs:             "Sec",

    // ── Popular / New Arrivals ──
    newArrivalsTitle: "New Arrivals",
    newArrivalsDesc:  "Discover our latest handwoven traditional fashion items crafted for elegance and everyday wear.",
    customerReviews:  "Customer Reviews",
    viewMore:         "View More",

    // ── Instagram Gallery ──
    followUs:         "Follow Us On Instagram",
    followUsDesc:     "Explore our latest customer spotlights and traditional hand-loomed styles featured on our social channels.",

    // ── Reviews ──
    reviewsTitle:     "This Is What Our Customers Say",

    // ── Footer ──
    quickLinks:       "Quick Links",
    shopAll:          "Shop All",
    flashDeals:       "Flash Deals",
    customerCare:     "Customer Care",
    contactUs:        "Contact Us",
    shippingDelivery: "Shipping & Delivery",
    returnsExchanges: "Returns & Exchanges",
    faq:              "FAQ",
    newsletter:       "Newsletter",
    newsletterDesc:   "Subscribe to receive updates, access to exclusive deals, and more.",
    enterEmail:       "Enter your email",
    subscribe:        "Subscribe",
    copyright:        "Copyright © 2026 HABESHA. All Rights Reserved.",
    privacyPolicy:    "Privacy Policy",
    termsOfService:   "Terms of Service",

    // ── Cart page ──
    shoppingCart:     "Shopping Cart",
    yourShoppingCart: "Your Shopping Cart",
    product:          "Product",
    price:            "Price",
    quantity:         "Quantity",
    total:            "Total",
    remove:           "Remove",
    subtotal:         "Subtotal",
    checkout:         "Checkout",
    viewCart:         "View Cart",
    cartEmpty:        "Your cart is empty",
    cartEmptyDesc:    "Looks like you haven't added anything yet. Explore our products and find something you love.",
    startShopping:    "Start Shopping",
    giftWrap:         "Please Wrap The Product",
    for:              "For",

    // ── Product card ──
    addToCart:    "Add to Cart",
    soldOut:      "Sold Out",
    almostSoldOut:"Almost Sold Out",
    limitedOffer: "Limited Offer",
    color:        "Color",

    // ── Deals Page ──
    flashSalesLive:     "Flash Sales Live",
    exclusiveDeals:     "Exclusive Deals & Discounts",
    exclusiveDealsDesc: "Up to 50% off on handpicked handcrafted wear, accessories, and seasonal bundles. Limited stock available.",
    verifiedAuth:       "✓ Verified Authenticity",
    expressShipping:    "✓ Express Shipping",
    easyReturns:        "✓ Easy Returns",
    dailySteals:        "Daily Steals",
    limitedTimeDeals:   "Limited-Time Flash Deals",
    curatedPackages:    "Curated Packages",
    bundleAndSave:      "Bundle & Save Extra",
    bundleDesc:         "Combine items together in one purchase and save up to an additional $130 instantly.",
    claimBundle:        "Claim Bundle Deal",
    vipAlerts:          "VIP Deal Alerts",
    neverMiss:          "Never Miss A Flash Sale",
    neverMissDesc:      "Subscribe to get immediate notification 2 hours before our promotional discounts go live to the public.",
    getEarlyAccess:     "Get Early Access",

    // ── Category Page ──
    filters:          "Filters",
    noProductsFound:  "No products found",
    noProductsHint:   "Try clearing or adjusting your selected filters.",
    resetFilters:      "Reset Filters",
    clearAll:          "Clear All Filters",
    apply:             "Apply",
    categories:        "Categories",
    size:              "Size",
    colors:            "Colors",
    prices:            "Prices",
    brands:            "Brands",
    collections:       "Collections",
    activeFilters:     "Active filters:",
    clearAllShort:     "Clear All",

    // ── Product Detail ──
    description:    "Description",
    specifications: "Specifications",
    reviews:        "Reviews",
    browseAll:      "Browse all products",

    // ── Contact Us ──
    getInTouch:          "Get In Touch",
    getInTouchDesc:      "Have questions about our handwoven traditional wear or custom orders? Reach out to our team and we'll get back to you as soon as possible.",
    weAreHere:           "We Are Here For You",
    letsConverse:        "Let's Start a Conversation",
    contactIntro:        "Whether you need sizing assistance, wholesale inquiries, or shipping details, our customer support representatives are glad to assist you.",
    ourLocation:         "Our Location",
    phoneNumber:         "Phone Number",
    emailAddress:        "Email Address",
    workingHours:        "Working Hours",
    sendMessage:         "Send Us a Message",
    sendMessageDesc:     "Fill out the form below and we will respond within 24 business hours.",
    messageSent:         "Thank you! Your message has been sent successfully.",
    yourName:            "Your Name",
    subject:             "Subject",
    subjectPlaceholder:  "How can we help you?",
    message:             "Message",
    messagePlaceholder:  "Write your message here...",
    sendBtn:             "Send Message",

    // ── FAQ ──
    faqTitle:            "Frequently Asked Questions",
    faqDesc:             "Find answers to common questions regarding orders, shipping timelines, product care, and return guidelines.",
    stillHaveQuestions:  "Still Have Questions?",
    stillHaveDesc:       "If you couldn't find the answer you were looking for, our customer support team is always ready to assist you.",
    contactTeam:         "Contact Our Team",

    // ── Shipping ──
    shippingTitle:       "Shipping & Delivery",
    shippingDesc:        "We bring authentic traditional Ethiopian craftsmanship right to your doorstep, locally and worldwide with care and speed.",
    customShippingQ:     "Have Custom Shipping Questions?",
    customShippingDesc:  "Need bulk enterprise shipping or specific express courier arrangements? Get in touch with our operations team today.",
    contactSupport:      "Contact Support",

    // ── Returns ──
    returnsTitle:        "Returns & Exchanges",
    returnsDesc:         "We want you to absolutely love your traditional wear. If something isn't quite right, we're here to help you get the right fit or style.",
    needHelpReturn:      "Need Help With a Return?",
    needHelpReturnDesc:  "Our support team is ready to walk you through the exchange process or assist with tracking your refund status.",
    contactSupportTeam:  "Contact Support Team",

    // ── Support ──
    howCanWeHelp:        "How we can help you?",
    helpTopics:          "Help Topics",
    popularArticles:     "Popular Articles",
    close:               "Close",

    // ── Auth ──
    discoverFashion:     "Discover Fashion Excellence",
    discoverFashionDesc: "Join HABESHA today to explore curated seasonal collections and exclusive member deals.",
    signInToHabesha:     "Sign In To HABESHA",
    signInBtn:           "Sign In",
    registerNow:         "Register Now",
    forgotPassword:      "Forget Password?",
    termsConditions:     "HABESHA Terms & Conditions",
    startJourney:        "Start Your Style Journey",
    startJourneyDesc:    "Create your HABESHA account today to unlock personalized recommendations and exclusive releases.",
    createAccount:       "Create Account",
    alreadyHaveAccount:  "Already have an account? Sign In",
    fullName:            "Full Name",
    email:               "Email",
    password:            "Password",
    confirmPassword:     "Confirm Password",

    // ── Profile ──
    personal:            "Personal",
    orders:              "Orders",
    payment:             "Payment",
    logout:              "Logout",
    firstName:           "First name",
    lastName:            "Last name",
    emailAddress2:       "Email address",
    phoneNumber2:        "Phone number",
    birthday:            "Birthday",
    gender:              "Gender",
    streetAddress:       "Street address",
    zipCode:             "Zip/code",
    city:                "City",
    country:             "Country",
    changePassword:      "Change Password",
    currentPassword:     "Current password",
    newPassword:         "New password",
    confirmNewPassword:  "Confirm new password",
    saveChanges:         "Save changes",
    contentFor:          "Content for",
    willAppear:          "will appear here.",
  },

  am: {
    // ── Navbar ──
    home:         "መነሻ",
    products:     "ምርቶች",
    deals:        "ቅናሾች",
    newArrivals:  "አዲስ ምርቶች",
    signIn:       "ግባ",
    signUp:       "ተመዝገብ",

    // ── Hero ──
    heroUltimate:     "ልዩ",
    heroSale:         "ሽያጭ",
    heroNewCollection:"አዲስ ስብስብ",
    shopNow:          "አሁን ግዛ",

    // ── Deals of the Month ──
    dealsOfTheMonth:  "የወሩ ቅናሾች",
    dealsDesc:        "በልዩ ፍላሽ ሽያጭ ስብስባችን ላይ ውስን ጊዜ ቅናሾችን ያግኙ። ክምችቱ ከማለቁ በፊት ያግኙ!",
    buyNow:           "አሁን ግዛ",
    hurryText:        "ጊዜ ይቀረዋል፣ ቸኩሉ!",
    days:             "ቀናት",
    hours:            "ሰዓት",
    mins:             "ደቂቃ",
    secs:             "ሴኮ",

    // ── Popular / New Arrivals ──
    newArrivalsTitle: "አዲስ ምርቶች",
    newArrivalsDesc:  "ለውበት እና ለዕለት ተዕለት ልብስ የተሰሩ አዳዲስ የሸማ ባህላዊ ምርቶቻችንን ያግኙ።",
    customerReviews:  "የደንበኞች ግምገማ",
    viewMore:         "ተጨማሪ ይመልከቱ",

    // ── Instagram Gallery ──
    followUs:         "በኢንስታግራም ይከተሉን",
    followUsDesc:     "በማህበራዊ ሚዲያ ቻናሎቻችን ላይ የቀረቡ አዳዲስ የደንበኞቻችን እና ባህላዊ ልብሶቻችንን ያስሱ።",

    // ── Reviews ──
    reviewsTitle:     "ደንበኞቻችን የሚናገሩት ይህ ነው",

    // ── Footer ──
    quickLinks:       "ፈጣን አገናኞች",
    shopAll:          "ሁሉንም ይግዙ",
    flashDeals:       "ፍላሽ ቅናሾች",
    customerCare:     "የደንበኛ አገልግሎት",
    contactUs:        "ያናግሩን",
    shippingDelivery: "መላኪያ & ማድረሻ",
    returnsExchanges: "መመለሻ & ልውውጥ",
    faq:              "ተደጋጋሚ ጥያቄዎች",
    newsletter:       "ዜና መጽሔት",
    newsletterDesc:   "ዝማኔዎችን፣ ልዩ ቅናሾችን እና ተጨማሪ ለማግኘት ይመዝገቡ።",
    enterEmail:       "ኢሜልዎን ያስገቡ",
    subscribe:        "ተመዝገብ",
    copyright:        "የቅጅ መብት © 2026 HABESHA. መብቱ የተጠበቀ ነው።",
    privacyPolicy:    "የግላዊነት ፖሊሲ",
    termsOfService:   "የአገልግሎት ውሎች",

    // ── Cart page ──
    shoppingCart:     "የግዢ ቅርጫት",
    yourShoppingCart: "የእርስዎ የግዢ ቅርጫት",
    product:          "ምርት",
    price:            "ዋጋ",
    quantity:         "ብዛት",
    total:            "ድምር",
    remove:           "አስወግድ",
    subtotal:         "ጠቅላላ",
    checkout:         "ክፈል",
    viewCart:         "ቅርጫት ይመልከቱ",
    cartEmpty:        "ቅርጫትዎ ባዶ ነው",
    cartEmptyDesc:    "እስካሁን ምንም አልጨመሩም። ምርቶቻችንን ያስሱ እና የሚወዱትን ያግኙ።",
    startShopping:    "ግዢ ይጀምሩ",
    giftWrap:         "ምርቱን ያሸጉ",
    for:              "ለ",

    // ── Product card ──
    addToCart:    "ወደ ቅርጫት አክል",
    soldOut:      "አልቋል",
    almostSoldOut:"እያለቀ ነው",
    limitedOffer: "ልዩ ቅናሽ",
    color:        "ቀለም",

    // ── Deals Page ──
    flashSalesLive:     "ፍላሽ ሽያጭ ቀጥሏል",
    exclusiveDeals:     "ልዩ ቅናሾች & ቅናሽ",
    exclusiveDealsDesc: "በተዘጋጁ የባህል ልብሶች፣ ጌጣጌጦች እና የወቅቱ ቡንዲሎች ላይ እስከ 50% ቅናሽ። ውስን ክምችት ይገኛል።",
    verifiedAuth:       "✓ የተረጋገጠ ትክክለኝነት",
    expressShipping:    "✓ ፈጣን መላኪያ",
    easyReturns:        "✓ ቀላል መመለሻ",
    dailySteals:        "የዕለቱ ቅናሾች",
    limitedTimeDeals:   "ውስን ጊዜ ፍላሽ ቅናሾች",
    curatedPackages:    "የተዘጋጁ ጥቅሎች",
    bundleAndSave:      "አጣምረው ይቆጥቡ",
    bundleDesc:         "ምርቶቹን በአንድ ግዢ ያጣምሩ እና ተጨማሪ እስከ 130 ዶላር ይቆጥቡ።",
    claimBundle:        "ጥቅሉን ይውሰዱ",
    vipAlerts:          "VIP ቅናሽ ማሳወቂያ",
    neverMiss:          "ፍላሽ ሽያጭ አያምልጥዎ",
    neverMissDesc:      "ቅናሾቻችን ከመጀመሩ 2 ሰዓት ቀደም ብሎ ማሳወቂያ ለማግኘት ይመዝገቡ።",
    getEarlyAccess:     "ቀደም ብለው ይግቡ",

    // ── Category Page ──
    filters:          "ማጣሪያዎች",
    noProductsFound:  "ምርቶች አልተገኙም",
    noProductsHint:   "ማጣሪያዎቹን ያጽዱ ወይም ያስተካክሉ።",
    resetFilters:      "ማጣሪያ ዳግም አስጀምር",
    clearAll:          "ሁሉንም አጽዳ",
    apply:             "ተጠቀም",
    categories:        "ምድቦች",
    size:              "መጠን",
    colors:            "ቀለሞች",
    prices:            "ዋጋዎች",
    brands:            "ብራንዶች",
    collections:       "ስብስቦች",
    activeFilters:     "ንቁ ማጣሪያዎች:",
    clearAllShort:     "ሁሉንም አጽዳ",

    // ── Product Detail ──
    description:    "መግለጫ",
    specifications: "ዝርዝሮች",
    reviews:        "ግምገማዎች",
    browseAll:      "ሁሉንም ምርቶች ይመልከቱ",

    // ── Contact Us ──
    getInTouch:          "ያናግሩን",
    getInTouchDesc:      "ስለ ሸማ ልብሶቻችን ወይም ልዩ ትዕዛዞች ጥያቄ አለዎት? ቡድናችን ወቅቱን ጠብቆ ይመልሳል።",
    weAreHere:           "ለእርስዎ እዚህ ነን",
    letsConverse:        "ውይይት እንጀምር",
    contactIntro:        "ስለ መጠን፣ ጅምላ ትዕዛዝ ወይም መላኪያ ዝርዝሮች ጥያቄ ካለዎ ቡድናችን ደስ ብሎት ይረዳዎታል።",
    ourLocation:         "አድራሻችን",
    phoneNumber:         "ስልክ ቁጥር",
    emailAddress:        "ኢሜል አድራሻ",
    workingHours:        "የሥራ ሰዓቶች",
    sendMessage:         "መልዕክት ይላኩልን",
    sendMessageDesc:     "ቅጹን ይሙሉ፣ በ24 የሥራ ሰዓታት ውስጥ እንመልሳለን።",
    messageSent:         "አመሰግናለሁ! መልዕክትዎ በተሳካ ሁኔታ ተልኳል።",
    yourName:            "ስምዎ",
    subject:             "ርዕሰ ጉዳይ",
    subjectPlaceholder:  "እንዴት ልንረዳዎ እንችላለን?",
    message:             "መልዕክት",
    messagePlaceholder:  "መልዕክትዎን እዚህ ይጻፉ...",
    sendBtn:             "መልዕክት ላክ",

    // ── FAQ ──
    faqTitle:            "ተደጋጋሚ ጥያቄዎች",
    faqDesc:             "ስለ ትዕዛዞች፣ የመላኪያ ጊዜ፣ የምርት እንክብካቤ እና የመመለሻ መመሪያዎች ብዙ ጊዜ ለሚጠየቁ ጥያቄዎች መልሶችን ያግኙ።",
    stillHaveQuestions:  "ሌሎች ጥያቄዎች አሉዎ?",
    stillHaveDesc:       "የሚፈልጉትን መልስ ካላገኙ ቡድናችን ሁሌም ዝግጁ ነው።",
    contactTeam:         "ቡድናችንን ያናግሩ",

    // ── Shipping ──
    shippingTitle:       "መላኪያ & ማድረሻ",
    shippingDesc:        "ኢትዮጵያዊ ባህላዊ የእጅ ሥራ ምርቶቻችን ወደ ቤትዎ፣ ሀገር ውስጥ እና ዓለም አቀፍ፣ ምን ዋስትና ያደርሳሉ።",
    customShippingQ:     "ልዩ የጭነት ጥያቄዎች አሉዎ?",
    customShippingDesc:  "ለጅምላ ወይም ልዩ ፍጥነት ያለው ጭነት ዝግጅት ቡድናችንን ያናግሩ።",
    contactSupport:      "ድጋፍ ያናግሩ",

    // ── Returns ──
    returnsTitle:        "መመለሻ & ልውውጥ",
    returnsDesc:         "ባህላዊ ልብሶቻችንን ይወዱ ዘንድ እንፈልጋለን። ሆኖም ካልተስማሙ ትክክለኛ ልኬት ወይም ዘይቤ ለማግኘት እዚህ ነን።",
    needHelpReturn:      "ስለ ተመለሻ እርዳታ ፈልጉ?",
    needHelpReturnDesc:  "የድጋፍ ቡድናችን ልውውጡ ሂደቱን ወይም ብሬ ሁኔታዎን ለመከታተል ዝግጁ ነው።",
    contactSupportTeam:  "የድጋፍ ቡድን ያናግሩ",

    // ── Support ──
    howCanWeHelp:        "እንዴት ልንረዳዎ እንችላለን?",
    helpTopics:          "የእርዳታ ርዕሶች",
    popularArticles:     "ታዋቂ ጽሑፎች",
    close:               "ዝጋ",

    // ── Auth ──
    discoverFashion:     "የፋሽን ልቀትን ያግኙ",
    discoverFashionDesc: "ዛሬ HABESHA ይቀላቀሉ፣ ልዩ ስብስቦችን እና ልዩ አባልነት ቅናሾችን ይፈልሉ።",
    signInToHabesha:     "ወደ HABESHA ግባ",
    signInBtn:           "ግባ",
    registerNow:         "አሁን ተመዝገብ",
    forgotPassword:      "ይለፍ ቃል ረሳዎ?",
    termsConditions:     "የ HABESHA አጠቃቀም ውሎች",
    startJourney:        "የስታይልዎን ጉዞ ይጀምሩ",
    startJourneyDesc:    "ዛሬ HABESHA ሂሳብ ይፍጠሩ፣ ለእርስዎ የተበጀ ምክሮችን እና ልዩ ምርቶችን ያግኙ።",
    createAccount:       "ሂሳብ ፍጠር",
    alreadyHaveAccount:  "ሂሳብ አለዎ? ግባ",
    fullName:            "ሙሉ ስም",
    email:               "ኢሜል",
    password:            "ይለፍ ቃል",
    confirmPassword:     "ይለፍ ቃሉን አረጋግጥ",

    // ── Profile ──
    personal:            "ግላዊ",
    orders:              "ትዕዛዞች",
    payment:             "ክፍያ",
    logout:              "ውጣ",
    firstName:           "መጠሪያ ስም",
    lastName:            "የአባት ስም",
    emailAddress2:       "ኢሜል አድራሻ",
    phoneNumber2:        "ስልክ ቁጥር",
    birthday:            "ልደት ቀን",
    gender:              "ጾታ",
    streetAddress:       "የጎዳና አድራሻ",
    zipCode:             "የፖስታ ኮድ",
    city:                "ከተማ",
    country:             "አገር",
    changePassword:      "ይለፍ ቃል ቀይር",
    currentPassword:     "አሁን ያለው ይለፍ ቃል",
    newPassword:         "አዲስ ይለፍ ቃል",
    confirmNewPassword:  "አዲሱን ይለፍ ቃል አረጋግጥ",
    saveChanges:         "ለውጦችን አስቀምጥ",
    contentFor:          "ይዘት ለ",
    willAppear:          "እዚህ ይታያል።",
  },
};

// ── Context ───────────────────────────────────────────────────────────────────
const LanguageCurrencyContext = createContext();

export const LanguageCurrencyProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");

  // Load from localStorage only once after mount (avoids SSR/hydration issues)
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    const savedCur  = localStorage.getItem("currency");
    if (savedLang && translations[savedLang]) setLanguage(savedLang);
    if (savedCur  && CURRENCIES[savedCur])    setCurrency(savedCur);
  }, []);

  // Persist every change
  useEffect(() => { localStorage.setItem("lang", language); }, [language]);
  useEffect(() => { localStorage.setItem("currency", currency); }, [currency]);

  // Always picks the current language — never falls back silently
  const t = (key) => {
    return translations[language]?.[key] ?? translations["en"]?.[key] ?? key;
  };

  /** Convert a base-USD price and return a formatted string */
  const formatPrice = (usdPrice) => {
    const num = typeof usdPrice === "number" ? usdPrice : parseFloat(usdPrice) || 0;
    const cur = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = num * cur.rate;
    // Use a safe locale — am-ET may not be supported everywhere
    let formatted;
    try {
      formatted = converted.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } catch {
      formatted = converted.toFixed(2);
    }
    return `${cur.symbol}${formatted}`;
  };

  const handleSetLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageCurrencyContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        currency,
        setCurrency,
        t,
        formatPrice,
        CURRENCIES,
      }}
    >
      {/* key forces full subtree re-render on language change so every t() call updates */}
      <React.Fragment key={language}>
        {children}
      </React.Fragment>
    </LanguageCurrencyContext.Provider>
  );
};

export const useLangCurrency = () => {
  const ctx = useContext(LanguageCurrencyContext);
  if (!ctx) throw new Error("useLangCurrency must be used inside LanguageCurrencyProvider");
  return ctx;
};
