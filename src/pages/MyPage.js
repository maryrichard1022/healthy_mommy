//마이페이지(주문내역조회) 해나가 작업할 부분!!!
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Product from "../components/Product";
import "./MyPage.css";
import API from "../config";
/* import Counter from "../components/Counter"; */

const MyPage = () => {
  const products_sample = [
    {
      id: 1,
      receiver: "명지대큰손",
      order_status: "결제완료",
      order_number: "2023052113552236750100001",
      products: [
        {
          id: 1,
          product_img:
            "https://shopping-phinf.pstatic.net/main_3574061/35740611281.20230503095936.jpg?type=f640",
          product_name: "이고진 더쎈 풀업밴드 20806 옐로우 탄력밴드",
          product_price: "1050.00",
          quantity: 22,
          product_total_price: "23100.00",
        },
      ],
    },
  ]; //dummy data

  const [Productlist, setProductlist] = useState(products_sample);
  const navigate = useNavigate();
  const location = useLocation();

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
        //     setTotalItems(result);
        setProductlist(result.RESULT.orders_list);
        console.log(result.RESULT.orders_list);
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
            </div>

            <div>
              {Productlist?.map((product, index) => (
                <Product key={index} products={product} />
              ))}
            </div>
          </div>
        </div>
        {/*  <h3>   1   </h3> */}
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
