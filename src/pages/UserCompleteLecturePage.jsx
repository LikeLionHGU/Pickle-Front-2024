import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import SideBar from "../components/UserPage/SideBar";
import styled from "styled-components";
import UserCompleteLetureContent from "../components/UserPage/UserCompleteLetureContent";

function UserCompleteLecturePage() {
  return (
    <>
      <HeaderLightVer />
      <ContentWarpper>
        <SideBar />
        <UserCompleteLetureContent />
      </ContentWarpper>
    </>
  );
}

export default UserCompleteLecturePage;

const ContentWarpper = styled.div`
  /* border: 2px solid green; */
  display: flex;
  background-color: #fafafa;
`;
