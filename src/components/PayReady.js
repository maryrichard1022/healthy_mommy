// 결제창
import React from "react";
import axios from "axios";

class PayReady extends React.Component {
  state = {
    // 응답에서 가져올 값들
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
      total_amount: 2200,
      vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/PaySuccess",
      fail_url: "http://localhost:3000/PayResult",
      cancel_url: "http://localhost:3000/PayResult",
    },
  };

  componentDidMount() {
    const { params } = this.state;
    axios({
      // 단건결제 준비하기
      url: "https://kapi.kakao.com/v1/payment/ready",
      Host: "kapi.kakao.com",
      // 결제 준비 API는 POST
      method: "POST",
      headers: {
        // 카카오 developers에 등록한 admin키를 헤더에 줘야 함.
        Authorization: "KakaoAK b510676c6e0cafb78941741fc4df73e4",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      // 설정한 매개변수들
      params,
    }).then((response) => {
      // 응답에서 필요한 data만 뽑는다.
      const {
        data: { next_redirect_pc_url, tid },
      } = response;

      console.log(next_redirect_pc_url);
      console.log(tid);
      // 응답 data로 state 갱신
      window.localStorage.setItem("tid", tid);
      this.setState({ next_redirect_pc_url, tid });
    });
  }

  render() {
    const { next_redirect_pc_url } = this.state;

    return (
      <div>
        <a href={next_redirect_pc_url}>{next_redirect_pc_url}</a>
      </div>
    );
  }
}
export default PayReady;
