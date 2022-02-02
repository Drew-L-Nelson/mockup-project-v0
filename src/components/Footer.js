import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-main-div'>
            <div className='footer-social-media'>
                <div className='icons'>
                    <a href='https://www.facebook.com/darci.kelts/'><BsFacebook color='blue' size='40px'/></a>
                    <a href='https://www.linkedin.com/in/DarciKelts/'><BsTwitter color='blue' size='40px'/></a>
                    <a href='https://www.linkedin.com/in/DarciKelts/'><BsLinkedin color='blue' size='40px'/></a>
                </div>
            </div>

            <div className='contact-info'>
                <address>
                    <a className='footer-phone' href='tel:+12065588968'>(206) 558-8968</a>
                    <a className='footer-email' href='mailto:jim@rock.com'>Darci123@darci.com</a>
                </address>
            </div>

            <div className='footer-nav-links'>
                <Router>
                    <div className='footer-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/Service'>Services</Link>
                        <Link to='/About'>About Me</Link>
                        <Link to='/Contact'>Contact Me</Link>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default Footer;