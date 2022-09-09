import React from "react";
import classnames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { toWei } from "web3-utils";
import { useTranslation } from "react-i18next";
import styles from "./SecondStep.module.scss";
import { SecondStepProps } from "./SecondStep.props";
import { Button, FundsList } from "../index";
import { UserStore } from "../../stores/UserStore";
import WalletStore from "../../stores/WalletStore";

export interface IFunds {
  kyiv: IFund[];
  donetsk: IFund[];
}

export type IFund = Record<"name" | "address" | "description" | "link", string>;

const SecondStep = observer(
  ({ className, ...props }: SecondStepProps): JSX.Element => {
    const userStore = useInjection(UserStore);
    const { t } = useTranslation();
    const walletStore = useInjection(WalletStore);

    const FUNDS: IFunds = {
      kyiv: [
        {
          name: t("funds::childrensStories::title"),
          address: "0xe481387CA21AeA113180a184d14B64D804027deb",
          description: t("funds::childrensStories::description"),
          link: "https://voices.org.ua/en/",
        },
        {
          name: t("funds::hospitallers::title"),
          address: "0x5353c7cCDDD1C8EB4341f0EE60927E73f89F4C9c",
          description: t("funds::hospitallers::description"),
          link: "https://www.hospitallers.life/needs-hospitallers",
        },
        {
          name: t("funds::comeBackAlive::title"),
          address: "0xa1b1bbB8070Df2450810b8eB2425D543cfCeF79b",
          description: t("funds::comeBackAlive::description"),
          link: "https://www.comebackalive.in.ua/donate",
        },
        {
          name: t("funds::serhiyPritulaFoundation::title"),
          address: "0xfc0b52E020223c98a546F814cdA6d7872D74b386",
          description: t("funds::serhiyPritulaFoundation::description"),
          link: "https://prytulafoundation.org/en/home/support_page#Crypth",
        },
      ],
      donetsk: [
        {
          name: t("funds::tbilisiVolunteers::title"),
          address: "0x7e951492c5cf18bb40a03a6077fa480f20e0b80d",
          description: t("funds::tbilisiVolunteers::description"),
          link: "https://volunteerstbilisi.com/",
        },
        {
          name: t("funds::hospitallers::title"),
          address: "0x5353c7cCDDD1C8EB4341f0EE60927E73f89F4C9c",
          description: t("funds::hospitallers::description"),
          link: "https://www.hospitallers.life/needs-hospitallers",
        },
        {
          name: t("funds::comeBackAlive::title"),
          address: "0xa1b1bbB8070Df2450810b8eB2425D543cfCeF79b",
          description: t("funds::comeBackAlive::description"),
          link: "https://www.comebackalive.in.ua/donate",
        },
        {
          name: t("funds::serhiyPritulaFoundation::title"),
          address: "0xfc0b52E020223c98a546F814cdA6d7872D74b386",
          description: t("funds::serhiyPritulaFoundation::description"),
          link: "https://prytulafoundation.org/en/home/support_page#Crypth",
        },
      ],
    };

    const onFundSelect = (fund: IFund) => {
      userStore?.setFund(fund);
    };

    const onBuyClick = () => {
      if (!walletStore?.user?.wallet || !userStore?.price) {
        return;
      }

      walletStore?.mint?.methods
        .mint("2", "0xa1b1bbB8070Df2450810b8eB2425D543cfCeF79b")
        .send({
          from: walletStore.user.wallet,
          value: toWei(userStore.price.toString()),
        });
      userStore?.incStep();
    };

    return (
      <div className={classnames(styles.root, className)} {...props}>
        {userStore?.selectedCity && (
          <FundsList
            className={styles.radioList}
            title={t("step2::title")}
            funds={FUNDS[userStore.selectedCity.value as keyof IFunds]}
            name="funds"
            selectedFund={userStore.selectedFund}
            setSelected={(fund: IFund) => onFundSelect(fund)}
          />
        )}
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
