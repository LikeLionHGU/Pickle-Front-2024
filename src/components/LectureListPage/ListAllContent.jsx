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

      let response = await axios.get("http://15.164.88.154:8080/api/course", {
        params: params,
      });
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
        {location.state && (
          <SelectedContentBox
            selectedRegion={location.state.selectedRegion}
            selectedSportType={location.state.selectedSportType}
            selectedDisabilityType={location.state.selectedDisabilityType}
            selectedDate={location.state.selectedDate}
            selectedPrice={location.state.selectedPrice}
            handleClearSelection={() => {}}
          />
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
                <CourseCard course={course} />
                {index % 2 === 0 && <CourseDivideLine />}
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
