import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Category.css'
import usuarioimg from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const endpoint= 'http://127.0.0.1:8000/api'

const Category = () => {
  let parametros = useParams();
   
    let categoria = (parametros.nombre);

    const [modelos, setModelos] = useState([]);

    //Devuelve la informacion del modelo
    const getModelos = async () =>{
      const response = await axios.get(`${endpoint}/categoria/${categoria}`);
      setModelos(response.data);
    }

    useEffect (()=>{
      getModelos();
    }, [])

  return (
    <div className='category'>
      <div className='category__header'>
         <h1 className='category__title'>Categoria: {categoria}</h1>
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
                {modelos.map((modelo) => {
                  let precio = 0;
                  (modelo.precio > 0 ? precio=`${modelo.precio} €` : precio="Gratis");

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={product} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={usuarioimg} author={modelo.nombre_user}/> 
                })}
                </div>
            </div>
    </div>
  )
}

export default Category