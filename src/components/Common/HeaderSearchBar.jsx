import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import searchBar from "../../assets/img/search.svg";
import { useNavigate } from "react-router-dom";

function HeaderSearchBar({ borderColor, placeholderColor }) {
  const [searchWord, setSearchWord] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const params = {
        page: 0,
        size: 100,
        direction: "DESC",
        searchWord: searchWord,
      };
      console.log("Request params:", params);

      let response = await axios.get("http://15.164.88.154:8080/api/course", {
        params: params,
      });

      if (response.data.length === 0) {
        alert("검색 결과가 없습니다.\n전체 강좌를 보여드리겠습니다.");
        response = await axios.get("http://15.164.88.154:8080/api/course", {
          params: {
            page: 0,
            size: 100,
            direction: "DESC",
          },
        });
        setCourses(response.data);
        console.log("Search results (fallback):", response);
        navigate("/listall", { state: { courses: response.data } });
      } else {
        setCourses(response.data);
        console.log("Search results:", response);
        navigate("/lecture", { state: { courses: response.data } });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper borderColor={borderColor}>
      <Search
        type="search"
        placeholder="검색어를 입력하세요"
        placeholderColor={placeholderColor}
        value={searchWord}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SearchBar>
        <img src={searchBar} alt="검색바" onClick={handleSearch} />
      </SearchBar>
    </Wrapper>
  );
}

export default HeaderSearchBar;

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.borderColor || "#42a8f8"};
  width: 340px;
  display: flex;
  align-items: end;
  margin-right: 40px;
  font-family: "PretendardRegular";
`;

const Search = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  font-size: 16px;
  background: transparent;
  color: ${(props) => props.placeholderColor || "#42a8f8"};
  padding-left: 10px;

  &::placeholder {
    color: ${(props) => props.placeholderColor || "#42a8f8"};
    font-size: 16px;
    /* padding-left: 10px; */
  }

  &:focus {
    outline: none;
  }
`;

const SearchBar = styled.div`
  height: 18px;
  margin-bottom: 13px;
`;
