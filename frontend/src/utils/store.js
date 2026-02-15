/* ===============================
   CATEGORY DATA
================================ */

export const categoryData = [
  {
    id: "electronics",
    name: "Electronics & Accessories",
    subcategories: [
      "Smartphones & tablets",
      "Laptops & computers",
      "Headphones & earphones",
      "Chargers & power banks",
      "Smart watches"
    ],
    brands: ["Apple", "Samsung", "Huawei", "Oppo", "Redmi", "ZTE", "JBL"]
  },

  {
    id: "fashion",
    name: "Fashion & Clothing",
    subcategories: ["Men", "Women", "Shoes", "Bags"],
    brands: ["Nike", "Adidas", "Zara"]
  },

  {
    id: "beauty",
    name: "Beauty & Personal Care",
    subcategories: ["Skincare", "Makeup", "Haircare"],
    brands: ["Nivea", "Loreal"]
  },

  {
    id: "groceries",
    name: "Groceries & Daily Essentials",
    subcategories: ["Food", "Beverages", "Cleaning Supplies"],
    brands: ["Local Brand"]
  },

  {
    id: "automotive",
    name: "Automotive & Motor Accessories",
    subcategories: ["Car Accessories", "Motorbike Accessories", "Spare Parts"],
    brands: ["Toyota", "Bosch"]
  }
];


/* ===============================
   PRODUCT DATA
================================ */

export const initialProducts = [
  {
    id: 1,
    name: "JBL Quantum 100",
    price: 250,
    category: "Electronics & Accessories",
    subcategory: "Headphones & earphones",
    brand: "JBL",
    discount: "25% off",
    img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762"
  },

  {
    id: 2,
    name: "Apple AirPods Pro",
    price: 450,
    category: "Electronics & Accessories",
    subcategory: "Headphones & earphones",
    brand: "Apple",
    discount: "15% off",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22"
  },

  {
    id: 3,
    name: "Samsung Galaxy Buds",
    price: 300,
    category: "Electronics & Accessories",
    subcategory: "Headphones & earphones",
    brand: "Samsung",
    discount: "10% off",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ph/galaxy-buds-plus-black-1.jpg"
  },

  {
    id: 4,
    name: "Nike Running Shoes",
    price: 200,
    category: "Fashion & Clothing",
    subcategory: "Shoes",
    brand: "Nike",
    img: "https://static.nike.com/a/images/t_default"
  }
];
