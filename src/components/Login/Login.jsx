import React from 'react'
import { useState } from 'react';
import './Login.css'

import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import {FiEyeOff} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Login = () => {
  //Toggle para mostrar contraseña 

  const [passwordShown, setpasswordShown] = useState(false);
  const togglePassword = () =>{
    setpasswordShown(!passwordShown);
  }

  return (
    <div className='login'>
      <div className='container'>
        <h1>Login</h1>
        <form className='form' action="#">

          <div className='input__field'>
            <input type="text" name="email" id="email" placeholder="Email" required/>
            <FiMail className='field__icon' size={20} />
          </div>
          <div className='input__field'>
            <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='Contraseña' required/>
            <FiLock className='field__icon' size={20} />
            <FiEyeOff onClick={togglePassword} className='field__icon-eye' size={20}/>
          </div>

          <div className="checkbox-text">
            <div className="checkbox-content">
              <input type="checkbox" id="logCheck"/>
              <label htmlFor="logCheck" className='text'>Recordar nombre</label>
            </div>
            <a href="#" className='text'>Olvidó la contraseña?</a>
          </div>

          <div className='input__field'>
            <input type="button" className='btn-login' value="Acceder" required/>
          </div>

          <div className='login__signup'>
            <span className="text">No tienes cuenta?
              <Link to='/register' className='text signup__text'>Registro</Link>
            </span>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login