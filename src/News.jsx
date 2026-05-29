

function News() {
  return (
    <div className="w-full mt-16 bg-gray-100 py-12">

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-4">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-bold">
          Subscribe to Our Newsletter
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-500 text-sm sm:text-base">
          Be the first to know about new collections and exclusive offers
        </p>

        {/* INPUT SECTION */}
        <div className="flex w-full max-w-md mt-4">

          <input
            type="email"
            placeholder=""
            className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
          />

          <button className="bg-[#FF6F61] text-white px-6 py-3 rounded-r-md hover:bg-black transition">
            Subscribe
          </button>

        </div>

      </div>

    </div>
  )
}

export default News