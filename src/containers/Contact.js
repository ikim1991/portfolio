import React from 'react';
import NavBar from '../components/NavBar';
import Toronto from './assets/yyz.jpg'

class Contact extends React.Component{
  render(){
    return (
      <div>
        <NavBar buttons={this.props.buttons}/>
        <div className="contact">
          <div className="header">
            <h1>Contact Me</h1>
          </div>
          <div className="main">
            <div className="w3-center w3-margin-top">
              <div className="w3-third w3-margin-bottom">
                  <h4 className="w3-text-pink">LOCATION</h4>
                  <div className="w3-xlarge fa fa-map-marker"></div>
                  <h5>Toronto, Ontario</h5>
              </div>
              <div className="w3-third w3-margin-bottom">
                  <h4 className="w3-text-pink">EMAIL</h4>
                  <div className="w3-xlarge fa fa-envelope"></div>
                  <h5>ikim1991@gmail.com</h5>
              </div>
              <div className="w3-third w3-margin-bottom">
                  <h4 className="w3-text-pink">PHONE</h4>
                  <div className="w3-xlarge fa fa-phone"></div>
                  <h5>(780) 932-0907</h5>
              </div>
            </div>
            <div className="w3-center">
              <img src={Toronto} alt="portrait" style={{width: "100%"}}/>
            </div>
          </div>
          <div className="filler">
          </div>
        </div>
      </div>
  )}
}

export default Contact
