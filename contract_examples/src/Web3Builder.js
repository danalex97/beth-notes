import Web3 from 'web3';

class Web3Builder {
  static build() {
    return new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  }
}

export default Web3Builder;
