import React from "react";
import HeaderMain from "../components/MainPage/HeaderMain";
import BannerMain from "../components/MainPage/BannerMain";
import ContentMain from "../components/MainPage/ContentMain";
import FilterContainerMain from "../components/MainPage/FilterContainerMain";
import Footer from "../components/Common/Footer";

export default function MainPage() {
  return (
    <>
      <HeaderMain />
      <FilterContainerMain />
      <BannerMain />
      <ContentMain />
      <Footer />
    </>
  );
}
