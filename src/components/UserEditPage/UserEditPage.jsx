import React, { useEffect } from 'react'
import { useState } from 'react';
import './UserEditPage.css'

import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import {FiEyeOff} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import {FiImage} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { changePassword } from '../../services/services';
import axios from 'axios';

const UserEditPage = () => {
  const endpoint= 'http://127.0.0.1:8000/api/usuario/'+JSON.parse(localStorage.getItem('loggedUser')).id;
  const endpoint2= 'http://127.0.0.1:8000/api'
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    useEffect (()=>{
  
      //Devuelve la informacion del usuario
      const getInfoUser = async () =>{
        const response = await axios.get(`${endpoint2}/usuario/${JSON.parse(localStorage.getItem('loggedUser')).id}`);
        setNombre(response.data.nombre)
        setEmail(response.data.email)
        setAvatar(response.data.avatar)
      }

      getInfoUser();
    }, [])

    const handleChange = (file) =>{
      setAvatar(file[0]);
  }
    
  // Funcion para actualizar ususario en la BD 
  const editarUsuario = async (e) => {
    e.preventDefault();
    const fData = new FormData();

    fData.append("_method", "PUT")
    fData.append('nombre', nombre);
    fData.append('email', email);
    fData.append('avatar', avatar);

    axios({
        method: "post",
        url: endpoint,
        data: fData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          alert("Usuario Actualizado")
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

  }

  const resetPassword= (e) =>{
    e.preventDefault();

    changePassword(password,password2)
  }
    

    //Toggle para mostrar contraseña 
    const [passwordShown, setpasswordShown] = useState(false);
    const togglePassword = () =>{
      setpasswordShown(!passwordShown);
    }

  return (
    <div className='UserEditPage'>
        <Link to='/subirProducto/' className='btn-UserEditPage'>Subir Modelo</Link>
      <div className='container3'>
        <h1>Editar perfil</h1>
        <form className='form' onSubmit={editarUsuario}>

          <div className='input__field'>
            <input type="text" name="name" id="name" placeholder="Nombre"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
             />
            <FiUser className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="text" name="email" id="email" placeholder="Email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />
            <FiMail className='field__icon' size={20} />
          </div>

          <div className='input__field__avatar'>
            <input type="file" name="avatar" id="avatar" placeholder="Avatar" onChange={e => handleChange(e.target.files)}/>
            <FiImage className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="submit" className='btn-UserEditPage' value="Guardar" />
          </div>

        </form>

        <h2>Cambiar contraseña</h2>

        <form className='form' onSubmit={resetPassword}>

          <div className='input__field'>
            <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='Nueva Contraseña' required value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            <FiLock className='field__icon' size={20} />
            <FiEyeOff onClick={togglePassword} className='field__icon-eye' size={20}/>
          </div>

          <div className='input__field'>
            <input type="password" name="password2" id="password2" placeholder='Confirmar Nueva Contraseña' required value={password2}
            onChange={(e)=> setPassword2(e.target.value)}/>
            <FiLock className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="submit" className='btn-UserEditPage' value="Cambiar" />
          </div>

        </form>
      </div>
    </div>
  )
}

export default UserEditPage