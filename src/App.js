import React, {Component} from 'react';
import './App.scss';

import Header from './Header';
import Home from './Home';
import Playerslist from './Playerslist';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {simpleAction} from './actions/simpleAction';

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <button onClick={this.simpleAction}>Test redux action</button>
          <pre>{JSON.stringify(this.props)}</pre>
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

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
