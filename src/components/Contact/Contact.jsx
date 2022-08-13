import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

import {FiMail} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vzrk7a', 'template_bh7s10e', form.current, 'zrsqD7fEJCy5oEnfO')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
  };
  return (
    <div className='contact'>
      <div className='container2'>
        <h1>Contacto</h1>
        <form ref={form} onSubmit={sendEmail}>

          <div className='input__field'>
            <input type="text" name="name" id="name" placeholder="Nombre" required/>
            <FiUser className='field__icon' size={20} />
          </div>

          <div className='input__field'>
            <input type="text" name="email" id="email" placeholder="Email" required/>
            <FiMail className='field__icon' size={20} />
          </div>

          <div className='input__textarea'>
            <textarea name='mensaje' placeholder='Mensaje'></textarea>
          </div>

          <div className='input__field'>
            <input type="submit" className='btn-contact' value="Enviar" required/>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact