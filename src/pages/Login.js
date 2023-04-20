// 로그인 페이지
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import KakaoLogin from "../components/KakaoLogin";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="contentWrapper">
        <Nav />
        <div className="kakaologin">
          <h1>로그인하기</h1>
          <KakaoLogin />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
