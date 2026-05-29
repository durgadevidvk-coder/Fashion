import React, { useState } from "react";
import Footer from "./Footer";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    newsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // SIMPLE VALIDATION
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.contact === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);

    alert("Form Submitted Successfully!");

    console.log(formData);

    // RESET FORM
    setFormData({
      name: "",
      email: "",
      contact: "",
      newsletter: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col justify-between">
      
      {/* CONTACT SECTION */}
      <div className="flex justify-center items-center py-16 px-4">
        
        <div className="w-full max-w-3xl bg-[#f5f5f5] border border-gray-300 rounded-[40px] p-8 md:p-12 shadow-sm">
          
          {/* HEADING */}
          <h1 className="text-4xl font-semibold mb-2">
            Contact <span className="text-blue-600">Us</span>
          </h1>

          <p className="text-gray-700 mb-12 text-lg">
            Let’s get in touch!
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* NAME */}
            <div>
              <label className="block text-2xl mb-3">Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-gray-500 outline-none py-2 text-lg"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-2xl mb-3">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-500 outline-none py-2 text-lg"
              />
            </div>

            {/* CONTACT */}
            <div>
              <label className="block text-2xl mb-3">Contact</label>

              <textarea
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                className="w-full bg-transparent border-b border-gray-500 outline-none py-2 text-lg resize-none"
              ></textarea>
            </div>

            {/* CHECKBOX */}
            <div className="flex items-center justify-center gap-3">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="w-4 h-4"
              />

              <label className="text-lg">
                I would like to receive newsletter
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-black text-3xl py-4 rounded-2xl font-medium"
            >
              Submit
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p className="text-green-600 text-center mt-6 text-lg font-medium">
              Your message has been submitted successfully!
            </p>
          )}
        </div>
      </div>

      

      <Footer/>
    </div>
  );
}

export default Contact;