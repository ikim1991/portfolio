import React from 'react';
import { useDispatch } from 'react-redux';
import { navigateAbout } from '../store/actions/NavigationActions';

const Title = () => {

    const dispatch = useDispatch();
    const navigateToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(navigateAbout())
    }


    return(
        <div className="title">
            <h1>Chris (Ikhwan) Kim</h1>
            <h2>Full-stack Web Developer</h2>
            <div className="image-links">
                <a href="https://github.com/ikim1991/" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://linkedin.com/in/ikim91/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                <a href="https://instagram.com/ikim91/" target="_blank"><i className="fa fa-instagram"></i></a>
            </div>
            <button className="info-button" onClick={navigateToAbout}>More Info</button>
        </div>
    )
}

export default Title;