import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AllPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";

const AllPageProduct = () => {
  const [productlist, setProductlist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category"); 
  // const categoryString = `category=${urlCategory}`;

  //url 바뀔 떄 마다 화면 렌더링

  //마운트 되자마자 all을 띄우도록 함
  /* useEffect(() => {
    sortBestAll(); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  /* }, []); */

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
/*   const sortBestAll = () => {
    const bestAll = `?sort_method=-sold`;
    navigate(bestAll);
  };

  const sortBestSupplements = () => {
    const bestSupplements = `?category=supplements&sort_method=-sold`;
    navigate(bestSupplements);
  };
  const sortBestSportsWear = () => {
    const bestSportsWear = `?category=sportswear&sort_method=-sold`;
    navigate(bestSportsWear);
  };

  const sortBestEquipment = () => {
    const bestEquipment = `?category=fitness_equipment&sort_method=-sold`;
    navigate(bestEquipment);
  }; */

  return (
    <div className="AllPageProduct">
      <div>
        <h1>All</h1>
          <img
          className="AllBanner"
          alt="AllBanner"
          src={require("../assets/All.png")} />
        

        <div className="AllFilterButton">
          <FilterButton onClick={""} text={"가격 낮은 순"} />
          <FilterButton onClick={""} text={"가격 높은 순"} />
          <FilterButton onClick={""} text={"인기 많은 순"} />
          <FilterButton onClick={""} text={"최신 순"} />
        </div>
      </div>
        <br />
      {/*<div className="subBanner"> */}
      {/* <img
        className="subBanner"
        alt="banner"
        src={require("../assets/banner5.jpg")}
      /> */}
      {/*  </div> */}

      <br />
      {/* <div className="datacheck"> */}
        {/* <h4>가데이터 API 연동 및 정렬 확인</h4> */}
        {/* 카테고리 2x4 위에 나타냄 */}
        {/* <h4 className="category-name">
          {urlCategory === "supplements"
            ? "영양제"
            : urlCategory === "sportswear"
            ? "운동복"
            : urlCategory === "fitness_equipment"
            ? "운동기구"
            : "ALL"}
        </h4> */}

        {/* 장바구니 아이콘 누르면 해당 상품의 id값 장바구니에 추가 */}
      {/* </div> */}
      <div className="ProductListInfo">
        {productlist?.map((product) => (
          <div className="BestProduct">
            {/* 크롤링 테이블 받아오면 src={product.image_url}로 수정 */}
            <img
              alt="product-img"
              src={require("../assets/url_img.png")}
              className="product-img"
            ></img>
            <div className="productinfo-cart">
              <div className="productinfo">
                {/* <p> {product.id}</p> */}
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price * 1000 + "원"}</p>
                {/* <p className="product-sold">sold: {product.sold}</p> */}
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
export default AllPageProduct;
