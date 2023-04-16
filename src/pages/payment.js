// 결제중 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Payment.css";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Payment = () => {
  return (
    <div>
      <Nav />
      <div className="paypage">
        <h3> 결제 페이지입니다.</h3>
        <Link to={"/PaySucess"}>
          <CustomButton text={"결제하기"} />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
