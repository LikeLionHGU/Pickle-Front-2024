import React from "react";
import styled from "styled-components";

function ContentMain() {
  return (
    <Wrapper>
      인기 강좌, 동네의 가까운 곳 강좌가 보여질 메인 컨텐트 부분 <br />{" "}
      컴포넌트로 분리해서 넣거나 여기서 바로 개발해도 됩니다.
    </Wrapper>
  );
}

export default ContentMain;

const Wrapper = styled.div`
  border: 3px solid blue;
  width: 1160px;
  margin: auto;
  margin-top: 75px;
  font-size: 20px;
`;
