import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectedRegionState } from "../../atom";
import { selectedSportTypeState } from "../../atom";
import { selectedDisabilityTypeState } from "../../atom";
import { selectedDateState } from "../../atom";
import { selectedPriceState } from "../../atom";
import { useLocation } from "react-router-dom";

const SelectedContentBox = ({ handleClearSelection, regionOptions = [] }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [selectedRegion, setsSlectedRegion] =
    useRecoilState(selectedRegionState);
  const [selectedSportType, setSelectedSportType] = useRecoilState(
    selectedSportTypeState
  );
  const [selectedDisabilityType, setSelectedDisabilityType] = useRecoilState(
    selectedDisabilityTypeState
  );
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [selectedPrice, setSelectedPrice] = useRecoilState(selectedPriceState);
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

  useEffect(() => {
    if (currentPath === "/") setSelectedPrice({});
  }, []);

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
      {selectedSportType.map((item, index) => (
        <SelectedContent key={index}>
          <Hashtag>#</Hashtag>
          {item}
          <ClearButton onClick={() => handleClearSelection("sport", item)}>
            ×
          </ClearButton>
        </SelectedContent>
      ))}
      {selectedDisabilityType.map((item, index) => (
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
      {selectedPrice.min !== undefined && selectedPrice.max !== undefined && (
        <SelectedPriceContent>
          <Hashtag>#</Hashtag>
          {selectedPrice.min.toLocaleString()}원 ~{" "}
          {selectedPrice.max.toLocaleString()}원
        </SelectedPriceContent>
      )}
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
