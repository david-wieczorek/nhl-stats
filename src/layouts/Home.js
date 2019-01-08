import React, {Component} from 'react';
import {connect} from 'react-redux';

import {simpleAction} from '../actions/simpleAction';

class Home extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    const {simpleReducer} = this.props;
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{simpleReducer.result}</pre>
      </div>
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
)(Home);
