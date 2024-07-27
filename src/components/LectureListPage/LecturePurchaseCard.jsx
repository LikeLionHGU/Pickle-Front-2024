import React from "react";
import styled from "styled-components";

function LecturePurchaseCard({ course }) {
  return (
    <>
      <Card>
        <CourseImg>
          <img src={course.imageURL} alt="기본 강좌 이미지"></img>
        </CourseImg>
        <InfoSection>
          <Top>
            <Title>{course.title}</Title>
            {/* <Like>
          <img src={like} alt="좋아요 아이콘"></img>
        </Like> */}
          </Top>
          <Tags>
            <Tag>#{course.location}</Tag>
            <Tag>{course.sportType}</Tag>
            <Tag>7월 17일</Tag>
          </Tags>
          <Teacher>{course.name}</Teacher>
          <DisabailityType>{course.disabilityType}</DisabailityType>
          <Price>{course.price}원</Price>
        </InfoSection>
      </Card>
      <BottomInfo>
        <DetailInfo>• 7월 17일 월요일 오후 6시</DetailInfo>{" "}
        <DetailInfo>• 포항시 남구 포스플렉스 수영장</DetailInfo>
      </BottomInfo>
    </>
  );
}

export default LecturePurchaseCard;

const Card = styled.div`
  width: 460px;
  height: 130px;
  display: flex;
  cursor: pointer;
  /* border: 1px solid red; */
`;

const InfoSection = styled.div`
  width: 100%;
  padding-left: 26px;
`;

const CourseImg = styled.div`
  width: 200px;

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
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

const BottomInfo = styled.div`
  /* border: 1px solid green; */
  margin-top: 47px;
  padding-left: 30px;
`;

const DetailInfo = styled.div`
  font-size: 17px;

  &:last-child {
    margin-top: 24px;
  }
`;
