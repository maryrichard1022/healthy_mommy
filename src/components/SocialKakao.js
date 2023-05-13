// // import React from "react";

// // class KakaoLogin extends React.Component {
// //   state = {
// //     loginResult: false, // 로그인 여부에 따라 페이지를 편집하기 위해 추가
// //   };

// //   componentDidMount() {
// //     /*
// //      **  scope는 수집할 사용자 정보를 명시한다.
// //      **  Kakao.Auth.login함수의 인자로 쓴다.
// //      **  사용자 동의 후 수집할 수 있다.
// //      */
// //     const scope = "profile_nickname";
// //     const home = this;
// //     let loginResult = false;
// //     // Kakao.Auth.login는 인증에 성공하면 success call back이 실행된다.
// //     window.Kakao.Auth.login({
// //       scope,
// //       // success는 인증 정보를 응답(response)으로 받는다.
// //       success: function (response) {
// //         //카카오 SDK에 사용자 토큰을 설정한다.
// //         window.Kakao.Auth.setAccessToken(response.access_token);
// //         console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
// //         loginResult = true;
// //         // 성공 사항에 따라 페이지를 수정하기 위한 setState
// //         home.setState({ loginResult });
// //       },
// //       fail: function (error) {
// //         console.log(error);
// //       },
// //     });
// //   }

// //   render() {
// //     // 등록된 앱의 JavaScript key
// //     const jsKey = "c810cdd4c87858ed473a517cefa5e349";

// //     // SDK는 한 번만 초기화해야 한다.
// //     // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
// //     if (!window.Kakao.isInitialized()) {
// //       // JavaScript key를 인자로 주고 SDK 초기화
// //       window.Kakao.init(jsKey);
// //       // SDK 초기화 여부를 확인하자.
// //       console.log(window.Kakao.isInitialized());
// //     }
// //     return (
// //       <div>
// //         <img alt="login" src={require("../assets/kakao_login.png")} />
// //       </div>
// //     );
// //   }
// // }
// // export default KakaoLogin;

// import KakaoLogin from "react-kakao-login";
// //import { useNavigate } from "react-router-dom";
// import API from "../config";
// const SocialKakao = () => {
//   //params = new URL(document.URL).searchParams;
//   //const code = params.get("code");
//   // const navigate = useNavigate();
//   const kakaoClientId = "c810cdd4c87858ed473a517cefa5e349";
//   const kakaoOnSuccess = async (data) => {
//     console.log(data);
//     const id_token = data.response.id_token; // 인가코드 백엔드로 전달

//     //`${API.signin}?code=${code}`
//     //백에 전달. 콘솔창에서 결과 확인할 것.
//     fetch(`${API.signin}`, {
//       method: "POST",
//       body: JSON.stringify({
//         access_token: id_token,
//       }),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//         // if (result.message === "") {
//         //   alert("로그인 되었습니다.");
//         //   navigate("/");
//         // } else {
//         //   alert("오류");
//         // }
//       });
//   };

//   const kakaoOnFailure = (error) => {
//     console.log(error);
//   };
//   return (
//     <>
//       <KakaoLogin
//         token={kakaoClientId}
//         onSuccess={kakaoOnSuccess}
//         onFail={kakaoOnFailure}
//       />
//     </>
//   );
// };
// export default SocialKakao;
