import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { simpleReducer } = this.props;
    return <div>Home {simpleReducer.result}</div>;
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Home);
