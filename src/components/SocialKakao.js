import KakaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";
import API from "../config";
const SocialKakao = () => {
  const navigate = useNavigate();
  const kakaoClientId = "c810cdd4c87858ed473a517cefa5e349";
  const kakaoOnSuccess = async (data) => {
    console.log(data);

    //사용자 아이디
    const kakao_id = data.profile.id;
    //사용자 닉네임
    const nickname = data.profile.properties.nickname;

    //백에 kakao_id, nickname 전달
    fetch(`${API.login}`, {
      method: "POST",
      body: JSON.stringify({
        kakao_id: kakao_id,
        nickname: nickname,
      }),
    }).then((res) => {
      if (res.message === "SIGNUP_SUCCESS") {
        console.log("회원가입");
      } else if (res.message === "LOGIN_SUCCESS") {
        console.log("로그인");
      }
    });

    if (kakao_id) {
      sessionStorage.setItem("kakao_id", kakao_id);
    }
    navigate(-1);
  };

  const kakaoOnFailure = (error) => {
    console.log("카카오 로그인 에러" + error);
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
