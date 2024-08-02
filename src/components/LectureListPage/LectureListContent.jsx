import React, { useState } from "react";
import styled from "styled-components";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import data from "../../components/Common/CourseDummyData";
import PaginationCom from "../Common/PaginationCom";
import { Link } from "react-router-dom";
import BgColor from "../Common/BgColor";
import FilterContainerMain from "../MainPage/FilterContainerMain";

function LectureListContent() {
  // const [posts, setPosts] = useState(tempdatas);
  const [limit, setlimit] = useState(4); // setlimit을 통해 화면에 표시될 콘텐츠 수 조절 가능.
  const [page, setPage] = useState(1); // 처음에 몇 번째 페이지를 보여줄 건지
  const offset = (page - 1) * limit;

  return (
    <BgColor>
      <Wrapper>
        <Title>최예라님의 검색 결과에요!</Title>
        <Filter>
          <FilterContainerMain
            absolute={false}
            marginTop="0px"
            marginLeft="0px"
          />
        </Filter>
        <CourseContainer>
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
        </CourseContainer>
        <PaginationCom total={30} limit={limit} page={page} setPage={setPage} />
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
