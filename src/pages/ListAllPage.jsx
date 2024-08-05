import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import ListAllContent from "../components/LectureListPage/ListAllContent";
import { useLocation } from "react-router-dom";
import Footer from "../components/Common/Footer";

function ListAllPage() {
  const location = useLocation();
  const courses = location.state?.courses || [];

  return (
    <>
      <HeaderLightVer />
      <ListAllContent courses={courses} />
      <Footer backgroundColor="#fafafa" />
    </>
  );
}

export default ListAllPage;
