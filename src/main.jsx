import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import projectData from "./projectData.js";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {projectData.map((data) => (
        <Route key={data.name} path={data.path} element={<data.elem/>}/>
      ))}
    </Routes>
  </BrowserRouter>
</StrictMode>
);
