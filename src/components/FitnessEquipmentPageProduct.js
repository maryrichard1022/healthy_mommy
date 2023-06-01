import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FitnessEquipmentPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";

const FitnessEquipmentPageProduct = () => {
  const [productlist, setProductlist] = useState([]);

  const [activeFilter1, setActiveFilter1] = useState([]);
  const [activeFilter2, setActiveFilter2] = useState([]);
  const [currentPage, setcurrentPage] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category");

  //버튼 누를 때마다 테이블 받아옴
  useEffect(() => {
    let queryString = location.search; //const를 let으로

    let params = new URLSearchParams(queryString);

    if (!params.has("category") || !params.has("sub_category")) {
      params.set("category", "fitness_equipment");
      setActiveFilter1("all");
      navigate("?" + params.toString());
    } else {
      setActiveFilter1(params.get("sub_category"));
    }

    setActiveFilter2(params.get("sort_method"));

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

    fetch(`${API.product}${queryString}`)
      .then((res) => res.json())
      .then((result) => {
        setProductlist(result.result);
        console.log(result);
      });
  }, [location.search]);

  const sortSubCategry1 = (category) => {
    let params = new URLSearchParams(location.search);
    if (!params.has("category")) {
      params.set("category", "fitness_equipment");
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
      params.set("category", "fitness_equipment");
    }
    params.set("sort_method", category);

    navigate("?" + params.toString());
  };

  const movePage = (num) => {
    let params = new URLSearchParams(location.search);
    if (!params.has("category")) {
      params.set("category", "fitness_equipment");
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

 const handleAddToCart = (product) => {
    const kakao_id = sessionStorage.getItem("kakao_id");
    console.log(kakao_id)
    if (!kakao_id) {
      alert("로그인이 필요합니다.");
      navigate("/Login");
      return;
    }

    fetch(API.cart, {
      method: "POST",
      headers: {
        Authorization: kakao_id,
      },
      body: JSON.stringify({
        product_id: product.id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        if (result.message === "CART_QUANTITY_CHANGED") {
          alert("장바구니에 수량 추가되었습니다.");
        } else if (result.message === "PUT_IN_CART_SUCCESS") {
          alert("장바구니에 상품 추가되었습니다.");
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        alert("장바구니에 상품을 추가할 수 없습니다.");
      });
  };

  return (
    <div className="FitnessEquipmentPageProduct">
      <div>
        <h1>운동기구</h1>
        <img
          className="FitnessEquipmentBanner"
          alt="FitnessEquipmentBanner"
          src={require("../assets/fitness_equipment.png")}
        />

        <div className="FitnessEquipmentFilterButton">
          <p>
            <FilterButton
              onClick={() => sortSubCategry1("all")}
              text={"전체"}
              isActive={activeFilter1 === "all"}
            />
            <FilterButton
              onClick={() => sortSubCategry1("excercise_bike")}
              text={"실내사이클"}
              isActive={activeFilter1 === "excercise_bike"}
            />
            <FilterButton
              onClick={() => sortSubCategry1("gymball")}
              text={"짐볼"}
              isActive={activeFilter1 === "gymball"}
            />
            <FilterButton
              onClick={() => sortSubCategry1("band")}
              text={"탄력밴드"}
              isActive={activeFilter1 === "band"}
            />
            <FilterButton
              onClick={() => sortSubCategry1("foam_roller")}
              text={"폼롤러"}
              isActive={activeFilter1 === "foam_roller"}
            />
            <FilterButton
              onClick={() => sortSubCategry1("yoga_mat")}
              text={"요가매트"}
              isActive={activeFilter1 === "yoga_mat"}
            />
          </p>
        </div>

        <div className="AllFilterButton14">
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
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">
                      {Math.floor(product.price)}원
                    </p>
                  </div>
                  <div className="cart-img-box">
                    <a href="javascript:void(0)" onClick={() => {handleAddToCart(product)}}>
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
export default FitnessEquipmentPageProduct;
