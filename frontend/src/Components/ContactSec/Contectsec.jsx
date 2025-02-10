// import React from 'react';
// import './Contentsec.css'
// import contactimg from '../../assets/backimg.png'

// const ContectSec = () => {
//     return (
//         <div id="contact" className="contact-container">
//             <div className='contact-left-container'>
//                 <img src={contactimg} alt=""></img>
//                 <h4>Let's connect and create new impact in tech.</h4>
//             </div>
//             <div className="contact-content">
//                 <h2>Contact Me</h2>
//                 <p>
//                     Feel free to reach out! I would love to hear from you.
//                 </p>
//                 <form className="contact-form">
//                     <div className="form-group">
//                         <label htmlFor="name">Your Name</label>
//                         <input type="text" id="name" placeholder="Enter your name" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Your Email</label>
//                         <input type="email" id="email" placeholder="Enter your email" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="message">Your Message</label>
//                         <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
//                     </div>
//                     <button type="submit" className="submit-btn">Send Message</button>
//                 </form>
//             </div>

//         </div>
//     );
// };

// export default ContectSec;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contentsec.css';
import contactimg from '../../assets/backimg.png';

const ContectSec = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_7mpzswi',
            'template_2o5pg84',
            {
                from_name: formData.name,
                to_name: 'Anjali',
                message: formData.message,
                reply_to: formData.email,
            },
            'z6FjSaf2_4i4zp3k4'
        )
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Error details:', error.text || error);
                alert('Failed to send the message. Please try again later.');
            });

    };

    return (
        <div id="contact" className="contact-container">
            <div className='contact-left-container'>
                <img src={contactimg} alt="" />
                <h4>Let's connect and create new impact in tech.</h4>
            </div>
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>Feel free to reach out! I would love to hear from you.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContectSec;

