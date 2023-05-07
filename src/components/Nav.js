// 홈페이지 헤더, Navigator (모든 페이지 상단에 import 해서 넣으면 됨)
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="nav-container">
      <div className="nav-container_left">
        <div className="nav-container_logo">
          <Link to={"/?sort_method=-sold"}>
            <img alt="mainlogo" src={require("../assets/mainlogo.png")} />
          </Link>
        </div>

        <div class="category">
          <div class="dropdown">
            <Link to={"/ALL"}>
              <button class="dropbtn">ALL</button>
            </Link>
          </div>

          <div class="dropdown">
            <Link to={"/Supplements"}>
              <button class="dropbtn">영양제</button>
            </Link>
            <div class="dropdown-content">
              <a href="#!">전체</a>
              <a href="#!">엽산</a>
              <a href="#!">칼슘</a>
              <a href="#!">철분</a>
              <a href="#!">유산균</a>
              <a href="#!">비타민D</a>
            </div>
          </div>

          <div className="dropdown">
            <Link to={"/SportsWear"}>
              <button class="dropbtn">운동복</button>
            </Link>
            <div class="dropdown-content">
              <a href="#!">전체</a>
              <a href="#!">상의</a>
              <a href="#!">하의</a>
            </div>
          </div>
          <div className="dropdown">
            <Link to={"/FitnessEquipment"}>
              <button class="dropbtn">운동기구</button>
            </Link>
            <div class="dropdown-content">
              <a href="#!">전체</a>
              <a href="#!">실내사이클</a>
              <a href="#!">짐볼</a>
              <a href="#!">탄력밴드</a>
              <a href="#!">폼롤러</a>
              <a href="#!">요가매트</a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-container_right">
        <span>
          <Link to={"/MyPage"}>
            <img alt="logo" src={require("../assets/user.png")} />
          </Link>
        </span>

        <span>
          <Link to={"/Cart"}>
            <img alt="logo" src={require("../assets/cart.png")} />
          </Link>
        </span>

        <span>
          <Link to={"/Location"}>
            <img alt="logo" src={require("../assets/location.png")} />
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Nav;
