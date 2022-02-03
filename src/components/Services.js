import React from 'react';
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';
import '../styles/Services.css'

const Services = () => {
  return (
    <Card className='Services-card'
      body
      inverse
      style={{
        backgroundColor: '#414833',
        borderColor: '#414833'
      }}
    >
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <div className='Services-card-image'>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          
        />
      </div>
    </Card>
  )
}

export default Services;