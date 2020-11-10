import React from 'react';
import NavButton from './NavButton';

interface Props{
  buttons: string[]
}

class NavBar extends React.Component<Props>{
  render(){
    return(
        <div className="NavBar">
          {this.props.buttons.map((button,i) => <NavButton title={button} key={button} />)}
        </div>
    )
  }
}

export default NavBar
