import { ReactComponent as SVG } from "../../assets/logos/postgresql.svg";
import { Icon } from "../core/Icon";
import { IIconProps } from "../core/IIconProps";

export const PostgreSQLLogo: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
