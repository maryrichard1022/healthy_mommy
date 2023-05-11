import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FitnessEquipmentPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";
import FitnessEquipmentFilterButton from "../components/FitnessEquipmentFilterButton";


const FitnessEquipmentPageProduct = () => {
  const [productlist, setProductlist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category"); 

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

  return (
    <div className="FitnessEquipmentPageProduct">
      <div>
        <h1>운동기구</h1>
          <img
          className="FitnessEquipmentBanner"
          alt="FitnessEquipmentBanner"
          src={require("../assets/banner2.jpg")} />

<FitnessEquipmentFilterButton />
        

        <div className="AllFilterButton">
          <FilterButton onClick={""} text={"가격 낮은 순"} />
          <FilterButton onClick={""} text={"가격 높은 순"} />
          <FilterButton onClick={""} text={"인기 많은 순"} />
          <FilterButton onClick={""} text={"최신 순"} />
        </div>
    </div>
      
        <br />

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
export default FitnessEquipmentPageProduct;
