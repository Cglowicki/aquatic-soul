import React from 'react';
import Nav from './components/Nav';

import {
  BrowserRouter as Router, //if in trouble with back change to hashrouter
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
