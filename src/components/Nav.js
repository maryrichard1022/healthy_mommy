// 홈페이지 헤더
import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <header className="nav-container">
      <div className="nav-container_left">
        <div>
          <Link to={"/"}>
            <img alt="mainlogo" src={require("../assets/mainlogo.png")} />
          </Link>
        </div>

        <div class="category">
          <span> ALL </span>

          <div class="dropdown">
            <button class="dropbtn">영양제</button>
            <div class="dropdown-content">
              <a href="#">비타민</a>
              <a href="#">마그네슘</a>
              <a href="#">엽산</a>
            </div>
          </div>

          <div className="dropdown">
            <button class="dropbtn">운동복</button>
            <div class="dropdown-content">
              <a href="#">전체</a>
              <a href="#">상의</a>
              <a href="#">하의</a>
            </div>
          </div>
          <div className="dropdown">
            <button class="dropbtn">운동기구</button>
            <div class="dropdown-content">
              <a href="#">덤벨</a>
              <a href="#">트레드밀</a>
              <a href="#">뭐가있지</a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-container_right">
        <span>
          <img alt="logo" src={require("../assets/user.png")} />
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
