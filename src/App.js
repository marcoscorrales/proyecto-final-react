import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Comisiones from "./routes/Comisiones";
import InicioSesion from "./routes/InicioSesion.jsx";
import Registro from "./routes/Registro.jsx";
import Contacto from "./routes/Contacto.jsx";
import Terminos from "./routes/Terminos.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comisiones" element={<Comisiones/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/login" element={<InicioSesion/>}/>
        <Route path="/register" element={<Registro/>}/>
        <Route path="/terminos" element={<Terminos/>}/>
      </Routes>
    </>
  );
}

export default App;