import React, { useState } from "react";
import classnames from "classnames";
import Image from "next/image";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import { useTranslation } from "react-i18next";
import styles from "./FirstStep.module.scss";
import { FirstStepProps } from "./FirstStep.props";
import { Button } from "../index";
import EthIcon from "../../public/images/icons/eth.svg";
import { UserStore } from "../../stores/UserStore";

interface IText {
  kyiv: {
    title: string;
    mint: string;
    text: string;
  };
  donetsk: {
    title: string;
    mint: string;
    text: string;
  };
}

const FirstStep = observer(
  ({ selectedCity, className, ...props }: FirstStepProps): JSX.Element => {
    const userStore = useInjection(UserStore);
    const { t } = useTranslation();

    const [price, setPrice] = useState<number | undefined>();

    const onPriceSubmit = () => {
      userStore?.setPrice(price);
      userStore?.incStep();
    };

    const TEXT: IText = {
      kyiv: {
        title: t("step1KYiv::title"),
        mint: t("step1KYiv::mint"),
        text: t("step1KYiv::text"),
      },
      donetsk: {
        title: t("step1Donetsk::title"),
        mint: t("step1Donetsk::mint"),
        text: t("step1Donetsk::text"),
      },
    };

    return (
      <div className={classnames(styles.root, className)} {...props}>
        <Image
          className={styles.nftImage}
          src="/images/nft.png"
          width="612px"
          height="300px"
          layout="intrinsic"
        />
        <h3 className={styles.cityTitle}>
          {selectedCity?.value &&
            TEXT[selectedCity?.value as keyof IText].title}
        </h3>
        <p className={styles.description}>
          {selectedCity?.value && TEXT[selectedCity?.value as keyof IText].text}
        </p>
        <form className={styles.form} onSubmit={onPriceSubmit}>
          <label className={styles.label} htmlFor="price" id="price">
            {t("price")}
          </label>
          <div className={styles.inputContainer}>
            <EthIcon className={styles.ethIcon} />
            <input
              required
              className={styles.input}
              value={price}
              type="number"
              placeholder="0.02+"
              min={0.02}
              name="price"
              id="price"
              onChange={(evt) => setPrice(Number(evt.currentTarget.value))}
              step={0.01}
            />
            <p className={styles.currency}>ETH</p>
          </div>
          <Button disabled={price === undefined} type="submit">
            {selectedCity?.value &&
              TEXT[selectedCity?.value as keyof IText].mint}
          </Button>
        </form>
      </div>
    );
  }
);

export default FirstStep;
