import React from 'react'
import './Populares.css'
import {Card} from 'react-bootstrap';
import {BsHeartFill} from 'react-icons/bs'
import sponsor1 from '../../assets/images/sponsor1.jpg'

const Populares = () => {
  return (
    <div className='populares'>
        <h2 className='populares__title'>Populares <BsHeartFill size={30}/></h2>

    <div className='populares__imgs'>
        <Card>
        <Card.Img variant="top" src={sponsor1} />
        <small className="text-muted">Likes 999 <BsHeartFill size={15}/></small>
        </Card>
        <Card>
        <Card.Img variant="top" src={sponsor1} />
        <small className="text-muted">Likes 999 <BsHeartFill size={15}/></small>
        </Card>
        <Card>
        <Card.Img variant="top" src={sponsor1} />
        <small className="text-muted">Likes 999 <BsHeartFill size={15}/></small>
        </Card>
        <Card>
        <Card.Img variant="top" src={sponsor1} />
        <small className="text-muted">Likes 999 <BsHeartFill size={15}/></small>
        </Card>
    </div>

    </div>
  )
}

export default Populares