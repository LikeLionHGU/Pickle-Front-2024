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
import LeftArrowImg from "../../assets/img/leftArrow.svg";
import RightArrowImg from "../../assets/img/rightArray.svg";

const ArrowContainer = styled.div`
  position: relative;
  width: 1040px;
  margin: auto;

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    font-size: 24px;
    z-index: 1;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
    }
  }

  .prevArrow {
    left: -50px;
  }

  .nextArrow {
    right: -50px;
    transform: translateY(-50%) rotate(180deg); /* Rotate for right arrow */
  }
`;

const NextArrow = ({ onClick }) => (
  <button className="arrow nextArrow" onClick={onClick} type="button">
    <img src={RightArrowImg} alt="Prev Arrow" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow prevArrow" onClick={onClick} type="button">
    <img src={LeftArrowImg} alt="Next Arrow" />
  </button>
);

function ContentMain() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          <ArrowContainer>
            <StyledSlider {...settings}>
              {paginatedData.map((course, index) => (
                <div key={course.courseId}>
                  <Link
                    key={course.courseId}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                    }}
                    to={`/lecture/${course.courseId}`}
                  >
                    <PopCourseCon>
                      <React.Fragment key={course.courseId}>
                        <CourseCard course={course} />
                        {index % 2 === 0 && <CourseDivideLine />}
                      </React.Fragment>
                    </PopCourseCon>
                  </Link>
                </div>
              ))}
            </StyledSlider>
          </ArrowContainer>
        </PopularContainer>
      </PopularCourse>
    </Wrapper>
  );
}

export default ContentMain;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: relative;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-slide {
    width: 450px;
    justify-content: center;
    align-items: center;
  }

  .slick-dots {
    button {
      width: 100px;
      height: 100px;
    }
    .slick-active {
      button::before {
        color: #4aabf9; //선택된 점의 색상 설정
      }
    }
    button::before {
      color: #d9d9d9; //선택 안된 점의 색상 설정
    }
  }
`;

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
  width: 1040px;
  height: 500px;
  margin-top: 40px;
`;

const PopCourseCon = styled.div`
  display: flex;
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
