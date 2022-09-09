import { AbiItem } from "web3-utils";
import mintAbi from "../abi/abi.json";

export const NET_ID = 1;
export const CHAIN_ID = "0x1";
export const PROVIDER_ETH =
  "https://mainnet.infura.io/v3/66464a5382084773b10e288211f7c10e";
export const baseURL = "https://backend.do.bykollab.com";

export const NETWORKS = {
  "1": PROVIDER_ETH,
};

export const CONTRACTS = {
  MINT: {
    abi: mintAbi as AbiItem[],
    address: "0x93de8C95a35Df940C3296ea4DB1b51fB7f7cb524",
  },
};
