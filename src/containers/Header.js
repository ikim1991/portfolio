import React from 'react';
import NavBar from '../components/NavBar';
import Title from '../components/Title'

const buttons = ["About", "Resume", "Projects", "Contact"]

function Header() {
  return (
    <div className="Header">
      <NavBar buttons={buttons}>
        <Title />
      </NavBar>
    </div>
  );
}

export default Header;
