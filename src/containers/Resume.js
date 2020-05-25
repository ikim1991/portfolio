import React from 'react';
import NavBar from '../components/NavBar';

class Resume extends React.Component{
  render(){
    return (
      <div>
        <NavBar buttons={this.props.buttons}/>
        <div className="resume">
          <div className="header">
            <h1>My Resume</h1>
          </div>
          <div className="main">

            <div className="resume-hover">
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-briefcase w3-margin-top"></div>
                <h4>WORK EXPERIENCE</h4>
                <h5>+5 Years</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", overflow: "auto"}}>
                  <a className="w3-bar-item w3-text w3-text-pink"><b>Professional Work Experience</b></a>
                  <a className="w3-bar-item w3-text w3-hover-pink"><b>ROLE</b> at <i>COMPANY</i></a>
                  <a className="w3-bar-item w3-text w3-text-pink"><b>Current Work Experience</b></a>
                  <a className="w3-bar-item w3-text w3-hover-pink"><b>ROLE</b> at <i>COMPANY</i></a>
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-newspaper-o w3-margin-top"></div>
                <h4>CERTIFICATIONS</h4>
                <h5>+10 Courses Completed</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", overflow: "auto"}}>
                  <a className="w3-bar-item w3-text w3-text-pink"><b>Web Development Courses</b></a>
                  <a className="w3-bar-item w3-text w3-hover-pink"><b>COURSE</b> at <i>COMPANY</i></a>
                  <a className="w3-bar-item w3-text w3-text-pink"><b>Computer Science Courses</b></a>
                  <a className="w3-bar-item w3-text w3-hover-pink"><b>COURSE</b> at <i>COMPANY</i></a>
                  <a className="w3-bar-item w3-text w3-text-pink"><b>Interests</b></a>
                  <a className="w3-bar-item w3-text w3-hover-pink"><b>COURSE</b> at <i>COMPANY</i></a>
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-mortar-board w3-margin-top"></div>
                <h4>EDUCATION</h4>
                <h5>5-Year Program</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", overflow: "auto"}}>
                  <a className="w3-bar-item w3-text w3-text-pink"><b>Undergraduate Program</b></a>
                  <a className="w3-bar-item w3-text w3-hover-pink"><b>PROGRAM</b> at <i>SCHOOL</i></a>
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-laptop w3-margin-top"></div>
                <h4>PROGRAMMING</h4>
                <h5>+2 Years</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card " style={{width: "100%", overflow: "auto"}}>
                    <a className="w3-bar-item w3-text w3-text-pink"><b>Working Knowledge</b></a>
                    <a className="w3-bar-item w3-text w3-hover-pink"><b>- </b> LANGUAGE/TECHNOLOGY</a>
                    <a className="w3-bar-item w3-text w3-text-pink"><b>Basic Knowledge</b></a>
                    <a className="w3-bar-item w3-text w3-hover-pink"><b>- </b> LANGUAGE/TECHNOLOGY</a>
                </div>
              </div>
            </div>

            <div className="resume-content">
              <div class="w3-center">
                <h3>Professional Experience</h3>
                <div class="w3-container w3-margin">
                  <div class="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>POSITION TITLE</b></h5>
                      <h6><i>FROM - TO</i></h6>
                  </div>
                  <div class="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 class="w3-left-align">COMPANY - CITY, PROVINCE</h5>
                      <li class="w3-left-align w3-margin-left">JOB DESCRIPTION.</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-content">
              <div class="w3-center">
                <h3>Education</h3>
                <div class="w3-container w3-margin">
                  <div class="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>PROGRAM</b></h5>
                  </div>
                  <div class="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 class="w3-left-align">SCHOOL/COURSE</h5>
                      <li class="w3-left-align w3-margin-left">COURSE DESCRIPTION</li>
                </div>
              </div>
            </div>
            </div>

          </div>
          <div className="filler">
          </div>
        </div>
      </div>
  )}
}

export default Resume
