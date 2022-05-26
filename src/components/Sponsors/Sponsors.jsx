import React from 'react'
import './Sponsors.css'
import {Carousel} from 'react-bootstrap';
import imagen__carousel from '../../assets/images/fondo_liquid.webp'
import sponsor1 from '../../assets/images/sponsor1.jpg'

import {BsFillMegaphoneFill} from 'react-icons/bs'

const Sponsors = () => {
  return (
    <div className='sponsors'>
        <h2 className='sponsors__title'>Sponsors <BsFillMegaphoneFill size={30}/></h2>
       
        <Carousel className='carousel'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imagen__carousel}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First sponsor</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imagen__carousel}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second sponsor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imagen__carousel}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third sponsor</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>

    <div className='sponsors__imgs'>
        <div><img src={sponsor1} alt="sponsor" className="sponsor__img img-fluid" /></div>
        <div><img src={sponsor1} alt="sponsor" className="sponsor__img img-fluid" /></div>
        <div><img src={sponsor1} alt="sponsor" className="sponsor__img img-fluid" /></div>
        <div><img src={sponsor1} alt="sponsor" className="sponsor__img img-fluid" /></div>
    </div>

    </div>
  )
}

export default Sponsors