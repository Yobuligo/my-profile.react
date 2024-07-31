import { ReactComponent as SVG } from "../../assets/logos/app-logo.svg";
import { Icon } from "../core/Icon";
import { IIconProps } from "../core/IIconProps";

export const AppLogo: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
