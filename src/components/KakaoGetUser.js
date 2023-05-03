//이용동의

import React from "react";

class GetUser extends React.Component {
  // 사용자 정보를 가져온다면 갱신
  state = {
    profile_nickname,
    profile_image_url: "",
  };

  componentDidMount() {
    const GetUser = this;

    // login함수와 비슷. 사용자 정보 가져오면 success콜백
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function ({ kakao_account }) {
        const { profile_nickname } = kakao_account;
        console.log(`responsed img: ${profile.profile_image_url}`);
        // 수집한 사용자 정보로 페이지 수정하기 위해 setState
        GetUser.setState({
          profile_image_url: profile.profile_image_url,
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }

  render() {
    const { profile_image_url } = this.state;

    return (
      <div>
        <img src={profile_image_url} alt="profile_img" title="img_title" />
      </div>
    );
  }
}

export default GetUser;
