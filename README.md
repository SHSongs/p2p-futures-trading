Som P2P Futures Trading Market
==================


Som P2P Futures Trading Market is decentralized form of trading futures contracts directly between individuals or entities without the need for intermediaries such as traditional exchanges or broker.

#### Demo Video
https://github.com/SHSongs/som-p2p-futures-trading/assets/48788892/18eb5bb9-8323-4994-a0ab-5472aeec3f10



Details
=========

P2P Futures Trading has the potential to provide stable income to small-scale farmers for several reasons:

1. Price Stability: Through P2P Futures Trading, farmers can enter into futures contracts for their agricultural commodities at a fixed price. This allows them to secure stability amidst price volatility. The example of "Onion prices plummet by 80%, farmers abandon their fields" highlights the challenges faced by farmers due to market volatility. Som P2P Futures Trading Market can address these issues by offering a platform where farmers and other market participants can enter into futures contracts to hedge against price fluctuations.

2. Elimination of Intermediaries and Fees: P2P Futures Trading operates without intermediaries or middlemen. This empowers farmers to sell their produce at higher prices. By bypassing traditional exchanges or brokers, they can save on transaction fees and brokerage costs.

3. Market Accessibility: P2P Futures Trading provides access to individuals worldwide, enabling small-scale farmers to participate regardless of their geographical location. This breaks down barriers of geography, economics, and technology, opening up opportunities for farmers to tap into global markets. This diversification of income sources and market access enhances stability.

4. Transparency and Trust: P2P Futures Trading leverages blockchain technology, where transactions and contract details are recorded on a distributed ledger. This enhances transparency, prevents manipulation or fraudulent activities, and fosters trust among participants. Such transparency contributes to a more secure trading environment.






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
