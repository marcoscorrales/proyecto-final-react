import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Comisiones from "./routes/Comisiones";
import InicioSesion from "./routes/InicioSesion.jsx";
import Registro from "./routes/Registro.jsx";
import Contacto from "./routes/Contacto.jsx";
import Terminos from "./routes/Terminos.jsx";
import Categorias from "./routes/Categorias.jsx";
import Categoria from "./routes/Categoria.jsx";
import PaginaProducto from "./routes/PaginaProducto.jsx";
import PaginaUsuario from "./routes/PaginaUsuario.jsx";
import PaginaProductosUsuario from "./routes/PaginaProductosUsuario.jsx";
import PaginaLikesUsuario from "./routes/PaginaLikesUsuario.jsx";
import PaginaEditarUsuario from "./routes/PaginaEditarUsuario.jsx";
import SubirProducto from "./routes/SubirProducto.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comisiones" element={<Comisiones/>}/>
        <Route path="/categorias" element={<Categorias/>}/>
        <Route path="/categoria" element={<Categoria/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/login" element={<InicioSesion/>}/>
        <Route path="/register" element={<Registro/>}/>
        <Route path="/subirProducto" element={<SubirProducto/>}/>
        <Route path='/paginaProducto/:id' element={<PaginaProducto/>}/> 
        <Route path='/paginaUsuario/:id' element={<PaginaUsuario/>}/> 
        <Route path='/paginaUsuario/editar' element={<PaginaEditarUsuario/>}/> 
        <Route path='/paginaProductosUsuario/:id' element={<PaginaProductosUsuario/>}/> 
        <Route path='/paginaLikesUsuario/:id' element={<PaginaLikesUsuario/>}/> 
        <Route path="/terminos" element={<Terminos/>}/>
      </Routes>
    </>
  );
}

export default App;