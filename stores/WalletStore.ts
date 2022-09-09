import {
  observable,
  action,
  makeObservable,
  computed,
  runInAction,
} from "mobx";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { fromWei } from "web3-utils";
import { BaseProvider } from "@metamask/providers";
import type { WebsocketProvider } from "web3-core";
import { getAuthToken, getAuthTokenTTL } from "../service";
import { injectable } from "inversify";
import "reflect-metadata";
import {
  CHAIN_ID,
  CONTRACTS,
  NET_ID,
  NETWORKS,
  PROVIDER_ETH,
} from "../utils/config";
import Web3Modal from "web3modal";
import { RootStore } from "./RootStore";
import { toast } from "react-toastify";
import { Contract } from "web3-eth-contract";

@injectable()
export class Web3Store {
  @observable user: { wallet: string | undefined } = {
    wallet: undefined,
  };
  @observable web3: Web3 | null = new Web3(PROVIDER_ETH);
  @observable commonWeb3: Web3 = new Web3(PROVIDER_ETH);
  @observable provider: BaseProvider | null = null;
  @observable walletConnectProvider: WalletConnectProvider | null = null;
  @observable web3infura: Web3;
  @observable mint: Contract | null = null;
  @observable connected: boolean = false;
  @observable balance: string = "0";
  @observable web3Modal: Web3Modal | null = null;
  @observable isConnecting: boolean = false;
  @observable providerChainId: string | null | undefined = undefined;

  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
    // TODO change this to dynamic value
    this.web3infura = new Web3();
  }

  @action connectWallet = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: NETWORKS,
        },
      },
    };

    // runInAction(() => (this.isRelogining = true));

    try {
      if (!this.web3Modal) {
        runInAction(() => {
          this.web3Modal = new Web3Modal({
            cacheProvider: false, // optional
            providerOptions, // required
            disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera
          });
        });
      }

      if (!this.web3Modal) return await this.disconnect();

      try {
        // check for injected wallet and autologin
        const isInjected = window?.ethereum;
        const autologin = localStorage.getItem("autologin");
        // connect to wallet
        const provider =
          isInjected && autologin
            ? await this.web3Modal.connectTo("injected")
            : await this.web3Modal.connect();
        runInAction(() => {
          this.provider = provider;
        });

        // wallet
        const web3 = new Web3(
          this.provider as BaseProvider &
            WebsocketProvider &
            WalletConnectProvider
        );
        const accounts: string[] = await web3.eth.getAccounts();
        const [wallet] = accounts;
        this.provider &&
          this.provider.on("chainChanged", this.onNetworkChanged);
        this.provider &&
          this.provider.on("accountsChanged", this.onAccountChanged);

        localStorage.setItem("autologin", "true");

        const balance = await web3.eth.getBalance(wallet);
        const frWei = fromWei(balance);

        if (
          Number(provider.chainId) !== NET_ID &&
          provider.chainId !== CHAIN_ID
        ) {
          // toast.error('Please change network to '+NET_NAME+' in your wallet',{autoClose:false})
        } else {
          toast.dismiss();
        }

        runInAction(() => {
          this.web3 = web3;
          this.user = {
            ...this.user,
            wallet,
          };
          this.providerChainId = this.provider?.chainId;
          this.balance = Number(frWei).toFixed(3);

          this.mint = new web3.eth.Contract(
            CONTRACTS.MINT.abi,
            CONTRACTS.MINT.address
          );

          // this.isRelogining = false;
          this.connected = true;

          if (!provider?.isMetaMask) {
            this.walletConnectProvider = provider;
          }
        });
      } catch (error) {
        this.disconnect();
        console.error("connection error", error);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  @action disconnect = async () => {
    try {
      this.web3Modal && this.web3Modal.clearCachedProvider();
      this.walletConnectProvider && this?.walletConnectProvider?.stop(),
        localStorage.removeItem("autologin");
      // localStorage.removeItem('walletconnect');
    } catch (error) {
      console.error("error disconnect: ", error);
    }
    runInAction(() => {
      this.isConnecting = false;
      this.web3Modal = null;
      this.web3 = new Web3(PROVIDER_ETH);
      this.connected = false;
      this.user.wallet = undefined;
    });
  };

  @action onAccountChanged = async (newAccounts: unknown) => {
    if (newAccounts instanceof Array) {
      await this.setWallet(newAccounts[0]);
    }
    const balance =
      this.user.wallet && (await this.web3?.eth.getBalance(this.user.wallet));
    runInAction(() => {
      if (balance) this.balance = fromWei(balance);
      this.isConnecting = false;
    });
  };

  @action onNetworkChanged = async (net: string | number) => {
    const balance =
      this.user.wallet && (await this.web3?.eth.getBalance(this.user.wallet));
    runInAction(() => {
      this.providerChainId = net.toString();
      if (balance) this.balance = fromWei(balance);
      this.isConnecting = false;
    });
  };

  @action resetWallet = () => {
    if (this.web3Modal) {
      this.web3Modal.clearCachedProvider();
      localStorage.clear();
    }
    runInAction(() => (this.connected = false));
  };

  @action.bound
  async setWallet(w: string | undefined) {
    runInAction(
      () =>
        (this.user = {
          wallet: w,
        })
    );
  }

  @action tryReconnect = async () => {
    runInAction(() => (this.web3 = new Web3(PROVIDER_ETH)));
    if (localStorage.getItem("autologin")) {
      this.connectWallet();
    }
  };

  // @action login = async () => {
  //     await this.connectWallet()
  //     const jwtTTL = getAuthTokenTTL();
  //     if (jwtTTL) {
  //         const isTokenExpired = parseInt(jwtTTL) < Date.now();
  //         if (!getAuthToken() || isTokenExpired) {
  //             await this.sign()
  //         }
  //         runInAction(()=>this.connected = true)
  //     } else {
  //         const web3 = this.web3;
  //         if (web3) {
  //             await this.sign()
  //         }
  //     }
  // }

  // @action sign = async () => {
  //     if (this.user.wallet && this.web3) {
  //         const res = await login(this.user.wallet, this.web3)
  //         runInAction(()=>this.connected = true)
  //         return res
  //     }
  // }

  @computed
  get isLoggedIn() {
    const jwtTTL = getAuthTokenTTL();
    const isTokenExpired = jwtTTL && parseInt(jwtTTL) < Date.now();
    return (
      Boolean(this.user.wallet) && Boolean(getAuthToken()) && !isTokenExpired
    );
  }
}

export default Web3Store;
