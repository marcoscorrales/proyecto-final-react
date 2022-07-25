import React, {useEffect, useState} from 'react'
import './Populares.css'
import {BsHeartFill} from 'react-icons/bs'
import product from '../../assets/images/sponsor1.jpg'
import usuario from '../../assets/images/usuario.png'
import ProductCard from '../ProductCard/ProductCard'
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'

const Populares = () => {
  const [populares, setPopulares] = useState( [] )

    useEffect (()=>{
      getPopulares();
    }, [])

    const getPopulares = async () =>{
      const response = await axios.get(`${endpoint}/populares`);
      setPopulares(response);
    }
    
  return (
    <section className='populares'>
        <h2 className='populares__title'>Populares <BsHeartFill size={30}/></h2>

    <div className='populares__imgs'>
        {populares.data.map((popular) => {
          let precio = 0;
          (popular.precio > 0 ? precio=`${popular.precio} €` : precio="Gratis")
          return <ProductCard key={popular.cod_modelo} id={popular.cod_modelo} imgProduct={product} title={popular.nombre} price={precio} likes="100" imgAuthor={usuario} author={'usuario:'+popular.id_creador}/> 
        })}
    </div>

    </section>
  )
}

export default Populares