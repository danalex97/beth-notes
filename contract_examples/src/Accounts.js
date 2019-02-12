import React, { Component } from 'react';

class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts : []
    };
  }

  componentDidMount() {
    let that = this;
    this.props.web3.eth.getAccounts((_, accounts) => {
      that.setState({
        accounts : accounts
      });
    });
  }

  render() {
    const accounts = this.state.accounts.map(account =>
      <li key={account.toString()}>
        {account}
      </li>);

    return (<div>
      {accounts}
    </div>);
  }
}

export default Accounts;
