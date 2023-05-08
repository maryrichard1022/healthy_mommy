//마이페이지(주문내역조회) 해나가 작업할 부분!!!
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Product from "../components/Product";
import "./MyPage.css";
/* import Counter from "../components/Counter"; */

const MyPage = () => {
  const products = [
    { orderid: '230501-000001', ordername: '마그네슘 500mg 180정', ordercounter: '1', orderprice: '20,000원', ordernames: ['마그네슘 500mg 180정','마그네슘 500mg 200정','마그네슘 500mg 300정']},
    { orderid: '230501-000002', ordername: '마그네슘 500mg 180정', ordercounter: '1', orderprice: '20,000원', ordernames: ['마그네슘 500mg 180정','마그네슘 500mg 200정','마그네슘 500mg 300정']},
    
  ];


  return (
    <div className="mypage">
      <div className="contentWrapper">
        <Nav />
        
          <h1> 주문내역조회 </h1>
        
        <div className="MyPageInfo">
          <div className="OrderInCart">
          <hr />
          <div className="OrderInCartInfo">
            <span>주문번호</span>
            <span>이미지</span>
            <span>상품정보</span>
            <span>수량</span>
            <span>상품구매금액</span>
            
          </div>

          <div>
      {products.map((product, index) => (
        <Product key={index} orderid={product.orderid} ordername={product.ordername} ordercounter={product.ordercounter} orderprice={product.orderprice} ordernames={product.ordernames}/>
      ))}
    </div>
          </div>
        </div>
        <h3>   1   </h3>

      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
