//우편번호 API

/**
 * [Title] Daum 우편번호 검색
 * [Description] 리액트 컴포넌트로 만든 Daum 우편번호 검색 서비스
 * [Usage]
 * @props onComplete {Function} : 우편번호 검색 시 선택한 정보 받아올 콜백함수
 * @props onSearch {Function} : 주소를 검색할 경우 실행되는 콜백함수
 * @props onClose {Function} : 검색 결과선택 후 우편번호 검색이 닫힐때 실행되는 콜백함수
 * @props onResize {Function} : 검색결과로 우편번호 화면 크기가 변경될때 실행되는 콜백함수
 * @props className {String} : 우편번호 검색창을 감싸는 최상위 엘리먼트 ClassName
 * @props style : 우편번호 검색창 최상위 엘리먼트 스타일
 *  @default {width:100%,height:400px}
 * @props scriptUrl {String} : Daum 우편번호 스크립트 주소
 *  @default "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
 * @props defaultQuery {String} : 우편번호 검색창에 기본으로 입력할 검색어
 *  @default undefined
 * @props autoClose {Boolean} : 우편번호 검색 완료시, 자동닫힘 여부
 *  @default true
 * @props errorMessage {React element} : 로드되지 않을때 보이는 에러 메시지
 *  @default "<p>현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.</p>"
 */

import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import "./Postcode.css";
const Postcode = (props) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    // 입력 끝나면 주소를 받아와서 fullAddress로 반환
    let fullAddress = data.address; //주소 변수
    let extraAddress = "";
    // console.log(data);

    // 사용자가 선택한 주소가 도로명 타입일 경우
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    //우편번호와 도로명 주소를 해당 필드에 넣음.
    document.getElementById("sample4_postcode").value = data.zonecode;
    document.getElementById("sample4_roadAddress").value = fullAddress;
    //상세 주소는 주문자가 작성하도록 상세주소로 커서 이동
    document.getElementById("sample4_detailAddress").focus();
  };

  const handleClick = (data) => {
    open({ onComplete: handleComplete });
    // console.log(data);
  };

  return (
    <div>
      <div>
        <input type="text" id="sample4_postcode" placeholder="우편번호" />
        <button className="postcodebutton" type="button" onClick={handleClick}>
          우편번호
        </button>
      </div>
      <div>
        <input type="text" id="sample4_roadAddress" placeholder="도로명주소" />
        <input type="text" id="sample4_detailAddress" placeholder="상세주소" />
      </div>
    </div>
  );
};

export default Postcode;

Postcode.defaultProps = {
  style: {
    width: "700px",
    height: "450px",
  },
};
