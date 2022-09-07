import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ConnectWalletProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}
