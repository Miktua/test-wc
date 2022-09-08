import React from "react";
import classnames from "classnames";
import Image from "next/image";
import styles from "./ThirdStep.module.scss";
import { ThirdStepProps } from "./ThirdStep.props";
import { Button } from "../index";

function ThirdStep({ className, ...props }: ThirdStepProps): JSX.Element {
  return (
    <div className={classnames(styles.root, className)} {...props}>
      <Image
        className={styles.nftImage}
        src="/images/nft.png"
        width="751px"
        height="368px"
        layout="fixed"
      />
      <h3 className={styles.cityTitle}>Independent City</h3>
      <Button className={styles.button}>Thanks for you support</Button>
    </div>
  );
}

export default ThirdStep;
