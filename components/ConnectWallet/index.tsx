import React from "react";
import classnames from "classnames";
import styles from "./ConnectWallet.module.scss";
import { ConnectWalletProps } from "./ConnectWallet.props";

function ConnectWallet({
  className,
  ...props
}: ConnectWalletProps): JSX.Element {
  return (
    <button className={classnames(styles.root, className)} {...props}>
      Connect Wallet
    </button>
  );
}

export default ConnectWallet;
