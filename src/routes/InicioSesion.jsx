import React from 'react'
import Login from '../components/Login/Login.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

const InicioSesion = () => {

  document.body.style.backgroundColor= "red";

  return (
    <div>
      <Navbar/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default InicioSesion