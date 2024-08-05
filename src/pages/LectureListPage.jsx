import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import LectureListContent from "../components/LectureListPage/LectureListContent";
import { useLocation } from "react-router-dom";

function LectureListPage() {
  const location = useLocation();
  const courses = location.state?.courses || [];

  return (
    <>
      <HeaderLightVer />
      <LectureListContent courses={courses} />{" "}
    </>
  );
}

export default LectureListPage;
