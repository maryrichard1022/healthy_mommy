import React from "react";
import Kakaomap from "../components/Kakaomap";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "./Location.css";
const Location = () => {
  return (
    <div className="location">
      <div className="contentWrapper">
        <Nav />
        <p className="titletext">매장 위치</p>
        <Kakaomap />
        <div className="LocationInfo">
          <p>경기도 용인시 처인구 명지로 116 제 5공학관</p>
          <p>02-1234-5678</p>
          <p>월-금 9:00 am - 6:00 pm</p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
