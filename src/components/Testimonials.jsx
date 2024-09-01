import React from 'react'
import who1 from './images/who.jpeg'
import who2 from './images/who.jpeg'
import who3 from './images/who.jpeg'
import who4 from './images/who.jpeg'
import who5 from './images/who.jpeg'
import who6 from './images/who.jpeg'
import './Testimonials.css'
import Hero from './Hero'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Events</h2>
                <span className='line'></span>
                <h3>Talk Sessions</h3>
                <div className='content'>
                    <div className='card'>
                        <img src={who1} alt='who' />
                        <p>Description</p>
                        <p><span>Speaker - 1</span></p>
                        <p>About speaker</p>
                    </div>
                    <div className='card'>
                        <img src={who2} alt='who' />
                        <p>Description</p>
                        <p><span>Speaker - 2</span></p>
                        <p>About speaker</p>
                    </div>
                    <div className='card'>
                        <img src={who3} alt='who' />
                        <p>Description</p>
                        <p><span>Speaker - 3</span></p>
                        <p>About speaker</p>
                    </div>
                </div>
                <h3>Workshops</h3>
                <div className='content'>
                    <div className='card'>
                        <img src={who4} alt='who' />
                        <p><span>Binu K Jose</span></p>
                        <p><b>Computer Vision With Robotics</b></p>
                        <p>Get ready to dive into the future of technology, as you embark on a hands-on workshop at Grapes Innotech, where you'll gain unparalleled expertise in computer vision and robotics.</p>
                        <p>Date: 28th September 2024</p>
                        <a href='https://www.grapesinnotech.com/computervisionwithrobotics'>Grapesinnotech</a>
                    </div>
                    <div className='card'>
                        <img src={who5} alt='who' />
                        <p><span>Rakesh Nair</span></p>
                        <p><b>Ideation</b></p>
                        <p>Founder Fit4Life</p>
                        <p>Date: 28th September 2024</p>

                    </div>
                    <div className='card'>
                        <img src={who6} alt='who' />
                        <p><span>Don C John</span></p>
                        <p>Workshop on Generative AI</p> 
                        <p>About speaker: Certified Professional Cloud Architect | Software Engineer at Qburst | TFUG Organizer | Nvidia DLI Educator</p>
                        <p>Date: 29th September 2024</p>
                        <br/>
                        <a href="https://www.linkedin.com/in/doncjohn/?originalSubdomain=in">LinkedIn</a>
                    </div>
                </div>
                <h3>Cultural Events</h3>
                <p><strong>FISAT Moves </strong>: Experience the rhythm and energy of our very own dance troupe, FISAT Moves.Whether you love classical moves or high-energy beats, FISAT Moves promises to get your feet tapping and your heart racing.</p>
                <p><strong>FISAT Band</strong>: The FISAT Band will take you on a musical journey with a mix of classic rock, soulful ballads, and energetic pop hits. Known for their electrifying performances, the band members bring their unique talents together to create an unforgettable experience. With powerful vocals, thrilling guitar solos, and infectious rhythms, the FISAT Band is set to be the highlight of the night, delivering tunes that will resonate with every music lover.

                </p>
            </div>
        </div>
    )
}

export default Testimonials