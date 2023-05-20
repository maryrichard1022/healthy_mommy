// 결제중 페이지
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Postcode from "../components/Postcode";
import API from "../config";
import "./Payment.css";
import PayReady from "../components/PayReady";
const Payment = () => {
  const kakao_id = sessionStorage.getItem("kakao_id");
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  //결제 하기 누르면 카카오 페이 실행 되게
  const [stateButton, setStateButton] = useState(false);
  const [stateTid, setStateTid] = useState(false);
  //주문 상품 정보 띄우기 위해 getItems
  const getItems = async () => {
    const response = await fetch(API.cart, {
      headers: {
        Authorization: kakao_id,
      },
    });
    const result = await response.json();
    setItems(result.cart);
    console.log("items : " + items);
    console.log("getItems :" + result.message);
    console.log("cart:" + result.cart.map((item) => item.id));
  };

  useEffect(() => {
    if (!kakao_id) {
      alert("로그인 해주세요.");
      navigate("/Login");
      return;
    }
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
    tid: "",
  });

  //배송지 정보 저장
  const handleChangeState = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 주문하기 버튼 클릭하면 tid받고, 주문POST하고,  카카오톡으로 넘어감
  const handleClick = (id) => {
    //`const selectedId = items.findIndex((item) => item?.id === id);

    if (state.receiver.length < 1 || state.receiver.length > 5) {
      alert("정확한 이름을 입력해주세요.");
      return;
    }

    if (state.midnumber.length < 1 || state.lastnumber.length > 4) {
      alert("정확한 번호를 입력해주세요.");
      return;
    }

    if (state.postcodedetail.length < 1 || state.postcodedetail.length > 10) {
      alert("정확한 주소를 입력해주세요.");
      return;
    }
    console.log("배송지 정보" + state);

    //PayReady
    //백에 POST로 배송지 정보 넘겨주고 카카오 페이 실행
    fetch(API.neworder, {
      method: "POST",
      headers: {
        Authorization: kakao_id,
      },
      body: JSON.stringify({
        receiver: state.receiver,
        address: state.postcodeStreet + state.postcodedetail,
        cart_ids: items.map((item) => item.id),
        tid: state.tid,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        console.log("cart_ids :" + items.map((item) => item.id));
        console.log(state.tid);
        if (result.message === "NEW_ORDER_CREATED") {
          setStateTid(true);
          setStateButton(true);
        }
        // 상태메세지 확인
      });

    // setStateButton(true);
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
              <span> </span>
              <span>상품명</span>
              <span>수량</span>
              <span>총 상품금액</span>
            </div>
            <div className="CartProductList">
              {items?.map((item, index) => (
                <div className="cart-item">
                  <img
                    className="cart-row-img"
                    alt="product-img"
                    src={item.image_url}
                  ></img>
                  <p className="cart-info-name">{item.product_name}</p>
                  <span>{item.quantity}</span>
                  <div className="cart-info-price">{`₩${(
                    item.price * item.quantity
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
              <PayReady
                stateButton={stateButton}
                stateTid={stateTid}
                totalPrice={totalPrice}
                state={state}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
