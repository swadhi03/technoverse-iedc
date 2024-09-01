import React, { useState } from 'react';
import './Demo.css';
import prev from './images/prev.png'

const Demo = () => {
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        contact: '',
        question: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Example: Displaying an alert with form data
        alert(`Name: ${formData.name}\nCollege: ${formData.college}\nContact: ${formData.contact}\nQuestion: ${formData.question}`);
    };

    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className="col-1">
                    <p>Contact Us</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required />

                        <label htmlFor='college'>College</label>
                        <input
                            type='text'
                            id='college'
                            name='college'
                            value={formData.college}
                            onChange={handleChange}
                            required />

                        <label htmlFor='contact'>Contact No.</label>
                        <input
                            type='text'
                            id='contact'
                            name='contact'
                            value={formData.contact}
                            onChange={handleChange}
                            required />

                        <label htmlFor='question'>Question?</label>
                        <textarea
                            id='question'
                            name='question'
                            value={formData.question}
                            onChange={handleChange}
                            rows='4'
                            required
                        ></textarea>

                        <button type='submit'>Submit</button>
                    </form>


                </div>
                <div className='col-2'>

                    <p><strong>Date </strong>: September <br /><strong>Venue</strong> : FISAT Angamaly<br />Don’t miss out! Register now to secure your spot at this incredible event.</p>
                    <h3>We can’t wait to see you there! Let’s create the future together at Techverso 2024.</h3><br/>
                    <p>
                        Mail:<a href="iedcfisat@gmail.com"> iedcfisat@gmail.com </a> <br />
                        VISHWAM SAJEEV: (+91)7034667695<br />
                        NANDAKISHOR K: (+91)7594993674
                    </p>
                    <img src={prev} alt='prev' width="auto" height="auto" />
                    <br/>
                </div>
            </div>
        </div>

    );
};

export default Demo;
