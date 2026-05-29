

import Heroimage1 from "./assets/Images/h1.jpg"
import Heroimage2 from "./assets/Images/h2.jpg"
import Heroimage3 from "./assets/Images/h3.jpg"
import Heroimage4 from "./assets/Images/h4.jpg"

function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-24 md:mt-16">

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-snug">
            Elevate Your Style This <br className="hidden md:inline" /> Season
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-6">
            Discover our new collection of premium fashion pieces designed for the modern connoisseur.
          </p>

          <button className="rounded-lg px-6 py-3 bg-[#FF6F61] text-white font-semibold hover:bg-black transition w-full sm:w-auto">
            Go To Shop
          </button>
        </div>

        {/* RIGHT SIDE (Responsive Grid) */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-0">
          <img src={Heroimage1} className="rounded-xl object-cover h-48 md:h-full w-full -translate-y-3 md:-translate-y-6 md:hover:scale-105 transition duration-300" />
          <img src={Heroimage2} className="rounded-xl object-cover h-48 md:h-full w-full md:hover:scale-105 transition duration-300" />
          <img src={Heroimage3} className="rounded-xl object-cover h-48 md:h-full w-full -translate-y-3 md:-translate-y-6 md:hover:scale-105 transition duration-300" />
          <img src={Heroimage4} className="rounded-xl object-cover h-48 md:h-full w-full md:hover:scale-105 transition duration-300" />
        </div>

      </div>
    </div>
  )
}

export default Hero;