import React, { useState } from "react";
import styled from "styled-components";
import LectureFilterContainer from "./LectureFilterContainer";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import data from "../../components/Common/CourseDummyData";
import PaginationCom from "../Common/PaginationCom";
import { Link } from "react-router-dom";

// LectureFilterContainer 는 나중에 지우고 FilterContainerMain 컴포넌트로 import 할거임

function LectureListContent() {
  // const [posts, setPosts] = useState(tempdatas);
  const [limit, setlimit] = useState(4); // setlimit을 통해 화면에 표시될 콘텐츠 수 조절 가능.
  const [page, setPage] = useState(1); // 처음에 몇 번째 페이지를 보여줄 건지
  const offset = (page - 1) * limit;

  return (
    <Wrapper>
      <Title>최예라님의 검색 결과에요!</Title>
      <LectureFilterContainer />
      <CourseContainer>
        {data.map((course, index) => (
          <Link
            key={course.courseId}
            style={{ textDecoration: "none", color: "black", display: "flex" }}
            to={`/lecture/${course.courseId}`}
          >
            <React.Fragment key={course.courseId}>
              <CourseCard course={course} />
              {index % 2 === 0 && <CourseDivideLine />}
            </React.Fragment>
          </Link>
        ))}
      </CourseContainer>
      <PaginationCom total={30} limit={limit} page={page} setPage={setPage} />
    </Wrapper>
  );
}

export default LectureListContent;

const Wrapper = styled.div`
  /* border: 3px solid red; */
  width: 1020px;
  margin: auto;
  margin-top: 97px;
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const CourseContainer = styled.div`
  /* border: 2px solid green; */
  width: 1020px;
  margin-top: 59px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
