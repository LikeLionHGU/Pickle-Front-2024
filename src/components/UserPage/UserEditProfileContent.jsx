import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlueBtn from "../Common/CommonBtn/BlueBtn";
import GrayInfoBox from "../Common/GrayInfoBox";
import axios from "axios";
import pickleImg from "../../assets/img/UserLevel0.svg";
import DisabledBtn from "../Common/CommonBtn/DisabledBtn";

function UserEditProfileContent() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bornYear: "",
    bornMonth: "",
    bornDay: "",
    sex: false,
    nickname: "",
    description: "특이사항",
    disabilityTypeList: [],
    disabilityLevelList: [],
    contactNumber: "",
    familyNumber: "",
    address: "",
    detailAddress: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/mypage`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        const data = response.data;
        setUserData(data);

        const birthdate = data.birthdate ? new Date(data.birthdate) : null;
        const bornYear = birthdate ? birthdate.getFullYear().toString() : "";
        const bornMonth = birthdate
          ? (birthdate.getMonth() + 1).toString().padStart(2, "0")
          : "";
        const bornDay = birthdate
          ? birthdate.getDate().toString().padStart(2, "0")
          : "";

        setFormData({
          name: data.name,
          bornYear: bornYear,
          bornMonth: bornMonth,
          bornDay: bornDay,
          sex: data.sex || "",
          nickname: data.nickname,
          description: data.description,
          disabilityTypeList: data.disabilityTypeList,
          disabilityLevelList: data.disabilityLevelList,
          contactNumber: data.contactNumber,
          familyNumber: data.familyNumber,
          address: data.address,
          detailAddress: data.detailAddress,
        });
      })
      .catch(() => {
        setUserData({});
      });
  }, []);

  console.log("form data: ", formData);

  const handleInputChange = (field, value, index = null) => {
    if (field === "disabilityTypeList" || field === "disabilityLevelList") {
      const newList = [...formData[field]];
      newList[index] =
        field === "disabilityLevelList" ? parseInt(value, 10) : value;
      setFormData({ ...formData, [field]: newList });
    } else if (field === "birthdate") {
      const birthdate = new Date(value);
      setFormData({
        ...formData,
        bornYear: birthdate.getFullYear().toString(),
        bornMonth: (birthdate.getMonth() + 1).toString().padStart(2, "0"),
        bornDay: birthdate.getDate().toString().padStart(2, "0"),
      });
    } else if (field === "sex") {
      setFormData({ ...formData, [field]: value });
    } else {
      setFormData({ ...formData, [field]: value });
    }
    setIsEditing(true);
  };

  const [editableField, setEditableField] = useState(null);

  const handleFieldClick = (field) => {
    setEditableField(field);
    setIsEditing(true);
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

  const addDisability = () => {
    setFormData({
      ...formData,
      disabilityTypeList: [...formData.disabilityTypeList, "장애유형"],
      disabilityLevelList: [...formData.disabilityLevelList, "등급"],
    });
  };

  if (!userData)
    return (
      <LoadingWrapper>
        <Pickle src={pickleImg} alt="기본 피클 이미지" />
        <LoadingText>로딩 중..</LoadingText>
      </LoadingWrapper>
    );

  return (
    <Wrapper>
      <Contents>
        <Title>{userData.nickname} 님의 프로필 정보에요</Title>
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
                  value={formData.sex ? "true" : "false"}
                  onChange={(e) =>
                    handleInputChange("sex", e.target.value === "true")
                  }
                  onBlur={handleBlur}
                >
                  <option value="false">남성</option>
                  <option value="true">여성</option>
                </Select>
              ) : (
                <div onClick={() => handleFieldClick("sex")}>
                  {formData.sex ? "여성" : "남성"}
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
                  value={`${formData.bornYear}-${formData.bornMonth}-${formData.bornDay}`}
                  onChange={(e) =>
                    handleInputChange("birthdate", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("birthdate")}>
                  {`${formData.bornYear}-${formData.bornMonth}-${formData.bornDay}`}
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
            <GrayInfoBox>
              {editableField === "detailAddress" ? (
                <Input
                  type="text"
                  value={formData.detailAddress}
                  onChange={(e) =>
                    handleInputChange("detailAddress", e.target.value)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <div onClick={() => handleFieldClick("detailAddress")}>
                  {formData.detailAddress}
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
            {formData.disabilityTypeList.map((type, index) => (
              <HalfInfo key={index}>
                <HalfContent>
                  {index === 0 && <UserInfo>장애 유형</UserInfo>}
                  <GrayInfoBox>
                    {editableField === `disabilityType-${index}` ? (
                      <Select
                        value={type}
                        onChange={(e) =>
                          handleInputChange(
                            "disabilityTypeList",
                            e.target.value,
                            index
                          )
                        }
                        onBlur={handleBlur}
                      >
                        <option value="시각">시각장애</option>
                        <option value="청각">청각장애</option>
                        <option value="지체">지체장애</option>
                        <option value="지적">지적장애</option>
                        <option value="기타">기타</option>
                      </Select>
                    ) : (
                      <div
                        onClick={() =>
                          handleFieldClick(`disabilityType-${index}`)
                        }
                      >
                        {type}
                      </div>
                    )}
                  </GrayInfoBox>
                </HalfContent>
                <HalfContent>
                  {index === 0 && <UserInfo>등급</UserInfo>}
                  <GrayInfoBox>
                    {editableField === `disabilityLevel-${index}` ? (
                      <Select
                        value={formData.disabilityLevelList[index]}
                        onChange={(e) =>
                          handleInputChange(
                            "disabilityLevelList",
                            e.target.value,
                            index
                          )
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
                      <div
                        onClick={() =>
                          handleFieldClick(`disabilityLevel-${index}`)
                        }
                      >
                        {formData.disabilityLevelList[index]}
                      </div>
                    )}
                  </GrayInfoBox>
                </HalfContent>
              </HalfInfo>
            ))}
            <AddInfoBtn onClick={addDisability}>+</AddInfoBtn>
          </InfoRight>
        </Content>
      </Contents>
      <Btn>
        {!isEditing ? (
          <DisabledBtn disabled>수정하기</DisabledBtn>
        ) : (
          <BlueBtn>수정하기</BlueBtn>
        )}
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
  margin-bottom: 50px;
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

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Pickle = styled.img`
  height: 200px;
`;

const LoadingText = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;
