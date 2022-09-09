import React from "react";
import classnames from "classnames";
import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.props";
import LogoIcon from "../../public/images/icons/logo.svg";
import { useTranslation } from "react-i18next";

function Footer({ className, ...props }: FooterProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className={classnames(styles.root)} {...props}>
      <LogoIcon className={styles.logo} />
      <ul className={styles.footerMenu}>
        <li className={styles.menuBlock}>
          <p className={styles.menuBlockTitle}>{t("footer::support")}</p>
          <ul className={styles.nestedMenuList}>
            <li className={styles.menuItem}>
              <a href="https://adev.co/#footer" className={styles.link}>
                {t("footer::contacts")}
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
          <p className={styles.menuBlockTitle}>{t("footer::company")}</p>
          <ul className={styles.nestedMenuList}>
            <li className={styles.menuItem}>
              <a href="https://adev.co/" className={styles.link}>
                {t("footer::about")}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://adev.co/#projects" className={styles.link}>
                {t("footer::projects")}
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.menuBlock}>
          <p className={styles.menuBlockTitle}>{t("footer::join")}</p>
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
