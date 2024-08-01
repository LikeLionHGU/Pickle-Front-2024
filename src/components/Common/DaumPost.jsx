import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode"; // Daum 주소 검색 관련 hook
import styled from "styled-components";
//주소 api

const DaumPost = ({ setAddress }) => {
  const postcodeScriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let localAddress = data.sido + " " + data.sigungu;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress = fullAddress.replace(localAddress, "");
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress); // setAddress를 호출하여 부모 컴포넌트의 상태를 업데이트
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <AddressSearchBtn onClick={handleClick}>주소 검색하기</AddressSearchBtn>
  );
};

export default DaumPost;

const AddressSearchBtn = styled.div`
  border: 1px solid #4aabf9;
  width: 273px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 13px;
  color: #4aabf9;
  cursor: pointer;
`;
