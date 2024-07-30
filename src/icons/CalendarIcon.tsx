import { ReactComponent as SVG } from "../assets/calendar.svg";
import { IIconProps } from "./core/IIconProps";
import { Icon } from "./core/Icon";

export const CalendarIcon: React.FC<IIconProps> = (props) => {
  return <Icon SVG={SVG} {...props} />;
};
