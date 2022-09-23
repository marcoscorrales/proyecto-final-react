import React from 'react'
import './ProductCard.css'

import {BsEyeFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const ProductCard = (prop) => {
  return (
    <div className='productCard'>
        <div className='productCard-img'>
          <Link to={"/paginaProducto/"+prop.id}>
            <div className='productCard-img__overlay'>
               <BsEyeFill size={30}/>
            </div>
             <img src={prop.imgProduct} className='productCard-img__img img-fluid' alt="producto" />
          </Link>
        </div>
        <div className="productCard-content">
            <h3 className='productCard__title'><Link to={"/paginaProducto/"+prop.id}>{prop.title}</Link></h3>
        </div>
        <div className="productCard-info">
          <div className="productCard-info__price">
            <p>Precio: <span>{prop.price}</span></p>
          </div>
          <div className="productCard-info__like">
          <p><BsHeart size={17}/> <span>{prop.likes}</span></p>
          </div>
        </div>
        <div className="productCard-author">
          <div className="productCard-author-img">
            <img src={prop.imgAuthor} className='productCard-author-img__img' alt="imagen autor" />
          </div>
          <h5 className='productCard-author-text'>
            Creado por <Link to={'/paginaUsuario/'+prop.id_creador} className='highlight'>{prop.author}</Link>
          </h5>
        </div>
    </div>
  )
}

export default ProductCard