import React from "react";
import classnames from "classnames";
import styles from "./FundsList.module.scss";
import { FundsListProps } from "./FundsList.props";

function FundsList({
  title,
  funds,
  name,
  selectedFund,
  setSelected,
  className,
  ...props
}: FundsListProps): JSX.Element {
  return (
    <div className={classnames(styles.root, className)} {...props}>
      <p className={styles.actionTitle}>{title}</p>
      <ul className={styles.list}>
        {funds.map((fund) => (
          <li className={styles.item} key={fund.name}>
            <input
              className={classnames(styles.itemRadio, "visually-hidden")}
              id={fund.name}
              type="radio"
              name={name}
              checked={
                selectedFund?.name.toLowerCase() === fund.name.toLowerCase()
              }
              onChange={() => setSelected(fund)}
            />
            <label
              className={styles.itemLabel}
              htmlFor={fund.name}
              id={fund.name}
            >
              {fund.name}
            </label>
            <div className={styles.info}>
              <a href={fund.link}>{fund.link}</a>
              <p className={styles.description}>{fund.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FundsList;
