import React from 'react'
import './LikesUserPage.css'
import { useParams } from 'react-router-dom';
import usuarioimg from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'
import ProductCard from '../ProductCard/ProductCard';

const LikesUserPage = () => {
  let parametros = useParams();
  let usuario = (parseInt(parametros.id));

  const elements = ['Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales',
                    'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales',
                    'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales'];
  const id = 1;

  return (
    <div className='likesUserPage'>
    <h1 className='likesUserPage__title'>Todos los likes del Usuario: {usuario}</h1>
    <section className='likesUserPage__cards'>
            {elements.map((value, index) => {
                return <ProductCard key={index} id={id} imgProduct={product} title={"Producto"+index} price={"100€"} likes="100" imgAuthor={usuarioimg} author={value}/> 
            })}
    </section>
</div>
// Falta paginacion
  )
}

export default LikesUserPage