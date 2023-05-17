import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SportsWearPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";
//import SportsWearFilterButton from "../components/SportsWearFilterButton";


const SportsWearPageProduct = () => {
  const [productlist, setProductlist] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category"); 
  let subCategory = "";

  //버튼 누를 때마다 테이블 받아옴
  useEffect(() => {
    let queryString = location.search;

    if(queryString == ""){
      queryString="?category=sportswear";
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
const sortWearAll = () => {
  const wearAll = `?category=sportswear`;
  navigate(wearAll);
};

const sortWearTop = () => {
  const wearTop = `?sub_category=top`;
  navigate(wearTop);
};
const sortWearBottom = () => {
  const wearBottom = `?sub_category=bottom`;
  navigate(wearBottom);
};

//필터 버튼 누르면 url 바뀌도록
const sortPriceLow = () => {
  subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=sportswear";
    }

  const priceLow = `${subCategory}&sort_method=price`;
  navigate(priceLow);
};

const sortPriceHigh = () => {
  subCategory =  location.search;
  if(subCategory == "") {
    subCategory="?category=sportswear";
  }

  const priceHigh = `${subCategory}&sort_method=-price`;
  navigate(priceHigh);
};

const sortBestProduct = () => {
  subCategory =  location.search;
  if(subCategory == "") {
    subCategory="?category=sportswear";
  }

  const bestProduct = `${subCategory}&sort_method=id`;
  navigate(bestProduct);
};

const sortNewProduct = () => {
  subCategory =  location.search;
  if(subCategory == "") {
    subCategory="?category=sportswear";
  }

  const newProduct = `${subCategory}&sort_method=release_date`;
  navigate(newProduct);
};

const movePage = (num) => {
  let subCategory =  location.search;
  if(subCategory == "") {
    subCategory="?category=sportswear";
  }
  const newPage = `${subCategory}&offset=${num}`;
  navigate(newPage);
};

  return (
    <div className="SportsWearPageProduct">
      <div>
        <h1>운동복</h1>
          <img
          className="SportsWearBanner"
          alt="SportsWearBanner"
          src={require("../assets/sportswear.png")} />

    <div className="SportsWearFilterButton">
      <p>
          <FilterButton onClick={sortWearAll} text={"전체"} />
          <FilterButton onClick={sortWearTop} text={"상의"} />
          <FilterButton onClick={sortWearBottom} text={"하의"} />
      </p>
    </div>
        

        <div className="AllFilterButton13">
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
              <a href="/Cart">{/* 장바구니 아이콘 누르면 페이지 이동 */}
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
export default SportsWearPageProduct;