import React from 'react'
import ProductPage from '../components/ProductPage/ProductPage.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

const PaginaProducto = () => {

  return (
    <div>
        <Navbar/>
        <ProductPage />
        <Footer/>
    </div>
  )
}

export default PaginaProducto