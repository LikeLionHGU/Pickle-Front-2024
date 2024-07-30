import React, { useState } from "react";
import styled from "styled-components";
import GrayInfoBox from "../Common/GrayInfoBox";
import MapCon from "../Common/MapCon";
import LecturePurchaseCard from "./LecturePurchaseCard";

function LecturePurchaseContent() {
  const [selectedOption, setSelectedOpiton] = useState("creditCard");

  const handleOptionChange = (event) => {
    setSelectedOpiton(event.target.value);
  };

  const course = {
    courseId: 1,
    title: "건강한 피트니스 루틴",
    name: "이다빈 강사님",
    sportType: "수영",
    location: "경북 포항시 북구",
    score: 3.5,
    disabilityType: "뇌병변 / 시, 청각 장애 가능",
    price: 30000,
    likeCount: 100,
    isLike: true,
    isGroup: false,
    teacherName: "이다빈 강사님",
    imageURL:
      "https://cdn.pixabay.com/photo/2019/07/01/10/44/water-4309678_1280.jpg",
  };

  return (
    <Wrapper>
      <Left>
        <Blue>신청자 정보</Blue>
        <UserInfo>이름</UserInfo>
        <GrayInfoBox>최예라</GrayInfoBox>
        <UserInfo>생년월일</UserInfo>
        <GrayInfoBox>2002.08.16</GrayInfoBox>
        <UserInfo>전화번호</UserInfo>
        <GrayInfoBox>010-1234-1234</GrayInfoBox>
        <Coupon>
          <Blue>할인쿠폰 선택</Blue>
          <CouponDropDown>컴포넌트로 추가 예정</CouponDropDown>
        </Coupon>
        <PaymentInfo>
          <Payment>결제 정보</Payment>
          <PaymentOption>
            <Radio>
              <Input
                type="radio"
                id="creditCard"
                name="payment"
                value="creditCard"
                checked={selectedOption === "creditCard"}
                onChange={handleOptionChange}
                style={{ height: "30px", width: "30px" }}
              />
              <Option htmlFor="creditCard">신용카드</Option>
            </Radio>
            <Radio style={{ marginLeft: "60px" }}>
              <Input
                type="radio"
                id="accountTransfer"
                name="payment"
                value="accountTransfer"
                checked={selectedOption === "accountTransfer"}
                onChange={handleOptionChange}
                style={{ height: "30px", width: "30px" }}
              />
              <Option htmlFor="accountTransfer">계좌이체</Option>
            </Radio>
          </PaymentOption>
        </PaymentInfo>
      </Left>
      <Right>
        <Blue>강좌정보</Blue>
        <CourseInfo>
          <LecturePurchaseCard course={course} />
        </CourseInfo>
        <Map>
          <MapCon />
        </Map>
        <Price>
          <PriceContent>
            <SelectedPrice>선택상품 금액</SelectedPrice>
            <div style={{ display: "flex", justifyContent: "space-Between" }}>
              <DiscountedPrice>할인금액</DiscountedPrice>
              <SelectedPrice>50,000원</SelectedPrice>
            </div>
            <DiscountedPrice style={{ display: "flex", justifyContent: "end" }}>
              5,000원
            </DiscountedPrice>
            <div style={{ display: "flex", justifyContent: "space-Between" }}>
              <TotalPrice>총 결제금액</TotalPrice>
              <TotalPrice>45,000원</TotalPrice>
            </div>
          </PriceContent>
        </Price>
        <PurchaseBtn>결제하기</PurchaseBtn>
      </Right>
    </Wrapper>
  );
}

export default LecturePurchaseContent;

const Wrapper = styled.div`
  /* border: 1px solid green; */
  width: 1040px;
  margin: auto;
  margin-top: 95px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;
`;

const Blue = styled.div`
  font-size: 22px;
  color: #4aabf9;
`;

const Left = styled.div`
  width: 410px;
  /* border: 1px solid red; */
`;

const Right = styled.div`
  width: 520px;
  /* border: 1px solid red; */
`;

const UserInfo = styled.div`
  font-size: 20px;
  margin-top: 46px;

  &:first-child {
    margin: 0;
  }
`;

const Coupon = styled.div`
  margin-top: 100px;
`;

const CouponDropDown = styled.div`
  background-color: #f1f1f1;
  height: 45px;
  margin-top: 30px;
  border-radius: 15px;
  padding-left: 20px;
  font-size: 20px;
  color: #939393;
  display: flex;
  align-items: center;
`;

const PaymentInfo = styled.div`
  /* border: 1px solid red; */
  margin-top: 85px;
`;

const Payment = styled.div`
  font-size: 25px;
`;

const PaymentOption = styled.div`
  margin-top: 45px;
  display: flex;
  font-size: 20px;
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  /* border: 1px solid red; */
  cursor: pointer;
`;

const Option = styled.label`
  /* border: 1px solid blue; */
  margin-left: 3px;
  padding-top: 8px;
  height: 100%;
`;

const CourseInfo = styled.div`
  background-color: #ececec;
  height: 280px;
  margin-top: 30px;
  border-radius: 20px;
  padding-top: 40px;
  padding-left: 30px;
`;

const Map = styled.div`
  margin-top: 30px;
  height: 160px;
`;

const Price = styled.div`
  /* border: 1px solid red; */
  margin-top: 70px;
`;

const PriceContent = styled.div`
  /* border: 1px solid green; */
  margin-left: 110px;
  font-size: 22px;
`;

const SelectedPrice = styled.div`
  color: #777777;

  &:last-child {
    margin-top: 12px;
  }
`;

const DiscountedPrice = styled.div`
  color: #ff6060;
  margin-top: 12px;
`;

const TotalPrice = styled.div`
  margin-top: 12px;
`;

const PurchaseBtn = styled.div`
  background-color: #42a8f8;
  margin-top: 50px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
