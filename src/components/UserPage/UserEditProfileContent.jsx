import React from "react";
import styled from "styled-components";
import BlueBtn from "../Common/CommonBtn/BlueBtn";
import GrayInfoBox from "../Common/GrayInfoBox";

function UserEditProfileContent() {
  // const data = [
  //   {
  //     name: "이빈치",
  //     bornYear: 1990,
  //     bornMonth: 5,
  //     bornDay: 15,
  //     sex: true, // true | false
  //     nickname: "다빈치",
  //     description: "저는 맥도날드를 좋아합니다",
  //     disabilityType: "시각장애",
  //     disabilityLevel: 3,
  //     contactNumber: 1111111,
  //     familyNumber: 1112222,
  //   },
  // ];

  return (
    <Wrapper>
      <Contents>
        <Title>최예라 님의 프로필 정보에요</Title>
        <Content>
          <InfoLeft>
            <UserInfo>이름</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
            <UserInfo>닉네임</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
            <UserInfo>성별</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
            <UserInfo>전화번호</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
            <UserInfo>보호자 연락처</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
          </InfoLeft>
          <InfoRight>
            <UserInfo>생년월일</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
            <UserInfo>주소</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
            <UserInfo>특이사항</UserInfo>
            <GrayInfoBox>테스트</GrayInfoBox>
            <HalfInfo>
              <HalfContent>
                {" "}
                <UserInfo>장애 유형</UserInfo>
                <GrayInfoBox>테스트</GrayInfoBox>
              </HalfContent>
              <HalfContent>
                <UserInfo>등급</UserInfo>
                <GrayInfoBox>테스트</GrayInfoBox>
              </HalfContent>
            </HalfInfo>
            <AddInfoBtn>+</AddInfoBtn>
          </InfoRight>
        </Content>
      </Contents>
      <Btn>
        <BlueBtn>수정하기</BlueBtn>
      </Btn>
    </Wrapper>
  );
}

export default UserEditProfileContent;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  font-size: 40px;
  padding-top: 90px;
  padding-left: 135px;
  display: flex;
  background-color: #fafafa;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Btn = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: end;
  margin-bottom: 50px;
`;

const Contents = styled.div`
  /* border: 2px solid blue; */
  margin-right: 190px;
`;

const Content = styled.div`
  /* border: 2px solid red; */
  margin-top: 18px;
  width: 762px;
  display: flex;
  justify-content: space-between;
`;

const InfoLeft = styled.div`
  /* border: 1px solid green; */
  width: 310px;
`;

const InfoRight = styled.div`
  /* border: 1px solid green; */
  width: 360px;
`;

const UserInfo = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const HalfInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const HalfContent = styled.div`
  /* border: 1px solid blue; */
  width: 173px;
`;

const AddInfoBtn = styled.div`
  border: 1px solid #d1d1d1;
  height: 45px;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #939393;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
  cursor: pointer;
`;
