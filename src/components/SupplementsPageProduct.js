import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SupplementsPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";
//import SupplementsFilterButton from "../components/SupplementsFilterButton";


const SupplementsPageProduct = () => {
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

  //필터 버튼 누르면 url 바뀌도록
  const sortSuppleAll = () => {
    const suppleAll = `?category=supplements&sort_method=id`;
    navigate(suppleAll);
  };

  const sortSuppleFolate = () => {
    const suppleFolate = `?sub_category=folate`;
    navigate(suppleFolate);
  };
  const sortSuppleCa = () => {
    const suppleCa = `?sub_category=ca`;
    navigate(suppleCa);
  };

  const sortSuppleIron = () => {
    const suppleIron = `?sub_category=iron`;
    navigate(suppleIron);
  };

  const sortSuppleLacto = () => {
    const suppleLacto = `?sub_category=lacto`;
    navigate(suppleLacto);
  };

  const sortSuppleVitaminD = () => {
    const suppleVitaminD = `?sub_category=vitaminD`;
    navigate(suppleVitaminD);
  };

  //필터 버튼 누르면 url 바뀌도록
  const sortPriceLow = () => {
    const priceLow = `?category=supplements&sort_method=price`;
    navigate(priceLow);
  };

  const sortPriceHigh = () => {
    const priceHigh = `?category=supplements&sort_method=-price`;
    navigate(priceHigh);
  };
  const sortBestProduct = () => {
    const bestProduct = `?category=supplements&sort_method=id`;
    navigate(bestProduct);
  };

  const sortNewProduct = () => {
    const newProduct = `?category=supplements&sort_method=release_date`;
    navigate(newProduct);
  };

  return (
    <div className="SupplementsPageProduct">
      <div>
        <h1>영양제</h1>
          <img
          className="SupplementsBanner"
          alt="SupplememntsBanner"
          src={require("../assets/supplement.png")} />

    <div className="SuppleFilterButton">
      <p>
          <FilterButton onClick={sortSuppleAll} text={"전체"} />
          <FilterButton onClick={sortSuppleFolate} text={"엽산"} />
          <FilterButton onClick={sortSuppleCa} text={"칼슘"} />
          <FilterButton onClick={sortSuppleIron} text={"철분"} />
          <FilterButton onClick={sortSuppleLacto} text={"유산균"} />
          <FilterButton onClick={sortSuppleVitaminD} text={"비타민D"} />
      </p>
    </div>
        

        <div className="AllFilterButton12">
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
              src={require("../assets/url_img.png")}
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
export default SupplementsPageProduct;
