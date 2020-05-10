import React from 'react';
import { Link } from 'react-router-dom';

class NavButton extends React.Component{
  render(){
    return(
      <Link className="NavButton" to={`/${this.props.title.toLowerCase() === "home" ? "portfolio" : this.props.title.toLowerCase()}`} type="button">{this.props.title === "Home" ? <i className="fa fa-home w3-xxlarge"></i> : this.props.title}</Link>
    )
  }
}

export default NavButton
