import React from 'react'
import './Sponsors.css'
import {Carousel} from 'react-bootstrap';
import imagen__carousel from '../../assets/images/fondo_liquid.webp'
import sponsor1 from '../../assets/images/sponsor1.jpg'

import {BsFillMegaphoneFill} from 'react-icons/bs'

const endpoint= 'http://127.0.0.1:8000/uploads/sponsors/'

const Sponsors = () => {
  return (
    <div className='sponsors'>
        <h2 className='sponsors__title'>Sponsors <BsFillMegaphoneFill size={30}/></h2>
       
        <Carousel className='carousel'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={endpoint+"sponsor2.webp"}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={endpoint+"sponsor3.webp"}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={endpoint+"sponsor4.jpg"}
                alt="Third slide"
                />
            </Carousel.Item>
    </Carousel>

    <div className='sponsors__imgs'>
        <div><img src={endpoint+"sponsor1.jpg"} alt="sponsor" className="sponsor__img img-fluid" /></div>
        <div><img src={endpoint+"sponsor2.webp"} alt="sponsor" className="sponsor__img img-fluid" /></div>
        <div><img src={endpoint+"sponsor3.webp"} alt="sponsor" className="sponsor__img img-fluid" /></div>
        <div><img src={endpoint+"sponsor4.jpg"} alt="sponsor" className="sponsor__img img-fluid" /></div>
    </div>

    </div>
  )
}

export default Sponsors