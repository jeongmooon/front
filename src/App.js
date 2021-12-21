import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./libs/styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import EditPage from "./pages/EditPage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import NavbarContainer from "./containers/common/NavbarContainer";
import AdminSignInPage from "./pages/AdminSignInPage";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import client from "./libs/api/client";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

function App() {
  const navigate = useNavigate();
  const [itemId, setItemId] = useState("");
  const [coktailData, setCoktailData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");

  const [isAdminLogined, setIsAdminLogined] = useState(false);
  const [admin, setAdmin] = useState(null);

  // useEffect(() => {
  //   ToastsStore.success("랜더링 성공!!");
  // }, []);

  // 자동 로그인
  useEffect(() => {
    const token = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null;

    const test = async () => {
      client.defaults.headers["authorization"] = token;
      let result;
      try {
        result = await client.get("/user");
      } catch (error) {
        console.log("토큰로그인에러 >>>>", error);
      }

      const targetUser = result.data.data;
      setAdmin(targetUser);
      setIsAdminLogined(true);
    };

    if (token) {
      test();
      console.log("자동로그인완료");
    }
  }, []);

  useEffect(() => {
    getCoktailData();
  }, []);

  const getCoktailData = async () => {
    const response = await client.get("/coktail");
    setCoktailData(response.data.dataList);
    setLoading(false);
  };

  const randomCoktail = () => {
    const rand = Math.floor(Math.random() * coktailData.length);
    const result = coktailData[rand];
    navigate(`/detail/${result._id}`);
  };
  const onClickItem = (id) => {
    setItemId(id);
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <NavbarContainer />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              loading={loading}
              coktailData={coktailData}
              setItemId={setItemId}
              randomCoktail={randomCoktail}
              onClickItem={onClickItem}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              searchName={searchName}
              setSearchName={setSearchName}
              coktailData={coktailData}
              setItemId={setItemId}
              onClickItem={onClickItem}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <DetailPage itemId={itemId} isAdminLogined={isAdminLogined} />
          }
        />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminsignup" element={<AdminSignUpPage />} />
        <Route
          path="/adminsignin"
          element={
            <AdminSignInPage
              setIsAdminLogined={setIsAdminLogined}
              setAdmin={setAdmin}
            />
          }
        />
      </Routes>
      <ToastsContainer
        position={ToastsContainerPosition.BOTTOM_CENTER}
        store={ToastsStore}
      />
    </>
  );
}

export default App;
