import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import './Register.css'

import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import {FiEyeOff} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
const endpoint= 'http://127.0.0.1:8000/api/register'

const Register = () => {
    //Variables para el registro
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    // const [avatar, setAvatar] = useState('NULL');
    const navigate = useNavigate();

    //Toggle para mostrar contraseña 
    const [passwordShown, setpasswordShown] = useState(false);
    const togglePassword = () =>{
      setpasswordShown(!passwordShown);
    }

    // Funcion para insertar ususario en la BD 
    const registro = async (e) => {
      e.preventDefault();
      if(password === password2){
        await axios.post(endpoint,{nombre : nombre, email : email, password : password});
      navigate('/');
      }else{
        alert("La contraseña es incorrecta");
      }
      
    }

  return (
    <div className='register'>
      <div className='container'>
        <h1>Registro</h1>
        <form className='form' onSubmit={registro}>
        
          <div className='input__field'>
            <input type="text" name="name" id="name" placeholder="Nombre" required
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            />
            <FiUser className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="text" name="email" id="email" placeholder="Email" required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <FiMail className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='Contraseña' required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <FiLock className='field__icon' size={20} />
            <FiEyeOff onClick={togglePassword} className='field__icon-eye' size={20}/>
          </div>

          <div className='input__field'>
            <input type="password" name="password2" id="password2" placeholder='Confirmar Contraseña' required
            value={password2}
            onChange={(e)=> setPassword2(e.target.value)}
            />
            <FiLock className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type='submit' className='btn-register' value="Crear Cuenta" required/>
          </div>

          <div className='register__signup'>
            <span className="text">Tienes cuenta?
              <Link to='/login' className='text signup__text'>Iniciar sesión</Link>
            </span>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register