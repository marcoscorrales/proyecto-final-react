import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import DeleteProductPage from '../components/DeleteProductPage/DeleteProductPage.jsx'

const PaginaEliminarProductos = () => {
  return (
    <div>
        <Navbar/>
        <DeleteProductPage/>
        <Footer/>
    </div>
  )
}

export default PaginaEliminarProductos