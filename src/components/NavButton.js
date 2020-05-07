import React from "react";

class NavButton extends React.Component{
  render(){
    return(
      <input className="NavButton" type="button" value={this.props.title}/>
    )
  }
}

export default NavButton
