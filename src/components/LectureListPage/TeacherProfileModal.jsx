import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import defaultTeacherImg from "../../assets/img/defaultTeacherImg.svg";
import closeBtn from "../../assets/img/CloseBtn.svg";
import star from "../../assets/img/star.svg";
import { Link, useParams } from "react-router-dom";
import TeacherProfileCard from "./TeacherProfileCard";
import axios from "axios";

function TeacherProfileModal({ toggleModal }) {
  const { courseId } = useParams();
  const [data, setData] = useState();

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
      });
  }, [courseId]);

  const careers = data?.teacher?.career?.split(",").map((item) => item.trim());

  if (!data) return <div>강사 정보 불러오는 중 ...</div>;

  return (
    <Modal>
      <Overlay onClick={toggleModal} />
      <ModalContent>
        <ModalWrapper>
          <Left>
            <TeacherImg>
              <img src={data.teacher.imageURL} alt="기본 강사 이미지"></img>
            </TeacherImg>
            <Teacher>
              <TeacherName>{data.teacher.name}</TeacherName>
              <TeacherText>강사님</TeacherText>
            </Teacher>
            <TeacherDetail>
              <StudentNum>
                <DetailCategory>수강생 수</DetailCategory>
                <DetailContent>{data.teacher.studentCount}</DetailContent>
              </StudentNum>
              <CourseReview>
                <DetailCategory>수강평수</DetailCategory>
                <DetailContent>{data.teacher.reviewCount}</DetailContent>
              </CourseReview>
              <CourseRate>
                <DetailCategory>강의평점</DetailCategory>
                <div style={{ display: "flex" }}>
                  <img src={star} alt="별 이미지"></img>
                  <DetailContent>{data.teacher.score}</DetailContent>
                </div>
              </CourseRate>
            </TeacherDetail>
            <Certificate>
              <CertificateCategory>보유 자격증</CertificateCategory>
              {careers?.map((career, index) => (
                <CertificateDetail key={index}>• {career}</CertificateDetail>
              ))}
            </Certificate>
          </Left>
          <DivisionLine></DivisionLine>
          <Right>
            <CloseBtn>
              <img
                src={closeBtn}
                alt="모달창 닫기 아이콘"
                onClick={toggleModal}
              ></img>
            </CloseBtn>
            <TeacherDiscription>
              <Discription>{data.teacher.description}</Discription>
            </TeacherDiscription>
            <AnotherCourse>{data.teacher.name} 강사님의 강좌</AnotherCourse>
            <CourseContainer>
              {data.teacher.courseList?.map((course) => (
                <Link
                  key={course.id}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                  }}
                  to={`/lecture/${course.id}`}
                  onClick={toggleModal}
                >
                  <TeacherProfileCard teacher={data.teacher} course={course} />
                </Link>
              ))}
            </CourseContainer>
          </Right>
        </ModalWrapper>
      </ModalContent>
    </Modal>
  );
}

export default TeacherProfileModal;

const modalStyles = `
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Modal = styled.div`
  ${modalStyles}
  z-index: 3;
`;

const Overlay = styled.div`
  ${modalStyles}
  background: rgba(86, 86, 86, 0.9);
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 10px;
  width: 1000px;
  height: 655px;
`;

const ModalWrapper = styled.div`
  width: 880px;
  height: 530px;
  margin-top: 50px;
  margin-left: 55px;
  /* border: 1px solid red; */
  display: flex;
`;

const Left = styled.div`
  width: 265px;
  margin-right: 55px;
  /* border: 1px solid red; */
`;

const TeacherImg = styled.div`
  /* border: 2px solid blue; */
  width: 184px;
  height: 184px;
  border-radius: 50%;
  margin: auto;
  padding-top: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Teacher = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeacherName = styled.div`
  font-size: 22px;
`;

const TeacherText = styled.div`
  font-size: 20px;
  margin-left: 9px;
`;

const TeacherDetail = styled.div`
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  margin-top: 20px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;

const DetailCategory = styled.div`
  font-size: 13px;
  color: #626262;
  display: flex;
  justify-content: center;
`;

const DetailContent = styled.div`
  font-size: 17px;
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

const StudentNum = styled.div`
  /* border: 1px solid red; */
  width: 60px;
`;

const CourseReview = styled.div`
  /* border: 1px solid red; */
  width: 60px;
`;

const CourseRate = styled.div`
  /* border: 1px solid red; */
  width: 60px;

  img {
    padding-top: 10px;
    padding-left: 5px;
  }
`;

const Certificate = styled.div`
  /* border: 1px solid red; */
  margin-top: 50px;
  height: 140px;
  overflow-y: auto;
`;

const CertificateCategory = styled.div`
  font-size: 17px;
  margin-bottom: 22px;
`;

const CertificateDetail = styled.div`
  color: #626262;
  font-size: 14px;
  margin-bottom: 10px;
  padding-left: 4px;
`;

const DivisionLine = styled.div`
  display: flex;
  margin-top: 10px;
  height: 530px;
  border: 1px solid #dddddd;
`;

const Right = styled.div`
  /* border: 1px solid blue; */
  width: 501px;
  padding-left: 55px;
`;

const CloseBtn = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  display: flex;
  justify-content: end;

  img {
    height: 14px;
    cursor: pointer;
  }
`;

const TeacherDiscription = styled.div`
  background-color: #f1f1f1;
  height: 70px;
  border-radius: 15px;
  margin-top: 30px;
  padding: 30px 28px;
  overflow-y: auto;
  /* border: 1px solid red; */
`;

const Discription = styled.div`
  font-size: 14px;
  /* border: 1px solid red; */
`;

const AnotherCourse = styled.div`
  font-size: 17px;
  margin-top: 30px;
`;

const CourseContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 20px;
  height: 300px;
  width: 500px;
  padding-right: 10px;
  overflow-y: auto;
`;
