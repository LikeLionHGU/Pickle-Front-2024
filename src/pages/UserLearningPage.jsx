import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import SideBar from "../components/UserPage/SideBar";
import styled from "styled-components";
import UserLearningContent from "../components/UserPage/UserLearningContent";

function UserLearningPage() {
  return (
    <>
      <HeaderLightVer />
      <ContentWarpper>
        <SideBar />
        <UserLearningContent />
      </ContentWarpper>
    </>
  );
}

export default UserLearningPage;

const ContentWarpper = styled.div`
  /* border: 2px solid green; */
  display: flex;
`;
