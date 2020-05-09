import React from 'react';
import NavBar from '../components/NavBar';

class About extends React.Component{
  render(){
    const buttons = ["About", "Resume", "Projects", "Contact"]
    return (
      <div>
        <NavBar buttons={buttons}/>
        <div className="about">
          <div className="header">
            <h1>About Me</h1>
          </div>
          <div className="main">

          </div>
        </div>
      </div>
  )}
}

export default About
