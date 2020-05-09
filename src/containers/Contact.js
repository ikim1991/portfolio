import React from 'react';
import NavBar from '../components/NavBar';

class Contact extends React.Component{
  render(){
    const buttons = ["About", "Resume", "Projects", "Contact"]
    return (
      <div>
        <NavBar buttons={buttons}/>
        <div className="contact">
          <div className="header">
            <h1>Contact Me</h1>
          </div>
          <div className="main">

          </div>
        </div>
      </div>
  )}
}

export default Contact
