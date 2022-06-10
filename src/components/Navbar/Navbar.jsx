import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../../assets/images/logo3.png' 
import './Navbar.css'

import {FiUser} from 'react-icons/fi';
import {FiLogIn} from 'react-icons/fi';

const Navbar = () => {
    //Cambio de color cuando se hace scroll
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() =>{
            if(window.scrollY >= 100){
                setColor(true)
            }else{
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'><img className='logo__img' src={logo} alt="logo" /></Link>  
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/' className='link'>Inicio</Link>
            </li>
            <li>
                <Link to='/comisiones' className='link'>Comisiones</Link>
            </li>
            <li>
                <Link to='/categorias' className='link'>Categorias</Link>
            </li>
            <li>
                <Link to='/contacto' className='link'>Contacto</Link>
            </li>
            <li>
                <Link to='/login' className='link link__logo'><FiLogIn className='header__logo' size={30}/>Entrar</Link>
            </li>
            <li>
                <Link to='/register' className='link link__logo'><FiUser className='header__logo' size={30}/>Registro</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            
        </div>
    </div>
  )
}

export default Navbar