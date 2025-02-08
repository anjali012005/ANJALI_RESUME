import React from 'react';
import './Contentsec.css'
import contactimg from '../../assets/backimg.png'

const ContectSec = () => {
    return (
        <div id="contact" className="contact-container">
            <div className='contact-left-container'>
                <img src={contactimg} alt=""></img>
            </div>
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>
                    Feel free to reach out! I would love to hear from you.
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>

        </div>
    );
};

export default ContectSec;
