import React from "react";
import styled from "styled-components";
import mainBannerImg from "../../assets/img/MainBanner.svg";

function BannerMain() {
  return (
    <Wrapper>
      <img src={mainBannerImg} alt="메인페이지 배너"></img>
    </Wrapper>
  );
}

export default BannerMain;

const Wrapper = styled.div`
  border: 3px solid green;
  height: 413px;
`;
