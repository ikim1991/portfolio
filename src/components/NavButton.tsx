import React from 'react';
import { Link } from 'react-router-dom';

interface Props{
  title: string
}

class NavButton extends React.Component<Props>{
  render(){
    return(
      <Link className="NavButton" to={`/${this.props.title.toLowerCase() === "home" ? "" : this.props.title.toLowerCase()}`} type="button">{this.props.title === "Home" ? <i className="fa fa-home w3-xxlarge"></i> : this.props.title}</Link>
    )
  }
}

export default NavButton
