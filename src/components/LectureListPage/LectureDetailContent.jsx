import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MapCon from "../Common/MapCon";
import BlueBtn from "../Common/CommonBtn/BlueBtn";
import WhiteBtn from "../Common/CommonBtn/WhiteBtn";
import defaultImg from "../../assets/img/defaultImg.jpg";
import locationIcon from "../../assets/img/PickedCourse.svg";
import heartIcon from "../../assets/img/heart.svg";
import heartFalseIcon from "../../assets/img/heartFalse.svg";
import TeacherProfileModal from "./TeacherProfileModal";
import { useNavigate } from "react-router-dom";
import StarRating from "../Common/StarRating";
import BgColor from "../Common/BgColor";

function LectureDetailContent() {
  const [isTeacherProfileModalOpen, setTeacherProfileModalOpen] =
    useState(false);
  const [isLike, setIsLike] = useState(false);

  const navigate = useNavigate();

  const handleCourseApplyBtnClick = () => {
    navigate("/lecture/:courseId/:courseBlockId");
  };

  const toggleTeacherProfileModal = () => {
    setTeacherProfileModalOpen((prevState) => !prevState);
  };

  const handleHeartIconClick = () => {
    setIsLike((prevState) => !prevState);
    if (isLike === false) {
      alert("찜한 강좌에 저장되었습니다.");
    }
  };

  useEffect(() => {
    document.body.style.overflow = isTeacherProfileModalOpen
      ? "hidden"
      : "auto";
  }, [isTeacherProfileModalOpen]);

  console.log("is modal open: ", isTeacherProfileModalOpen);
  console.log("isLike : ", isLike);

  return (
    <BgColor>
      <Wrapper>
        <CourseCard>
          <CourseImg>
            <img src={defaultImg} alt="기본 강좌 이미지"></img>
          </CourseImg>
          <CourseDetail>
            <Top>
              <LocationIcon>
                <img src={locationIcon} alt="위치 아이콘"></img>
              </LocationIcon>
              <CourseTitle>물개가 되는 법</CourseTitle>
              <Like>
                <img
                  onClick={handleHeartIconClick}
                  src={isLike ? heartIcon : heartFalseIcon}
                  alt="하트 아이콘"
                ></img>
              </Like>
            </Top>
            <Middle>
              <Teacher>
                <DetailText>• 강사 : 이다빈</DetailText>
                <Score>
                  <StarRating score={3.5} />
                  <StarRate>(45)</StarRate>
                </Score>
              </Teacher>
              <DetailText>• 연락처 : 010-1234-1234</DetailText>
              <DetailText>
                • 주소 : 경북 포항시 북구 법원로 98번길 36 1층
              </DetailText>
              <DetailText>
                • 가능한 장애유형 : 뇌병변 / 시,청각 장애 가능
              </DetailText>
              <DetailText>• 강좌 시간 : 8/1, 8/2, 8/3 오전 10-12시</DetailText>
            </Middle>
          </CourseDetail>
        </CourseCard>
        <Map>
          <MapCon />
        </Map>
        <CourseInfo>
          <InfoTitle>개설 강좌정보</InfoTitle>
          <InfoContent>
            <InfoText>
              모두가 차별없이 건강한 세상! <br /> <br /> 장애를 가지고 있어도
              수영을 배우는 것은 식은 죽 먹기! <br /> 즐거운 마음으로 수영을
              배우실 여러분들을 초대합니다
            </InfoText>
          </InfoContent>
        </CourseInfo>
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

const CourseInfo = styled.div`
  /* border: 1px solid green; */
  margin-top: 60px;
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
