import React from "react";
import MainPageLayout from "./components/layout/MainPageLayout";
import { Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />} />
    </Routes>
  );
};

export default App;
