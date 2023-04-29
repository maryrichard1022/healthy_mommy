//운동복 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SportsWearFilterButton from "../components/SportsWearFilterButton";
import Card from "../components/Card";
import Banner from "../components/Banner";

function SportsWear() {
  return (
    <div className="">
      <div className="contentWrapper">
        <Nav />

        <div class="container">
        <h1>운동복</h1>
        <Banner img_src={require("../assets/sportswear.png")}/>
        <SportsWearFilterButton />
          <div className="container">
            <div className="row">
              <div
                className="col col-sm-3 col-md-7"
              >
                <p />
              </div>
              <div className="col">
                <p>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: "underline" }}>
                    가격 낮은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: "underline" }}>
                    가격 높은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: "underline" }}>
                    누적 판매 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: "underline" }}>
                    최신 순
                    </span>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
            <Card product_name={"MJ 조거 팬츠"} img_src={require("../assets/pants.webp")} price={"29,000"}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SportsWear;
