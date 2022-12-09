import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { About, Contact, Faq, Home, InTransit, Orders } from "./screens";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/in-transit" element={<InTransit />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
