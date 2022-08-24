import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Category.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const endpoint= 'http://127.0.0.1:8000/api'
const endpointUserImage= 'http://127.0.0.1:8000/uploads/users/'
const endpointModelImage= 'http://127.0.0.1:8000/uploads/imagemodels/'

const Category = () => {
  let parametros = useParams();

  const [modelos, setModelos] = useState([]);

  let categoria = (parametros.nombre);

    useEffect (()=>{
  
      //Devuelve la informacion del modelo
      const getModelos = async () =>{
        const response = await axios.get(`${endpoint}/categoria/${categoria}`);
        setModelos(response.data);
      }

      getModelos();
    }, [])

  return (
    <div className='category'>
      <div className='category__header'>
         <h1 className='category__title'>Categoria: {categoria}</h1>
      </div>
       
            <div className='category__cards'>
                <div className='category__container'>
                {modelos.map((modelo) => {
                  let precio = 0;
                  (modelo.precio > 0 ? precio=`${modelo.precio} €` : precio="Gratis");

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={endpointModelImage+modelo.imagen} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={endpointUserImage+modelo.avatar} id_creador={modelo.id_creador} author={modelo.nombre_user}/> 
                })}
                </div>
            </div>
    </div>
  )
}

export default Category