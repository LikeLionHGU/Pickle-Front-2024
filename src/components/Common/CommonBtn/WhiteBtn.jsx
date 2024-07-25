import React from "react";
import styled from "styled-components";

function WhiteBtn({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default WhiteBtn;

const Wrapper = styled.div`
  border: 1px solid #42a8f8;
  border-radius: 15px;
  color: #42a8f8;
  height: 30px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
`;
