import React from "react";
import classnames from "classnames";
import Link from "next/link";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";
import LogoIcon from "../../public/images/icons/logo.svg";
import { ConnectWallet, NavBar } from "../../components";

function Header({ className, ...props }: HeaderProps): JSX.Element {
  return (
    <header className={classnames(styles.root)} {...props}>
      <Link href="/">
        <a className={styles.logoLink}>
          <LogoIcon className={styles.logoIcon} />
          <span className="visually-hidden">Ridne Misto</span>
        </a>
      </Link>
      <NavBar className={styles.navBar} />
      <ConnectWallet />
    </header>
  );
}

export default Header;
