import React from "react";
import styled from "styled-components";
import mainBannerImg from "../../assets/img/MainBanner.svg";

function BannerMain() {
  return (
    <Wrapper>
      <BannerBg>
        <Greeting>
          <MainText>안녕하세요, 최예라 님</MainText>
          <MainText>어떤 운동을 계획 중이세요 ?</MainText>
          <Rate>Lv.1</Rate>
        </Greeting>
      </BannerBg>
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

const Greeting = styled.div`
  /* border: 2px solid red; */
  padding-top: 155px;
  padding-left: 220px;
  color: white;
  font-size: 30px;
`;

const MainText = styled.div`
  /* border: 2px solid red; */
  margin-top: 10px;
`;

const Rate = styled.div`
  color: #ffdd85;
  font-size: 16px;
  margin-top: 25px;
`;
