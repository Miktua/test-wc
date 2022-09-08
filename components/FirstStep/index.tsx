import React, { useState } from "react";
import classnames from "classnames";
import Image from "next/image";
import styles from "./FirstStep.module.scss";
import { FirstStepProps } from "./FirstStep.props";
import { Button } from "../index";
import EthIcon from "../../public/images/icons/eth.svg";

function FirstStep({
  selectedCity,
  className,
  ...props
}: FirstStepProps): JSX.Element {
  const [price, setPrice] = useState<number | undefined>();
  return (
    <div className={classnames(styles.root, className)} {...props}>
      <Image
        className={styles.nftImage}
        src="/images/nft.png"
        width="751px"
        height="368px"
        layout="fixed"
      />
      <h3 className={styles.cityTitle}>Independent {selectedCity?.title}</h3>
      <p className={styles.description}>
        Київ – серце України. Величне місто, де сама історія переказує вам свої
        літописи. З часів, коли наприкінці V - початку VI ст. нашої ери три
        брати Кий, Щек і Хорив та їх сестра Либідь{" "}
      </p>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="price" id="price">
          Price
        </label>
        <div className={styles.inputContainer}>
          <EthIcon className={styles.ethIcon} />
          <input
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
        <Button>Buy</Button>
      </form>
    </div>
  );
}

export default FirstStep;
