import React from 'react'
import { Link,useParams } from 'react-router-dom';
import './ProductPage.css';
import product from '../../assets/images/sponsor1.jpg'
import usuario from '../../assets/images/usuario.png'
import {BsHeartFill} from 'react-icons/bs'

const ProductPage = () => {
    let parametros = useParams();
   
    let producto = (parseInt(parametros.id));

  return (
    <div className='productPage'>
        <h1 className='productPage__title'>
            Producto id:{producto}
        </h1>
        <div className='productPage-image'>
          <img src={product} className='img-fluid' alt="producto" />
        </div>
        <div className='productPage-info'>
          <div className='productPage-info__buttons'>
            <button className='btn-descargar'>Descargar</button>
            <span className='precio-descarga'>2,3€</span>
          </div>
          <div className='productPage-info__likes'>
            <button className='btn-like'><BsHeartFill/> Me gusta</button>
            <span className='cifra-likes'><BsHeartFill/> 123</span>
          </div>
          <div className='productPage-descripcion'>
            <h3 className='productPage-descripcion__title'>Descripción del modelo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum aut ut autem accusamus eligendi reiciendis? Hic aspernatur nesciunt voluptatum aut eos porro ducimus placeat odit, nemo, corrupti repellat rerum.</p>
          </div>
          <div className='productPage-categorias'>
            <h3 className='productPage-categorias__title'>Categorias</h3>
            <section className='productPage-categorias__container'><Link className='productPage-categorias__link' to='/categoria'>Categoria</Link>
            <Link className='productPage-categorias__link' to='/categoria'>Categoria</Link></section>
          </div>
          <div className='productPage-autor'>
            <h3 className='productPage-autor__title'>Autor</h3>
            <section className='productPage-autor__container'>
              <Link to='/paginaUsuario/1'><img src={usuario} className='img-fluid productPage-autor__img' alt="usuario" /></Link>
            <Link to='/paginaUsuario/1' className='productPage-autor__name'>Marcos Corrales Castro</Link>
            </section>
          </div>
        </div>
    </div>
  )
}

export default ProductPage