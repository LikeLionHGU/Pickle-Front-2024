import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CalendarCom from "../Common/CalendarCom";
import SliderCom from "../Common/SliderCom";

function FilterContainerMain() {
  const [checked, setChecked] = useState({
    individual: false,
    group: false,
  });

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

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

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
      setSubOptions(
        option.subOptions.filter(
          (subOption) =>
            !selectedRegion.includes(subOption) &&
            !selectedSport.includes(subOption) &&
            !selectedDisability.includes(subOption)
        )
      );
      setSubDropdown(true);
    } else {
      setSubDropdown(false);
      if (regionDropdown) {
        // Only add if not already selected
        if (!selectedRegion.includes(option.name)) {
          setSelectedRegion((prev) => [...prev, option.name]);
        }
      } else if (sportsDropdown) {
        // Only add if not already selected
        if (!selectedSport.includes(option.name)) {
          setSelectedSport((prev) => [...prev, option.name]);
        }
      } else if (disDropdown) {
        // Only add if not already selected
        if (!selectedDisability.includes(option.name)) {
          setSelectedDisability((prev) => [...prev, option.name]);
        }
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
      // Only add if not already selected
      if (!selectedRegion.includes(subOption)) {
        setSelectedRegion((prev) => [...prev, subOption]);
      }
    } else if (sportsDropdown) {
      // Only add if not already selected
      if (!selectedSport.includes(subOption)) {
        setSelectedSport((prev) => [...prev, subOption]);
      }
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
      </>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Text>원하는 운동 강좌를 검색해보세요</Text>
        <CheckboxContainer>
          <CheckboxWrapper>
            <CheckBox
              type="checkbox"
              id="individual"
              name="individual"
              checked={checked.individual}
              onChange={handleChange}
            />
            <Label htmlFor="individual">개인</Label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <CheckBox
              type="checkbox"
              id="group"
              name="group"
              checked={checked.group}
              onChange={handleChange}
            />
            <Label htmlFor="group">그룹</Label>
          </CheckboxWrapper>
        </CheckboxContainer>
      </Container>
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
                        selected={selectedRegion.includes(option.name)}
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
                        selected={selectedSport.includes(option.name)}
                      >
                        {option.name}
                      </DropdownItem>
                    ))}
                </DropdownSection>
                <SubDropdownSection
                  style={{
                    borderLeft: "1px solid #D5D5D5",
                    paddingLeft: "30px",
                  }}
                >
                  {subDropdown &&
                    subOptions.map((subOption) => (
                      <DropdownItem
                        key={subOption}
                        onClick={() => handleSubOptionClick(subOption)}
                        // selected={selectedDisability.includes(option.name)}
                        selected={selectedDisability.includes(subOption)}
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
          <FilterTitle
            selected={selectedSport.length > 0}
            onClick={toggleSportsDropdown}
          >
            운동종목
          </FilterTitle>
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
                        selected={selectedSport.includes(subOption)}
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
          <FilterTitle
            selected={selectedDisability.length > 0}
            onClick={toggleDisDropdown}
          >
            장애유형
          </FilterTitle>
          {disDropdown && (
            <DisDropdownMenu>
              <DisDropdownSections>
                {disableOptions.map((option) => (
                  <DropdownItem
                    key={option.name}
                    onClick={() => handleOptionClick(option)}
                    selected={selectedDisability.includes(option.name)}
                  >
                    {option.name}
                  </DropdownItem>
                ))}
              </DisDropdownSections>
            </DisDropdownMenu>
          )}
        </FilterContent>

        <FilterContent ref={calendarRef}>
          <FilterTitle
            selected={selectedDate.length > 0}
            onClick={toggleCalendarDropdown}
          >
            날짜
          </FilterTitle>
          {calendarDropdown && (
            <CalDropdownMenu>
              <CalendarCom
                selected={selectedDate}
                onDateChange={handleDateChange}
              />
            </CalDropdownMenu>
          )}
        </FilterContent>

        <FilterContent ref={priceRef}>
          <FilterTitle onClick={togglePriceDropdown}>가격</FilterTitle>
          {priceDropdown && (
            <PriceDropdown>
              <Slider>
                <SliderCom
                  selected={selectedDate}
                  onPriceChange={handlePriceChange}
                />
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
  box-shadow: 0px 4px 30px #3737373b;
  position: absolute;
  justify-content: center;
  width: 1000px;
  /* height: 153px; */
  height: auto;
  margin-top: 350px;
  /* left: 40%; */
  /* transform: translateX(-50%); */
  background-color: white;
  z-index: 10000;
  border-radius: 10px;
  padding-bottom: 28px;
  margin-left: 220px;
`;

const Container = styled.div`
  display: flex;
`;

const Text = styled.div`
  display: flex;
  margin-top: 29px;
  margin-left: 41px;
  font-size: 18px;
  margin-right: 23px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 40px; */
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
  margin-top: 25px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid #42a8f8;
  cursor: pointer;
  position: relative;
  margin-right: 8px;

  &:checked::before {
    content: "";
    background-color: #42a8f8;
    border-radius: 2px;
  }

  &:checked {
    background-color: #42a8f8;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #42a8f8;
  cursor: pointer;
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
  color: ${({ selected }) =>
    selected ? "#4aabf9" : "#747474"}; // 선택된 카테고리 체크
`;
const DropdownMenu = styled.div`
  padding-top: 27px;
  padding-left: 23px;
  margin-top: 5px;
  width: 422px;
  height: 342px;
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  position: absolute;
  top: 29px;
  left: 0;
  box-shadow: 0px 4px 30px #37373763;
`;
const CalDropdownMenu = styled.div`
  margin-top: 5px;
  width: 328px;
  height: 328px;
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  position: absolute;
  top: 29px;
  left: 0;
  box-shadow: 0px 4px 30px #37373763;
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
  color: ${({ selected }) => (selected ? "#49abf9" : "black")};
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
  box-shadow: 0px 4px 30px #37373763;

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
  border: 1px solid white;
  box-shadow: 0px 4px 30px #37373763;
  margin-top: 10px;
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
