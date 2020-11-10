import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

interface Props{
  buttons: string[]
}

class Title extends React.Component<Props>{
  render(){
    return(
      <div className="title">
        <NavBar buttons={this.props.buttons}/><br/><br/>
        <div className="myinfo">
          <h1>Chris (Ikhwan) Kim</h1>
          <h3>| Web Developer | JavaScript | React | Node.js |</h3>
          <a href="https://github.com/ikim1991" className="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          <a href="https://linkedin.com/in/ikim91/" className="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          <a href="https://instagram.com/ikim91/" className="w3-bar-item w3-button w3-xxlarge" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
          <br/><br/><br/>
          <Link className="discover" to="/about">Discover</Link>
        </div>
      </div>
    )
  }
}

export default Title
