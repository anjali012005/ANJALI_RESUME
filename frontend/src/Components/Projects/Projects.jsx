import React from 'react'
import './Projects.css'
import img1 from '../Assets/experince-img.jpg'

const Projects = () => {
    return (
        <div id="projects" className='projects-container'>
            <h2>__ MY PROJECTS __</h2>
            <div className='projects-card-container'>
                <div className='project-card'>
                    <img
                        src={img1}
                        alt="Static Card"
                        className="static-card-image"
                    />
                    <div className="static-card-content">
                        <h3 className="static-card-title">Static Card Title</h3>
                        <p className="static-card-description">
                            This is a description for a static card. The content is hardcoded.
                        </p>
                    </div>
                </div>

                <div className='project-card'>
                    <img
                        src={img1}
                        alt="Static Card"
                        className="static-card-image"
                    />
                    <div className="static-card-content">
                        <h3 className="static-card-title">Static Card Title</h3>
                        <p className="static-card-description">
                            This is a description for a static card. The content is hardcoded.
                        </p>
                    </div>
                </div>

                <div className='project-card'>
                    <img
                        src={img1}
                        alt="Static Card"
                        className="static-card-image"
                    />
                    <div className="static-card-content">
                        <h3 className="static-card-title">Static Card Title</h3>
                        <p className="static-card-description">
                            This is a description for a static card. The content is hardcoded.
                        </p>
                    </div>
                </div>

                <div className='project-card'>
                    <img
                        src={img1}
                        alt="Static Card"
                        className="static-card-image"
                    />
                    <div className="static-card-content">
                        <h3 className="static-card-title">Static Card Title</h3>
                        <p className="static-card-description">
                            This is a description for a static card. The content is hardcoded.
                        </p>
                    </div>
                </div>

                <div className='project-card'>
                    <img
                        src={img1}
                        alt="Static Card"
                        className="static-card-image"
                    />
                    <div className="static-card-content">
                        <h3 className="static-card-title">Static Card Title</h3>
                        <p className="static-card-description">
                            This is a description for a static card. The content is hardcoded.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects
