import React from 'react'
import './Serivices.css'
import { BsBrowserEdge } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { SiSpringsecurity } from "react-icons/si";
import { GrUserAdmin } from "react-icons/gr";
import { IoCloudDoneSharp } from "react-icons/io5";

const Services = () => {
    return (
        // <>
        <div className="container-fluid main-section">
            <div className="container">
                <div className="heading">
                    <h2>-MY SERVICES-</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service">
                            <div className="service-hex"><BsBrowserEdge size={40}
                                style={{ color: 'white', marginLeft: '30px', marginTop: '10px' }} /></div>
                            <div className="service-inner">
                                <h3>Web Development</h3>
                                <p>Crafting responsive and dynamic web applications using the MERN stack.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service">
                            <div className="service-hex"><BsStack size={40}
                                style={{ color: 'white', marginLeft: '30px', marginTop: '10px' }} /></div>
                            <div className="service-inner">
                                <h3>Full-Stack Solutions</h3>
                                <p>Building end-to-end web solutions with seamless backend and frontend integration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service">
                            <div className="service-hex"><TbApi size={40}
                                style={{ color: 'white', marginLeft: '30px', marginTop: '10px' }} /></div>
                            <div className="service-inner">
                                <h3>API Development & Integration</h3>
                                <p>Creating robust APIs and integrating third-party services for smooth functionality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service">
                            <div className="service-hex"><FaDatabase size={40}
                                style={{ color: 'white', marginLeft: '30px', marginTop: '10px' }} /></div>
                            <div className="service-inner">
                                <h3>Database Management</h3>
                                <p>Designing and managing efficient database solutions with MongoDB.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service">
                            <div className="service-hex"><SiSpringsecurity size={40}
                                style={{ color: 'white', marginLeft: '30px', marginTop: '10px' }} /></div>
                            <div className="service-inner">
                                <h3>User Authentication & Security</h3>
                                <p>Implementing secure user authentication systems with JWT and encryption.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service">
                            <div className="service-hex"><GrUserAdmin size={40}
                                style={{ color: 'white', marginLeft: '30px', marginTop: '10px' }} /></div>
                            <div className="service-inner">
                                <h3> Admin Panel Development</h3>
                                <p>Creating robust, user-friendly admin panels for easy management of data and operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service">
                            <div className="service-hex"><IoCloudDoneSharp size={40}
                                style={{ color: 'white', marginLeft: '30px', marginTop: '10px' }} /></div>
                            <div className="service-inner">
                                <h3>Cloud Integration</h3>
                                <p>Deploying web applications to cloud services like AWS, Heroku, or Vercel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </> 
    )
}

export default Services