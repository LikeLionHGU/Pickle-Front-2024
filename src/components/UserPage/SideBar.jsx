import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
  const navigate = useNavigate();

  const handleMenuClick = (url) => {
    navigate(url);
  };

  return (
    <Wrapper>
      <Menu onClick={() => handleMenuClick("/user")}>
        <Text>내 경험치</Text>
      </Menu>
      <Menu onClick={() => handleMenuClick("/user/saved")}>
        <Text>찜한 강의</Text>
      </Menu>
      <Menu onClick={() => handleMenuClick("/user/learning")}>
        <Text>수강 중</Text>
      </Menu>
      <Menu onClick={() => handleMenuClick("/user/complete")}>
        <Text>수강 완료</Text>
      </Menu>
      <Menu onClick={() => handleMenuClick("/user/edit")}>
        <Text>프로필 수정</Text>
      </Menu>
    </Wrapper>
  );
}

export default SideBar;

const Wrapper = styled.div`
  border: 3px solid #42a8f8;
  height: 668px;
  width: 139px;
  margin-top: 17px;
  margin-left: 25px;
  font-size: 20px;
`;

const Menu = styled.div`
  height: 80px;
  width: 103px;
  border: 3px solid #42a8f8;
  border-radius: 10px;
  margin-left: 18px;
  margin-top: 30px;
  cursor: pointer;

  &:first-child {
    margin-top: 60px;
  }

  &:hover {
    background-color: rgba(66, 168, 248, 0.1);
  }
`;

const Text = styled.div`
  font-size: 15px;
`;
