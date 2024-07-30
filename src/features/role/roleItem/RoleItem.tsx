import { Card } from "../../../components/card/Card";
import { NotSupportedError } from "../../../core/errors/NotSupportedError";
import { style } from "../../../core/utils/style";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { Role } from "../../../model/Role";
import { IRoleItemProps } from "./IRoleItemProps";
import styles from "./RoleItem.module.scss";

export const RoleItem: React.FC<IRoleItemProps> = (props) => {
  const { t } = useTranslation();

  const getRoleTitle = (role: Role): string => {
    switch (role) {
      case Role.DEVELOPER:
        return t(texts.role.developer);
      case Role.JUNIOR_DEVELOPER:
        return t(texts.role.juniorDeveloper);
      case Role.LEAD_DEVELOPER:
        return t(texts.role.leadDeveloper);
      case Role.SENIOR_DEVELOPER:
        return t(texts.role.seniorDeveloper);
      case Role.SOFTWARE_ARCHITECT:
        return t(texts.role.softwareArchitect);
      default:
        throw new NotSupportedError(
          `Error while fetching role text. Role ${role} is not supported`
        );
    }
  };

  const getClassName = (role: Role): string => {
    switch (role) {
      case Role.DEVELOPER:
        return styles.developer;
      case Role.JUNIOR_DEVELOPER:
        return styles.juniorDeveloper;
      case Role.LEAD_DEVELOPER:
        return styles.leadDeveloper;
      case Role.SENIOR_DEVELOPER:
        return styles.seniorDeveloper;
      case Role.SOFTWARE_ARCHITECT:
        return styles.softwareArchitect;
      default:
        throw new NotSupportedError(
          `Error while fetching role class name. Role ${role} is not supported`
        );
    }
  };

  return (
    <Card className={style(getClassName(props.role), styles.roleItem)}>
      {getRoleTitle(props.role)}
    </Card>
  );
};
