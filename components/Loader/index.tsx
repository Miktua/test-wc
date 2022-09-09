import React from "react";
import classnames from "classnames";
import styles from "./Loader.module.scss";
import { LoaderProps } from "./Loader.props";

function Loader({
  dataLoadingStatus,
  className,
  ...props
}: LoaderProps): JSX.Element {
  return (
    <div
      className={classnames(styles.root, {
        [styles.hidden]:
          dataLoadingStatus === "LOADED" ||
          dataLoadingStatus === "ERROR" ||
          dataLoadingStatus === null,
      })}
      {...props}
    >
      <div className={styles.dots} />
    </div>
  );
}

export default Loader;
