import React, { useState } from "react";
import styled from "styled-components";
import kakaoBtn from "../../assets/img/bigKakaoBtn.svg";
import bgImg from "../../assets/img/signInBgImg.svg";
import DaumPost from "../Common/DaumPost";

function SignInContent() {
  const [form, setForm] = useState({
    name: "",
    bornYear: "",
    bornMonth: "",
    bornDay: "",
    sex: "",
    nickname: "",
    description: "",
    disabilityType: "",
    disabilityLevel: "",
    contactNumber: "",
    familyNumber: "",
    location: "",
    locationDetail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "birthdate") {
      const birthDate = new Date(value);
      setForm({
        ...form,
        bornYear: birthDate.getFullYear(),
        bornMonth: birthDate.getMonth() + 1,
        bornDay: birthDate.getDate(),
      });
    } else if (name === "contactNumber" || name === "familyNumber") {
      // 전화번호 입력값에서 '-'를 제거하고 상태 업데이트
      const cleanedValue = value.replace(/-/g, "");
      setForm({
        ...form,
        [name]: cleanedValue,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const formatPhoneNumber = (value) => {
    // 숫자만 남기기
    const numbersOnly = value.replace(/\D/g, "");

    // 3-4-4 형식 맞추기
    const formatted = numbersOnly.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");

    return formatted.substring(0, 13); // 13자만 반환 (010-0000-0000)
  };

  const removeHyphens = (value) => {
    return value.replace(/-/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // '-'를 제거한 값으로 제출하기
    const submittedForm = {
      ...form,
      contactNumber: removeHyphens(form.contactNumber),
      familyNumber: removeHyphens(form.familyNumber),
    };

    console.log("Form submitted:", submittedForm);
  };

  console.log("location: ", form.location);
  console.log("Form: ", form);
  return (
    <Wrapper>
      <BgImg>
        <Content>
          <SignIn>회원가입</SignIn>
          <Form onSubmit={handleSubmit}>
            <Section>
              <Label htmlFor="name">
                이름<Red>*</Red>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="이름을 입력해주세요"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Section>
            <Section>
              <Label htmlFor="nickname">
                닉네임<Red>*</Red>
              </Label>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="닉네임을 입력해주세요"
                value={form.nickname}
                onChange={handleChange}
                required
              />
            </Section>
            <Section>
              <Label>성별</Label>
              <Gender>
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  value="남성"
                  checked={form.sex === "남성"}
                  onChange={handleChange}
                />
                <GenderLabel htmlFor="male">남성</GenderLabel>
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  value="여성"
                  checked={form.sex === "여성"}
                  onChange={handleChange}
                />
                <GenderLabel htmlFor="female">여성</GenderLabel>
              </Gender>
            </Section>
            <Section>
              <Label htmlFor="birthdate">생년월일</Label>
              <Calendar
                type="date"
                id="birthdate"
                name="birthdate"
                placeholder="생년월일을 입력해주세요"
                value={form.birthdate}
                onChange={handleChange}
                $hasValue={!!form.birthdate}
                required
              />
            </Section>
            <AddressSection>
              <Label htmlFor="location">
                주소<Red>*</Red>
              </Label>
              <DaumPost setForm={setForm} />
            </AddressSection>
            <Address
              type="location"
              id="location"
              name="location"
              placeholder="주소"
              value={form.location}
              required
            />
            <lable htmlFor="locationDetail"></lable>
            <Address
              type="locationDetail"
              id="locationDetail"
              name="locationDetail"
              placeholder="상세주소"
              value={form.locationDetail}
              onChange={handleChange}
              $isSecond
            />
            <Section>
              <Label htmlFor="contactNumber">
                연락처<Red>*</Red>
              </Label>
              <Input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="연락처를 입력해주세요."
                value={formatPhoneNumber(form.contactNumber)}
                onChange={handleChange}
                required
              />
            </Section>
            <Section>
              <Label htmlFor="familyNumber">보호자 연락처</Label>
              <Input
                type="tel"
                id="familyNumber"
                name="familyNumber"
                placeholder="연락처를 입력해주세요"
                value={formatPhoneNumber(form.familyNumber)}
                onChange={handleChange}
              />
            </Section>
            <SelectWrapper>
              <Label htmlFor="disabilityType">
                장애 유형<Red>*</Red>
              </Label>
              <label htmlFor="disabilityLevel"></label>
              <Select
                id="disabilityType"
                name="disabilityType"
                value={form.disabilityType}
                onChange={handleChange}
                $hasValue={!!form.disabilityType}
                required
              >
                <option value="">장애유형</option>
                <option value="시각">시각</option>
                <option value="청각">청각</option>
                <option value="지체">지체</option>
                <option value="지적">지적</option>
                <option value="기타">기타</option>
              </Select>
              <Select
                id="disabilityLevel"
                name="disabilityLevel"
                value={form.disabilityLevel}
                onChange={handleChange}
                $hasValue={!!form.disabilityLevel}
                required
              >
                <option value="">등급</option>
                <option value="1">1급</option>
                <option value="2">2급</option>
                <option value="3">3급</option>
                <option value="4">4급</option>
                <option value="5">5급</option>
                <option value="6">6급</option>
              </Select>
            </SelectWrapper>
          </Form>
          <KakaoBtn>
            <img src={kakaoBtn} alt="카카오로 시작하기 버튼" />
          </KakaoBtn>
        </Content>
      </BgImg>
    </Wrapper>
  );
}

export default SignInContent;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  background-color: #fafafa;
  overflow: hidden;
`;

const BgImg = styled.div`
  background-image: url(${bgImg});
  margin-top: 80px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  z-index: 1;
  /* border: 2px solid green; */
`;

const Content = styled.div`
  /* border: 2px solid green; */
  width: 370px;
  margin: auto;
  background-color: #fafafa;
  padding-bottom: 116px;
`;

const SignIn = styled.div`
  text-align: center;
  font-size: 24px;
`;

const Form = styled.form`
  /* border: 1px solid red; */
  margin-top: 68px;
`;

const Red = styled.span`
  color: #ff254c;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  margin-bottom: 30px;
`;

const Label = styled.label`
  width: 85px;
  font-size: 15px;
  padding-right: 15px;
`;

const AddressSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
`;

const Address = styled.input`
  border: 1.3px solid #c3c3c3;
  border-radius: 2px;
  width: 252px;
  height: 32px;
  margin-left: 100px;
  font-size: 13px;
  padding-left: 14px;
  display: flex;
  align-items: center;
  font-family: "PretendardRegular";
  background: transparent;
  margin-bottom: ${($props) => ($props.$isSecond ? "30px" : "10px")};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #c3c3c3;
  }
`;

const Input = styled.input`
  border: 1.3px solid #c3c3c3;
  border-radius: 2px;
  box-sizing: border-box;
  width: 273px;
  height: 34px;
  padding-left: 14px;
  color: #000000;
  background: transparent;
  font-family: "PretendardRegular";

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #c3c3c3;
  }
`;

const Calendar = styled.input`
  border: 1.3px solid #c3c3c3;
  border-radius: 2px;
  box-sizing: border-box;
  width: 273px;
  height: 34px;
  padding-left: 14px;
  color: ${($props) => ($props.$hasValue ? "black" : "#c3c3c3")};
  background: transparent;
  font-family: "PretendardRegular";

  &::placeholder {
    color: #c3c3c3;
  }

  &::-webkit-calendar-picker-indicator {
    margin-right: 10px;
    cursor: pointer;
    color: #585858;
  }
`;

const Gender = styled.div`
  display: flex;
  align-items: center;
`;

const GenderLabel = styled.label`
  margin-left: 17px;
  margin-right: 70px;
  width: 28px;
  /* border: 1px solid red; */
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid green; */
`;

const Select = styled.select`
  width: 133px;
  height: 34px;
  border: 1.3px solid #c3c3c3;
  border-radius: 2px;
  box-sizing: border-box;
  padding-left: 14px;
  margin-right: 5px;
  color: ${($props) => ($props.$hasValue ? "black" : "#c3c3c3")};
  cursor: pointer;
  appearance: none;
  background: url('data:image/svg+xml;utf8,<svg fill="black" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')
    no-repeat right 8px center;
  font-family: "PretendardRegular";

  &:last-child {
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

const KakaoBtn = styled.div`
  margin-top: 47px;
  cursor: pointer;
`;
