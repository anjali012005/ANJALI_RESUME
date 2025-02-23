import React from 'react'
import './Projects.css'
import img1 from '../Assets/experince-img.jpg'
import img2 from '../Assets/easybook.jpg'
// import img2 from 'frontend/src/assets/easybook.jpg'

const Projects = () => {
    return (
        <div id="projects" className='projects-container'>
            <hr/>
            <h2>- MY PROJECTS - </h2>
            <div className='projects-card-container'>
                <div className='project-card'>
                    <img
                        src={img1}
                        alt="Static Card"
                        className="static-card-image"
                    />
                    <div className="static-card-content">
                        <h3 className="static-card-title">Static Card Title  <a href="https://easybook.onrender.com/listings">Live</a></h3>
                        <p className="static-card-description">
                        EasyBook offers a seamless interface where users can not only discover a diverse array of listings but also contribute by creating their own personalized listings.
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
                        <h3 className="static-card-title">Static Card Title  <a href="#">Live</a></h3>
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
                        <h3 className="static-card-title">Static Card Title  <a href="#">Live</a></h3>
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
                        <h3 className="static-card-title">Static Card Title  <a href="#">Live</a></h3>
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
                        <h3 className="static-card-title">Static Card Title  <a href="#">Live</a></h3>
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
