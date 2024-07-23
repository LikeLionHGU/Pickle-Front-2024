import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import SideBar from "../components/UserPage.jsx/SideBar";
import styled from "styled-components";
import UserPointContent from "../components/UserPage.jsx/UserPointContent";

function UserPage() {
  return (
    <>
      <HeaderLightVer />
      <ContentWarpper>
        <SideBar />
        <UserPointContent />
      </ContentWarpper>
    </>
  );
}

export default UserPage;

const ContentWarpper = styled.div`
  border: 2px solid green;
  display: flex;
`;
