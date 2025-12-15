import React from "react";
import MainPageLayout from "./components/layout/MainPageLayout";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/pages/ProtectedRoute";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (

  <Routes>
    <Route path="/" element={<Login />} />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <MainPageLayout />
        </ProtectedRoute>
      }
    />
  </Routes>

  );
};

export default App;
