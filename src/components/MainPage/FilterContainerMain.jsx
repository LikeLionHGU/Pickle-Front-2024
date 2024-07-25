import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CalendarCom from "../Common/CalendarCom";

function FilterContainerMain() {
  const [regionDropdown, setRegionDropdown] = useState(false);
  const [sportsDropdown, setSportsDropdown] = useState(false);
  const [subOptions, setSubOptions] = useState([]);
  const [subDropdown, setSubDropdown] = useState(false);
  const regionRef = useRef();
  const sportsRef = useRef();

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

  const handleClickOutside = (event) => {
    if (
      regionRef.current &&
      !regionRef.current.contains(event.target) &&
      sportsRef.current &&
      !sportsRef.current.contains(event.target)
    ) {
      setRegionDropdown(false);
      setSportsDropdown(false);
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
    setSubDropdown(false);
  };

  const toggleSportsDropdown = () => {
    setSportsDropdown(!sportsDropdown);
    setRegionDropdown(false);
    setSubDropdown(false);
  };

  const handleOptionClick = (option) => {
    if (option.subOptions.length > 0) {
      setSubOptions(option.subOptions);
      setSubDropdown(true);
    } else {
      setSubDropdown(false);
    }
  };

  return (
    <Wrapper>
      <Text>원하는 운동 강좌를 검색해보세요</Text>
      <FilterContainer>
        <FilterContent ref={regionRef}>
          <FilterTitle onClick={toggleRegionDropdown}>지역</FilterTitle>
          {regionDropdown && (
            <DropdownMenu>
              <DropdownSections>
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
                      <DropdownItem key={subOption}>{subOption}</DropdownItem>
                    ))}
                </SubDropdownSection>
              </DropdownSections>
            </DropdownMenu>
          )}
        </FilterContent>
        <FilterContent ref={sportsRef}>
          <FilterTitle onClick={toggleSportsDropdown}>운동종목</FilterTitle>
          {sportsDropdown && (
            <DropdownMenu>
              <DropdownSections>
                <DropdownSection>
                  {sportsOptions
                    .slice(0, Math.ceil(sportsOptions.length / 2))
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
                  {sportsOptions
                    .slice(Math.ceil(sportsOptions.length / 2))
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
                      <DropdownItem key={subOption}>{subOption}</DropdownItem>
                    ))}
                </SubDropdownSection>
              </DropdownSections>
            </DropdownMenu>
          )}
        </FilterContent>
        <FilterContent>
          <FilterTitle>장애유형</FilterTitle>
        </FilterContent>
        <FilterContent>
          <FilterTitle>날짜</FilterTitle>
        </FilterContent>
        <FilterContent>
          <FilterTitle>가격</FilterTitle>
        </FilterContent>
        <SearchBtn>
          <SearchBtnTitle>검색</SearchBtnTitle>
        </SearchBtn>
      </FilterContainer>
      {/* <CalendarCom /> */}
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
`;

const Text = styled.div`
  margin-top: 29px;
  margin-left: 41px;
  margin-bottom: 45px;
  font-size: 18px;
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
`;

const DropdownSections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
`;

const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  overflow-y: auto;
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
  color: ${(props) => (props.isSelected ? "#49abf9" : "black")};
  &:hover {
    color: #49abf9;
  }
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
