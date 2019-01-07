import React, {Component} from 'react';
import axios from 'axios';
import Players from '../components/Players';

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {datas: [], loading: true, sortDirection: 'descending'};
  }

  orderByPasses = () => {
    const playersOrderedByPasses = state =>
      state.datas.sort((a, b) => b.assists - a.assists);

    const playersOrderedByPassesss = state =>
      state.datas.sort((a, b) => a.assists - b.assists);

    if (this.state.sortDirection === 'descending') {
      this.setState(state => ({
        sortDirection: 'ascending',
        datas: playersOrderedByPasses(state),
      }));
    } else {
      this.setState(state => ({
        sortDirection: 'descending',
        datas: playersOrderedByPassesss(state),
      }));
    }
  };

  componentDidMount() {
    axios
      .get('playerslist')
      .then(response => {
        this.setState({
          datas: response.data,
          loading: false,
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
    const {datas, loading} = this.state;
    if (loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <button onClick={this.orderByPasses}>Order by assists</button>
        <Players players={datas} />
      </div>
    );
  }
}

export default PlayersList;
