import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Launch from './components/launch/Launch.js';
import NavBar from './components/nav/NavBar.js';
import Reports from './components/reports/Reports.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />

            <Switch>
              <Route exact path="/" component={Launch} />
              <Route path="/report/:reportId?" component={Reports} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
