import React from 'react'
import './Projects.css'
import img1 from '../Assets/experince-img.jpg'
import easybook from '../../assets/easybook.jpg'
import shopspot from '../../assets/shopspot.jpg'
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
                        <h3 className="static-card-title">EasyBook <a href="https://easybook.onrender.com/listings">Live</a></h3>
                        <p className="static-card-description">
                        EasyBook offers a seamless interface where users can not only discover a diverse array of listings.
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
                        <h3 className="static-card-title">ShopSpot <a href="https://shopspots1.netlify.app/">Live</a></h3>
                        <p className="static-card-description">
                            Your One stop for shopping, gives seamless user experience. 
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
                        <h3 className="static-card-title">RefreshLine <a href="https://github.com/anjali012005/DynamicQuote-Generator">Live</a></h3>
                        <p className="static-card-description">
                        Embrace the power of spontaneous inspiration! Explore a repository of wisdom with every refresh.
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
                        <h3 className="static-card-title">Weather? <a href="https://master--tiny-yeot-5ba02c.netlify.app/">Live</a></h3>
                        <p className="static-card-description">
                            Finding the data of weather of your city and provides seamless user interface.
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
                        <h3 className="static-card-title">DoTask <a href="https://github.com/anjali012005/TODO">Live</a></h3>
                        <p className="static-card-description">
                            It allows user to add, delete, update their daily tasks.
                        </p>    
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Projects
