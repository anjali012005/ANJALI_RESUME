import React from 'react'
import './Education.css';

const Education = () => {
    return (
        <div className='education-container'>
            <section id="education">
                <h2>Education</h2>
                <div class="timeline">
                    {/* <!-- Education Item 1 --> */}
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <h3>Bachelor's of Engineering (CS)</h3>
                            <p>Jiwaji University, 2022 - 2026</p>
                            <p>CGPA : 7.5</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>

                    {/* <!-- Education Item 2 --> */}
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <h3>Higher Secondary School(12th)</h3>
                            <p>Excellence School, Balaghat 2020 - 2022</p>
                            <p> Percentage : 72.4% in Board Exam</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>

                     {/* <!-- Education Item 2 --> */}
                     <div class="timeline-item">
                        <div class="timeline-content">
                            <h3>High School (10th)</h3>
                            <p>Govt High School,Lingapaunar 2018 - 2020</p>
                            <p>Percentage: 95.5% in MP Board Exam</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Education
