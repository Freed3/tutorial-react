import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [edad, setEdad] = useState("");

  const navigate = useNavigate();

  const validarFormulario = () => {
    // Nombre: solo letras y espacios
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombre || !regexNombre.test(nombre)) {
      alert("Nombre inválido. Solo letras y sin símbolos o números.");
      return false;
    }

    // Correo: formato básico válido
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo || !regexCorreo.test(correo)) {
      alert("Correo inválido.");
      return false;
    }

    // Dirección: letras, números, espacios, puntos, comas, guiones, numeral
    const regexDireccion = /^[A-Za-z0-9\s,.\-#]+$/;
    if (!direccion || !regexDireccion.test(direccion)) {
      alert("Dirección inválida.");
      return false;
    }

    // Edad: número entre 0 y 120
    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum < 0 || edadNum > 120) {
      alert("Edad inválida. Debe ser entre 0 y 120.");
      return false;
    }

    return true;
  };

  const handleEnviar = (e) => {
    e.preventDefault(); // ⛔ evita recargar la página

    if (validarFormulario()) {
      navigate("/perfil", {
        state: { nombre, correo, direccion, edad }
      });
    }
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleEnviar}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br />

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        /><br />

        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        /><br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
