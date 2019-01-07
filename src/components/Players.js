import React, {Component} from 'react';

class Players extends Component {
  render() {
    const {players} = this.props;
    const playersLength = players.length;
    return (
      <div className="players">
        <h2>Number of players: {playersLength}</h2>
        {players.map(data => {
          return (
            <div key={data._id}>
              <img
                src={data.picture}
                className="player-picture"
                alt={data.name.first}
              />
              {data.name.first} {data.name.last} - goals: {data.goals} -
              assists: {data.assists}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Players;
