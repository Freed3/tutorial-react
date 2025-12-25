// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Formulario from "./Formulario";
import Perfil from "./Perfil";
import "./App.css";

function App() {
  return (
    <Router>
      <Menu />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

