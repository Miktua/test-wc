import React from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

function Button({
  children,
  type = "button",
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classnames(styles.root, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
