import React from 'react';
import Icon from '../assets/images/favicon.png';
import DropdownBar from './DropdownBar';

const Header = () => {
    return(
        <div className="header">
            <DropdownBar/>
            <img className="icon" src={Icon} alt="ck"/>
            <div>
                <div><b>Chris</b>Kim</div>
            </div>
            <div className="image-links">
                <i className="fa fa-globe"></i>
                <i className="fa fa-github"></i>
                <i className="fa fa-linkedin-square"></i>
                <i className="fa fa-instagram"></i>
            </div>
        </div>
    )
}

export default Header;