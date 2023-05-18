import React, { useEffect } from "react";
import axios from "axios";

const PayResult = (props) => {
  const params = {
    cid: "TC0ONETIME",
    tid: window.localStorage.getItem("tid"),
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: "",
  };
  console.log("tid :" + params.tid);

  // tid 백에 저장?
  useEffect(() => {
    if (props.location && props.location.search) {
      params.pg_token = props.location.search.split("=")[1];
      // eslint-disable-next-line react-hooks/exhaustive-deps

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

  return <div></div>;
};

export default PayResult;
