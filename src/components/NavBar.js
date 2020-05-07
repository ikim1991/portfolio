import React, { Fragment } from "react";
import NavButton from './NavButton'

class NavBar extends React.Component{
  render(){
    return(
      <Fragment>
        <div className="NavBar">
          {this.props.buttons.map((button,i) => <NavButton className={button} title={button} key={button} />)}
        </div>
        <br/><br/>
        {this.props.children}
      </Fragment>
    )
  }
}

export default NavBar
