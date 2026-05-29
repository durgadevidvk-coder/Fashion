import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full mt-16 bg-black text-white py-10">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h1 className="text-2xl font-bold mb-3">LUXE</h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            Premium fashion for the modern connoisseur. Elevate your style with our curated collections.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-4 text-lg">

            <FaFacebookF className="cursor-pointer   " />
            <FaInstagram className="cursor-pointer " />
            <FaTwitter className="cursor-pointer " />
            <FaYoutube className="cursor-pointer " />

          </div>
        </div>

        {/* SHOP */}
        <div>
          <h2 className="font-bold mb-3">Shop</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Sale</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h2 className="font-bold mb-3">Help</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Customer Service</li>
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">Find a Store</li>
            <li className="hover:text-white cursor-pointer">Shipping & Return</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="font-bold mb-3">About</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Our Story</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Corporate Responsibility</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

      </div>


    </div>
  )
}

export default Footer;