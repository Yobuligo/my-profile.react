import { NotSupportedError } from "../../../core/errors/NotSupportedError";
import { style } from "../../../core/utils/style";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { Role } from "../../../model/Role";
import { IRoleListProps } from "./IRoleListProps";
import styles from "./RoleList.module.scss";

export const RoleList: React.FC<IRoleListProps> = (props) => {
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

  const toText = () =>
    props.roles.map((role) => getRoleTitle(role)).join(" | ");

  return (
    <div className={style(styles.roleList, props.className)}>{toText()}</div>
  );
};
