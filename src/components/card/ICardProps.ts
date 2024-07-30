import { ReactNode } from "react";
import { IHaveClassName } from "../../core/types/IHaveClassName";

export interface ICardProps extends IHaveClassName {
  children?: ReactNode;
  onClick?: () => void;
}
