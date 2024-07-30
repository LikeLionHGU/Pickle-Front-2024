import React from "react";
import styled from "styled-components";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import data from "../../components/Common/CourseDummyData";

function UserSavedLectureContent() {
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
  border: 2px solid green;
  width: 1040px;
  margin-top: 59px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
