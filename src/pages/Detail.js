import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Detail.css";
import CustomButton from "../components/CustomButton";
import DetailSlider from "../components/DetailSlider";

function Detail() {
  return (
    <div className="all">
      <div className="contentWrapper">
        <Nav />


      <div class="product-detail">
  <div class="product-images">
    <div class="product-main-image">
    <DetailSlider />
      {/* <img src={require("../assets/pants.webp")} alt="Product Main Image" /> */}
    </div>

  </div>
  <div class="product-info">
    <div class="product-title">
      <h1>MJ 조거 팬츠 초특가 할인</h1>
    </div>
    <div class="product-description">
      <p>신축성이 좋은 조거 팬츠
(상품에 관련한 설명 들어갈 예정)</p>
    </div>
    <div class="product-price">
      <h2>29,000원</h2>
    </div>
    <button
      type="button"
      class="btn"
    >
      <CustomButton text={"바로 구매"}/>
    </button>

    <button
      type="button"
      class="btn"
      // btn-outline-dark btn-lg btn-block
    >
      <CustomButton text={"장바구니 담기"}/>
    </button>
  </div>
</div>



        <div class="container">
        
          <hr style={{ borderTop: "1px solid black" }} />
          <br />

          <div className="Row">
            <img src="" alt="상세이미지" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Detail;
