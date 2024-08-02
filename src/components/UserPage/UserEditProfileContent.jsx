import React, { useState } from "react";
import styled from "styled-components";
import BlueBtn from "../Common/CommonBtn/BlueBtn";
import GrayInfoBox from "../Common/GrayInfoBox";

function UserEditProfileContent() {
  const [formData, setFormData] = useState({
    name: "이빈치",
    nickname: "다빈치",
    sex: "남성", // "남성" | "여성"
    contactNumber: "01012341234",
    familyNumber: "01056785678",
    birthdate: "1990-05-15",
    address: "테스트 주소",
    description: "저는 맥도날드를 좋아합니다",
    disabilityType: "시각장애",
    disabilityLevel: 3,
  });

  const [editableField, setEditableField] = useState(null);

  const handleFieldClick = (field) => {
    setEditableField(field);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleBlur = () => {
    setEditableField(null);
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };

  return (
    <Wrapper>
      <Contents>
        <Title>최예라 님의 프로필 정보에요</Title>
        <Content>
          <InfoLeft>
            <UserInfo>이름</UserInfo>
            <GrayInfoBox>
              {editableField === "name" ? (
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("name")}>
                  {formData.name}
                </div>
              )}
            </GrayInfoBox>
            <UserInfo>닉네임</UserInfo>
            <GrayInfoBox>
              {editableField === "nickname" ? (
                <Input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) =>
                    handleInputChange("nickname", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("nickname")}>
                  {formData.nickname}
                </div>
              )}
            </GrayInfoBox>
            <UserInfo>성별</UserInfo>
            <GrayInfoBox>
              {editableField === "sex" ? (
                <Select
                  value={formData.sex}
                  onChange={(e) => handleInputChange("sex", e.target.value)}
                  onBlur={handleBlur}
                >
                  <option value="남성">남성</option>
                  <option value="여성">여성</option>
                </Select>
              ) : (
                <div onClick={() => handleFieldClick("sex")}>
                  {formData.sex}
                </div>
              )}
            </GrayInfoBox>
            <UserInfo>전화번호</UserInfo>
            <GrayInfoBox>
              {editableField === "contactNumber" ? (
                <Input
                  type="text"
                  value={formatPhoneNumber(formData.contactNumber)}
                  onChange={(e) =>
                    handleInputChange("contactNumber", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("contactNumber")}>
                  {formatPhoneNumber(formData.contactNumber)}
                </div>
              )}
            </GrayInfoBox>
            <UserInfo>보호자 연락처</UserInfo>
            <GrayInfoBox>
              {editableField === "familyNumber" ? (
                <Input
                  type="text"
                  value={formatPhoneNumber(formData.familyNumber)}
                  onChange={(e) =>
                    handleInputChange("familyNumber", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("familyNumber")}>
                  {formatPhoneNumber(formData.familyNumber)}
                </div>
              )}
            </GrayInfoBox>
          </InfoLeft>
          <InfoRight>
            <UserInfo>생년월일</UserInfo>
            <GrayInfoBox>
              {editableField === "birthdate" ? (
                <Input
                  type="date"
                  value={formData.birthdate}
                  onChange={(e) =>
                    handleInputChange("birthdate", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("birthdate")}>
                  {formData.birthdate}
                </div>
              )}
            </GrayInfoBox>
            <UserInfo>주소</UserInfo>
            <GrayInfoBox>
              {editableField === "address" ? (
                <Input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("address")}>
                  {formData.address}
                </div>
              )}
            </GrayInfoBox>
            <UserInfo>특이사항</UserInfo>
            <GrayInfoBox>
              {editableField === "description" ? (
                <Input
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("description")}>
                  {formData.description}
                </div>
              )}
            </GrayInfoBox>
            <HalfInfo>
              <HalfContent>
                <UserInfo>장애 유형</UserInfo>
                <GrayInfoBox>
                  {editableField === "disabilityType" ? (
                    <Select
                      value={formData.disabilityType}
                      onChange={(e) =>
                        handleInputChange("disabilityType", e.target.value)
                      }
                      onBlur={handleBlur}
                    >
                      <option value="시각장애">시각장애</option>
                      <option value="청각장애">청각장애</option>
                      <option value="지체장애">지체장애</option>
                      <option value="지적장애">지적장애</option>
                      <option value="기타">기타</option>
                    </Select>
                  ) : (
                    <div onClick={() => handleFieldClick("disabilityType")}>
                      {formData.disabilityType}
                    </div>
                  )}
                </GrayInfoBox>
              </HalfContent>
              <HalfContent>
                <UserInfo>등급</UserInfo>
                <GrayInfoBox>
                  {editableField === "disabilityLevel" ? (
                    <Select
                      value={formData.disabilityLevel}
                      onChange={(e) =>
                        handleInputChange("disabilityLevel", e.target.value)
                      }
                      onBlur={handleBlur}
                    >
                      {[...Array(6).keys()].map((level) => (
                        <option key={level + 1} value={level + 1}>
                          {level + 1}
                        </option>
                      ))}
                    </Select>
                  ) : (
                    <div onClick={() => handleFieldClick("disabilityLevel")}>
                      {formData.disabilityLevel}
                    </div>
                  )}
                </GrayInfoBox>
              </HalfContent>
            </HalfInfo>
            <AddInfoBtn>+</AddInfoBtn>
          </InfoRight>
        </Content>
      </Contents>
      <Btn>
        <BlueBtn>수정하기</BlueBtn>
      </Btn>
    </Wrapper>
  );
}

export default UserEditProfileContent;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  font-size: 40px;
  padding-top: 90px;
  padding-left: 135px;
  display: flex;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Btn = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: end;
  margin-bottom: 50px;
`;

const Contents = styled.div`
  /* border: 2px solid blue; */
  margin-right: 190px;
`;

const Content = styled.div`
  /* border: 2px solid red; */
  margin-top: 18px;
  width: 762px;
  display: flex;
  justify-content: space-between;
`;

const InfoLeft = styled.div`
  /* border: 1px solid green; */
  width: 310px;
`;

const InfoRight = styled.div`
  /* border: 1px solid green; */
  width: 360px;
`;

const UserInfo = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const HalfInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const HalfContent = styled.div`
  /* border: 1px solid blue; */
  width: 173px;
`;

const AddInfoBtn = styled.div`
  border: 1px solid #d1d1d1;
  height: 45px;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #939393;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 18px;
  font-family: "PretendardSemiBold";

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #c3c3c3;
  }

  &::-webkit-calendar-picker-indicator {
    margin-right: 10px;
    cursor: pointer;
    color: #585858;
  }
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 18px;
  color: #939393;

  cursor: pointer;
  appearance: none;
  background: url('data:image/svg+xml;utf8,<svg fill="black" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')
    no-repeat right 8px center;
  font-family: "PretendardSemiBold";

  &:focus {
    outline: none;
  }
`;
