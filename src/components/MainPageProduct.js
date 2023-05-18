//메인 페이지, 베스트 물품
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MainPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";

const MainPageProduct = () => {
  const [productlist, setProductlist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category");
  // const categoryString = `category=${urlCategory}`;

  //url 바뀔 떄 마다 화면 렌더링

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

  //필터 버튼 누르면 url 바뀌도록
  const sortNewAll = () => {
    const NewAll = `?sort_method=-release_date`;
    navigate(NewAll);
  };

  const sortNewSupplements = () => {
    const NewSupplements = `?category=supplements&sort_method=-release_date`;
    navigate(NewSupplements);
  };
  const sortNewSportsWear = () => {
    const NewSportsWear = `?category=sportswear&sort_method=-release_date`;
    navigate(NewSportsWear);
  };

  const sortNewEquipment = () => {
    const NewEquipment = `?category=fitness_equipment&sort_method=-release_date`;
    navigate(NewEquipment);
  };

  return (
    <div className="MainPageProduct">
      <div>
        <h2>NEW PRODUCT</h2>
        <div className="MainFilterButton">
          <FilterButton onClick={sortNewAll} text={"ALL"} />
          <FilterButton onClick={sortNewSupplements} text={"영양제"} />
          <FilterButton onClick={sortNewSportsWear} text={"운동복"} />
          <FilterButton onClick={sortNewEquipment} text={"운동기구"} />
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
      <div className="ProductListInfo">
        {productlist?.map((product) => (
          <div className="BestProduct">
            <img
              alt="product-img"
              src={product.image_url}
              className="product-img"
            ></img>
            <div className="productinfo-cart">
              <div className="productinfo">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{Math.floor(product.price)}원</p>
              </div>
              <div className="cart-img-box">
                <img
                  alt="cart"
                  src={require("../assets/cart.png")}
                  className="cart-img"
                ></img>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainPageProduct;
