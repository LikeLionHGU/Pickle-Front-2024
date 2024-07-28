import React from "react";
import styled from "styled-components";

function BlueBtn({ children, onClick }) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

export default BlueBtn;

const Wrapper = styled.div`
  background-color: #42a8f8;
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
