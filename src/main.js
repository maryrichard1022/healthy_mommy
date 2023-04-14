import React from "react";
import "./main.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainSlider from "./components/MainSlider";
import MainPage_Product from "./components/MainPage_Product";

function main() {
  return (
    <div className="main">
      <Nav />
      <MainSlider />
      <MainPage_Product />
      <Footer />
    </div>
  );
}

export default main;
