import React from "react";
import classnames from "classnames";
import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.props";
import LogoIcon from "../../public/images/icons/logo.svg";

function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <footer className={classnames(styles.root)} {...props}>
      <LogoIcon className={styles.logo} />
      <ul className={styles.footerMenu}>
        <li className={styles.menuBlock}>
          <p className={styles.menuBlockTitle}>Support</p>
          <ul className={styles.nestedMenuList}>
            <li className={styles.menuItem}>
              <a className={styles.link}>Contacts</a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.link}>FAQs</a>
            </li>
          </ul>
        </li>
        <li className={styles.menuBlock}>
          <p className={styles.menuBlockTitle}>Company</p>
          <ul className={styles.nestedMenuList}>
            <li className={styles.menuItem}>
              <a className={styles.link}>About</a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.link}>Templates</a>
            </li>
          </ul>
        </li>
        <li className={styles.menuBlock}>
          <p className={styles.menuBlockTitle}>Join us</p>
          <ul className={styles.nestedMenuList}>
            <li className={styles.menuItem}>
              <a className={styles.link}>Discord</a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.link}>Twitter</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
