import React, { useEffect } from "react";
const { kakao } = window;

const Kakaomap = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      //명지대 위도, 경도
      center: new kakao.maps.LatLng(37.22204778204504, 127.18762349630781),
      level: 4, // 지도 확대, 축소 정도
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng( //명지대 위도, 경도
      37.22204778204504,
      127.18762349630781
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  //지도를 아래 style 적용하여 표시
  return (
    <div>
      <div
        id="map"
        style={{
          width: "500px",
          height: "300px",
          borderRadius: "10px",
          margin: "0 auto",
          marginBottom: "30px",
        }}
      ></div>
    </div>
  );
};

export default Kakaomap;
