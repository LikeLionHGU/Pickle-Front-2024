import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseDivideLine from "../Common/CourseDivideLine";
import CourseCard from "../Common/CourseCard";
import axios from "axios";

function UserCompleteLetureContent() {
  const [userData, setUserData] = useState();
  const [data, setData] = useState();

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
      })
      .catch(() => {
        setUserData({});
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_HOST_URL
        }/api/mypage/course?isCompleted=${true}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log("data: ", response.data);
        setData(response.data);
      })
      .catch(() => {
        setData({});
      });
  }, []);

  if (!data) return <div>Loading...</div>;
  if (!userData) return <div>Loading..</div>;

  return (
    <Wrapper>
      <Content>
        <Title>{userData.nickname} 님! 지금까지 수강했던 강좌들이에요</Title>
        <Count>총 {data.length}개를 수강했습니다</Count>
        <CourseContainer>
          {data.map((data, index) => (
            <React.Fragment key={data.courseId}>
              <CourseCard course={data} />
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
  padding-left: 120px;
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
  width: 1040px;
  margin-top: 59px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
