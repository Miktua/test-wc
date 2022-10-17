import React from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useSwiper } from "swiper/react";
import styles from "./HeroBlock.module.scss";
import { HeroBlockProps } from "./HeroBlock.props";
import Header from "../../layout/Header";
import ArrowDownIcon from "../../public/images/icons/arrowDown.svg";

function HeroBlock({ className, ...props }: HeroBlockProps): JSX.Element {
  const { t } = useTranslation();
  const swiper = useSwiper();

  return (
    <section className={classnames(styles.root, className)} {...props}>
      <Header className={styles.header} />
      {/* <div className={styles.content}>
        <h1 className={styles.title}>RÍDNE MISTO</h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>{t("hero::text")}</p>
          <small className={styles.caption}>
            Made by the
            <br />
            Another Dev (2022)
          </small>
        </div>
        <button
          id="swiper-forward"
          className={styles.nextSlideButton}
          type="button"
          onClick={() => swiper.slideNext()}
        >
          <ArrowDownIcon />
          <span className="visually-hidden">Next slide</span>
        </button>
      </div> */}
    </section>
  );
}

export default HeroBlock;
