import React from 'react';
import Image from '../assets/images/profile.jpg';
import data from './data/about.json';

const About = () => {
    return(
        <div className="main">
            <div className="main-header">
                <h2>About me</h2>
            </div>
            <div className="about-content">
                <img className="profile-image" src={Image} alt="profile-img"/>
                <div className="aboutme">
                    <h2>About the Developer</h2>
                    {data.summary.map((sum, i) => <p key={i}>{sum}</p>)}
                </div>
            </div>
        </div>
    )
}

export default About;