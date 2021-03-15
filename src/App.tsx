import React, { Fragment, useEffect } from 'react';
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
import Home from './components/Home';

const App = () => {

    const { page } = useSelector((state: AppState) => state.navigation)

    useEffect(() => {

        const el = document.querySelector('.header')

        if(page === 'HOME'){
            el!.style.background = "none"
        } else{
            el!.style.background = "#111111"
        }

    }, [page])

    return(
        <div className='App'>
            <Header/>
            {(page === 'HOME') && (
                <Fragment>
                    <Home/>
                    <Title/>
                    <Navigation/>
                </Fragment>
            )}
            {(page === 'ABOUT') && (
                <Fragment>
                    <DropdownBar/>
                    <About/>
                </Fragment>
                
            )}
            {(page === 'PROJECTS') && (
                <Fragment>
                    <DropdownBar/>
                    <Projects/>
                </Fragment>
            )}
            {(page === 'RESUME') && (
                <Fragment>
                    <DropdownBar/>
                    <Resume/>
                </Fragment>
            )}
            {(page === 'CONTACT') && (
                <Fragment>
                    <DropdownBar/>
                    <Contact/>
                </Fragment>
            )}
        </div>
    )
};

export default App;