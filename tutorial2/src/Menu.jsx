// src/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Importar los estilos

function Menu() {
  return (
    <header className="menu">
      <nav className="nav">
        <h2 className="logo">Mi App</h2>
        <ul className="nav-links">
          <li><Link to="/">Formulario</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
