import { CHAIN_IDs } from "./networks";

// Information for the supported tokens on each chain.
// NOTE: All addresses should be checksummed
export const TOKEN_SYMBOLS_MAP = {

  USDC: {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 18,
    addresses: {
      [CHAIN_IDs.XRPL_EVM_SIDECHAIN]: "0xFB3f9101C7cB845958b7649ab1d52F2a30ca4294",
    },
    coingeckoId: "usdc",
  },

};

// Hard-coded mapping of token symbols that should be treated as having equivalent
// prices. The right-hand side should map to a token symbol in TOKEN_SYMBOLS_MAP.
export const TOKEN_EQUIVALENCE_REMAPPING: { [symbol: string]: string } = {
  [TOKEN_SYMBOLS_MAP["USDC"].symbol]: TOKEN_SYMBOLS_MAP["USDC"].symbol,

};
