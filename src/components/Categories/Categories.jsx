import React from 'react'
import './Categories.css'
import category_img from '../../assets/images/sponsor1.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <h1 className='categories__title'>Categorias</h1>
        <section className='categories__container'>
            <div className='categories__card'>
                <Link to='/categoria'>
                    <img src={category_img} alt="category" className="category__img img-fluid" />
                    <h4 className="categories__card__title">Categoria</h4>
                </Link>
            </div>
            <div className='categories__card'>
                <Link to='/categoria'>
                    <img src={category_img} alt="category" className="category__img img-fluid" />
                    <h4 className="categories__card__title">Categoria</h4>
                </Link>
            </div>
            <div className='categories__card'>
                <Link to='/categoria'>
                    <img src={category_img} alt="category" className="category__img img-fluid" />
                    <h4 className="categories__card__title">Categoria</h4>
                </Link>
            </div>
            <div className='categories__card'>
                <Link to='/categoria'>
                    <img src={category_img} alt="category" className="category__img img-fluid" />
                    <h4 className="categories__card__title">Categoria</h4>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Categories