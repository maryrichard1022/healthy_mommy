//마이페이지(주문내역조회) 해나가 작업할 부분!!!
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./MyPage.css";
/* import Counter from "../components/Counter"; */

const MyPage = () => {
  return (
    <div className="mypage">
      <div className="contentWrapper">
        <Nav />
        
          <h1> 주문내역조회 </h1>
        
        <div className="MyPageInfo">
          <div className="OrderInCart">
          <hr />
          <div className="OrderInCartInfo">
            <span>주문일자[주문번호]</span>
            <span>이미지</span>
            <span>상품정보</span>
            <span>수량</span>
            <span>상품구매금액</span>
            
          </div>

          <div className="OrderDetail">
              <span>
                20230501[230501-000001]
              </span>
              <span>
                <img alt="order" className="Orderimg" />
              </span>
              <span className="OrderName">마그네슘 500mg 180정</span>
              <span className="OrderCounter">
                1
              </span>
              <span className="OrderPrice"> 20,000원</span>
          </div>
          <hr />
          </div>
        </div>

        <h3>   1   </h3>

      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
