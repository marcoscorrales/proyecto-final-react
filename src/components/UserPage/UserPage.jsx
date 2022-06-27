import React from 'react'
import './UserPage.css'
import { useParams } from 'react-router-dom';
import usuarioimg from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'
import ProductCard from '../ProductCard/ProductCard'

const UserPage = () => {
    let parametros = useParams();
    let usuario = (parseInt(parametros.id));
    
    const elements = ['Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales', 'Marcos Corrales'];
    const id = 1;
 return (
    <div className='userPage'>
        <h1 className='userPage__title'>Usuario: {usuario}</h1>
        <div className='userPage-image'>
          <img src={usuarioimg} className='img-fluid' alt="usuario" />
        </div>

        <div className='userPage-modelos'>
        <h2 className='userPage-modelos__title'>Ultimos modelos de {usuario}</h2>
            <div className='userPage-modelos__cards'>
        
                {elements.map((value, index) => {
                    return <ProductCard key={index} id={id} imgProduct={product} title={"Producto"+index} price={"100€"} likes="100" imgAuthor={usuarioimg} author={value}/> 
                })}

            </div>

        </div>

        <div className='userPage-likes'>
        <h2 className='userPage-likes__title'>Ultimos likes de {usuario}</h2>
            <div className='userPage-likes__cards'>
        
                {elements.map((value, index) => {
                    return <ProductCard key={index} id={id} imgProduct={product} title={"Producto"+index} price={"100€"} likes="100" imgAuthor={usuarioimg} author={value}/> 
                })}

            </div>

        </div>

    </div>
  )
}

export default UserPage