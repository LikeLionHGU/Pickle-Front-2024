import React from "react";
import HeaderMain from "../components/MainPage/HeaderMain";
import BannerMain from "../components/MainPage/BannerMain";
import ContentMain from "../components/MainPage/ContentMain";
import FilterContainerMain from "../components/MainPage/FilterContainerMain";
import HeaderSearchBar from "../components/Common/HeaderSearchBar";

export default function MainPage() {
  return (
    <>
      <HeaderMain />
      <HeaderSearchBar />
      <FilterContainerMain />
      <BannerMain />
      <ContentMain />
    </>
  );
}
