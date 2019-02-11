pragma solidity ^0.5.0;

contract Coin {
  // these are state variables, kept on the chain
  address public minter;
  mapping (address => uint) public balances;

  // events allow clients to monitor changes
  // address, from, amount are accessible to clients
  event Sent(address from, address to, uint amount);

  constructor() public {
    // msg, tx, block are "special" variables
    // msg.sender is where the message originated from(in this case, the minter
    // since we are in the constructor)
    minter = msg.sender;
  }

  function mint(address receiver, uint amount) public {
    // only minter can mint an account
    require(msg.sender == minter);
    require(amount < 1e60);

    balances[receiver] += amount;
  }

  // public means anyone can call it
  function send(address receiver, uint amount) public {
    // receiver, amount and msg are all local variables, in memory
    require(amount <= balances[msg.sender], "Insufficinet balance.");

    balances[msg.sender] -= amount;
    balances[receiver]   += amount;

    emit Sent(msg.sender, receiver, amount);
  }
}
