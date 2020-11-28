import React from 'react';
import { useDispatch } from 'react-redux';
import { navigateAbout, navigateProjects, navigateResume, navigateContact, navigateHome } from '../store/actions/NavigationActions';

const Navigation = () => {

    const dispatch = useDispatch();
    const navigatePage = (e: React.MouseEvent<HTMLDivElement>) => {
        switch(e.currentTarget.className){
            case 'about-navi':
                return dispatch(navigateAbout())
            case 'projects-navi':
                return dispatch(navigateProjects())
            case 'resume-navi':
                return dispatch(navigateResume())
            case 'contact-navi':
                return dispatch(navigateContact())
            default:
                return dispatch(navigateHome())
        }
    }

    return(
        <div className="navigation">
            <div className="about-navi" onClick={navigatePage}>
                <h2>About me</h2>
                <p>Brief description about myself</p>
            </div>
            <div className="projects-navi" onClick={navigatePage}>
                <h2>My Projects</h2>
                <p>Detailed overiew of my projects</p>
            </div>
            <div className="resume-navi" onClick={navigatePage}>
                <h2>My Resume</h2>
                <p>Summary of my background and experiences</p>
            </div>
            <div className="contact-navi" onClick={navigatePage}>
                <h2>Contact me</h2>
                <p>Best way to connect with me</p>
            </div>
        </div>
    )
}

export default Navigation;