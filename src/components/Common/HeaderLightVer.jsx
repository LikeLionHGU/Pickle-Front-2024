import React from "react";
import styled from "styled-components";

function HeaderLightVer() {
  return <Wrapper>흰색 버전 헤더</Wrapper>;
}

export default HeaderLightVer;

const Wrapper = styled.div`
  border: 3px solid #42a8f8;
  height: 98px;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
