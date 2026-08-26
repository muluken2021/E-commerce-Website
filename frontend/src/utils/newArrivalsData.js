// --- CATEGORIES LIST ---
export const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Men Kids Fashion",
  "Women Kids Fashion",
  "Discount Deals",
];

// --- REUSABLE REVIEWS DATA ---
const standardReviewsSummary = {
  average: 4.7,
  total: 3,
  stars: { 5: 2, 4: 1, 3: 0, 2: 0, 1: 0 }
};

const standardReviewsList = [
  { id: "r1", author: "Muluken Kassaw", date: "1 week ago", rating: 5, comment: "Absolutely fantastic product. Build quality is exceptional and it arrived ahead of schedule. Would definitely purchase again and recommend to friends.", helpfulCount: 24 },
  { id: "r2", author: "Abel Alemu", date: "3 weeks ago", rating: 4, comment: "Great product overall. Functions exactly as advertised. Minor packaging issue but the product itself is top notch. Very happy with the purchase.", helpfulCount: 18 },
  { id: "r3", author: "Mahder Belay", date: "5 weeks ago", rating: 5, comment: "Premium quality and great value. The design is modern and elegant. Highly recommend this to anyone who wants reliable performance at a fair price.", helpfulCount: 31 }
];

// --- MASTER PRODUCTS LIST ---
export const products = [
  // =========================
  // WOMEN'S FASHION
  // =========================
  {
    id: 1,
    category: "Women's Fashion",
    title: "Traditional Habesha Kemis",
    title_am: "ባህላዊ ሃበሻ ቀሚስ",
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "4.8k",
    price: "$120.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXYHUfc08wwRY-snFoKVcnt_5IyLEjUvW2HlPkt7J4gQMcDMuDJONW6s&s=10",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://ethiopianclothing.net/cdn/shop/products/keficho-traditional-habesha-dress-eritrean-dresses-ethiopian-clothing-kemis_554_600x.jpg?v=1621067979",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A stunning Traditional Habesha Kemis crafted from authentic handwoven Shemma cotton. Featuring intricate Tibeb embroidery along the neckline, cuffs, and hem, this dress is the perfect embodiment of Ethiopian heritage. Ideal for weddings, holidays, and special cultural celebrations.",
    longDescription_am: "ከእውነተኛ የእጅ ሸማ ጥጥ የተሰራ አስደናቂ ባህላዊ ሃበሻ ቀሚስ። በአንገትጌ፣ በዕጅ ስፌት እና በጫፍ ላይ የተሸፈነ ውስብስብ ጥልፍ ያለው ይህ ቀሚስ የኢትዮጵያ ቅርስ ፍጹም ተምሳሌት ነው። ለሰርግ፣ ለበዓላት እና ለልዩ ባህላዊ ስነ ስርዓቶች ተስማሚ።",
    specifications: { Category: "Women's Fashion", Brand: "Tibeb Habesha", Material: "100% Handspun Cotton", Fit: "Tailored Regular", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ፋሽን", ብራንድ: "Tibeb Habesha", ጨርቅ: "100% የእጅ ሸማ ጥጥ", ቅርጽ: "የተቀረጸ", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 2,
    category: "Women's Fashion",
    title: "White Habesha Dress",
    title_am: "ነጭ ሃበሻ ቀሚስ",
    brand: "Sheger Collection",
    rating: 5,
    reviewsCount: "3.9k",
    price: "$145.00",
    stockStatus: "Almost Sold Out",
    stockStatus_am: "እያለቀ ነው",
    image: "https://ethiopianclothing.net/cdn/shop/files/photo_2024-05-09_18-16-57_2000x.jpg?v=1715269118",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506629905607-d9c36d8c4f7c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Elegance meets tradition in this pristine White Habesha Dress. The minimalist design is highlighted by a delicate, brightly colored traditional border. Designed to offer a lightweight and breathable feel while maintaining a regal silhouette.",
    longDescription_am: "በዚህ ንጹህ ነጭ ሃበሻ ቀሚስ ውስጥ ውበት ከባህል ጋር ይገናኛሉ። ሚኒማሊስት ዲዛይኑ በቀለማት ያሸበረቀ ባህላዊ ጫፍ ተጎልቶ ይታያል። ቀላልና አየር አስገቢ ስሜት ሲሰጥ ንጉሳዊ ቅርጽ ይጠብቃል።",
    specifications: { Category: "Women's Fashion", Brand: "Sheger Collection", Material: "Premium Shemma Cotton", Fit: "Flowy/Relaxed", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ፋሽን", ብራንድ: "Sheger Collection", ጨርቅ: "ምርጥ ሸማ ጥጥ", ቅርጽ: "ልቅ", እንክብካቤ: "በቀዝቃዛ ውሃ እጅ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 3,
    category: "Women's Fashion",
    title: "Gold Tibeb Kemis",
    title_am: "ወርቃማ ጥልፍ ቀሚስ",
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "3.5k",
    price: "$175.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJ21kEpfvzwZsI7w1UNja63GXEOB4Rco0OII4ORtm2QVG0If_Gwiq9ns&s=10",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Make a statement with this breathtaking Gold Tibeb Kemis. The metallic gold threading woven directly into the pure white cotton creates a striking contrast that catches the light beautifully. Comes with a matching Netela (scarf) for a complete ceremonial look.",
    longDescription_am: "ይህ አስደናቂ ወርቃማ ጥልፍ ቀሚስ ለልዩ ገጽታ ይሰጣል። ወርቃማ ሜታሊክ ክሮ ቀጥታ ወደ ንጹህ ነጭ ጥጥ ሲሸምቁ ግሩም ንፅፅር ይፈጥራሉ። ሙሉ ለሙሉ ለሥርዓተ-ስርዓት ሲባል ተጣጣሚ ንጥላ (ሻርፕ) ጨምሮ ይቀርባል።",
    specifications: { Category: "Women's Fashion", Brand: "Tibeb Habesha", Material: "Cotton with Metallic Thread", Fit: "Fitted Waist", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ፋሽን", ብራንድ: "Tibeb Habesha", ጨርቅ: "ጥጥ ከሜታሊክ ክር ጋር", ቅርጽ: "ወገቡ ላይ ሰፊ", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 4,
    category: "Women's Fashion",
    title: "Elegant Habesha Netela Set",
    title_am: "የሃበሻ ንጥላ ስብስብ",
    brand: "Addis Collection",
    rating: 5,
    reviewsCount: "2.7k",
    price: "$95.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NqKXzpnGRSujaoMIar_LcWqP_q949BY_Cbz0NXAGJuuEGdSk9OCwcFss&s=10",
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A versatile and elegant two-piece set featuring a delicately woven Netela and matching base dress. Perfect for church attendances, casual cultural gatherings, or as a thoughtful gift. The fabric is exceptionally soft and drapes perfectly over the shoulders.",
    longDescription_am: "ስስ ሸማ ንጥላ እና ተጣጣሚ ቀሚስ ያለው ሁለት-ክፍል ስብስብ። ለቤተ ክርስቲያን ጉብኝቶች፣ ባህላዊ ስብሰባዎች ወይም ስጦታ ተስማሚ። ጨርቁ በጣም ለስላሳ ሲሆን ትከሻ ላይ ሲጠቀሙ ያምራል።",
    specifications: { Category: "Women's Fashion", Brand: "Addis Collection", Material: "Lightweight Cotton Blend", Fit: "One Size Fits Most (Netela)", Care: "Machine Wash Delicate", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ፋሽን", ብራንድ: "Addis Collection", ጨርቅ: "ቀሊል ጥጥ ድብልቅ", ቅርጽ: "ለብዙዎች ሚስማማ (ንጥላ)", እንክብካቤ: "ሶፍት ሞዴ ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 5,
    category: "Women's Fashion",
    title: "Modern Habesha Kemis",
    title_am: "ዘመናዊ ሃበሻ ቀሚስ",
    brand: "Lalibela Fashion",
    rating: 4,
    reviewsCount: "2.1k",
    price: "$135.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://habeshaoutlets.com/cdn/shop/files/Screenshot_20250707_220303_Instagram.jpg?v=1752245284",
    images: [
      "https://images.unsplash.com/photo-1506629905607-d9c36d8c4f7c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Blending contemporary fashion silhouettes with traditional Ethiopian weaving, this Modern Habesha Kemis features a sleek, updated neckline and shorter hem. It's the perfect fusion of current trends and timeless cultural identity.",
    longDescription_am: "ዘመናዊ ፋሽን ቅርጾችን ከባህላዊ ኢትዮጵያዊ ሸማ ጋር በማዋሃድ ይህ ዘመናዊ ሃበሻ ቀሚስ ቀልጣፋ አንገትጌ እና አጭር ጫፍ ይዟል። የወቅቱ ፋሽንና ዘለዓለማዊ ባህላዊ ማንነት ፍጹም ውህደት ነው።",
    specifications: { Category: "Women's Fashion", Brand: "Lalibela Fashion", Material: "Cotton Spandex Blend", Fit: "Slim Fit", Care: "Dry Clean Recommended", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ፋሽን", ብራንድ: "Lalibela Fashion", ጨርቅ: "ጥጥ ስፓንዴክስ ድብልቅ", ቅርጽ: "ቀጭን", እንክብካቤ: "ደረቅ ይመከራል", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 6,
    category: "Women's Fashion",
    title: "Embroidered Habesha Dress",
    title_am: "ጥልፍ ያለበት ሃበሻ ቀሚስ",
    brand: "Queen Sheba",
    rating: 5,
    reviewsCount: "4.2k",
    price: "$190.00",
    stockStatus: "Almost Sold Out",
    stockStatus_am: "እያለቀ ነው",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8BHJ9k-YmCMSPVz8YAZqzjxGRQ01Q2HxhsDEjJd4ibNWCvW79sIXM6A&s=10",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Our most premium offering. This heavily embroidered Habesha Dress features weeks of hand-stitching work from master artisans. The intricate, multi-colored patterns cascade down the center and hem, making it an absolute showstopper for major events.",
    longDescription_am: "በጣም ዋጋ ያለው ምርታችን። ይህ ብዙ ጥልፍ ያለበት ሃበሻ ቀሚስ ሰሞናት የፈጀ የእጅ ስፌት ሥራ ይዟል። ውስብስቡ ባለ ብዙ ቀለም ንድፍ ከማዕከል እስከ ጫፍ ይወርዳል፣ ለትልልቅ ዝግጅቶች ዓይን ማርኪ ሆኖ ይቀርባል።",
    specifications: { Category: "Women's Fashion", Brand: "Queen Sheba", Material: "Heavy Handspun Cotton", Fit: "Custom Tailored feel", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ፋሽን", ብራንድ: "Queen Sheba", ጨርቅ: "ከባድ የእጅ ሸማ ጥጥ", ቅርጽ: "ልዩ ስፌት", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },

  // =========================
  // MEN'S FASHION
  // =========================
  {
    id: 7,
    category: "Men's Fashion",
    title: "Traditional Habesha Shirt",
    title_am: "ባህላዊ ሃበሻ ሸሚዝ",
    brand: "Habesha Men",
    rating: 5,
    reviewsCount: "3.8k",
    price: "$85.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OINUJR7kj2c8Y_a8LKEYmxxOVyx6_shcMdfQPhXzbVpwIpXRTnORGME&s=10",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A classic men's Habesha shirt featuring a mandarin collar and traditional subtle embroidery down the button placket. Tailored for comfort without sacrificing style, this shirt is perfect for groomsmen, church, or cultural holidays.",
    longDescription_am: "ማንዳሪን አንገትጌ እና ቁልፍ ላይ ባህላዊ ጥልፍ ያለው ክላሲካዊ የወንድ ሃበሻ ሸሚዝ። ምቾትን ሳያጣ ፋሽናዊ ሆኖ ለጋብቻ ምስክሮች፣ ቤተ ክርስቲያን ወይም ባህላዊ በዓላት ተስማሚ ነው።",
    specifications: { Category: "Men's Fashion", Brand: "Habesha Men", Material: "100% Cotton", Fit: "Regular Fit", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ፋሽን", ብራንድ: "Habesha Men", ጨርቅ: "100% ጥጥ", ቅርጽ: "መደበኛ", እንክብካቤ: "በቀዝቃዛ ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 8,
    category: "Men's Fashion",
    title: "White Habesha Jano",
    title_am: "ነጭ ሃበሻ ጃኖ",
    brand: "Sheger Collection",
    rating: 5,
    reviewsCount: "3.2k",
    price: "$110.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://ethiopianclothing.net/cdn/shop/files/Ashenafi_Habesha_Men_s_Clothes_2048x.jpg?v=1750783471",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Step into tradition with this striking White Habesha Jano. The iconic wide red stripe (Jano) woven into the hem symbolizes strength and heritage. Comes as a full set including the tunic and trousers.",
    longDescription_am: "ይህ አስደናቂ ነጭ ሃበሻ ጃኖ ወደ ወጉ ይጋብዛል። ጫፍ ላይ የተሸፈነ ወፍራሙ ቀይ ጭረት (ጃኖ) ጥንካሬ እና ቅርስ ያመለክታል። ሙሉ ስብስቡ ሰቅ እና ሱሪ ጨምሮ ይቀርባል።",
    specifications: { Category: "Men's Fashion", Brand: "Sheger Collection", Material: "Heavy Shemma Cotton", Fit: "Relaxed Traditional", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ፋሽን", ብራንድ: "Sheger Collection", ጨርቅ: "ከባድ ሸማ ጥጥ", ቅርጽ: "ባህላዊ ልቅ", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 9,
    category: "Men's Fashion",
    title: "Embroidered Habesha Suit",
    title_am: "ጥልፍ ያለበት ሃበሻ ሱት",
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "2.9k",
    price: "$150.00",
    stockStatus: "Almost Sold Out",
    stockStatus_am: "እያለቀ ነው",
    image: "https://habeshaoutlets.com/cdn/shop/files/459a40e4d9fb54410c6451c70c14df6e_1.jpg?v=1756218953",
    images: [
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A modern take on Ethiopian men's formal wear. This two-piece suit combines Western tailoring with striking Ethiopian embroidery on the lapels and cuffs. Built for the modern man who wants to represent his roots in professional and formal settings.",
    longDescription_am: "የኢትዮጵያ ወንዶች ፎርማል ልብስ ዘመናዊ ትርጓሜ። ይህ ሁለት-ክፍል ሱት ምዕራባዊ ቅርጸ-ልብስን ከወርጣ ላይ እና ዕጅ ላይ ካለ አስደናቂ ኢትዮጵያዊ ጥልፍ ጋር ያዋህዳል። ሙያዊና ፎርማል ቦታ ላይ ሥርዓቱን ለሚፈልጉ ዘመናዊ ወንዶች ተሰርቷል።",
    specifications: { Category: "Men's Fashion", Brand: "Tibeb Habesha", Material: "Cotton-Wool Blend", Fit: "Slim Fit", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ፋሽን", ብራንድ: "Tibeb Habesha", ጨርቅ: "ጥጥ-ሱፍ ድብልቅ", ቅርጽ: "ቀጭን", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 10,
    category: "Men's Fashion",
    title: "Traditional Ethiopian Shawl",
    title_am: "ባህላዊ ኢትዮጵያዊ ሻርፕ",
    brand: "Lalibela Collection",
    rating: 4,
    reviewsCount: "1.9k",
    price: "$70.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://i.etsystatic.com/52898921/r/il/59fbb7/6564827810/il_340x270.6564827810_e9we.jpg",
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The essential Kuta (shawl) for men. Handwoven for incredible softness and warmth, this oversized shawl is designed to be draped over the shoulders during religious ceremonies, cool evenings, and cultural events.",
    longDescription_am: "ለወንዶች አስፈላጊ ኩታ (ሻርፕ)። ለታላቅ ለስሎናና ሙቀት እጅ ተሸምቅዋል፤ ይህ ትልቅ ሻርፕ የሃይማኖት ስርዓቶች፣ ቀዝቃዛ ምሽቶች እና ባህላዊ ዝግጅቶች ላይ ትከሻ ላይ ለመሸፈን ተዘጋጅቷል።",
    specifications: { Category: "Men's Fashion", Brand: "Lalibela Collection", Material: "100% Handwoven Cotton", Fit: "One Size", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ፋሽን", ብራንድ: "Lalibela Collection", ጨርቅ: "100% የእጅ ሸማ ጥጥ", ቅርጽ: "አንድ ልኬት", እንክብካቤ: "በቀዝቃዛ ውሃ እጅ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 11,
    category: "Men's Fashion",
    title: "Habesha Wedding Outfit",
    title_am: "የሃበሻ ሰርግ ልብስ",
    brand: "Ethiopian Heritage",
    rating: 5,
    reviewsCount: "4.1k",
    price: "$220.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://ethiopian.store/cdn/shop/files/il_fullxfull.5099412667_tk6x-139642.jpg?v=1749304192&width=1445",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The ultimate groom's attire. This luxurious three-piece set includes the tunic, trousers, and a heavily embroidered matching Kuta (cape). Crafted with premium materials and dense golden thread embroidery to ensure you stand out on your big day.",
    longDescription_am: "የሙሽሮ ልብስ ፍጹም ምርጫ። ይህ ቅንጡ ሦስት-ክፍል ስብስብ ሰቅ፣ ሱሪ እና ጥልፍ ያለበት ተጣጣሚ ኩታ (ኬፕ) ያካትታል። ምርጥ ቁሶች እና ወፍራም ወርቃማ ክር ጥልፍ ለትልቁ ቀንዎ ጎልተው ለመታየት ያስችለናል።",
    specifications: { Category: "Men's Fashion", Brand: "Ethiopian Heritage", Material: "Premium Cotton & Silk Threads", Fit: "Tailored Fit", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ፋሽን", ብራንድ: "Ethiopian Heritage", ጨርቅ: "ምርጥ ጥጥ እና ሐር ክርዎች", ቅርጽ: "ስፌት ቅርጽ", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 12,
    category: "Men's Fashion",
    title: "Modern Ethiopian Kuta",
    title_am: "ዘመናዊ ኢትዮጵያዊ ኩታ",
    brand: "Addis Style",
    rating: 5,
    reviewsCount: "2.6k",
    price: "$125.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://ethiopianclothing.net/cdn/shop/files/Chane_Ethiopian_Men_s_Clothe2_1600x.jpg?v=1751993724",
    images: [
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A stylish, everyday version of the traditional Kuta. Designed with a tighter weave and modern color palettes, it can be styled as a chunky scarf over a coat or draped casually. The perfect cultural accessory for urban living.",
    longDescription_am: "ባህላዊ ኩታ ዘመናዊ ዕለታዊ ስሪት። ጠባቡ ሸማ እና ዘመናዊ ቀለሞች ለካፖርት ላይ ወፍራም ሻርፕ ሆኖ ወይም ዘና ብሎ ለማቅረብ ያስችላል። ለከተማ ኑሮ ፍጹም ባህላዊ ማሟያ ነው።",
    specifications: { Category: "Men's Fashion", Brand: "Addis Style", Material: "Cotton & Acrylic Blend", Fit: "One Size", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ፋሽን", ብራንድ: "Addis Style", ጨርቅ: "ጥጥ እና አክሪሊክ ድብልቅ", ቅርጽ: "አንድ ልኬት", እንክብካቤ: "በቀዝቃዛ ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },

  // =========================
  // MEN KIDS FASHION
  // =========================
  {
    id: 13,
    category: "Men Kids Fashion",
    title: "Little Habesha Boy Outfit",
    title_am: "ትንሽ ሃበሻ ልጅ ልብስ",
    brand: "Little Habesha",
    rating: 5,
    reviewsCount: "1.9k",
    price: "$55.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtpvUcnxUamnmarxBMiRfxX_QFP3ttaSxGgSDCHMQXZwqVd27lkjlSA0&s=10",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Dress your little one in absolute cuteness and rich culture! This boy's traditional outfit features a soft cotton tunic and elastic-waist trousers. Specially designed to be gentle on sensitive skin while allowing kids to run and play freely.",
    longDescription_am: "ትንሽ ልጅዎን በውበትና ባህሉ ያስለብሱ! ይህ የወንድ ልጅ ባህላዊ ልብስ ለስላሳ ጥጥ ሰቅ እና ኤላስቲክ ወገቡ ያለው ሱሪ ይዟል። ስስ ቆዳ ላይ ለስላሳ ሆኖ ልጆቹ ሊሮጡ እና ሊጫወቱ ባስቻለ ሁኔታ ተዘጋጅቷል።",
    specifications: { Category: "Men Kids Fashion", Brand: "Little Habesha", Material: "100% Soft Cotton", Fit: "Comfort Fit", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ልጆች ፋሽን", ብራንድ: "Little Habesha", ጨርቅ: "100% ለስላሳ ጥጥ", ቅርጽ: "ምቹ ቅርጽ", እንክብካቤ: "በቀዝቃዛ ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 14,
    category: "Men Kids Fashion",
    title: "Kids Traditional Kuta",
    title_am: "ለልጆች ባህላዊ ኩታ",
    brand: "Tibeb Kids",
    rating: 5,
    reviewsCount: "1.5k",
    price: "$48.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLG2o8e61F9a82xiSUm2Pd5mubQErDYucS9X1Vzeg0R0YGOiBUToNsFk&s=10",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A miniature version of the classic men's shawl. This child-sized Kuta is lightweight, highly durable, and features colorful edge patterns. Perfect for teaching the younger generation about their beautiful heritage.",
    longDescription_am: "የክላሲካዊ ወንዶች ሻርፕ ትንሽ ስሪት። ይህ ለልጆች ልኬት ኩታ ቀሊልና ጠንካራ ሲሆን ቀለማት ያሸበረቁ ጫፍ ንድፎች አለው። ወጣቱን ትውልድ ስለ ቆንጆ ቅርሳቸው ለማስተማር ፍጹም ነው።",
    specifications: { Category: "Men Kids Fashion", Brand: "Tibeb Kids", Material: "Handwoven Cotton", Fit: "One Size Fits 4-10yrs", Care: "Machine Washable", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ልጆች ፋሽን", ብራንድ: "Tibeb Kids", ጨርቅ: "የእጅ ሸማ ጥጥ", ቅርጽ: "4-10 ዓመት", እንክብካቤ: "ማሽን ማጠብ ይቻላል", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 15,
    category: "Men Kids Fashion",
    title: "Mini Habesha Wedding Outfit",
    title_am: "ትንሽ ሃበሻ ሰርግ ልብስ",
    brand: "Little Ethiopia",
    rating: 5,
    reviewsCount: "1.2k",
    price: "$65.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://ethiopianculturalshop.com/wp-content/uploads/2023/08/photo_2023-06-15_11-57-58-2.jpg",
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502720705749-3c6d8c3c5e2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Make him the star of the ceremony! This boy's formal outfit mimics a groom's attire with detailed embroidery and a structured collar. It includes a matching mini-cape for an incredibly photogenic traditional look.",
    longDescription_am: "ልጅዎን የስርዓቱ ኮከብ አድርጉ! ይህ የወንድ ልጅ ፎርማል ልብስ ዝርዝር ጥልፍ እና ቅርጹ ያለው አንገትጌ ያለው የሙሽሮ ልብስ ይመስላል። ፎቶ ሲነሱ አስደናቂ ባህላዊ ገጽታ ለመስጠት ተጣጣሚ ትንሽ ኬፕ ጨምሮ ይቀርባል።",
    specifications: { Category: "Men Kids Fashion", Brand: "Little Ethiopia", Material: "Cotton Blend", Fit: "Tailored Look, Elastic Waist", Care: "Hand Wash Recommended", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ልጆች ፋሽን", ብራንድ: "Little Ethiopia", ጨርቅ: "ጥጥ ድብልቅ", ቅርጽ: "ስፌት ቅርጽ፣ ኤላስቲክ ወገብ", እንክብካቤ: "እጅ ማጠብ ይመከራል", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 16,
    category: "Men Kids Fashion",
    title: "Boys Embroidered Shirt",
    title_am: "ጥልፍ ያለበት የወንድ ልጅ ሸሚዝ",
    brand: "Sheger Kids",
    rating: 4,
    reviewsCount: "980",
    price: "$42.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://www.fllae.com/cdn/shop/files/DSCF1757.jpg?v=1781269889",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A versatile top that pairs effortlessly with traditional trousers or everyday jeans. Features robust, child-friendly stitching and authentic Habesha patterns around the neck and cuffs. Highly breathable for active kids.",
    longDescription_am: "ባህላዊ ሱሪ ወይም ዕለታዊ ጂን ጋር ቀላል ተጣጣሚ ሸሚዝ። ጠንካራ ለልጆቹ ደህና ስፌት እና አንገት እና ዕጅ ዙሪያ ትክክለኛ ሃበሻ ንድፍ ይዟል። ለንቁ ልጆች ምቹ አየር አስተላላፊ ነው።",
    specifications: { Category: "Men Kids Fashion", Brand: "Sheger Kids", Material: "100% Breathable Cotton", Fit: "Regular", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ልጆች ፋሽን", ብራንድ: "Sheger Kids", ጨርቅ: "100% አየር አስተላላፊ ጥጥ", ቅርጽ: "መደበኛ", እንክብካቤ: "በቀዝቃዛ ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 17,
    category: "Men Kids Fashion",
    title: "Young Habesha Prince Set",
    title_am: "ወጣት ሃበሻ ልዑል ስብስብ",
    brand: "Tibeb Kids",
    rating: 5,
    reviewsCount: "1.7k",
    price: "$75.00",
    stockStatus: "Almost Sold Out",
    stockStatus_am: "እያለቀ ነው",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfec5Car8ocKt77J5Giuy2LerQBzkTuB5GrQmegxIGw7nFsQJioO6jOc&s=10",
    images: [
      "https://images.unsplash.com/photo-1502720705749-3c6d8c3c5e2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A premium 3-piece collection for young boys featuring exquisite metallic gold threading. Designed to mirror adult formal wear but constructed with soft, itch-free linings for all-day comfort during long celebrations.",
    longDescription_am: "ለወጣት ወንዶች ልጆች የሚሆን ምርጥ ሦስት-ክፍል ስብስብ ዋጋ ያለው ወርቃማ ሜታሊክ ክር ይዟል። የጎልማሳ ፎርማል ልብስ ሲመስል ለረዥም ጊዜ ስርዓቶች ምቹ ሆኖ ለስላሳ ከነቁጥር ነጻ ሸፈን ተዘጋጅቷል።",
    specifications: { Category: "Men Kids Fashion", Brand: "Tibeb Kids", Material: "Premium Cotton w/ Soft Lining", Fit: "True to Size", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ልጆች ፋሽን", ብራንድ: "Tibeb Kids", ጨርቅ: "ምርጥ ጥጥ ከለስላሳ ሸፈን", ቅርጽ: "እውነተኛ ልኬት", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 18,
    category: "Men Kids Fashion",
    title: "Traditional Ethiopian Boys Set",
    title_am: "ባህላዊ ኢትዮጵያዊ ወንዶች ልጆች ስብስብ",
    brand: "Addis Kids",
    rating: 5,
    reviewsCount: "1.1k",
    price: "$58.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/9a100286-8729-4182-8d54-f2dca68bacd7.png",
    images: [
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The everyday cultural staple. A resilient, easy-to-wash two-piece set featuring standard Tibeb embroidery. The fabric gets softer with every wash, making it a reliable favorite for casual Sunday wear or family events.",
    longDescription_am: "የዕለት ተዕለት ባህላዊ ማዕከላዊ ምርት። ቀላል ለማጠብ የሚያስችል ሁለት-ክፍል ስብስብ መደበኛ ጥልፍ ይዟል። ጨርቁ በእያንዳንዱ ማጠቢያ ይበልጥ ለስላሳ ሆኖ ለዕሁድ ወይም ቤተሰብ ዝግጅቶች ተወዳጅ ምርጫ ነው።",
    specifications: { Category: "Men Kids Fashion", Brand: "Addis Kids", Material: "Durable Cotton Blend", Fit: "Relaxed Fit", Care: "Machine Wash Tumble Dry", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የወንዶች ልጆች ፋሽን", ብራንድ: "Addis Kids", ጨርቅ: "ጠንካራ ጥጥ ድብልቅ", ቅርጽ: "ልቅ ቅርጽ", እንክብካቤ: "ማሽን ያጥቡ ታምብ ድረቅ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },

  // =========================
  // WOMEN KIDS FASHION
  // =========================
  {
    id: 19,
    category: "Women Kids Fashion",
    title: "Little Ethiopian Princess Dress",
    title_am: "ትንሽ ኢትዮጵያዊ ልዕልት ቀሚስ",
    brand: "Ethiopian Heritage Kids",
    rating: 5,
    reviewsCount: "2.0k",
    price: "$82.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7alwfexphh9xqqgpKALYAT4hoPNp_PRfgDlyCAM70gkYm6UrO1qOQG_x&s=10",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The ultimate showpiece for her wardrobe. This dress features a tiered design, ruffled sleeves, and heavy ornate embroidery that mimics the royal attire of Ethiopian history. Guaranteed to make her feel like a true princess.",
    longDescription_am: "የልብስ ቁምጣ ፍጹም ዋጋ ያለው ምርት። ይህ ቀሚስ ደረጃ ደረጃ ዲዛይን፣ ቅጥ ያለው ሸሚዝ እና ከኢትዮጵያ ታሪካዊ ንጉሣዊ ልብስ ጋር የሚመሳሰል ጥቅጥቅ ጥልፍ ይዟል። ልዕልት ሆና እንዲሰማት ዋስትና ይሰጣል።",
    specifications: { Category: "Women Kids Fashion", Brand: "Ethiopian Heritage Kids", Material: "Premium Cotton & Silk", Fit: "Ballgown Style", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ልጆች ፋሽን", ብራንድ: "Ethiopian Heritage Kids", ጨርቅ: "ምርጥ ጥጥ እና ሐር", ቅርጽ: "ቦልጎን ዘይቤ", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 20,
    category: "Women Kids Fashion",
    title: "Girls Tibeb Dress",
    title_am: "የሴት ልጅ ጥልፍ ቀሚስ",
    brand: "Tibeb Kids",
    rating: 5,
    reviewsCount: "1.8k",
    price: "$62.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcWKNjyea5A3VpLsMHFiT3FbgkyJyJBmxultwJki2jgCH_MRk3oiI_ede&s=10",
    images: [
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "This enchanting dress showcases dense, colorful Tibeb threading wrapping around the hem and bodice. The slightly modern cut makes it easy for young girls to walk and play, bridging the gap between historical fashion and childhood practicality.",
    longDescription_am: "ይህ አስማታዊ ቀሚስ ጫፍ እና ሰውነቱ ዙሪያ ጥቅጥቅ ቀለሞት ያሸበረቀ ጥልፍ ያሳያል። ትንሽ ዘመናዊ ቅርጸ-ቀሚሱ ወጣቶቹ ልጃገረዶች ለማ歩መት እና ለመጫወት ቀላል ያደርጋል።",
    specifications: { Category: "Women Kids Fashion", Brand: "Tibeb Kids", Material: "Handwoven Cotton Blend", Fit: "True to Size", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ልጆች ፋሽን", ብራንድ: "Tibeb Kids", ጨርቅ: "የእጅ ሸማ ጥጥ ድብልቅ", ቅርጽ: "እውነተኛ ልኬት", እንክብካቤ: "በቀዝቃዛ ውሃ እጅ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 21,
    category: "Women Kids Fashion",
    title: "Mini Habesha Wedding Dress",
    title_am: "ትንሽ ሃበሻ ሰርግ ቀሚስ",
    brand: "Sheger Kids",
    rating: 5,
    reviewsCount: "1.6k",
    price: "$78.00",
    stockStatus: "Almost Sold Out",
    stockStatus_am: "እያለቀ ነው",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7HmnEPIdggL-IsvdEwoZ90r5n0B_NOPinM_9fXCHLZDEJmVl_Si2OIA&s=10",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The perfect dress for a flower girl at a traditional Ethiopian wedding. Layers of fine cotton are decorated with gleaming gold and silver embroidery. Comes complete with a miniature matching Netela to complete the angelic look.",
    longDescription_am: "ለባህላዊ ኢትዮጵያዊ ሰርግ ለአበባ ልጃገረድ ፍጹም ቀሚስ። ስስ ጥጥ ሽፋኖች በሚያበሩ ወርቅ እና ብር ጥልፍ ያጌጡ ናቸው። መላዕክታዊ ፊት ለማጠናቀቅ ተጣጣሚ ትንሽ ንጥላ ጨምሮ ይቀርባል።",
    specifications: { Category: "Women Kids Fashion", Brand: "Sheger Kids", Material: "Premium Cotton Shemma", Fit: "Maxi Length", Care: "Dry Clean Only", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ልጆች ፋሽን", ብራንድ: "Sheger Kids", ጨርቅ: "ምርጥ ሸማ ጥጥ", ቅርጽ: "ማክሲ ርዝማኔ", እንክብካቤ: "ደረቅ ብቻ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 22,
    category: "Women Kids Fashion",
    title: "Girls Traditional Netela Set",
    title_am: "የሴት ልጅ ባህላዊ ንጥላ ስብስብ",
    brand: "Addis Kids",
    rating: 4,
    reviewsCount: "1.1k",
    price: "$45.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://ethiopianculturalshop.com/wp-content/uploads/2023/08/photo_2023-06-15_11-27-54.jpg",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A simpler, elegant set featuring a lightweight base dress and a gorgeously patterned traditional scarf (Netela). Perfect for Sunday school, family photos, or casual weekend wear. Extremely easy to clean and maintain.",
    longDescription_am: "ቀሊልና ቆንጆ ሁለት-ክፍል ስብስብ ቀሊል ቀሚስ እና ቆንጆ ንድፍ ያለው ባህላዊ ሻርፕ (ንጥላ) ይዟል። የእሁድ ት/ቤት፣ ቤተሰብ ፎቶ ወይም ዕለታዊ ማጥፊያ ጊዜ ለብሰ ለማሳለፍ ፍጹም ነው። ለማጠብ እና ለመንከባከብ ቀላል ነው።",
    specifications: { Category: "Women Kids Fashion", Brand: "Addis Kids", Material: "Lightweight Cotton", Fit: "Relaxed", Care: "Machine Wash", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ልጆች ፋሽን", ብራንድ: "Addis Kids", ጨርቅ: "ቀሊል ጥጥ", ቅርጽ: "ልቅ", እንክብካቤ: "ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 23,
    category: "Women Kids Fashion",
    title: "Embroidered Girls Kemis",
    title_am: "ጥልፍ ያለበት የሴት ልጅ ቀሚስ",
    brand: "Queen Sheba Kids",
    rating: 5,
    reviewsCount: "1.4k",
    price: "$70.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://i.etsystatic.com/60243263/r/il/b801dd/7528175752/il_570xN.7528175752_l392.jpg",
    images: [
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Exquisite hand-stitched detailing defines this premium girls Kemis. The fabric is slightly thicker for structure, creating a beautiful bell shape when worn. Features traditional cross motifs woven into the hem.",
    longDescription_am: "ዋጋ ያለው ጥሩ የእጅ ስፌት ዝርዝሮች ይህን ምርጥ ሴት ልጅ ቀሚስ ይለያሉ። ጨርቁ ቅርጽ ለመስጠት ትንሽ ወፍራም ሲሆን ሲለበስ ቆንጆ ደወል ቅርጽ ይፈጥራል። ጫፍ ላይ ባህላዊ መስቀል ንድፍ ሸምቆ ተቀርጿል።",
    specifications: { Category: "Women Kids Fashion", Brand: "Queen Sheba Kids", Material: "Heavy Handspun Cotton", Fit: "Structured A-Line", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ልጆች ፋሽን", ብራንድ: "Queen Sheba Kids", ጨርቅ: "ከባድ የእጅ ሸማ ጥጥ", ቅርጽ: "ቅርጻዊ A-ሊን", እንክብካቤ: "በቀዝቃዛ ውሃ እጅ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 24,
    category: "Women Kids Fashion",
    title: "Little Habesha Kemis",
    title_am: "ትንሽ ሃበሻ ቀሚስ",
    brand: "Little Habesha",
    rating: 5,
    reviewsCount: "2.2k",
    price: "$55.00",
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7mh1KBzUcfRgE6BWpHKzCSMaEFUM-YyZcv_Sl1MXQxqPNWACOewRZD0&s=10",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A beautiful, twirl-worthy Habesha dress scaled down for little girls. Featuring bright, playful embroidery colors and soft elastic gatherings. It's incredibly light and features a non-scratchy neckline so she can stay comfortable all day.",
    longDescription_am: "ለትንሽ ልጃገረዶች የሚሆን ቆንጆ የሃበሻ ቀሚስ። ብሩህ ቀለም ያለው ጥልፍ እና ለስላሳ ኤላስቲክ ሽፋን ይዟል። ለቀሉ ሲሆን ቀኑን ሙሉ ምቹ ሆና ለመቆየት ያስቻላት ያለ ቁጥር አንገትጌ ይዟል።",
    specifications: { Category: "Women Kids Fashion", Brand: "Little Habesha", Material: "100% Soft Cotton", Fit: "A-Line Flared", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "የሴቶች ልጆች ፋሽን", ብራንድ: "Little Habesha", ጨርቅ: "100% ለስላሳ ጥጥ", ቅርጽ: "A-ሊን ሰፊ", እንክብካቤ: "በቀዝቃዛ ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },

  // =========================
  // DISCOUNT DEALS
  // =========================
  {
    id: 25,
    category: "Discount Deals",
    title: "Classic Habesha Kemis",
    title_am: "ክላሲካዊ ሃበሻ ቀሚስ",
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "5.1k",
    price: "$89.00",
    stockStatus: "Limited Time Offer",
    stockStatus_am: "ውስን ጊዜ ቅናሽ",
    image: "https://ethiopian.store/cdn/shop/files/photo_2026-05-29_14-05-58.jpg?v=1780053166",
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Grab this amazing deal on our best-selling Classic Habesha Kemis. Features the traditional white Shemma cotton base with standard colorful borders. An absolute staple piece for any Ethiopian wardrobe at an unbeatable price point.",
    longDescription_am: "በጣም ተወዳጅ ክላሲካዊ ሃበሻ ቀሚስ ላይ ይህን አስደናቂ ቅናሽ ይውሰዱ። ባህላዊ ነጭ ሸማ ጥጥ ቤዝ ከመደበኛ ቀለማት ጫፍ ጋር ይዟል። ለማንኛውም ኢትዮጵያዊ ቁምጣ ፍጹም ማዕከላዊ ምርት ነው።",
    specifications: { Category: "Discount Deals", Brand: "Tibeb Habesha", Material: "100% Cotton", Fit: "Regular", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ቅናሽ ውድ", ብራንድ: "Tibeb Habesha", ጨርቅ: "100% ጥጥ", ቅርጽ: "መደበኛ", እንክብካቤ: "በቀዝቃዛ ውሃ እጅ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 26,
    category: "Discount Deals",
    title: "Men's Habesha Shirt",
    title_am: "የወንዶች ሃበሻ ሸሚዝ",
    brand: "Habesha Men",
    rating: 5,
    reviewsCount: "3.7k",
    price: "$59.00",
    stockStatus: "Limited Time Offer",
    stockStatus_am: "ውስን ጊዜ ቅናሽ",
    image: "https://ethiopianclothing.net/cdn/shop/files/Fikadu_Habesha_Men_s_Clothes_2000x.jpg?v=1747502174",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Our classic men's cultural shirt, now on sale! Features a comfortable fit, durable stitching, and a subtle traditional trim. Perfect for casual wear, Fridays at the office, or cultural meetups. Stock up while supplies last.",
    longDescription_am: "ክላሲካዊ የወንዶች ባህላዊ ሸሚዝ፣ አሁን ቅናሽ ላይ! ምቹ ቅርጽ፣ ጠንካራ ስፌት እና ቀስ ባለ ባህላዊ ዳርቻ ይዟል። ለዕለታዊ ልብስ፣ ሥራ ቀናት ወይም ባህላዊ ስብሰባዎች ፍጹም ነው። ክምችቱ ሳይጠናቀቅ ይቀዱ።",
    specifications: { Category: "Discount Deals", Brand: "Habesha Men", Material: "Cotton Blend", Fit: "Comfort Fit", Care: "Machine Wash Tumble Dry", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ቅናሽ ውድ", ብራንድ: "Habesha Men", ጨርቅ: "ጥጥ ድብልቅ", ቅርጽ: "ምቹ ቅርጽ", እንክብካቤ: "ማሽን ያጥቡ ታምብ ድረቅ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 27,
    category: "Discount Deals",
    title: "Habesha Couple Outfit",
    title_am: "ሃበሻ ጥንዶች ልብስ",
    brand: "Ethiopian Heritage",
    rating: 5,
    reviewsCount: "4.5k",
    price: "$180.00",
    stockStatus: "Limited Time Offer",
    stockStatus_am: "ውስን ጊዜ ቅናሽ",
    image: "https://ethiopian.store/cdn/shop/files/IMG_20240415_094624_383-01-286741.jpg?v=1749303786&width=1445",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Coordinate flawlessly with your partner! This bundled deal includes a beautifully tailored women's Kemis and a matching men's tunic set. The embroidery patterns and colors are identical, making for perfect engagement or holiday photos.",
    longDescription_am: "ከጥምዶ ጋር ቀለም ያሳምሩ! ይህ ስብስብ ቅናሽ ቆንጆ ስፌት ያለው የሴቶች ቀሚስ እና ተጣጣሚ የወንዶች ሰቅ ስብስብ ያካትታል። ጥልፍ ንድፎቹ እና ቀለሞቹ ተዛማጅ ስለሆኑ ለቃልኪዳን ወይም ለበዓላት ፎቶ ፍጹም ናቸው።",
    specifications: { Category: "Discount Deals", Brand: "Ethiopian Heritage", Material: "Premium Cotton", Fit: "Matched Set", Care: "Dry Clean Recommended", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ቅናሽ ውድ", ብራንድ: "Ethiopian Heritage", ጨርቅ: "ምርጥ ጥጥ", ቅርጽ: "ተዛማጅ ስብስብ", እንክብካቤ: "ደረቅ ማጽዳት ይመከራል", አመጣጥ: "ኢትዮጵያ" },
  },
  {
    id: 28,
    category: "Discount Deals",
    title: "Kids Habesha Celebration Set",
    title_am: "ለልጆች ሃበሻ በዓል ስብስብ",
    brand: "Little Habesha",
    rating: 5,
    reviewsCount: "2.8k",
    price: "$49.00",
    stockStatus: "Limited Time Offer",
    stockStatus_am: "ውስን ጊዜ ቅናሽ",
    image: "https://i.etsystatic.com/60243263/r/il/80e24f/7018014537/il_1080xN.7018014537_po5r.jpg",
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A fantastic value pack for children's holiday wear. Choose from either a boy's or girl's complete outfit featuring bright, joyous colors. Made with active kids in mind, prioritizing soft fabrics and durable seams.",
    longDescription_am: "ለልጆቹ የበዓል ልብስ ሁሉን አካታች ዋጋ ያለው ስብስብ። ለወንድ ወይም ለሴት ልጅ ሙሉ ልብስ ብሩህ ቀለሞች ይዟል። ለንቁ ልጆቹ ለስላሳ ጨርቅ እና ጠንካራ ስፌቶች ቅድሚያ ሰጥቶ ተዘጋጅቷል።",
    specifications: { Category: "Discount Deals", Brand: "Little Habesha", Material: "Soft Cotton Blend", Fit: "Relaxed", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ቅናሽ ውድ", ብራንድ: "Little Habesha", ጨርቅ: "ለስላሳ ጥጥ ድብልቅ", ቅርጽ: "ልቅ", እንክብካቤ: "በቀዝቃዛ ማሽን ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 29,
    category: "Discount Deals",
    title: "Traditional White Netela",
    title_am: "ባህላዊ ነጭ ንጥላ",
    brand: "Lalibela Collection",
    rating: 5,
    reviewsCount: "3.3k",
    price: "$35.00",
    stockStatus: "Limited Time Offer",
    stockStatus_am: "ውስን ጊዜ ቅናሽ",
    image: "https://helloomarket.com/image/cache/catalog/0957-10006---814x1000.jpg",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Every Ethiopian needs a classic white Netela. This lightweight, beautifully woven scarf can be styled in dozens of ways and serves as the finishing touch to any cultural outfit, or as an elegant wrap for evening events.",
    longDescription_am: "ማንኛውም ኢትዮጵያዊ ክላሲካዊ ነጭ ንጥላ ያስፈልገዋል። ይህ ቀሊልና ቆንጆ ሸማ ሻርፕ በደርዘን ዘዴዎች ሊለበስ ይችላል እናም ለማንኛውም ባህላዊ ልብስ ማጠናቀቂያ ወይም ለምሽት ዝግጅቶች ቆንጆ ሽፋን ሆኖ ያገለግላል።",
    specifications: { Category: "Discount Deals", Brand: "Lalibela Collection", Material: "100% Shemma Cotton", Fit: "One Size", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ቅናሽ ውድ", ብራንድ: "Lalibela Collection", ጨርቅ: "100% ሸማ ጥጥ", ቅርጽ: "አንድ ልኬት", እንክብካቤ: "በቀዝቃዛ ውሃ እጅ ታጠብ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 30,
    category: "Discount Deals",
    title: "Family Habesha Collection",
    title_am: "ቤተሰብ ሃበሻ ስብስብ",
    brand: "Sheger Collection",
    rating: 5,
    reviewsCount: "4.9k",
    price: "$250.00",
    stockStatus: "Limited Time Offer",
    stockStatus_am: "ውስን ጊዜ ቅናሽ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQMRYhByx7cVzMX9zgjByWhqF4Q2JyGfylvtZhCazyjG_l1NYcCZP9RsG&s=10",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The ultimate package deal! Outfit the entire family with matching traditional clothing. Includes one Men's outfit, one Women's dress, and two children's outfits (customizable genders). A beautiful way to celebrate heritage together.",
    longDescription_am: "ፍጹም ስብስብ ቅናሽ! ሙሉ ቤተሰቡን ተጣጣሚ ባህላዊ ልብስ ያልብሱ። አንድ የወንዶች ልብስ፣ አንድ የሴቶች ቀሚስ እና ሁለት ለልጆቹ ልብሶች (ጾታ ይምረጡ) ያካትታል። ቅርስን በጋራ ለማክበር ቆንጆ መንገድ ነው።",
    specifications: { Category: "Discount Deals", Brand: "Sheger Collection", Material: "Mixed Premium Cottons", Fit: "Family Bundle Options", Care: "Varies by garment", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ቅናሽ ውድ", ብራንድ: "Sheger Collection", ጨርቅ: "ድብልቅ ምርጥ ጥጥዎች", ቅርጽ: "ቤተሰብ ስብስብ አማራጮች", እንክብካቤ: "በልብሱ ዓይነት ይወሰናል", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
];


// --- CAROUSEL DEALS ---
// Typically used just for banners, but updated for consistency
export const carouselDeals = [
  {
    id: 1, tag: '01 — Spring Sale', discount: '30% OFF', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80', alt: 'Spring floral collection'
  },
  {
    id: 2, tag: '02 — Summer Special', discount: '25% OFF', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80', alt: 'Summer streetwear'
  },
  {
    id: 3, tag: '03 — Autumn Vibe', discount: '40% OFF', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', alt: 'Autumn aesthetic'
  },
  {
    id: 4, tag: '04 — Winter Deal', discount: '20% OFF', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80', alt: 'Winter outerwear'
  }
];

// --- FLASH PRODUCTS ---
export const flashProducts = [
  {
    id: 101,
    category: "Flash Products",
    title: "Habesha Kemis Traditional Dress",
    title_am: "ሃበሻ ቀሚስ ባህላዊ ልብስ",
    brand: "Ethiopian Craft",
    rating: 5,
    reviewsCount: "(42)",
    price: "$120.00",
    origPrice: "$180.00",
    discount: 33,
    stockStatus: "Almost Sold Out",
    stockStatus_am: "እያለቀ ነው",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63L1GfWp0Jfx5JsKlXR0hj7SJlL4eK93vlEjs2NbNoB7Zf5sWei-YGXgD&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63L1GfWp0Jfx5JsKlXR0hj7SJlL4eK93vlEjs2NbNoB7Zf5sWei-YGXgD&s=10",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#FFFFFF', '#C0C0C0', '#D4AF37'],
    longDescription: "Hand-loomed to absolute perfection. This Flash Deal offers our top-tier traditional Kemis at an unprecedented price. Features beautiful threading work with durable, authentic fibers.",
    longDescription_am: "ፍጹም የእጅ ሸማ ስፌት። ይህ ፍላሽ ቅናሽ ምርጥ ባህላዊ ቀሚሳችንን ወደ ማይታመን ዋጋ ያቀርባል። ጠንካራ እና ትክክለኛ ክሮዎች ያለው ቆንጆ ሸማ ሥራ ይዟል።",
    specifications: { Category: "Flash Products", Brand: "Ethiopian Craft", Material: "Shemma Cotton", Fit: "Standard", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ፍላሽ ምርቶች", ብራንድ: "Ethiopian Craft", ጨርቅ: "ሸማ ጥጥ", ቅርጽ: "መደበኛ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 102,
    category: "Flash Products",
    title: "Modern Handwoven Cotton Scarf",
    title_am: "ዘመናዊ የእጅ ሸማ ሻርፕ",
    brand: "Addis Weave",
    rating: 4,
    reviewsCount: "(18)",
    price: "$35.00",
    origPrice: "$50.00",
    discount: 30,
    stockStatus: "Limited Time Offer",
    stockStatus_am: "ውስን ጊዜ ቅናሽ",
    image: "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/s/m/smr15scarf2.jpg",
    images: [
      "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/s/m/smr15scarf2.jpg",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#AA061B', '#000000', '#22C55E'],
    longDescription: "A fusion accessory that brings Habesha weaving techniques to modern winter and autumn wear. Incredibly warm, luxuriously soft, and ethically produced by local artisans.",
    longDescription_am: "የሃበሻ ሸማ ቴክኒኮችን ለዘመናዊ ክረምት እና ጸደይ ልብስ የሚያቀርብ ዲዛይን። አስደናቂ ሞቃት፣ ቅምጥ ለስላሳ እና በሀገር ውስጥ አርቲሳኖች ሠርቶ ይቀርባል።",
    specifications: { Category: "Flash Products", Brand: "Addis Weave", Material: "Cotton Blend", Fit: "One Size", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ፍላሽ ምርቶች", ብራንድ: "Addis Weave", ጨርቅ: "ጥጥ ድብልቅ", ቅርጽ: "አንድ ልኬት", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 103,
    category: "Flash Products",
    title: "Casual Linen Summer Shirt",
    title_am: "ዘና ያለ ሊነን የበጋ ሸሚዝ",
    brand: "Sync Style",
    rating: 5,
    reviewsCount: "(89)",
    price: "$45.00",
    origPrice: "$65.00",
    discount: 30,
    stockStatus: "In Stock",
    stockStatus_am: "ይገኛል",
    image: "https://www.dagmawit.store/cdn/shop/files/photo_2026-07-29_09.33.00.jpg?v=1785307808&width=533",
    images: [
      "https://www.dagmawit.store/cdn/shop/files/photo_2026-07-29_09.33.00.jpg?v=1785307808&width=533",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#3B82F6', '#FFFFFF', '#6B7280'],
    longDescription: "Beat the heat in this ultra-breathable linen summer shirt. Designed with a relaxed fit and subtle Ethiopian-inspired trim inside the collar and cuffs for a unique touch.",
    longDescription_am: "ይህ አይር አስተላላፊ ሊነን ሸሚዝ ሙቀቱን ያሸንፋል። ዘና ያለ ቅርጽ እና አንገትጌ እና ዕጅ ዙሪያ ውስጥ ቀስ ያለ ኢትዮጵያ-ቅርስ ጥቅስ ይዟል።",
    specifications: { Category: "Flash Products", Brand: "Sync Style", Material: "100% Linen", Fit: "Relaxed Summer Fit", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ፍላሽ ምርቶች", ብራንድ: "Sync Style", ጨርቅ: "100% ሊነን", ቅርጽ: "ዘና ያለ የበጋ ቅርጽ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 104,
    category: "Flash Products",
    title: "Handmade Leather Tote Bag",
    title_am: "የእጅ ሥራ ቆዳ ቦርሳ",
    brand: "Ethio Leather",
    rating: 5,
    reviewsCount: "(112)",
    price: "$89.00",
    origPrice: "$140.00",
    discount: 36,
    stockStatus: "Almost Sold Out",
    stockStatus_am: "እያለቀ ነው",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591475155-42e471926610?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#78350F', '#000000'],
    longDescription: "Crafted from world-renowned genuine Ethiopian leather. This everyday tote bag is spacious, highly durable, and ages beautifully over time, developing a rich patina.",
    longDescription_am: "ዓለም ዙሪያ ታዋቂ ከሆነ ትክክለኛ ኢትዮጵያዊ ቆዳ ተሰርቷል። ይህ ዕለታዊ ቦርሳ ሰፊ፣ እጅግ ጠንካራ እና ጊዜ ሲሄድ ቀስ ብሎ ቆንጆ ቀለም ያወጣል።",
    specifications: { Category: "Flash Products", Brand: "Ethio Leather", Material: "100% Genuine Leather", Size: "Large Tote", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ፍላሽ ምርቶች", ብራንድ: "Ethio Leather", ጨርቅ: "100% ትክክለኛ ቆዳ", መጠን: "ትልቅ ቦርሳ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  }
];

// --- BUNDLE DEALS ---
export const bundleDeals = [
  {
    id: 201,
    category: "Bundle Deals",
    title: "Complete Summer Outfit Bundle",
    title_am: "ሙሉ የበጋ ልብስ ስብስብ",
    brand: "Sheger Bundle",
    rating: 5,
    reviewsCount: "(245)",
    price: "$199.00",
    origPrice: "$310.00",
    savings: "Save $111",
    stockStatus: "Bundle Savings",
    stockStatus_am: "የስብስብ ቅናሽ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2L55mWt5molq78dQsFw6ms4M-JMCrTZDIzF9pv59E187ysC3DnX__pQ&s=10",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "An all-in-one curated package. Includes our signature lightweight dress, a premium leather tote, and a versatile scarf. Expertly matched by our stylists.",
    longDescription_am: "ሁሉን አካታች የተዘጋጀ ስብስብ። የምልክት ቀሊል ቀሚሳችን፣ ምርጥ ቆዳ ቦርሳ እና ብዙ ዘዴ ሊለበስ የሚችል ሻርፕ ያካትታል። በስታይሊስቶቻችን ተጣጥሞ ቀርቧል።",
    description: "Complete summer bundle with dress, leather tote, and scarf.",
    description_am: "ቀሚስ፣ ቆዳ ቦርሳ እና ሻርፕ ያካተተ ሙሉ የበጋ ስብስብ።",
    specifications: { Category: "Bundle Deals", Brand: "Sheger Bundle", Material: "Mixed Premium Cottons", Items: "3 Pieces", Fit: "Varies", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ስብስብ ቅናሾች", ብራንድ: "Sheger Bundle", ጨርቅ: "ድብልቅ ምርጥ ጥጥዎች", ዕቃዎች: "3 ክፍሎች", ቅርጽ: "ይለያያል", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 202,
    category: "Bundle Deals",
    title: "His & Hers Traditional Set",
    title_am: "የጥምዶች ባህላዊ ስብስብ",
    brand: "Ethiopian Heritage",
    rating: 5,
    reviewsCount: "(189)",
    price: "$249.00",
    origPrice: "$380.00",
    savings: "Save $131",
    stockStatus: "Bundle Savings",
    stockStatus_am: "የስብስብ ቅናሽ",
    image: "https://i.etsystatic.com/62235377/r/il/b797e1/7369239609/il_570xN.7369239609_mik7.jpg",
    images: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Celebrate together with beautifully matched formal wear. Crafted with identical high-quality embroidery patterns on both the men's and women's outfits.",
    longDescription_am: "ተዛማጅ ፎርማል ልብሶች ለብሰው ጋር ያክብሩ። ሁለቱም የወንዶቹ እና የሴቶቹ ልብሶች ላይ ተመሳሳይ ምርጥ ጥልፍ ንድፍ ተሰርቷል።",
    description: "His and hers matching traditional Ethiopian outfits.",
    description_am: "ለወንድ እና ሴት ተጣጣሚ ባህላዊ ኢትዮጵያዊ ልብሶች።",
    specifications: { Category: "Bundle Deals", Brand: "Ethiopian Heritage", Material: "Cotton & Shemma", Items: "Men's Set + Women's Set", Fit: "Standard Matching", Origin: "Ethiopia" },
    specifications_am: { ምድብ: "ስብስብ ቅናሾች", ብራንድ: "Ethiopian Heritage", ጨርቅ: "ጥጥ እና ሸማ", ዕቃዎች: "የወንዶቹ + የሴቶቹ ስብስብ", ቅርጽ: "መደበኛ ተዛማጅ", አመጣጥ: "ኢትዮጵያ" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  }
];

// Re-exporting under alias if your components expect 'newArrivalsData'
export const newArrivalsData = products;

// Useful helper functions
export const getProductById = (id) => {
  const allProducts = [...products, ...flashProducts, ...bundleDeals];
  return allProducts.find((p) => p.id === Number(id));
};
export const getProductsByCategory = (cat) => products.filter((p) => p.category === cat);

// ─── Price normaliser ────────────────────────────────────────────────────────
// All price fields are stored as "$120.00" strings.
// This helper strips the symbol and returns a plain float so that the
// currency formatter (formatPrice) receives a proper USD number every time.
export const parseProductPrice = (val) => {
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    const n = parseFloat(val.replace(/[^0-9.]/g, ''));
    return isNaN(n) ? 0 : n;
  }
  return 0;
};

// Normalise every product in all three arrays once at module load time.
// Components can now use product.price as a number directly.
const normalisePrice = (p) => ({
  ...p,
  price:     parseProductPrice(p.price),
  origPrice: p.origPrice ? parseProductPrice(p.origPrice) : undefined,
});

products.forEach((p, i)      => { products[i]      = normalisePrice(p); });
flashProducts.forEach((p, i)  => { flashProducts[i]  = normalisePrice(p); });
bundleDeals.forEach((p, i)    => { bundleDeals[i]    = normalisePrice(p); });