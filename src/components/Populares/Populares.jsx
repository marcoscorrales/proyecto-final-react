import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './Populares.css'
import {BsHeartFill} from 'react-icons/bs'
import product from '../../assets/images/sponsor1.jpg'
import usuario from '../../assets/images/usuario.png'
import ProductCard from '../ProductCard/ProductCard'

const endpoint= 'http://127.0.0.1:8000/api'

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
          imgProduct={product} 
          title={popular.nombre} 
          price={precio} 
          likes={popular.likes} 
          imgAuthor={usuario} 
          id_creador={popular.id_creador}
          author={popular.nombre_user}
          /> 
        })}
    </div>

    </section>
  )
}

export default Populares