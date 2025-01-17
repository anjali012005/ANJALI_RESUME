import React from 'react'
import './AboutMe.css'
import img1 from '../../assets/ANJALI.jpg'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const AboutMe = () => {
    return (
        <div id="about-me" className='about-desc'>

            <div className='border-about'>
                <div className='my-img'>
                    <img src={img1} alt="my-pic" />
                </div>
                <div className='my-desc'>
                    <h2>So, Who am I?</h2>
                    <hr />

                    <p>Hi, I’m <strong>Anjali</strong>, a passionate and driven <em>full-stack developer</em> and <em>quick learner</em> who thrives on exploring new technologies and staying up-to-date with the latest industry trends.</p>

                    <p> With a strong foundation in programming, including Java, Python, and the MERN stack, I’ve successfully built dynamic and scalable web applications, like ShopSpot and EasyBook.
                    </p>
                    &nbsp;
                    <p>
                        Beyond coding, I enjoy combining creativity with problem-solving to craft user-friendly interfaces and robust backends. Whether it’s diving into machine learning, creating intuitive designs with Tailwind CSS, or developing decentralized solutions, I love turning ideas into impactful digital experiences.
                    </p>
                    <p>
                        I take pride in continuously challenging myself to grow, as seen through my participation in programs like the Naukri Campus Young Turks and GSoC 2024 Extended, which boosted my confidence and sharpened my skills.
                    </p>

                    <p>
                        When I’m not coding, I enjoy sharing my knowledge, singing bhajans, and embracing creativity in all forms.
                    </p>

                    <div className='btn-disc'>
                        <button className='about-btn'>Let's Connect  <IoIosArrowDroprightCircle size={22} /></button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutMe
