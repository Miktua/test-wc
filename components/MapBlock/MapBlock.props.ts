import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MapBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
}
