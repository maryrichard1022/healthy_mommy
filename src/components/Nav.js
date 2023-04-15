import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <header className="nav-container">
      <div className="nav-container_left">
        <Link to={"/"}>
          <img alt="mainlogo" src={require("../assets/mainlogo.png")} />
        </Link>
        <div>
          <span> ALL </span>
          <span> 영양제 </span>
          <span> 운동복 </span>
          <span> 운동기구 </span>
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
          <img alt="logo" src={require("../assets/location.png")} />
        </span>
      </div>
    </header>
  );
};

export default Nav;
