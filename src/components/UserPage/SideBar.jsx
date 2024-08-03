import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import scoreIcon from "../../assets/img/userScore.svg";
import likedCourseIcon from "../../assets/img/userLiked.svg";
import learningIcon from "../../assets/img/userLearning.svg";
import completeIcon from "../../assets/img/userComplete.svg";
import editIcon from "../../assets/img/userEdit.svg";
import BgColor from "../Common/BgColor";

function SideBar() {
  const navigate = useNavigate();

  const handleMenuClick = (url) => {
    navigate(url);
  };

  return (
    <BgColor>
      <Wrapper>
        <Menu onClick={() => handleMenuClick("/user")}>
          <Section>
            <img src={scoreIcon} alt="내 경험치 아이콘"></img>
            <Text>내 경험치</Text>
          </Section>
        </Menu>
        <Menu onClick={() => handleMenuClick("/user/saved")}>
          <Section>
            <img src={likedCourseIcon} alt="찜한 강좌 아이콘"></img>
            <Text>찜한 강좌</Text>
          </Section>
        </Menu>
        <Menu onClick={() => handleMenuClick("/user/learning")}>
          <Section>
            <img src={learningIcon} alt="수강 중 아이콘"></img>
            <Text>수강 중</Text>
          </Section>
        </Menu>
        <Menu onClick={() => handleMenuClick("/user/complete")}>
          <Section>
            <img src={completeIcon} alt="수강 완료 아이콘"></img>
            <Text>수강 완료</Text>
          </Section>
        </Menu>
        <Menu onClick={() => handleMenuClick("/user/edit")}>
          <Section>
            <img src={editIcon} alt="프로필 수정 아이콘"></img>
            <Text>프로필 수정</Text>
          </Section>
        </Menu>
      </Wrapper>
    </BgColor>
  );
}

export default SideBar;

const Wrapper = styled.div`
  border: 1px solid #f6f6f6;
  height: 668px;
  width: 145px;
  margin-top: 17px;
  margin-left: 25px;
  font-size: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin-bottom: 50px;
  background-color: white;
`;

const Menu = styled.div`
  height: 80px;
  width: 103px;
  /* border: 3px solid #42a8f8; */
  border-radius: 10px;
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  &:first-child {
    margin-top: 60px;
  }

  &:hover {
    background-color: rgba(66, 168, 248, 0.1);
  }

  img {
    padding-left: 5px;
    height: 43px;
  }

  &:last-child {
    img {
      padding-left: 12px;
    }
  }
`;

const Section = styled.div``;

const Text = styled.div`
  font-size: 15px;
`;
