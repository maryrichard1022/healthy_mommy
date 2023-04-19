// 로그인 페이지
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import KakaoLogin from "../components/KakaoLogin";

const Login = () => {
  return (
    <div className="login">
      <Nav />
      <KakaoLogin />
      <Footer />
    </div>
  );
};

export default Login;
