import React from 'react'

import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import ProductsUserPage from '../components/ProductsUserPage/ProductsUserPage.jsx'

const PaginaProductosUsuario = () => {
  return (
    <div>
        <Navbar/>
        <ProductsUserPage/>
        <Footer/>
    </div>
  )
}

export default PaginaProductosUsuario