import React from 'react';
import './Homesec.css';
// import hand_icon from '../Assets/hand_icon.png';
import ANJALI from '../../assets/ANJALI.jpg';
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
                <div 
                className="social-media-icons">
                <a  style={{ textDecoration: 'none', color: 'black' }} href='https://www.linkedin.com/in/anjali-daharwal/'><FaLinkedin className='icons-l' /></a>

                <a  style={{ textDecoration: 'none', color: 'black' }} href="https://github.com/anjali012005"><FaGithub className='icons' /></a>
                
                <a style={{ textDecoration: 'none', color: 'black' }} href="mailto:anjalidaharwal5@gmail.com?subject=Reaching Out Through Your Portfolio Website"><FaEnvelope className='icons'  /></a>

                <a style={{ textDecoration: 'none', color: 'black' }}  href="https://x.com/anjali01010101"><FaTwitter className='icons'  /></a>
                
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://join.skype.com/invite/pVkLSjedzt2e"><FaSkype className='icons'  /></a>
                
                </div>
                <div className='div-button'>
                <button className='button'>
                <a 
                    href="https://drive.google.com/file/d/12X--Ia_I7zyy4wBuzxBsdpsQmbDWdB2f/view?usp=drivesdk" 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    View Resume
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
