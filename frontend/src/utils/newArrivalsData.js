// --- CATEGORIES LIST ---
export const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Men Kids Fashion",
  "Women Kids Fashion",
  "Discount Deals",
];

// --- REUSABLE REVIEWS DATA ---
// Defined once to keep your file clean, then spread into every product.
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
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "4.8k",
    price: "$120.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXYHUfc08wwRY-snFoKVcnt_5IyLEjUvW2HlPkt7J4gQMcDMuDJONW6s&s=10",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://ethiopianclothing.net/cdn/shop/products/keficho-traditional-habesha-dress-eritrean-dresses-ethiopian-clothing-kemis_554_600x.jpg?v=1621067979",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A stunning Traditional Habesha Kemis crafted from authentic handwoven Shemma cotton. Featuring intricate Tibeb embroidery along the neckline, cuffs, and hem, this dress is the perfect embodiment of Ethiopian heritage. Ideal for weddings, holidays, and special cultural celebrations.",
    specifications: { Category: "Women's Fashion", Brand: "Tibeb Habesha", Material: "100% Handspun Cotton", Fit: "Tailored Regular", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 2,
    category: "Women's Fashion",
    title: "White Habesha Dress",
    brand: "Sheger Collection",
    rating: 5,
    reviewsCount: "3.9k",
    price: "$145.00",
    stockStatus: "Almost Sold Out",
    image: "https://ethiopianclothing.net/cdn/shop/files/photo_2024-05-09_18-16-57_2000x.jpg?v=1715269118",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506629905607-d9c36d8c4f7c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Elegance meets tradition in this pristine White Habesha Dress. The minimalist design is highlighted by a delicate, brightly colored traditional border. Designed to offer a lightweight and breathable feel while maintaining a regal silhouette.",
    specifications: { Category: "Women's Fashion", Brand: "Sheger Collection", Material: "Premium Shemma Cotton", Fit: "Flowy/Relaxed", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 3,
    category: "Women's Fashion",
    title: "Gold Tibeb Kemis",
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "3.5k",
    price: "$175.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJ21kEpfvzwZsI7w1UNja63GXEOB4Rco0OII4ORtm2QVG0If_Gwiq9ns&s=10",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Make a statement with this breathtaking Gold Tibeb Kemis. The metallic gold threading woven directly into the pure white cotton creates a striking contrast that catches the light beautifully. Comes with a matching Netela (scarf) for a complete ceremonial look.",
    specifications: { Category: "Women's Fashion", Brand: "Tibeb Habesha", Material: "Cotton with Metallic Thread", Fit: "Fitted Waist", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 4,
    category: "Women's Fashion",
    title: "Elegant Habesha Netela Set",
    brand: "Addis Collection",
    rating: 5,
    reviewsCount: "2.7k",
    price: "$95.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NqKXzpnGRSujaoMIar_LcWqP_q949BY_Cbz0NXAGJuuEGdSk9OCwcFss&s=10",
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A versatile and elegant two-piece set featuring a delicately woven Netela and matching base dress. Perfect for church attendances, casual cultural gatherings, or as a thoughtful gift. The fabric is exceptionally soft and drapes perfectly over the shoulders.",
    specifications: { Category: "Women's Fashion", Brand: "Addis Collection", Material: "Lightweight Cotton Blend", Fit: "One Size Fits Most (Netela)", Care: "Machine Wash Delicate", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 5,
    category: "Women's Fashion",
    title: "Modern Habesha Kemis",
    brand: "Lalibela Fashion",
    rating: 4,
    reviewsCount: "2.1k",
    price: "$135.00",
    stockStatus: "In Stock",
    image: "https://habeshaoutlets.com/cdn/shop/files/Screenshot_20250707_220303_Instagram.jpg?v=1752245284",
    images: [
      "https://images.unsplash.com/photo-1506629905607-d9c36d8c4f7c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Blending contemporary fashion silhouettes with traditional Ethiopian weaving, this Modern Habesha Kemis features a sleek, updated neckline and shorter hem. It's the perfect fusion of current trends and timeless cultural identity.",
    specifications: { Category: "Women's Fashion", Brand: "Lalibela Fashion", Material: "Cotton Spandex Blend", Fit: "Slim Fit", Care: "Dry Clean Recommended", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 6,
    category: "Women's Fashion",
    title: "Embroidered Habesha Dress",
    brand: "Queen Sheba",
    rating: 5,
    reviewsCount: "4.2k",
    price: "$190.00",
    stockStatus: "Almost Sold Out",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8BHJ9k-YmCMSPVz8YAZqzjxGRQ01Q2HxhsDEjJd4ibNWCvW79sIXM6A&s=10",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Our most premium offering. This heavily embroidered Habesha Dress features weeks of hand-stitching work from master artisans. The intricate, multi-colored patterns cascade down the center and hem, making it an absolute showstopper for major events.",
    specifications: { Category: "Women's Fashion", Brand: "Queen Sheba", Material: "Heavy Handspun Cotton", Fit: "Custom Tailored feel", Care: "Dry Clean Only", Origin: "Ethiopia" },
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
    brand: "Habesha Men",
    rating: 5,
    reviewsCount: "3.8k",
    price: "$85.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OINUJR7kj2c8Y_a8LKEYmxxOVyx6_shcMdfQPhXzbVpwIpXRTnORGME&s=10",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A classic men's Habesha shirt featuring a mandarin collar and traditional subtle embroidery down the button placket. Tailored for comfort without sacrificing style, this shirt is perfect for groomsmen, church, or cultural holidays.",
    specifications: { Category: "Men's Fashion", Brand: "Habesha Men", Material: "100% Cotton", Fit: "Regular Fit", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 8,
    category: "Men's Fashion",
    title: "White Habesha Jano",
    brand: "Sheger Collection",
    rating: 5,
    reviewsCount: "3.2k",
    price: "$110.00",
    stockStatus: "In Stock",
    image: "https://ethiopianclothing.net/cdn/shop/files/Ashenafi_Habesha_Men_s_Clothes_2048x.jpg?v=1750783471",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Step into tradition with this striking White Habesha Jano. The iconic wide red stripe (Jano) woven into the hem symbolizes strength and heritage. Comes as a full set including the tunic and trousers.",
    specifications: { Category: "Men's Fashion", Brand: "Sheger Collection", Material: "Heavy Shemma Cotton", Fit: "Relaxed Traditional", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 9,
    category: "Men's Fashion",
    title: "Embroidered Habesha Suit",
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "2.9k",
    price: "$150.00",
    stockStatus: "Almost Sold Out",
    image: "https://habeshaoutlets.com/cdn/shop/files/459a40e4d9fb54410c6451c70c14df6e_1.jpg?v=1756218953",
    images: [
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A modern take on Ethiopian men's formal wear. This two-piece suit combines Western tailoring with striking Ethiopian embroidery on the lapels and cuffs. Built for the modern man who wants to represent his roots in professional and formal settings.",
    specifications: { Category: "Men's Fashion", Brand: "Tibeb Habesha", Material: "Cotton-Wool Blend", Fit: "Slim Fit", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 10,
    category: "Men's Fashion",
    title: "Traditional Ethiopian Shawl",
    brand: "Lalibela Collection",
    rating: 4,
    reviewsCount: "1.9k",
    price: "$70.00",
    stockStatus: "In Stock",
    image: "https://i.etsystatic.com/52898921/r/il/59fbb7/6564827810/il_340x270.6564827810_e9we.jpg",
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The essential Kuta (shawl) for men. Handwoven for incredible softness and warmth, this oversized shawl is designed to be draped over the shoulders during religious ceremonies, cool evenings, and cultural events.",
    specifications: { Category: "Men's Fashion", Brand: "Lalibela Collection", Material: "100% Handwoven Cotton", Fit: "One Size", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 11,
    category: "Men's Fashion",
    title: "Habesha Wedding Outfit",
    brand: "Ethiopian Heritage",
    rating: 5,
    reviewsCount: "4.1k",
    price: "$220.00",
    stockStatus: "In Stock",
    image: "https://ethiopian.store/cdn/shop/files/il_fullxfull.5099412667_tk6x-139642.jpg?v=1749304192&width=1445",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The ultimate groom's attire. This luxurious three-piece set includes the tunic, trousers, and a heavily embroidered matching Kuta (cape). Crafted with premium materials and dense golden thread embroidery to ensure you stand out on your big day.",
    specifications: { Category: "Men's Fashion", Brand: "Ethiopian Heritage", Material: "Premium Cotton & Silk Threads", Fit: "Tailored Fit", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 12,
    category: "Men's Fashion",
    title: "Modern Ethiopian Kuta",
    brand: "Addis Style",
    rating: 5,
    reviewsCount: "2.6k",
    price: "$125.00",
    stockStatus: "In Stock",
    image: "https://ethiopianclothing.net/cdn/shop/files/Chane_Ethiopian_Men_s_Clothe2_1600x.jpg?v=1751993724",
    images: [
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A stylish, everyday version of the traditional Kuta. Designed with a tighter weave and modern color palettes, it can be styled as a chunky scarf over a coat or draped casually. The perfect cultural accessory for urban living.",
    specifications: { Category: "Men's Fashion", Brand: "Addis Style", Material: "Cotton & Acrylic Blend", Fit: "One Size", Care: "Machine Wash Cold", Origin: "Ethiopia" },
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
    brand: "Little Habesha",
    rating: 5,
    reviewsCount: "1.9k",
    price: "$55.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtpvUcnxUamnmarxBMiRfxX_QFP3ttaSxGgSDCHMQXZwqVd27lkjlSA0&s=10",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Dress your little one in absolute cuteness and rich culture! This boy's traditional outfit features a soft cotton tunic and elastic-waist trousers. Specially designed to be gentle on sensitive skin while allowing kids to run and play freely.",
    specifications: { Category: "Men Kids Fashion", Brand: "Little Habesha", Material: "100% Soft Cotton", Fit: "Comfort Fit", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 14,
    category: "Men Kids Fashion",
    title: "Kids Traditional Kuta",
    brand: "Tibeb Kids",
    rating: 5,
    reviewsCount: "1.5k",
    price: "$48.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLG2o8e61F9a82xiSUm2Pd5mubQErDYucS9X1Vzeg0R0YGOiBUToNsFk&s=10",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A miniature version of the classic men's shawl. This child-sized Kuta is lightweight, highly durable, and features colorful edge patterns. Perfect for teaching the younger generation about their beautiful heritage.",
    specifications: { Category: "Men Kids Fashion", Brand: "Tibeb Kids", Material: "Handwoven Cotton", Fit: "One Size Fits 4-10yrs", Care: "Machine Washable", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 15,
    category: "Men Kids Fashion",
    title: "Mini Habesha Wedding Outfit",
    brand: "Little Ethiopia",
    rating: 5,
    reviewsCount: "1.2k",
    price: "$65.00",
    stockStatus: "In Stock",
    image: "https://ethiopianculturalshop.com/wp-content/uploads/2023/08/photo_2023-06-15_11-57-58-2.jpg",
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502720705749-3c6d8c3c5e2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Make him the star of the ceremony! This boy's formal outfit mimics a groom's attire with detailed embroidery and a structured collar. It includes a matching mini-cape for an incredibly photogenic traditional look.",
    specifications: { Category: "Men Kids Fashion", Brand: "Little Ethiopia", Material: "Cotton Blend", Fit: "Tailored Look, Elastic Waist", Care: "Hand Wash Recommended", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 16,
    category: "Men Kids Fashion",
    title: "Boys Embroidered Shirt",
    brand: "Sheger Kids",
    rating: 4,
    reviewsCount: "980",
    price: "$42.00",
    stockStatus: "In Stock",
    image: "https://www.fllae.com/cdn/shop/files/DSCF1757.jpg?v=1781269889",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A versatile top that pairs effortlessly with traditional trousers or everyday jeans. Features robust, child-friendly stitching and authentic Habesha patterns around the neck and cuffs. Highly breathable for active kids.",
    specifications: { Category: "Men Kids Fashion", Brand: "Sheger Kids", Material: "100% Breathable Cotton", Fit: "Regular", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 17,
    category: "Men Kids Fashion",
    title: "Young Habesha Prince Set",
    brand: "Tibeb Kids",
    rating: 5,
    reviewsCount: "1.7k",
    price: "$75.00",
    stockStatus: "Almost Sold Out",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfec5Car8ocKt77J5Giuy2LerQBzkTuB5GrQmegxIGw7nFsQJioO6jOc&s=10",
    images: [
      "https://images.unsplash.com/photo-1502720705749-3c6d8c3c5e2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A premium 3-piece collection for young boys featuring exquisite metallic gold threading. Designed to mirror adult formal wear but constructed with soft, itch-free linings for all-day comfort during long celebrations.",
    specifications: { Category: "Men Kids Fashion", Brand: "Tibeb Kids", Material: "Premium Cotton w/ Soft Lining", Fit: "True to Size", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 18,
    category: "Men Kids Fashion",
    title: "Traditional Ethiopian Boys Set",
    brand: "Addis Kids",
    rating: 5,
    reviewsCount: "1.1k",
    price: "$58.00",
    stockStatus: "In Stock",
    image: "https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/9a100286-8729-4182-8d54-f2dca68bacd7.png",
    images: [
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The everyday cultural staple. A resilient, easy-to-wash two-piece set featuring standard Tibeb embroidery. The fabric gets softer with every wash, making it a reliable favorite for casual Sunday wear or family events.",
    specifications: { Category: "Men Kids Fashion", Brand: "Addis Kids", Material: "Durable Cotton Blend", Fit: "Relaxed Fit", Care: "Machine Wash Tumble Dry", Origin: "Ethiopia" },
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
    brand: "Ethiopian Heritage Kids",
    rating: 5,
    reviewsCount: "2.0k",
    price: "$82.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7alwfexphh9xqqgpKALYAT4hoPNp_PRfgDlyCAM70gkYm6UrO1qOQG_x&s=10",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The ultimate showpiece for her wardrobe. This dress features a tiered design, ruffled sleeves, and heavy ornate embroidery that mimics the royal attire of Ethiopian history. Guaranteed to make her feel like a true princess.",
    specifications: { Category: "Women Kids Fashion", Brand: "Ethiopian Heritage Kids", Material: "Premium Cotton & Silk", Fit: "Ballgown Style", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
 
  {
    id: 20,
    category: "Women Kids Fashion",
    title: "Girls Tibeb Dress",
    brand: "Tibeb Kids",
    rating: 5,
    reviewsCount: "1.8k",
    price: "$62.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcWKNjyea5A3VpLsMHFiT3FbgkyJyJBmxultwJki2jgCH_MRk3oiI_ede&s=10",
    images: [
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "This enchanting dress showcases dense, colorful Tibeb threading wrapping around the hem and bodice. The slightly modern cut makes it easy for young girls to walk and play, bridging the gap between historical fashion and childhood practicality.",
    specifications: { Category: "Women Kids Fashion", Brand: "Tibeb Kids", Material: "Handwoven Cotton Blend", Fit: "True to Size", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 21,
    category: "Women Kids Fashion",
    title: "Mini Habesha Wedding Dress",
    brand: "Sheger Kids",
    rating: 5,
    reviewsCount: "1.6k",
    price: "$78.00",
    stockStatus: "Almost Sold Out",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7HmnEPIdggL-IsvdEwoZ90r5n0B_NOPinM_9fXCHLZDEJmVl_Si2OIA&s=10",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The perfect dress for a flower girl at a traditional Ethiopian wedding. Layers of fine cotton are decorated with gleaming gold and silver embroidery. Comes complete with a miniature matching Netela to complete the angelic look.",
    specifications: { Category: "Women Kids Fashion", Brand: "Sheger Kids", Material: "Premium Cotton Shemma", Fit: "Maxi Length", Care: "Dry Clean Only", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 22,
    category: "Women Kids Fashion",
    title: "Girls Traditional Netela Set",
    brand: "Addis Kids",
    rating: 4,
    reviewsCount: "1.1k",
    price: "$45.00",
    stockStatus: "In Stock",
    image: "https://ethiopianculturalshop.com/wp-content/uploads/2023/08/photo_2023-06-15_11-27-54.jpg",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A simpler, elegant set featuring a lightweight base dress and a gorgeously patterned traditional scarf (Netela). Perfect for Sunday school, family photos, or casual weekend wear. Extremely easy to clean and maintain.",
    specifications: { Category: "Women Kids Fashion", Brand: "Addis Kids", Material: "Lightweight Cotton", Fit: "Relaxed", Care: "Machine Wash", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 23,
    category: "Women Kids Fashion",
    title: "Embroidered Girls Kemis",
    brand: "Queen Sheba Kids",
    rating: 5,
    reviewsCount: "1.4k",
    price: "$70.00",
    stockStatus: "In Stock",
    image: "https://i.etsystatic.com/60243263/r/il/b801dd/7528175752/il_570xN.7528175752_l392.jpg",
    images: [
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Exquisite hand-stitched detailing defines this premium girls Kemis. The fabric is slightly thicker for structure, creating a beautiful bell shape when worn. Features traditional cross motifs woven into the hem.",
    specifications: { Category: "Women Kids Fashion", Brand: "Queen Sheba Kids", Material: "Heavy Handspun Cotton", Fit: "Structured A-Line", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
   {
    id: 24,
    category: "Women Kids Fashion",
    title: "Little Habesha Kemis",
    brand: "Little Habesha",
    rating: 5,
    reviewsCount: "2.2k",
    price: "$55.00",
    stockStatus: "In Stock",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7mh1KBzUcfRgE6BWpHKzCSMaEFUM-YyZcv_Sl1MXQxqPNWACOewRZD0&s=10",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A beautiful, twirl-worthy Habesha dress scaled down for little girls. Featuring bright, playful embroidery colors and soft elastic gatherings. It's incredibly light and features a non-scratchy neckline so she can stay comfortable all day.",
    specifications: { Category: "Women Kids Fashion", Brand: "Little Habesha", Material: "100% Soft Cotton", Fit: "A-Line Flared", Care: "Machine Wash Cold", Origin: "Ethiopia" },
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
    brand: "Tibeb Habesha",
    rating: 5,
    reviewsCount: "5.1k",
    price: "$89.00",
    stockStatus: "Limited Time Offer",
    image: "https://ethiopian.store/cdn/shop/files/photo_2026-05-29_14-05-58.jpg?v=1780053166",
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Grab this amazing deal on our best-selling Classic Habesha Kemis. Features the traditional white Shemma cotton base with standard colorful borders. An absolute staple piece for any Ethiopian wardrobe at an unbeatable price point.",
    specifications: { Category: "Discount Deals", Brand: "Tibeb Habesha", Material: "100% Cotton", Fit: "Regular", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 26,
    category: "Discount Deals",
    title: "Men's Habesha Shirt",
    brand: "Habesha Men",
    rating: 5,
    reviewsCount: "3.7k",
    price: "$59.00",
    stockStatus: "Limited Time Offer",
    image: "https://ethiopianclothing.net/cdn/shop/files/Fikadu_Habesha_Men_s_Clothes_2000x.jpg?v=1747502174",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Our classic men's cultural shirt, now on sale! Features a comfortable fit, durable stitching, and a subtle traditional trim. Perfect for casual wear, Fridays at the office, or cultural meetups. Stock up while supplies last.",
    specifications: { Category: "Discount Deals", Brand: "Habesha Men", Material: "Cotton Blend", Fit: "Comfort Fit", Care: "Machine Wash Tumble Dry", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 27,
    category: "Discount Deals",
    title: "Habesha Couple Outfit",
    brand: "Ethiopian Heritage",
    rating: 5,
    reviewsCount: "4.5k",
    price: "$180.00",
    stockStatus: "Limited Time Offer",
    image: "https://ethiopian.store/cdn/shop/files/IMG_20240415_094624_383-01-286741.jpg?v=1749303786&width=1445",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Coordinate flawlessly with your partner! This bundled deal includes a beautifully tailored women's Kemis and a matching men's tunic set. The embroidery patterns and colors are identical, making for perfect engagement or holiday photos.",
    specifications: { Category: "Discount Deals", Brand: "Ethiopian Heritage", Material: "Premium Cotton", Fit: "Matched Set", Care: "Dry Clean Recommended", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 28,
    category: "Discount Deals",
    title: "Kids Habesha Celebration Set",
    brand: "Little Habesha",
    rating: 5,
    reviewsCount: "2.8k",
    price: "$49.00",
    stockStatus: "Limited Time Offer",
    image: "https://i.etsystatic.com/60243263/r/il/80e24f/7018014537/il_1080xN.7018014537_po5r.jpg",
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "A fantastic value pack for children's holiday wear. Choose from either a boy's or girl's complete outfit featuring bright, joyous colors. Made with active kids in mind, prioritizing soft fabrics and durable seams.",
    specifications: { Category: "Discount Deals", Brand: "Little Habesha", Material: "Soft Cotton Blend", Fit: "Relaxed", Care: "Machine Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 29,
    category: "Discount Deals",
    title: "Traditional White Netela",
    brand: "Lalibela Collection",
    rating: 5,
    reviewsCount: "3.3k",
    price: "$35.00",
    stockStatus: "Limited Time Offer",
    image: "https://helloomarket.com/image/cache/catalog/0957-10006---814x1000.jpg",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Every Ethiopian needs a classic white Netela. This lightweight, beautifully woven scarf can be styled in dozens of ways and serves as the finishing touch to any cultural outfit, or as an elegant wrap for evening events.",
    specifications: { Category: "Discount Deals", Brand: "Lalibela Collection", Material: "100% Shemma Cotton", Fit: "One Size", Care: "Hand Wash Cold", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 30,
    category: "Discount Deals",
    title: "Family Habesha Collection",
    brand: "Sheger Collection",
    rating: 5,
    reviewsCount: "4.9k",
    price: "$250.00",
    stockStatus: "Limited Time Offer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQMRYhByx7cVzMX9zgjByWhqF4Q2JyGfylvtZhCazyjG_l1NYcCZP9RsG&s=10",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "The ultimate package deal! Outfit the entire family with matching traditional clothing. Includes one Men's outfit, one Women's dress, and two children's outfits (customizable genders). A beautiful way to celebrate heritage together.",
    specifications: { Category: "Discount Deals", Brand: "Sheger Collection", Material: "Mixed Premium Cottons", Fit: "Family Bundle Options", Care: "Varies by garment", Origin: "Ethiopia" },
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
    brand: "Ethiopian Craft",
    rating: 5,
    reviewsCount: "(42)",
    price: "$120.00",
    origPrice: "$180.00",
    discount: 33,
    stockStatus: "Almost Sold Out",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63L1GfWp0Jfx5JsKlXR0hj7SJlL4eK93vlEjs2NbNoB7Zf5sWei-YGXgD&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63L1GfWp0Jfx5JsKlXR0hj7SJlL4eK93vlEjs2NbNoB7Zf5sWei-YGXgD&s=10",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#FFFFFF', '#C0C0C0', '#D4AF37'],
    longDescription: "Hand-loomed to absolute perfection. This Flash Deal offers our top-tier traditional Kemis at an unprecedented price. Features beautiful threading work with durable, authentic fibers.",
    specifications: { Category: "Flash Products", Brand: "Ethiopian Craft", Material: "Shemma Cotton", Fit: "Standard", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 102,
    category: "Flash Products",
    title: "Modern Handwoven Cotton Scarf",
    brand: "Addis Weave",
    rating: 4,
    reviewsCount: "(18)",
    price: "$35.00",
    origPrice: "$50.00",
    discount: 30,
    stockStatus: "Limited Time Offer",
    image: "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/s/m/smr15scarf2.jpg",
    images: [
      "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/s/m/smr15scarf2.jpg",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#AA061B', '#000000', '#22C55E'],
    longDescription: "A fusion accessory that brings Habesha weaving techniques to modern winter and autumn wear. Incredibly warm, luxuriously soft, and ethically produced by local artisans.",
    specifications: { Category: "Flash Products", Brand: "Addis Weave", Material: "Cotton Blend", Fit: "One Size", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 103,
    category: "Flash Products",
    title: "Casual Linen Summer Shirt",
    brand: "Sync Style",
    rating: 5,
    reviewsCount: "(89)",
    price: "$45.00",
    origPrice: "$65.00",
    discount: 30,
    stockStatus: "In Stock",
    image: "https://www.dagmawit.store/cdn/shop/files/photo_2026-07-29_09.33.00.jpg?v=1785307808&width=533",
    images: [
      "https://www.dagmawit.store/cdn/shop/files/photo_2026-07-29_09.33.00.jpg?v=1785307808&width=533",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#3B82F6', '#FFFFFF', '#6B7280'],
    longDescription: "Beat the heat in this ultra-breathable linen summer shirt. Designed with a relaxed fit and subtle Ethiopian-inspired trim inside the collar and cuffs for a unique touch.",
    specifications: { Category: "Flash Products", Brand: "Sync Style", Material: "100% Linen", Fit: "Relaxed Summer Fit", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 104,
    category: "Flash Products",
    title: "Handmade Leather Tote Bag",
    brand: "Ethio Leather",
    rating: 5,
    reviewsCount: "(112)",
    price: "$89.00",
    origPrice: "$140.00",
    discount: 36,
    stockStatus: "Almost Sold Out",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591475155-42e471926610?auto=format&fit=crop&w=600&q=80"
    ],
    colors: ['#78350F', '#000000'],
    longDescription: "Crafted from world-renowned genuine Ethiopian leather. This everyday tote bag is spacious, highly durable, and ages beautifully over time, developing a rich patina.",
    specifications: { Category: "Flash Products", Brand: "Ethio Leather", Material: "100% Genuine Leather", Size: "Large Tote", Origin: "Ethiopia" },
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
    brand: "Sheger Bundle",
    rating: 5,
    reviewsCount: "(245)",
    price: "$199.00",
    origPrice: "$310.00",
    savings: "Save $111",
    stockStatus: "Bundle Savings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2L55mWt5molq78dQsFw6ms4M-JMCrTZDIzF9pv59E187ysC3DnX__pQ&s=10",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "An all-in-one curated package. Includes our signature lightweight dress, a premium leather tote, and a versatile scarf. Expertly matched by our stylists.",
    specifications: { Category: "Bundle Deals", Brand: "Sheger Bundle", Material: "Mixed Premium Cottons", Items: "3 Pieces", Fit: "Varies", Origin: "Ethiopia" },
    reviewsSummary: standardReviewsSummary,
    reviews: standardReviewsList
  },
  {
    id: 202,
    category: "Bundle Deals",
    title: "His & Hers Traditional Set",
    brand: "Ethiopian Heritage",
    rating: 5,
    reviewsCount: "(189)",
    price: "$249.00",
    origPrice: "$380.00",
    savings: "Save $131",
    stockStatus: "Bundle Savings",
    image: "https://i.etsystatic.com/62235377/r/il/b797e1/7369239609/il_570xN.7369239609_mik7.jpg",
    images: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    longDescription: "Celebrate together with beautifully matched formal wear. Crafted with identical high-quality embroidery patterns on both the men's and women's outfits.",
    specifications: { Category: "Bundle Deals", Brand: "Ethiopian Heritage", Material: "Cotton & Shemma", Items: "Men's Set + Women's Set", Fit: "Standard Matching", Origin: "Ethiopia" },
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