import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import './ProductPage.css';
import product from '../../assets/images/sponsor1.jpg'
import usuarioimg from '../../assets/images/usuario.png'
import {BsHeartFill} from 'react-icons/bs'
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'

const ProductPage = () => {
    let parametros = useParams();
   
    let producto = (parseInt(parametros.id));

    const [modelo, setModelo] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [megustas, setMegustas] = useState([]);

    //Devuelve la informacion del modelo
    const getInfo = async () =>{ 
  axios.get(`${endpoint}/modelo/${producto}`)
  .then(response => {
    setModelo(response.data);
    return axios.get(`${endpoint}/usuario/${response.data.id_creador}`);
  })
  .then(response => {
    setUsuario(response.data);
    return axios.get(`${endpoint}/numeromegustas/${producto}`);
  })
  .then(response => {
    setMegustas(response.data);
  }).catch(error => console.log(error.response));
}

    useEffect (()=>{
      getInfo();
    }, [])

  return (
    <div className='productPage'>
        <h1 className='productPage__title'>
            Producto id:{producto}
        </h1>
        <div className='productPage-image'>
          <img src={product} className='img-fluid' alt="producto" />
        </div>
        <div className='productPage-info'>
          <div className='productPage-info__buttons'>
            <button className='btn-descargar'>Descargar</button>
            <span className='precio-descarga'>{modelo.precio > 0 ? modelo.precio +"€" : "Gratis"}</span>
          </div>
          <div className='productPage-info__likes'>
            <button className='btn-like'><BsHeartFill/> Me gusta</button>
            <span className='cifra-likes'><BsHeartFill/> {megustas}</span>
          </div>
          <div className='productPage-descripcion'>
            <h3 className='productPage-descripcion__title'>Descripción del modelo</h3>
            <p>{modelo.descripcion}</p>
          </div>
          <div className='productPage-categorias'>
            <h3 className='productPage-categorias__title'>Categoria</h3>
            <section className='productPage-categorias__container'><Link className='productPage-categorias__link' to='/categoria/'>{modelo.categoria}</Link>
            </section>
          </div>
          <div className='productPage-autor'>
            <h3 className='productPage-autor__title'>Autor</h3>
            <section className='productPage-autor__container'>
              <Link to={'/paginaUsuario/'+usuario.id}><img src={usuarioimg} className='img-fluid productPage-autor__img' alt="usuario" /></Link>
            <Link to='/paginaUsuario/1' className='productPage-autor__name'>{usuario.nombre}</Link>
            </section>
          </div>
        </div>
    </div>
  )
}

export default ProductPage