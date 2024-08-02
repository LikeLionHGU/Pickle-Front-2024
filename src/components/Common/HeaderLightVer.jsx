import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pickleLogo from "../../assets/logo/PickleLogo.svg";
import { useNavigate } from "react-router-dom";
import HeaderSearchBar from "./HeaderSearchBar";
import LoginModal from "../MainPage/LoginModal";

function HeaderLightVer() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (url) => {
    navigate(url);
  };

  const handlePickleLogoClick = () => {
    navigate("/");
  };

  const toggleLoginModal = () => {
    setLoginModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isLoginModalOpen ? "hidden" : "auto";
  }, [isLoginModalOpen]);

  console.log("is modal open: ", isLoginModalOpen);

  const handleSignInClick = () => {
    navigate("/sign");
  };

  return (
    <Wrapper>
      <Menus>
        <Menu onClick={() => handleMenuClick("/")}>홈</Menu>
        <Menu onClick={() => handleMenuClick("/lecture")}>강좌목록</Menu>
        <Menu onClick={() => handleMenuClick("/user")}>마이페이지</Menu>
        <Logo>
          <img
            onClick={handlePickleLogoClick}
            src={pickleLogo}
            alt="피클 로고"
          ></img>
        </Logo>
      </Menus>
      <SignInSection>
        <SignIn onClick={toggleLoginModal}>로그인</SignIn>
        <SignIn onClick={handleSignInClick}>회원가입</SignIn>
      </SignInSection>
      {isLoginModalOpen && <LoginModal toggleModal={toggleLoginModal} />}
      <SearchSection>
        <HeaderSearchBar />
      </SearchSection>
    </Wrapper>
  );
}

export default HeaderLightVer;

const Wrapper = styled.div`
  height: 98px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  font-family: "PretendardRegular";
`;

const Menus = styled.div`
  border-bottom: 1px solid #42a8f8;
  width: 100%;
  margin-right: 15px;
  display: flex;
  /* border: 1px solid red; */
  margin-left: 44px;
`;

const Menu = styled.div`
  /* border: 2px solid green; */
  margin-top: 60px;
  font-size: 18px;
  color: #42a8f8;
  cursor: pointer;
  margin-left: 55px;

  &:first-child {
    margin-left: 200px;
  }
`;

const Logo = styled.div`
  height: 25px;
  width: 90px;
  margin-top: 54px;
  margin-left: 170px;
  cursor: pointer;
`;

const SearchSection = styled.div`
  width: 340px;
  /* border: 1px solid red; */
  display: flex;
  align-items: end;
`;

const SignInSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  /* border: 1px solid green; */
  position: absolute;
  left: 92%;
  top: 30%;
  transform: translateX(-50%);
  z-index: 1;
`;

const SignIn = styled.div`
  /* border: 1px solid red; */
  color: #1997fc;
  font-size: 14px;
  cursor: pointer;
`;
