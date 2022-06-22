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
        <h1 className='category__title'>Categoria</h1>
            <div className='category__cards'>

              <nav className="category__cards__nav">
                <span className='orderby__text'>Ordenar por:</span>
                <a className="">Descargas 
                <span className="">↓</span></a>
                <a className="" >Fecha</a>
                <a className="">Me gusta</a>
              </nav>
          
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