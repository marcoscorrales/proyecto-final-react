import React from 'react'
import './ProductsUserPage.css'
import { useParams } from 'react-router-dom';
import usuarioimg from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'
import ProductCard from '../ProductCard/ProductCard';

const ProductsUserPage = () => {
  let parametros = useParams();
  let usuario = (parseInt(parametros.id));

  const elements = ['Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales',
                    'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales',
                    'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales'];
  const id = 1;

  return (
    <div className='productsUserPage'>
        <h1 className='productsUserPage__title'>Todos los modelos de Usuario: {usuario}</h1>
        <section className='productsUserPage__cards'>
                {elements.map((value, index) => {
                    return <ProductCard key={index} id={id} imgProduct={product} title={"Producto"+index} price={"100€"} likes="100" imgAuthor={usuarioimg} author={value}/> 
                })}
        </section>
    </div>
    // Falta paginacion
  )
}

export default ProductsUserPage