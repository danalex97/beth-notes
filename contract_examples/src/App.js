import React, { Component } from 'react';
import Accounts from './Accounts';
import Web3Builder from './Web3Builder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Accounts: </p>
        <Accounts web3={Web3Builder.build()}/>
      </div>
    );
  }
}

export default App;
