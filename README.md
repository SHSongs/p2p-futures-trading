Som P2P Futures Trading Market
==================


Som P2P Futures Trading Market is decentralized form of trading futures contracts directly between individuals or entities without the need for intermediaries such as traditional exchanges or broker.

#### Demo Video
[![Watch the video](https://github.com/SHSongs/som-p2p-futures-trading/assets/48788892/0fb2a080-ad20-460a-9756-ae64293f261e)]([https://youtu.be/vt5fpE0bzSY](https://drive.google.com/file/d/1y-Sn_Z-n85yLf2S3Kxw2sC294METnmNx/view?usp=sharing))


Details
=========

1. Som P2P Futures Trading Market can  enable greater transparency and security through the use of blockchain technology. Transactions and contract details are recorded on a distributed ledger, providing a tamper-proof record of all trades and enhancing trust between participants.


2. Allowing individuals from anywhere in the world to participate without the need for a traditional brokerage account. It can also offer lower transaction costs since there are no intermediaries involved, reducing fees and eliminating the need for clearinghouses.


3. In traditional futures trading, participants trade futures contracts on centralized exchanges, which act as intermediaries, matching buyers and sellers and facilitating the trading process. However, P2P futures trading eliminates the need for intermediaries by leveraging blockchain technology and smart contracts.





Quick Start
===========

If you haven't installed dependencies during setup:

    npm install


Build and deploy your contract to TestNet with a temporary dev account:

    npm run deploy

Test your contract:

    npm test

If you have a frontend, run `npm start`. This will run a dev server.


Exploring The Code
==================

1. The smart-contract code lives in the `/contract` folder. See the README there for
   more info. In blockchain apps the smart contract is the "backend" of your app.
2. The frontend code lives in the `/frontend` folder. `/frontend/index.html` is a great
   place to start exploring. Note that it loads in `/frontend/index.js`,
   this is your entrypoint to learn how the frontend connects to the NEAR blockchain.
3. Test your contract: `npm test`, this will run the tests in `integration-tests` directory.


Deploy
======

Every smart contract in NEAR has its [own associated account][NEAR accounts]. 
When you run `npm run deploy`, your smart contract gets deployed to the live NEAR TestNet with a temporary dev account.
When you're ready to make it permanent, here's how:
