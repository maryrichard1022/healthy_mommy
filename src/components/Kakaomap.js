/*global kakao*/
import React, { useEffect } from "react";

const Kakaomap = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.22204778204504, 127.18762349630781),
      level: 4,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.22204778204504,
      127.18762349630781
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: "500px",
          height: "400px",
          borderRadius: "10px",
          margin: "0 auto",
          marginBottom: "30px",
        }}
      ></div>
    </div>
  );
};

export default Kakaomap;
