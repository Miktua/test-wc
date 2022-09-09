import React from "react";
import classnames from "classnames";
import { Link as NavLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useSwiper } from "swiper/react";
import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.props";

function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  const { t } = useTranslation();
  const swiper = useSwiper();

  return (
    <ul className={classnames(styles.root, className)} {...props}>
      <li className={styles.menuItem}>
        <button className={styles.link} type="button">
          {t("header::main")}
        </button>
      </li>
      <li className={styles.menuItem}>
        <button
          onClick={() => swiper.slideTo(1)}
          className={styles.link}
          type="button"
        >
          {t("header::map")}
        </button>
      </li>
      <li className={styles.menuItem}>
        <button
          className={styles.link}
          onClick={() => swiper.slideTo(2)}
          type="button"
        >
          {t("header::contacts")}
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
