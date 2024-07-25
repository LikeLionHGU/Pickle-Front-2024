import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import SideBar from "../components/UserPage/SideBar";
import styled from "styled-components";
import UserEditProfileContent from "../components/UserPage/UserEditProfileContent";

function UserEditProfilePage() {
  return (
    <>
      <HeaderLightVer />
      <ContentWarpper>
        <SideBar />
        <UserEditProfileContent />
      </ContentWarpper>
    </>
  );
}

export default UserEditProfilePage;

const ContentWarpper = styled.div`
  /* border: 2px solid green; */
  display: flex;
`;
