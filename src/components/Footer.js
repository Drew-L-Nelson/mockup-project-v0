import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsFillTelephoneForwardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-main-div'>
            <div className='footer-social-media'>
                <a className='icons' href='https://www.facebook.com/DarciKeltsRealEstate'><BsFacebook size='40px' /></a>
                <a className='icons' href='https://www.instagram.com/darcikeltsrealestate/'><BsInstagram size='40px' /></a>
                <a className='icons' href='https://www.linkedin.com/in/DarciKelts/'><BsLinkedin size='40px' /></a>
            </div>

            <div className='footer-contact-info'>
                <a className='footer-phone' href='tel:+12065588968'><BsFillTelephoneForwardFill />&nbsp;(123) 456-7890</a>
                <a className='footer-email' href='mailto:jim@rock.com'>emailMe123@emailMe.com</a>
            </div>

            <div className='footer-nav-links'>
                <Link className='footer-link' to='/'>HOME</Link>
                <Link className='footer-link' to='/About'>ABOUT ME</Link>
                <Link className='footer-link' to='/Contact'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Footer;