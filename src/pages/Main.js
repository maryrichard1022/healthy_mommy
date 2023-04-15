import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import MainPageProduct from "../components/MainPageProduct";

import "./Main.css";

function Main() {
  return (
    <div className="Main">
      <Nav />
      <MainSlider />
      <MainPageProduct />
      <Footer />
    </div>
  );
}

export default Main;
