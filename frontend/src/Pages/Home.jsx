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
            {/* <AboutMe /> */}
            <Aboutsec />
            <Projects />
            {/* <ExperienceSec /> */}
            {/* <Education /> */}
            <Footer />
        </>
    )
}

export default Home