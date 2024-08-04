import React from "react";
import styled from "styled-components";
import StarRating from "../../components/Common/StarRating";
import heartIcon from "../../assets/img/heart.svg";

function TeacherProfileCard({ teacher, course }) {
  const possibleDisabilityTypes = course.possibleDisabilityType?.map(
    (item) => item.disabilityType
  );
  const disabilityTypesText = possibleDisabilityTypes?.join(", ");

  if (!teacher) return <div></div>;

  return (
    <>
      <Card>
        <CourseImg>
          <img src={course.imageURL} alt="기본 강좌 이미지"></img>
        </CourseImg>
        <InfoSection>
          <Top>
            <Title>{course.title}</Title>
            <Like>
              <img src={heartIcon} alt="좋아요 아이콘"></img>
              <LikeCount>{course.likeCount}</LikeCount>
            </Like>
          </Top>
          <Tags>
            <Tag>#{course.location}</Tag>
            <Tag>{course.sportType}</Tag>
          </Tags>
          <Teacher>{teacher.name}</Teacher>
          <DisabailityType>{disabilityTypesText}</DisabailityType>
          <Bottom>
            <Price>{course.price.toLocaleString()}원</Price>
            <Score>
              <StarRating score={teacher.score} />
              <StarRate>({teacher.reviewCount})</StarRate>
            </Score>
          </Bottom>
        </InfoSection>
      </Card>
    </>
  );
}

export default TeacherProfileCard;

const Card = styled.div`
  /* border: 1px solid rgba(80, 80, 80, 0.15); */
  width: 490px;
  height: 130px;
  display: flex;
  cursor: pointer;
  margin-bottom: 25px;
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
  /* border: 2px solid red; */
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid green; */
  img {
    height: 10px;
  }
`;

const LikeCount = styled.div`
  font-size: 13px;
  color: #ff1c1c;
  margin-left: 3px;
`;

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

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Score = styled.div`
  /* border: 1px solid red; */
  display: flex;
`;

const StarRate = styled.div`
  font-size: 13px;
  padding-top: 2px;
  margin-left: 4px;
`;
