//홈페이지 하단, 푸더(Nav파일과 마찬가지로 모든 파일에 import하면 됨 )
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding"></div>
      <div className="sb_footer_info">
        <div className="sb_footer_info_div">
          <h3>ABOUT US</h3>
          <p>company. HealthyMommy</p>
          <p>owner. 박서윤</p>
          <p>tel. 031-1234-5678</p>
          <p>address. 경기도 용인시 처인구 명지로 116</p>
        </div>
        <hr className="footerbar"></hr>
        <div className="sb_footer_copyright">
          <p>@{new Date().getFullYear()} HealthyMommy. All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
