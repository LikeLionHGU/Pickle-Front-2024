import React from "react";
import HeaderLightVer from "../components/Common/HeaderLightVer";
import SearchLectureListContent from "../components/LectureListPage/SearchLectureListContent";
import { useLocation } from "react-router-dom";

export default function SearchLectureListPage() {
  const location = useLocation();
  const courses = location.state?.courses || [];

  return (
    <>
      <HeaderLightVer />
      <SearchLectureListContent courses={courses} />{" "}
    </>
  );
}
