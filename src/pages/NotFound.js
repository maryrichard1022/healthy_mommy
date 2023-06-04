import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import "./NotFound.css";
import Footer from "../components/Footer";
function NotFound() {
  return (
    <div className="nonfound">
      <div className="contentWrapper">
        <main className="not-found-container">
          <h1>404 error</h1>
          <h4>찾을 수 없는 페이지입니다.</h4>
          <Link to={"/"}>
            <CustomButton text={"홈으로"} />
          </Link>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
