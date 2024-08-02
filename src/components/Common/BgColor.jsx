import React from "react";
import styled from "styled-components";

function BgColor({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default BgColor;

const Wrapper = styled.div`
  background-color: #fafafa;
`;
