import { ReactComponent as SVG } from "../../assets/logos/turbo-pascal.svg";
import { Icon } from "../core/Icon";
import { IIconProps } from "../core/IIconProps";

export const TurboPascalLogo: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
