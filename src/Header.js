import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <menu>
          <Link to="/">Home</Link>
          <Link to="/players">PlayersList</Link>
        </menu>
      </div>
    );
  }
}

export default Header;
