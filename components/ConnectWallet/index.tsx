import React from "react";
import classnames from "classnames";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import styles from "./ConnectWallet.module.scss";
import { ConnectWalletProps } from "./ConnectWallet.props";
import WalletStore from "../../stores/WalletStore";
import { addressSlice } from "../../utils/helper";
import CloseIcon from "../../public/images/icons/closeBlack.svg";
import { useTranslation } from "react-i18next";
import { ConnectButton, useConnectModal, useProvider, useAccount, useDisconnect, useBalance, useContractRead, useContract, useContractWrite, useContractEvent, useSendTransaction, useTransaction, useSigner} from '@web3modal/react'

const ConnectWallet = observer(
  ({ className, ...props }: ConnectWalletProps): JSX.Element => {
    const walletStore = useInjection(WalletStore);
    const { t } = useTranslation();

    const { isOpen, open, close } = useConnectModal()
    const disconnect = useDisconnect()
    const provider = useProvider()
    const account = useAccount()
    const signer = useSigner()

    const balance = useBalance({addressOrName:account.address,formatUnits:'ether'})
  const wallet =  account.address
  const connected =  account.isConnected
  const connecting =  account.isConnecting
    const onConnectWalletClick = () => {
      open();
    };

    const onDisconnectClick = () => {
      walletStore.disconnect()
      disconnect();
    };

    return (
      <>
        {!connected ? (
          <button
            onClick={onConnectWalletClick}
            className={classnames(styles.root, className)}
            {...props}
            type="button"
          >
            {t("header::connectWallet")}
          </button>
        ) : (
          <div className={styles.connectedRoot}>
            {addressSlice(account.address)}
            <button
              onClick={onDisconnectClick}
              className={styles.connectedButton}
              type="button"
            >
              <CloseIcon class />
              <span className="visually-hidden">Disconnect</span>
            </button>
          </div>
        )}
      </>
    );
  }
);

export default ConnectWallet;
