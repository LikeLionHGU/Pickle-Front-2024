import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginRedirection = () => {
  const [form, setForm] = useState(null);
  const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 폼 데이터 불러오기
    const savedForm = JSON.parse(localStorage.getItem("form"));
    if (savedForm) {
      setForm(savedForm);
      console.log("Loaded form from local storage:", savedForm);
    } else {
      console.log("No form data found in local storage.");
    }

    if (savedForm && code) {
      // 서버로 데이터 전송
      axios
        .post(`${process.env.REACT_APP_HOST_URL}/api/auth/signup`, savedForm, {
          params: {
            code: code,
          },
        })
        .then((response) => {
          localStorage.setItem("kakaoId", response.data.kakaoId);
          // JWT 액세스 토큰을 로컬 스토리지에 저장
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("jwtToken", response.data.token);

          navigate("/");
          console.log("Success:", response.data);
          alert("회원가입을 완료했습니다.");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [code]);

  console.log("code :", code);
  console.log("saved form :", form);

  return <div>로그인 중입니다.</div>;
};

export default LoginRedirection;
