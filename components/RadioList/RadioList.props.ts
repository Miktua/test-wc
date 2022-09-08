import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";
import { TRadioValue } from "./index";

export interface RadioListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selected: TRadioValue | null;
  setSelected: (item: TRadioValue) => void;
  values: TRadioValue[];
  name: string;
  title: string;
  size: "sm" | "md";
  color: "white" | "gold";
  className?: string;
}
