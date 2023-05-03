// 결제중 페이지
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CustomButton from "../components/CustomButton";
import Postcode from "../components/Postcode";

import "./Payment.css";
const Payment = () => {
  const [state, setState] = useState({
    receiver: "",
    midnumber: "",
    lastnumber: "",
    postcodeStreet: "",
    postcodedetail: "",
    accountname: "",
    Bank: "하나은행 123-456-123456",
  });

  const handleChangeState = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //장바구니에 있는 정보 가져옴..

  //버튼 눌렀을 때 작동(console에 state 안 뜸) 안 함--> 추후에 수정할 것
  // 주문하기 버튼 클릭하면 state저장하고 넘어감
  // const handleClick = () => {
  // if(state.receiver.length || state.accountname < 1){
  //   alert("정확한 이름을 입력해주세요")
  //   return;
  // }

  // if (state.midnumber.length || state.lastnumber.legnth < 4) {
  //   alert("정확한 번호를 입력해주세요")
  //   return
  // }
  //   console.log(state);
  //   alert("주문");
  // };
  return (
    <div className="paypage">
      <div className="contentWapper">
        <Nav />
        <h1>주문 / 결제</h1>
        <br />
        <div className="PayInfo">
          <div className="ProductForPay">
            <hr></hr>
            <p className="p-css">주문 상품 정보</p>
            <div className="ProductInfo">
              <span></span>
              <span>상품명</span>
              <span>수량</span>
              <span>상품금액</span>
            </div>

            <h2>총 결제 금액 : 123,456원</h2>
            <hr></hr>
          </div>

          <div className="DeliveryInfo">
            <h4>배송지 정보</h4>

            <tbody>
              <tr className="NameforDeliver">
                <p className="p-css">수령인</p>
                <input
                  name="receiver"
                  value={state.receiver}
                  onChange={handleChangeState}
                  type="text"
                  placeholder="5자 이내로 입력하세요"
                />
              </tr>

              <tr className="NumberforDeliver">
                <p className="p-css">연락처</p>
                <input type="text" value="010" />
                <input
                  name="midnumber"
                  type="text"
                  value={state.midnumber}
                  onChange={handleChangeState}
                />
                <input
                  name="lastnumber"
                  type="text"
                  value={state.lastnumber}
                  onChange={handleChangeState}
                />
              </tr>

              <tr className="AddressforDeliver">
                <p className="p-css">배송지</p>
                <Postcode onChange={handleChangeState} />
              </tr>
            </tbody>
          </div>

          <br></br>
          <h4 className="PatMethodText">결제 수단</h4>
          <div className="PayMethod">
            <div className="PayCash">
              <div className="AccountTransfer">
                <input type="checkbox" />
                <p className="p-css">무통장 입금</p>
              </div>
              <div className="NameforPay">
                <p className="p-css">입금자명</p>
                <input
                  name="accountname"
                  type="text"
                  value={state.accountname}
                  onChange={handleChangeState}
                />
              </div>

              <div className="BankforPay">
                <p className="p-css">입금은행</p>
                <form>
                  <select
                    className="BankSelect"
                    name="Bank"
                    value={state.Bank}
                    onChange={handleChangeState}
                  >
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
                <p>카카오페이</p>
              </div>
              <img
                alt="kakaopay"
                src={require("../assets/kakao_payment.png")}
              />
            </div>
          </div>
          <hr></hr>
          <div className="PayConfirm">
            <p>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
            <div className="Howmuch">
              <h2>총 결제 금액 : 123,456원</h2>

              <Link to={"/PaySuccess"}>
                <CustomButton
                  //onClick={handleClick}
                  className="GotoPay"
                  text={"결제하기"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
