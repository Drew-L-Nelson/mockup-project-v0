import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import '../styles/Mission.css';

const Mission = () => {
  return(
    <div>
      <Card
        body
        style={{
          backgroundColor: '#C2C5AA',
          borderColor: '#C2C5AA',
          width: '100%'
        }}
      >
        <CardTitle tag="h5" className='Mission-card-title'>
          Our Mission Statement
        </CardTitle>
        <CardText className='Mission-card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto similique nulla eligendi reprehenderit saepe quae. Facere similique provident, ducimus, architecto laudantium, in voluptatum iure mollitia perspiciatis assumenda tempore nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nostrum corrupti numquam voluptas voluptatibus velit dignissimos modi possimus. Debitis, beatae. Sapiente minus fugiat possimus voluptas dolore aut quos cupiditate illo!
        </CardText>
      </Card>
    </div>
  )
}

export default Mission;