import React from 'react'
import './ExperienceSec.css'
import img1 from '../Assets/experince-img.jpg';
import img2 from '../Assets/experince-img2.jpg';

const ExperienceSec = () => {
    return (
        <div className='experience-container'>
            {/* <div className='ex-div'> */}
                <div className='ex-img'>
                    <img src={img1} style={{ width: '220px', height: '250px' }} alt="" />
                    <img src={img2} style={{ width: '220px', height: '250px' }} alt="" />
                </div>

                <div className="container-ex">
                    <div className="circle-ex" id="circle1-ex"></div>
                    <div className="line-ex"></div>
                    <div className="circle-ex" id="circle2-ex"></div>
                </div>

                <div className='text-ex-container'>
                    <div className='ex-text'>
                        <h2>Full Stack Web Developer</h2>
                        <h4>Company Name</h4>
                        <h6>1st January - Present</h6>
                    </div>

                    <div className='ex-text'>
                        <h2>Full Stack Web Developer</h2>
                        <h4>Company Name</h4>
                        <h6>1st January - Present</h6>
                    </div>

                </div>
            {/* </div> */}

        </div>
    )
}

export default ExperienceSec
