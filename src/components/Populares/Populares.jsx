import React from 'react'
import './Populares.css'
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import product from '../../assets/images/sponsor1.jpg'
import usuario from '../../assets/images/usuario.png'
import { Link } from 'react-router-dom'
import ProductCard from '../Product-Card/ProductCard'

const Populares = () => {
  const elements = ['Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales'];
  return (
    <section className='populares'>
        <h2 className='populares__title'>Populares <BsHeartFill size={30}/></h2>

    <div className='populares__imgs'>
      
        {elements.map((value, index) => {
          return <ProductCard key={index} imgProduct={product} title={"Producto"+index} price={"100€"} likes="100" imgAuthor={usuario} author={value}/> 
        })}
 
    </div>

    </section>
  )
}

export default Populares