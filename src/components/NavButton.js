import React from "react";
import './css/components.css'

class NavButton extends React.Component{
  render(){
    return(
      <input className="NavButton" type="button" value={this.props.title}/>
    )
  }
}

export default NavButton
