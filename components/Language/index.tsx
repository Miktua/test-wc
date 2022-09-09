import React, { useState } from "react";
import classnames from "classnames";
import i18n from "i18next";
import styles from "./Language.module.scss";
import { LanguageProps } from "./Language.props";
import EngIcon from "../../public/images/icons/eng.svg";
import UaIcon from "../../public/images/icons/ua.svg";

function Language({ className, ...props }: LanguageProps): JSX.Element {
  const [currentLang, setCurrentLang] = useState<"eng" | "ua">("eng");

  const changeLang = () => {
    if (currentLang === "eng") {
      setCurrentLang("ua");
      i18n.changeLanguage("ua");
    } else {
      setCurrentLang("eng");
      i18n.changeLanguage("eng");
    }
  };

  return (
    <button
      className={classnames(styles.root, className)}
      type="button"
      onClick={changeLang}
      {...props}
    >
      {currentLang === "eng" ? <EngIcon /> : <UaIcon />}
    </button>
  );
}

export default Language;
