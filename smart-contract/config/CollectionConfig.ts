import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Cryptolabv3',
  tokenName: 'Cryptolab v3',
  tokenSymbol: 'CPTV',
  hiddenMetadataUri: 'ipfs://QmSUyfRdsHbYz4nCtEvR6aB7yXiXs3jMrBMx89FVX56Ur1/Hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.00005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.00007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xb3cDB2dF016AA7289f37FfC00f2d1fE242964985",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
