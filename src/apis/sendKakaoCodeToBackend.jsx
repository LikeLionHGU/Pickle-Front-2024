import axios from "axios";

const sendKakaoCodeToBackend = async (code) => {
  try {
    const serverResponse = await axios.get(
      `${process.env.REACT_APP_HOST_URL}/church+/member/kakao/callback`,
      {
        params: { code },
      }
    );
    // 서버로부터의 응답 처리
    console.log("Login successful with server response:", serverResponse);

    // 유저 정보를 로컬 스토리지에 저장
    localStorage.setItem("kakaoId", serverResponse.data.kakaoId);

    return serverResponse.data; // 서버에서 반환한 데이터를 반환
  } catch (error) {
    console.error(
      "Login failed with error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default sendKakaoCodeToBackend;
