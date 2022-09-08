import React from "react";
import classnames from "classnames";
import Image from "next/image";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import styles from "./ThirdStep.module.scss";
import { ThirdStepProps } from "./ThirdStep.props";
import { Button } from "../index";
import { UserStore } from "../../stores/UserStore";

const ThirdStep = observer(
  ({ selectedCity, className, ...props }: ThirdStepProps): JSX.Element => {
    const userStore = useInjection(UserStore);
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
        <h3 className={styles.cityTitle}>Independent {selectedCity?.value}</h3>
        <Button onClick={onButtonClick} className={styles.button}>
          Thanks for you support
        </Button>
      </div>
    );
  }
);

export default ThirdStep;
