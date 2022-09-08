import { injectable } from "inversify";
import { makeObservable, observable } from "mobx";
import "reflect-metadata";
import { RootStore } from "./RootStore";
import { fetchProfile, IFetchProfileResponseData } from "../api/profile";
import { TCity, TSteps } from "../components/MapBlock";
import { TRadioValue } from "../components/RadioList";
import { TFund } from "../components/SecondStep";

@injectable()
export class UserStore {
  @observable user?: IFetchProfileResponseData | null = null;

  @observable currentStep: number = 0;

  @observable selectedCity: TCity | null = null;

  @observable price: number | undefined = undefined;

  @observable selectedFund: TFund | null = null;

  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }

  // get user data
  async getUser() {
    const { data } = await fetchProfile();
    // @ts-ignore
    this.user = data.user;
  }

  setStep(step: TSteps) {
    this.currentStep = step;
  }

  incStep() {
    if (this.currentStep !== 3) {
      this.currentStep += 1;
    }
  }

  decStep() {
    if (this.currentStep !== 0) {
      this.currentStep -= 1;
    }
  }

  setCity(city: TCity | null) {
    this.selectedCity = city;
  }

  setPrice(price: number | undefined) {
    this.price = price;
  }

  setFund(fund: TFund | null) {
    this.selectedFund = fund;
  }
}
