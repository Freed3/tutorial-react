import React from "react";
import { useLocation } from "react-router-dom";

function Perfil() {
  const location = useLocation();
  const { nombre, correo, direccion, edad } = location.state || {};

  return (
    <div>
      <h2>Datos ingresados:</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Correo:</strong> {correo}</p>
      <p><strong>Dirección:</strong> {direccion}</p>
      <p><strong>Edad:</strong> {edad}</p>
    </div>
  );
}

export default Perfil;
