import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import Homepage from "./Components/Home/Homepage";
import "./App.css";
import SginupPage from "./Components/Login/SignupPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SginupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
