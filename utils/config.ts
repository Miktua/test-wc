import { AbiItem } from "web3-utils";
import mintAbi from "../abi/abi.json";

export const NET_ID = 4;
export const CHAIN_ID = "0x4";
export const PROVIDER_ETH =
  "https://rinkeby.infura.io/v3/66464a5382084773b10e288211f7c10e";
export const baseURL = "https://backend.do.bykollab.com";

export const NETWORKS = {
  "4": PROVIDER_ETH,
};

export const CONTRACTS = {
  MINT: {
    abi: mintAbi as AbiItem[],
    address: "0x1B9C9d4eD506a89d67e1Ccade7E0F8dcffE36679",
  },
};
