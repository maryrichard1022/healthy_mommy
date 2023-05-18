// 홈페이지 헤더, Navigator (모든 페이지 상단에 import 해서 넣으면 됨)
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const MainNavigate = () => {
    navigate("/");
  };
  return (
    <header className="nav-container">
      <div className="nav-container_left">
        <div className="nav-container_logo">
          <img
            alt="mainlogo"
            onClick={MainNavigate}
            src={require("../assets/mainlogo.png")}
          />
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
              <a href="/Supplements?category=supplements">전체</a>
              <a href="/Supplements?sub_category=folate">엽산</a>
              <a href="/Supplements?sub_category=ca">칼슘</a>
              <a href="/Supplements?sub_category=iron">철분</a>
              <a href="/Supplements?sub_category=lacto">유산균</a>
              <a href="/Supplements?sub_category=vitaminD">비타민D</a>
            </div>
          </div>

          <div className="dropdown">
            <Link to={"/SportsWear"}>
              <button class="dropbtn">운동복</button>
            </Link>
            <div class="dropdown-content">
              <a href="/SportsWear?category=sportswear">전체</a>
              <a href="/SportsWear?sub_category=top">상의</a>
              <a href="/SportsWear?sub_category=bottom">하의</a>
            </div>
          </div>

          <div className="dropdown">
            <Link to={"/FitnessEquipment"}>
              <button class="dropbtn">운동기구</button>
            </Link>
            <div class="dropdown-content">
              <a href="/FitnessEquipment?category=fitness_equipment">전체</a>
              <a href="/FitnessEquipment?sub_category=excercise_bike">
                실내사이클
              </a>
              <a href="/FitnessEquipment?sub_category=gymball">짐볼</a>
              <a href="/FitnessEquipment?sub_category=band">탄력밴드</a>
              <a href="/FitnessEquipment?sub_category=foam_roller">폼롤러</a>
              <a href="/FitnessEquipment?sub_category=yoga_mat">요가매트</a>
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
