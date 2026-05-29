import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaApple,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* LOGIN */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username.trim() === "" ||
      formData.password.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-orange-100 flex justify-center items-center px-4">

      {/* LOGIN CARD */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">


        {/* FORM */}
        <div className="p-8">

          {/* TITLE */}
          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Enter your credentials below
            </p>

          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* USERNAME */}
            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Username
              </label>

              <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden focus-within:border-[#FF6F61]">

                <div className="bg-gray-100 px-4 py-4 text-gray-500">
                  <FaUser />
                </div>

                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-4 outline-none"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden focus-within:border-[#FF6F61]">

                <div className="bg-gray-100 px-4 py-4 text-gray-500">
                  <FaLock />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-4 outline-none"
                />

                {/* SHOW PASSWORD */}
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="px-4 text-gray-500"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right">

              <button
                type="button"
                className="text-[#FF6F61] hover:underline text-sm"
              >
                Forgot Password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#FF6F61] hover:bg-[#ff5747] text-white py-4 rounded-xl font-semibold text-lg transition"
            >
              Login
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center my-8">

            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <p className="px-4 text-gray-500 text-sm">
              OR CONTINUE WITH
            </p>

            <div className="flex-1 h-[1px] bg-gray-300"></div>

          </div>

          {/* SOCIAL LOGIN */}
          <div className="space-y-4">

            {/* GOOGLE */}
            <button className="w-full border-2 border-gray-300 hover:border-[#FF6F61] py-3 rounded-xl flex items-center justify-center gap-3 font-medium transition">

              <FaGoogle className="text-red-500 text-xl" />

              Continue with Google

            </button>

            {/* APPLE */}
            <button className="w-full border-2 border-gray-300 hover:border-black py-3 rounded-xl flex items-center justify-center gap-3 font-medium transition">

              <FaApple className="text-black text-2xl" />

              Continue with Apple

            </button>

          </div>

          {/* REGISTER */}
          <p className="text-center text-gray-500 mt-8">

            Don’t have an account?{" "}

            <span className="text-[#FF6F61] font-semibold cursor-pointer hover:underline">
              Register
            </span>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;