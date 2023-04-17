// 장바구니
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Cart.css";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Cart = () => {
  return (
    <div>
      <Nav />
      <div className="cart">
        <h3>장바구니</h3>
        <div className="Allcheck">
          <input type="checkbox" />
          <h4> 전체 선택</h4>
        </div>

        <div>
          <input type="checkbox" />
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
