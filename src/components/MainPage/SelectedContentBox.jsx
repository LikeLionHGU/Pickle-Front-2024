import React from "react";
import styled from "styled-components";

const SelectedContentBox = ({
  selectedRegion,
  selectedSport,
  selectedDisability,
  selectedDate,
  selectedPrice,
  handleClearSelection,
  regionOptions = [], // 기본값을 빈 배열로 설정
}) => {
  const isSubOption = (item) => {
    return (
      regionOptions &&
      regionOptions.some(
        (option) => option.subOptions && option.subOptions.includes(item)
      )
    );
  };

  const getMainRegion = (subOption) => {
    if (!regionOptions) return null;
    const mainRegion = regionOptions.find(
      (option) => option.subOptions && option.subOptions.includes(subOption)
    );
    return mainRegion ? mainRegion.name : null;
  };

  return (
    <>
      {selectedRegion.map((item, index) => {
        if (isSubOption(item)) {
          const mainRegion = getMainRegion(item);
          return (
            <SelectedContent key={index}>
              <Hashtag>#</Hashtag>
              {mainRegion} <SubRegion>{item}</SubRegion>
              <ClearButton onClick={() => handleClearSelection("region", item)}>
                ×
              </ClearButton>
            </SelectedContent>
          );
        } else {
          return (
            <SelectedContent key={index}>
              <Hashtag>#</Hashtag>
              {item}
              <ClearButton onClick={() => handleClearSelection("region", item)}>
                ×
              </ClearButton>
            </SelectedContent>
          );
        }
      })}
      {selectedSport.map((item, index) => (
        <SelectedContent key={index}>
          <Hashtag>#</Hashtag>
          {item}
          <ClearButton onClick={() => handleClearSelection("sport", item)}>
            ×
          </ClearButton>
        </SelectedContent>
      ))}
      {selectedDisability.map((item, index) => (
        <SelectedContent key={index}>
          <Hashtag>#</Hashtag>
          {item}
          <ClearButton onClick={() => handleClearSelection("disability", item)}>
            ×
          </ClearButton>
        </SelectedContent>
      ))}
      {selectedDate.map((item, index) => (
        <SelectedContent key={index}>
          <Hashtag>#</Hashtag>
          {item}
          <ClearButton onClick={() => handleClearSelection("date", item)}>
            ×
          </ClearButton>
        </SelectedContent>
      ))}
      <SelectedPriceContent>
        <Hashtag>#</Hashtag>
        {selectedPrice.min.toLocaleString()}원 ~{" "}
        {selectedPrice.max.toLocaleString()}원
      </SelectedPriceContent>
    </>
  );
};

export default SelectedContentBox;

const SelectedContent = styled.div`
  padding-left: 7px;
  padding-right: 30px;
  height: 20px;
  border: 1px solid #4aabf9;
  border-radius: 10px;
  color: #4aabf9;
  font-size: 13px;
  margin-right: 22px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const SelectedPriceContent = styled.div`
  padding-left: 7px;
  padding-right: 11px;
  height: 20px;
  border: 1px solid #4aabf9;
  border-radius: 10px;
  color: #4aabf9;
  font-size: 13px;
  margin-right: 22px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Hashtag = styled.div`
  color: #4aabf9;
  font-size: 13px;
  margin-right: 5px;
`;

const SubRegion = styled.span`
  margin-left: 5px;
  font-size: 13px;
`;

const ClearButton = styled.div`
  position: absolute;
  right: 5px;
  cursor: pointer;
  font-size: 15px;
  margin-right: 4px;
  color: #4aabf9;
`;
