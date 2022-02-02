import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer-main-div'>
            <div className='footer-social-media'>
                <div className='icons'>
                    <a href='https://www.facebook.com/darci.kelts/'><BsFacebook color='blue' size='40px'/></a>
                    <a href='https://www.linkedin.com/in/DarciKelts/'><BsTwitter color='blue' size='40px'/></a>
                    <a href='https://www.linkedin.com/in/DarciKelts/'><BsLinkedin color='blue' size='40px'/></a>
                </div>

                <div className='contact-info'>

                </div>
            </div>

            <div className='footer-nav-links'>

            </div>
        </div>
    )
}

export default Footer;