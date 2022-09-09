import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LanguageProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}
