// 장바구니
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Cart.css";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Cart = () => {
  return (
    <div className="cart">
      <Nav />
      <div className="contentWrapper">
        <h1> 장바구니 </h1>
        <div>
          <div>
            <input type="checkbox" />
            <span>상품정보</span>
            <span>수량</span>
            <span>상품금액</span>

            <p>전체선택</p>
          </div>
        </div>
        <Link to={"/Payment"}>
          <CustomButton text={"주문하기"} />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
