import React from 'react';
import NavBar from '../components/NavBar';
import Profile from './assets/profile.jpg';
import { Link } from 'react-router-dom';
import data from './data/about.json';

interface Props{
  buttons: string[]
}

class About extends React.Component<Props>{
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
              {data && data.summary.map((summ, i) => <p key={i}>{summ}</p>)}
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
