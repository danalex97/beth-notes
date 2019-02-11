## Blockchain Introduction

- based on:    
  - *Blockchain for Social Impact - Stanford Business*
  - [this video](https://www.youtube.com/watch?v=bBC-nXj3Ng4)

### Blockchain Terminology

- **Bitcoin** - first decentralized digital currency
- **Blockchain** - digital, secure, public record book of transactions(a **ledger**)
- **ICO**
   - event in which a company issues **tokens**(digital currency)
   - supply of tokens is fixed, creating a demand for tokens that creates a priceable market
- **Types of tokens**
  - utility tokens: tokens that can pay for services
  - security tokens: represent equity shared
  - collectible tokens: represent scarce digital goods
- **Smart contract**
  - piece of code written into the blockchain
  - other applications can reference this code, allowing for automation(e.g. trigger events when conditions are met)


- **[Proof-of-work](https://youtu.be/bBC-nXj3Ng4?t=878)** - piece of data which is difficult (costly, time-consuming) to produce but easy for others to verify
- **[Mining](https://youtu.be/bBC-nXj3Ng4?t=1051)** - process in which new tokens are generated to pay people providing first the proof-of-work
- **[Average  block time](https://youtu.be/bBC-nXj3Ng4?t=1317)** - expected for a new block to be mined

### Workflow
  1. Someone requests a
transaction.
  2. The transaction is
broadcast to a
P2P network.
  3. The network uses known
algorithms to validate
the transaction.
  4. [Once verified, the
transaction is
bundled with other
transactions, creating
a new block of data.](https://youtu.be/bBC-nXj3Ng4?t=1396)
  5. Completed blocks are
linked to each other in the
order they’re completed,
forming a blockchain.

### Creating Trust
- **Identity**(who's who): via public-key cryptography
- **Ownership**(who owns what): via cryptographic hashing
  - each block has a fingerprint, making the data tamper-proof
- **Verification**(what's true): via distributed consensus
  - it is feasible for a group of people to publicly
verify that a transaction is true
  - [everybody trusts the longest chain](https://youtu.be/bBC-nXj3Ng4?t=1213)(trust provided by proof-of-work: providing a longer chain without majoritary computation power is not sustainable)

### Roots of Potential
- **Transparency** - anyone can see transaction history
  - e.g. potential impact: money can be tracked in areas like aid distribution
- **Immutability** - no tampering
  - e.g. potential impact: voter authentication and land title registration
- **Reduced counterparty risk** - eliminates intermediary, leading to lower cost
  - e.g. potential impact: money sent to disaster zones, eliminating intermediaries
- **Efficient identity provisioning** - public/private key pairs
  - e.g. potential impact: unbanked population
