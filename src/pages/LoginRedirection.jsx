import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pickleImg from "../assets/img/UserLevel0.svg";

const handleLogin = (code, navigate) => {
  axios
    .get(`${process.env.REACT_APP_HOST_URL}/api/auth/login`, {
      params: {
        code: code,
      },
    })
    .then((response) => {
      localStorage.setItem("jwtToken", response.data.token);
      navigate("/");
      console.log("Success:", response.data);
      alert("로그인에 성공했습니다.");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("가입되지 않은 유저입니다. 회원가입 해 주세요.");
      navigate("/sign");
    });
};

const handleSignup = (savedForm, code, navigate) => {
  axios
    .post(`${process.env.REACT_APP_HOST_URL}/api/auth/signup`, savedForm, {
      params: {
        code: code,
      },
    })
    .then((response) => {
      localStorage.setItem("jwtToken", response.data.token);
      navigate("/");
      console.log("Success:", response.data);
      alert("회원가입을 완료했습니다.");
    })
    .catch((error) => {
      console.error("Error:", error);
      localStorage.clear();
      alert("이미 존재하는 회원입니다. 로그인 해 주세요.");
      navigate("/");
    });
};

const LoginRedirection = () => {
  const [form, setForm] = useState(null);
  const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem("form"));
    if (savedForm) {
      setForm(savedForm);
      setIsSignup(true);
      console.log("Loaded form from local storage:", savedForm);
    } else {
      console.log("No form data found in local storage.");
    }

    if (code) {
      if (savedForm) {
        handleSignup(savedForm, code, navigate);
      } else {
        handleLogin(code, navigate);
      }
    }
  }, [code, navigate]);

  return (
    <Wrapper>
      <Pickle src={pickleImg} alt="기본 피클 이미지" />
      {isSignup ? "회원가입을 진행하고 있습니다.." : "로그인 중입니다.."}
    </Wrapper>
  );
};

export default LoginRedirection;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Pickle = styled.img`
  height: 200px;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;
