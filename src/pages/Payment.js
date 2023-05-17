// 결제중 페이지
import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Postcode from "../components/Postcode";
import API from "../config";
import "./Payment.css";
import PayReady from "../components/PayReady";
const Payment = () => {
  const access_token = sessionStorage.getItem("access_token");
  // const navigate = useNavigate();
  const [items, setItems] = useState([]);

  //주문 상품 정보 띄우기 위해 getItems
  const getItems = async () => {
    const response = await fetch(API.cart, {
      headers: {
        Authorization: access_token,
      },
    });
    const result = await response.json();
    setItems(result.cart);
  };
  useEffect(() => {
    // if (!access_token) {
    //   alert("로그인 해주세요.");
    //   navigate("/Login");
    //   return;
    // }
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //총 상품 가격 (reduce 배열 순회, 값 누적하여 하나의 값으로 반환)
  const totalPrice = items.reduce((previousValue, currentValue) => {
    return (
      parseInt(previousValue) +
      parseInt(currentValue.price * currentValue.quantity)
    );
  }, 0);

  //배송지 정보 저장
  const [state, setState] = useState({
    receiver: "",
    midnumber: "",
    lastnumber: "",
    postcodeStreet: "",
    postcodedetail: "",
  });

  //배송지 정보 저장
  const handleChangeState = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //결제 하기 누르면 카카오 페이 실행 되게
  const [stateButton, setStateButton] = useState(false);

  // 주문하기 버튼 클릭하면 state저장하고 넘어감
  const handleClick = () => {
    if (state.receiver.length < 1 || state.receiver.length > 5) {
      alert("정확한 이름을 입력해주세요");
      return;
    }

    if (state.midnumber.length < 1 || state.lastnumber.length < 4) {
      alert("정확한 번호를 입력해주세요");
      return;
    }
    console.log(state);
    setStateButton(true);
    //백에 POST로 배송지 정보 넘겨주고
    //alert("주문");
  };
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
            <div className="CartProductList">
              {items.map((items) => (
                <div className="BestProduct">
                  <img alt="product-img" src={items.image_url}></img>
                  <p>{items.name}</p>
                  <span>{items.quantity}</span>
                  <div>{`₩${(
                    items.price * items.quantity
                  ).toLocaleString()}`}</div>
                </div>
              ))}
            </div>
            <h2>총 결제 금액 : {totalPrice.toLocaleString()} 원</h2>
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

                <Postcode handleChangeState={handleChangeState} state={state} />
              </tr>
            </tbody>
          </div>

          <br></br>
          <h4 className="PatMethodText">결제 수단</h4>
          <div className="PayMethod">
            {/* <div className="PayCash">
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
            </div> */}

            <div className="PayByKakaopay">
              <div className="Kakaomoney">
                {/* <input type="checkbox" /> */}
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
              <h2>총 결제 금액 : {totalPrice.toLocaleString()} 원</h2>
              {/*               
            결제하기 버튼 누르면+ 주문자 정보 넘김(handleClick).+ 카카오페이로 값 전달 */}
              <button onClick={handleClick} className="CustomButton">
                주문하기
              </button>
              <PayReady stateButton={stateButton} totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
