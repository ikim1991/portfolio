import React from "react";

class Title extends React.Component{
  render(){
    return(
      <div className="Title">
        <h1>Chris (Ikhwan) Kim</h1>
        <h3>| Full-stack Web Developer | JavaScript | React | Node.js |</h3>
        <a href="https://github.com/ikim1991" class="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
        <a href="https://linkedin.com/in/ikim91/" class="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
        <a href="https://instagram.com/ikim91/" class="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
        <br/><br/>
        <input className="discover" type="button" value="Discover"/>
      </div>
    )
  }
}

export default Title
