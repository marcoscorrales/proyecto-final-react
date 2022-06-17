import React from 'react'
import ProductCard from '../Product-Card/ProductCard'
import './Category.css'
import usuario from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'

const Category = () => {
  const elements = ['Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales','Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales'];
  return (
    <div className='category'>
        <h1 className='category__title'>Categoria</h1>
            <div className='category__cards'>

              <nav class="category__cards__nav">
                <span className='orderby__text'>Ordenar por:</span>
                <a class="">Descargas 
                <span class="">↓</span></a>
                <a class="" >Fecha</a>
                <a class="">Me gusta</a>
              </nav>
          
                <div className='category__container'>
                {elements.map((value, index) => {
                  return <ProductCard key={index} imgProduct={product} title={"Producto"+index} price={"100€"} likes="100" imgAuthor={usuario} author={value}/> 
                })}
                </div>
            </div>
    </div>
  )
}

export default Category