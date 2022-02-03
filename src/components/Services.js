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
      <CardTitle className='Services-CardTitle'tag="h5">
        Services
      </CardTitle>
      <CardText className='Services-CardText'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto similique nulla eligendi reprehenderit saepe quae. Facere similique provident, ducimus, architecto laudantium, in voluptatum iure mollitia perspiciatis assumenda tempore nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nostrum corrupti numquam voluptas voluptatibus velit dignissimos modi possimus. Debitis, beatae. Sapiente minus fugiat possimus voluptas dolore aut quos cupiditate illo!<br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto similique nulla eligendi reprehenderit saepe quae. Facere similique provident, ducimus, architecto laudantium, in voluptatum iure mollitia perspiciatis assumenda tempore nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nostrum corrupti numquam voluptas voluptatibus velit dignissimos modi possimus. Debitis, beatae. Sapiente minus fugiat possimus voluptas dolore aut quos cupiditate illo!<br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto similique nulla eligendi reprehenderit saepe quae. Facere similique provident, ducimus, architecto laudantium, in voluptatum iure mollitia perspiciatis assumenda tempore nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nostrum corrupti numquam voluptas voluptatibus velit dignissimos modi possimus. Debitis, beatae. Sapiente minus fugiat possimus voluptas dolore aut quos cupiditate illo!<br/>
      
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