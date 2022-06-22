import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
import Typed from 'react-typed';

// import spaceVideo from '../../assets/space.mp4' 


const Video = () => {
  return (
    <div className='hero'>
            <video autoPlay loop muted id='video'>
                {/* <source src={spaceVideo} type='video/mp4'/> */}
            </video>

            <div className='content'>
                <h1>Diseños Impresora 3D</h1>
                <p>Mejores Diseños Para  
                  <Typed 
                  className='typed__text'
                  strings={['Imprimir', 'Comprar', 'Vender']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                  />

                </p>
            
            <div>
                <Link to='/categorias' className='btn'>Comprar</Link>
                <Link to='/login' className='btn btn-light'>Vender</Link>
            </div>
        </div>
    </div>
  )
}

export default Video