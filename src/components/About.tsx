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
                    <h2>My Developer Environment</h2>
                    <p><strong>Operating System:</strong><br/>Windows | Linux (WSL2 & VirtualBox - Ubuntu)</p>
                    <p><strong>Text Editor:</strong><br/>Visual Studio Code | Atom</p>
                    <p><strong>Runtime Environment:</strong><br/>Node | Python | Bash | MongoDB | MySQL | Git | Postman</p>
                </div>
            </div>
        </div>
    )
}

export default About;