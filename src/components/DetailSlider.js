import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DetailSlider.css";
import API from "../config";

const DetailSlider = ({ imgs }) => {
  const [imglist, setimglist] = useState([
    "../assets/sportswear.png",
    "../assets/sportswear.png",
    "../assets/sportswear.png",
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const settings = {
    dots: true, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 3000, // 다음 컨텐츠 까지의 속도
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: false, // 현재 컨텐츠 가운데 정렬
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 3000, // 자동 캐러셀 속도
    draggable: false, // 드래그
    fade: true, // 사라졌다 나타나는 효과
    arrows: true, // 좌,우 버튼
    vertical: false, // 세로 캐러셀
    initialSlide: 1, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
    responsive: [
      // 반응형 옵션
      {
        breakpoint: 500, // (숫자)px 이하일 경우
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (imgs) {
      console.log(imgs);
      setimglist(imgs);
    }
  }, [imgs]);

  return (
    <container className="detailbanner">
      <Slider {...settings}>
        {imglist?.map((productDetail) => (
          <div className="detailbanner1">
            <img alt="detailbanner1" src={productDetail} />
          </div>
        ))}
      </Slider>
    </container>
  );
};
export default DetailSlider;
