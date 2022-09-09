import React from "react";
import classnames from "classnames";
import styles from "./RadioList.module.scss";
import { RadioListProps } from "./RadioList.props";

export type TRadioValue = Record<"title" | "value", string>;

function RadioList({
  selected,
  setSelected,
  values,
  name,
  title,
  className,
  size,
  color,
  ...props
}: RadioListProps): JSX.Element {
  return (
    <div
      className={classnames(styles.root, className, {
        [styles.white]: color === "white",
        [styles.small]: size === "sm",
      })}
      {...props}
    >
      <p className={styles.actionTitle}>{title}</p>
      <ul className={styles.list}>
        {values.map((item) => (
          <li
            className={classnames(styles.item, {
              [styles.itemDisabled]: item?.value.toLowerCase() === "vinnytsia",
            })}
            key={item.value}
          >
            <input
              className={classnames(styles.itemRadio, "visually-hidden")}
              id={item.value}
              type="radio"
              name={name}
              checked={selected?.value === item.value}
              onChange={() => setSelected(item)}
              disabled={item?.value.toLowerCase() === "vinnytsia"}
              // onClick={() => setSelected(item)}
            />
            <label
              className={styles.itemLabel}
              htmlFor={item.value}
              id={item.value}
            >
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioList;
