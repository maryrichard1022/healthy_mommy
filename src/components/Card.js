//홈페이지 하단, 푸더(Nav파일과 마찬가지로 모든 파일에 import하면 됨 )
import React from "react";
import "./Card.css";

const Card = ({product_name, img_src, price}) => {

  return (
    <div className="col-12 col-sm-6 col-md-3">
        <a href="./Detail">
        <div className="card">
            <img
                className="card-top shop-img"
                src={img_src}
                alt = ""
            />
            <div className="card-body">
            <div className="d-flex">
                <h4>{product_name}</h4>
                <img
                    className="rounded-circle fit-cover"
                    width={50}
                    height={50}
                    src={require("../assets/cart2.jpeg")}
                    style={{ padding: 10 }}
                    alt = ""
                />
            </div>
            <p className="card-text">{price}원</p>
            </div>
            </div>
        </a>
    </div>
);
};

export default Card;
