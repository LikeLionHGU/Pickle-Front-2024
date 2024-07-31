import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CalendarCom from "../Common/CalendarCom";
import SliderCom from "../Common/SliderCom";

function FilterContainerMain() {
  const [regionDropdown, setRegionDropdown] = useState(false);
  const [sportsDropdown, setSportsDropdown] = useState(false);
  const [disDropdown, setDisDropdown] = useState(false);
  const [calendarDropdown, setCalendarDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [subOptions, setSubOptions] = useState([]);
  const [subDropdown, setSubDropdown] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState([]);
  const [selectedSport, setSelectedSport] = useState([]);
  const [selectedDisability, setSelectedDisability] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  const regionRef = useRef();
  const sportsRef = useRef();
  const disRef = useRef();
  const calendarRef = useRef();
  const priceRef = useRef();

  const regionOptions = [
    { name: "강원", subOptions: ["강원원"] },
    { name: "경기", subOptions: ["과천시", "의왕시", "안양시"] },
    { name: "경남", subOptions: [] },
    { name: "경북", subOptions: [] },
    { name: "광주", subOptions: [] },
    {
      name: "대구",
      subOptions: [
        "군위군",
        "남구",
        "달서구",
        "달성군",
        "동구",
        "북구",
        "서구",
        "수성구",
        "중구",
      ],
    },
    { name: "대전", subOptions: [] },
    { name: "부산", subOptions: [] },
    { name: "서울", subOptions: [] },
    { name: "세종", subOptions: [] },
    { name: "울산", subOptions: [] },
    { name: "인천", subOptions: [] },
    { name: "전남", subOptions: [] },
    { name: "전북", subOptions: [] },
    { name: "제주", subOptions: [] },
    { name: "충남", subOptions: [] },
    { name: "충북", subOptions: [] },
  ];

  const sportsOptions = [
    { name: "헬스", subOptions: ["개인PT", "헬스"] },
    { name: "수영", subOptions: ["실내수영", "실외수영"] },
    {
      name: "구기종목",
      subOptions: [
        "축구",
        "야구",
        "배구",
        "농구",
        "탁구",
        "테니스",
        "당구",
        "골프",
      ],
    },
    {
      name: "기타",
      subOptions: [
        "요가",
        "필라테스",
        "배드민턴",
        "복싱",
        "태권도",
        "펜싱",
        "주짓수",
        "기타",
      ],
    },
  ];

  const disableOptions = [
    { name: "지체" },
    { name: "시각" },
    { name: "청각/언어" },
    { name: "지적/자폐" },
    { name: "뇌병변" },
    { name: "기타" },
  ];

  const handleClickOutside = (event) => {
    if (
      regionRef.current &&
      !regionRef.current.contains(event.target) &&
      sportsRef.current &&
      !sportsRef.current.contains(event.target) &&
      disRef.current &&
      !disRef.current.contains(event.target) &&
      calendarRef.current &&
      !calendarRef.current.contains(event.target) &&
      priceRef.current &&
      !priceRef.current.contains(event.target)
    ) {
      setRegionDropdown(false);
      setSportsDropdown(false);
      setDisDropdown(false);
      setCalendarDropdown(false);
      setPriceDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleRegionDropdown = () => {
    setRegionDropdown(!regionDropdown);
    setSportsDropdown(false);
    setDisDropdown(false);
    setCalendarDropdown(false);
    setPriceDropdown(false);
    setSubDropdown(false);
  };

  const toggleSportsDropdown = () => {
    setSportsDropdown(!sportsDropdown);
    setRegionDropdown(false);
    setDisDropdown(false);
    setCalendarDropdown(false);
    setPriceDropdown(false);
    setSubDropdown(false);
  };

  const toggleDisDropdown = () => {
    setDisDropdown(!disDropdown);
    setRegionDropdown(false);
    setSportsDropdown(false);
    setCalendarDropdown(false);
    setPriceDropdown(false);
    setSubDropdown(false);
  };

  const toggleCalendarDropdown = () => {
    setCalendarDropdown(!calendarDropdown);
    setRegionDropdown(false);
    setSportsDropdown(false);
    setDisDropdown(false);
    setPriceDropdown(false);
    setSubDropdown(false);
  };

  const togglePriceDropdown = () => {
    setPriceDropdown(!priceDropdown);
    setRegionDropdown(false);
    setSportsDropdown(false);
    setDisDropdown(false);
    setCalendarDropdown(false);
    setSubDropdown(false);
  };

  const handleOptionClick = (option) => {
    if (option.subOptions && option.subOptions.length > 0) {
      setSubOptions(option.subOptions);
      setSubDropdown(true);
    } else {
      setSubDropdown(false);
      if (regionDropdown) {
        setSelectedRegion((prev) => [...prev, option.name]);
      } else if (sportsDropdown) {
        setSelectedSport((prev) => [...prev, option.name]);
      } else if (disDropdown) {
        setSelectedDisability((prev) => [...prev, option.name]);
      }
      setRegionDropdown(false);
      setSportsDropdown(false);
      setDisDropdown(false);
      setCalendarDropdown(false);
      setPriceDropdown(false);
    }
  };

  const handleSubOptionClick = (subOption) => {
    if (regionDropdown) {
      setSelectedRegion((prev) => [...prev, subOption]);
    } else if (sportsDropdown) {
      setSelectedSport((prev) => [...prev, subOption]);
    }
    setSubDropdown(false);
  };

  const handleClearSelection = (category, value) => {
    if (category === "region") {
      setSelectedRegion((prev) => prev.filter((item) => item !== value));
    } else if (category === "sport") {
      setSelectedSport((prev) => prev.filter((item) => item !== value));
    } else if (category === "disability") {
      setSelectedDisability((prev) => prev.filter((item) => item !== value));
    } else if (category === "date") {
      setSelectedDate((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleDateChange = (dates) => {
    setSelectedDate(dates); // Update selected date with array of dates
    setCalendarDropdown(false);
  };

  const handlePriceChange = (min, max) => {
    setSelectedPrice({ min, max });
    setPriceDropdown(false);
  };

  const renderSelectedContent = () => {
    return (
      <>
        {selectedRegion.map((item, index) => (
          <SelectedContent key={index}>
            <Hashtag>#</Hashtag>
            {item}
            <ClearButton onClick={() => handleClearSelection("region", item)}>
              ×
            </ClearButton>
          </SelectedContent>
        ))}
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
            <ClearButton
              onClick={() => handleClearSelection("disability", item)}
            >
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
        {/* {selectedPrice && (
          <SelectedContent>
            <Hashtag>#</Hashtag>
            {`${selectedPrice.min}원 ~ ${selectedPrice.max}원`}
            <ClearButton
              onClick={() => setSelectedPrice({ min: 0, max: 100000 })}
            >
              ×
            </ClearButton>
          </SelectedContent>
        )} */}
      </>
    );
  };

  return (
    <Wrapper>
      <Text>원하는 운동 강좌를 검색해보세요</Text>
      <SelectedContainer>{renderSelectedContent()}</SelectedContainer>
      <FilterContainer>
        <FilterContent ref={regionRef}>
          <FilterTitle onClick={toggleRegionDropdown}>지역</FilterTitle>
          {regionDropdown && (
            <DropdownMenu>
              <RegionDropdownSections>
                <DropdownSection>
                  {regionOptions
                    .slice(0, Math.ceil(regionOptions.length / 2))
                    .map((option) => (
                      <DropdownItem
                        key={option.name}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.name}
                      </DropdownItem>
                    ))}
                </DropdownSection>
                <DropdownSection>
                  {regionOptions
                    .slice(Math.ceil(regionOptions.length / 2))
                    .map((option) => (
                      <DropdownItem
                        key={option.name}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.name}
                      </DropdownItem>
                    ))}
                </DropdownSection>
                <SubDropdownSection>
                  {subDropdown &&
                    subOptions.map((subOption) => (
                      <DropdownItem
                        key={subOption}
                        onClick={() => handleSubOptionClick(subOption)}
                      >
                        {subOption}
                      </DropdownItem>
                    ))}
                </SubDropdownSection>
              </RegionDropdownSections>
            </DropdownMenu>
          )}
        </FilterContent>
        <FilterContent ref={sportsRef}>
          <FilterTitle onClick={toggleSportsDropdown}>운동종목</FilterTitle>
          {sportsDropdown && (
            <DropdownMenu>
              <SportsDropdownSections>
                {sportsOptions.map((option) => (
                  <SportsCategory key={option.name}>
                    <CategoryTitle>{option.name}</CategoryTitle>
                    {option.subOptions.map((subOption) => (
                      <DropdownItem
                        key={subOption}
                        onClick={() =>
                          handleOptionClick({ name: subOption, subOptions: [] })
                        }
                      >
                        {subOption}
                      </DropdownItem>
                    ))}
                  </SportsCategory>
                ))}
              </SportsDropdownSections>
            </DropdownMenu>
          )}
        </FilterContent>
        <FilterContent ref={disRef}>
          <FilterTitle onClick={toggleDisDropdown}>장애유형</FilterTitle>
          {disDropdown && (
            <DisDropdownMenu>
              <DisDropdownSections>
                {disableOptions.map((option) => (
                  <DropdownItem
                    key={option.name}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.name}
                  </DropdownItem>
                ))}
              </DisDropdownSections>
            </DisDropdownMenu>
          )}
        </FilterContent>
        <FilterContent ref={calendarRef}>
          <FilterTitle onClick={toggleCalendarDropdown}>날짜</FilterTitle>
          {calendarDropdown && (
            <DropdownMenu>
              <CalendarCom onDateChange={handleDateChange} />
            </DropdownMenu>
          )}
        </FilterContent>
        <FilterContent ref={priceRef}>
          <FilterTitle onClick={togglePriceDropdown}>가격</FilterTitle>
          {priceDropdown && (
            <PriceDropdown>
              <Slider>
                <SliderCom onPriceChange={handlePriceChange} />
              </Slider>
            </PriceDropdown>
          )}
        </FilterContent>
        <SearchBtn>
          <SearchBtnTitle>검색</SearchBtnTitle>
        </SearchBtn>
      </FilterContainer>
    </Wrapper>
  );
}

export default FilterContainerMain;

const Wrapper = styled.div`
  border: 3px solid black;
  position: absolute;
  width: 1000px;
  height: 153px;
  top: 317px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 10px;
  padding-bottom: 28px;
`;

const Text = styled.div`
  margin-top: 29px;

  margin-left: 41px;
  font-size: 18px;
`;
const SelectedContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 37px;
  display: flex;
  flex-wrap: wrap;
`;
const Hashtag = styled.div`
  color: #4aabf9;
  font-size: 13px;
  margin-right: 5px;
`;
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
const ClearButton = styled.div`
  position: absolute;
  right: 5px;
  cursor: pointer;
  font-size: 15px;
  margin-right: 4px;
  color: #4aabf9;
`;
const FilterContainer = styled.div`
  display: flex;
  margin-left: 30px;
  margin-bottom: 28px;
`;
const FilterContent = styled.div`
  margin-right: 20px;
  width: 139px;
  height: 29px;
  border-radius: 27.5px;
  background-color: #e8e8e8;
  position: relative;
`;
const FilterTitle = styled.div`
  margin-top: 6px;
  margin-left: 14px;
  color: #747474;
  cursor: pointer;
`;
const DropdownMenu = styled.div`
  padding-top: 27px;
  padding-left: 23px;
  margin-top: 5px;
  width: 422px;
  height: 342px;
  background-color: white;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  z-index: 1000;
  position: absolute;
  top: 29px;
  left: 0;
`;
const RegionDropdownSections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
`;
const SportsDropdownSections = styled.div`
  justify-content: space-between;
  margin-right: 25px;
  display: flex;
`;
const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;
const SubDropdownSection = styled.div`
  display: flex;

  flex-direction: column;
  padding-left: 10px;
  overflow-y: auto;
`;
const DropdownItem = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  text-align: left;
  color: ${(props) => (props.isSelected ? "#49abf9" : "black")};
  &:hover {
    color: #49abf9;
  }
`;

const SportsCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const CategoryTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: #aaaaaa;
`;
const DisDropdownMenu = styled.div`
  margin-top: 5px;
  padding-top: 23px;
  padding-left: 23px;
  width: 157px;
  height: 245px;
  background-color: white;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  z-index: 1000;
  position: absolute;
  top: 29px;
  left: 0;
`;
const DisDropdownSections = styled.div`
  display: flex;
  flex-direction: column;
`;
const Calendar = styled.div`
  margin-top: 5px;
  width: 328px;
  height: 286px;
`;
const PriceDropdown = styled.div``;

const Slider = styled.div`
  width: 325px;
  height: 141px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #d5d5d5;
  margin-top: 5px;
`;
const SearchBtn = styled.div`
  width: 126px;
  height: 29px;
  border-radius: 14.5px;
  background-color: #42a8f8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const SearchBtnTitle = styled.div`
  color: white;
`;
