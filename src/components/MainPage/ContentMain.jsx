import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseCard from "../Common/CourseCard";
import CourseDivideLine from "../Common/CourseDivideLine";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrowImg from "../../assets/img/leftArrow.svg";
import RightArrowImg from "../../assets/img/rightArrow.svg";
import axios from "axios";

const ArrowContainer = styled.div`
  position: relative;
  width: 1040px;
  margin: auto;

  .arrow {
    position: absolute;
    top: 40%;
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
    left: -100px;
  }

  .nextArrow {
    right: -100px;
  }
`;

const NextArrow = ({ onClick }) => (
  <button className="arrow nextArrow" onClick={onClick} type="button">
    <img src={RightArrowImg} alt="Next Arrow" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow prevArrow" onClick={onClick} type="button">
    <img src={LeftArrowImg} alt="Prev Arrow" />
  </button>
);

function ContentMain() {
  const [adCourses, setAdCourses] = useState([]);
  const [hotCourses, setHotCourses] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [limit, setLimit] = useState(4); // Number of courses per page
  const [page, setPage] = useState(1); // Current page

  // Calculate offset and slice data for current page for adCourses
  const offset = (page - 1) * limit;
  const paginatedAdCourses = adCourses.slice(offset, offset + limit);

  const handleAdData = async () => {
    try {
      const response = await axios.get(
        "http://15.164.88.154:8080/api/course/recommend"
      );
      console.log("ad : ", response);
      setAdCourses(response.data.adCourse || []); // Update state with adCourse data
    } catch (err) {
      console.error("Error fetching adCourses:", err);
    }
  };

  const handleHotData = async () => {
    try {
      const response = await axios.get(
        "http://15.164.88.154:8080/api/course/recommend"
      );
      console.log("hot : ", response);
      setHotCourses(response.data.hotCourse || []); // Update state with hotCourse data
    } catch (err) {
      console.error("Error fetching hotCourses:", err);
    }
  };
  const [userData, setUserData] = useState();

  useEffect(() => {
    handleAdData();
    handleHotData();

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
    <Wrapper>
      <AdCourse>
        <AdCon>
          <AdText>이런 강좌는 어떠세요 ?</AdText>
          <AdBox>광고</AdBox>
        </AdCon>
        <AdContainer>
          <CourseContainer>
            {paginatedAdCourses.map((course, index) => (
              <Link
                key={course.id}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
                to={`/lecture/${course.id}`}
              >
                <React.Fragment key={course.id}>
                  <CourseCard course={course} />
                  {index % 2 === 0 && <CourseDivideLine />}
                </React.Fragment>
              </Link>
            ))}
          </CourseContainer>
        </AdContainer>
      </AdCourse>

      <PopularCourse>
        {userData.nickname ? (
          <>{userData.nickname} 님과 가까운 곳의 인기 강좌예요 !</>
        ) : (
          <>가까운 곳의 인기 강좌예요 !</>
        )}
        <PopularContainer>
          <ArrowContainer>
            <StyledSlider {...settings}>
              {hotCourses.map((course, index) => (
                <div key={course.id}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={`/lecture/${course.id}`}
                  >
                    <PopCourseCon>
                      <React.Fragment key={course.id}>
                        <CourseCard course={course} />
                        {index % 4 === 0 && <CourseDivideLine />}
                        {index % 4 === 1 && <CourseDivideLine />}
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
  position: relative;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-slide {
    justify-content: center;
    align-items: center;
  }

  .slick-dots {
    li {
      button {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #d9d9d9;
        opacity: 1;
        padding: 0;
        margin: 0 4px;
      }

      &.slick-active button {
        background: #4aabf9; /* Color for the active dot */
      }
    }
  }

  .slick-dots {
    .slick-active {
      button::before {
        display: none;
        /* color: #4aabf9; // 선택된 점의 색상 설정 */
      }
    }
    button::before {
      display: none;
      color: #d9d9d9; // 선택 안된 점의 색상 설정
    }
  }
`;

const Wrapper = styled.div`
  width: 1160px;
  margin: auto;
  margin-top: 175px;
  font-size: 20px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 240px;
`;

const AdCon = styled.div`
  display: flex;
`;

const AdCourse = styled.div`
  margin-bottom: 63px;
  padding-top: 75px;
`;

const AdText = styled.div`
  display: flex;
`;

const AdBox = styled.div`
  display: flex;
  width: 30px;
  height: 20px;
  background-color: #e8e8e8;
  color: #747474;
  border-radius: 3px;
  text-align: center;
  align-items: center; /* Center text vertically */
  justify-content: center; /* Center text horizontally */
  font-size: 12px;
  margin-left: 13px;
  margin-top: 2px;
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
