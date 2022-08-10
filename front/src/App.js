//패키지
import "./App.css";
import { Routes, Route } from "react-router-dom";
//CSS
import GlobalStyle from "./elems/GlobalStyle";
//컴포넌트
import Header from "./elems/Header";
import Login from "./route/Login";
import SignUp from "./route/SignUp";

import LoadingPage from "./elems/LoadingPage";
import { useSelector } from "react-redux";

function App() {
  const loginLoading = useSelector((state) => state.login.loading);

  return (
    <div className="App">
      <Header />
      <GlobalStyle />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
