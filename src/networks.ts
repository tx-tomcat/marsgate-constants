// Chain names and IDs.
export const TESTNET_SEPOLIA_CHAIN_IDs = {

};
export const DEVNET_CHAIN_IDs = {
  XRPL_EVM_SIDECHAIN : 1440002,
} 

export const TESTNET_CHAIN_IDs = {
  ...TESTNET_SEPOLIA_CHAIN_IDs,
} as const;

export const MAINNET_CHAIN_IDs = {

};

export const CHAIN_IDs = {
  ...DEVNET_CHAIN_IDs,
  ...MAINNET_CHAIN_IDs,
  ...TESTNET_CHAIN_IDs,
};

export enum ChainFamily {

  XRPL
};

interface PublicNetwork {
  name: string;
  nativeToken: string;
  blockExplorer: string;
  family?: ChainFamily;
}

const { XRPL } = ChainFamily;
export const PRODUCTION_NETWORKS: { [chainId: number]: PublicNetwork } = {
  [CHAIN_IDs.XRPL_EVM_SIDECHAIN]: {
    name: "XRPL EVM Sidechain",
    family: XRPL,
    nativeToken: "XRP",
    blockExplorer: "https://explorer.xrplevm.org/",
  },

};

export const TEST_NETWORKS: { [chainId: number]: PublicNetwork } = {

};

export const PUBLIC_NETWORKS = {
  ...PRODUCTION_NETWORKS,
  ...TEST_NETWORKS,
};
