import React from "react";
import styled from "styled-components";
import defaultImg from "../../assets/img/defaultSwimImg.svg";
import like from "../../assets/img/like.svg";

function CourseCard() {
  return (
    <Card>
      <img src={defaultImg} alt="기본 강좌 이미지"></img>
      <InfoSection>
        <Top>
          <Title>물개가 되는 법</Title>
          {/* <Like>
            <img src={like} alt="좋아요 아이콘"></img>
          </Like> */}
        </Top>
        <Tags>
          <Tag># 경북 포항시 북구</Tag>
          <Tag>수영</Tag>
          <Tag>7월 17일</Tag>
        </Tags>
        <Teacher>이다빈 강사님</Teacher>
        <DisabailityType>뇌병변, 시/청각 장애 가능</DisabailityType>
        <Price>30,000원</Price>
      </InfoSection>
    </Card>
  );
}

export default CourseCard;

const Card = styled.div`
  border: 1px solid lightgray;
  width: 480px;
  height: 130px;
  display: flex;
  cursor: pointer;
  /* box-shadow: 0 10px 10px rgba(52, 52, 52, 0.15),
    0 3px 3px rgba(34, 34, 34, 0.23); */
`;

const InfoSection = styled.div`
  width: 100%;
  padding-left: 26px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 2px solid red; */
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Like = styled.div``;

const Tags = styled.div`
  display: flex;
  margin-bottom: 10px;
  /* border: 2px solid blue; */
`;

const Tag = styled.div`
  background-color: #4aabf9;
  color: white;
  height: 19px;
  font-size: 12px;
  border-radius: 22px;
  padding: 3px 9px;
  margin-left: 11px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-left: 0;
  }
`;

const Teacher = styled.div`
  font-size: 14px;
`;

const DisabailityType = styled.div`
  font-size: 12px;
  margin-top: 3px;
`;

const Price = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;
