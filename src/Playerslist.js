import React, { Component } from 'react';
import axios from 'axios';
import Players from './Players';

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = { datas: [], loading: true };
  }
  componentDidMount() {
    axios
      .get('/stats/rest/skaters', {
        params: {
          isAggregate: false,
          reportType: 'basic',
          isGame: false,
          reportName: 'skatersummary',
          sort: [
            { property: 'points', direction: 'DESC' },
            { property: 'goals', direction: 'DESC' },
            { property: 'assists', direction: 'DESC' }
          ],
          cayenneExp: 'gameTypeId=2 and seasonId>=20182019'
        }
      })
      .then(response => {
        this.setState({
          datas: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      })
      .then(x => {
        // always executed
      });
  }
  render() {
    const { datas, loading } = this.state;
    if (loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <Players players={datas} />
      </div>
    );
  }
}

export default PlayersList;
