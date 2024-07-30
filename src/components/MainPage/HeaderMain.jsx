import React from "react";
import styled from "styled-components";
import pickleLogo from "../../assets/logo/PickleWhiteLogo.svg";
import { useNavigate } from "react-router-dom";
import HeaderSearchBar from "../Common/HeaderSearchBar";

function HeaderMain() {
  const navigate = useNavigate();

  const handleMenuClick = (url) => {
    navigate(url);
  };

  const handlePickleLogoClick = () => {
    navigate("/");
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
      <HeaderSearchBar borderColor="#ffffff" placeholderColor="#ffffff" />
    </Wrapper>
  );
}

export default HeaderMain;

const Wrapper = styled.div`
  height: 98px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 1440px;
  font-family: "PretendardRegular";
  /* border: 1px solid red; */
`;

const Menus = styled.div`
  border-bottom: 1px solid white;
  width: 100%;
  margin-right: 15px;
  display: flex;
`;

const Menu = styled.div`
  /* border: 2px solid green; */
  margin-top: 60px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  margin-left: 55px;

  &:first-child {
    margin-left: 244px;
  }
`;

const Logo = styled.div`
  height: 25px;
  width: 90px;
  margin-top: 54px;
  margin-left: 200px;
  cursor: pointer;
`;
