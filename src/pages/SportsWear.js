//운동복 페이지

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SportsWearFilterButton from "../components/SportsWearFilterButton";
import Card from "../components/Card";
import Banner from "../components/Banner";

function SportsWear() {
  return (
    <div className="">
      <div className="contentWrapper">
        <Nav />

        <div class="container">
        <h1>운동복</h1>
        <Banner img_src={require("../assets/sportswear.png")}/>
        <SportsWearFilterButton />
          <div className="container">
            <div className="row">
              <div
                className="col col-sm-3 col-md-7"
              >
                <p />
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>
                    가격 낮은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>
                    가격 높은 순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>
                    누적판매순
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <span style={{ textDecoration: "underline" }}>최신순</span>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
            <Card product_name={"마그네슘 500mg 180점"} img_src={"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00672/v/31.jpg"} price={"20000"}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SportsWear;
