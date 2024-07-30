import { ReactComponent as SVG } from "../../assets/logos/react.svg";
import { Icon } from "../core/Icon";
import { IIconProps } from "../core/IIconProps";

export const ReactLogo: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
