import React from 'react';
import { useDispatch } from 'react-redux';
import { navigateAbout, navigateProjects, navigateResume, navigateContact, navigateHome } from '../store/actions/NavigationActions';

const DropdownBar = () => {

    const dispatch = useDispatch();

    const showDropdown = (e: React.MouseEvent<HTMLIFrameElement>) => {
        document.querySelector('#dropdown-items')!.classList.remove("hidden")
    }

    const hideDropdown = (e: React.MouseEvent<HTMLIFrameElement>) => {
        document.querySelector('#dropdown-items')!.classList.add("hidden")
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
        <div className="dropdown">
            <i className="fa fa-bars bars" onMouseOver={showDropdown} onMouseOut={hideDropdown}></i>
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