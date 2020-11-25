import React from 'react';
import Image from '../assets/images/yyz.jpg';

const Contact = () => {
    return(
        <div className="main">
            <div className="main-header">
                <h2>Contact Me</h2>
            </div>
            <div className="contact-content">
                <div className="contact-me">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <h3>LOCATION</h3>
                        <p>Toronto, ON</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <h3>EMAIL</h3>
                        <p>ikim1991@gmail.com</p>
                    </div>
                    <div>
                        <i className="fa fa-linkedin-square"></i>
                        <h3>LINKEDIN</h3>
                        <a href="https://linkedin.com/in/ikim91/" target="_blank"><p>Chris Kim</p></a>
                    </div>
                    <div>
                        <i className="fa fa-instagram"></i>
                        <h3>INSTAGRAM</h3>
                        <a href="https://instagram.com/ikim91/" target="_blank"><p>@ikim91</p></a>
                    </div>
                </div>
                <img src={Image} alt="yyz"/>
            </div>
        </div>
    )
}

export default Contact;