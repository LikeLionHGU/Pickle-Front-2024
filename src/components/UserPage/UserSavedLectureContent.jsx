import React from "react";
import styled from "styled-components";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";

function UserSavedLectureContent() {
  const data = [
    {
      courseId: 1,
      title: "물개가 되는 법",
      name: "이다빈 강사님",
      sportType: "수영",
      location: "경북 포항시 북구",
      score: 3.5,
      disabilityType: "뇌병변 / 시, 청각 장애 가능",
      price: 30000,
      likeCount: 100,
      isLike: true,
      isGroup: false,
      teacherName: "이다빈 강사님",
      imageURL: "../../assets/img/defaultSwimImg.svg",
    },
    {
      courseId: 2,
      title: "물개가 되는 법",
      name: "김예지 강사님",
      sportType: "수영",
      location: "경북 포항시 북구",
      score: 3.5,
      disabilityType: "뇌병변 / 시, 청각 장애 가능",
      price: 30000,
      likeCount: 100,
      isLike: true,
      isGroup: false,
      teacherName: "이다빈 강사님",
      imageURL: "../../assets/img/defaultSwimImg.svg",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Title>최예라 님! 찜한 강의들이에요</Title>
        <CourseContainer>
          <CourseCard></CourseCard>
          <CourseDivideLine />
          <CourseCard></CourseCard>
        </CourseContainer>
      </Content>
    </Wrapper>
  );
}

export default UserSavedLectureContent;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  font-size: 40px;
  padding-top: 90px;
  padding-left: 135px;
`;

const Content = styled.div`
  /* border: 2px solid blue; */
`;

const Title = styled.div`
  font-size: 20px;
`;

const CourseContainer = styled.div`
  /* border: 2px solid green; */
  margin-top: 59px;
  display: flex;
`;
