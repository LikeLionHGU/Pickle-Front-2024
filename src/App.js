import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./pages/MainPage.jsx";
import Map from "./components/Common/MapCon.jsx";
import ScrollToTop from "./components/Common/ScrollToTop.jsx";
import UserPage from "./pages/UserPage.jsx";
import UserSavedLecturePage from "./pages/UserSavedLecturePage.jsx";
import UserLearningPage from "./pages/UserLearningPage.jsx";
import UserCompleteLecturePage from "./pages/UserCompleteLecturePage.jsx";
import UserEditProfilePage from "./pages/UserEditProfilePage.jsx";
import LectureListPage from "./pages/LectureListPage.jsx";
import LectureDetailPage from "./pages/LectureDetailPage.jsx";
import LecturePurchasePage from "./pages/LecturePurchasePage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import LoginRedirection from "./pages/LoginRedirection.jsx";
import SearchLectureListPage from "./pages/SearchLectureListPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/sign" element={<SignInPage />}></Route>
        <Route path="/kakao/cb" element={<LoginRedirection />}></Route>
        <Route path="/lecture" element={<LectureListPage />}></Route>
        <Route path="/search" element={<SearchLectureListPage />}></Route>
        <Route
          path="/lecture/:courseId"
          element={<LectureDetailPage />}
        ></Route>
        <Route
          path="/lecture/:courseId/:courseBlockId"
          element={<LecturePurchasePage />}
        ></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/user/saved" element={<UserSavedLecturePage />}></Route>
        <Route path="/user/learning" element={<UserLearningPage />}></Route>
        <Route
          path="/user/complete"
          element={<UserCompleteLecturePage />}
        ></Route>
        <Route path="/user/edit" element={<UserEditProfilePage />}></Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
