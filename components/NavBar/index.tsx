import React from "react";
import classnames from "classnames";
import { Link as NavLink } from "react-scroll";
import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.props";

function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  return (
    <ul className={classnames(styles.root, className)} {...props}>
      <li className={styles.menuItem}>
        <NavLink className={styles.link} to="main" spy smooth duration={500}>
          Main
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink className={styles.link} to="map" spy smooth duration={500}>
          Map
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          className={styles.link}
          to="contacts"
          spy
          smooth
          duration={500}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
