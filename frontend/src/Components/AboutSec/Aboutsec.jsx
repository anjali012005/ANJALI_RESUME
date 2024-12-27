import React from 'react';
import './Aboutsec.css';

const Aboutsec = () => {
    return (
        <div className="about-sec">
            <div className="about-header">
                <h2 className="skills-header">My Skills</h2>
                <div className="transparent-box">
                    <p>
                        I've created and updated websites many times as practice projects.
                        I have worked with MERN Stack (MongoDB, Express, React, Node.js) in multiple
                        projects and I am also an enthusiast of AI & ML.
                    </p>
                </div>
            </div>
            <div className="skills">
                <div className="skill-card">
                    <h3>HTML</h3>
                    <p>Building the structure of web pages with semantic tags.</p>
                </div>
                <div className="skill-card">
                    <h3>CSS</h3>
                    <p>Styling websites with animations, layouts, and responsiveness.</p>
                </div>
                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <p>Adding interactivity and dynamic behavior to web pages.</p>
                </div>
                <div className="skill-card">
                    <h3>React</h3>
                    <p>Developing single-page applications with React.js.</p>
                </div>
                {/* <!-- Add more skill cards as needed --> */}
            </div>
        </div>

    );
}

export default Aboutsec;

