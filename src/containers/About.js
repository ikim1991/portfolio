import React from 'react';
import NavBar from '../components/NavBar';
import Profile from './assets/profile.jpg';

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
              <p>Chris is a self-taught software developer with a degree in chemical engineering from the University of Alberta. He is interested in web development and specializes in building web applications using JavaScript, mainly on React and Nodejs.</p>
              <p>Chris is currently looking for a junior to intermediate position as a full-stack web developer.</p>
              <p>Other interests includes:</p>
              <ul>
                <li>Dev Ops</li>
                <li>Machine Learning</li>
                <li>Data Science</li>
              </ul>
              <br/>
              <p>To see Chris' journey to becoming a web developer, refer to the following link: <a href="https://google.ca" target="_blank">INSERT LINK HERE</a></p>
              <br/>
              <p>To see projects Chris has been working on, refer to the following link: <a href="https://google.ca" target="_blank">INSERT LINK HERE</a></p>
            </div>
          </div>
          <div className="filler">
          </div>
        </div>
      </div>
  )}
}

export default About
