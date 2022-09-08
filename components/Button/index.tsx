import React from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

function Button({ children, className, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={classnames(styles.root, className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
