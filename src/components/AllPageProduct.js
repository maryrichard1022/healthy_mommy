import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AllPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";

const AllPageProduct = () => {
  const [productlist, setProductlist] = useState([]);

  /* const [activeFilter1, setActiveFilter1] = useState([]); */
  const [activeFilter2, setActiveFilter2] = useState([]);
  const [currentPage, setcurrentPage] = useState([]); //0520

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category");
  // const categoryString = `category=${urlCategory}`;

  //url 바뀔 떄 마다 화면 렌더링

  //마운트 되자마자 all을 띄우도록 함
  /* useEffect(() => {
    sortBestAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []); */ //0514

  //버튼 누를 때마다 테이블 받아옴
  useEffect(() => {
    let queryString = location.search;
    let params = new URLSearchParams(queryString)

    if(!params.has('category')){
      /* params.set('category','all'); */
      setActiveFilter2(params.get('sort_method'));
      navigate("?"+params.toString())
    } 
    

    if (!params.has("offset")) {
      params.set("offset", 0);
      setcurrentPage(0);
    } else {
      setcurrentPage(Number(params.get("offset")));
    }

    if (currentPage > 16) {
      setcurrentPage(16);
      params.set("offset",16)
    }

    if (currentPage < 0) {
      setcurrentPage(0);
      params.set("offset",0)
    }

    //메인페이지에 띄우는 물품 리스트 정보 가져옴
    fetch(`${API.product}${queryString}`)
      .then((res) => res.json())
      .then((result) => {
        //     setTotalItems(result);
        setProductlist(result.result);
        console.log(result);
      });
  }, [location.search]);

  //필터 버튼 누르면 url 바뀌도록
 /*  const sortPriceLow = () => {
    const priceLow = `?sort_method=price`;
    navigate(priceLow);
  };

  const sortPriceHigh = () => {
    const priceHigh = `?sort_method=-price`;
    navigate(priceHigh);
  };
  const sortBestProduct = () => {
    const bestProduct = `?sort_method=id`;
    navigate(bestProduct);
  };

  const sortNewProduct = () => {
    const newProduct = `?sort_method=-release_date`;
    navigate(newProduct);
  }; */

  

  const sortSubCategry2 = (category) => {
    let params = new URLSearchParams(location.search);
    /* if(!params.has('category')) {
      params.set('category','all');
    } */
    params.set('sort_method', category)
    navigate("?"+params.toString())
  }


  const movePage = (num) => {
    let params = new URLSearchParams(location.search);
    /* if(!params.has('category')) {
      params.set('category','all');
    }  */
    
    if(num < 0) {
      num = 0;
    }
    if(num > 16) {
      num = 16;
    }
    
    params.set('offset',num)

    navigate("?"+params.toString())
  };

  return (
    <div className="AllPageProduct">
      <div>
        <h1>All</h1>
        <img
          className="AllBanner"
          alt="AllBanner"
          src={require("../assets/All.png")}
        />

        <div className="AllFilterButton11">
          {/* <FilterButton onClick={sortPriceLow} text={"가격 낮은 순"} />
          <FilterButton onClick={sortPriceHigh} text={"가격 높은 순"} />
          <FilterButton onClick={sortBestProduct} text={"베스트 순"} />
          <FilterButton onClick={sortNewProduct} text={"최신 순"} /> */}
          <FilterButton onClick={() => sortSubCategry2("price")} text={"가격 낮은 순" } isActive={activeFilter2 === 'price'}/>
          <FilterButton onClick={() => sortSubCategry2("-price")} text={"가격 높은 순"} isActive={activeFilter2 === '-price'}/>
          <FilterButton onClick={() => sortSubCategry2("id")} text={"베스트 순"} isActive={activeFilter2 === 'id'}/>
          <FilterButton onClick={() => sortSubCategry2("release_date")} text={"최신 순"} isActive={activeFilter2 === 'release_date'}/>
        </div>
      </div>
      <br />

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
          <a href = {"/Detail/?id="+product.id}style={{ color: "black", textDecoration: "none"  }}>
          <div className="BestProduct">
            <img
              alt="product-img"
              /* src={require("../assets/url_img.png")} */
              src={product.image_url} //크롤링 테이블 받아왔을 때!!
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

      <div className="paginataion-group">
        <div className="pagination">
        <a onClick={() => movePage(currentPage-8)}>&laquo;</a>
          <a onClick={() => movePage(0)} className={currentPage === 0 ? "active" : "-"}>1</a>
          <a onClick={() => movePage(8)} className={currentPage === 8 ? "active" : "-"}>2</a>
          <a onClick={() => movePage(16)} className={currentPage === 16 ? "active" : "-"}>3</a>
          <a onClick={() => movePage(currentPage+8)}>&raquo;</a>
        </div>
      </div>
    </div>
  );
};
export default AllPageProduct;
