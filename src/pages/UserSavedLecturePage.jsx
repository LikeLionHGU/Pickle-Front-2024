import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import SideBar from "../components/UserPage/SideBar";
import styled from "styled-components";
import UserSavedLectureContent from "../components/UserPage/UserSavedLectureContent";

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
  /* border: 2px solid green; */
  display: flex;
  background-color: #fafafa;
`;
