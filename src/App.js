import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './App.css';

const App = () => {
  return(
    <div className="App">
    <header className="header">
      <h1>
      brickade
      </h1>
      <nav>
        <ul>
          <li><Link to={process.env.PUBLIC_URL + '/demo1'}>intro</Link></li>
          <li><Link to={process.env.PUBLIC_URL + '/demo2'}>elsiemade</Link></li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route path={process.env.PUBLIC_URL + '/demo1'} component={Demo1}/>
      <Route path={process.env.PUBLIC_URL + '/demo2'} component={Demo2}/>
    
    </Switch>
  </div>
  )
}


export default App;
