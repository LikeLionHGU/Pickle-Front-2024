import React, { useState } from "react";
import styled from "styled-components";
import PaginationCom from "../Common/PaginationCom.jsx";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import data from "../../components/Common/CourseDummyData";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ContentMain() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [limit, setLimit] = useState(4); // Number of courses per page
  const [page, setPage] = useState(1); // Current page

  // Calculate offset and slice data for current page
  const offset = (page - 1) * limit;
  const paginatedData = data.slice(offset, offset + limit);

  return (
    <Wrapper>
      {/* Slider for displaying featured courses or ads */}
      <AdCourse>
        이런 강좌는 어떠세요?
        <Slider {...settings}>
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h1>2</h1>
          </div>
          <div>
            <h1>3</h1>
          </div>
        </Slider>
        <AdContainer>
          <CourseContainer>
            {paginatedData.map((course, index) => (
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
        </AdContainer>
      </AdCourse>
      <PopularCourse>
        최예라 님과 가까운 곳의 인기 강좌예요 !
        <PopularContainer>
          <CourseContainer>
            {paginatedData.map((course, index) => (
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
        </PopularContainer>
      </PopularCourse>
      <PaginationCom
        total={data.length} // Total number of items
        limit={limit} // Number of items per page
        page={page} // Current page
        setPage={setPage} // Function to update the current page
      />
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
`;

const PopularCourse = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const PopularContainer = styled.div`
  width: 445px;
  height: 115px;
`;

const CourseContainer = styled.div`
  width: 1040px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const CName = styled.div``;
