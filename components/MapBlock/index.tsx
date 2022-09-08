import React from "react";
import classnames from "classnames";
import styles from "./MapBlock.module.scss";
import { MapBlockProps } from "./MapBlock.props";

function MapBlock({ className, ...props }: MapBlockProps): JSX.Element {
  const cities = [
    {
      title: "Vinnytsia",
      value: "vinnytsia",
    },
    {
      title: "Kiyv",
      value: "kiyv",
    },
    {
      title: "Donetsk",
      value: "donetsk",
    },
  ];

  return (
    <section className={classnames(styles.root, className)} {...props}>
      <h2 className={styles.title}>MÁPA MÍST</h2>
      <div className={styles.content}>
        <div className={styles.citySelect}>
          <p className={styles.actionTitle}>Select city location:</p>
          <ul className={styles.citiesList}>
            {cities.map((city) => (
              <li className={styles.city}>
                <input
                  className={classnames(styles.cityRadio, "visually-hidden")}
                  id={city.value}
                  type="radio"
                  name="city"
                />
                <label
                  className={styles.cityLabel}
                  htmlFor={city.value}
                  id={city.value}
                >
                  {city.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MapBlock;
