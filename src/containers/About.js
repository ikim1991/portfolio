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
              <p>Chris is a full-stack web developer who is specializing in JavaScript. He likes working with React to create front-end applications while utilizing Node.js on the back-end to create server-side applicatons. He also prefers working with MongoDB's NoSQL databases but is also knowledgeable working with SQL databases.</p>
              <p>As a life-long learner, he is always interested in working with new technologies and expanding his toolkit. He is also fond of Python and is hoping to utilizing it more when the opportunity arises.</p>
              <p>Currently, he is looking for career opportunities as a Web Developer/Software Developer.</p>
              <p>He is experienced in building Web Applications such a messenger apps, games such as BlackJack, and personalized dashboards with various functionality. These projects and several more can be found in the links below.</p>
              <br/>
              <Link to="/projects">- Project Portfolio</Link>
              <p><a href="https://github.com/ikim1991" target="_blank" rel="noopener noreferrer">- GitHub Repository</a></p>
            </div>
          </div>
          <div className="filler">
          </div>
        </div>
      </div>
  )}
}

export default About
