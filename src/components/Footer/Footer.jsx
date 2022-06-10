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
                        <p>Calle Ejemplo.</p>
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
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda deleniti nihil sint placeat! Facilis aperiam ut, consequatur molestiae minus optio cupiditate doloremque, minima repudiandae soluta vitae dolorum eveniet ducimus!"</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                </div>
                <p className='terminos'>&#169; 2022 Modelos3dWeb, Inc. · Marcos Corrales Castro · <Link className='terminos__link' to="/terminos">Terms</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Footer