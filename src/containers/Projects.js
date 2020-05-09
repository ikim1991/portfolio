import React from 'react';
import NavBar from '../components/NavBar';

class Projects extends React.Component{
  render(){
    const buttons = ["About", "Resume", "Projects", "Contact"]
    return (
      <div>
        <NavBar buttons={buttons}/>
        <div className="projects">
          <div className="header">
            <h1>My Projects</h1>
          </div>
          <div className="main">

          </div>
        </div>
      </div>
  )}
}

export default Projects
