import KakaoLogin from "react-kakao-login";
// //import { useNavigate } from "react-router-dom";
import API from "../config";
const SocialKakao = () => {
  //params = new URL(document.URL).searchParams;
  //const code = params.get("code");
  // const navigate = useNavigate();
  const kakaoClientId = "c810cdd4c87858ed473a517cefa5e349";
  const kakaoOnSuccess = async (data) => {
    console.log(data);

    //사용자 아이디
    const id = data.profile.id;
    //사용자 닉네임
    //토큰
    const id_token = data.response.id_token; // 인가코드 백엔드로 전달

    if (id_token) {
      sessionStorage.setItem("access_token", id_token);
    }

    //`${API.signin}?code=${code}`
    //백에 전달. 콘솔창에서 결과 확인할 것.
    //백에 id,
    fetch(`${API.signin}`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        access_token: id_token,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        // if (result.message === "") {
        //   alert("로그인 되었습니다.");
        //   navigate("/");
        // } else {
        //   alert("오류");
        // }
      });
  };

  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};
export default SocialKakao;
