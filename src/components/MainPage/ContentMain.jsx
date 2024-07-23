import React, { useState } from "react";
import styled from "styled-components";
import PaginationCom from "../Common/PaginationCom.jsx";
import SliderCom from "../Common/SliderCom.jsx";

function ContentMain() {
  // const [posts, setPosts] = useState(tempdatas);
  const [limit, setlimit] = useState(4); // setlimit을 통해 화면에 표시될 콘텐츠 수 조절 가능.
  const [page, setPage] = useState(1); // 처음에 몇 번째 페이지를 보여줄 건지
  const offset = (page - 1) * limit;

  return (
    <Wrapper>
      인기 강좌, 동네의 가까운 곳 강좌가 보여질 메인 컨텐트 부분 <br />{" "}
      컴포넌트로 분리해서 넣거나 여기서 바로 개발해도 됩니다.
      {/* <SliderCom /> */}
      <AdCourse>광고</AdCourse>
      <PopularCourse>
        가장 가까운 곳 강좌예요
        <PopularContainer>
          <CouseContainer>
            <CName>물개가 되는 법</CName>
          </CouseContainer>
        </PopularContainer>
        <PaginationCom
          total={30}
          // limit={10}
          // page={5}
          // setPage={10}
          // total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </PopularCourse>
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

const AdCourse = styled.div`
  border: 3px solid black;
`;
const PopularCourse = styled.div`
  border: 3px solid black;
`;

const PopularContainer = styled.div`
  border: 3px solid red;
`;
const CouseContainer = styled.div`
  border: 3px solid red;
`;
const CName = styled.div``;
