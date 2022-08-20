import React, { useEffect, useState } from 'react'
import './ProductsUserPage.css'
import { useParams } from 'react-router-dom';
import usuarioimg from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'

const ProductsUserPage = () => {
  let parametros = useParams();
  let usuario = (parseInt(parametros.id));

  const [modelos, setModelos] = useState([]);
  const [user, setUser] = useState([]);

    useEffect (()=>{
  
      //Devuelve la informacion del modelo
      const getModelos = async () =>{
        const response = await axios.get(`${endpoint}/todosultimosmodelos/${usuario}`);
        setModelos(response.data);
      }

      const getUser = async () =>{
        const response = await axios.get(`${endpoint}/usuario/${usuario}`);
        setUser(response.data);
      }

      getModelos();
      getUser();
    }, [])

  return (
    <div className='productsUserPage'>
        <h1 className='productsUserPage__title'>Todos los modelos de Usuario: {user.nombre}</h1>
        <section className='productsUserPage__cards'>
               {modelos.map((modelo) => {
                  let precio = 0;
                  (modelo.precio > 0 ? precio=`${modelo.precio} €` : precio="Gratis");

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={product} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={usuarioimg} id_creador={modelo.id_creador} author={modelo.nombre_user}/> 
                })}
        </section>
    </div>
    // Falta paginacion
  )
}

export default ProductsUserPage