import React from 'react'
import './Categories.css'
import categoria_arte from '../../assets/images/categoria_arte.jpg'
import categoria_juegos from '../../assets/images/categoria_juegos.jpg'
import categoria_moda from '../../assets/images/categoria_moda.webp'
import categoria_herramientas from '../../assets/images/categoria_herramientas.webp'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <h1 className='categories__title'>Categorias</h1>
        <section className='categories__container'>
            <div className='categories__card'>
                <Link to='/categoria/arte'>
                    <img src={categoria_arte} alt="category" className="category__img img-fluid" />
                    <h4 className="categories__card__title">Arte</h4>
                </Link>
            </div>
            <div className='categories__card'>
                <Link to='/categoria/juegos'>
                    <img src={categoria_juegos} alt="category" className="category__img img-fluid" />
                    <h4 className="categories__card__title">Juegos</h4>
                </Link>
            </div>
            <div className='categories__card'>
                <Link to='/categoria/moda'>
                    <img src={categoria_moda} alt="category" className="category__img img-fluid" />
                    <h4 className="categories__card__title">Moda</h4>
                </Link>
            </div>
            <div className='categories__card'>
                <Link to='/categoria/herramientas'>
                    <img src={categoria_herramientas} alt="category" className="category__img" />
                    <h4 className="categories__card__title">Herramientas</h4>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Categories