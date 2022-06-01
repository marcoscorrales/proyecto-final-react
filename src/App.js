import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import InicioSesion from "./routes/InicioSesion.jsx";
import Registro from "./routes/Registro.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<InicioSesion/>}/>
        <Route path="/register" element={<Registro/>}/>
      </Routes>
    </>
  );
}

export default App;