import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IDataLoadingStatus } from "../../utils/utilities";

export interface LoaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dataLoadingStatus: IDataLoadingStatus;
  className?: string;
}
