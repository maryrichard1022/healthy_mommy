import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Detail.css";

function Detail() {
  return (
    <div className="all">
      <div className="contentWrapper">
        <Nav />
        <div class="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <div className="image-holder">
                <img src={require("../assets/pants.webp")} />
              </div>
            </div>
            <div className="col">
              <h1>MJ 조거 펜츠</h1>
              <br />
              <p>
                {" "}
                신축성이 좋은 조거 팬트 <br />
                (상품에 관련한 한 줄 설명 들어갈 예정){" "}
              </p>
              <br />
              <h3> 가격 29,000원 </h3>
              <div className="row">
                <div className="col-9"></div>
                <div className="col">
                  <p> 총 상품금액: 0원</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="row">
                    <button
                      type="button"
                      class="btn btn-outline-dark btn-lg btn-block"
                    >
                      바로 구매
                    </button>
                  </div>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                  <div className="row">
                    <button
                      type="button"
                      class="btn btn-outline-dark btn-lg btn-block"
                    >
                      장바구니 담기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Row">
            <img src="" alt="싱세이미지" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Detail;
