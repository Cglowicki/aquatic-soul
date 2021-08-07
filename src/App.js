import React from 'react';
import Nav from './components/Nav';

import {
  BrowserRouter as Router, //if in trouble with back change to hashrouter
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//pages
import Music from './pages/Music.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <div>
          <Route exact path='/music' component={Music} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
