import React from 'react';
import NavButton from './NavButton';

class NavBar extends React.Component{
  render(){
    return(
        <div className="NavBar">
          {this.props.buttons.map((button,i) => <NavButton className={button} title={button} key={button} />)}
        </div>
    )
  }
}

export default NavBar
