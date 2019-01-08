import React, {Component} from 'react';

import Header from '../components/Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Playerslist from './Playerslist';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {withFirebase} from '../components/Firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({authUser}) : this.setState({authUser: null});
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header authUser={this.state.authUser} />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <Route path="/players" component={Playerslist} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
