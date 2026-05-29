import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Footer from "./Footer";
import ca3 from "./assets/Images/ca3.jpg";
import ca2 from "./assets/Images/ca2.jpg";
import wm1 from "./assets/Images/wm1.jpg";
import wm2 from "./assets/Images/wm2.jpg";
import mencasual1 from "./assets/Images/mencasual1.jpg";
import mencasual2 from "./assets/Images/mencasual2.jpg";
import ca1 from "./assets/Images/ca1.jpg";
import ca7 from "./assets/Images/ca7.jpg";
import ca4 from "./assets/Images/ca4.jpg";
import t1 from "./assets/Images/t1.jpg";
import t2 from "./assets/Images/t2.jpg";
import f1 from "./assets/Images/f1.jpg";
import f2 from "./assets/Images/f2.jpg";
import km1 from "./assets/Images/km1.jpg";
import tk1 from "./assets/Images/tk1.jpg";
/* ---------------- PRODUCTS DATA ---------------- */
const productsData = [
  /* WOMEN */
  {
    id: 1,
    title: "T-Shirt & Jean",
    category: "Casual",
    gender: "Women",
    size: "M",
    price: 800,
    image: ca3,
  },
  {
    id: 2,
    title: "Saree",
    category: "Traditional",
    gender: "Women",
    size: "L",
    price: 2000,
    image: ca2,
  },
  {
    id: 3,
    title: "Kurti",
    category: "Modern",
    gender: "Women",
    size: "M",
    price: 1200,
    image: wm1,
  },
  {
    id: 4,
    title: "Modern Dress",
    category: "Modern",
    gender: "Women",
    size: "XL",
    price: 1500,
    image: wm2,
  },

  /* MEN CASUAL */
  {
    id: 5,
    title: "Men Casual",
    category: "Casual",
    gender: "Men",
    size: "M",
    price: 900,
    image: mencasual1,
  },
  {
    id: 6,
    title: "Men Casual",
    category: "Casual",
    gender: "Men",
    size: "L",
    price: 1000,
    image: mencasual2,
  },

  /* MEN MODERN - FIXED */
  {
    id: 7,
    title: "Modern Shirt",
    category: "Modern",
    gender: "Men",
    size: "M",
    price: 1300,
    image: ca1,
  },
  {
    id: 8,
    title: "Modern Jacket",
    category: "Modern",
    gender: "Women",
    size: "L",
    price: 1800,
    image: ca7,
  },
  {
    id: 9,
    title: "Modern Outfit",
    category: "Modern",
    gender: "Women",
    size: "XL",
    price: 2200,
    image: ca4,
  },

  /* MEN TRADITIONAL */
  {
    id: 10,
    title: "Sherwani",
    category: "Traditional",
    gender: "Men",
    size: "XL",
    price: 2500,
    image: t1,
  },
  {
    id: 11,
    title: "Kurta",
    category: "Traditional",
    gender: "Men",
    size: "L",
    price: 1500,
    image: t2,
  },

  /* MEN FORMALS */
  {
    id: 12,
    title: "Formal Shirt",
    category: "Formals",
    gender: "Men",
    size: "M",
    price: 1400,
    image: f1,
  },
  {
    id: 13,
    title: "Formal Suit",
    category: "Formals",
    gender: "Men",
    size: "XL",
    price: 3000,
    image: f2,
  },

  /* KIDS */
  {
    id: 14,
    title: "Kids Modern",
    category: "Modern",
    gender: "Kids",
    size: "S",
    price: 700,
    image: km1,
  },
  {
    id: 15,
    title: "Kids Traditional",
    category: "Traditional",
    gender: "Kids",
    size: "M",
    price: 800,
    image: tk1,
  },
];

/* ---------------- FILTERS ---------------- */
const topCategories = [
  "All",
  "Modern",
  "Traditional",
  "Casual",
  "Formals",
];

const sidebarGenders = ["All", "Men", "Women", "Kids"];

const sizes = ["S", "M", "L", "XL", "XXL"];

/* ---------------- COMPONENT ---------------- */
function Categories() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeGender, setActiveGender] = useState("All");
  const [activeSize, setActiveSize] = useState("");

  /* ---------------- CART FUNCTION ---------------- */
  const addToCart = (product) => {
    alert(`${product.title} added to cart`);
  };

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredProducts = productsData.filter((product) => {
    const categoryMatch =
      activeTab === "All" || product.category === activeTab;

    const genderMatch =
      activeGender === "All" || product.gender === activeGender;

    const sizeMatch =
      activeSize === "" || product.size === activeSize;

    return categoryMatch && genderMatch && sizeMatch;
  });

  return (
    <div className="min-h-screen bg-[#f3f3f3] font-sans">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* TOP FILTER */}
        <div className="flex flex-wrap gap-4 mb-10 text-lg text-gray-500">
          {topCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`transition hover:text-black ${
                activeTab === cat
                  ? "text-[#FF6F61] font-semibold"
                  : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LAYOUT */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* SIDEBAR */}
          <aside className="w-full md:w-48">

            {/* GENDER */}
            <div className="mb-8">
              <h2 className="font-bold mb-3 text-sm">
                Categories
              </h2>

              <div className="flex flex-col gap-2">
                {sidebarGenders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setActiveGender(gender)}
                    className={`text-left px-3 py-2 rounded text-sm transition ${
                      activeGender === gender
                        ? "bg-black text-white"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div>
              <h2 className="font-bold mb-3 text-sm">
                Size
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      setActiveSize(
                        activeSize === size ? "" : size
                      )
                    }
                    className={`border py-2 text-xs rounded transition ${
                      activeSize === size
                        ? "bg-black text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* PRODUCTS */}
          <section className="flex-1">

            {filteredProducts.length === 0 ? (
              <div className="text-center text-gray-500 text-lg mt-20">
                No Products Found
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                  >

                    {/* IMAGE */}
                    <div className="relative h-[360px] overflow-hidden rounded-lg bg-white shadow">

                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />

                      {/* HEART */}
                      <FaHeart className="absolute top-3 right-3 text-red-500 text-lg cursor-pointer" />

                      {/* HOVER BUTTON */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end justify-center">

                        <button
                          onClick={() => addToCart(product)}
                          className="mb-4 px-5 py-2 bg-[#FF6F61] text-white rounded opacity-0 group-hover:opacity-100 transition duration-300"
                        >
                          Buy Now
                        </button>

                      </div>

                    </div>

                    {/* DETAILS */}
                    <div className="mt-3 flex justify-between">
                      <h3 className="font-semibold">
                        {product.title}
                      </h3>

                      <p className="font-bold">
                        ₹{product.price}
                      </p>
                    </div>

                    <p className="text-sm text-gray-500">
                      {product.category} - {product.gender}
                    </p>

                  </div>
                ))}

              </div>
            )}

          </section>

        </div>

      </main>
       <Footer />
    </div>
  );
}

export default Categories;
