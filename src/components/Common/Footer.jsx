import React from "react";
import styled from "styled-components";
import pickleLogo from "../../assets/logo/PickleLogo.svg";

function Footer() {
  return (
    <Wrapper>
      <AboutPickle>
        <PickleLogo>
          <img src={pickleLogo} alt="피클 로고" />
          <Text>
            <BlueText>Pick</BlueText> Abilities, Empower Disab
            <BlueText>le</BlueText>d Persons
          </Text>
          <Text>장애인의 운동 기회를 위한 스포츠 강좌 선택 수강 플랫폼</Text>
        </PickleLogo>
      </AboutPickle>
      <MoreInfo>
        <Address>
          <BlueText>주소</BlueText>
          <div> 경상북도 포항시 북구 흥해읍 한동로 558</div>
        </Address>
        <Contact>
          <BlueText>이메일 문의</BlueText>
          <div>yeseul.ove@handong.ac.kr</div>
        </Contact>
      </MoreInfo>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  border-top: 1px solid #e2e2e2;
  height: 196px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AboutPickle = styled.div`
  /* border: 1px solid red; */
  width: 270px;
  height: 68px;
  margin-left: 133px;
`;

const PickleLogo = styled.div`
  img {
    height: 30px;
    width: 56px;
  }
`;

const MoreInfo = styled.div`
  /* border: 1px solid red; */
  width: 430px;
  height: 30px;
  margin-top: 70px;
  margin-right: 124px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-family: "PretendardRegular";
`;

const Address = styled.div`
  /* border: 1px solid red; */
  width: 200px;
`;

const Contact = styled.div`
  /* border: 1px solid red; */
  width: 150px;
`;

const Text = styled.div`
  font-size: 12px;
  margin-bottom: 18px;
  font-family: "PretendardRegular";
`;

const BlueText = styled.span`
  color: #42a8f8;
`;
