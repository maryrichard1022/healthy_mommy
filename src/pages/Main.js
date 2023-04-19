//메인 홈페이지
import React, { useEffect } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import MainPageProduct from "../components/MainPageProduct";

import "./Main.css";
// https://jsonplaceholder.typicode.com/photos

function Main() {
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos").then(
      (res) => res.json()
    );
    console.log(res);
    //res의 title은 상품명으로, thumbnailUrl은 상품 사진으로 사용해보기
    const initData = res.slice(0, 8).map((it) => {
      return {
        productname: it.title,
        productphoto: it.thumbnailUrl,
      };
    });
  };

  //mount되자마자 데이터 받아옴 (빈배열)
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <Nav />
      <MainSlider />
      <MainPageProduct />
      <Footer />
    </div>
  );
}

export default Main;
