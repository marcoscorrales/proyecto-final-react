import React from 'react'

import './Contact.css'

import {FiMail} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='container2'>
        <h1>Contacto</h1>
        <form className='form' action="#">

          <div className='input__field'>
            <input type="text" name="name" id="name" placeholder="Nombre" required/>
            <FiUser className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="text" name="email" id="email" placeholder="Email" required/>
            <FiMail className='field__icon' size={20} />
          </div>

          <div className='input__textarea'>
            <textarea placeholder='Mensaje'></textarea>
          </div>

          <div className='input__field'>
            <input type="button" className='btn-contact' value="Enviar" required/>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact