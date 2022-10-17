import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";
import LogoIcon from "../../public/images/icons/logo.svg";
import { ConnectWallet, Language, NavBar } from "../../components";

function Header({ className, ...props }: HeaderProps): JSX.Element {
  return (
    <header >
      {/* <Link href="/">
        <a className={styles.logoLink}>
          <LogoIcon className={styles.logoIcon} />
          <span className="visually-hidden">Test</span>
        </a>
      </Link>
      <NavBar className={styles.navBar} /> */}
      <div className={styles.buttons}>
        <ConnectWallet />
        {/* <Language /> */}
      </div>
    </header>
  );
}

export default Header;
