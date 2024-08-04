import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import data from "../../components/Common/CourseDummyData";
import PaginationCom from "../Common/PaginationCom";
import { Link } from "react-router-dom";
import BgColor from "../Common/BgColor";
import FilterContainerMain from "../MainPage/FilterContainerMain";
import axios from "axios";

function LectureListContent({ courses }) {
  const [limit, setlimit] = useState(8); // setlimit을 통해 화면에 표시될 콘텐츠 수 조절 가능.
  const [page, setPage] = useState(1); // 처음에 몇 번째 페이지를 보여줄 건지
  const offset = (page - 1) * limit;
  const [userData, setUserData] = useState();

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

  if (!userData) return <div>Loading..</div>;

  return (
    <BgColor>
      <Wrapper>
        {userData.nickname ? (
          <>
            <Title>{userData.nickname} 님의 검색 결과예요!</Title>
          </>
        ) : (
          <Title>강좌 검색 결과예요!</Title>
        )}
        <Filter>
          <FilterContainerMain
            absolute={false}
            marginTop="0px"
            marginLeft="0px"
          />
        </Filter>
        <CourseContainer>
          {courses.length > 0 ? (
            courses.slice(offset, offset + limit).map((course, index) => (
              <Link
                key={course.courseId}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
                to={`/lecture/${course.courseId}`}
              >
                <React.Fragment key={course.courseId}>
                  <CourseCard course={course} />
                  {index % 2 === 0 && <CourseDivideLine />}
                </React.Fragment>
              </Link>
            ))
          ) : (
            <p>강좌가 없습니다.</p>
          )}
        </CourseContainer>
        <PaginationCom
          total={courses.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Wrapper>
    </BgColor>
  );
}

export default LectureListContent;

const Wrapper = styled.div`
  /* border: 3px solid red; */
  width: 1000px;
  margin: auto;
  padding-top: 97px;
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Filter = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`;

const CourseContainer = styled.div`
  /* border: 2px solid green; */
  width: 1000px;
  margin-top: 59px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
