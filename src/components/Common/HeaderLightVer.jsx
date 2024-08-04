import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pickleLogo from "../../assets/logo/PickleLogo.svg";
import { useNavigate } from "react-router-dom";
import HeaderSearchBar from "./HeaderSearchBar";
import LoginModal from "../MainPage/LoginModal";

function HeaderLightVer() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  const handleMenuClick = (url) => {
    navigate(url);
  };

  const handleUserPageClick = (url) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      alert("로그인이 필요합니다.");
      navigate("/");
    } else {
      navigate(url);
    }
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

  const handleSignInClick = () => {
    navigate("/sign");
  };

  const handleSignOutBtnClick = () => {
    localStorage.removeItem("jwtToken");
    // window.location.reload();
    navigate("/");
  };

  return (
    <Wrapper>
      <Menus>
        <Menu onClick={() => handleMenuClick("/")}>홈</Menu>
        <Menu onClick={() => handleMenuClick("/listall")}>강좌목록</Menu>
        <Menu onClick={() => handleUserPageClick("/user")}>마이페이지</Menu>
        <Logo>
          <img
            onClick={handlePickleLogoClick}
            src={pickleLogo}
            alt="피클 로고"
          ></img>
        </Logo>
      </Menus>
      <SignInSection>
        {!token ? (
          <>
            <SignIn onClick={toggleLoginModal}>로그인</SignIn>
            <SignIn onClick={handleSignInClick}>회원가입</SignIn>
          </>
        ) : (
          <SignOut onClick={handleSignOutBtnClick}>로그아웃</SignOut>
        )}
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
  margin-left: 25px;
`;

const Menu = styled.div`
  margin-top: 60px;
  font-size: 18px;
  color: #42a8f8;
  cursor: pointer;
  margin-left: 45px;
  position: relative;
  /* border: 1px solid red; */
  text-align: center;
  min-width: 50px;

  &:first-child {
    margin-left: 200px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-width: 50px;
    transform: scaleX(0);
    height: 6px;
    bottom: 0px;
    left: 0;
    background-color: #42a8f8;
    transform-origin: center;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
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
  display: flex;
  align-items: end;
`;

const SignInSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  position: absolute;
  left: 92%;
  top: 30%;
  transform: translateX(-50%);
  z-index: 1;
`;

const SignIn = styled.div`
  color: #1997fc;
  font-size: 14px;
  cursor: pointer;
`;

const SignOut = styled.div`
  color: #1997fc;
  font-size: 14px;
  cursor: pointer;
  /* border: 1px solid red; */
  margin-left: 70px;
`;
