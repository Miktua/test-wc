import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TCity, TSteps } from "../MapBlock";

export interface StepsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentStep: number;
  selectedCity: TCity | null;
  className?: string;
}
