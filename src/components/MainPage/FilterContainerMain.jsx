import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CalendarCom from "../Common/CalendarCom";
import SliderCom from "../Common/SliderCom";
import SelectedContentBox from "./SelectedContentBox";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedRegionState } from "../../atom";
import { selectedSportTypeState } from "../../atom";
import { selectedDisabilityTypeState } from "../../atom";
import { selectedDateState } from "../../atom";
import { selectedPriceState } from "../../atom";

function FilterContainerMain({ absolute = true, marginTop, marginLeft }) {
  const navigate = useNavigate();

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

  const [selectedRegion, setSelectedRegion] =
    useRecoilState(selectedRegionState);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedSportType, setSelectedSportType] = useRecoilState(
    selectedSportTypeState
  );
  const [selectedDisabilityType, setSelectedDisabilityType] = useRecoilState(
    selectedDisabilityTypeState
  );
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [selectedPrice, setSelectedPrice] = useRecoilState(selectedPriceState);

  const regionRef = useRef();
  const sportsRef = useRef();
  const disRef = useRef();
  const calendarRef = useRef();
  const priceRef = useRef();

  const regionOptions = [
    {
      name: "강원",
      subOptions: [
        "강릉시",
        "동해시",
        "삼척시",
        "속초시",
        "원주시",
        "춘천시",
        "홍천군",
        "평창군",
        "철원군",
        "화천군",
        "양구군",
        "양양군",
      ],
    },
    {
      name: "경기",
      subOptions: [
        "가평군",
        "고양시",
        "구리시",
        "군포시",
        "김포시",
        "남양주시",
        "동두천시",
        "부천시",
        "성남시",
        "수원시",
        "시흥시",
        "안산시",
        "안성시",
        "안양시",
        "오산시",
        "용인시",
        "의정부시",
        "이천시",
        "파주시",
        "평택시",
        "하남시",
        "화성시",
      ],
    },
    {
      name: "경남",
      subOptions: [
        "거제시",
        "거창군",
        "고성군",
        "김해시",
        "밀양시",
        "사천시",
        "산청군",
        "양산시",
        "의령군",
        "진주시",
        "창녕군",
        "창원시",
        "통영시",
        "하동군",
        "함안군",
        "함양군",
        "합천군",
      ],
    },
    {
      name: "경북",
      subOptions: [
        "경산시",
        "경주시",
        "구미시",
        "김천시",
        "문경시",
        "봉화군",
        "상주시",
        "안동시",
        "영덕군",
        "영양군",
        "영주시",
        "영천시",
        "울릉군",
        "울진군",
        "포항시 북구",
        "포항시 남구",
      ],
    },
    { name: "광주", subOptions: ["광산구", "동구", "북구", "서구", "남구"] },
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
    { name: "대전", subOptions: ["대덕구", "동구", "서구", "유성구", "중구"] },
    {
      name: "부산",
      subOptions: [
        "강서구",
        "금정구",
        "기장군",
        "남구",
        "동구",
        "동래구",
        "부산진구",
        "사상구",
        "사하구",
        "서구",
        "수영구",
        "연제구",
        "영도구",
        "중구",
        "해운대구",
      ],
    },
    {
      name: "서울",
      subOptions: [
        "강남구",
        "강동구",
        "강북구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중랑구",
      ],
    },
    { name: "세종", subOptions: ["세종특별자치시"] },
    { name: "울산", subOptions: ["남구", "동구", "북구", "중구", "울주군"] },
    {
      name: "인천",
      subOptions: [
        "강화군",
        "계양구",
        "남동구",
        "남구",
        "동구",
        "부평구",
        "서구",
        "연수구",
        "중구",
      ],
    },
    {
      name: "전남",
      subOptions: [
        "강진군",
        "고흥군",
        "곡성군",
        "광양시",
        "구례군",
        "나주시",
        "담양군",
        "목포시",
        "무안군",
        "보성군",
        "순천시",
        "신안군",
        "여수시",
        "영광군",
        "영암군",
        "완도군",
        "장성군",
        "장흥군",
        "진도군",
        "함평군",
        "해남군",
        "화순군",
      ],
    },
    {
      name: "전북",
      subOptions: [
        "고창군",
        "군산시",
        "김제시",
        "남원시",
        "익산시",
        "전주시",
        "정읍시",
        "진안군",
        "무주군",
        "장수군",
        "임실군",
        "완주군",
        "진안군",
      ],
    },
    { name: "제주", subOptions: ["서귀포시", "제주시"] },
    {
      name: "충남",
      subOptions: [
        "계룡시",
        "공주시",
        "논산시",
        "당진시",
        "보령시",
        "부여군",
        "서산시",
        "서천군",
        "아산시",
        "천안시",
        "청양군",
        "태안군",
        "홍성군",
      ],
    },
    {
      name: "충북",
      subOptions: [
        "괴산군",
        "단양군",
        "보은군",
        "영동군",
        "옥천군",
        "음성군",
        "제천시",
        "진천군",
        "청주시",
        "충주시",
      ],
    },
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
    const { name, checked } = event.target;
    setChecked((prevChecked) => ({
      ...prevChecked,
      [name]: checked,
    }));
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
      setSubOptions(option.subOptions);
      setSubDropdown(true);
    } else {
      setSubDropdown(false);
      if (regionDropdown) {
        if (!selectedRegion.includes(option.name)) {
          setSelectedRegion((prev) => [...prev, option.name]);
          setSelectedCity((prev) => [...prev, option.name]);
        }
      } else if (sportsDropdown) {
        if (!selectedSportType.includes(option.name)) {
          setSelectedSportType((prev) => [...prev, option.name]);
        }
      } else if (disDropdown) {
        if (!selectedDisabilityType.includes(option.name)) {
          setSelectedDisabilityType((prev) => [...prev, option.name]);
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
      if (!selectedRegion.includes(subOption)) {
        setSelectedRegion((prev) => [...prev, subOption]);
        setSelectedDistrict((prev) => [...prev, subOption]);
      } else {
        setSelectedRegion((prev) => prev.filter((item) => item !== subOption));
        setSelectedDistrict((prev) =>
          prev.filter((item) => item !== subOption)
        );
      }
    } else if (sportsDropdown) {
      if (!selectedSportType.includes(subOption)) {
        setSelectedSportType((prev) => [...prev, subOption]);
      } else {
        setSelectedSportType((prev) =>
          prev.filter((item) => item !== subOption)
        );
      }
    }
  };

  const handleClearSelection = (category, value) => {
    if (category === "region") {
      setSelectedRegion((prev) => prev.filter((item) => item !== value));
      // setSelectedCity((prev) => prev.filter((item) => item !== value));
      // setSelectedDistrict((prev) => prev.filter((item) => item !== value));
    } else if (category === "sport") {
      setSelectedSportType((prev) => prev.filter((item) => item !== value));
    } else if (category === "disability") {
      setSelectedDisabilityType((prev) =>
        prev.filter((item) => item !== value)
      );
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
    console.log(min, max);
  };

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const params = {
        page: 0,
        size: 100,
        direction: "DESC",
      };

      if (selectedSportType && selectedSportType.length > 0) {
        params["sportType"] = selectedSportType.join(",");
      }
      if (selectedCity && selectedCity.length > 0) {
        params["city"] = selectedCity.join(",");
      }
      if (selectedDistrict && selectedDistrict.length > 0) {
        params["district"] = selectedDistrict.join(",");
      }
      if (selectedDisabilityType && selectedDisabilityType.length > 0) {
        params["disabilityType"] = selectedDisabilityType.join(",");
      }
      if (selectedDate && selectedDate.length > 0) {
        params["date"] = selectedDate.join(",");
      }
      if (selectedPrice && selectedPrice.max != null) {
        params.highestPrice = selectedPrice.max;
      }
      if (selectedPrice && selectedPrice.min != null) {
        params.lowestPrice = selectedPrice.min;
      }
      if (checked.group) {
        params.onlyGroup = true;
      }
      if (checked.individual) {
        params.onlyIndividual = true;
      }

      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJrYWthb0lkIjoiMzY0ODMzODMyMCIsInN1YiI6IjM2NDgzMzgzMjAiLCJpYXQiOjE3MjI2OTYzNzcsImV4cCI6MTcyMzMwMTE3N30.sxACHEVes1n8weY0EMoVg8oYoyHTE6dn6oIWdXaI6GODM7-ePfhkTW5ehkHdn5NY45N63Qz68bb98wIWvjkbiw",
      };

      console.log("Request params:", params);
      // console.log("Request headers:", headers);

      let response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/course`,
        {
          params: params,
          headers: headers,
        }
      );

      if (response.data.length === 0) {
        alert("검색 결과가 없습니다\n전체 강좌를 보여드릴게요");
        response = await axios.get(
          `${process.env.REACT_APP_HOST_URL}/api/course`,
          {
            params: {
              page: 0,
              size: 100,
              direction: "DESC",
            },
            headers: headers,
          }
        );
        setCourses(response.data);
        console.log("Search results (fallback):", response);
        navigate("/listall", { state: { courses: response.data } });
      } else {
        setCourses(response.data);
        console.log("Search results:", response);
        navigate("/lecture", { state: { courses: response.data } });
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  return (
    <Wrapper absolute={absolute} marginTop={marginTop} marginLeft={marginLeft}>
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
      <SelectedContainer>
        <SelectedContentBox
          selectedRegion={selectedRegion}
          selectedSportType={selectedSportType}
          selectedDisabilityType={selectedDisabilityType}
          selectedDate={selectedDate}
          selectedPrice={selectedPrice}
          handleClearSelection={handleClearSelection}
          regionOptions={regionOptions}
        />
      </SelectedContainer>{" "}
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
                        selected={selectedRegion.includes(option.name)}
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
                        selected={
                          selectedRegion.includes(subOption) ||
                          selectedSportType.includes(subOption)
                        }
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
            selected={selectedSportType.length > 0}
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
                        selected={selectedSportType.includes(subOption)}
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
            selected={selectedDisabilityType.length > 0}
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
                    selected={selectedDisabilityType.includes(option.name)}
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
                  selectedPrice={selectedPrice}
                  onPriceChange={handlePriceChange}
                />
              </Slider>
            </PriceDropdown>
          )}
        </FilterContent>
        <SearchBtn onClick={handleSearch}>
          <SearchBtnTitle>검색</SearchBtnTitle>
        </SearchBtn>
      </FilterContainer>
    </Wrapper>
  );
}

export default FilterContainerMain;

const Wrapper = styled.div`
  box-shadow: 0px 4px 30px #3737373b;
  position: ${(props) => (props.absolute ? "absolute" : "relative")};
  justify-content: center;
  width: 1000px;
  height: auto;
  margin-top: ${(props) => props.marginTop || "320px"};
  margin-left: ${(props) => props.marginLeft || "220px"};
  /* left: 40%; */
  /* transform: translateX(-50%); */
  background-color: white;
  z-index: 10000;
  border-radius: 10px;
  padding-bottom: 28px;
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

const PriceDropdown = styled.div``;

const Slider = styled.div`
  width: 325px;
  height: 170px;
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
