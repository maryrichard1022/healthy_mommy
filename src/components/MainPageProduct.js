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

  useEffect(() => {
    const queryString = location.search;

    fetch(`${API.product}${queryString}`)
      .then((res) => res.json())
      .then((result) => {
        setProductlist(result.RESULT);
      });
  }, [location.search]);

  // const handleURL = (name) => {
  //   if (urlCategory) {
  //     navigate(`?${categoryString}&${name}`);
  //   }
  // };

  const sortAll = () => {
    const bestAll = `?category=all&?sort_method=-sold`;
    navigate(bestAll);
  };

  const sortSupplements = () => {
    const bestSupplements = `?category=Supplements&?sort_method=-sold`;
    navigate(bestSupplements);
  };

  const sortSportsWear = () => {
    const bestSportsWear = `?category=SportsWear&?sort_method=-sold`;
    navigate(bestSportsWear);
  };

  const sortEquipment = () => {
    const bestEquipment = `?category=fitness_equipment&?sort_method=-sold`;
    navigate(bestEquipment);
  };

  // const switchPage = (page) => {
  //   const offset = (page - 1) * limit;
  //   const queryString = `offset=${offset}&limit=${limit}`;
  //   const categories = "speakers";
  //   const main_category = `main_category=${categories}`;
  //   navigate(`?${main_category}&${queryString}`);
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

      <div className="ProductList">
        {productlist.map((product) => {
          return (
            <div>
              key={product.id}
              image_url={product.image_url}
              name={product.name}
              price={product.price}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MainPageProduct;
