import { ReactComponent as SVG } from "../../assets/logos/typescript.svg";
import { Icon } from "../core/Icon";
import { IIconProps } from "../core/IIconProps";

export const TypeScriptLogo: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
