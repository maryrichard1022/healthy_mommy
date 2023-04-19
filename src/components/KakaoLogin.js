import React from "react";

class KakaoLogin extends React.Component {
  render() {
    // 등록된 앱의 JavaScript key
    const jsKey = "c810cdd4c87858ed473a517cefa5e349";

    // SDK는 한 번만 초기화해야 한다.
    // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(jsKey);
      // SDK 초기화 여부를 확인하자.
      console.log(window.Kakao.isInitialized());
    }
    return <h1>kakologin</h1>;
  }
}
export default KakaoLogin;
