import React from 'react';

const DropdownBar = () => {
    return(
        <div className="dropdown">
            <i className="fa fa-bars bars"></i>
            <div className="dropdown-items hidden">
                <p>About</p>
                <p>Projects</p>
                <p>Resume</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default DropdownBar;