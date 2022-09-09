import React, { useState } from "react";
import classnames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import styles from "./SecondStep.module.scss";
import { SecondStepProps } from "./SecondStep.props";
import { Button, RadioList } from "../index";
import { UserStore } from "../../stores/UserStore";
import { useTranslation } from "react-i18next";

export type TFund = Record<"title" | "value", string>;

const SecondStep = observer(
  ({ className, ...props }: SecondStepProps): JSX.Element => {
    const userStore = useInjection(UserStore);
    const { t } = useTranslation();

    const funds: TFund[] = [
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

    const onFundSelect = (fund: TFund) => {
      userStore?.setFund(fund);
    };

    const onBuyClick = () => {
      userStore?.incStep();
    };

    return (
      <div className={classnames(styles.root, className)} {...props}>
        <RadioList
          className={styles.radioList}
          color="white"
          size="sm"
          selected={userStore?.selectedFund}
          setSelected={onFundSelect}
          name="fund"
          title={t("step2::title")}
          values={funds}
        />
        <Button
          disabled={userStore?.selectedFund === null}
          onClick={onBuyClick}
          className={styles.button}
        >
          {t("step2::donate")}
        </Button>
      </div>
    );
  }
);

export default SecondStep;
