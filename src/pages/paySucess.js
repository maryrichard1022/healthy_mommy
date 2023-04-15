import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "./PaySucess.css";

const PaySucess = () => {
  return (
    <div>
      <Nav />
      <div>
        <div>
          <h3> 주문이 완료되었습니다.</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaySucess;
