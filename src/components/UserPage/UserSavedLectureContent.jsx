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
      imageURL:
        "https://cdn.pixabay.com/photo/2019/07/01/10/44/water-4309678_1280.jpg",
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
      imageURL:
        "https://cdn.pixabay.com/photo/2019/07/01/10/44/water-4309678_1280.jpg",
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
      imageURL:
        "https://cdn.pixabay.com/photo/2019/07/01/10/44/water-4309678_1280.jpg",
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
      imageURL:
        "https://cdn.pixabay.com/photo/2019/07/01/10/44/water-4309678_1280.jpg",
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
      imageURL:
        "https://cdn.pixabay.com/photo/2019/07/01/10/44/water-4309678_1280.jpg",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Title>최예라 님! 찜한 강의들이에요</Title>
        <CourseContainer>
          {data.map((course, index) => (
            <React.Fragment key={course.courseId}>
              <CourseCard course={course} />
              {index % 2 === 0 && <CourseDivideLine />}
            </React.Fragment>
          ))}
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
  width: 1020px;
  margin-top: 59px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
