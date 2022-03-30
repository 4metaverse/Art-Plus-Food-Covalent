# Challenge

Covalent NFT Project

# Project name

Art Plus Food

# Description

Art Plus Food is an NFT platform where chefs and food creators can sell, buy and trade their recipes.
Users can browse, recipes, create them and mint them. If you are a creator you can set up a royalty or create a community to support your work.

Create, sell or collect Chef's recipes. Create Worldwide Cuisine recipes, Breakfasts, Cocktails, Pastry, Bakery, Gastronomy, Chef Clubs Membership, Traditional delicatessen everything in one platform.
How it works
Connect your wallet
Connect using Web 3.0 Technology by clicking on the top right corner button.

Add your Recipes
Mint your recipe or Membership token directly from your account, add it to a cookbook (collection), and define unlockable content.

Sell your NFTs
Choose the license, the royalties model, and put your recipes, membership, or products on the marketplace.



We believe that Art Plus Food will create a more strong relationship between the food creators and consumers.

### Website Demo

Website Link: [https://art-plus-food-covalent.netlify.app/](https://art-plus-food-covalent.netlify.app/)

### Video Demo

- https://youtu.be/_Wk8wXIQ9EI

Main Page ![Main Page](https://raw.githubusercontent.com/4metaverse/Art-Plus-Food-Covalent/main/home.png)

Marketplace ![Marketplace](https://raw.githubusercontent.com/4metaverse/Art-Plus-Food-Covalent/main/preview.png)

Chef NFTS Covalent![Chef NFTS](https://raw.githubusercontent.com/4metaverse/Art-Plus-Food-Covalent/main/covalent%20nfts.png)

Contract Stats Covalent![Contract Stats](https://raw.githubusercontent.com/4metaverse/Art-Plus-Food-Covalent/main/stats.png)

## Tools & Resources

Resources:

- [Covalent API](https://www.covalenthq.com/)

#### Covalent API Details

The endpoints API that currently used on this project

1. `Get Log Events By Contract Address` - to get log events like minted NFTs or sold NFTs items on the smart contract.
2. `Get All NFTs balance` - to get all the NFTs of a wallet address
3. `Get Nft External Metadata` - to get metadata for nft like the attributes and image

# How it's made

Art Plus Food application makes use of the following softwares:

- `Covalent API`for data retrieving, balances, history data and log events from contracts.

- `NFTStorage`for data storage on IPFS that generates a transation hash used to create an NFT of a photo.

- `textile/eth-storage`: facilitated a fast way to store matadata for Garden comunities such: names, loocations, description, images, wallet address, and more. It was perfect for Garden comunities problem case to save their needs on the textile storage.

- `NFTPort` smooth the path of minting and donating NFTs for Garden comunities. This is a win win situation for our Garden comunities because they don't have to pay to contribute or mint NFTs.

- `Pocket Portal` smooth the path of deploying and hussle of paying such a big transactions to deploy our Garden comunitie's contract to a node using the Rinkeby network.

* `Solidity` for the smart contract.

* `OpenZeppelin ERC721` we use the ERC721 template for a faster development of the PetGram smart contract.

* `HardHat` for local blockchain development.

* `Mumbai Network` the network that we deployed our dApp.

* `React Js, Material-ui, Web3` React Js for the frontend, Material-ui and Web3 to connect to blockchain.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.
