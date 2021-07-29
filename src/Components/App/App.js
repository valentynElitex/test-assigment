import React from 'react';
import { Redirect, Route, Switch } from 'react-router'
import { Vacancy } from '../'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Assignment</h1>
      </header>

      <Switch>
        <Route path="/test/jobs">
          <Vacancy />
        </Route>

        <Redirect exact from="/" to="/test/jobs/" />
      </Switch>
    </div >
  );
}

export default App;
