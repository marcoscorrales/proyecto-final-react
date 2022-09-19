import React, { useEffect, useState } from 'react'
import './UserPage.css'
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'
import {BsCheck} from 'react-icons/bs'
import axios from 'axios';

const endpoint= 'http://127.0.0.1:8000/api'
const endpointUserImage= 'http://127.0.0.1:8000/uploads/users/'
const endpointModelImage= 'http://127.0.0.1:8000/uploads/imagemodels/'

const UserPage = () => {

  const [loggedUserJSON, setloggedUserJSON] = useState(null);

    useEffect(() =>{
        setloggedUserJSON(sessionStorage.getItem('loggedUser'));
    }, []);
  
    let parametros = useParams();
    let usuario = (parseInt(parametros.id));

  const [userInfo, setUserInfo] = useState([]);
  const [ultimosModelos, setUltimosModelos] = useState([]);
  const [ultimosLikes, setUltimosLikes] = useState([]);
  const [seguidores, setSeguidores] = useState([]);
  const [diseños, setDiseños] = useState([]);
  const [follow, setFollow] = useState('');
  const [mismoid, setMismoid] = useState(false);
  
    useEffect (()=>{
  
      //Devuelve la informacion del usuario
      const getInfoUser = async () =>{
        const response = await axios.get(`${endpoint}/infouser/${usuario}`);
        setUserInfo(response.data[0]);
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
      //Ver si el usuario ha dado seguir
    const verSeguimiento = async () =>{
      try {
        let result = await axios.get(`${endpoint}/verseguimiento/${usuario}`,{ headers: { Authorization: 'Bearer '+JSON.parse(sessionStorage.getItem('token')) }}
        );
        if(result.data===1){
          setFollow("seguido")
        }else{
          setFollow("seguir")
        }

        //Ver si es el mismo usuario
        if(JSON.parse(sessionStorage.getItem('loggedUser')).id === usuario){
          setMismoid(true);
        }

        
      } catch (error) {
        console.error(error.response.data);     
      }

    }

      getInfoUser();
      getUltimosModelos();
      getUltimosLikes();
      getSeguidores();
      getDiseños();
      verSeguimiento();
    }, [])

    const seguir = async () =>{
      try {
        let result = await axios.get(          
          `${endpoint}/follow/${usuario}`,
          { headers: { Authorization: 'Bearer '+JSON.parse(sessionStorage.getItem('token')) }});
        console.log(result);
        if(follow==='seguir'){
            setSeguidores(seguidores+1)
            setFollow("seguido")
        }else{
          setSeguidores(seguidores-1)
          setFollow("seguir")
        }
      } catch (error) {
        console.error(error.response.data);     
      }

    }

    const printButtons= () =>{
      if(loggedUserJSON){
          return(
          <>
                  <button className={mismoid ? 'd-none' : 'button__seguir'} onClick={() => seguir()}><BsCheck size={22} className={follow}/>{follow}</button>
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
          <img src={endpointUserImage+userInfo.avatar} className='img-fluid' alt="usuario" />
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

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={endpointModelImage+modelo.imagen} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={endpointUserImage+modelo.avatar} id_creador={modelo.id_creador} author={modelo.nombre_user}/> 
                })}

            </div>

        </div>

        <div className='userPage-likes'>
        <h2 className='userPage-likes__title'>Ultimos likes de {userInfo.nombre} <Link className='userPage-likes__title__link' to={'/paginaLikesUsuario/'+usuario}>Ver todos los likes</Link></h2>
            <div className='userPage-likes__cards'>
        
            {ultimosLikes.map((modelo) => {
                  let precio = 0;
                  (modelo.precio > 0 ? precio=`${modelo.precio} €` : precio="Gratis");

                  return <ProductCard key={modelo.id} id={modelo.id} imgProduct={endpointModelImage+modelo.imagen} title={modelo.nombre} price={precio} likes={modelo.likes} imgAuthor={endpointUserImage+modelo.avatar} id_creador={modelo.id_creador} author={modelo.nombre_user}/> 
                })}

            </div>

        </div>

    </div>
  )
}

export default UserPage