import React from 'react'
import { useState } from 'react';
import './UserEditPage.css'

import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import {FiEyeOff} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import {FiImage} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const UserEditPage = () => {
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
        <form className='form' action="#">

          <div className='input__field'>
            <input type="text" name="name" id="name" placeholder="Nombre" />
            <FiUser className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="text" name="email" id="email" placeholder="Email" />
            <FiMail className='field__icon' size={20} />
          </div>

          <div className='input__field__avatar'>
            <input type="file" name="avatar" id="avatar" placeholder="Avatar"  />
            <FiImage className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="button" className='btn-UserEditPage' value="Guardar" />
          </div>

        </form>

        <h2>Cambiar contraseña</h2>

        <form className='form' action="#">

          <div className='input__field'>
            <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='Nueva Contraseña' required />
            <FiLock className='field__icon' size={20} />
            <FiEyeOff onClick={togglePassword} className='field__icon-eye' size={20}/>
          </div>

          <div className='input__field'>
            <input type="password" name="password2" id="password2" placeholder='Confirmar Nueva Contraseña' required />
            <FiLock className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="button" className='btn-UserEditPage' value="Cambiar" />
          </div>

        </form>
      </div>
    </div>
  )
}

export default UserEditPage