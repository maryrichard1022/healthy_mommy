// 장바구니
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Counter from "../components/Counter";
import "./Cart.css";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Cart = () => {
  return (
    <div className="cart">
      <Nav />
      <div className="contentWrapper">
        <h1> 장바구니 </h1>

        <div className="CartInfo">
          <div className="ProductInCart">
            <hr></hr>
            <div className="ProductInCartInfo">
              <input type="checkbox" />
              <span>전체선택</span>
              <span>상품이름</span>
              <span>수량</span>
              <span>상품금액</span>
            </div>

            <div className="ProductDetail">
              <input type="checkbox" />
              <span>
                <img className="Productimg" />
              </span>
              <span>마그네슘 500mg 180정</span>
              <span className="Counter">
                <Counter />
              </span>

              <span className="ProductPrice"> 00,000원</span>
              <span>
                <button
                  className="RemoveButton"
                  onClick={() =>
                    window.confirm("장바구니에서 삭제하시겠습니까?")
                  }
                >
                  X
                </button>
              </span>
            </div>
            <hr></hr>
          </div>
        </div>

        <div className="TotalPrice">
          <h2>총 결제 금액 : 123,456원</h2>
          <Link to={"/Payment"}>
            <CustomButton text={"주문하기"} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
