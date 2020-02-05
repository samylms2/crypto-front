import React, { Component } from 'react';
import './dashboard.css';
import axios from 'axios';
 
class Dashboard extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          cryptos: []
        };
      }

  

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
    })
  }

   

  render() {
    return (
        <div className="App">
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">{this.state.cryptos[key].EUR}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;