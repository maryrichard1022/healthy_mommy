//메인 페이지, 베스트 물품
import React from "react";
import "./MainPageProduct.css";
import FilterButton from "./FilterButton";

const MainPageProduct = () => {
  return (
    <div className="MainPageProduct">
      <div>
        <h1>BEST PRODUCT</h1>
        <div className="MainFilterButton">
          <FilterButton text={"ALL"} />
          <FilterButton text={"영양제"} />
          <FilterButton text={"운동복"} />
          <FilterButton text={"운동기구"} />
        </div>
      </div>
      <div className="subBanner">
        {/* <img alt="banner" src={require("../assets/banner5.jpg")} /> */}
        <h4> 이미지 준비중</h4>
      </div>
      <div className="ProductList">
        <h4>상품 준비중</h4>
      </div>
    </div>
  );
};
export default MainPageProduct;
