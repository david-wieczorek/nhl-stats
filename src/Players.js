import React, { Component } from 'react';

class Players extends Component {
  static defaultProps = {
    players: []
  };
  render() {
    const { players } = this.props;
    const playersLength = players.length;
    return (
      <div>
        <h2>Number of players: {playersLength}</h2>
        {players.map(data => {
          return (
            <div key={data.playerId}>
              {data.playerName} - goals: {data.goals} - assists: {data.assists}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Players;
