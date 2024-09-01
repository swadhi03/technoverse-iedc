import React from 'react'
import iedclogo from './images/iedclogo.png.png'
import ksumlogo from './images/ksumlogo-removebg-preview.png'
import iiclogo from './images/iiclogo.png'
import iic2 from './images/iic2.png'
import des from './images/des.png'


import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
            <img src={des} alt='des' width="500px" height="auto" />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Welcome to Techverso, an inspiring initiative by the <strong>Innovation and Entrepreneurship Development Cell (IEDC)</strong> at FISAT College. This event is designed to ignite the entrepreneurial spirit within students, offering a dynamic platform where innovation meets opportunity.At Techverso, we believe in empowering the next generation of entrepreneurs. Our event is a convergence of brilliant minds, innovative ideas, and the drive to create impactful change. Whether you're an aspiring entrepreneur or a seasoned innovator, Techverso provides the perfect environment to network, learn, and grow.</p>
                    <p>Techverso is more than just an event , it's a movement to inspire and equip students with the skills and mindset to succeed in the fast-paced world of innovation.</p>

                </div>
                
            </div>
            <img src={iedclogo} alt='iedclogo' />
                <img src={ksumlogo} alt='ksumlogo' />
                <img src={iiclogo} alt='iiclogo' />
                <img src={iic2} alt='iic2' />
        </div>
    )
}

export default About