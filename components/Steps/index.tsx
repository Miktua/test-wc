import React from "react";
import classnames from "classnames";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import styles from "./Steps.module.scss";
import { StepsProps } from "./Steps.props";
import { FirstStep, SecondStep, ThirdStep } from "../index";
import BackIcon from "../../public/images/icons/back.svg";
import { UserStore } from "../../stores/UserStore";

const Steps = observer(
  ({
    currentStep,
    selectedCity,
    className,
    ...props
  }: StepsProps): JSX.Element => {
    const userStore = useInjection(UserStore);

    const onBackClick = () => {
      userStore?.decStep();
    };

    return (
      <div
        className={classnames(styles.root, className, {
          [styles.fullScreen]: currentStep === 3,
        })}
        {...props}
      >
        <button
          onClick={onBackClick}
          className={styles.backButton}
          type="button"
        >
          <BackIcon className={styles.backIcon} />
          <span className="visually-hidden">Back</span>
        </button>
        {currentStep === 1 && <FirstStep selectedCity={selectedCity} />}
        {currentStep === 2 && <SecondStep />}
        {currentStep === 3 && <ThirdStep selectedCity={selectedCity} />}
      </div>
    );
  }
);

export default Steps;
