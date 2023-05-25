import { useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import API from "../config";
import "./Product.css";

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
          location.reload();
          alert("주문 취소되었습니다.");        
        }})
      .catch((error) => {
        console.error("Error deleting item from Mypage:", error);
    
      });
  };

  return (
    <div>
      <div className="product">
        <div className="OrderDetail" onClick={toggleDetails}>
          <span className="OrderNumber">{products.order_number}</span>
          <span >
            <img className="OrderImg" alt="order" src={products.products[0].product_img}/>
          </span>
          <span className="OrderName">{products.products[0].product_name }  {products.products.length === 1 ? "" : "외 " + (products.products.length-1) + "개" }</span>
          <span className="OrderPrice">{sum_price.toLocaleString('ko-KR')+"원"}</span>
          <span className="OrderCounter"> {products.order_status === "결제취소" ? <div className="redText">{products.order_status}</div>: products.order_status} {products.order_status === "결제완료" ? <button className="productCustomButton " onClick={() => handleDeleteOrder(products.id)}>주문취소</button> : ""} </span>

        </div>

        <div className={`product-details ${isOpen ? "show" : ""}`}>
        
    
              {order_list.map((order, index) => (
                <div className="OrderDetail">
                <span className="OrderName">{order.product_name}</span>
                <span >
                  <img className="OrderImg" alt="order" src={order.product_img}/>
              </span>
                <span className="OrderPrice">{Number(order.product_price).toLocaleString('ko-KR')+"원"}</span>
                <span className="OrderCounter">{order.quantity}</span>
                <span className="OrderCounter">{Number(order.product_total_price).toLocaleString('ko-KR')+"원"}</span>
             </div>
              ))}
            

        </div>
        <hr />
      </div>
      <br/>
    </div>  
    
  );
}

export default Product;
