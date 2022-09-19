import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <div>
                        <p>Avenida Francisco Aguirre, 255</p>
                        <p>Talavera de la Reina, ES.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/> 777-777-777</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/> correo@correo.com</h4>
                </div>
                
            </div>
            <div className='right'>
                <h4>Sobre la compañia</h4>
                <p>"Modelos3d es un mercado que pone en contacto a los diseñadores y a las personas que quieren hacer algunos objetos reales con las tecnologías de impresión 3D.
                Modelos3d es también un espacio de comunidad que reúne a todos los fans del mundo de la impresión 3D para que interactúen entre sí."</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                </div>
                <p >&#169; 2022 Modelos3dWeb, SL. · Marcos Corrales Castro · <Link className='terminos__link' to="/terminos">Terms</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Footer