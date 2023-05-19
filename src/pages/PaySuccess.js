//주문 완료 페이지
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import "./PaySuccess.css";
import PayResult from "../components/PayResult";

const PaySuccess = () => {
  // 주문완료 시간 표시
  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var hours = ("0" + today.getHours()).slice(-2);
  var minutes = ("0" + today.getMinutes()).slice(-2);
  var seconds = ("0" + today.getSeconds()).slice(-2);
  var dateString =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  return (
    <div>
      <Nav />
      <div className="PayCheck">
        <div className="PayCheckAlert">
          <img alt="check" src={require("../assets/Paycheck.png")} />
          <p> 주문이 완료되었습니다.</p>
        </div>

        <div className="PayCheckInfo">
          {/* <p>주문번호: {new Date().getTime()}</p> */}
          <p>주문일자: {dateString}</p>
        </div>

        <br />
        <div className="PayCheckButton">
          <Link to={"/MyPage"}>
            <CustomButton text={"주문내역확인"} />
          </Link>

          <Link to={"/"}>
            <CustomButton text={"홈으로"} />
          </Link>
          <PayResult />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaySuccess;
