import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../config";
import "./Product.css";
import axios from "axios";

function Product({ products }) {
  const navigate = useNavigate();

  console.log(products);
  const order_list = products.products;
  let sum_price = 0;
  order_list.forEach((order) => {
    sum_price += Number(order.product_total_price);
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const PayCancel = () => {
    const params = {
      cid: "TC0ONETIME",
      tid: products.tid,
      cancel_amount: sum_price,
      cancel_tax_free_amount: 0,
    };
    axios({
      url: "https://kapi.kakao.com/v1/payment/cancel",
      Host: "kapi.kakao.com",
      method: "POST",
      headers: {
        Authorization: "KakaoAK de0e3076b485b703b1f1a4a2419440e6",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleDeleteOrder = (orderId) => {
    const kakao_id = sessionStorage.getItem("kakao_id");
    if (!kakao_id) {
      alert("로그인 해주세요.");
      navigate("/Login");
      return;
    }

    fetch(API.order, {
      method: "PATCH",
      headers: {
        Authorization: kakao_id,
      },
      body: JSON.stringify({
        order_id: orderId,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        if (result.message === "CANCEL_ORDER") {
          alert("주문 취소되었습니다.");
          PayCancel();
          setTimeout(1000);
          window.location.replace("/MyPage");
        }
      })
      .catch((error) => {
        console.error("Error deleting item from Mypage:", error);
      });
  };

  return (
    <div>
      <div className="product">
        <div className="OrderDetail" onClick={toggleDetails}>
          <span className="OrderNumber">{products.order_number}</span>
          <span>
            <img
              className="OrderImg"
              alt="order"
              src={products.products[0]?.product_img}
            />
          </span>
          <span className="OrderName1">
            {products.products[0]?.product_name}{" "}
            {products.products.length === 1
              ? ""
              : "외 " + (products.products.length - 1) + "개"}
          </span>
          <span className="OrderPrice">
            {sum_price.toLocaleString("ko-KR") + "원"}
          </span>
          <span className="OrderCounter">
            {products.order_status === "결제취소" ? (
              <div className="redText">{products.order_status}</div>
            ) : (
              products.order_status
            )}
            <br />
            {products.order_status === "결제완료" ? (
              <button
                className="productCustomButton "
                onClick={(event) => {
                  event.stopPropagation();
                  handleDeleteOrder(products.order_id);
                }}
              >
                결제취소
              </button>
            ) : (
              ""
            )}
          </span>
          <span className="right-margin"></span>
        </div>

      <div className="ForBox">
        <div className={`product-details ${isOpen ? "show" : ""}`}>
          <div className="OrderDetail1 OrderInCartInfo1">
            <span className="OrderName">상품정보</span>
            <span className="OrderImg"></span>
            <span className="OrderPrice">상품금액</span>
            <span className="OrderCounter">수량</span>
            <span className="OrderCounter">총금액</span>
            {/* <span className="right-margin"></span> */}
          </div>
          {order_list.map((order, index) => (
            <div className="product">
              <div className="OrderDetail1">
                <span className="OrderName2">
                <a
                href={"/Detail/?id=" + order.product_id}
                style={{ color: "grey", textDecoration: "none" }}
                >{order.product_name}
                </a>
                </span>
                <span>
                <a
                href={"/Detail/?id=" + order.product_id}
                style={{ color: "black", textDecoration: "none" }}
                >
                  <img
                    className="OrderImg1"
                    alt="order"
                    src={order.product_img}
                  />
                  </a>
                </span>
                <span className="OrderPrice1">
                  {Number(order.product_price).toLocaleString("ko-KR") + "원"}
                </span>
                <span className="OrderCounter1">{order.quantity}</span>
                <span className="OrderCounter1">
                  {Number(order.product_total_price).toLocaleString("ko-KR") +
                    "원"}
                </span>
                {/* <span className="right-margin"></span> */}
              </div>
            </div>
          ))}

        <ui className="product-information">
          <hr/>
          <p className="OrderInformation"><strong>배송지정보</strong></p>
          <p><strong>수령인</strong> <span className="OrderReceiveAddr">{products.receiver}</span></p>
          <p />
          <p><strong>배송지</strong> <span className="OrderReceiveAddr">{products.address}</span></p>
        </ui>
        </div>
        {/* <hr /> */}
      </div>
      <br />
    </div>
    </div>
  );
}

export default Product;
