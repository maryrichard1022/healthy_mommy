import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="nav-container">
      <div className="nav-container_left">
        <img alt="mainlogo" src={require("../assets/mainlogo.png")} />
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
          <img alt="logo" src={require("../assets/cart.png")} />
        </span>
        <span>
          <img alt="logo" src={require("../assets/location.png")} />
        </span>
      </div>
    </header>
  );
};

export default Nav;
