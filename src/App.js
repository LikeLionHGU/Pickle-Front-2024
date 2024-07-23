import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./pages/MainPage.jsx";
import Map from "./components/MapCon.jsx";
import ScrollToTop from "./components/Common/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
