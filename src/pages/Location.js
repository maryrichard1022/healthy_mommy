import React from "react";
import Kakaomap from "../components/Kakaomap";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "./Location.css";
const Location = () => {
  return (
    <div className="location">
      <Nav />
      <h2>매장 위치</h2>
      <Kakaomap />
      <Footer />
    </div>
  );
};

export default Location;
