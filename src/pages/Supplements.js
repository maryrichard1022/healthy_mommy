//영양제 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SupplementsPageProduct from "../components/SupplementsPageProduct"; //0508

function Supplements() {
  return (
    <div className="Supplements">
      <div className="contentWrapper">
        <Nav />

        <SupplementsPageProduct />
        
        <div class="container">
          <div className="container">
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Supplements;
