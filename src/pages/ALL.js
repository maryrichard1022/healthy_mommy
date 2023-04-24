//모든 물품 띄우는 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import AllBanner from "../components/AllBanner";
import AllFilterButton from "../components/AllFilterButton";

import "./ALL.css";

function ALL () {
    return (
      <div className="all">
        <div className="contentWrapper">
          <Nav />
          <AllBanner />
	        <AllFilterButton />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default ALL;
  