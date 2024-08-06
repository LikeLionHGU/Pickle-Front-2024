import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import axios from "axios";
import PaginationCom from "../Common/PaginationCom";
import { Link } from "react-router-dom";
import BgColor from "../Common/BgColor";
import FilterContainerMain from "../MainPage/FilterContainerMain";
import SelectedContentBox from "../MainPage/SelectedContentBox";
import pickleImg from "../../assets/img/UserLevel0.svg";

function LectureListContent() {
  const [courses, setCourses] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const navigate = useNavigate();
  const location = useLocation();

  const handleData = async () => {
    try {
      const params = {
        page: 0,
        size: 100,
        direction: "DESC",
      };

      console.log("Request params:", params);

      let response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/course`,
        {
          params: params,
        }
      );
      setCourses(response.data); // Ensuring content is an array
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <BgColor>
      <Wrapper>
        <Title>피클에 있는 강의들이에요</Title>
        <Text>총 {courses.length}개가 조회되었습니다</Text>
        <Filter>
          <FilterContainerMain
            absolute={false}
            transform="none"
            top="0%"
            left="0%"
            marginTop="0px"
            marginLeft="0px"
            noPosition
          />
        </Filter>
        <CourseContainer>
          {courses.length > 0 ? (
            courses.slice(offset, offset + limit).map((course, index) => (
              <Link
                key={course.id}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
                to={`/lecture/${course.id}`}
              >
                <CourseCard course={course} />
                {index % 2 === 0 && <CourseDivideLine />}
              </Link>
            ))
          ) : (
            <LoadingWrapper>
              <Pickle src={pickleImg} alt="기본 피클 이미지" />
              <span>강좌 정보 불러오는 중..</span>
            </LoadingWrapper>
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
  /* border: 1px solid red; */
  width: 1000px;
  margin: auto;
  padding-top: 97px;
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 14px;
`;

const Text = styled.div`
  font-size: 15px;
  color: #989898;
  margin-bottom: 40px;
`;

const Filter = styled.div`
  width: 100%;
`;

const CourseContainer = styled.div`
  width: 1000px;
  margin-top: 59px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Pickle = styled.img`
  height: 100px;
`;

const LoadingWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;
