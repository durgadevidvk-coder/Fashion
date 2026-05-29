import { useState } from "react";

function Userpopup() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Submitted Successfully!");
    setOpen(false);
  };

  return (
    <>
      {/* CONTACT BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="hover:text-[#FF6F61] font-medium"
      >
        
      </button>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          {/* BOX */}
          <div className="bg-white w-[90%] max-w-2xl rounded-[40px] p-8 relative shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-2xl font-bold"
            >
              ×
            </button>

            {/* TITLE */}
            <h1 className="text-4xl font-semibold mb-2">
              Contact <span className="text-blue-600">Us</span>
            </h1>

            <p className="text-gray-600 mb-10">
              Let's get in touch!
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* NAME */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full border-b border-gray-500 outline-none py-2"
                />
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border-b border-gray-500 outline-none py-2"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  placeholder="Contact"
                  rows="4"
                  required
                  className="w-full border-b border-gray-500 outline-none py-2 resize-none"
                ></textarea>
              </div>

              {/* CHECKBOX */}
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <label>I would like to receive newsletter</label>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl py-3 rounded-2xl transition"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Userpopup;