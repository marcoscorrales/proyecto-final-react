import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import InicioSesion from "./routes/InicioSesion.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<InicioSesion/>}/>
      </Routes>
    </>
  );
}

export default App;