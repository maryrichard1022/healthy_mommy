//모든 물품 띄우는 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "../components/Banner";
import AllFilterButton from "../components/AllFilterButton";
import Card from "../components/Card";

import "./ALL.css";

function ALL() {
  return (
    <div className="all">
      <div className="contentWrapper">
        <Nav />


        <div class="container">
        <h1>All</h1>
        <Banner img_src={require("../assets/All.png")}/>
        <AllFilterButton />
          <div className="container">
            <div className="row">
              <div
                className="col col-sm-3 col-md-7"
              >
                <p />
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>
                    가격 낮은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>
                    가격 높은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>
                    누적판매순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>최신순</span>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
          </div>
        </div>
 



      </div>
      <Footer />
    </div>
  );
}

export default ALL;
