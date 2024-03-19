import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SelectionPage from "../pages/Selection/SelectionPage";
import EnglishForm from "../pages/forms/English/EnglishForm";
import MathsForm from "../pages/forms/Maths/MathsForm";
import ScienceForm from "../pages/forms/Science/ScienceForm";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectionPage /> }/>
        <Route path="/EnglishQuiz" element={<EnglishForm /> }/>
        <Route path="/MathsQuiz" element={<MathsForm /> }/>
        <Route path="/ScienceQuiz" element={<ScienceForm /> }/>
      </Routes>
    </BrowserRouter>
  );
}
