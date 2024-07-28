import React from "react";
import styled from "styled-components";
import searchBar from "../../assets/img/search.svg";

function HeaderSearchBar({ borderColor, placeholderColor }) {
  return (
    <Wrapper borderColor={borderColor}>
      {" "}
      <Search
        type="search"
        placeholder="검색어를 입력하세요"
        placeholderColor={placeholderColor}
        // value={value}
        // onChange={onChange}
      />
      <SerachBar>
        <img src={searchBar} alt="검색바"></img>
      </SerachBar>
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
  font-size: 17px;
  background: transparent;

  &::placeholder {
    color: ${(props) => props.placeholderColor || "#42a8f8"};
    font-size: 17px;
    padding-left: 10px;
  }

  &:focus {
    outline: none;
  }
`;

const SerachBar = styled.div`
  height: 18px;
  margin-bottom: 13px;
  margin-right: 10px;
  cursor: pointer;
`;
