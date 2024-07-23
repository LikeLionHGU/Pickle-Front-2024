import React from "react";
import styled from "styled-components";
import mainBannerImg from "../../assets/img/MainBanner.svg";

function BannerMain() {
  return <Wrapper></Wrapper>;
}

export default BannerMain;

const Wrapper = styled.div`
  border: 3px solid green;
  height: 413px;

  background-image: url(${mainBannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
