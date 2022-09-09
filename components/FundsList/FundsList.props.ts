import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IFund } from "../SecondStep";
import { TRadioValue } from "../RadioList";

export interface FundsListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  funds: IFund[];
  name: string;
  selectedFund: IFund | null;
  setSelected: (item: IFund) => void;
  className?: string;
}
