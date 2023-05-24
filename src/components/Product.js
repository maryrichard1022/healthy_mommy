import { useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import API from "../config";

function Product({products}) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(products)
  const order_list = products.products;
  let sum_price = 0;
  order_list.forEach(order => {
    sum_price += Number(order.product_total_price)
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteOrder = (orderId) => {
    const kakao_id = sessionStorage.getItem("kakao_id");
    if (!kakao_id) {
      alert("로그인이 필요합니다.");
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
          
        }})
      .catch((error) => {
        console.error("Error deleting item from Mypage:", error);
        alert("주문을 취소할 수 없습니다.");
      });
  };

  return (
    <div>
      <div className="product">
        <div className="OrderDetail" onClick={toggleDetails}>
          <span>{products.order_number}</span>
          <span>
            <img alt="order" className="Orderimg" src={products.products[0].product_img}/>
          </span>
          <span className="OrderName">{products.products[0].product_name + " 외 " + (products.products.length - 1) + "개"}</span>
          <span className="OrderPrice">{sum_price.toLocaleString('ko-KR')+"원"}</span>
          <span className="OrderCounter"> {products.order_status} {products.order_status === "결제완료" ? <button onClick={() => handleDeleteOrder(products.id)}>주문취소</button> : ""} </span>
          
        </div>

        <div className={`product-details ${isOpen ? "show" : ""}`}>
          <span className="OrderName">
            <ul>
              {order_list.map((order, index) => (
                <li>
                <span className="OrderName">{order.product_name}</span>
                <span className="OrderPrice">{Number(order.product_price).toLocaleString('ko-KR')+"원"}</span>
                <span className="OrderCounter">{order.quantity}</span>
                <span className="OrderCounter">{Number(order.product_total_price).toLocaleString('ko-KR')+"원"}</span>
                </li>
              ))}
            </ul>
          </span>
        </div>
        <hr />
      </div>
    </div>  
  );
}

export default Product;
