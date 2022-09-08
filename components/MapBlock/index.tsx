import React, { useState } from "react";
import classnames from "classnames";
import styles from "./MapBlock.module.scss";
import { MapBlockProps } from "./MapBlock.props";
import { RadioList, Steps } from "../index";

export type TCity = Record<"title" | "value", string>;
export type TSteps = 0 | 1 | 2 | 3;

function MapBlock({ className, ...props }: MapBlockProps): JSX.Element {
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

  const [selectedCity, setSelectedCity] = useState<TCity | null>(null);
  const [currentStep, setCurrentStep] = useState<TSteps>(1);

  return (
    <section className={classnames(styles.root, className)} {...props}>
      {selectedCity && (
        <Steps currentStep={currentStep} selectedCity={selectedCity} />
      )}

      <h2 className={styles.title}>MÁPA MÍST</h2>
      <div className={styles.content}>
        <RadioList
          selected={selectedCity}
          setSelected={setSelectedCity}
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

export default MapBlock;
