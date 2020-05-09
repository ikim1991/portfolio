import React from 'react';
import Title from './Title';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { Route } from 'react-router-dom';

function App() {

  const buttons = ["Home", "About", "Resume", "Projects", "Contact"]

  return (
    <div className="App">
      <Route exact path="/" render={()=> <Title buttons={buttons} />}/>
      <Route path="/about" render={()=> <About buttons={buttons} />}/>
      <Route path="/resume" render={()=> <Resume buttons={buttons} />}/>
      <Route path="/projects" render={()=> <Projects buttons={buttons} />}/>
      <Route path="/contact" render={()=> <Contact buttons={buttons} />}/>
    </div>
  );
}

export default App;
