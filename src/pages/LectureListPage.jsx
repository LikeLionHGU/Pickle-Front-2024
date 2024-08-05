import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import LectureListContent from "../components/LectureListPage/LectureListContent";
import { useLocation } from "react-router-dom";
import Footer from "../components/Common/Footer";

function LectureListPage() {
  const location = useLocation();
  const courses = location.state?.courses || [];

  return (
    <>
      <HeaderLightVer />
      <LectureListContent courses={courses} /> <Footer />
    </>
  );
}

export default LectureListPage;
