import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";





function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
