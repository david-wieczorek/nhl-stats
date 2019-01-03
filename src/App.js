import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';
import Playerslist from './Playerslist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/players" component={Playerslist} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
