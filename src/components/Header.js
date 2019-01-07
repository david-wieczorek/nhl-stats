import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <menu>
        <Link to="/">Home</Link>
        <Link to="/players">PlayersList</Link>
      </menu>
    );
  }
}

export default Header;
