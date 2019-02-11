# Ethereum

- building blocks: state, validity, consensus

### State

- object_id => object
- we need to define **what does the object keep**

### Validity

- **state transition function** ensures rule enforcement
  - e.g. the signature is valid

- goals:
  - efficient
  - requires least amount of data to validate

#### Bitcoin Scripting
  - stack-based reverse-polish machine
  - **operation codes** defines state transition(kind of like a rule set)

#### Ethereum Scripting
  - Turing complete(i.e. has jumps)

#### Ethereum Solidity
  - **statically-typed** higher level language
  - Parity Substrate: build own chain

### Consensus

- provides **total ordering of transactions**
- goal:
  - what validity proof to use  
  - reduce cost of storage(?)

Example:
 - **proof-of-work:** link to a hard computational problem(e.g. x leading zeros)
 - **proof-of-stake:**  creator of the next block is chosen via various combinations of random selection and wealth or age
    - each node has something to lose if they cheat the systems
 - **proof-of-authority:** previously selected nodes act as masters
 - **proof-of-space:** allocating space and proving it against some challenges

### Transaction Economics

- **Finite computational power:** gas limit per transactions
- **Finite block size:** gas price
- **Governance:** e.g. bitcoin block size debate, who does decide updates
    - solutions:
       - **hard forks:** a change in the rule set
       - **soft forks:** kind of a backwards-compatible change

### Main problems

- **Global Isolation:** inter-chain communication
- **Usability(scalability)**
- **Governance**

- Solutions:
  - domainchains - i.e. specialized chains
  - interconnectivity
  - WASM-Based chains - i.e. that use WebAssembly
