import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'

import spaceVideo from '../../assets/home_video.mp4'


const Video = () => {
  return (
    <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4'/>
            </video>

            <div className='content'>
                <h1>Diseños Impresora 3D</h1>
                <p>Mejores Diseños Para Imprimir</p>
            
            <div>
                <Link to='/training' className='btn'>Comprar</Link>
                <Link to='/contact' className='btn btn-light'>Vender</Link>
            </div>
        </div>
    </div>
  )
}

export default Video