import React, { useEffect, useState } from 'react'
import './DeleteProductPage.css'
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'
const endpointModelImage= 'http://127.0.0.1:8000/uploads/imagemodels/'

const DeleteProductPage = () => {
  let usuario = (JSON.parse(localStorage.getItem('loggedUser')).id);

  const [modelos, setModelos] = useState([]);

  const eliminar = async (id) =>{
    const response = await axios.delete(`${endpoint}/modelo/${id}`,{ headers: { Authorization: 'Bearer '+JSON.parse(localStorage.getItem('token')) }});
    alert("Has eliminado el modelo")
    window.location.reload();
  }

    useEffect (()=>{
  
      //Devuelve la informacion del modelo
      const getModelos = async () =>{
        const response = await axios.get(`${endpoint}/todosultimosmodelos/${usuario}`);
        setModelos(response.data);
      }
      getModelos();
      
    }, [])

  return (
    <div className='productsUserPage'>
        <h1 className='productsUserPage__title'>Modelos</h1>
        <section className='productsUserPage__cards'>
               {modelos.map((modelo) => {

                  return  <div key={modelo.id} className='productCard'>
                  <div className='productCard-img'>
            
                       <img src={endpointModelImage+modelo.imagen} className='productCard-img__img' alt="producto" />
    
                  </div>
                  <div className="productCard-content2">
                      <h3 className='productCard__title'>
                        {modelo.nombre}
                        </h3>
                        <button type="button" class="btn" onClick={() => eliminar(modelo.id)} >Eliminar</button>
                  </div>
                 
              </div>
                })}
        </section>
    </div>
    // Falta paginacion
  )
}

export default DeleteProductPage