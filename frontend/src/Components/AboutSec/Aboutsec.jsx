import React from 'react';
import './Aboutsec.css';

const Aboutsec = () => {
    return (
        <div className="about-sec">
            <div className="about-header">
                <h2 className="skills-header">MY SKILLS</h2>
                {/* <div className="transparent-box"> */}
                <h4>
                    I am a quick learner and versatile developer skilled in Java, Python, JavaScript, and full-stack development using React.js, Node.js, Express.js, and MongoDB. I have expertise in web development, creating user-focused applications like ShopSpot and EasyBook. Proficient in design frameworks like Tailwind CSS, I craft seamless and responsive user interfaces. My experience includes database management with both relational and NoSQL databases and integrating Google Sheets for data storage. As a beginner in Android Studio, I am keen to expand my mobile development skills. Passionate about AI/ML, I am actively exploring intelligent solutions. My adaptability, problem-solving skills, and drive for innovation ensure I deliver impactful results.
                </h4>
                {/* </div> */}
            </div>
            <div className="skills">

                <div className="skill-card">
                    <h3>HTML</h3>
                </div>

                <div className="skill-card">
                    <h3>CSS</h3>
                </div>

                <div className="skill-card">
                    <h3>JS</h3>
                </div>

                <div className="skill-card">
                    <h3>MongoDB</h3>
                </div>

                <div className="skill-card">
                    <h3>Express</h3>
                </div>

                <div className="skill-card">
                    <h3>React</h3>
                </div>

                <div className="skill-card">
                    <h3>Nodejs</h3>
                </div>

                <div className="skill-card">
                    <h3>Android</h3>
                </div>

            </div>
        </div>

    );
}

export default Aboutsec;

