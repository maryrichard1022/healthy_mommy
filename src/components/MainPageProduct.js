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
  const params = new URLSearchParams(location.search);
  // const urlCategory = params.get("category");
  // const categoryString = `category=${urlCategory}`;

  //url 바뀔 떄 마다 화면 렌더링
  useEffect(() => {
    const queryString = location.search;

    fetch(`${API.product}${queryString}`)
      .then((res) => res.json())
      .then((result) => {
        // setTotalItems(result);
        setProductlist(result.RESULT);
      });
  }, [location.search]);

  //필터 버튼 누르면 url 바뀌도록
  const sortAll = () => {
    const bestAll = `?category=all&?sort_method=-sold&?offset=0`;
    navigate(bestAll);
  };

  const sortSupplements = () => {
    const bestSupplements = `?category=Supplements&?sort_method=-sold&?offset=0`;
    navigate(bestSupplements);
  };

  const sortSportsWear = () => {
    const bestSportsWear = `?category=SportsWear&?sort_method=-sold&?offset=0`;
    navigate(bestSportsWear);
  };

  const sortEquipment = () => {
    const bestEquipment = `?category=fitness_equipment&?sort_method=-sold&?offset=0`;
    navigate(bestEquipment);
  };

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
      <div className="ProductList">
        {productlist.map((product) => {
          return (
            <div className="ProductListInfo">
              {/* {product.id} */}
              <img>{product.image_url}</img>
              <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MainPageProduct;
