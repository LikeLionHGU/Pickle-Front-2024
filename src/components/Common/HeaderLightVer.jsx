import React from "react";
import styled from "styled-components";
import pickleLogo from "../../assets/logo/PickleLogo.svg";
import { useNavigate } from "react-router-dom";

function HeaderLightVer() {
  const navigate = useNavigate();

  const handlePickleLogoClick = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Logo>
        {" "}
        <img
          onClick={handlePickleLogoClick}
          src={pickleLogo}
          alt="피클 로고"
        ></img>
      </Logo>
    </Wrapper>
  );
}

export default HeaderLightVer;

const Wrapper = styled.div`
  border: 1px solid #ebebeb;
  height: 98px;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  height: 25px;
  width: 90px;
  cursor: pointer;
`;
