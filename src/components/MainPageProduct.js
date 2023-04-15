//메인 페이지, 베스트 물품
import React from "react";
import "./MainPageProduct.css";

const MainPageProduct = () => {
  return (
    <div className="MainPageProduct">
      <h2> BEST PRODUCT </h2>
      <div className="subBanner">
        <img alt="banner" src={require("../assets/banner5.jpg")} />
      </div>
    </div>
  );
};
export default MainPageProduct;
