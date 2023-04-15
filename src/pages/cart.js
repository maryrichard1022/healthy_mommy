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
      <div>
        <h3> 장바구니 페이지 입니다.</h3>
        <Link to={"/Payment"}>
          <CustomButton text={"주문하기"} />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
