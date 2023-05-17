import KakaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";
import API from "../config";
const SocialKakao = () => {
  //params = new URL(document.URL).searchParams;
  //const code = params.get("code");
  const navigate = useNavigate();
  const kakaoClientId = "c810cdd4c87858ed473a517cefa5e349";
  const kakaoOnSuccess = async (data) => {
    console.log(data);

    //사용자 아이디
    const kakao_id = data.profile.id;
    //사용자 닉네임
    const nickname = data.profile.properties.nickname;
    //토큰
    //const id_token = data.response.id_token;

    if (kakao_id) {
      sessionStorage.setItem("kakao_id", kakao_id);
    }
    navigate(-1);

    //백에 kakao_id, nickname 전달
    fetch(`${API.signin}`, {
      method: "POST",
      body: JSON.stringify({
        kakao_id: kakao_id,
        nickname: nickname,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // 상태메세지 확인
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
