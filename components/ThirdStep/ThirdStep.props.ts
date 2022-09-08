import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TCity } from "../MapBlock";

export interface ThirdStepProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selectedCity: TCity | null;
  className?: string;
}
