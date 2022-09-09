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

const ConnectWallet = observer(
  ({ className, ...props }: ConnectWalletProps): JSX.Element => {
    const walletStore = useInjection(WalletStore);
    const { t } = useTranslation();

    const onConnectWalletClick = () => {
      walletStore.connectWallet();
    };

    const onDisconnectClick = () => {
      walletStore?.disconnect();
    };

    return (
      <>
        {!walletStore?.user?.wallet ? (
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
            {addressSlice(walletStore.user.wallet)}
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
