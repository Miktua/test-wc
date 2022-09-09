import { AbiItem } from "web3-utils";
import mintAbi from "../abi/abi.json";

export const NET_ID = 5;
export const CHAIN_ID = "0x5";
export const PROVIDER_ETH =
  "https://goerli.infura.io/v3/66464a5382084773b10e288211f7c10e";
export const baseURL = "https://backend.do.bykollab.com";

export const NETWORKS = {
  "5": PROVIDER_ETH,
};

export const CONTRACTS = {
  MINT: {
    abi: mintAbi as AbiItem[],
    address: "0x1524ba7e794eeD7249fA993b33B30C8A1619e42A",
  },
};
