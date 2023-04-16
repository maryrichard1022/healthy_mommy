//매장 위치
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Location.css";

const Location = () => {
  return (
    <div>
      <Nav />
      <div className="location">
        <h3> 매장 위치.</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
