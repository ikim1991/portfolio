import React from 'react';
import NavBar from '../components/NavBar';

class Resume extends React.Component{
  render(){
    const buttons = ["About", "Resume", "Projects", "Contact"]
    return (
      <div>
        <NavBar buttons={buttons}/>
        <div className="resume">
          <div className="header">
            <h1>My Resume</h1>
          </div>
          <div className="main">

          </div>
        </div>
      </div>
  )}
}

export default Resume
