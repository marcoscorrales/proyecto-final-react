import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './Populares.css'
import {BsHeartFill} from 'react-icons/bs'
import ProductCard from '../ProductCard/ProductCard'

const endpoint= 'http://127.0.0.1:8000/api'
const endpointUserImage= 'http://127.0.0.1:8000/uploads/users/'
const endpointModelImage= 'http://127.0.0.1:8000/uploads/imagemodels/'

const Populares = () => {

  const [populares, setPopulares] = useState([]);

    useEffect (()=>{

      //Devuelve los 4 modelos más populares
    const getPopulares = async () =>{
      const response = await axios.get(`${endpoint}/populares`);
      setPopulares(response.data);
    }

      getPopulares();
    }, [])
    
  return (
    <section className='populares'>
        <h2 className='populares__title'>Populares <BsHeartFill size={30}/></h2>

    <div className='populares__imgs'>
        {
        populares.map((popular) => {
          let precio = 0;
          (popular.precio > 0 ? precio=`${popular.precio} €` : precio="Gratis")

          return <ProductCard 
          key={popular.id} 
          id={popular.id} 
          imgProduct={endpointModelImage+popular.imagen} 
          title={popular.nombre} 
          price={precio} 
          likes={popular.likes} 
          imgAuthor={endpointUserImage+popular.avatar} 
          id_creador={popular.id_creador}
          author={popular.nombre_user}
          /> 
        })}
    </div>

    </section>
  )
}

export default Populares