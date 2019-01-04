import React, { Component } from 'react';

class Players extends Component {
  render() {
    const { players } = this.props;
    const playersLength = players.length;
    return (
      <div>
        <h2>Number of players: {playersLength}</h2>
        {players.map(data => {
          return (
            <div key={data.id}>
              {data.playerName} - goals: {data.goals} - assists: {data.assists}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Players;
