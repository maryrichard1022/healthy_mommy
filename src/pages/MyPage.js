//마이페이지(주문내역조회)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Product from "../components/Product";
import "./MyPage.css";
import API from "../config";

const MyPage = () => {
  const products_sample = [
    {
      order_id: 1,
      receiver: "명지대큰손",
      address: "경기 용인시 처인구 명지로 116 (남동, 명지대학교용인캠퍼스)5공학관",
      order_status: "결제완료",
      order_number: "2023052708275345722600001",
      products: [
        {
          order_product_id: 1,
          product_id: 36,
          product_img: "https://shopping-phinf.pstatic.net/main_3534345/35343453633.20221020175440.jpg?type=f640",
          product_name: "해외나우푸드 칼슘 앤 마그네슘 250정",
          product_price: "19550.00",
          quantity: 1,
          product_total_price: "19550.00"
        },
      ],
    },
  ]; //dummy data

  const [Productlist, setProductlist] = useState(products_sample);
  const navigate = useNavigate();

  useEffect(() => {
    const kakao_id = sessionStorage.getItem("kakao_id");
    if (!kakao_id) {
      alert("로그인이 필요합니다.");
      navigate("/Login");
      return;
    }

    fetch(`${API.order}`, {
      method: "GET",
      headers: {
        Authorization: kakao_id,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.RESULT.orders_list);
        const sortedOrders = result.RESULT.orders_list.sort(
          (a, b) => b.order_id - a.order_id
        );
        setProductlist(sortedOrders);
      });
  }, []);

  return (
    <div className="mypage">
      <div className="contentWrapper">
        <Nav />

        <h1> 주문내역조회 </h1>

        <div className="MyPageInfo">
          <div className="product">
            <hr />
            <div className="OrderDetail OrderInCartInfo">
              <span className="OrderNumber">주문번호</span>
              <span className="OrderImg"></span>
              <span className="OrderName">상품정보</span>
              <span className="OrderPrice">상품구매금액</span>
              <span className="OrderCounter">결제상태</span>
              {/* <span className="right-margin"></span> */}
            </div>

            <div>
              {Productlist?.map((product, index) => (
                <Product key={index} products={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
