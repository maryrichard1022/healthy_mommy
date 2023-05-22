import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SupplementsPageProduct.css";
import FilterButton from "./FilterButton";
import API from "../config";
//import SupplementsFilterButton from "../components/SupplementsFilterButton";


const SupplementsPageProduct = () => {
  const [productlist, setProductlist] = useState([]);
  const [activeFilter1, setActiveFilter1] = useState([]);
  const [activeFilter2, setActiveFilter2] = useState([]);
  const [currentPage, setcurrentPage] = useState([]); //0520
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category"); 
  let subCategory = "";
  let nextPage,prevPage = 0; //0520 


  //버튼 누를 때마다 테이블 받아옴
  useEffect(() => {
    let queryString = location.search;
    let params = new URLSearchParams(queryString); //location.search->queryString

    if(!params.has('category') || !params.has('sub_category')){
      params.set('category','supplements');
      setActiveFilter1('all')
      navigate("?"+params.toString())
    } else {
      setActiveFilter1(params.get('sub_category'));
    }
    
    setActiveFilter2(params.get('sort_method'));

    //0520
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
    //0520


    //메인페이지에 띄우는 물품 리스트 정보 가져옴
    fetch(`${API.product}${queryString}`) /*main->product*/
      .then((res) => res  .json())
      .then((result) => {
        //     setTotalItems(result);
        setProductlist(result.result);
        console.log(result);
      });
  }, [location.search]);

  //필터 버튼 누르면 url 바뀌도록
  /* const sortSuppleAll = () => {
    const suppleAll = `?category=supplements`;
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
    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=supplements";
    }
    const priceLow = `${subCategory}&sort_method=price`;
    navigate(priceLow);
  };

  const sortPriceHigh = () => {
    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=supplements";
    }
    const priceHigh = `${subCategory}&sort_method=-price`;
    navigate(priceHigh);
  };
  const sortBestProduct = () => {
    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=supplements";
    }
    const bestProduct = `${subCategory}&sort_method=id`;
    navigate(bestProduct);
  }; 
  const sortNewProduct = () => {
    subCategory =  location.search;
    if(subCategory == "") {
      subCategory="?category=supplements";
    }
    const newProduct = `${subCategory}&sort_method=release_date`;
    navigate(newProduct);
  };*/
  const sortSubCategry1 = (category) => {
    let params = new URLSearchParams(location.search);
    if(!params.has('category')) {
      params.set('category','supplements');
    } 
    if(category == "all") {
      params.delete('sub_category');
    } else {
      params.set('sub_category',category);
    }
    navigate("?"+params.toString())
  }

  const sortSubCategry2 = (category) => {
    let params = new URLSearchParams(location.search);
    if(!params.has('category')) {
      params.set('category','supplements');
    } 
      params.set('sort_method', category)

    navigate("?"+params.toString())
  }



  const movePage = (num) => {
    
    let params = new URLSearchParams(location.search);
    if(!params.has('category')) {
      params.set('category','supplements');
    } 
    //0520
    if(num < 0) {
      num = 0;
    }
    if(num > 16) {
      num = 16;
    }
    //0520
    params.set('offset',num)

    navigate("?"+params.toString())

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
          <FilterButton onClick={() => sortSubCategry1("all")} text={"전체"} isActive={activeFilter1 === 'all'}/>
          <FilterButton onClick={() => sortSubCategry1("folate")} text={"엽산"} isActive={activeFilter1 === 'folate'}/>
          <FilterButton onClick={() => sortSubCategry1("ca")} text={"칼슘"} isActive={activeFilter1 === 'ca'}/>
          <FilterButton onClick={() => sortSubCategry1("iron")} text={"철분"} isActive={activeFilter1 === 'iron'}/>
          <FilterButton onClick={() => sortSubCategry1("lacto")} text={"유산균"} isActive={activeFilter1 === 'lacto'}/>
          <FilterButton onClick={() => sortSubCategry1("vitaminD")} text={"비타민D"} isActive={activeFilter1 === 'vitaminD'}/>
      </p>
    </div>

        
         <div className="AllFilterButton12">
          <FilterButton onClick={() => sortSubCategry2("price")} text={"가격 낮은 순" } isActive={activeFilter2 === 'price'}/>
          <FilterButton onClick={() => sortSubCategry2("-price")} text={"가격 높은 순"} isActive={activeFilter2 === '-price'}/>
          <FilterButton onClick={() => sortSubCategry2("id")} text={"베스트 순"} isActive={activeFilter2 === 'id'}/>
          <FilterButton onClick={() => sortSubCategry2("release_date")} text={"최신 순"} isActive={activeFilter2 === 'release_date'}/>
        </div>

    </div>
      
        <br />

        <div className="ProductListInfo">
        {productlist?.map((product) => (
          <a href = {"/Detail/?id="+product.id}style={{ color: "black", textDecoration: "none"  }}> {/* //0521 */}
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
export default SupplementsPageProduct;
