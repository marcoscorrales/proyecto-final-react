import React from 'react'

import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import UserEditPage from '../components/UserEditPage/UserEditPage.jsx'


const PaginaEditarUsuario = () => {
  return (
    <div>
        <Navbar/>
        <UserEditPage/>
        <Footer/>
    </div>
  )
}

export default PaginaEditarUsuario