import React from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import Title from './components/Title';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/contact';

const App = () => {
    return(
        <div className='App'>
            <Header/>
            <Projects/>
        </div>
    )
};

export default App;