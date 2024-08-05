import React from "react";
import styled from "styled-components";

function GrayInfoBox({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default GrayInfoBox;

const Wrapper = styled.div`
  background-color: #f1f1f1;
  /* height: 45px; */
  display: flex;
  align-items: center;
  padding-left: 18px;
  color: #939393;
  font-size: 18px;
  margin-top: 10px;
  border-radius: 15px;
  max-width: 310px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;
`;
