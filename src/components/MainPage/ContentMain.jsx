import React, { useState } from "react";
import styled from "styled-components";
import PaginationCom from "../Common/PaginationCom.jsx";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import data from "../../components/Common/CourseDummyData";
import { Link } from "react-router-dom";

import SliderCom from "../Common/SliderCom.jsx";

function ContentMain() {
  // const [posts, setPosts] = useState(tempdatas);
  const [limit, setlimit] = useState(4); // setlimit을 통해 화면에 표시될 콘텐츠 수 조절 가능.
  const [page, setPage] = useState(1); // 처음에 몇 번째 페이지를 보여줄 건지
  const offset = (page - 1) * limit;

  return (
    <Wrapper>
      {/* <SliderCom /> */}
      <AdCourse>
        이런 강좌는 어떠세요?
        <AdContainer>
          <CouseContainer>
            {data.map((course, index) => (
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
            ))}
          </CouseContainer>
        </AdContainer>
      </AdCourse>
      <PopularCourse>
        최예라 님과 가까운 곳의 인기 강좌예요 !
        <PopularContainer>
          <CouseContainer>
            {data.map((course, index) => (
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
            ))}
          </CouseContainer>
        </PopularContainer>
      </PopularCourse>
      {/* <PaginationCom
        total={30}
        // limit={10}
        // page={5}
        // setPage={10}
        // total={posts.length}
        limit={limit}
        page={page}
        setPage={setPage}
      /> */}
    </Wrapper>
  );
}

export default ContentMain;

const Wrapper = styled.div`
  width: 1160px;
  margin: auto;
  margin-top: 175px;
  font-size: 20px;
  padding-bottom: 40px;
`;

const AdCourse = styled.div`
  margin-bottom: 63px;
`;

const AdContainer = styled.div`
  width: 445px;
  /* height: 115px; */
`;
const PopularCourse = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const PopularContainer = styled.div`
  width: 445px;
  height: 115px;
`;
const CouseContainer = styled.div`
  width: 1040px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const CName = styled.div``;
