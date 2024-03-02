import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ProductListing from "./ProductListing";
import PrdouctDetail from "./ProductDetail";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:productId" element={<PrdouctDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}