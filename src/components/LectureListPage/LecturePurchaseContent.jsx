import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GrayInfoBox from "../Common/GrayInfoBox";
import MapCon from "../Common/MapCon";
import LecturePurchaseCard from "./LecturePurchaseCard";
import BgColor from "../Common/BgColor";
import couponArrow from "../../assets/img/couponArrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import pickleImg from "../../assets/img/UserLevel0.svg";

function LecturePurchaseContent() {
  const [selectedOption, setSelectedOpiton] = useState("creditCard");
  const navigate = useNavigate();
  const { courseId, courseBlockId } = useParams();
  const [data, setData] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/mypage`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch(() => {
        setUserData({});
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HOST_URL}/api/course/detail?courseId=${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log("data: ", response.data);
        setData(response.data);
      });
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOpiton(event.target.value);
  };

  const handlePurchaseBtnClick = () => {
    if (window.confirm("이 강좌를 결제하시겠습니까?")) {
      axios
        .post(
          `${process.env.REACT_APP_HOST_URL}/api/course/detail?courseBlockId=${courseBlockId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          alert("수강신청이 완료되었습니다.");
          navigate("/user/learning");
        });
    }
  };

  const formatPhoneNumber = (value) => {
    const numbersOnly = value.replace(/\D/g, "");
    const formatted = numbersOnly.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    return formatted.substring(0, 13);
  };

  const handleCouponClick = () => {
    alert("사용 가능한 쿠폰이 없습니다.");
  };

  if (!data)
    return (
      <LoadingWrapper>
        <Pickle src={pickleImg} alt="기본 피클 이미지" />
        <LoadingText>결제 정보 로딩 중..</LoadingText>
      </LoadingWrapper>
    );
  if (!userData) return <div></div>;

  return (
    <BgColor>
      <Wrapper>
        <Left>
          <Blue>신청자 정보</Blue>
          <UserInfo>이름</UserInfo>
          <GrayInfoBox>{userData.name}</GrayInfoBox>
          <UserInfo>생년월일</UserInfo>
          <GrayInfoBox>
            {userData.bornYear}년 {userData.bornMonth}월 {userData.bornDay}일
          </GrayInfoBox>
          <UserInfo>전화번호</UserInfo>
          <GrayInfoBox>{formatPhoneNumber(userData.contactNumber)}</GrayInfoBox>
          <Coupon>
            <Blue>할인쿠폰 선택</Blue>
            <CouponDropDown onClick={handleCouponClick}>
              <img src={couponArrow} alt="쿠폰 화살표" />
            </CouponDropDown>
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
            <LecturePurchaseCard
              course={data}
              selectedCourseBlockId={courseBlockId}
            />
          </CourseInfo>
          <Map>
            <MapCon />
          </Map>
          <Price>
            <PriceContent>
              <div style={{ display: "flex", justifyContent: "space-Between" }}>
                <SelectedPrice>선택상품 금액</SelectedPrice>
                <SelectedPrice>{data.price.toLocaleString()}원</SelectedPrice>
              </div>
              <div style={{ display: "flex", justifyContent: "space-Between" }}>
                <DiscountedPrice>할인금액</DiscountedPrice>
                <DiscountedPrice>0원</DiscountedPrice>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-Between",
                  marginTop: "48px",
                }}
              >
                <TotalPrice>총 결제금액</TotalPrice>
                <TotalPrice>{data.price.toLocaleString()}원</TotalPrice>
              </div>
            </PriceContent>
          </Price>
          <PurchaseBtn onClick={handlePurchaseBtnClick}>결제하기</PurchaseBtn>
        </Right>
      </Wrapper>
    </BgColor>
  );
}

export default LecturePurchaseContent;

const Wrapper = styled.div`
  /* border: 1px solid green; */
  width: 1040px;
  margin: auto;
  padding-top: 95px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
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
  justify-content: end;
  cursor: pointer;

  img {
    margin-right: 15px;
  }
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
  border-radius: 8px;
  cursor: pointer;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Pickle = styled.img`
  height: 200px;
`;

const LoadingText = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;
