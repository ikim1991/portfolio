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
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", height: "350px", overflow: "auto"}}>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Professional Work Experience</b></div>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="http://www.flairpackaging.com/home" target="_blank" rel="noopener noreferrer"><b>Product Processing Specialist</b> at <i>Flair Flexible Packaging Corporation</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.wyndhamhotels.com/en-ca/days-inn/bridgewater-nova-scotia/days-inn-and-conference-center-bridgewater/overview?CID=LC:DI:20160927:Rio:Local&iata=00093796" target="_blank" rel="noopener noreferrer"><b>General Manager</b> at <i>Days Inn & Conference Center by Wyndham Bridgewater</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.cfindustries.com/who-we-are/locations/medicine-hat-nitrogen-facility" target="_blank" rel="noopener noreferrer"><b>Chemical Co-op Engineer</b> at <i>CF Industries</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="http://www.oemreman.com/" target="_blank" rel="noopener noreferrer"><b>Engineering Co-op</b> at <i>OEM Remanufacturing</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.westfraser.com/company/locations/slave-lake-pulp" target="_blank" rel="noopener noreferrer"><b>Junior Project Engineer Co-op</b> at <i>West Fraser</i></a>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Current Work Experience</b></div>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://moxies.com/restaurant-locations/ontario/toronto-restaurant/toronto-downtown" target="_blank" rel="noopener noreferrer"><b>Server</b> at <i>Moxies Bar & Grill Downtown</i></a>
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-newspaper-o w3-margin-top"></div>
                <h4>CERTIFICATIONS</h4>
                <h5>+10 Courses Completed</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", height: "350px", overflow: "auto"}}>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Web Development Courses</b></div>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noopener noreferrer"><b>The Complete Web Developer Course</b> at <i>Udemy</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" target="_blank" rel="noopener noreferrer"><b>The Complete Node.js Developer Course</b> at <i>Udemy</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/the-complete-sql-bootcamp/" target="_blank" rel="noopener noreferrer"><b>The Complete SQL Bootcamp</b> at <i>Udemy</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer"><b>MongoDB - The Complete Developer's Guide</b> at <i>Udemy</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011" target="_blank" rel="noopener noreferrer"><b>Front End Web Developer Nanodegree Program</b> at <i>Udacity</i></a>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Computer Science Courses</b></div>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/java-the-complete-java-developer-course/" target="_blank" rel="noopener noreferrer"><b>Java Programming Masterclass</b> at <i>Udemy</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/complete-python-bootcamp/" target="_blank" rel="noopener noreferrer"><b>Complete Python Bootcamp</b> at <i>Udemy</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/" target="_blank" rel="noopener noreferrer"><b>Data Structures and Algorithms</b> at <i>Udemy</i></a>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Interests</b></div>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer"><b>Machine Learning by Stanford</b> at <i>Coursera</i></a>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/" target="_blank" rel="noopener noreferrer"><b>The Complete Data Science Bootcamp</b> at <i>Udemy</i></a>
                  <div className="w3-bar-item w3-text w3-hover-pink"><b>and Many More...</b></div>
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-mortar-board w3-margin-top"></div>
                <h4>EDUCATION</h4>
                <h5>5-Year Program</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card" style={{width: "100%", overflow: "auto"}}>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Undergraduate Program</b></div>
                  <a className="w3-bar-item w3-text w3-hover-pink" href="https://www.ualberta.ca/chemical-materials-engineering" target="_blank" rel="noopener noreferrer"><b>Chemical Engineering</b> at <i>University of Alberta</i></a>
                  <div className="w3-bar-item w3-text w3-text-pink"><b>Self-taught Developer Program</b></div>
                  <span className="w3-bar-item w3-text w3-hover-pink"><b>Full Stack Web Developing</b> at <i>Self-taught</i></span>
                </div>
              </div>
              <div className="w3-deep-orange w3-center w3-dropdown-hover resume-grid-item">
                <div className="w3-xlarge fa fa-laptop w3-margin-top"></div>
                <h4>PROGRAMMING</h4>
                <h5>+2 Years</h5>
                <div className="w3-dropdown-content w3-bar-block w3-card " style={{width: "100%", height: "350px", overflow: "auto"}}>
                    <div className="w3-bar-item w3-text w3-text-pink"><b>Working Knowledge</b></div>
                    <div className="w3-bar-item w3-text w3-hover-pink">HTML & CSS</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">JavaScript</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">TypeScript</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">Node.js</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">React</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">SQL - MySQL/PostgreSQL</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">NoSQL - MongoDB</div>
                    <div className="w3-bar-item w3-text w3-text-pink"><b>Basic Knowledge</b></div>
                    <div className="w3-bar-item w3-text w3-hover-pink">Linux/Dev Ops</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">Java</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">Python</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">Machine Learning</div>
                    <div className="w3-bar-item w3-text w3-hover-pink">Data Science</div>
                </div>
              </div>
            </div>

            <div className="resume-content">
              <div className="w3-center">
                <h3>Professional Experience</h3>
                <div className="w3-container w3-margin">
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>Product Processing Specialist</b></h5>
                      <h6><i>May 2017 - Jul 2018</i></h6>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">Flair Flexible Packaging - Calgary, AB</h5>
                      <div className="w3-left-align w3-margin-left">- Implemented corrective action plans and successfully reduced quality related non-conformance incidents improving the company’s bottom line.</div>
                      <div className="w3-left-align w3-margin-left">- Maintained proactive quality management systems to build and strengthen the company’s brand as a high quality flexible packaging supplier.</div>
                      <div className="w3-left-align w3-margin-left">- Collected and analyzed quality control data trends to develop prevention and reduction strategies in quality related incidents.</div>
                      <div className="w3-left-align w3-margin-left">- Corresponded with overseas third party suppliers and customer service representatives to uphold the quality control standards of the products and maximize customer satisfaction.</div>
                      <div className="w3-left-align w3-margin-left">- Created and revised Technical Die Lines to the correct specifications and standards using Adobe Illustrator.</div>
                  </div>
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>General Manager</b></h5>
                      <h6><i>Aug 2014 - Nov 2016</i></h6>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">Days Inn & Conference Center by Wyndham Bridgewater - Bridgewater, NS</h5>
                      <div className="w3-left-align w3-margin-left">- Managed the front-end operations of a hotel, managing 10 to 15 employees to deliver high level of customer service.</div>
                      <div className="w3-left-align w3-margin-left">- Analyzed key business metrics for the business owner to help evaluate the revenue model and improve the bottom line.</div>
                      <div className="w3-left-align w3-margin-left">- Performed general accounting and administrative duties including payroll, bookkeeping, and generating financial reports using Sage50.</div>
                  </div>
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>Chemical Co-op Engineerr</b></h5>
                      <h6><i>May 2013 - Dec 2013</i></h6>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">CF Industries - Medicine Hat, AB</h5>
                      <div className="w3-left-align w3-margin-left">- Managed several small to medium sized projects simultaneously in troubleshooting and optimizing process operations to help improve production efficiency and safety.</div>
                      <div className="w3-left-align w3-margin-left">- Built process models using Aspen HYSYS and Aspen Plus software to verify and validate engineering calculations.</div>
                      <div className="w3-left-align w3-margin-left">- Prepared high level proposals, scopes, presentations, and technical reports for key project stakeholders.</div>
                      <div className="w3-left-align w3-margin-left">- Executed and closed projects within the allocated budget and deadline through effective scoping and planning.</div>
                      <div className="w3-left-align w3-margin-left">- Coordinated in multidisciplinary teams to meet project deliverables in a timely manner and promote good teamwork.</div>
                  </div>
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>Engineering Co-op</b></h5>
                      <h6><i>Sep 2012 - Dec 2012</i></h6>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">OEM Remanufacturing - Edmonton, AB</h5>
                      <div className="w3-left-align w3-margin-left">- Managed document control in the collection, validation, and storage of documents according to the company's policies and standards.</div>
                      <div className="w3-left-align w3-margin-left">- Worked closely with machine operators and welders in the field to create technical procedural documents.</div>
                      <div className="w3-left-align w3-margin-left">- Utilized the company’s document control software to assist in implementing document control standards.</div>
                      <div className="w3-left-align w3-margin-left">- Created and validated mechanical specification drawings using AutoCAD.</div>
                  </div>
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>Junior Project Engineer Co-op</b></h5>
                      <h6><i>May 2011 - Dec 2011</i></h6>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">West Fraser - Slave Lake, AB</h5>
                      <div className="w3-left-align w3-margin-left">- Assisted in the project management of the Green Transformation Project to help reduce the company's carbon footprint and stay ahead of the environmental regulations and policies.</div>
                      <div className="w3-left-align w3-margin-left">- Managed the procurement of equipment and services in accordance with the project budget and schedule to promote project completion in a timely manner.</div>
                      <div className="w3-left-align w3-margin-left">- Supervised outside contractors to ensure all standards and specifications were met out in the field.</div>
                      <div className="w3-left-align w3-margin-left">- Reviewed Piping and Instrumental Drawings (P&IDs), construction drawings, and mechanical drawings to ensure that the correct industry codes and standards was upheld.</div>
                      <div className="w3-left-align w3-margin-left">- Utilized Microsoft Projects to track and update the progression of the project in organized manner.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-content">
              <div className="w3-center">
                <h3>Education</h3>
                <div className="w3-container w3-margin">
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>Full Stack Web Developing</b></h5>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">Self-taught Computer Science Program</h5>
                      <div className="w3-left-align w3-margin-left">Self-taught in Computer Science and Web Developing.</div>
                  </div>
                  <div className="w3-col w3-quarter w3-padding-large w3-center">
                      <h5><b>Chemical Engineering</b></h5>
                  </div>
                  <div className="w3-col w3-threequarter w3-padding-large w3-leftbar w3-border-pink">
                      <h5 className="w3-left-align">University of Alberta</h5>
                      <div className="w3-left-align w3-margin-left">Bachelor of Science in Chemical Engineering with 20-month of Cooperative Work Experience</div>
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
