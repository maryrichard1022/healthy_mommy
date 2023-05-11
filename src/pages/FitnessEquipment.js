//푸터 하단 고정은 나중에 내가(가연) 다 할게
//운동기구
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
/* import FitnessEquipmentFilterButton from "../components/FitnessEquipmentFilterButton";
import Card from "../components/Card";
import Banner from "../components/Banner"; */
/* import "./FitnessEquipment.css"; */
import FitnessEquipmentPageProduct from "../components/FitnessEquipmentPageProduct";


function FitnessEquipment() {
  return (
    <div className="">
      <div className="contentWrapper">
        <Nav />

        <FitnessEquipmentPageProduct />

        <div class="container">
        {/* <h1>운동기구</h1> */}
        
        <div className="container">
        {/* <container className="FitnessEquipmentBanner">
        <Banner img_src={require("../assets/banner2.jpg")}/>
        </container>
        </div>
        
        <FitnessQuipmentFilterButton/>
          <div className="container">
            <div className="row">
              <div className="col col-sm-3 col-md-7">
                <p />
              </div>
              <div className="col">
                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    가격 낮은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    가격 높은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    누적 판매 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    최신 순
                  </span>
                </p>
              </div>
            </div> */}
          </div>
        </div>


        {/* <div className="container">
          <div className="row">
          <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
            <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
            <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
            <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
            <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
            <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
            <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
            <Card product_name={"마그네슘 500mg 180정"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20,000"}/>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default FitnessEquipment;
