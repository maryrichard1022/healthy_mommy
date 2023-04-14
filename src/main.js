import React from "react";
import "./main.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainSlider from "./components/MainSlider";

function main() {
  return (
    <div className="main">
      <Nav />
      <MainSlider />
      <Footer />
    </div>
  );
}

export default main;
