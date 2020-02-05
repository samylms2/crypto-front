import React, { Component } from 'react';
import './dashboard.css';
import axios from 'axios';
import BtcLineChart from '../cryptoChart/BtcLineChart';
import EthLineChart from '../cryptoChart/EthLineChart';


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
      showLineChart: [false, false]
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
        
        {this.state.showLineChart && (<BtcLineChart />)}
        {this.state.showLineChart && (<EthLineChart />)}



      </div>
    );
  }
}

export default Dashboard;