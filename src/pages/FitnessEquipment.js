//운동기구
//푸터 하단 고정은 나중에 내가(가연) 다 할게
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import FitnessQuipmentFilterButton from "../components/FitnessQuipmentFilterButton";
import Card from "../components/Card";
import Banner from "../components/Banner";

function FitnessEquipment() {
  return (
    <div className="">
      <div className="contentWrapper">
        <Nav />
        <div class="container">
        <h1>운동기구</h1>
        <Banner img_src={""}/>
        <FitnessQuipmentFilterButton/>
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

export default FitnessEquipment;
