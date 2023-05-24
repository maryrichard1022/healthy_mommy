import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SportsWearPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";
//import SportsWearFilterButton from "../components/SportsWearFilterButton";

const SportsWearPageProduct = () => {
  const [productlist, setProductlist] = useState([]);

  const [activeFilter1, setActiveFilter1] = useState([]);
  const [activeFilter2, setActiveFilter2] = useState([]);
  const [currentPage, setcurrentPage] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category");
  let subCategory = "";
  /* let nextPage,prevPage = 0; //0520  */

  //버튼 누를 때마다 테이블 받아옴
  useEffect(() => {
    let queryString = location.search;
    let params = new URLSearchParams(queryString);

    /* if(queryString == ""){
      queryString="?category=sportswear";
    } */
    if(!params.has('category') || !params.has('sub_category')){
      params.set('category','sportswear');
      setActiveFilter1('all')
      navigate("?" + params.toString());
    } else {
      setActiveFilter1(params.get("sub_category"));
    }

    setActiveFilter2(params.get("sort_method"));

    //0520
    if (!params.has("offset")) {
      params.set("offset", 0);
      setcurrentPage(0);
    } else {
      setcurrentPage(Number(params.get("offset")));
    }

    if (currentPage > 16) {
      setcurrentPage(16);
      params.set("offset", 16);
    }

    if (currentPage < 0) {
      setcurrentPage(0);
      params.set("offset", 0);
    }
    //0520

    //메인페이지에 띄우는 물품 리스트 정보 가져옴
    fetch(`${API.product}${queryString}`)
      .then((res) => res.json())
      .then((result) => {
        //     setTotalItems(result);
        setProductlist(result.result);
        console.log(result);
      });
  }, [location.search]);

  const sortSubCategry1 = (category) => {
    let params = new URLSearchParams(location.search);
    if (!params.has("category")) {
      params.set("category", "sportswear");
    }
    if (category == "all") {
      params.delete("sub_category");
    } else {
      params.set("sub_category", category);
    }
    navigate("?" + params.toString());
  };

  const sortSubCategry2 = (category) => {
    let params = new URLSearchParams(location.search);
    if (!params.has("category")) {
      params.set("category", "sportswear");
    }
    params.set("sort_method", category);

    navigate("?" + params.toString());
  };

  const movePage = (num) => {
    let params = new URLSearchParams(location.search);
    if (!params.has("category")) {
      params.set("category", "sportswear");
    }

    if (num < 0) {
      num = 0;
    }
    if (num > 16) {
      num = 16;
    }

    params.set("offset", num);

    navigate("?" + params.toString());
  };

  return (
    <div className="SportsWearPageProduct">
      <div>
        <h1>운동복</h1>
        <img
          className="SportsWearBanner"
          alt="SportsWearBanner"
          src={require("../assets/sportswear.png")}
        />

        <div className="SportsWearFilterButton">
          <p>
            <FilterButton
              onClick={() => sortSubCategry1("all")}
              text={"전체"}
              isActive={activeFilter1 === "all"}
            />
            <FilterButton
              onClick={() => sortSubCategry1("top")}
              text={"상의"}
              isActive={activeFilter1 === "top"}
            />
            <FilterButton
              onClick={() => sortSubCategry1("bottom")}
              text={"하의"}
              isActive={activeFilter1 === "bottom"}
            />
          </p>
        </div>

        <div className="AllFilterButton13">
          <FilterButton
            onClick={() => sortSubCategry2("price")}
            text={"가격 낮은 순"}
            isActive={activeFilter2 === "price"}
          />
          <FilterButton
            onClick={() => sortSubCategry2("-price")}
            text={"가격 높은 순"}
            isActive={activeFilter2 === "-price"}
          />
          <FilterButton
            onClick={() => sortSubCategry2("id")}
            text={"베스트 순"}
            isActive={activeFilter2 === "id"}
          />
          <FilterButton
            onClick={() => sortSubCategry2("release_date")}
            text={"최신 순"}
            isActive={activeFilter2 === "release_date"}
          />
        </div>
      </div>

      <br />
      <div className="PageProductList">
        <div className="ProductListInfo">
          {productlist?.map((product) => (
            <a
              href={"/Detail/?id=" + product.id}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="BestProduct">
                <img
                  alt="product-img"
                  src={product.image_url}
                  className="product-img"
                ></img>
                <div className="productinfo-cart">
                  <div className="productinfo">
                    {/* <p> {product.id}</p> */}
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">
                      {Math.floor(product.price)}원
                    </p>
                    {/* <p className="product-sold">sold: {product.sold}</p> */}
                  </div>
                  <div className="cart-img-box">
                    <a href="/Cart">
                      {/* 장바구니 아이콘 누르면 페이지 이동 */}
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
            </a>
          ))}
        </div>
      </div>
      <div className="paginataion-group">
        <div className="pagination">
          <a onClick={() => movePage(currentPage - 8)}>&laquo;</a>
          <a
            onClick={() => movePage(0)}
            className={currentPage === 0 ? "active" : "-"}
          >
            1
          </a>
          <a
            onClick={() => movePage(8)}
            className={currentPage === 8 ? "active" : "-"}
          >
            2
          </a>
          <a
            onClick={() => movePage(16)}
            className={currentPage === 16 ? "active" : "-"}
          >
            3
          </a>
          <a onClick={() => movePage(currentPage + 8)}>&raquo;</a>
        </div>
      </div>
    </div>
  );
};
export default SportsWearPageProduct;
