import { BigNumber } from "ethers";
import BN from "bignumber.js";
import numeral from "numeral";
import axios from "axios";
import { fromWei } from "web3-utils";

export function toBNJS(val: BigNumber | number | string) {
  return new BN(val.toString());
}

export function fd(val: number | string | BN) {
  if (!val) return "";
  return numeral(val?.toString()).format("0,0[.][000000000000000000]");
}

BN.config({ EXPONENTIAL_AT: 100 });

export const isServer = typeof window === "undefined";

export const addressSlice = (address: string | undefined) => {
  if (!address) return "0000...0000";
  return (
    address.slice(0, 4) +
    "..." +
    address.slice(address.length - 4, address.length)
  );
};

export const convertBNBtoUSD = async (value: any) => {
  if (!value || !Number(value)) return "";
  else {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
    );
    console.log(res.data, "res data");
    const price = res.data.binancecoin.usd;
    return value * price;
  }
};

export const USDBNBpair = async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
  );
  return Number(res.data.binancecoin.usd);
};

export const weiToTokens = (price: string | number, decimals = 2): string => {
  BN.config({ DECIMAL_PLACES: decimals });

  const initialPrice = new BN(price).toString();

  return new BN(fromWei(initialPrice), 10).toString();
};

export type IDataLoadingStatus = "LOADING" | "LOADED" | "ERROR" | null;
