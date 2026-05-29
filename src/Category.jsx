import Categoryimage1 from "./assets/Images/c1.jpg";
import Categoryimage2 from "./assets/Images/c2.jpg";
import Categoryimage3 from "./assets/Images/c3.jpg";
import Categoryimage4 from "./assets/Images/c4.jpg";

function Category() {
  return (
    <div className="bg-gray-200 w-full py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2">
          Shop By Category
        </h1>

        <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-3">
          Curated collections for every occasion
        </p>

      </div>

        <div className="flex justify-center mt-10 gap-4 flex-wrap bg-white">

  {/* Card 1 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src={Categoryimage1}
      className="h-72 w-96 object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full flex justify-center bg-white/20 backdrop-blur-md py-4 border-y border-white/30 transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-white text-2xl font-semibold">Modern</h2>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src={Categoryimage2}
      className="h-72 w-96 object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full flex justify-center bg-white/20 backdrop-blur-md py-4 border-y border-white/30 transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-white text-2xl font-semibold">Casual</h2>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src={Categoryimage3}
      className="h-72 w-96 object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full flex justify-center bg-white/20 backdrop-blur-md py-4 border-y border-white/30 transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-white text-2xl font-semibold">Traditional</h2>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src={Categoryimage4}
      className="h-72 w-96 object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full flex justify-center bg-white/20 backdrop-blur-md py-4 border-y border-white/30 transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-white text-2xl font-semibold">Formal</h2>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default Category;