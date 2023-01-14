import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../elements/header";
import ProductCard from "../elements/prod-card";
import Product from "../screens/ProductScreen";
import "../styling/prod-card.scss";

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
      <div className="feat-prod">
        <Routes>
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/" element={<ProductCard />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
