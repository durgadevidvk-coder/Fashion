import Buyimage1 from "./assets/Images/b1.jpg";
import Buyimage2 from "./assets/Images/b2.jpg";
import Buyimage3 from "./assets/Images/b3.jpg";
import Buyimage4 from "./assets/Images/b4.jpg";
import { FaStar } from "react-icons/fa";

function Buy() {

const products = [
    {
      img: Buyimage1,
      title: "T-Shirt",
      price: "₹250"
    },
    {
      img: Buyimage2,
      title: "Top",
      price: "₹250"
    },
    {
      img: Buyimage3,
      title: "Scout",
      price: "₹250"
    },
    {
      img: Buyimage4,
      title: "Gown",
      price: "₹250"
    }
  ];

  
  return (
    <div className="w-full mt-10 py-5">

      <div className="w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg group">

            {/* IMAGE */}
            <img
              src={item.img}
              alt="product"
              className="w-full h-full object-cover "
            />

            {/* OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-4 ">

              {/* TITLE + PRICE */}
              <div className="flex justify-between items-center text-sm ">
                <h3 className=" font-bold">{item.title}</h3>
                <h3 className="font-semibold">{item.price}</h3>
              </div>

              <p className="text-sm   mt-1">
                Cotton clothes for summer
              </p>

              <div className="flex justify-between items-center mt-3">

                {/* RATING */}
                <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                  <span className="text-black text-sm ">4</span>
                  <FaStar />
                </div>

                {/* BUTTON */}
               <a href=""> <button className="bg-[#FF6F61] px-4 py-2 rounded-md text-white text-sm">
                  Buy Now
                </button></a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Buy;