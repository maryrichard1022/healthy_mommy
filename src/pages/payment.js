// 결제중 페이지
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CustomButton from "../components/CustomButton";
import Postcode from "../components/Postcode";

import "./Payment.css";
const Payment = () => {
  return (
    <div className="paypage">
      <div className="contentWapper">
        <Nav />
        <h1>주문 / 결제</h1>
        <br />
        <div className="PayInfo">
          <div className="ProductForPay">
            <hr></hr>
            <p>주문할 상품 리스트</p>
            <h2>총 결제 금액 : !@#!@$원</h2>
          </div>
          <hr></hr>

          <div className="DeliveryInfo">
            <h4>배송지 정보</h4>

            <tbody>
              <tr className="NameforDeliver">
                <p>수령인</p>
                <input type="text" placeholder="5자 이내로 입력하세요" />
              </tr>

              <tr className="NumberforDeliver">
                <p>연락처</p>
                <input type="text" value="010" />
                <input type="text" />
                <input type="text" />
              </tr>

              <tr className="AddressforDeliver">
                <p>배송지</p>
                <Postcode />
              </tr>
            </tbody>
          </div>
          <br></br>
          <h4>결제 수단</h4>
          <div className="PayMethod">
            <div className="PayCash">
              <div className="AccountTransfer">
                <input type="checkbox" />
                <p>무통장 입금</p>
              </div>
              <div className="NameforPay">
                <p>입금자명</p>
                <input type="text" />
              </div>

              <div className="BankforPay">
                <p>입금은행</p>
                <form>
                  <select name="Bank">
                    <option value="none">--- 선택 ---</option>
                    <option value="Bank1">하나은행 123-456-123456</option>
                    <option value="Bank2">국민은행 123-456-123456</option>
                    <option value="Bank3">신한은행 123-456-123456</option>
                    <option value="Bank4">카카오뱅크 123-456-123456</option>
                  </select>
                </form>
              </div>
            </div>

            <div className="PayByKakaopay">
              <div className="Kakaomoney">
                <input type="checkbox" />
                <p>카카오 페이</p>
              </div>
              <img
                alt="kakaopay"
                src={require("../assets/kakao_payment.png")}
              />
            </div>
          </div>

          <div className="Howmuch">
            <h2> 총 결제 금액 : !@#!@$원</h2>

            <Link to={"/PaySuccess"}>
              <CustomButton className="GotoPay" text={"결제하기"} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
