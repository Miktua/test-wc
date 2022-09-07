import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeroBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
}
