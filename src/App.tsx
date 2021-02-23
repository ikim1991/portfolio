import React, { Fragment } from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import Title from './components/Title';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/contact';
import { useSelector } from 'react-redux';
import { AppState } from './store/store';
import DropdownBar from './components/DropdownBar';

const App = () => {

    const { page } = useSelector((state: AppState) => state.navigation)

    return(
        <div className='App'>
            <Header/>
            <DropdownBar/>
            {(page === 'HOME') && (
                <Fragment>
                    <Title/>
                    <Navigation/>
                </Fragment>
            )}
            {(page === 'ABOUT') && (
                <About/>
            )}
            {(page === 'PROJECTS') && (
                <Projects/>
            )}
            {(page === 'RESUME') && (
                <Resume/>
            )}
            {(page === 'CONTACT') && (
                <Contact/>
            )}
        </div>
    )
};

export default App;