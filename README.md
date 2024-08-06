# 장애인 스포츠 강좌 선택 수강 플랫폼, Pickle 🥇

![Pickle](https://github.com/user-attachments/assets/e7035763-50a6-4f2c-9e4b-a4ee8acfe938)

- 배포 URL : https://pickle-pickle.netlify.app

<br>

## 프로젝트 소개

- Pick Abilities, Empower Disabled Persons
- 피클은 장애인의 운동 기회를 위한 스포츠 강좌 선택 수강 플랫폼입니다.
- 상세한 필터링을 통한 맞춤형 강좌를 선택할 수 있습니다.
- 강사 프로필 확인을 통해 강좌 개설 내역을 확인하고 신뢰도를 높였습니다.

<br>

## 프로젝트 기간

24.07.05 ~ 24.08.06

<br>

## Pickle 팀원 구성

| 기획자 | 디자이너 | 프론트엔드 개발자 | 프론트엔드 개발자 | 백엔드 개발자 | 백엔드 개발자 |
| :----: | :------: | :---------------: | :---------------: | :-----------: | :-----------: |
| 김예지 |  석예슬  |      최예라       |      김예지       |    이다빈     |    장유진     |

<br />

## 프론트엔드 개발자들의 개인 깃허브

|                                                                                        **최예라**                                                                                        |                                                                                         **김예지**                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://github.com/user-attachments/assets/24ac9407-972d-4ebd-a7d5-a4c0787f9dce" height=160 width=160> <br/> @YearaChoi](https://github.com/YearaChoi) | [<img src="https://github.com/user-attachments/assets/bc729a7c-8f65-41c0-86bb-9287e123477f" height=160 width=160> <br/> @yeji](https://github.com/skwldwld) |


</div>

<br>

## 1. 개발 환경

- Front : HTML, React, styled-components, prettier
- 버전 및 이슈관리 : Github, Github Issues
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : Netlify

<br>

## 2. 서비스 핵심 기능 및 페이지 소개

### 맞춤형 강좌 선택

![image.jpg1](https://github.com/user-attachments/assets/9ba0dc8f-834e-47eb-9e89-407460981084) |![image.jpg2](https://github.com/user-attachments/assets/3a32bda9-1cef-4b60-9d97-e21cfecf9306)
--- | --- | 

- 지역, 운동종목, 장애유형, 날짜, 가격, 개인/그룹 항목별 필터링이 제공됩니다.

<br>

### 신뢰도 있는 강사

![image.jpg1](https://github.com/user-attachments/assets/05b609e9-b792-497f-8e58-d66df3fdb7eb)|![image.jpg2](https://github.com/user-attachments/assets/2dbc6122-a5a7-4717-b539-3f1697b4461d) 
--- | --- | 

- 강사 프로플 확인을 통해 강좌 개설 내역을 확인할 수 있습니다.
- 강사의 보유 자격증 및 강좌 평점이 표시됩니다.

  <br>

### 사용자 동기부여

![image.jpg1](https://github.com/user-attachments/assets/a3a57018-4f59-4927-8733-abd0c9df946c)
--- | 
- 등급제를 통한 혜택 지급으로 사용자가 운동을 지속할 수 있도록 동기부여 합니다.

<br>

### 강좌 수강 

![image.jpg1](https://github.com/user-attachments/assets/ce31f676-89d5-4f24-9f2e-6f63f416ead3)|![image.jpg2](https://github.com/user-attachments/assets/e6cd06bf-013e-4b86-a551-c6019d799856) 
--- | --- | 

- 해당 강좌의 시간을 선택하여 수강신청 할 수 있습니다.
- 사용자가 찜한 강좌, 수강한 강좌, 수강 완료한 강좌는 유저 페이지에서 확인할 수 있습니다.

<br>

## 3. 개발 가이드라인

### 이슈 작성

✹ **Git Issue**

- 작업할 기능에 대한 issue를 작성합니다.
- issue 제목은 **[타입] - 설명**으로 통일합니다. (ex. [Style] - 텍스트 스타일 추가)
- Assignees에는 작업을 맡은 사람을 태그합니다.
- Labels에는 해당 작업과 맞는 유형을 태그합니다.
- 설명란에는 어떤 작업을 할 예정인지, 관련된 이슈번호가 있는지 참고한 내용이 있는지 등 필요한 내용을 적습니다.
  <br />

### 브랜치 생성

✹ **Git Branch**

- 각자 생성한 브랜치에서만 작업합니다.
- 브랜치 이름 구조는 <**/#이슈번호/본인파트/-본인이름**> 입니다. (ex. #1/MainPage-Yeara)
  <br />

### Commit 메시지 작성법

|          |                                       |                                                         |
| -------- | ------------------------------------- | ------------------------------------------------------- |
| type     | Description                           | Example                                                 |
| feat     | 새로운 기능 추가, 구현                | feat : 로그인 기능 구현                                 |
| edit     | 단순 오타 수정                        | edit : 로그인 캐시 처리 방식 수정                       |
| style    | UI작업, 스타일 관련 파일 추가 및 수정 | style : 폰트 등록                                       |
| add      | asset 파일(이미지, 아이콘 등) 추가    | add : 위젯 이미지 추가                                  |
| chore    | 파일, 경로를 옮기거나 이름 변경       | chore : feet -> feat 이름 변경                          |
| delete   | 덤프 파일 삭제                        | delete : Empty.md 파일 삭제                             |
| merge    | 브랜치 병합(merge)                    | merge : pull request #3 from LikeLionHGU/Haeun_Style/#1 |
| fix      | 버그 픽스                             | fix : Color 버그 수정                                   |
| docs     | 문서 작업                             | docs : Readme 작성                                      |
| refactor | 코드 리팩토링                         | refactor : 변수명 수정                                  |
| model    | 데이터베이스(모델) 작업               | model : 데이터 모델 생성                                |
| init     | 프로젝트 생성                         | init : 프로젝트 생성                                    |
| test     | 테스트 케이스 생성                    | test: 테스트 케이스 생성                                |
| 빌드관련 |                                       |                                                         |
| build    | 재빌드                                | build: 동일버전 재빌드(x.xx)                            |
| version  | 버전 업                               | version : 버전(2.0.0) 업데이트                          |

<br />

## 4. 프로젝트 구조

```

src
 ┣ assets
 ┃ ┣ fonts
 ┃ ┃ ┣ PretendardTTF
 ┃ ┃ ┗ GlobalStyle.jsx
 ┃ ┣ img
 ┃ ┗ logo
 ┃ ┃ ┣ PickleLogo.svg
 ┃ ┃ ┗ PickleWhiteLogo.svg
 ┣ components
 ┃ ┣ Common
 ┃ ┃ ┣ CommonBtn
 ┃ ┃ ┃ ┣ BlueBtn.jsx
 ┃ ┃ ┃ ┣ DisabledBtn.jsx
 ┃ ┃ ┃ ┗ WhiteBtn.jsx
 ┃ ┃ ┣ BgColor.jsx
 ┃ ┃ ┣ CalendarCom.jsx
 ┃ ┃ ┣ CourseCard.jsx
 ┃ ┃ ┣ CourseDivideLine.jsx
 ┃ ┃ ┣ DaumPost.jsx
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┣ GrayInfoBox.jsx
 ┃ ┃ ┣ HeaderLightVer.jsx
 ┃ ┃ ┣ HeaderSearchBar.jsx
 ┃ ┃ ┣ MapCon.jsx
 ┃ ┃ ┣ PaginationCom.jsx
 ┃ ┃ ┣ ScrollToTop.jsx
 ┃ ┃ ┣ SliderCom.jsx
 ┃ ┃ ┗ StarRating.jsx
 ┃ ┣ LectureListPage
 ┃ ┃ ┣ LectureDetailContent.jsx
 ┃ ┃ ┣ LectureListContent.jsx
 ┃ ┃ ┣ LecturePurchaseCard.jsx
 ┃ ┃ ┣ LecturePurchaseContent.jsx
 ┃ ┃ ┣ ListAllContent.jsx
 ┃ ┃ ┣ TeacherProfileCard.jsx
 ┃ ┃ ┗ TeacherProfileModal.jsx
 ┃ ┣ MainPage
 ┃ ┃ ┣ BannerMain.jsx
 ┃ ┃ ┣ ContentMain.jsx
 ┃ ┃ ┣ CustomArrows.jsx
 ┃ ┃ ┣ FilterContainerMain.jsx
 ┃ ┃ ┣ HeaderMain.jsx
 ┃ ┃ ┣ LoginModal.jsx
 ┃ ┃ ┣ SelectedContentBox.jsx
 ┃ ┃ ┗ SignInContent.jsx
 ┃ ┗ UserPage
 ┃ ┃ ┣ SideBar.jsx
 ┃ ┃ ┣ UserCompleteLetureContent.jsx
 ┃ ┃ ┣ UserEditProfileContent.jsx
 ┃ ┃ ┣ UserLearningContent.jsx
 ┃ ┃ ┣ UserPointContent.jsx
 ┃ ┃ ┗ UserSavedLectureContent.jsx
 ┣ pages
 ┃ ┣ LectureDetailPage.jsx
 ┃ ┣ LectureListPage.jsx
 ┃ ┣ LecturePurchasePage.jsx
 ┃ ┣ ListAllPage.jsx
 ┃ ┣ LoginRedirection.jsx
 ┃ ┣ MainPage.jsx
 ┃ ┣ SignInPage.jsx
 ┃ ┣ UserCompleteLecturePage.jsx
 ┃ ┣ UserEditProfilePage.jsx
 ┃ ┣ UserLearningPage.jsx
 ┃ ┣ UserPage.jsx
 ┃ ┗ UserSavedLecturePage.jsx

 ```

<br />
