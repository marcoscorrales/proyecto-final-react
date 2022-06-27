import React from 'react'
import UserPage from '../components/UserPage/UserPage.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

const PaginaUsuario = () => {
  return (
    <div>
        <Navbar/>
        <UserPage/>
        <Footer/>
    </div>
  )
}

export default PaginaUsuario