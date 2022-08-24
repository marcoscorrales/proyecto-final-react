import React, { useEffect, useState } from 'react'
import './LikesUserPage.css'
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'
const endpointUserImage= 'http://127.0.0.1:8000/uploads/users/'
const endpointModelImage= 'http://127.0.0.1:8000/uploads/imagemodels/'

const LikesUserPage = () => {
  let parametros = useParams();
  let usuario = (parseInt(parametros.id));

  const [modelos, setModelos] = useState([]);
  const [user, setUser] = useState([]);

    useEffect (()=>{
  
      //Devuelve la informacion del modelo
      const getModelos = async () =>{
        const response = await axios.get(`${endpoint}/todosultimoslikes/${usuario}`);
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
    <div className='likesUserPage'>
    <h1 className='likesUserPage__title'>Todos los likes del Usuario: {user.nombre}</h1>
    <section className='likesUserPage__cards'>
              {modelos.map((modelo) => {
                  let precio = 0;
                  (modelo.precio > 0 ? precio=`${modelo.precio} €` : precio="Gratis");

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={endpointModelImage+modelo.imagen} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={endpointUserImage+modelo.avatar} id_creador={modelo.id_creador} author={modelo.nombre_user}/> 
                })}
    </section>
</div>
// Falta paginacion
  )
}

export default LikesUserPage