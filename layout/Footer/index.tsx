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
              <a href="https://adev.co/#footer" className={styles.link}>
                Contacts
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="https://calendly.com/another-dev"
                className={styles.link}
              >
                FAQs
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.menuBlock}>
          <p className={styles.menuBlockTitle}>Company</p>
          <ul className={styles.nestedMenuList}>
            <li className={styles.menuItem}>
              <a href="https://adev.co/" className={styles.link}>
                About
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://adev.co/#projects" className={styles.link}>
                Projects
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.menuBlock}>
          <p className={styles.menuBlockTitle}>Join us</p>
          <ul className={styles.nestedMenuList}>
            <li className={styles.menuItem}>
              <a href="https://discord.gg/F5Wq6572" className={styles.link}>
                Discord
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://twitter.com/another_pif" className={styles.link}>
                Twitter
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
