import React from "react";
import "./Banner.css";
// 물품 리스트페이지에 들어가는 것??

const Banner = ({img_src}) => {
  return (
      <div className="banner" >
        <img src={img_src} alt="이미지 준비 중" />
      </div>
  );
};

export default Banner;
