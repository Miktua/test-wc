import React, { useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "inversify-react";
import { RootStore } from "../stores/RootStore";
import { ModalsContainer } from "../modals";
import Layout from "../layout/Layout";

const rootStore = new RootStore();
const { container } = rootStore;

function MyApp({ Component, pageProps }: AppProps) {
  // try to reconnect to web3
  useEffect(() => {
    rootStore.walletStore.tryReconnect();
  }, []);

  return (
    <Provider container={container}>
      {React.createElement(Component, { ...pageProps })}
      <ModalsContainer />
    </Provider>
  );
}

export default MyApp;
