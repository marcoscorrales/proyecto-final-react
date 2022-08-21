import React, { useEffect, useState } from 'react'
import './UserPage.css'
import { Link, useParams } from 'react-router-dom';
import usuarioimg from '../../assets/images/usuario.png'
import product from '../../assets/images/sponsor1.jpg'
import ProductCard from '../ProductCard/ProductCard'
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'

const UserPage = () => {

  const [loggedUserJSON, setloggedUserJSON] = useState(null);

    useEffect(() =>{
        setloggedUserJSON(localStorage.getItem('loggedUser'));
    }, []);
  
    let parametros = useParams();
    let usuario = (parseInt(parametros.id));

  const [userInfo, setUserInfo] = useState([]);
  const [ultimosModelos, setUltimosModelos] = useState([]);
  const [ultimosLikes, setUltimosLikes] = useState([]);
  const [seguidores, setSeguidores] = useState([]);
  const [diseños, setDiseños] = useState([]);

  const follow = async () =>{
    const response = await axios.post(`${endpoint}/seguimiento`,{ id_user : JSON.parse(localStorage.getItem('loggedUser')).id, id_user_seguido : userInfo.id});
    console.log(response);
  }

  const unFollow = async () =>{
    const response = await axios.delete(`${endpoint}/seguimiento/${JSON.parse(localStorage.getItem('loggedUser')).id}/${userInfo.id}`);
    console.log(response);
  }
  

    useEffect (()=>{
  
      //Devuelve la informacion del usuario
      const getInfoUser = async () =>{
        const response = await axios.get(`${endpoint}/infouser/${usuario}`);
        setUserInfo(response.data[0]);
        console.log(response.data[0])
      }
      const getUltimosModelos = async () =>{
        const response = await axios.get(`${endpoint}/ultimosmodelos/${usuario}`);
        setUltimosModelos(response.data);
      }
      const getUltimosLikes = async () =>{
        const response = await axios.get(`${endpoint}/ultimoslikes/${usuario}`);
        setUltimosLikes(response.data);
      }
      const getSeguidores = async () =>{
        const response = await axios.get(`${endpoint}/numeroseguidores/${usuario}`);
        setSeguidores(response.data);
      }
      const getDiseños = async () =>{
        const response = await axios.get(`${endpoint}/numerodiseños/${usuario}`);
        setDiseños(response.data);
      }

      getInfoUser();
      getUltimosModelos();
      getUltimosLikes();
      getSeguidores();
      getDiseños();
    }, [])

    const printButtons= () =>{
      if(loggedUserJSON){
          return(
          <>
                  <button className='button__seguir' onClick={() => follow()}>Seguir</button>
              </>
          )
      }else{
          return(
              <>
                  <Link to="/login" className='button__seguir'>Seguir</Link>
              </>
          )
      }
  }
 return (
    <div className='userPage'>
        <h1 className='userPage__title'>Usuario: {userInfo.nombre}</h1>
        <div className='userPage-image'>
          <img src="http://127.0.0.1:8000/uploads/users/usuario.png" className='img-fluid' alt="usuario" />
          <div className='userPage-image__info'>
            <span>Diseños: {diseños}</span>
            <span>Seguidores: {seguidores}</span>

            {
              printButtons()
            }
            
          </div>
        </div>

        <div className='userPage-modelos'>
        <h2 className='userPage-modelos__title'>Ultimos modelos de {userInfo.nombre} <Link className='userPage-modelos__title__link' to={'/paginaProductosUsuario/'+usuario}>Ver todos los modelos</Link></h2>
            <div className='userPage-modelos__cards'>
        
            {ultimosModelos.map((modelo) => {
                  let precio = 0;
                  (modelo.precio > 0 ? precio=`${modelo.precio} €` : precio="Gratis");

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={product} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={usuarioimg} id_creador={modelo.id_creador} author={modelo.nombre_user}/> 
                })}

            </div>

        </div>

        <div className='userPage-likes'>
        <h2 className='userPage-likes__title'>Ultimos likes de {userInfo.nombre} <Link className='userPage-likes__title__link' to={'/paginaLikesUsuario/'+usuario}>Ver todos los likes</Link></h2>
            <div className='userPage-likes__cards'>
        
            {ultimosLikes.map((modelo) => {
                  let precio = 0;
                  (modelo.precio > 0 ? precio=`${modelo.precio} €` : precio="Gratis");

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={product} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={usuarioimg} id_creador={modelo.id_creador} author={modelo.nombre_user}/> 
                })}

            </div>

        </div>

    </div>
  )
}

export default UserPage