//메인 페이지, 베스트 물품
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MainPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";

const MainPageProduct = () => {
  const [productlist, setProductlist] = useState([]);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category");

  //마운트 되자마자 all을 띄우도록 함
  useEffect(() => {
    sortNewAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //버튼 누를 때마다 테이블 받아옴
  useEffect(() => {
    const queryString = location.search;

    //메인페이지에 띄우는 물품 리스트 정보 가져옴
    fetch(`${API.main}${queryString}`)
      .then((res) => res.json())
      .then((result) => {
        //     setTotalItems(result);
        setProductlist(result.result);
        console.log(result);
      });
  }, [location.search]);

  const handleAddToCart = (product) => {
    const kakao_id = sessionStorage.getItem("kakao_id");
    //console.log(kakao_id);
    if (!kakao_id) {
      alert("로그인이 필요합니다.");
      navigate("/Login");
      return;
    }

    fetch(API.cart, {
      method: "POST",
      headers: {
        Authorization: kakao_id,
      },
      body: JSON.stringify({
        product_id: product.id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        if (result.message === "CART_QUANTITY_CHANGED") {
          alert("장바구니에 수량 추가되었습니다.");
        } else if (result.message === "PUT_IN_CART_SUCCESS") {
          alert("장바구니에 상품 추가되었습니다.");
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        alert("장바구니에 상품을 추가할 수 없습니다.");
      });
  };

  //필터 버튼 누르면 url 바뀌도록
  const sortNewAll = () => {
    const NewAll = `?sort_method=-release_date`;
    setActiveFilter("ALL");
    navigate(NewAll);
  };

  const sortNewSupplements = () => {
    const NewSupplements = `?category=supplements&sort_method=-release_date`;
    setActiveFilter("영양제");
    navigate(NewSupplements);
  };
  const sortNewSportsWear = () => {
    const NewSportsWear = `?category=sportswear&sort_method=-release_date`;
    setActiveFilter("운동복");
    navigate(NewSportsWear);
  };

  const sortNewEquipment = () => {
    const NewEquipment = `?category=fitness_equipment&sort_method=-release_date`;
    setActiveFilter("운동기구");
    navigate(NewEquipment);
  };

  return (
    <div className="MainPageProduct">
      <div>
        <h2>NEW PRODUCT</h2>
        <div className="MainFilterButton">
          <FilterButton
            onClick={sortNewAll}
            text={"ALL"}
            isActive={activeFilter === "ALL"}
          />
          <FilterButton
            onClick={sortNewSupplements}
            text={"영양제"}
            isActive={activeFilter === "영양제"}
          />
          <FilterButton
            onClick={sortNewSportsWear}
            text={"운동복"}
            isActive={activeFilter === "운동복"}
          />
          <FilterButton
            onClick={sortNewEquipment}
            text={"운동기구"}
            isActive={activeFilter === "운동기구"}
          />
        </div>
      </div>

      <img
        className="subBanner"
        alt="banner"
        src={require("../assets/banner5.jpg")}
      />

      <br />
      <div className="datacheck">
        {/* <h4>가데이터 API 연동 및 정렬 확인</h4> */}
        {/* 카테고리 2x4 위에 나타냄 */}
        <h4 className="category-name">
          {urlCategory === "supplements"
            ? "영양제"
            : urlCategory === "sportswear"
            ? "운동복"
            : urlCategory === "fitness_equipment"
            ? "운동기구"
            : "ALL"}
        </h4>

        {/* 장바구니 아이콘 누르면 해당 상품의 id값 장바구니에 추가 */}
      </div>
      <div className="PageProductList">
        <div className="ProductListInfo">
          {productlist?.map((product) => (
            <a href={"/Detail/?id=" + product.id}>
              <div className="BestProduct">
                <img
                  alt="product-img"
                  src={product.image_url}
                  className="product-img"
                ></img>
                <div className="productinfo-cart">
                  <div className="productinfo">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">
                      {Math.floor(product.price)}원
                    </p>
                  </div>
                  <div className="cart-img-box">
                    <img
                      alt="cart"
                      src={require("../assets/cart.png")}
                      className="cart-img"
                      onClick={() => {
                        handleAddToCart(product);
                      }}
                    ></img>
                  </div>
                </div>
                <br />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainPageProduct;
