import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="w-50 col">
                <img className="w-100" src="https://www.comfortbd.com/IST/2019/December/26th/1577351237/about-comfort_1578326116.png" alt="" />
            </div>
            <div className="w-50 p-5 text-start col col-right">
                <h3 className="text-primary">About Health Care</h3>
                <p>Our Mission is to provide excellent health care services to all of our clients with dedication to meet their expectation.</p>
                <p>After inauguration in the year 2004 HEALTH CARE HOSPITAL started to take a lead in providing advanced health care services. The professional standard and the expertise on health care facilities are the pillars of success of Comfort. It is noticeable that a gap exists between patient expectations and provided health care services in Bangladesh. As a result, a remarkable number of people go abroad to avail quality medical services. Understanding this phenomenon, Comfort is committed to reduce the gap as much as possible;</p>
            </div>
        </div>
    );
};

export default About;