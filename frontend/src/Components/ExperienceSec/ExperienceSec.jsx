import React from 'react'
import './ExperienceSec.css'
import img1 from '../Assets/experince-img.jpg';
import img2 from '../Assets/experince-img2.jpg';

const ExperienceSec = () => {
    return (
        <div className='experience'>
            {/* <div className='experience-heading'> */}
               
                <h5>-Experience-</h5>
                <hr/>
            {/* </div> */}
            <div className='experience-container'>
            <div className='ex-img'>
                <img src={img1} alt="" />
                <img src={img2}  alt="" />
            </div>

            <div className="container-ex">
                <div className="circle-ex" id="circle1-ex">2 months</div>
                <div className="line-ex"></div>
                <div className="circle-ex" id="circle2-ex">1 month</div>
            </div>

            <div className='text-ex-container'>
                <div className='ex-text'>
                    <h2>Full Stack Web Developer Intern</h2>
                    <h4>Technoscien</h4>
                    <h6>1st January - Present</h6>
                </div>

                <div className='ex-text'>
                    <h2>Former Intern</h2>
                    <h4>Yashi IT Services</h4>
                    <h6>1st December - 1st January</h6>
                </div>

            </div>
            </div>

        </div>
    )
}

export default ExperienceSec
