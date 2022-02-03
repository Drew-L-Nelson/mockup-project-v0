import React from 'react';
import '../styles/Intro.css';
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Intro = () => {

  const { push } = useHistory();

  const onClick = () => {
    push('/Contact');
  }

  return(
    <div className='intro-main-div'>
      <div className='photo-div'>
        <img src={'https://photos.zillowstatic.com/h_l/ISqpg7l628sztp1000000000.jpg'} alt='Darci Kelts' className='head-shot'/>
      </div>

      <h2>Darci Kelts</h2>

      <div className='contact-div'>
        <button className='contact-button' onClick={onClick}>CONTACT ME</button>
        <a className='call-button' href='tel:+12065588968'><BsFillTelephoneForwardFill size='20px' /></a>
      </div>

    </div>
  )
}

export default Intro;