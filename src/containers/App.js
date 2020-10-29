import React from 'react';
import Title from './Title';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { Route, Switch } from 'react-router-dom';

function App() {

  const buttons = ["Home", "About", "Resume", "Projects", "Contact"]

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=> <Title buttons={buttons} />}/>
        <Route exact path="/about" render={()=> <About buttons={buttons} />}/>
        <Route exact path="/resume" render={()=> <Resume buttons={buttons} />}/>
        <Route exact path="/projects" render={()=> <Projects buttons={buttons} />}/>
        <Route exact path="/contact" render={()=> <Contact buttons={buttons} />}/>
      </Switch>
    </div>
  );
}

export default App;
