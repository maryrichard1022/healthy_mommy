// 로그인 페이지
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SocialKakao from "../components/SocialKakao";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="contentWrapper">
        <Nav />
        <div className="kakaologin">
          <h1>카카오로 로그인</h1>
          <SocialKakao />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
