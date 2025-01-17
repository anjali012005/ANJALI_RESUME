import React from 'react';
import './Aboutsec.css';

const Aboutsec = () => {
    return (
        <div className="about-sec">
            <div className="about-header">
                <h2 className="skills-header">MY SKILLS</h2>
                {/* <div className="transparent-box"> */}
                    <h4>
                        I've created and updated websites many times as practice projects.
                        I have worked with MERN Stack (MongoDB, Express, React, Node.js) in multiple
                        projects and I am also an enthusiast of AI & ML.
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
                    <h3>JavaScript</h3>
                </div>

                <div className="skill-card">
                    <h3>React</h3>
                </div>

                <div className="skill-card">
                    <h3>React</h3>
                </div>

                <div className="skill-card">
                    <h3>React</h3>
                </div>

                <div className="skill-card">
                    <h3>React</h3>
                </div>

                <div className="skill-card">
                    <h3>React</h3>
                </div>
              
            </div>
        </div>

    );
}

export default Aboutsec;

