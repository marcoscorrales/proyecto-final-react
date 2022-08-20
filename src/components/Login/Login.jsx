import React from 'react'
import { useState } from 'react';
import './Login.css'

import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import {FiEyeOff} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../services/services';;

const endpoint= 'http://127.0.0.1:8000/api/login'

const Login = () => {
  //Variables para login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //Toggle para mostrar contraseña 

  const [passwordShown, setpasswordShown] = useState(false);
  const togglePassword = () =>{
    setpasswordShown(!passwordShown);
  }

  // Funcion para login ususario 
  const login = async (e) => {
    e.preventDefault();

    try{
      const { data } = await axios.post(endpoint,{email : email, password : password});
      console.log(data)
      const user = data.user;

      //Añade los datos al local storage
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      window.localStorage.setItem(
        'token', JSON.stringify(data.accessToken)      
      )
      
      //Añade token a las llamadas que lo necesitan
      setToken(data.accessToken);
      setEmail('');
      setPassword('');
      navigate('/');
    }catch(e){
      alert('Wrong credentials')
    }
    
  }

  return (
    <div className='login'>
      <div className='container'>
        <h1>Login</h1>
        <form className='form' onSubmit={login}>

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
            <input type="submit" className='btn-login' value="Acceder" required/>
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