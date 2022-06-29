import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Category.css'
import usuario from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'

const Category = () => {
  const elements = ['Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales','Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales'];
  const id = 1;
  return (
    <div className='category'>
      <div className='category__header'>
         <h1 className='category__title'>Categoria</h1>
        <nav className="category__nav">
                <span>Ordenar por:</span>
                <a className="category__nav__text">Descargas 
                <span className="category__nav__text">↓</span></a>
                <a className="category__nav__text" >Fecha</a>
                <a className="category__nav__text">Me gusta</a>
          </nav>
      </div>
       
            <div className='category__cards'>
                <div className='category__container'>
                {elements.map((value, index) => {
                  return <ProductCard key={index} id={id} imgProduct={product} title={"Producto"+index} price={"100€"} likes="100" imgAuthor={usuario} author={value}/> 
                })}
                </div>
            </div>
    </div>
  )
}

export default Category