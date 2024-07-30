import { ReactComponent as SVG } from "../../assets/logos/css.svg";
import { Icon } from "../core/Icon";
import { IIconProps } from "../core/IIconProps";

export const CSSLogo: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
