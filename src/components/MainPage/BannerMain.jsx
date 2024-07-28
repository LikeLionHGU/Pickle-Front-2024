import React from "react";
import styled from "styled-components";
import mainBannerImg from "../../assets/img/MainBanner.svg";

function BannerMain() {
  return (
    <Wrapper>
      <BannerBg></BannerBg>
    </Wrapper>
  );
}

export default BannerMain;

const Wrapper = styled.div`
  /* border: 3px solid green; */
  height: 413px;
  overflow: hidden;
`;

const BannerBg = styled.div`
  background-image: url(${mainBannerImg});
  width: 108%;
  height: 118%;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
`;
