//모든 물품 띄우는 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AllPageProduct from "../components/AllPageProduct";

function ALL() {
  return (
    <div className="all">
      <div className="contentWrapper">
        <Nav />
        <AllPageProduct />
        <div class="container">  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ALL;
