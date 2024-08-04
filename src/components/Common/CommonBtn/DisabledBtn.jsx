import React from "react";
import styled from "styled-components";

function DisabledBtn({ children, onClick }) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

export default DisabledBtn;

const Wrapper = styled.div`
  background-color: #d9d9d9;
  border-radius: 15px;
  color: white;
  height: 30px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
`;
