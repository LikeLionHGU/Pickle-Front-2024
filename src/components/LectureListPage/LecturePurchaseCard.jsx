import React from "react";
import styled from "styled-components";
import heartIcon from "../../assets/img/heart.svg";
import StarRating from "../Common/StarRating";

function LecturePurchaseCard({ course, selectedCourseBlockId }) {
  const possibleDisabilityTypes = course.possibleDisabilityType?.map(
    (item) => item.disabilityType
  );
  const disabilityTypesText = possibleDisabilityTypes?.join(", ");

  console.log("selectedCourseBlockId :", selectedCourseBlockId);
  console.log("course :", course);

  const FormatCourseTime = (courseBlock) => {
    if (!courseBlock) return "";
    // 강좌 시간 포맷팅
    const lectureTimes = courseBlock
      .filter((item) => item.id.toString() === selectedCourseBlockId)
      .map((item) => {
        console.log(">>>>>>>>", item);
        const date = new Date(item.date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        const startTime = `${item.takenHour < 10 ? "0" : ""}${item.takenHour}:${
          item.takenMinute < 10 ? "0" : ""
        }${item.takenMinute}`;
        return `${formattedDate}일 ${startTime}`;
      });
    return lectureTimes.join(", ");
  };

  const formattedTime = FormatCourseTime(course.courseBlock);

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
          <Teacher>{course.teacher.name}</Teacher>
          <DisabailityType>{disabilityTypesText} 장애 가능</DisabailityType>
          <Bottom>
            <Price>{course.price}원</Price>
            <Score>
              <StarRating score={course.teacher.score} />
              <StarRate>({course.teacher.reviewCount})</StarRate>
            </Score>
          </Bottom>
        </InfoSection>
      </Card>
      <BottomInfo>
        <DetailInfo>• {formattedTime}</DetailInfo>
        <DetailInfo>• {course.location}</DetailInfo>
      </BottomInfo>
    </>
  );
}

export default LecturePurchaseCard;

const Card = styled.div`
  width: 460px;
  height: 130px;
  display: flex;
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

const Like = styled.div`
  display: flex;
  padding-top: 4px;
  margin-left: 4px;
  img {
    height: 16px;
  }
`;

const LikeCount = styled.div`
  font-size: 14px;
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
  font-size: 15px;
  margin-left: 4px;
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
