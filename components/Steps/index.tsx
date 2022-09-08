import React from "react";
import classnames from "classnames";
import styles from "./Steps.module.scss";
import { StepsProps } from "./Steps.props";
import { FirstStep, SecondStep, ThirdStep } from "../index";
import BackIcon from "../../public/images/icons/back.svg";

function Steps({
  currentStep,
  selectedCity,
  className,
  ...props
}: StepsProps): JSX.Element {
  return (
    <div
      className={classnames(styles.root, className, {
        [styles.fullScreen]: currentStep === 3,
      })}
      {...props}
    >
      <button className={styles.backButton} type="button">
        <BackIcon className={styles.backIcon} />
        <span className="visually-hidden">Back</span>
      </button>
      {currentStep === 1 && <FirstStep selectedCity={selectedCity} />}
      {currentStep === 2 && <SecondStep />}
      {currentStep === 3 && <ThirdStep />}
    </div>
  );
}

export default Steps;
