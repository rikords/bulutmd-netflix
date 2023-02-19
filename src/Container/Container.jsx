import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import SubTitle from "../Component/Subtitle/SubTitle";
import "../Css/Container/Container.css";
import "../Css/SubTitle/Subtitle.css";
import HomePage from "../Pages/HomePage/HomePage";

function Container() {
  return (
    <div>
      <Navbar />
      <div className="_container">
        <SubTitle />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Container;
