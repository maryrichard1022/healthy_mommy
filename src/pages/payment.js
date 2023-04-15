import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <Nav />
      <div>
        <h3> 결제 페이지 입니다.</h3>
        <Link to={"/PaySucess"}>
          <button class="gotoPaySucessbutton"> 주문하기 </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
