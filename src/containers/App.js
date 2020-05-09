import React from 'react';
import Title from './Title';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Title}/>
      <Route path="/about" component={About}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </div>
  );
}

export default App;
