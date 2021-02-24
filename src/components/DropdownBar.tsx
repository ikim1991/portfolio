import React, { DOMElement } from 'react';
import { useDispatch } from 'react-redux';
import { navigateAbout, navigateProjects, navigateResume, navigateContact, navigateHome } from '../store/actions/NavigationActions';

const DropdownBar = () => {

    const dispatch = useDispatch();

    const showDropdown = (e: React.MouseEvent<HTMLElement>) => {
        document.querySelector<HTMLElement>('#dropdown-items')!.style.display = 'block';
    }

    const hideDropdown = (e: React.MouseEvent<HTMLElement>) => {
        document.querySelector<HTMLElement>('#dropdown-items')!.style.display = 'none';
    }

    const navigatePage = (e: React.MouseEvent<HTMLParagraphElement>) => {
        switch(e.currentTarget.innerHTML){
            case 'About':
                return dispatch(navigateAbout())
            case 'Projects':
                return dispatch(navigateProjects())
            case 'Resume':
                return dispatch(navigateResume())
            case 'Contact':
                return dispatch(navigateContact())
            default:
                return dispatch(navigateHome())
        }
    }

    return(
        <div className="dropdown" onMouseOver={showDropdown} onMouseOut={hideDropdown}>
            <i className="fa fa-bars bars"></i>
            <div id="dropdown-items" className="hidden" onMouseOver={showDropdown} onMouseOut={hideDropdown}>
                <p onClick={navigatePage}>About</p>
                <p onClick={navigatePage}>Projects</p>
                <p onClick={navigatePage}>Resume</p>
                <p onClick={navigatePage}>Contact</p>
            </div>
        </div>
    )
}

export default DropdownBar;