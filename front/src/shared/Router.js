import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import UserProfile from "../components/Profile/UserProfile";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import { authActions } from "../redux/modules/authContext";

const Router = () => {
  const dispatch = useDispatch();

  const initializeUserInfo = () => {
    const loggedInfo = localStorage.getItem("token");
    if (!loggedInfo) return;

    dispatch(authActions.login(loggedInfo));
  };

  useEffect(initializeUserInfo, []);

  const isLoggedIn = useSelector((state) => state.authContext.isLoggedIn);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
          <Route
            path="/profile"
            element={
              <>
                {isLoggedIn && <UserProfile />}
                {!isLoggedIn && <Navigate to="/auth" replace />}
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
