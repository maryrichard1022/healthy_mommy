import { useState } from "react";
import React from "react";

function Product({ orderid, ordername, ordercounter, orderprice, ordernames }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="product">
        <div className="OrderDetail" onClick={toggleDetails}>
          <span>{orderid}</span>
          <span>
            <img alt="order" className="Orderimg" />
          </span>
          <span className="OrderName">{ordername}</span>
          <span className="OrderCounter">{ordercounter}</span>
          <span className="OrderPrice"> {orderprice} </span>
        </div>

        <div className={`product-details ${isOpen ? "show" : ""}`}>
          <span className="OrderName">
            <ul>
              {ordernames.map((ordername, index) => (
                <li>{ordername}</li>
              ))}
            </ul>
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Product;
