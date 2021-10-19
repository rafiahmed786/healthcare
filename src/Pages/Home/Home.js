import React from 'react';
import HomeSlider from '../Home/Home-slider/HomeSlider';
import About from './About/About';
import Doctors from './Doctors/Doctors';
import Services from './Services.js/Services';

const Home = () => {
    return (
        <div id='home' className="mt-1">
            <HomeSlider></HomeSlider>
            <About></About>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;