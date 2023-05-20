// 결제창
import React, { useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router";

const PayReady = (props) => {
  //결제하기 버튼 클릭하면 실행
  useEffect(() => {
    if (props.stateButton && true) {
      kakaoPayment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.stateButton]);

  const state = {
    next_redirect_pc_url: "",
    tid: "",
    // 요청에 넘겨줄 매개변수들
    //결제할 가격, 아이템 이름  부가세 등 조정
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "헬씨마미",
      quantity: 1,
      total_amount: props.totalPrice,
      vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/PaySuccess",
      fail_url: "http://localhost:3000/*",
      cancel_url: "http://localhost:3000/*",
    },
  };

  const kakaoPayment = () => {
    const { params } = state;
    axios({
      url: "https://kapi.kakao.com/v1/payment/ready",
      Host: "kapi.kakao.com",
      method: "POST",
      headers: {
        Authorization: "KakaoAK b510676c6e0cafb78941741fc4df73e4",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    })
      .then((response) => {
        const {
          data: { next_redirect_pc_url, tid },
        } = response;
        window.localStorage.setItem("tid", tid);
        console.log("next:" + next_redirect_pc_url);
        console.log("tid:" + tid);
        //tid 값 넘겨야 함. fetct PATCH

        window.location.replace(next_redirect_pc_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div></div>;
};
export default PayReady;
