import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseDivideLine from "../Common/CourseDivideLine";
import CourseCard from "../Common/CourseCard";
import axios from "axios";
import { Link } from "react-router-dom";
import pickleImg from "../../assets/img/UserLevel0.svg";
import grayPickle from "../../assets/img/grayUserLevel0.svg";

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

  if (!data)
    return (
      <LoadingWrapper>
        <Pickle src={pickleImg} alt="기본 피클 이미지" />
        <LoadingText>로딩 중..</LoadingText>
      </LoadingWrapper>
    );
  if (!userData) return <div></div>;

  return (
    <Wrapper>
      <Content>
        <Title>{userData.nickname} 님! 지금까지 수강했던 강좌들이에요</Title>
        <Count>총 {data.length}개를 수강했습니다</Count>
        {data.length === 0 ? (
          <CourseContainer>
            <NoCourse>
              <div>
                <img src={grayPickle} alt="회색 피클 이미지" />
                <NoCourseText>아직 완료한 강좌가 없습니다.</NoCourseText>
              </div>
            </NoCourse>
          </CourseContainer>
        ) : (
          <CourseContainer>
            {data.map((data, index) => (
              <Link
                key={data.id}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
                to={`/lecture/${data.id}`}
              >
                <React.Fragment key={data.id}>
                  <CourseCard course={data} />
                  {index % 2 === 0 && <CourseDivideLine />}
                </React.Fragment>
              </Link>
            ))}
          </CourseContainer>
        )}
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

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Pickle = styled.img`
  height: 200px;
`;

const LoadingText = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;

const NoCourse = styled.div`
  display: flex;
  margin-left: 350px;
  margin-top: 60px;
  height: 500px;
  width: 1040px;
  /* border: 1px solid red; */

  img {
    height: 200px;
    padding-left: 50px;
    /* border: 1px solid red; */
  }
`;

const NoCourseText = styled.div`
  font-size: 20px;
  margin-top: 10px;
  color: #9c9c9c;
  padding-left: 20px;
`;
