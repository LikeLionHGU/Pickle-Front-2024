import React, { useEffect, useState } from "react";
import styled from "styled-components";
import userLevel0 from "../../assets/img/UserLevel0.svg";
import userLevel1 from "../../assets/img/UserLevel1.svg";
import userLevel2 from "../../assets/img/UserLevel2.svg";
import userLevel3 from "../../assets/img/UserLevel3.svg";
import star from "../../assets/img/rateStar.svg";
import arrow from "../../assets/img/rateArrow.svg";
import axios from "axios";
import grayUserLevel0 from "../../assets/img/grayUserLevel0.svg";
import grayUserLevel1 from "../../assets/img/grayUserLevel1.svg";
import grayUserLevel2 from "../../assets/img/grayUserLevel2.svg";
import grayUserLevel3 from "../../assets/img/grayUserLevel3.svg";

function UserPointContent() {
  const [userLevel, setUserLevel] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/mypage/exp`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserLevel(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/mypage`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      });
  }, []);

  const getImageSrc = (level) => {
    switch (level) {
      case 0:
        return userLevel.level === 0 ? userLevel0 : grayUserLevel0;
      case 1:
        return userLevel.level === 1 ? userLevel1 : grayUserLevel1;
      case 2:
        return userLevel.level === 2 ? userLevel2 : grayUserLevel2;
      case 3:
        return userLevel.level === 3 ? userLevel3 : grayUserLevel3;
      default:
        return null;
    }
  };

  if (!userLevel) return <div>Loading..</div>;
  if (!userData) return <div>Loading..</div>;

  return (
    <>
      <Wrapper>
        <UserSection>
          <Title>현재 {userData.nickname}님의 등급이에요 !</Title>
          <UserImg>
            <img src={getImageSrc(userLevel.level)} alt="등급이미지" />
          </UserImg>
          <UserDetail>
            운동에 맛 들린 <Blue>뚜벅이</Blue>
          </UserDetail>
        </UserSection>
        <RateSection>
          <RateContainer>
            <CharacterContainer>
              <Character className="level0">
                <img src={getImageSrc(0)} alt="0등급" />
                <RateText>씨클 등급</RateText>
              </Character>
              <Arrow src={arrow} alt="화살표" />
              <Character className="level1">
                <img src={getImageSrc(1)} alt="1등급" />
                <RateText className="level1">비클 등급</RateText>
              </Character>
              <Arrow src={arrow} alt="화살표" />
              <Character className="level2">
                <img src={getImageSrc(2)} alt="2등급" />
                <RateText className="level2">에이클 등급</RateText>
              </Character>
              <Arrow src={arrow} alt="화살표" />
              <Character className="level3">
                <img src={getImageSrc(3)} alt="3등급" />
                <RateText className="level3">피클 등급</RateText>
              </Character>
            </CharacterContainer>
          </RateContainer>
          <RateDetailContainer>
            <Benefits>
              <Category>혜택</Category>
              <TextContainer>
                <Text>뚜벅이를 위한 일일 체험권 1회 제공</Text>
                <Text>새로운 강의 도전 시 10% 할인</Text>
                <Text>일주일에 두 번 연속 강의 수강시 10% 할인</Text>
              </TextContainer>
            </Benefits>
            <NextRate>
              <Category>다음 등급</Category>
              <TextContainer>
                <Text>
                  3번 이상 강의를 들을 시 <Blue> '씽씽이' </Blue> 달성
                  <img src={star} alt="별 아이콘" />
                </Text>
              </TextContainer>
            </NextRate>
          </RateDetailContainer>
        </RateSection>
      </Wrapper>
    </>
  );
}

export default UserPointContent;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  font-size: 40px;
  display: flex;
`;

const UserSection = styled.div`
  border-right: 1px solid #d9d9d9;
  width: 510px;
  height: 580px;
  margin-top: 80px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-left: 65px;
`;

const UserImg = styled.div`
  /* border: 1px solid red; */
  width: 335px;
  height: 335px;
  margin: auto;
  margin-top: 42px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(214, 214, 214, 0.3),
    0 10px 10px rgba(225, 225, 225, 0.22);
  img {
    height: 257px;
    width: 209px;
    /* border: 1px solid red; */
  }
`;

const UserDetail = styled.div`
  font-size: 19px;
  text-align: center;
  margin-top: 45px;
`;

const Blue = styled.span`
  color: #24c2f3;
`;

const RateSection = styled.div`
  /* border: 1px solid red; */
`;

const RateContainer = styled.div`
  border: 1px solid #ecececda;
  width: 645px;
  height: 206px;
  margin-left: 61px;
  margin-top: 90px;
  border-radius: 15px;

  box-shadow: 0 10px 10px rgba(171, 171, 171, 0.3),
    0 10px 10px rgba(177, 176, 176, 0.22);
`;

const CharacterContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 32px;
  margin-left: 30px;
  margin-right: 36px;
  display: flex;
`;

const Character = styled.div`
  height: 145px;
  /* border: 1px solid green; */

  &.level0 img {
    width: 80px;
    height: 100px;
  }

  &.level1 img {
    width: 111px;
    height: 95px;
  }

  &.level2 img {
    width: 113px;
    height: 119px;
  }

  &.level3 img {
    width: 100px;
    height: 80px;
    margin-top: 15px;
  }
`;

const Arrow = styled.img`
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 50px;
  height: 15px;
`;

const RateText = styled.div`
  font-size: 17px;
  text-align: center;
  margin-top: 18px;

  &.level1 {
    margin-top: 24px;
  }

  &.level2 {
    margin: 0px;
  }

  &.level3 {
    margin-top: 24px;
  }
`;

const RateDetailContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 92px;
  margin-left: 100px;
`;

const Benefits = styled.div`
  /* border: 1px solid green; */
  display: flex;
`;

const NextRate = styled.div`
  /* border: 1px solid blue; */
  margin-top: 56px;
  display: flex;
`;

const Category = styled.div`
  background-color: #eaeaea;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 30px;
`;

const TextContainer = styled.div`
  /* border: 1px solid red; */
  margin-left: 24px;
  margin-top: 3px;
`;

const Text = styled.div`
  font-size: 19px;
  margin-bottom: 10px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;

  img {
    margin-left: 3px;
    height: 25px;
    padding-bottom: 4px;
  }
`;
