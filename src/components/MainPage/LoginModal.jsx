import React from "react";
import styled from "styled-components";
import exitBtn from "../../assets/img/exit.svg";
import googleLoginBtn from "../../assets/img/googleLoginBtn.svg";
import kakaoLoginBtn from "../../assets/img/kakaoLoginBtn.svg";

function LoginModal({ toggleModal }) {
  return (
    <Modal>
      <Overlay onClick={toggleModal} />
      <ModalContent>
        <ModalWrapper>
          <Top>
            <img
              onClick={toggleModal}
              src={exitBtn}
              alt="모달 닫기 아이콘"
            ></img>
          </Top>
          <Login>로그인</Login>
          <Content>
            <GoogleLoginBtn
              src={googleLoginBtn}
              alt="구글 로그인 버튼"
            ></GoogleLoginBtn>
            <KakaoLoginBtn
              src={kakaoLoginBtn}
              alt="카카오 로그인 버튼"
            ></KakaoLoginBtn>
          </Content>
          <SignIn>회원가입</SignIn>
        </ModalWrapper>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;

const modalStyles = `
  width: 100vw; 
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Modal = styled.div`
  ${modalStyles}
  z-index: 99999;
`;

const Overlay = styled.div`
  ${modalStyles}
  background:rgba(57, 57, 57, 0.5);
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 2px;
  width: 325px;
  height: 646px;
`;

const ModalWrapper = styled.div`
  /* border: 1px solid red; */
  width: 285px;
  height: 620px;
  margin: auto;
  margin-top: 20px;
`;

const Top = styled.div`
  /* border: 1px solid red; */
  text-align: right;

  img {
    height: 15px;
    cursor: pointer;
  }
`;

const Login = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: 24px;
  font-family: "PretendardSemiBold";
`;

const Content = styled.div`
  margin-top: 37px;
`;

const GoogleLoginBtn = styled.img`
  width: 100%;
  height: 38px;
  cursor: pointer;
`;

const KakaoLoginBtn = styled.img`
  margin-top: 10px;
  width: 100%;
  height: 38px;
  cursor: pointer;
`;

const SignIn = styled.div`
  color: #4a4a4a;
  font-size: 14px;
  text-align: end;
  margin-top: 29px;
  text-decoration: underline;
  cursor: pointer;
`;
