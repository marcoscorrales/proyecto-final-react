import React from 'react'
import { useState } from 'react';
import './Register.css'

import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import {FiEyeOff} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Register = () => {
    //Toggle para mostrar contraseña 

    const [passwordShown, setpasswordShown] = useState(false);
    const togglePassword = () =>{
      setpasswordShown(!passwordShown);
    }

  return (
    <div className='register'>
      <div className='container'>
        <h1>Registro</h1>
        <form className='form' action="#">

          <div className='input__field'>
            <input type="text" name="name" id="name" placeholder="Nombre" required/>
            <FiUser className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="text" name="email" id="email" placeholder="Email" required/>
            <FiMail className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='Contraseña' required/>
            <FiLock className='field__icon' size={20} />
            <FiEyeOff onClick={togglePassword} className='field__icon-eye' size={20}/>
          </div>

          <div className='input__field'>
            <input type="password" name="password2" id="password2" placeholder='Confirmar Contraseña' required/>
            <FiLock className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="button" className='btn-register' value="Crear Cuenta" required/>
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