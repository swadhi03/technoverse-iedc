import React from 'react'
import who1 from './images/who.jpeg'
import who2 from './images/who.jpeg'
import who3 from './images/who.jpeg'
import who4 from './images/binu_k_jose.jpg'
import who5 from './images/RAKESH NAIR.jpg'
import who6 from './images/DONCJOHN.png'
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
                        <p></p>
                        <p><span></span></p>
                        <h4>COMING SOON!!!!</h4>
                    </div>
                </div>
                <h3>Workshops</h3>
                <div className='content'>
                    <div className='card'>
                        <img src={who4} alt='who' />
                        <p><strong><span>Binu K Jose</span></strong></p>
                        <p><b>Computer Vision With Robotics</b></p>
                        <p>Founder at ZEBJUS LLP | Serves as CEO of Grapes Innotech</p>
                        <p>Date: 28,29 September 2024</p>
                        <br/>
                        <br/>
                        <a href='https://www.grapesinnotech.com/computervisionwithrobotics'>Grapesinnotech</a>
                    </div>
                    <div className='card'>
                        <img src={who5} alt='who' />
                        <p><strong><span>Rakesh Nair</span></strong></p>
                        <p><b>Product Ideation</b></p>
                        <p>Founder Fit4Life | Co-Founder Heritaste LLP</p>
                        <p>Date: 28th September 2024</p>

                    </div>
                    <div className='card'>
                        <img src={who6} alt='who' />
                        <p><strong><span>Don C John</span></strong></p>
                        <p><b>Generative AI</b></p> 
                        <p>Certified Professional Cloud Architect | Software Engineer at Qburst | TFUG Organizer | Nvidia DLI Educator</p>
                        <p>Date: 29th September 2024</p>
                        <br/>
                        <br/>
                        <br/>
                        <a href="https://www.linkedin.com/in/doncjohn/?originalSubdomain=in">LinkedIn</a>
                    </div>
                   
                    <div className='pack'>
                        <h3>Participants can choose from any of the 4 available packages:</h3>
                        <ul>
                            <p><strong>EARLY BIRD REGISTRATION CLOSES ON SEPTEMBER-15</strong></p>
                            <li><p>1. Major Workshop(28th & 29th) + Talk Session(28th) + Musical night(28th) [ 2 days ] - Rs. 700/-</p></li>
                            <li><p>2. Two Workshops(28th & 29th) + Talk Session(28th) + Musical Night(28th) [ 2 days ] - Rs. 700/-</p></li>
                            <li><p>3. One Workshop(28th) + Talk Session(28th) + Musical Night(on 28th) [1 day ] - Rs. 450/-</p></li>
                            <li><p>4. One Workshop(29th) + Access to Talk Session(28th) and Musical Night(on 28th) - Rs. 450/-</p></li>
                        </ul>
                        </div>
                </div>
                <h3>Cultural Events</h3>
                <p><strong>FISAT Moves</strong>: Experience the rhythm and energy of our very own dance troupe, FISAT Moves.Whether you love classical moves or high-energy beats, FISAT Moves promises to get your feet tapping and your heart racing.</p>
                <p><strong>FISAT Music Cult</strong>: The FISAT Music Cult will take you on a musical journey with a mix of classic rock, soulful ballads, and energetic pop hits. Known for their electrifying performances, the band members bring their unique talents together to create an unforgettable experience. With powerful vocals, thrilling guitar solos, and infectious rhythms, the FISAT Music Cult is set to be the highlight of the night, delivering tunes that will resonate with every music lover.

                </p>
            </div>
        </div>
    )
}

export default Testimonials