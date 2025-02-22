import React from 'react'
import Homesec from '../Components/HomeSec/Homesec';
import Aboutsec from '../Components/AboutSec/Aboutsec';
import ExperienceSec from '../Components/ExperienceSec/ExperienceSec';
import Projects from '../Components/Projects/Projects';
import Education from '../Components/Education/Education';

const Home = () => {
    return (
        <>
            <Homesec />
            <Aboutsec />
            <Projects />
            <ExperienceSec />
            <Education />
        </>
    )
}

export default Home