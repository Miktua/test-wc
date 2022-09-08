import React, { useState } from "react";
import classnames from "classnames";
import styles from "./SecondStep.module.scss";
import { SecondStepProps } from "./SecondStep.props";
import { Button, RadioList } from "../index";
import { TRadioValue } from "../RadioList";

function SecondStep({ className, ...props }: SecondStepProps): JSX.Element {
  const [fund, setFund] = useState<TRadioValue | null>(null);
  const funds = [
    {
      title: "First",
      value: "first",
    },
    {
      title: "Second",
      value: "second",
    },
    {
      title: "Third",
      value: "third",
    },
    {
      title: "Fourth",
      value: "fourth",
    },
  ];

  return (
    <div className={classnames(styles.root, className)} {...props}>
      <RadioList
        className={styles.radioList}
        color="white"
        size="sm"
        selected={fund}
        setSelected={setFund}
        name="fund"
        title="Choose which fund the money will go to:"
        values={funds}
      />
      <Button className={styles.button}>Go to Purchase</Button>
    </div>
  );
}

export default SecondStep;
