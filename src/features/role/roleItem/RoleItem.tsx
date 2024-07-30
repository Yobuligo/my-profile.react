import { Card } from "../../../components/card/Card";
import { NotSupportedError } from "../../../core/errors/NotSupportedError";
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

  return <Card className={styles.roleItem}>{getRoleTitle(props.role)}</Card>;
};
