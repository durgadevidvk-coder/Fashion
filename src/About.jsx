

import aboutimage from "./assets/Images/aboutimage.jpg";
import Footer from "./Footer";

function About() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* ABOUT SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-12 ">
          About Us
        </h1>

        {/* IMAGE */}
        <div className="flex justify-center mb-12">
          <img
            src={aboutimage}
            alt="About"
            className="w-full max-w-2xl h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-xl leading-9">

          <p>
            We are a modern fashion brand focused on creating stylish,
            comfortable, and high-quality clothing for everyday life.
            Our goal is to offer designs that are both trendy and timeless,
            giving customers confidence in every outfit they wear.
          </p>

          <p>
            We believe in using good materials, sustainable practices,
            and thoughtful craftsmanship. Every piece we create is made
            with attention to detail and a passion for fashion.
          </p>

          <p>
            Our team brings together creativity, experience, and fresh ideas
            to deliver the best for our customers. We’re committed to offering
            a smooth shopping experience and products that inspire your
            personal style.
          </p>

          <p>
            Thank you for being a part of our journey. Together, we continue
            to shape a better and more stylish future.
          </p>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default About;