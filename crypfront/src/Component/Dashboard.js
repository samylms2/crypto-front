import React, { Component } from 'react';
import './dashboard.css';
import axios from 'axios';
import LineChart from './LineChart';


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
      showLineChart: false
    }
  }

  _showLineChart = (bool) => {
    this.setState({
      showLineChart: bool
    })
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=EUR')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      })
  }



  render() {
    return (
      <div className="App">
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">{this.state.cryptos[key].EUR}€</span>
          </div>
        ))}
        <button onClick={this._showLineChart.bind(null, true)}>show</button>
        <button onClick={this._showLineChart.bind(null, false)}>hide</button>
        {this.state.showLineChart && (<LineChart />)}


      </div>
    );
  }
}

export default Dashboard;