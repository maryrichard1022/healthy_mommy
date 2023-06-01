//운동복 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SportsWearPageProduct from "../components/SportsWearPageProduct";

function SportsWear() {
  return (
    <div className="">
      <div className="contentWrapper">
        <Nav />

        <SportsWearPageProduct />

        <div class="container">
          <div className="container">            
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default SportsWear;
