//홈페이지 하단, 푸더(Nav파일과 마찬가지로 모든 파일에 import하면 됨 )
import React from "react";
import "./Card.css";

const Card = ({ product_name, img_src, price }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <a href="./Detail">
        <div className="card">
          <div className="card-top">
            <img className="shop-img" src={img_src} alt="" />
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
              <h4>{product_name}</h4>
              </div>
              <div className="col-3">
              <img
                className="cart-logo"
                src={require("../assets/cart.png")}
                alt=""
              />
              </div>
            
            </div>
            <p className="card-text">{price}원</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
