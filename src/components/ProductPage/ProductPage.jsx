import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import './ProductPage.css';
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'
const endpointUserImage= 'http://127.0.0.1:8000/uploads/users/'
const endpointModelImage= 'http://127.0.0.1:8000/uploads/imagemodels/'
const endpointDownload= 'http://127.0.0.1:8000/uploads/filesmodels/'

const ProductPage = () => {

    let parametros = useParams();

    const [loggedUserJSON, setloggedUserJSON] = useState(null);
    const [modelo, setModelo] = useState('');
    const [likes, setLikes] = useState('');
    const [like, setLike] = useState('');
    const [archivo, setArchivo] = useState('');
    
    
    let producto = (parseInt(parametros.id));

    useEffect (()=>{
      setloggedUserJSON(localStorage.getItem('loggedUser'));

      //Devuelve la informacion del modelo
    const getInfo = async () =>{
      const response = await axios.get(`${endpoint}/infomodelo/${producto}`);
      setModelo(response.data[0]);
      setLikes(response.data[0].likes)
      setArchivo(response.data[0].archivo)
    }
    //Ver si el usuario ha dado megusta
    const vermegusta = async () =>{
      try {
        let result = await axios.get(`${endpoint}/verlike/${producto}`,{ headers: { Authorization: 'Bearer '+JSON.parse(localStorage.getItem('token')) }}
        );
        console.log(result);
        if(result.data===1){
          setLike("activo")
        }else{
          setLike("inactivo")
        }
        
      } catch (error) {
        console.error(error.response.data);     
      }

    }

      getInfo();
      vermegusta();
    }, [])

    const megusta = async () =>{
      try {
        let result = await axios.get(          
          `${endpoint}/like/${modelo.id}`,
          { headers: { Authorization: 'Bearer '+JSON.parse(localStorage.getItem('token')) }});
        console.log(result);
        if(like==='activo'){
            setLikes(likes-1)
            setLike("inactivo")
        }else{
          setLikes(likes+1)
          setLike("activo")
        }
        // setLikes(likes+1);
      } catch (error) {
        console.error(error.response.data);     
      }

    }

    const printButtons= () =>{
      console.log(like)
      if(loggedUserJSON){
          return(
          <>
                  <button className='btn-like' onClick={() => megusta()}><BsHeartFill className={like}/> Megusta</button>
              </>
          )
      }else{
          return(
              <>
                  <Link to="/login" className='btn-like'><BsHeartFill className={like}/> Megusta</Link>
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
          <img src={endpointModelImage+modelo.imagen} className='img-fluid' alt="producto" />
        </div>
        <div className='productPage-info'>
          <div className='productPage-info__buttons'>

          <a href={endpointDownload+archivo} className="link-descarga" target="_blank" rel="noopener noreferrer" download>
            <button className='btn-descargar'>Descargar</button>
            </a>

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
              <Link to={'/paginaUsuario/'+modelo.id_creador}><img src={endpointUserImage+modelo.avatar} className='img-fluid productPage-autor__img' alt="usuario" /></Link>
            <Link to={'/paginaUsuario/'+modelo.id_creador} className='productPage-autor__name'>{modelo.nombre_user}</Link>
            </section>
          </div>
        </div>
    </div>
  )
}

export default ProductPage