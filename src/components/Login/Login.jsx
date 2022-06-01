import React from 'react'
import './Login.css'

import {FiMail} from 'react-icons/fi';
import {FiLock} from 'react-icons/fi';
import {FiEyeOff} from 'react-icons/fi';

const Login = () => {
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
            <input type="password" name="password" id="password" placeholder='Password' required/>
            <FiLock className='field__icon' size={20} />
            <FiEyeOff className='field__icon-eye' size={20}/>
          </div>

          <div className="checkbox-text">
            <div className="checkbox-content">
              <input type="checkbox" id="logCheck"/>
              <label for="logCheck" className='text'>Remember me</label>
            </div>
            <a href="#" className='text'>Forgot password?</a>
          </div>

          <div className='input__field'>
            <input type="button" className='btn btn-light' value="Login Now" required/>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login