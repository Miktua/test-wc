import React, { useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "inversify-react";
import { RootStore } from "../stores/RootStore";
import { ModalsContainer } from "../modals";
import "../i18n";
import { chains, providers } from "@web3modal/ethereum";
import { ConfigOptions, Web3Modal } from "@web3modal/react";

const rootStore = new RootStore();
const { container } = rootStore;

const web3ModalConfig: ConfigOptions = {
  projectId: '8bf88f6e0ec2fd82406f18cea27c4004',
  theme: 'light',
  accentColor: 'purple',
  ethereum: {
    appName: 'web3Modal',
    chains: [chains.goerli],
    providers: [providers.infuraProvider({apiKey:'df0ea339b96e4b0f80f832c00d086917'})],
    autoConnect: true
  },

}

function MyApp({ Component, pageProps }: AppProps) {
  // try to reconnect to web3
  useEffect(() => {
    rootStore.walletStore.tryReconnect();
  }, []);

  return (
    <>
    <Provider container={container}>
      {React.createElement(Component, { ...pageProps })}
      <ModalsContainer />
    </Provider>
      <Web3Modal config={web3ModalConfig} />
      </>
  );
}

export default MyApp;
