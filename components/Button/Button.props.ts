import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "submit" | "button";
  disabled?: boolean;
  className?: string;
}
