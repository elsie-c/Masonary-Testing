import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import Intro from './Intro';
import Elsiemade from './Elsiemade';
import './App.css';

const App = () => {
  return(
    <div className="App">
    <header className="header">
      <h1>
      brickade
      </h1>

      <p className="introword">Click below to start</p>
      <nav>
        <ul>
          <li><Link to={process.env.PUBLIC_URL + '/intro'}>intro</Link></li>
          <li><Link to={process.env.PUBLIC_URL + '/elsiemade'}>elsiemade</Link></li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route path={process.env.PUBLIC_URL + '/intro'} component={Intro}/>
      <Route path={process.env.PUBLIC_URL + '/elsiemade'} component={Elsiemade}/>
    </Switch>
  </div>
  )
}

export default App;
