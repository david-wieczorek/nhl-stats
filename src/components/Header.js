import React from 'react';
import {Link} from 'react-router-dom';
import SignOutButton from './Signout';

const Navigation = ({authUser}) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <menu>
    <Link to="/">Home</Link>
    <Link to="/signUp">Signup</Link>
    <Link to="/players">PlayersList</Link>
    <SignOutButton />
  </menu>
);

const NavigationNonAuth = () => (
  <menu>
    <Link to="/">Home</Link>
    <Link to="/signUp">Signup</Link>
    <Link to="/signIn">Signin</Link>
  </menu>
);

export default Navigation;
