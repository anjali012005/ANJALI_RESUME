import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaSkype } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div class="footer-links">
                    <ul>
                        <li><a href="/about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* <!-- Footer Social Media Icons --> */}
                <div class="footer-socials">
                    <a href="https://www.linkedin.com/in/anjali-daharwal/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/anjali012005" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="mailto:anjalidaharwal5@gmail.com?subject=Reaching Out Through Your Portfolio Website" target="_blank" aria-label="G-Mail">
                        <FaEnvelope />
                    </a>
                    <a href="https://x.com/anjali01010101" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://join.skype.com/invite/pVkLSjedzt2e" target="_blank" aria-label="Twitter">
                        <FaSkype />
                    </a>
                </div>

                {/* <!-- Footer Copyright --> */}
                <div class="footer-copyright">
                    <p>&copy; 2025 Anjali Daharwal | All Rights Reserved</p>
                </div>
            </div>
        </div >
    )
}

export default Footer
