import React from "react";
import styled from "styled-components";

function HeaderMain() {
  return <Wrapper>메인페이지 헤더</Wrapper>;
}

export default HeaderMain;

const Wrapper = styled.div`
  border: 3px solid red;
  position: absolute;
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: center;
  font-size: 30px;
`;
