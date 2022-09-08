import React, { useState } from "react";
import classnames from "classnames";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import styles from "./MapBlock.module.scss";
import { MapBlockProps } from "./MapBlock.props";
import { RadioList, Steps } from "../index";
import { UserStore } from "../../stores/UserStore";

export type TCity = Record<"title" | "value", string>;
export type TSteps = 0 | 1 | 2 | 3;

const cities: TCity[] = [
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

const MapBlock = observer(
  ({ className, ...props }: MapBlockProps): JSX.Element => {
    const userStore = useInjection(UserStore);

    const onCitySelect = (city: TCity) => {
      userStore?.setCity(city);
      userStore?.incStep();
    };

    return (
      <section className={classnames(styles.root, className)} {...props}>
        {userStore?.currentStep !== 0 && (
          <Steps
            currentStep={userStore?.currentStep}
            selectedCity={userStore?.selectedCity}
          />
        )}

        {userStore?.currentStep === 0 && (
          <h2 className={styles.title}>MÁPA MÍST</h2>
        )}
        <div className={styles.content}>
          <RadioList
            selected={userStore?.selectedCity}
            setSelected={(city: TCity) => onCitySelect(city)}
            values={cities}
            name="city"
            title="Select city location:"
            size="md"
            color="gold"
          />
        </div>
      </section>
    );
  }
);

export default MapBlock;
