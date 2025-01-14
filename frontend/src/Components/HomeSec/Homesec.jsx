import React from 'react';
import './Homesec.css';
// import hand_icon from '../Assets/hand_icon.png';
import ANJALI from '../Assets/ANJALI.png';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaSkype} from 'react-icons/fa'


const Home = () => {
    return (
        <div className="home">
            <div className="hero-left">
                <h3>HEY THERE!</h3>
                <b><h1>I AM ANJALI DAHARWAL</h1></b>
                <h3>APP DEVELOPER & FULL STACK DEVELOPER</h3>
                <div className="social-media-icons">
                <FaLinkedin size={40} color="#black" />
                <FaGithub className='icons' size={40} color="#black" />
                <FaEnvelope className='icons' size={40} color="#black" />
                <FaTwitter className='icons' size={40} color="#black" />
                <FaSkype className='icons' size={40} color="#black" />
                </div>
                <div className='div-button'>
                <button className='button'>
                <a 
                    href="/ANJALI_RESUME.pdf" 
                    download="ANJALI_RESUME.pdf"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    Download Resume
                </a>
            </button>
                </div>
            </div>
            <div className='hero-right'>
                <img src={ANJALI} alt="profile pic" />
            </div>
        </div>
    );
};

export default Home;
