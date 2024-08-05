import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MapCon from "../Common/MapCon";
import BlueBtn from "../Common/CommonBtn/BlueBtn";
import WhiteBtn from "../Common/CommonBtn/WhiteBtn";
import locationIcon from "../../assets/img/PickedCourse.svg";
import heartIcon from "../../assets/img/heart.svg";
import heartFalseIcon from "../../assets/img/heartFalse.svg";
import TeacherProfileModal from "./TeacherProfileModal";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../Common/StarRating";
import BgColor from "../Common/BgColor";
import axios from "axios";
import pickleImg from "../../assets/img/UserLevel0.svg";

function LectureDetailContent() {
  const { courseId } = useParams();

  const [isTeacherProfileModalOpen, setTeacherProfileModalOpen] =
    useState(false);

  const [data, setData] = useState();
  const [isLike, setIsLike] = useState(false);
  const [selectedCourseBlockId, setSelectedCourseBlockId] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HOST_URL}/api/course/detail?courseId=${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setIsLike(response.data.like);
      });
  }, [courseId]);

  const handleCheckboxChange = (id) => {
    setSelectedCourseBlockId(id);
  };

  const possibleDisabilityTypes = data?.possibleDisabilityType.map(
    (item) => item.disabilityType
  );
  const disabilityTypesText = possibleDisabilityTypes?.join(", ");

  // 카드 강좌 시간 나타내는 부분
  const FormatCourseTime = (courseBlock) => {
    if (!courseBlock) return "";
    // 강좌 시간 포맷팅
    const lectureTimes = courseBlock
      .filter((item) => item.open)
      .map((item) => {
        const date = new Date(item.date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        const startTime = `${item.takenHour < 10 ? "0" : ""}${item.takenHour}:${
          item.takenMinute < 10 ? "0" : ""
        }${item.takenMinute}`;
        return `${formattedDate}일 ${startTime}`;
      });
    return lectureTimes.join(", ");
  };

  // 강좌 블럭 선택을 위한 포맷팅
  const formatCourseTime = (courseBlock) => {
    if (!courseBlock) return [];
    // 강좌 시간 포맷팅
    return courseBlock
      .filter((item) => item.open)
      .map((item) => {
        const date = new Date(item.date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        const startTime = `${item.takenHour < 10 ? "0" : ""}${item.takenHour}:${
          item.takenMinute < 10 ? "0" : ""
        }${item.takenMinute}`;
        return {
          id: item.id,
          text: `${formattedDate}일 ${startTime}`,
        };
      });
  };

  const formattedCourseTimes = formatCourseTime(data?.courseBlock);

  const navigate = useNavigate();

  const handleCourseApplyBtnClick = () => {
    if (selectedCourseBlockId === null) {
      alert("강좌 시간을 선택하세요.");
    } else {
      navigate(`/lecture/${courseId}/${selectedCourseBlockId}`);
    }
  };

  const toggleTeacherProfileModal = () => {
    setTeacherProfileModalOpen((prevState) => !prevState);
  };

  const handleHeartIconClick = () => {
    const newLikeState = !isLike;
    setIsLike(newLikeState);

    axios
      .post(
        `${process.env.REACT_APP_HOST_URL}/api/course/like?courseId=${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (newLikeState) {
          alert("찜한 강좌에 저장되었습니다.");
        } else {
          alert("찜한 강좌에서 제거되었습니다.");
        }
      })
      .catch((error) => {
        console.error("Error updating like status:", error);
        setIsLike(!newLikeState); // 실패시 상태 롤백
      });
  };

  useEffect(() => {
    document.body.style.overflow = isTeacherProfileModalOpen
      ? "hidden"
      : "auto";
  }, [isTeacherProfileModalOpen]);

  console.log("is modal open: ", isTeacherProfileModalOpen);
  console.log("isLike : ", isLike);

  if (!data)
    return (
      <LoadingWrapper>
        <Pickle src={pickleImg} alt="기본 피클 이미지" />
        <LoadingText>강좌 정보 로딩 중..</LoadingText>
      </LoadingWrapper>
    );

  return (
    <BgColor>
      <Wrapper>
        <CourseCard>
          <CourseImg>
            <img src={data.imageURL} alt="기본 강좌 이미지" />
          </CourseImg>
          <CourseDetail>
            <Top>
              <LocationIcon>
                <img src={locationIcon} alt="위치 아이콘" />
              </LocationIcon>
              <CourseTitle>{data.title}</CourseTitle>
              <Like>
                <img
                  onClick={handleHeartIconClick}
                  src={isLike ? heartIcon : heartFalseIcon}
                  alt="하트 아이콘"
                />
              </Like>
            </Top>
            <Middle>
              <Teacher>
                <DetailText>• 강사 : {data.teacher.name}</DetailText>
                <Score>
                  <StarRating score={data.teacher.score} />
                  <StarRate>({data.teacher.reviewCount})</StarRate>
                </Score>
              </Teacher>
              <DetailText>• 연락처 : {data.teacher.contactNumber}</DetailText>
              <DetailText>• 주소 : {data.location}</DetailText>
              <DetailText>
                • 가능한 장애유형 : {disabilityTypesText} 장애 가능
              </DetailText>
              <DetailText>
                • 강좌 시간 : {FormatCourseTime(data.courseBlock)}
              </DetailText>
            </Middle>
          </CourseDetail>
        </CourseCard>
        <Map>
          <MapCon />
        </Map>
        <InfoContainer>
          <CourseInfo>
            <InfoTitle>개설 강좌정보</InfoTitle>
            <InfoContent>
              <InfoText>{data.description}</InfoText>
            </InfoContent>
          </CourseInfo>
          <BlockInfo>
            <InfoTitle>강좌시간 선택하기</InfoTitle>
            <InfoContent>
              <InfoText>
                {formattedCourseTimes.map((time) => (
                  <div key={time.id} style={{ marginBottom: "10px" }}>
                    <input
                      type="checkbox"
                      checked={selectedCourseBlockId === time.id}
                      onChange={() => handleCheckboxChange(time.id)}
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "1px solid black",
                        borderRadius: "0",
                      }}
                    />
                    <label style={{ marginLeft: "30px" }}>{time.text}</label>
                  </div>
                ))}
              </InfoText>
            </InfoContent>
          </BlockInfo>
        </InfoContainer>
        <Btn>
          {isTeacherProfileModalOpen && (
            <TeacherProfileModal toggleModal={toggleTeacherProfileModal} />
          )}
          <WhiteBtn onClick={toggleTeacherProfileModal}>강사 프로필</WhiteBtn>
          <BlueBtn onClick={handleCourseApplyBtnClick}>수강신청</BlueBtn>
        </Btn>
      </Wrapper>
    </BgColor>
  );
}

export default LectureDetailContent;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 995px;
  margin: auto;
  padding-top: 115px;
  padding-bottom: 60px;
`;

const CourseCard = styled.div`
  /* border: 1px solid red; */
  height: 240px;
  margin-bottom: 40px;
  display: flex;
`;

const CourseImg = styled.div`
  height: 240px;
  width: 380px;

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

const CourseDetail = styled.div`
  /* border: 2px solid green; */
  width: 100%;
`;

const Top = styled.div`
  /* border: 1px solid blue; */
  height: 40px;
  display: flex;
  align-items: center;
`;

const LocationIcon = styled.div`
  height: 26px;
  margin-left: 30px;
`;

const CourseTitle = styled.div`
  font-size: 28px;
  width: 100%;
  margin-left: 15px;
`;

const Like = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: end;
  vertical-align: middle;
  cursor: pointer;

  img {
    height: 26px;
    width: 30px;
  }
`;

const Middle = styled.div`
  /* border: 1px solid red; */
  padding-top: 10px;
  padding-left: 30px;
`;

const Teacher = styled.div`
  display: flex;
`;

const Score = styled.div`
  margin-top: 17px;
  padding-left: 13px;
  display: flex;
`;

const StarRate = styled.div`
  font-size: 15px;
  margin-left: 4px;
`;

const DetailText = styled.div`
  font-size: 16px;
  margin-top: 17px;
`;

const Map = styled.div`
  height: 350px;
  width: 995px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CourseInfo = styled.div`
  /* border: 1px solid green; */
  margin-top: 60px;
  width: 488px;
`;

const BlockInfo = styled.div`
  /* border: 1px solid green; */
  margin-top: 60px;
  width: 488px;
`;

const InfoTitle = styled.div`
  font-size: 20px;
`;

const InfoContent = styled.div`
  /* border: 2px solid green; */
  height: 200px;
  background-color: #f3f3f3;
  margin-top: 15px;
  border-radius: 20px;
  white-space: pre-wrap;
  margin-bottom: 100px;
`;

const InfoText = styled.div`
  font-size: 16px;
  padding-top: 35px;
  padding-left: 35px;
`;

const Btn = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Pickle = styled.img`
  height: 200px;
`;

const LoadingText = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;
