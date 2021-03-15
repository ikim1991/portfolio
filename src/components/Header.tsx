import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../assets/images/favicon.png';
import { navigateHome } from '../store/actions/NavigationActions';
import { AppState } from '../store/store';

const Header = () => {

    const dispatch = useDispatch()
    const { page } = useSelector((state: AppState) => state.navigation)

    const navigateToHome = (e: React.MouseEvent<HTMLIFrameElement> | React.MouseEvent<HTMLImageElement>) => {
        if(page != 'HOME'){
            dispatch(navigateHome())
        }
    }

    return(
        <div className="header" key={Math.random()}>
            <img className="icon" src={Icon} alt="ck" onClick={navigateToHome}/>
            <div className="chriskim" onClick={navigateToHome}>
                <div><b>Chris</b>Kim</div>
            </div>
            <div className="image-links">
                <p><i className="fa fa-globe" onClick={navigateToHome}></i></p>
                <a href="https://github.com/ikim1991/" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://linkedin.com/in/ikim91/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                <a href="https://instagram.com/ikim91/" target="_blank"><i className="fa fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default Header;