import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Footer from "./Footer";
import sh1 from "./assets/Images/sh1.jpg";
import sh2 from "./assets/Images/sh2.jpg";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Modern Gown",
      description: "black, full length",
      price: 199.98,
      quantity: 3,
      image: sh1,
    },

    {
      id: 2,
      title: "Short top",
      description: "White, flower design, short",
      price: 249.0,
      quantity: 1,
      image: sh2,
    },
  ]);

  // INCREASE QUANTITY
  const increaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  // DECREASE QUANTITY
  const decreaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  // CALCULATIONS
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.08;
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col justify-between">

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto w-full px-6 py-12">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-center mb-16">
          Shopping Cart
        </h1>

        {/* CART SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-semibold mb-10">
              Your Cart
            </h2>

            <div className="space-y-12">

              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-6"
                  >

                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[180px] h-[220px] object-cover rounded-lg"
                    />

                    {/* DETAILS */}
                    <div className="flex-1 flex justify-between">

                      <div>

                        <h3 className="text-2xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          {item.description}
                        </p>

                        {/* QUANTITY */}
                        <div className="flex items-center gap-3 mt-6">

                          <button
                            onClick={() =>
                              decreaseQty(item.id)
                            }
                            className="w-8 h-8 border rounded hover:bg-gray-200"
                          >
                            -
                          </button>

                          <span className="text-lg">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQty(item.id)
                            }
                            className="w-8 h-8 border rounded hover:bg-gray-200"
                          >
                            +
                          </button>

                          {/* DELETE */}
                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <FaTrash />
                          </button>

                        </div>
                      </div>

                      {/* PRICE */}
                      <h3 className="text-2xl font-bold">
                        $
                        {(
                          item.price * item.quantity
                        ).toFixed(2)}
                      </h3>

                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-10 rounded-xl shadow text-center">
                  <h2 className="text-3xl font-semibold mb-4">
                    Your Cart is Empty
                  </h2>

                  <p className="text-gray-500">
                    Add some products to your cart.
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-2xl shadow-md p-8 h-fit">

            <h2 className="text-3xl font-bold mb-8">
              Price Breakdown
            </h2>

            <div className="space-y-5 text-lg">

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Tax (8%)
                </span>

                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Shipping
                </span>

                <span>${shipping.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span>${total.toFixed(2)}</span>
              </div>

            </div>

        

          </div>

        </div>
      </div>
<Footer/>
    </div>
  );
}

export default Cart;
