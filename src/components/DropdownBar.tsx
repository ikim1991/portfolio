import React, { DOMElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigateAbout, navigateProjects, navigateResume, navigateContact, navigateHome } from '../store/actions/NavigationActions';
import { AppState } from '../store/store';

const DropdownBar = () => {

    const dispatch = useDispatch();
    const { page } = useSelector((state: AppState) => state.navigation)

    const showDropdown = (e: React.MouseEvent<HTMLElement>) => {
        document.querySelector<HTMLElement>('#dropdown-items')!.style.display = 'block';
    }

    const hideDropdown = (e: React.MouseEvent<HTMLElement>) => {
        document.querySelector<HTMLElement>('#dropdown-items')!.style.display = 'none';
    }

    const navigatePage = (e: React.MouseEvent<HTMLParagraphElement>) => {
        switch(e.currentTarget.innerHTML){
            case 'About':
                if(e.currentTarget.innerHTML.toUpperCase() != page){
                    return dispatch(navigateAbout())
                }
                return
            case 'Projects':
                if(e.currentTarget.innerHTML.toUpperCase() != page){
                    return dispatch(navigateProjects())
                }
                return
            case 'Resume':
                if(e.currentTarget.innerHTML.toUpperCase() != page){
                    return dispatch(navigateResume())
                }
                return
            case 'Contact':
                if(e.currentTarget.innerHTML.toUpperCase() != page){
                    return dispatch(navigateContact())
                }
                return
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