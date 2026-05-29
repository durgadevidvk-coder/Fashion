

import Offerimage from "./assets/Images/offer.jpg"

function Offer() {
  return (
    <div className="w-full mt-15 py-5">

      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-[400px] overflow-hidden">

        <img
          src={Offerimage}
          alt="Offer"
          className="w-full h-96 object-cover"
        />

        {/* OVERLAY TEXT */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">

          <h1 className="text-red-900 text-5xl md:text-6xl font-bold">
            50% OFF
          </h1>

        </div>

      </div>

    </div>
  )
}

export default Offer