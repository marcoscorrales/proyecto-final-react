import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import PaginaEliminarProductos from "./routes/PaginaEliminarProductos.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comisiones" element={<Comisiones/>}/>
        <Route path="/categorias" element={<Categorias/>}/>
        <Route path="/categoria/:nombre" element={<Categoria/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path='/paginaProducto/:id' element={<PaginaProducto/>}/> 
        <Route path='/paginaUsuario/:id' element={<PaginaUsuario/>} exact/> 
        <Route path='/paginaProductosUsuario/:id' element={<PaginaProductosUsuario/>}/> 
        <Route path='/paginaLikesUsuario/:id' element={<PaginaLikesUsuario/>}/> 
        <Route path="/terminos" element={<Terminos/>}/>
        {/* Rutas protegidas */}

        <Route path="/login" element={localStorage.getItem('loggedUser') ? <Navigate to="/" replace /> : <InicioSesion /> } />
        <Route path="/register" element={localStorage.getItem('loggedUser') ? <Navigate to="/" replace /> : <Registro /> } />
        
        <Route path='/paginaUsuario/editar' element={localStorage.getItem('loggedUser') ? <PaginaEditarUsuario/> : <Navigate to="/" replace />} />

        <Route path='/paginaEliminarProductos' element={localStorage.getItem('loggedUser') ? <PaginaEliminarProductos/> : <Navigate to="/" replace />} />

        <Route path="/subirProducto" element={localStorage.getItem('loggedUser') ? <SubirProducto /> : <Navigate to="/" replace />}/>
        </Routes>
    </>
  );
}

export default App;