import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import data from './data/resume.json';

interface Props{
  buttons: string[]
}

class Resume extends React.Component<Props>{
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
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", height: "350px", overflow: "auto"}}>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Professional Work Experience</b></div>
                  {data && data.work.past.map((job, i) => <a key ={i} className="w3-bar-item w3-text w3-hover-pink" href={job.url} target="_blank" rel="noopener noreferrer"><b>{job.title}</b> at <i>{job.company}</i></a>)}
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Current Work Experience</b></div>
                  {data && <a className="w3-bar-item w3-text w3-hover-pink" href={data.work.current.url} target="_blank" rel="noopener noreferrer"><b>{data.work.current.title}</b> at <i>{data.work.current.company}</i></a>}
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-newspaper-o w3-margin-top"></div>
                <h4>CERTIFICATIONS</h4>
                <h5>+10 Courses Completed</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", height: "350px", overflow: "auto"}}>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Web Development Courses</b></div>
                  {data && data.certifications.web.map((course, i) => <a key={i} className="w3-bar-item w3-text w3-hover-pink" href={course.url} target="_blank" rel="noopener noreferrer"><b>{course.name}</b> at <i>{course.source}</i></a>)}
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Computer Science Courses</b></div>
                  {data && data.certifications.cs.map((course, i) => <a key={i} className="w3-bar-item w3-text w3-hover-pink" href={course.url} target="_blank" rel="noopener noreferrer"><b>{course.name}</b> at <i>{course.source}</i></a>)}
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Interests</b></div>
                  {data && data.certifications.jff.map((course, i) => <a key={i} className="w3-bar-item w3-text w3-hover-pink" href={course.url} target="_blank" rel="noopener noreferrer"><b>{course.name}</b> at <i>{course.source}</i></a>)}
                  <div className="w3-bar-item w3-text w3-hover-pink"><b>and Many More...</b></div>
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-mortar-board w3-margin-top"></div>
                <h4>EDUCATION</h4>
                <h5>5-Year Program</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", overflow: "auto"}}>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Undergraduate Program</b></div>
                  {data.education.undergrad && <a className="w3-bar-item w3-text w3-hover-pink" href={data.education.undergrad.url} target="_blank" rel="noopener noreferrer"><b>{data.education.undergrad.program}</b> at <i>{data.education.undergrad.at}</i></a>}
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Self-taught Software Developer</b></div>
                  {data.education.undergrad && <span className="w3-bar-item w3-text w3-hover-pink"><b>{data.education.self.program}</b> at <i>{data.education.self.at}</i></span>}
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-laptop w3-margin-top"></div>
                <h4>PROGRAMMING</h4>
                <h5>+2 Years</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card " style={{width: "100%", height: "350px", overflow: "auto"}}>
                    <div className="w3-bar-item w3-text w3-text-pink"><b>Favorite Technologies and Frameworks</b></div>
                    {data && data.programming.working.map((item, i) => <div key={i} className="w3-bar-item w3-text w3-hover-pink">{item}</div>)}
                    <div className="w3-bar-item w3-text w3-text-pink"><b>Basic Knowledge</b></div>
                    {data && data.programming.basic.map((item, i) => <div key={i} className="w3-bar-item w3-text w3-hover-pink">{item}</div>)}
                </div>
              </div>
            </div>

            <div className="resume-content">
              <div className="w3-center">
                <h3>Professional Experience</h3>
                <div className="w3-container w3-margin">
                  {data && data.work.past.map((item, i) => {
                    return(
                      <Fragment key={i}>
                        <div className="w3-col w3-quarter w3-padding-large w3-center">
                          <h5><b>{item.title}</b></h5>
                          <h6><i>{item.length}</i></h6>
                        </div>
                          <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                          <h5 className="w3-left-align">{`${item.company} - ${item.city}`}</h5>
                          <div className="w3-left-align w3-margin-left">{item.summary}</div>
                        </div>
                      </Fragment>
                      )
                    })}
                </div>
              </div>
            </div>
            <div className="resume-content">
              <div className="w3-center">
                <h3>Education</h3>
                <div className="w3-container w3-margin">
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>{data.education.self.program}</b></h5>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">{data.education.self.at}</h5>
                      <div className="w3-left-align w3-margin-left">{data.education.self.at}</div>
                  </div>
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>{data.education.undergrad.at}</b></h5>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">{data.education.undergrad.program}</h5>
                      <div className="w3-left-align w3-margin-left">{data.education.undergrad.summary}</div>
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
