// src/data/categories.js
import { Cpu, Heart, ShoppingCart, Truck, Star } from "lucide-react";

export const categories = [
  {
    id: "electronics",
    name: "Electronics & Accessories",
    icon: Cpu, // store the component, not <Cpu />
    subcategories: [
      "Smartphones & tablets",
      "Laptops & computers",
      "Headphones & earphones",
      "Chargers & power banks",
      "Smart watches",
    ],
    brands: ["Apple", "Samsung", "Huawei", "Oppo", "Redmi", "ZTE", "JBL"],
  },
  {
    id: "fashion",
    name: "Fashion & Clothing",
    icon: Heart,
    subcategories: ["Men", "Women", "Shoes", "Bags"],
    brands: ["Nike", "Adidas", "Zara", "Puma"],
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    icon: Star,
    subcategories: ["Skincare", "Makeup", "Haircare"],
    brands: ["Nivea", "Loreal", "Maybelline", "Garnier"],
  },
  {
    id: "groceries",
    name: "Groceries & Daily Essentials",
    icon: ShoppingCart,
    subcategories: ["Food", "Beverages", "Cleaning Supplies"],
    brands: ["Local Brand", "Nestle", "Unilever", "Coca-Cola"],
  },
  {
    id: "automotive",
    name: "Automotive & Motor Accessories",
    icon: Truck,
    subcategories: ["Car Accessories", "Motorbike Accessories", "Spare Parts"],
    brands: ["Toyota", "Bosch", "Mobil", "Castrol"],
  },
];
