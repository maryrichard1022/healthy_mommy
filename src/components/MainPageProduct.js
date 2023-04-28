//메인 페이지, 베스트 물품
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MainPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";

const MainPageProduct = () => {
  // const [totalItems, setTotalItems] = useState(0);
  const [productlist, setProductlist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const urlCategory = params.get("category");
  // const categoryString = `category=${urlCategory}`;

  //url 바뀔 떄 마다 화면 렌더링
  useEffect(() => {
    const queryString = location.search;

    //메인페이지에 띄우는 물품 리스트?
    fetch(`${API.main}${queryString}`)
      .then((res) => res.json())
      .then((result) => {
        // setTotalItems(result);
        setProductlist(result.result);
        console.log(result);
      });
    console.log(1);
  }, [location.search]);

  //필터 버튼 누르면 url 바뀌도록
  const sortAll = () => {
    const bestAll = `?sort_method=-sold`;
    navigate(bestAll);
  };

  const sortSupplements = () => {
    const bestSupplements = `?category=supplements&?sort_method=-sold`;
    navigate(bestSupplements);
  };
  const sortSportsWear = () => {
    const bestSportsWear = `?category=sportswear&?sort_method=-sold`;
    navigate(bestSportsWear);
  };

  const sortEquipment = () => {
    const bestEquipment = `?category=fitness_equipment&?sort_method=-sold`;
    navigate(bestEquipment);
  };

  //물품 눌렀을 때 해당 상세 페이지로 이동
  // const goToDetail = () => {
  //   navigate(`/productdetail/${id}`);
  // };

  return (
    <div className="MainPageProduct">
      <div>
        <h1>BEST PRODUCT</h1>
        <div className="MainFilterButton">
          <FilterButton onClick={sortAll} text={"ALL"} />
          <FilterButton onClick={sortSupplements} text={"영양제"} />
          <FilterButton onClick={sortSportsWear} text={"운동복"} />
          <FilterButton onClick={sortEquipment} text={"운동기구"} />
        </div>
      </div>

      <div className="subBanner">
        {/* <img alt="banner" src={require("../assets/banner5.jpg")} /> */}
        <h4>이미지 준비중</h4>
      </div>
      {/* 
      url에 해당하는 물품리스트 8개 보여주도록 함. */}

      {productlist?.map((product) => (
        <div className="ProductListInfo">
          <p>이미지{product.image_url}</p>
          <h4>상품명{product.name}</h4>
          <p>가격{product.price}</p>
          <p>판매{product.sold}</p>
        </div>
      ))}
    </div>
  );
};
export default MainPageProduct;
