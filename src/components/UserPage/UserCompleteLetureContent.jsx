import React from "react";
import styled from "styled-components";
import data from "../../components/Common/CourseDummyData";
import CourseDivideLine from "../Common/CourseDivideLine";
import CourseCard from "../Common/CourseCard";

function UserCompleteLetureContent() {
  return (
    <Wrapper>
      <Content>
        <Title>최예라 님! 지금까지 수강했던 강의들이에요</Title>
        <Count>총 10개를 수강했습니다</Count>
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

export default UserCompleteLetureContent;

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

const Count = styled.div`
  margin-top: 8px;
  font-size: 17px;
  color: #989898;
`;

const CourseContainer = styled.div`
  /* border: 2px solid green; */
  width: 1020px;
  margin-top: 59px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
