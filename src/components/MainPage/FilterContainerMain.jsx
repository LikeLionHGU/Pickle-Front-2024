import React from "react";
import styled from "styled-components";
import CalendarCom from "../Common/CalendarCom";

function FilterContainerMain() {
  return (
    <Wrapper>
      <Text>원하는 운동 강좌를 검색해보세요</Text>
      {/* <CalendarCom /> */}
    </Wrapper>
  );
}

export default FilterContainerMain;

const Wrapper = styled.div`
  border: 3px solid black;
  position: absolute;
  width: 1000px;
  height: 153px;
  top: 317px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 10px;
`;

const Text = styled.div`
  margin-top: 29px;
  margin-left: 41px;
  font-size: 18px;
`;
