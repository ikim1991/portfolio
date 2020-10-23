import React from 'react';
import NavBar from '../components/NavBar';
import Profile from './assets/profile.jpg';
import { Link } from 'react-router-dom';

class About extends React.Component{
  render(){
    return (
      <div className="page">
        <NavBar buttons={this.props.buttons}/>
        <div className="about">
          <div className="header">
            <h1>About Me</h1>
          </div>
          <div className="main">
            <img className="profile" src={Profile} alt="Profile"/>
            <div className="about-content">
              <h2>About the Developer</h2>
              <p>As a self-taught software developer I enjoy building progressive web applications, whether it be creating a game just for fun or building tools to make my life a little bit easier. I am a fan of all things JavaScript and like working with modern frameworks and technologies such as React and Node.js.</p>
              <p>After +2 years of teaching myself to program and playing around with different technologies, I am looking to switch gears and transition it from a hobby to a profession. I am currently looking for career opportunities as a full-stack web developer.</p>
              <p>Over the years I have built and deployed several web applications such as real-time chat apps, browser based games, and personalized dashboards. For more details, check out my GitHub and Portfolio in the links below.</p>
              <ul style={{paddingInlineStart: "20px"}}>
                <li style={{listStyleType: "none"}}><Link to="/projects">- Project Portfolio</Link></li>
                <li style={{listStyleType: "none"}}><a href="https://github.com/ikim1991" target="_blank" rel="noopener noreferrer">- GitHub Repository</a></li>
              </ul>
            </div>
          </div>
          <div className="filler">
          </div>
        </div>
      </div>
  )}
}

export default About
