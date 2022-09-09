import React from "react";
import classnames from "classnames";
import Image from "next/image";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import styles from "./ThirdStep.module.scss";
import { ThirdStepProps } from "./ThirdStep.props";
import { Button } from "../index";
import { UserStore } from "../../stores/UserStore";
import { useTranslation } from "react-i18next";

const ThirdStep = observer(
  ({ selectedCity, className, ...props }: ThirdStepProps): JSX.Element => {
    const userStore = useInjection(UserStore);
    const { t } = useTranslation();

    const onButtonClick = () => {
      userStore?.setStep(0);
      userStore?.setCity(null);
      userStore?.setFund(null);
    };
    return (
      <div className={classnames(styles.root, className)} {...props}>
        <Image
          className={styles.nftImage}
          src="/images/nft.png"
          width="751px"
          height="368px"
          layout="fixed"
        />
        <h3 className={styles.cityTitle}>
          {selectedCity?.value && selectedCity.value === "kiyv"
            ? t("step1KYiv::title")
            : t("step1Donetsk::title")}
        </h3>
        <Button onClick={onButtonClick} className={styles.button}>
          {t("thanks")}
        </Button>
      </div>
    );
  }
);

export default ThirdStep;
