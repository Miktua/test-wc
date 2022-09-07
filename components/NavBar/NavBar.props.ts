import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NavBarProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  className?: string;
}
