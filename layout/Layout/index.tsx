import React from "react";
import classnames from "classnames";
import Head from "next/head";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";

function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <div className={classnames(styles.root, className)} {...props}>
      <Head>
        <title>Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default Layout;
