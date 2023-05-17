import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FitnessEquipmentPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";
//import FitnessEquipmentFilterButton from "../components/FitnessEquipmentFilterButton";


const FitnessEquipmentPageProduct = () => {
  const [productlist, setProductlist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category"); 
  let subCategory = "";

  //버튼 누를 때마다 테이블 받아옴
  useEffect(() => {
    let queryString = location.search; //const를 let으로

    if(queryString == ""){
      queryString="?category=fitness_equipment";
    }

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
  const sortEquipAll = () => {
    const equipAll = `?category=fitness_equipment`;
    navigate(equipAll);
  };

  const sortEquipBike = () => {
    const equipBike = `?sub_category=excercise_bike`;
    navigate(equipBike);
  };
  const sortEquipBall = () => {
    const equipBall = `?sub_category=gymball`;
    navigate(equipBall);
  };

  const sortEquipBand = () => {
    const equipBand = `?sub_category=band`;
    navigate(equipBand);
  };

  const sortEquipRoller = () => {
    const equipRoller = `?sub_category=foam_roller`;
    navigate(equipRoller);
  };

  const sortEquipMat = () => {
    const equipMat = `?sub_category=yoga_mat`;
    navigate(equipMat);
  };

  //필터 버튼 누르면 url 바뀌도록
  const sortPriceLow = () => {

    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=fitness_equipment";
    }

    const priceLow = `${subCategory}&sort_method=price`;
    navigate(priceLow);
  };

  const sortPriceHigh = () => {

    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=fitness_equipment";
    }

    const priceHigh = `${subCategory}&sort_method=-price`;
    navigate(priceHigh);
  };

  const sortBestProduct = () => {

    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=fitness_equipment";
    }

    const bestProduct = `${subCategory}&sort_method=id`;
    navigate(bestProduct);
  };

  const sortNewProduct = () => {

    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=fitness_equipment";
    }

    const newProduct = `${subCategory}&sort_method=release_date`;
    navigate(newProduct);
  };

  const movePage = (num) => {
    let subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=fitness_equipment";
    }
    const newPage = `${subCategory}&offset=${num}`;
    navigate(newPage);
  };

  return (
    <div className="FitnessEquipmentPageProduct">
      <div>
        <h1>운동기구</h1>
          <img
          className="FitnessEquipmentBanner"
          alt="FitnessEquipmentBanner"
          src={require("../assets/fitness_equipment.png")} />


    <div className="FitnessEquipmentFilterButton">
      <p>
          <FilterButton onClick={sortEquipAll} text={"전체"} />
          <FilterButton onClick={sortEquipBike} text={"실내사이클"} />
          <FilterButton onClick={sortEquipBall} text={"짐볼"} />
          <FilterButton onClick={sortEquipBand} text={"탄력밴드"} />
          <FilterButton onClick={sortEquipRoller} text={"폼롤러"} />
          <FilterButton onClick={sortEquipMat} text={"요가매트"} />
      </p>
    </div>
        

        <div className="AllFilterButton14">
          <FilterButton onClick={sortPriceLow} text={"가격 낮은 순"} />
          <FilterButton onClick={sortPriceHigh} text={"가격 높은 순"} />
          <FilterButton onClick={sortBestProduct} text={"베스트 순"} />
          <FilterButton onClick={sortNewProduct} text={"최신 순"} />
        </div>
    </div>
      
        <br />

        <div className="ProductListInfo">
        {productlist?.map((product) => (
          <div className="BestProduct">
            {/* 크롤링 테이블 받아오면 src={product.image_url}로 수정 */}
            <img
              alt="product-img"
              src={product.image_url}
              className="product-img"
            ></img>
            <div className="productinfo-cart">
              <div className="productinfo">
                {/* <p> {product.id}</p> */}
                <p className="product-name">{product.name}</p>
                <p className="product-price">{Math.floor(product.price)}원</p>
                {/* <p className="product-sold">sold: {product.sold}</p> */}
              </div>
              <div className="cart-img-box">
              <a href="/Cart"> {/* 장바구니 아이콘 누르면 페이지 이동 */}
                <img
                  alt="cart"
                  src={require("../assets/cart.png")}
                  className="cart-img"
                ></img>
                </a>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>

      <div className="paginataion-group">
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a onClick={() => movePage(0)}>1</a>
          <a className="active" onClick={() => movePage(8)}>2</a>
          <a onClick={() => movePage(16)}>3</a>
          <a href="#">&raquo;</a>
        </div>
      </div>

    </div>
  );
};
export default FitnessEquipmentPageProduct;
