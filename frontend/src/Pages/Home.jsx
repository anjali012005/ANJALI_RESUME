import React from 'react'
import Homesec from '../Components/HomeSec/Homesec';
import Aboutsec from '../Components/AboutSec/Aboutsec';
import ExperienceSec from '../Components/ExperienceSec/ExperienceSec';
import Projects from '../Components/Projects/Projects';
import AboutMe from '../Components/AboutMe/AboutMe';
import Education from '../Components/Education/Education';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Homesec />
            <Aboutsec />
            <Projects />
            {/* <ExperienceSec /> */}
            {/* <Education /> */}
        </>
    )
}

export default Home