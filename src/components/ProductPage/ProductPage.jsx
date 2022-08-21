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

    const [loggedUserJSON, setloggedUserJSON] = useState(null);
    const [modelo, setModelo] = useState([]);
    const [likes, setLikes] = useState([]);
    
    let producto = (parseInt(parametros.id));

    useEffect (()=>{
      setloggedUserJSON(localStorage.getItem('loggedUser'));

      //Devuelve la informacion del modelo
    const getInfo = async () =>{
      const response = await axios.get(`${endpoint}/infomodelo/${producto}`);
      setModelo(response.data[0]);
      setLikes(response.data[0].likes)
    }

      getInfo();
    }, [])

    const megusta = async () =>{
      try {
        let result = await axios.post(          
          `${endpoint}/megusta/`,         
          {                                     
            cod_usuario : JSON.parse(localStorage.getItem('loggedUser')).id, 
            id_modelo : modelo.id
          }
        );
        console.log(result);
        setLikes(likes+1);
      } catch (error) {
        console.error(error.response.data);     
      }

    }
  
    const quitarMegusta = async () =>{
      const response = await axios.delete(`${endpoint}/megusta/${JSON.parse(localStorage.getItem('loggedUser')).id}/${modelo.id}`);
      console.log(response);
    }

    const printButtons= () =>{
      if(loggedUserJSON){
          return(
          <>
                  <button className='btn-like' onClick={() => megusta()}><BsHeartFill/> Megusta</button>
              </>
          )
      }else{
          return(
              <>
                  <Link to="/login" className='btn-like'><BsHeartFill/> Megusta</Link>
              </>
          )
      }
  }

  return (
    <div className='productPage'>
        <h1 className='productPage__title'>
            Producto : {modelo.nombre}
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
            {printButtons()}
            <span className='cifra-likes'><BsHeartFill/> {likes}</span>
          </div>
          <div className='productPage-descripcion'>
            <h3 className='productPage-descripcion__title'>Descripción del modelo</h3>
            <p>{modelo.descripcion}</p>
          </div>
          <div className='productPage-categorias'>
            <h3 className='productPage-categorias__title'>Categoria</h3>
            <section className='productPage-categorias__container'><Link className='productPage-categorias__link' to={'/categoria/'+modelo.categoria}>{modelo.categoria}</Link>
            </section>
          </div>
          <div className='productPage-autor'>
            <h3 className='productPage-autor__title'>Autor</h3>
            <section className='productPage-autor__container'>
              <Link to={'/paginaUsuario/'+modelo.id_creador}><img src={usuarioimg} className='img-fluid productPage-autor__img' alt="usuario" /></Link>
            <Link to={'/paginaUsuario/'+modelo.id_creador} className='productPage-autor__name'>{modelo.nombre_user}</Link>
            </section>
          </div>
        </div>
    </div>
  )
}

export default ProductPage