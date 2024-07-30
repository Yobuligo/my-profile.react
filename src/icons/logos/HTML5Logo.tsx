import { ReactComponent as SVG } from "../../assets/logos/html5.svg";
import { Icon } from "../core/Icon";
import { IIconProps } from "../core/IIconProps";

export const HTML5Logo: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
