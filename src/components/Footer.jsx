import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons
import iedclogo from './images/iedclogo.png.png'
import ksumlogo from './images/ksumlogo-removebg-preview.png'
import iiclogo from './images/iiclogo.png'
import iic2 from './images/iic2.png'


const Footer = () => {
    return (
        <div className='footer'>
            <img src={iedclogo} alt='iedclogo' />
                <img src={ksumlogo} alt='ksumlogo' />
                <img src={iiclogo} alt='iiclogo' />
                <img src={iic2} alt='iic2' />
            <div className='container'>
                
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Events</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Contact</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>All rights reserved @IEDC FISAT</p>
                    <div className='social-media'>
                        <a href='https://in.linkedin.com/in/fisat-iedc-1707362a8' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin />
                        </a>
                        <a href='https://www.instagram.com/fisatiedc/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
