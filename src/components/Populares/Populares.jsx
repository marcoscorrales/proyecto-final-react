import React from 'react'
import './Populares.css'
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import sponsor1 from '../../assets/images/sponsor1.jpg'
import { Link } from 'react-router-dom'

const Populares = () => {
  return (
    <section className='populares'>
        <h2 className='populares__title'>Populares <BsHeartFill size={30}/></h2>

    <div className='populares__imgs'>

        <div className="card populares__card">
          <Link to="/"><img className="card-img-top" src={sponsor1} alt="Card image cap"/></Link> 
            <div className="card-body">
                <h5 className="card__title">Nombre</h5>
                  <div className='populares__likes'>
                      <span className='likes'>999 <BsHeart size={17}/></span>
                      <a href="#" className="card__btn btn-light">Comprar</a>
                  </div>
            </div>
        </div>
        <div className="card populares__card">
          <Link to="/"><img className="card-img-top" src={sponsor1} alt="Card image cap"/></Link> 
            <div className="card-body">
                <h5 className="card__title">Nombre</h5>
                  <div className='populares__likes'>
                      <span className='likes'>999 <BsHeart size={17}/></span>
                      <a href="#" className="card__btn btn-light">Comprar</a>
                  </div>
            </div>
        </div>
        <div className="card populares__card">
          <Link to="/"><img className="card-img-top" src={sponsor1} alt="Card image cap"/></Link> 
            <div className="card-body">
                <h5 className="card__title">Nombre</h5>
                  <div className='populares__likes'>
                      <span className='likes'>999 <BsHeart size={17}/></span>
                      <a href="#" className="card__btn btn-light">Comprar</a>
                  </div>
            </div>
        </div>
        <div className="card populares__card">
          <Link to="/"><img className="card-img-top" src={sponsor1} alt="Card image cap"/></Link> 
            <div className="card-body">
                <h5 className="card__title">Nombre</h5>
                  <div className='populares__likes'>
                      <span className='likes'>999<BsHeart size={17}/></span>
                      <a href="#" className="card__btn btn-light">Comprar</a>
                  </div>
            </div>
        </div>

    </div>

    </section>
  )
}

export default Populares