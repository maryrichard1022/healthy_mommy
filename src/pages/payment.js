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
        <h2>주문 / 결제</h2>
        <br />
        <div className="PayInfo">
          <div className="ProductForPay">
            <hr></hr>
            <p>주문할 상품 리스트</p>
          </div>
          <hr></hr>
          <div className="DeliveryInfo">
            <h4>배송지 정보</h4>
            <div className=" DeliverInfoDetail">
              <div className="DeliverInfoDetailAlign">
                <p>수령인</p>
                <input type="text" placeholder="5자 이내로 입력하세요" />
              </div>

              <div className="DeliverInfoDetailAlign">
                <p>연락처</p>
                <input type="text" />
                -
                <input type="text" />
                -
                <input type="text" />
              </div>

              <div className="DeliverInfoDetailAlign">
                <p>주소</p>
              </div>
            </div>
          </div>

          <div className="PayMethod">
            <h4>결제 수단</h4>
            <div className="DeliverInfoDetailAlign">
              <input type="checkbox" />
              <p>카카오페이</p>
              <input type="checkbox" />
              <p>무통장 입금</p>
            </div>
            <div className="DeliverInfoDetailAlign">
              <p>입금자명</p>
              <input type="text" />
            </div>
            <div className="DeliverInfoDetailAlign">
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

          <div className="Howmuch">
            <h2> 총 결제 금액</h2>
          </div>
        </div>
        <Link to={"/PaySucess"}>
          <CustomButton text={"결제하기"} />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
