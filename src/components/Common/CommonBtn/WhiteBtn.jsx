import React from "react";
import styled from "styled-components";

function WhiteBtn({ children, onClick }) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

export default WhiteBtn;

const Wrapper = styled.button`
  border: 1px solid #42a8f8;
  border-radius: 15px;
  color: #42a8f8;
  background-color: white;
  font-family: "PretendardSemiBold";
  height: 30px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
`;
