import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./MyPage.css";

const MyPage = () => {
  return (
    <div>
      <Nav />
      <div>
        <h3> 마이 페이지 입니다.</h3>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
