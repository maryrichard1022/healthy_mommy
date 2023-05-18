import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PayResult = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pgToken = searchParams.get("pg_token");

  useEffect(() => {
    const params = {
      cid: "TC0ONETIME",
      tid: window.localStorage.getItem("tid"),
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      pg_token: pgToken,
    };

    axios({
      url: "https://kapi.kakao.com/v1/payment/approve",
      Host: "kapi.kakao.com",
      method: "POST",
      headers: {
        Authorization: "KakaoAK de0e3076b485b703b1f1a4a2419440e6",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    }).then((response) => {
      console.log(response);
    });
  }, [pgToken]);

  return <div></div>;
};

export default PayResult;
