

import {  Routes, Route } from "react-router-dom";

import Navbar from "./Navbar.jsx";

import Home from "./Home.jsx";
import Categories from "./Categories.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Cart from "./Cart.jsx";
import Userpopup from "./Userpopup.jsx";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Userpopup" element={<Userpopup />} />

        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;