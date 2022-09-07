import React from "react";
import classnames from "classnames";
import styles from "./HeroBlock.module.scss";
import { HeroBlockProps } from "./HeroBlock.props";
import Header from "../../layout/Header";
import ArrowDownIcon from "../../public/images/icons/arrowDown.svg";

function HeroBlock({ className, ...props }: HeroBlockProps): JSX.Element {
  return (
    <section className={classnames(styles.root, className)} {...props}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>RÍDNE MISTO</h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            Settlement by&nbsp;modern humans in&nbsp;Ukraine and its vicinity
            dates back to&nbsp;32,000&nbsp;BC, with evidence of&nbsp;the
            Gravettian culture in&nbsp;the Crimean Mountains.[28][29]
            By&nbsp;4,500&nbsp;BC, the Neolithic Cucuteni&mdash;Trypillia
            culture was flourishing in&nbsp;wide areas of&nbsp;modern Ukraine,
            including Trypillia and the entire Dnieper-Dniester region. Ukraine
            is&nbsp;also considered to&nbsp;be&nbsp;the likely location
            of&nbsp;the first domestication of&nbsp;the horse.[30][31][32][33]
            During the Iron Age, the land was inhabited by&nbsp;Cimmerians,
            Scythians, and Sarmatians.
          </p>
          <small className={styles.caption}>
            Made by the
            <br />
            Another Dev (2022)
          </small>
        </div>
        <button className={styles.nextSlideButton} type="button">
          <ArrowDownIcon />
          <span className="visually-hidden">Next slide</span>
        </button>
      </div>
    </section>
  );
}

export default HeroBlock;
