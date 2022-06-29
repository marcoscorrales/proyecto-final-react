import React from 'react'

import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import LikesUserPage from '../components/LikesUserPage/LikesUserPage.jsx'

const PaginaLikesUsuario = () => {
  return (
    <div>
        <Navbar/>
        <LikesUserPage/>
        <Footer/>
    </div>
  )
}

export default PaginaLikesUsuario