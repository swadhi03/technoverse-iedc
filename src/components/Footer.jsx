import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons

const Footer = () => {
    return (
        <div className='footer'>
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
