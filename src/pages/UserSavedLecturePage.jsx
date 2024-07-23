import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import SideBar from "../components/UserPage.jsx/SideBar";
import styled from "styled-components";
import UserSavedLectureContent from "../components/UserPage.jsx/UserSavedLectureContent";

function UserSavedLecturePage() {
  return (
    <>
      <HeaderLightVer />
      <ContentWarpper>
        <SideBar />
        <UserSavedLectureContent />
      </ContentWarpper>
    </>
  );
}

export default UserSavedLecturePage;

const ContentWarpper = styled.div`
  border: 2px solid green;
  display: flex;
`;
